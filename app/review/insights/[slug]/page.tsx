import { notFound } from "next/navigation";
import { insights } from "@/content/insights";
import { ArticleLayout } from "@/components/insights/article-layout";
type Props = { params: Promise<{ slug: string }> };
export const dynamic = "force-dynamic";
export async function generateMetadata({ params }: Props) {
  if (process.env.ENABLE_DESIGN_REVIEW !== "true") return {};
  const { slug } = await params;
  const entry = insights.find(
    (item) => item.slug === slug && item.status === "draft",
  );
  return entry
    ? {
        title: `${entry.title} | Draft review | Butter`,
        description: entry.summary,
        robots: { index: false, follow: false },
      }
    : {};
}
export default async function ArticleReview({ params }: Props) {
  if (process.env.ENABLE_DESIGN_REVIEW !== "true") notFound();
  const { slug } = await params;
  const entry = insights.find(
    (item) => item.slug === slug && item.status === "draft",
  );
  if (!entry) notFound();
  return (
    <ArticleLayout
      entry={entry}
      related={insights.filter((item) =>
        entry.relatedSlugs.includes(item.slug),
      )}
      review
    />
  );
}
