import { aboutContent, type FounderProfile } from "../content/about";
import type { PublicationStatus } from "../content/routes";
import { canonicalOrigin, siteConfig } from "./site-config";

export function approvedFounder(
  profile = aboutContent.founder,
): FounderProfile | null {
  if (
    !profile ||
    ![
      profile.name,
      profile.role,
      profile.approval,
      profile.portrait.alt,
      profile.portrait.rights,
    ].every((value) => value.trim()) ||
    !profile.biography.length ||
    !profile.biography.every((paragraph) => paragraph.trim()) ||
    !profile.portrait.src.startsWith("/assets/people/") ||
    profile.portrait.src.includes("..")
  )
    return null;
  return profile;
}
// Organization only: locality alone does not establish LocalBusiness/GBP eligibility.
export function aboutStructuredData(
  status: PublicationStatus,
  origin = canonicalOrigin(),
  profile = aboutContent.founder,
) {
  if (status !== "published" || !origin) return [];
  const founder = approvedFounder(profile);
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      description: siteConfig.description,
      url: origin,
      areaServed: siteConfig.serviceAreas.map((name) => ({
        "@type": "Place",
        name,
      })),
      ...(founder
        ? {
            founder: {
              "@type": "Person",
              name: founder.name,
              jobTitle: founder.role,
              description: founder.biography.join(" "),
              image: new URL(founder.portrait.src, origin).href,
            },
          }
        : {}),
    },
  ];
}
