import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Waitlist from "@/models/Waitlist";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Initialize the Upstash Redis instance using your environment variables
const redis = Redis.fromEnv();

// Create a ratelimiter that allows 3 requests per 1 minute window per IP
const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(1, "1 m"),
  analytics: true,
});

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

    await connectDB();

    const existing = await Waitlist.findOne({ email });
    if (existing) {
      return NextResponse.json({ error: "Already registered" }, { status: 409 });
    }

    await Waitlist.create({ email });
    return NextResponse.json({ success: true }, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}