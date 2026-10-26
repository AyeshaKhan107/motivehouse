import { NextResponse } from "next/server";
import {
  createAdminSession,
  isSameOriginRequest,
  isAdminConfigured,
  setAdminSessionCookie,
  verifyAdminPassword,
} from "@/lib/admin-auth";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ message: "Request could not be verified." }, { status: 403 });
  }

  const rate = checkRateLimit(request, "admin-login", 5, 15 * 60 * 1000);
  if (!rate.allowed) {
    return NextResponse.json(
      { message: "Too many sign-in attempts. Please wait before trying again." },
      { status: 429, headers: { "Retry-After": String(rate.retryAfter) } },
    );
  }

  if (!isAdminConfigured()) {
    return NextResponse.json(
      { message: "Admin access is not configured on this deployment." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Enter your admin password." }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("password" in body) ||
    typeof body.password !== "string" ||
    body.password.length > 1024 ||
    !verifyAdminPassword(body.password)
  ) {
    return NextResponse.json({ message: "The password was not recognized." }, { status: 401 });
  }

  const session = createAdminSession();
  setAdminSessionCookie(session.value, session.expiresAt);
  return NextResponse.json({ authenticated: true });
}
