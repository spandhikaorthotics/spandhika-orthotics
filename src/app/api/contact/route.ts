import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import ContactInquiry from "@/models/Contact";

export async function POST(req: Request) {
  try {
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
