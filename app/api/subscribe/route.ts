import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const interests = Array.isArray(body.interests)
      ? body.interests.filter(
          (v: unknown) =>
            v === "Shraddha Woolen DIY Creations" ||
            v === "Rohit Rathore Official",
        )
      : [];
    const consent = body.consent === true;

    // Honeypot: bots often fill hidden fields; reject without storing anything.
    if (body.website)
      return NextResponse.json(
        { error: "Unable to process this request." },
        { status: 400 },
      );
    if (!emailPattern.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }
    if (!consent)
      return NextResponse.json(
        { error: "Please agree to receive email updates." },
        { status: 400 },
      );
    if (interests.length === 0)
      return NextResponse.json(
        { error: "Please select at least one channel." },
        { status: 400 },
      );

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("email_subscribers")
      .insert({ email, interests, consent_at: new Date().toISOString() })
      .select("id")
      .single();

    if (error?.code === "23505") {
      return NextResponse.json({
        ok: true,
        alreadySubscribed: true,
        conversionEligible: false,
      });
    }
    if (error) {
      console.error("Subscription insert failed:", error.message);
      return NextResponse.json(
        {
          error: "We could not save your subscription. Please try again later.",
        },
        { status: 500 },
      );
    }
    return NextResponse.json({
      ok: true,
      alreadySubscribed: false,
      conversionEligible: Boolean(data?.id),
    });
  } catch (error) {
    console.error("Subscription API error:", error);
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 },
    );
  }
}
