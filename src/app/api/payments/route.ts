import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { projectId, amount, gateway } = await req.json();

    if (!projectId || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const session_id = `PAY-SESSION-${Math.floor(Math.random() * 900000) + 100000}`;
    const mockCheckoutUrl = `/dashboard?purchase=${projectId}&payment_id=${session_id}`;

    return NextResponse.json({
      success: true,
      gateway: gateway || "RAZORPAY",
      sessionId: session_id,
      amount,
      checkoutUrl: mockCheckoutUrl
    });
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
