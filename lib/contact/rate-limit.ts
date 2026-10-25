import { createHmac } from "node:crypto";
import { isIP } from "node:net";
import type { ContactConfig } from "./config";

// Bounded per-process protection. Configure an edge/global limit before multi-instance launch.
// No IP addresses or enquiry fields are stored; keyed digests expire after 15 minutes.
export class ContactRateLimiter {
  private buckets = new Map<string, { count: number; expires: number }>();
  constructor(private readonly now = Date.now) {}
  check(key: string, limit = 5) {
    const now = this.now();
    for (const [id, bucket] of this.buckets)
      if (bucket.expires <= now) this.buckets.delete(id);
    const bucket = this.buckets.get(key);
    if (bucket && bucket.count >= limit)
      return Math.max(1, Math.ceil((bucket.expires - now) / 1000));
    if (!bucket && this.buckets.size >= 10000) return 900;
    this.buckets.set(key, {
      count: (bucket?.count ?? 0) + 1,
      expires: bucket?.expires ?? now + 900000,
    });
    return 0;
  }
}
export function contactRateKey(request: Request, config: ContactConfig | null) {
  // Only this explicitly selected platform header is trusted. Never use arbitrary forwarded-for.
  const candidate =
    config?.trustedProxy === "netlify"
      ? request.headers.get("x-nf-client-connection-ip")
      : null;
  const identity =
    candidate && isIP(candidate) ? candidate : "shared-unidentified";
  return config
    ? createHmac("sha256", config.rateLimitSecret)
        .update(identity)
        .digest("hex")
    : "unconfigured";
}
