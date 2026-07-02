import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { bookingFormSchema } from "@/lib/validations/forms";
import { sendBookingEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = bookingFormSchema.parse(body);
    await sendBookingEmail(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.flatten() },
        { status: 400 },
      );
    }

    console.error("Booking form email error:", error);
    return NextResponse.json(
      { error: "Failed to send booking request. Please try again later." },
      { status: 500 },
    );
  }
}
