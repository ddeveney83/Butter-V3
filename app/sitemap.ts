import type { MetadataRoute } from "next";
// No approved public routes in Phase 0. Do not expose development scaffolds.
export default function sitemap(): MetadataRoute.Sitemap {
  return [];
}
