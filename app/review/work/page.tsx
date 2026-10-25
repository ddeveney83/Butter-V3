import { notFound } from "next/navigation";
import { WorkGallery } from "@/components/work/work-gallery";
import { CaseStudyLayout } from "@/components/work/case-study";
import { reviewCards, reviewCase } from "@/lib/work-review";
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Work design review only | Butter",
  robots: { index: false, follow: false },
};
export default function WorkReview() {
  if (process.env.ENABLE_DESIGN_REVIEW !== "true") notFound();
  return (
    <main id="main" className="work-review" tabIndex={-1}>
      <div className="shell review-notice">
        <p className="eyebrow">Development design review only</p>
        <h1>Work layout examples</h1>
        <p>
          These are labelled layout examples, not real case studies. This route
          is disabled by default and never appears in the public Work list or
          sitemap.
        </p>
      </div>
      <WorkGallery entries={reviewCards} review />
      <section id="case-study-preview">
        <CaseStudyLayout study={reviewCase} review />
      </section>
    </main>
  );
}
