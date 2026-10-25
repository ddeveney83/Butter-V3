import type { ServiceDetail } from "../content/service-details";
import type { PublicationStatus } from "../content/routes";
import { canonicalOrigin, siteConfig } from "./site-config";

// Never expose draft service copy as approved structured data.
export function serviceSchema(
  service: ServiceDetail,
  status: PublicationStatus,
  origin = canonicalOrigin(),
) {
  if (status !== "published" || !origin) return [];
  const url = new URL(`/services/${service.slug}`, origin).href;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.description,
      url,
      provider: { "@type": "Organization", name: siteConfig.name, url: origin },
      areaServed: siteConfig.serviceAreas.map((name) => ({
        "@type": "Place",
        name,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: origin + "/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: origin + "/services",
        },
        { "@type": "ListItem", position: 3, name: service.title, item: url },
      ],
    },
  ];
}
