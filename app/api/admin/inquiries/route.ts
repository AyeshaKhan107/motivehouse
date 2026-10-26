import { NextResponse } from "next/server";
import {
  hasAdminSession,
  isSameOriginRequest,
} from "@/lib/admin-auth";
import {
  INQUIRY_STATUSES,
  Inquiry,
} from "@/lib/models/Inquiry";
import { connectToDatabase } from "@/lib/mongodb";

export const runtime = "nodejs";

export async function GET(request: Request) {
  if (!hasAdminSession()) {
    return NextResponse.json({ message: "Sign in to view inquiries." }, { status: 401 });
  }

  try {
    await connectToDatabase();
    const url = new URL(request.url);
    const status = url.searchParams.get("status") || "";
    const search = (url.searchParams.get("q") || "").trim().slice(0, 100);
    const filter: Record<string, unknown> = {};

    if (
      status &&
      INQUIRY_STATUSES.includes(status as (typeof INQUIRY_STATUSES)[number])
    ) {
      filter.status = status;
    }

    if (search) {
      const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const pattern = new RegExp(escaped, "i");
      filter.$or = [
        { firstName: pattern },
        { lastName: pattern },
        { name: pattern },
        { email: pattern },
        { service: pattern },
        { details: pattern },
      ];
    }

    const inquiries = await Inquiry.find(filter)
      .sort({ createdAt: -1 })
      .limit(200)
      .select("firstName lastName name email phone company service budget details status createdAt")
      .lean();

    return NextResponse.json(
      { inquiries },
      { headers: { "Cache-Control": "private, no-store" } },
    );
  } catch (error) {
    console.error("Unable to load admin inquiries:", error);
    return NextResponse.json(
      { message: "Unable to load inquiries. Check the database configuration." },
      { status: 503 },
    );
  }
}

export async function PATCH(request: Request) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ message: "Request could not be verified." }, { status: 403 });
  }
  if (!hasAdminSession()) {
    return NextResponse.json({ message: "Sign in to update inquiries." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid update request." }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("id" in body) ||
    typeof body.id !== "string" ||
    !("status" in body) ||
    typeof body.status !== "string" ||
    !INQUIRY_STATUSES.includes(body.status as (typeof INQUIRY_STATUSES)[number])
  ) {
    return NextResponse.json({ message: "Select a valid inquiry status." }, { status: 400 });
  }

  try {
    await connectToDatabase();
    const inquiry = await Inquiry.findByIdAndUpdate(
      body.id,
      { status: body.status },
      { new: true, runValidators: true },
    )
      .select("firstName lastName name email phone company service budget details status createdAt")
      .lean();

    if (!inquiry) {
      return NextResponse.json({ message: "Inquiry not found." }, { status: 404 });
    }
    return NextResponse.json({ inquiry });
  } catch (error) {
    console.error("Unable to update inquiry status:", error);
    return NextResponse.json(
      { message: "Unable to update inquiry. Please try again." },
      { status: 503 },
    );
  }
}
