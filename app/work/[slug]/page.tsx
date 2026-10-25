import { notFound } from "next/navigation";
import { findPublishedCase, caseBreadcrumbs } from "@/lib/work";
import { canonicalOrigin } from "@/lib/site-config";
import { CaseStudyLayout } from "@/components/work/case-study";
type Props = { params: Promise<{ slug: string }> };
// No fabricated seed case; runtime lookup returns 404 until an approved published entry exists.
export const dynamic = "force-dynamic";
export async function generateMetadata({ params }: Props) {
  const study = findPublishedCase((await params).slug);
  if (!study) return {};
  const origin = canonicalOrigin();
  return {
    title: `${study.title} | Butter case study`,
    description: study.summary,
    robots: { index: false, follow: false },
    ...(origin
      ? { alternates: { canonical: `${origin}/work/${study.slug}` } }
      : {}),
  };
}
export default async function CasePage({ params }: Props) {
  const study = findPublishedCase((await params).slug);
  if (!study) notFound();
  const breadcrumbs = caseBreadcrumbs(study);
  return (
    <main id="main" className="case-page" tabIndex={-1}>
      {breadcrumbs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbs).replace(/</g, "\u003c"),
          }}
        />
      )}
      <CaseStudyLayout study={study} />
    </main>
  );
}
