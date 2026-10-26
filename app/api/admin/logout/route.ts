import { NextResponse } from "next/server";
import { clearAdminSessionCookie, isSameOriginRequest } from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ message: "Request could not be verified." }, { status: 403 });
  }

  clearAdminSessionCookie();
  return NextResponse.json({ authenticated: false });
}
