import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Waitlist from "@/models/Waitlist";

export async function POST(req: NextRequest) {
  try {
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