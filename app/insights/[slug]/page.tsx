import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/insights/article-layout";
import { findPublishedInsight, publishedInsights } from "@/lib/insights";
import { canonicalOrigin } from "@/lib/site-config";
type Props = { params: Promise<{ slug: string }> };
export const dynamic = "force-dynamic";
export async function generateMetadata({ params }: Props) {
  const entry = findPublishedInsight((await params).slug);
  if (!entry) return {};
  const origin = canonicalOrigin();
  return {
    title: `${entry.title} | Butter Insights`,
    description: entry.summary,
    robots: { index: false, follow: false },
    ...(origin
      ? {
          alternates: { canonical: `${origin}/insights/${entry.slug}` },
          openGraph: {
            type: "article" as const,
            title: entry.title,
            description: entry.summary,
            url: `${origin}/insights/${entry.slug}`,
            publishedTime: entry.publishedOn,
            ...(entry.updatedOn ? { modifiedTime: entry.updatedOn } : {}),
            authors: [entry.author.name],
            images: [new URL(entry.image!.src, origin).href],
          },
        }
      : {}),
  };
}
export default async function InsightPage({ params }: Props) {
  const entry = findPublishedInsight((await params).slug);
  if (!entry) notFound();
  return (
    <ArticleLayout
      entry={entry}
      related={publishedInsights().filter(
        (item) =>
          entry.relatedSlugs.includes(item.slug) && item.slug !== entry.slug,
      )}
    />
  );
}
