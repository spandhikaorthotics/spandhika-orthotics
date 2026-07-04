import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import ContactInquiry from "@/models/Contact";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Initialize the Upstash Redis instance
const redis = Redis.fromEnv();

// Create a ratelimiter (currently set to 3 requests per 1 minute)
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(3, "1 h"),
  analytics: true,
});

export async function POST(req: Request) {
  try {
    // 1. Get the IP address for rate limiting
    const ip = req.headers.get("x-forwarded-for") ?? "127.0.0.1";
    
    // 2. Check the rate limit
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    await connectDB();
    const body = await req.json();
    const inquiry = await ContactInquiry.create(body);

    return NextResponse.json(
      { success: true, message: "Inquiry received!", id: inquiry._id },
      { status: 201 },
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save inquiry" },
      { status: 500 },
    );
  }
}