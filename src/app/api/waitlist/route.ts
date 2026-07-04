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
        subject: "You're on the list! Welcome to SAARTHI.",
        html: `
          <div style="font-family: sans-serif; color: #022c22; max-w: 600px; margin: 0 auto;">
            <h2 style="color: #10b981;">Your spot is confirmed! 🎉</h2>
            <p>Hi there,</p>
            <p>Thank you for joining the waitlist for SAARTHI by Spandhika Orthotics. We're thrilled to have you on board.</p>
            <p>You are now officially in line to be among the first to experience our smart orthotic insoles. We are working hard preparing for our launch, and we will keep you updated on our progress, exclusive previews, and when you can claim yours.</p>
            <p>Better movement starts from your feet, and we can't wait to share this journey with you.</p>
            <br/>
            <p>Best regards,</p>
            <p><strong>The Spandhika Team</strong></p>
          </div>
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