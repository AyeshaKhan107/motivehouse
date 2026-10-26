import { createHash } from "node:crypto";

type Entry = { count: number; resetAt: number };

const attempts = new Map<string, Entry>();
let requestsSinceCleanup = 0;

export function checkRateLimit(
  request: Request,
  namespace: string,
  limit: number,
  windowMs: number,
) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const forwardedAddresses = forwardedFor?.split(",");
  const address =
    request.headers.get("x-real-ip")?.trim() ||
    forwardedAddresses?.[forwardedAddresses.length - 1]?.trim() ||
    "unknown";
  const key = createHash("sha256")
    .update(`${namespace}:${address}`)
    .digest("hex");
  const now = Date.now();
  const current = attempts.get(key);

  requestsSinceCleanup += 1;
  if (requestsSinceCleanup >= 100) {
    requestsSinceCleanup = 0;
    for (const [entryKey, entry] of attempts) {
      if (entry.resetAt <= now) attempts.delete(entryKey);
    }
  }

  if (!current || current.resetAt <= now) {
    if (attempts.size >= 10_000) {
      return { allowed: false, retryAfter: Math.ceil(windowMs / 1000) };
    }
    attempts.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfter: 0 };
  }

  if (current.count >= limit) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { allowed: true, retryAfter: 0 };
}
