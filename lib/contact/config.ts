import { z } from "zod";

const email = z
  .email()
  .max(254)
  .refine((value) => !/[\r\n]/.test(value));
export function publicContactEmail(value = process.env.CONTACT_PUBLIC_EMAIL) {
  const result = email.safeParse(value?.trim());
  return result.success ? result.data : null;
}
export function contactConfig(
  env: Record<string, string | undefined> = process.env,
) {
  if (env.CONTACT_ENABLED !== "true") return null;
  const from = email.safeParse(env.CONTACT_FROM_EMAIL);
  const to = email.safeParse(env.CONTACT_TO_EMAIL);
  if (
    !from.success ||
    !to.success ||
    !env.RESEND_API_KEY?.startsWith("re_") ||
    env.RESEND_API_KEY.length < 12 ||
    !env.CONTACT_RATE_LIMIT_SECRET ||
    env.CONTACT_RATE_LIMIT_SECRET.length < 32
  )
    return null;
  return {
    from: from.data,
    to: to.data,
    apiKey: env.RESEND_API_KEY,
    rateLimitSecret: env.CONTACT_RATE_LIMIT_SECRET,
    trustedProxy:
      env.CONTACT_TRUSTED_PROXY === "netlify" ? ("netlify" as const) : null,
  };
}
export type ContactConfig = NonNullable<ReturnType<typeof contactConfig>>;
