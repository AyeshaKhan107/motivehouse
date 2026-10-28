import { NextResponse } from "next/server";
import {
  INQUIRY_SERVICES,
  Inquiry,
} from "@/lib/models/Inquiry";
import { connectToDatabase } from "@/lib/mongodb";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readString(
  value: unknown,
  maxLength: number,
  required = false,
): string | null {
  if (value === undefined && !required) return "";
  if (typeof value !== "string") return null;
  const clean = value.trim();
  if (clean.length > maxLength || (required && clean.length === 0)) return null;
  return clean;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 32_000) {
    return NextResponse.json(
      { message: "The inquiry is too large. Please shorten the project details." },
      { status: 413 },
    );
  }

  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).origin !== new URL(request.url).origin) {
        return NextResponse.json(
          { message: "The request could not be verified." },
          { status: 403 },
        );
      }
    } catch {
      return NextResponse.json(
        { message: "The request could not be verified." },
        { status: 403 },
      );
    }
  }

  const rate = checkRateLimit(request, "contact", 5, 10 * 60 * 1000);
  if (!rate.allowed) {
    return NextResponse.json(
      { message: "Too many inquiries. Please try again in a few minutes." },
      {
        status: 429,
        headers: { "Retry-After": String(rate.retryAfter) },
      },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Please check the form and try again." },
      { status: 400 },
    );
  }

  if (!isRecord(body)) {
    return NextResponse.json(
      { message: "Please check the form and try again." },
      { status: 400 },
    );
  }

  const honeypot = readString(body.website, 200);
  if (honeypot === null) {
    return NextResponse.json(
      { message: "Please check the form and try again." },
      { status: 400 },
    );
  }
  if (honeypot.length > 0) {
    return NextResponse.json(
      { message: "We couldn’t verify this inquiry. Please try again." },
      { status: 400 },
    );
  }

  const firstName = readString(body.firstName, 50, true);
  const lastName = readString(body.lastName, 50, true);
  const email = readString(body.email, 254, true);
  const phone = readString(body.phone, 40, true);
  const service = readString(body.service, 60, true);
  const details = readString(body.details, 5000, true);

  if (
    firstName === null ||
    lastName === null ||
    email === null ||
    !emailPattern.test(email) ||
    phone === null ||
    service === null ||
    !INQUIRY_SERVICES.includes(
      service as (typeof INQUIRY_SERVICES)[number],
    ) ||
    details === null
  ) {
    return NextResponse.json(
      { message: "Please check the form fields and try again." },
      { status: 400 },
    );
  }

  try {
    await connectToDatabase();
    await Inquiry.create({
      firstName,
      lastName,
      email,
      phone,
      service,
      details,
    });
    return NextResponse.json(
      {
        message:
          "Thank you for contacting Motive House! We have received your message and will respond to you shortly.",
      },
      { status: 201 },
    );
  } catch {
    console.error("Unable to save contact inquiry.");
    return NextResponse.json(
      {
        message: "We couldn’t submit your message right now. Please try again.",
      },
      { status: 503 },
    );
  }
}
