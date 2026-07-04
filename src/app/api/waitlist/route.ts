import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Waitlist from "@/models/Waitlist";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import disposableDomains from "disposable-email-domains";
import { Resend } from "resend";

// Initialize the Upstash Redis instance using your environment variables
const redis = Redis.fromEnv();

// Create a ratelimiter that allows 1 request per 1 minute window per IP
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(1, "1 m"),
  analytics: true,
});

// 2. Initialize Resend using your environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // 1. Get the IP address for rate limiting
    // Vercel forwards the real IP in the 'x-forwarded-for' header
    const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
    
    // 2. Check the rate limit
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // 3. Process the Waitlist Data
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // 4. Block disposable/temporary email addresses
    const domain = email.split("@")[1]?.toLowerCase();
    if (disposableDomains.includes(domain)) {
      return NextResponse.json(
        { error: "Please use a valid, permanent email address." },
        { status: 400 }
      );
    }

    // 5. Save to Database
    await connectDB();

    const existing = await Waitlist.findOne({ email });
    if (existing) {
      return NextResponse.json({ error: "Already registered" }, { status: 409 });
    }

    await Waitlist.create({ email });

    // 6. Send the Confirmation Email via Resend
    try {
      await resend.emails.send({
        from: "Spandhika Orthotics <team@spandhikaorthotics.in>",
        to: email,
        subject: "You're on the SAARTHI waitlist",
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to SAARTHI</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f5; padding:32px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; max-width:600px;">

          <!-- Header -->
          <tr>
            <td style="background-color:#022c22; padding:28px 40px;">
              <span style="color:#ffffff; font-size:18px; font-weight:600; letter-spacing:0.5px;">
                SPANDHIKA ORTHOTICS
              </span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 24px 40px;">
              <p style="margin:0 0 4px 0; font-size:13px; font-weight:600; letter-spacing:1px; color:#10b981; text-transform:uppercase;">
                Waitlist confirmed
              </p>
              <h1 style="margin:0 0 24px 0; font-size:22px; color:#022c22; font-weight:600;">
                You're on the list for SAARTHI
              </h1>
              <p style="margin:0 0 16px 0; font-size:15px; line-height:1.6; color:#374151;">
                Hi there,
              </p>
              <p style="margin:0 0 16px 0; font-size:15px; line-height:1.6; color:#374151;">
                Thank you for joining the waitlist for SAARTHI by Spandhika Orthotics. You've secured your place to be among the first to experience our smart orthotic insoles.
              </p>
              <p style="margin:0 0 16px 0; font-size:15px; line-height:1.6; color:#374151;">
                We're currently finalizing preparations for launch and will keep you updated with progress notes, early previews, and instructions for claiming your pair when the time comes.
              </p>
              <p style="margin:0 0 24px 0; font-size:15px; line-height:1.6; color:#374151;">
                Better movement starts from the ground up — we're glad to have you with us on this journey.
              </p>
              <p style="margin:0; font-size:15px; line-height:1.6; color:#374151;">
                Best regards,<br />
                <strong style="color:#022c22;">The Spandhika Team</strong>
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <hr style="border:none; border-top:1px solid #e5e7eb; margin:0;" />
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px 32px 40px;">
              <p style="margin:0; font-size:12px; line-height:1.6; color:#9ca3af;">
                You're receiving this email because you signed up for the SAARTHI waitlist at spandhikaorthotics.in.
              </p>
              <p style="margin:8px 0 0 0; font-size:12px; color:#9ca3af;">
                &copy; ${new Date().getFullYear()} Spandhika Orthotics. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `,
      });
    } catch (emailError) {
      // Catch this separately so a failed email doesn't crash the API response
      // if the user was already successfully added to the database.
      console.error("Failed to send welcome email:", emailError);
    }

    return NextResponse.json({ success: true }, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}