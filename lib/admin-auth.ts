import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "mh_admin_session";
const SESSION_SECONDS = 60 * 60 * 8;

function getSessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("ADMIN_SESSION_SECRET must contain at least 32 characters.");
  }
  return secret;
}

export function isAdminConfigured() {
  return Boolean(
    process.env.ADMIN_PASSWORD &&
      process.env.ADMIN_SESSION_SECRET &&
      process.env.ADMIN_SESSION_SECRET.length >= 32,
  );
}

export function verifyAdminPassword(password: string) {
  const configuredPassword = process.env.ADMIN_PASSWORD;
  if (!configuredPassword) return false;
  const actual = createHmac("sha256", getSessionSecret()).update(password).digest();
  const expected = createHmac("sha256", getSessionSecret())
    .update(configuredPassword)
    .digest();
  return timingSafeEqual(actual, expected);
}

function sign(value: string) {
  return createHmac("sha256", getSessionSecret())
    .update(value)
    .digest("base64url");
}

export function createAdminSession() {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  const payload = `${expiresAt}.${randomBytes(24).toString("base64url")}`;
  return {
    value: `${payload}.${sign(payload)}`,
    expiresAt: new Date(expiresAt * 1000),
  };
}

export function setAdminSessionCookie(value: string, expiresAt: Date) {
  cookies().set(COOKIE_NAME, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/api/admin",
    expires: expiresAt,
  });
}

export function clearAdminSessionCookie() {
  cookies().set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/api/admin",
    expires: new Date(0),
  });
}

export function hasAdminSession() {
  try {
    const value = cookies().get(COOKIE_NAME)?.value;
    if (!value) return false;
    const [expiresAt, nonce, signature, extra] = value.split(".");
    if (!expiresAt || !nonce || !signature || extra) return false;
    if (!/^\d+$/.test(expiresAt)) return false;
    if (Number(expiresAt) <= Math.floor(Date.now() / 1000)) return false;
    const payload = `${expiresAt}.${nonce}`;
    const expected = Buffer.from(sign(payload));
    const actual = Buffer.from(signature);
    return (
      expected.length === actual.length &&
      timingSafeEqual(expected, actual)
    );
  } catch {
    return false;
  }
}

export function isSameOriginRequest(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    const requestUrl = new URL(request.url);
    const originUrl = new URL(origin);
    return (
      originUrl.origin === requestUrl.origin &&
      requestUrl.host === request.headers.get("host")
    );
  } catch {
    return false;
  }
}
