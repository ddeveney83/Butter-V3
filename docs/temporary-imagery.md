# Temporary image review — before Phase 4

The owner explicitly asked for placeholder images to visualise the layouts. Four images were generated for this purpose on 25 October 2026 with the image-generation tool. They are provisional concepts, not recovered official assets, real photographs of Butter's team, delivered client screens, testimonials or case-study evidence.

| File under public/assets/placeholders/ | Purpose |
| --- | --- |
| ribbon-concept.png | Yellow paper ribbon approximation for hero composition; not official Butter artwork |
| laptop-concept.png | Fictional generic learning interface/device image; not a delivered product |
| workshop-concept.png | Illustrative hands/notes/table composition; not Butter people or a real client workshop |
| headphones-concept.png | Generic editorial accessibility/media still life; not a published article |

Prompt direction: warm cream/black/butter-yellow, realistic editorial lighting, uncluttered composition and no client logos, claimed outcomes or real proprietary interface. The laptop screen includes fictional example UI solely to visualise image placement. These are not final brand choices or a claim of exclusive rights.

## Placement and replacement
`content/placeholder-images.ts` centralises the four sources. Existing `AssetPlaceholder` slots use explicit image keys, optimised through next/image with responsive sizing, lazy loading and a single preloaded Home hero. Each figure retains a visible AI-generated-placeholder badge and an accessible description identifying it as temporary. Replace a placeholder with the appropriate approved production asset through a deliberate content change; do not simply remove the labels and imply these are real project media.

Home, Services, service details, Work hero/partnership, and the local Work review template now show image composition instead of empty boxes. Work also has a separate, clearly labelled three-image composition preview when there are no approved cases. It is not the published-case list, and its images do not create project cards, client relationships or detail URLs. The approved case collection remains empty. `isPublishableCase` requires media under the cleared work-asset path; placeholder paths do not qualify.

The logo, exact font, mascot and official ribbon remain source-asset gaps. No testimonial, case narrative, metric, article, contact integration, public deployment or Phase 4 work was added. All indexing and approval restrictions remain. Existing Devon/South West/UK wording, metadata and navigation are unchanged.

## Source integrity
Original generated PNGs remain in `/workspace/generated_images`; repository copies were copied unchanged. next/image produces delivery variants without altering the sources.

| File | SHA-256 |
| --- | --- |
| `headphones-concept.png` | `9860f56071da54126000d57028f17a92e0c765b31be61ed999d7aa8635ebfdd3` |
| `laptop-concept.png` | `ddb3efa162eb8ea97f5ae9d31f67ba5b99ee230e48f18842a29972822f71d275` |
| `ribbon-concept.png` | `057a22e28e349a0f9b8c58d7bb1b61c718203abedd752584d32dbeeb213b29cb` |
| `workshop-concept.png` | `017a0056b519710accc58b0964899bc4be02b5a008f4073694e1b35d81dd8851` |

## Phase 5 reuse
The existing ribbon concept is reused in the Insights hero; laptop and headphones concepts illustrate the two local review drafts and related cards. All retain the visible AI-generated placeholder badge. No new image generation or source editing in Phase 5. These paths are rejected by article publication validation and do not supply author portraits, original artwork or publishable editorial image rights.

## Owner acceptance before Phase 6
The owner accepted all prepared review content on 25 October 2026. The two accepted articles now use their existing laptop/headphones illustrations in normal page routes with visible labels. This explicitly supersedes the earlier article-only rejection: a temporary article image must match its typed manifest key/source and have recorded owner acceptance, while arbitrary placeholder paths still fail. Final production editorial images remain required. The real case gate continues rejecting every placeholder image; no temporary asset becomes client evidence.
