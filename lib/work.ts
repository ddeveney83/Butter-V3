import {
  caseStudies,
  type CaseStudy,
  type WorkCategory,
} from "../content/case-studies";
import { services } from "../content/services";
import { canonicalOrigin } from "./site-config";
const nonempty = (value: string) => Boolean(value.trim());
function portfolioReuse(study: CaseStudy) {
  if (!study.approval.portfolioReuse?.trim() || !study.source) return false;
  try {
    const url = new URL(study.source.url);
    return (
      url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      ["danieldeveney.com", "www.danieldeveney.com"].includes(url.hostname) &&
      (url.pathname === "/work" || url.pathname.startsWith("/work/")) &&
      /^https:\/\/github\.com\/ddeveney83\/butter\/blob\/[a-f0-9]{40}\//.test(
        study.source.snapshot,
      )
    );
  } catch {
    return false;
  }
}
function approvedImage(image: CaseStudy["hero"]) {
  return Boolean(
    image &&
    image.src.startsWith("/assets/work/") &&
    !image.src.includes("..") &&
    nonempty(image.alt) &&
    nonempty(image.rights),
  );
}
export function isPublishableCase(study: CaseStudy) {
  return (
    study.status === "published" &&
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(study.slug) &&
    [
      study.title,
      study.summary,
      study.headline,
      study.introduction,
      study.approval.owner,
      study.role.description,
      study.challenge.title,
      study.challenge.text,
      study.challenge.audience,
      study.challenge.constraints,
      study.approach.title,
      study.approach.text,
      study.approach.designDecision,
      study.outcomeNarrative,
    ].every(nonempty) &&
    (nonempty(study.approval.clientPermission) || portfolioReuse(study)) &&
    [study.evidence, study.requirements, study.deliverables].every(
      (items) => items.length > 0 && items.every(nonempty),
    ) &&
    (approvedImage(study.hero) ||
      (study.hero === null &&
        portfolioReuse(study) &&
        Boolean(
          study.pendingMedia?.notice.trim() &&
          study.pendingMedia.approval.trim(),
        ))) &&
    study.gallery.every(approvedImage) &&
    (!study.card?.screen || approvedImage(study.card.screen)) &&
    (!study.story ||
      study.story.every(
        (section) =>
          nonempty(section.title) &&
          section.paragraphs.length > 0 &&
          section.paragraphs.every(nonempty) &&
          (!section.image || approvedImage(section.image)),
      )) &&
    (!study.videos ||
      study.videos.every(
        (video) =>
          /^[A-Za-z0-9_-]{11}$/.test(video.id) && nonempty(video.title),
      )) &&
    study.outcomes.every((outcome) =>
      [outcome.value, outcome.label, outcome.evidence].every(nonempty),
    ) &&
    study.serviceSlugs.length > 0 &&
    study.serviceSlugs.every((slug) =>
      services.some((service) => service.slug === slug),
    )
  );
}
export const publishedCases = (entries: readonly CaseStudy[] = caseStudies) =>
  entries.filter(isPublishableCase);
export const findPublishedCase = (slug: string) =>
  publishedCases().find((study) => study.slug === slug);
export interface WorkCardData {
  slug: string;
  title: string;
  summary: string;
  category: WorkCategory;
  tags: WorkCategory[];
  image: CaseStudy["hero"];
  href: string;
  organisation?: string;
  discipline?: string;
  presentation?: CaseStudy["card"];
}
export function caseCard(study: CaseStudy): WorkCardData {
  return {
    slug: study.slug,
    title: study.title,
    summary: study.summary,
    category: study.category,
    tags: study.tags,
    image: study.hero,
    href: `/work/${study.slug}`,
    organisation: study.organisation,
    discipline: study.discipline,
    presentation: study.card,
  };
}
export function caseBreadcrumbs(study: CaseStudy, origin = canonicalOrigin()) {
  if (!origin || !isPublishableCase(study)) return undefined;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: origin + "/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: origin + "/work",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.title,
        item: `${origin}/work/${study.slug}`,
      },
    ],
  };
}
