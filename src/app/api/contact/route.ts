import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import ContactInquiry from "@/models/Contact";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import disposableDomains from "disposable-email-domains";
import { Resend } from "resend";

const redis = Redis.fromEnv();
const resend = new Resend(process.env.RESEND_API_KEY);

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(3, "1 h"),
  analytics: true,
});

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
    const { success } = await ratelimit.limit(ip);
    
    if (!success) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await req.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const domain = email.split("@")[1]?.toLowerCase();
    if (disposableDomains.includes(domain)) {
      return NextResponse.json({ error: "Please use a valid, permanent email address." }, { status: 400 });
    }

    await connectDB();
    const inquiry = await ContactInquiry.create(body);

    // 1. Send confirmation email to the USER
    try {
      await resend.emails.send({
        from: "Spandhika Orthotics <team@spandhikaorthotics.in>",
        to: email,
        subject: "We've received your message | Spandhika Orthotics",
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We've received your message</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f5; padding:32px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; max-width:600px;">

          <!-- Header -->
          <tr>
            <td style="background-color:#d1fae5; padding:24px 40px;" align="center">
              <table role="presentation" cellpadding="0" cellspacing="0" align="center">
                <tr>
                  <td style="vertical-align:middle; padding-right:10px;">
                    <img src="https://spandhikaorthotics.in/SO_Logo.png" alt="Spandhika Orthotics" width="32" height="32" style="display:block; border-radius:4px;" />
                  </td>
                  <td style="vertical-align:middle;">
                    <span style="color:#022c22; font-size:18px; font-weight:600; letter-spacing:0.5px;">
                      SPANDHIKA ORTHOTICS
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 24px 40px;">
              <p style="margin:0 0 4px 0; font-size:13px; font-weight:600; letter-spacing:1px; color:#10b981; text-transform:uppercase;">
                Message received
              </p>
              <h1 style="margin:0 0 24px 0; font-size:22px; color:#022c22; font-weight:600;">
                Thanks for reaching out, ${body.fullName || "there"}
              </h1>
              <p style="margin:0 0 16px 0; font-size:15px; line-height:1.6; color:#374151;">
                We've received your message and our team is currently reviewing it. A member of our team will get back to you shortly.
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf9; border-left:3px solid #10b981; margin:0 0 24px 0;">
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0; font-size:14px; line-height:1.6; color:#065f46;">
                      Expected response time: within 24–48 hours.
                    </p>
                  </td>
                </tr>
              </table>
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
                You're receiving this email because you submitted an inquiry at spandhikaorthotics.in.
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
    } catch (err) {
      console.error("User confirmation email failed:", err);
    }

    // 2. Send alert email to YOUR TEAM
    try {
      const extraFieldsRows = body.type === 'sales'
        ? `
          <tr>
            <td style="padding:6px 0; font-size:14px; color:#6b7280; width:140px;">Organization</td>
            <td style="padding:6px 0; font-size:14px; color:#111827;">${body.organization || "—"}</td>
          </tr>
          <tr>
            <td style="padding:6px 0; font-size:14px; color:#6b7280;">Country</td>
            <td style="padding:6px 0; font-size:14px; color:#111827;">${body.country || "—"}</td>
          </tr>
          <tr>
            <td style="padding:6px 0; font-size:14px; color:#6b7280;">Interest</td>
            <td style="padding:6px 0; font-size:14px; color:#111827;">${body.interest || "—"}</td>
          </tr>
        `
        : body.type === 'support'
        ? `
          <tr>
            <td style="padding:6px 0; font-size:14px; color:#6b7280; width:140px;">Service</td>
            <td style="padding:6px 0; font-size:14px; color:#111827;">${body.service || "—"}</td>
          </tr>
          <tr>
            <td style="padding:6px 0; font-size:14px; color:#6b7280;">Issue category</td>
            <td style="padding:6px 0; font-size:14px; color:#111827;">${body.issueCategory || "—"}</td>
          </tr>
          <tr>
            <td style="padding:6px 0; font-size:14px; color:#6b7280;">Priority</td>
            <td style="padding:6px 0; font-size:14px; color:#111827;">${body.priority || "—"}</td>
          </tr>
          <tr>
            <td style="padding:6px 0; font-size:14px; color:#6b7280;">Account ID</td>
            <td style="padding:6px 0; font-size:14px; color:#111827;">${body.accountId || "N/A"}</td>
          </tr>
        `
        : '';

      await resend.emails.send({
        from: "Spandhika Orthotics <team@spandhikaorthotics.in>",
        to: ["spandhikaorthotics@gmail.com"],
        replyTo: body.email,
        subject: `New ${body.type?.toUpperCase() || "GENERAL"} Inquiry — ${body.fullName}`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Inquiry</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f5; padding:32px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; max-width:600px;">

          <!-- Header -->
          <tr>
            <td style="background-color:#d1fae5; padding:20px 40px;">
              <span style="color:#022c22; font-size:15px; font-weight:600; letter-spacing:0.5px;">
                NEW ${body.type?.toUpperCase() || "GENERAL"} INQUIRY
              </span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:6px 0; font-size:14px; color:#6b7280; width:140px;">Name</td>
                  <td style="padding:6px 0; font-size:14px; color:#111827;">${body.fullName}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0; font-size:14px; color:#6b7280;">Email</td>
                  <td style="padding:6px 0; font-size:14px; color:#111827;">${body.email}</td>
                </tr>
                ${extraFieldsRows}
              </table>

              <hr style="border:none; border-top:1px solid #e5e7eb; margin:0 0 20px 0;" />

              <p style="margin:0 0 8px 0; font-size:13px; font-weight:600; letter-spacing:0.5px; color:#6b7280; text-transform:uppercase;">
                Message
              </p>
              <p style="margin:0; font-size:14px; line-height:1.6; color:#111827; white-space:pre-wrap;">
                ${body.message || 'No message provided.'}
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:16px 40px 24px 40px; background-color:#f9fafb;">
              <p style="margin:0; font-size:12px; color:#9ca3af;">
                Reply directly to this email to respond to ${body.fullName}.
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
    } catch (err) {
      console.error("Team alert email failed:", err);
    }

    return NextResponse.json({ success: true, id: inquiry._id }, { status: 201 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}