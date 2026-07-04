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
    const { name, email, message } = body;

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
          <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h2 style="color: #059669;">Message Received! 📩</h2>
            <p>Hi ${name},</p>
            <p>Thank you for reaching out to <strong>Spandhika Orthotics</strong>. We have received your inquiry and our team is currently reviewing it.</p>
            <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #10b981; margin: 20px 0;">
              <p>We aim to respond to all inquiries within 24-48 hours.</p>
            </div>
            <p>Best regards,<br><strong>The Spandhika Team</strong></p>
          </div>
        `,
      });
    } catch (err) {
      console.error("User confirmation email failed:", err);
    }

    // 2. Send alert email to YOUR TEAM
    // 2. Send alert email to YOUR TEAM
try {
  // Build a dynamic string for the extra fields based on the type ('sales' or 'support')
  const extraFields = body.type === 'sales' 
    ? `
      <p><strong>Organization:</strong> ${body.organization}</p>
      <p><strong>Country:</strong> ${body.country}</p>
      <p><strong>Interest:</strong> ${body.interest}</p>
    ` 
    : body.type === 'support' 
    ? `
      <p><strong>Service:</strong> ${body.service}</p>
      <p><strong>Issue:</strong> ${body.issueCategory}</p>
      <p><strong>Priority:</strong> ${body.priority}</p>
      <p><strong>Account ID:</strong> ${body.accountId || 'N/A'}</p>
    ` 
    : '';

  await resend.emails.send({
    from: "Spandhika Orthotics <team@spandhikaorthotics.in>",
    to: ["spandhikaorthotics@gmail.com"],
    replyTo: body.email,
    subject: `New ${body.type.toUpperCase()} Inquiry: ${body.fullName}`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
        <h2 style="color: #059669;">New ${body.type} Inquiry</h2>
        <p><strong>Name:</strong> ${body.fullName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <hr/>
        ${extraFields}
        <p><strong>Message:</strong><br>${body.message || 'No message provided.'}</p>
      </div>
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