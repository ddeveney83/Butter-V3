import type { MetadataRoute } from "next";
import { publishedRoutes } from "@/content/routes";
import { canonicalOrigin } from "@/lib/site-config";
import { publishedInsights } from "@/lib/insights";
import { publishedCases } from "@/lib/work";
// No URLs qualify yet. Review routes, drafts and unconfigured origins fail closed.
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = canonicalOrigin();
  if (!origin) return [];
  const routes = publishedRoutes();
  const paths = routes.map((route) => route.path);
  return [
    ...paths.map((path) => ({ url: `${origin}${path}` })),
    ...(paths.includes("/insights")
      ? publishedInsights().map((entry) => ({
          url: `${origin}/insights/${entry.slug}`,
          lastModified: entry.updatedOn ?? entry.publishedOn,
        }))
      : []),
    ...(paths.includes("/work")
      ? publishedCases().map((entry) => ({
          url: `${origin}/work/${entry.slug}`,
        }))
      : []),
  ];
}
