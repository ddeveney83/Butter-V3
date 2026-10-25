export const siteConfig = {
  name: "Butter",
  description:
    "Independent digital learning studio based in Devon, working across the South West and UK-wide.",
  location: "Devon",
  serviceAreas: ["Devon", "South West England", "United Kingdom"],
  contactEmail: null,
  socialLinks: [],
} as const;

export function canonicalOrigin(
  value = process.env.SITE_URL,
): string | undefined {
  if (!value?.trim()) return undefined;
  const url = new URL(value);
  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "SITE_URL must be an approved HTTPS origin without credentials, path, query or fragment.",
    );
  }
  return url.origin;
}
