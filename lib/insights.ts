import { insights, type Insight } from "../content/insights";
import { services } from "../content/services";
import { canonicalOrigin } from "./site-config";
import { placeholderImages } from "../content/placeholder-images";

const nonempty = (value: string) => Boolean(value.trim());
function validDate(value: string | undefined, today: string) {
  return Boolean(
    value &&
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    !Number.isNaN(Date.parse(value)) &&
    new Date(value).toISOString().slice(0, 10) === value &&
    value <= today,
  );
}
export function isPublishableInsight(
  entry: Insight,
  today = new Date().toISOString().slice(0, 10),
) {
  return (
    entry.status === "published" &&
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.slug) &&
    [
      entry.title,
      entry.summary,
      entry.answer,
      entry.approval.owner,
      entry.approval.author,
      entry.author.name,
      entry.author.biography,
      entry.author.approval,
    ].every(nonempty) &&
    validDate(entry.publishedOn, today) &&
    (!entry.updatedOn ||
      (validDate(entry.updatedOn, today) &&
        entry.updatedOn >= entry.publishedOn!)) &&
    Boolean(
      entry.image &&
      (entry.image.temporary
        ? entry.image.src === placeholderImages[entry.image.temporary]?.src
        : entry.image.src.startsWith("/assets/insights/")) &&
      !entry.image.src.includes("..") &&
      !/[?#%\\]/.test(entry.image.src) &&
      nonempty(entry.image.alt) &&
      nonempty(entry.image.rights),
    ) &&
    entry.sections.length > 0 &&
    new Set(entry.sections.map((section) => section.id)).size ===
      entry.sections.length &&
    entry.sections.every(
      (section) =>
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(section.id) &&
        nonempty(section.title) &&
        section.paragraphs.length > 0 &&
        section.paragraphs.every(nonempty) &&
        (!section.items || section.items.every(nonempty)) &&
        (!section.sourceIds ||
          section.sourceIds.every((id) =>
            entry.sources.some((source) => source.id === id),
          )),
    ) &&
    entry.sources.length > 0 &&
    new Set(entry.sources.map((source) => source.id)).size ===
      entry.sources.length &&
    entry.sources.every(
      (source) =>
        /^[a-z0-9-]+$/.test(source.id) &&
        [source.title, source.context].every(nonempty) &&
        safeSourceUrl(source.url),
    ) &&
    entry.serviceSlugs.length > 0 &&
    entry.serviceSlugs.every((slug) =>
      services.some((service) => service.slug === slug),
    )
  );
}
export function safeSourceUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password;
  } catch {
    return false;
  }
}
export const publishedInsights = (entries: readonly Insight[] = insights) =>
  entries.filter((entry) => isPublishableInsight(entry));
export const findPublishedInsight = (slug: string) =>
  publishedInsights().find((entry) => entry.slug === slug);
export function insightStructuredData(
  entry: Insight,
  origin = canonicalOrigin(),
) {
  if (!origin || !isPublishableInsight(entry)) return [];
  const url = `${origin}/insights/${entry.slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: entry.title,
      description: entry.summary,
      mainEntityOfPage: url,
      url,
      datePublished: entry.publishedOn,
      ...(entry.updatedOn ? { dateModified: entry.updatedOn } : {}),
      author: {
        "@type": entry.author.kind ?? "Person",
        name: entry.author.name,
        description: entry.author.biography,
        url: `${origin}/about`,
      },
      publisher: { "@type": "Organization", name: "Butter", url: origin },
      image: new URL(entry.image!.src, origin).href,
      citation: entry.sources.map((source) => source.url),
      inLanguage: "en-GB",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Insights",
          item: `${origin}/insights`,
        },
        { "@type": "ListItem", position: 3, name: entry.title, item: url },
      ],
    },
  ];
}
export function insightCard(entry: Insight, review = false) {
  return {
    slug: entry.slug,
    title: entry.title,
    summary: entry.summary,
    category: entry.category,
    image: entry.image,
    reviewImage: entry.reviewImage,
    date: review ? entry.preparedOn : entry.publishedOn,
    href: `${review ? "/review" : ""}/insights/${entry.slug}`,
  };
}
export type InsightCardData = ReturnType<typeof insightCard>;
