import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { companyName, contactPerson, email, phone, industry, timeline, budget, message } = body;

    if (!companyName || !contactPerson || !email || !phone || !industry || !timeline || !budget || !message) {
      return NextResponse.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    console.log("Received consultation request:", body);

    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (error) {
    console.error("Consultation request submission error:", error);
    return NextResponse.json(
      { error: "Unable to process consultation request." },
      { status: 500 }
    );
  }
}
