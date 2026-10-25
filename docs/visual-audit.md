# Visual reference audit — Phase 0

All four original PNGs inspected. Their export dimensions are not browser widths. Source assets remain outside public/ and are not served by the app.

| Reference | Composition and modules | Later fidelity checks |
| --- | --- | --- |
| 01 Home | Header; huge left `Learning, / designed / to matter.` with last-word yellow marker; dominant right curled ribbon; trust strip; four-column yellow services band; three featured cards; Discover/Design/Deliver; quote/photo/metrics proof panel; three Insights cards; yellow CTA with small mascot; compact footer | Headline wrap, near-equal hero split, ribbon scale/crop, service separators, dense card rhythm, proof rights and image crops |
| 02 Services | Split headline/supporting copy/ribbon hero; four image-backed service columns; partnership band with photo and narrow yellow keyword rail; three-step process; split FAQ; yellow CTA/footer | Four columns desktop, 2x2 tablet, single mobile; highlight behind final lines; modest card borders and yellow icon tiles |
| 03 left Work | Editorial hero with cropped ribbon; category pills; three-column/two-row project grid; partnership band; yellow CTA/footer | Working filters, selected yellow state, image aspect ratios, fine card rules and circular arrows |
| 03 right Case | Image-backed British Red Cross concept hero; four-column proof row; Challenge + requirements; Approach + deliverables; asymmetric screen gallery; CTA/footer | Separate template from index, real role attribution, no assumed numeric outcomes or client endorsement |
| 04 eLearning | Left oversized title/highlight and two CTAs; large right laptop hero; four benefits; four-step process; feature case; six learning-solution items; testimonial/photo + FAQ; CTA/footer | Discover/Design/Develop/Deliver order, six-item layout, desktop grid geometry and approved screen imagery |

## Shared system observations
Warm cream canvas, near-black editorial text, restrained butter-yellow, large tight bold headings, small tracked labels, black pill CTAs, fine grey dividers, realistic neutral imagery, sparse outline icons. Ribbon is dominant hero artwork; mascot is secondary in the bottom CTA. No production brand source assets supplied.

## Phase 0 shell versus reference
The shell deliberately identifies unfinished destinations; it is not a homepage design proposal. It uses the measured token palette, permitted provisional typography, semantic landmarks and flexible wrapping. It does not attempt ribbon, wordmark, mascot, cards, trust strip or portfolio reconstruction. Therefore reference fidelity is NOT claimed or scored as passed.

Browser evidence: `test-results/**/phase-0-foundations.png` captures full-page shell at 1440px and 390px. Compare with reference 01: palette direction is present; hero, section composition and official identity are intentionally deferred to Phase 1. Check overflow and navigation now; perform full section-by-section side-by-side audit in Phase 1.

Required later widths: 1440, 1280, 1024, 768, 390, 375. Fix typography/wrap first, hero geometry second, source artwork third, then rhythm, crops, colours and details. No screenshot overlays, fabricated CSS ribbon, scraped client assets or unapproved stock people.

## Phase 1 homepage comparison

Re-inspected all four reference PNGs before changing shared UI. Home is the sole designed page in this phase; other templates remain labelled Phase 0 destinations using the new shared header/footer.

Reference 01 compared against actual 1440px and 390px browser captures (`test-results/foundations-capture-Phase-1-homepage-evidence-{desktop,mobile}/phase-1-home.png`; first-fold crops adjacent). Section order retained: hero → trust reservation → yellow services → featured-work reservation → process → proof reservation → insights reservation → yellow CTA → footer.

| Area | Comparison | Status |
| --- | --- | --- |
| Header/footer | Lowercase provisional text mark/yellow dot, centred four-item desktop navigation, black pill, fine rule; compact footer, no invented socials | CONDITIONAL: official SVG and font missing |
| Hero | Exact three-line wording, marker behind matter., left copy/CTAs, right dominant-art reservation and cross annotation; enlarged headline after first capture comparison | CONDITIONAL: original ribbon missing; no pseudo-3D substitute |
| Services | Yellow rounded band, left editorial heading, right overview link, four outline-icon columns with fine separators and exact service names | Implemented; icons are Lucide supporting approximations |
| Work | Three-column image proportions retained; project labels and source images intentionally withheld | CONDITIONAL: approved projects/imagery absent |
| Process | Three numbered circles, yellow first step, arrows, Discover/Design/Deliver and left heading | Implemented; mobile becomes readable stacked steps |
| Proof | Left content/middle image/right evidence proportions reserved, no fabricated quote or metrics | CONDITIONAL: rights, quote, photograph and figures absent |
| Insights | Three image/topic reservations; no fake articles/dates or broken article links | CONDITIONAL: approved articles/images absent |
| CTA | Full-width yellow, left heading, right copy/black pill; small mascot reservation | CONDITIONAL: mascot original absent |

Cream/black/yellow palette, hairlines, editorial hierarchy and restrained curves preserved. Colour tokens remain measured approximations. Local licensed Inter Tight/Inter remain provisional; exact font matching cannot be asserted. Photography/image crops cannot be accepted until approved originals exist. No screenshot/crop of supplied UI used as production content.

Mobile retains hierarchy and highlighted heading, single-column services/work/insights/proof, usable touch targets and a real modal menu. Overflow is tested at 1440/1280/1024/768/390/375; desktop/mobile captures inspected visually. No pixel-perfect or final brand sign-off claim. Asset-dependent sections differ materially from the finished concept and are explicitly labelled development placeholders.

## Phase 2 — Services overview and detail comparison

Reference 02 and 04 re-inspected before implementation; no global brand token or homepage layout change. Desktop screenshots for all five service routes and mobile first folds inspected. Full mobile eLearning capture also inspected. Browser captures live under `test-results/services-all-service-pages-6fc35-a-and-useful-scoped-content-{desktop,mobile}/`; filenames are `services.png`, each service slug `.png`, and matching `-first-fold.png` files. These are ignored generated outputs.

| Reference module | Implementation and comparison | Remaining gap |
| --- | --- | --- |
| 02 hero | Large split editorial heading, yellow last-line marker, supporting copy/black CTA and separate far-right ribbon reservation | Original ribbon missing; reservation cannot match art |
| 02 service catalogue | Four equal desktop columns, yellow icon tiles, compact copy, real detail links and aligned image reservations | Approved photographs/screens absent; icons provisional Lucide |
| 02 partnership | Left statement, middle photo reservation, narrow yellow editorial keyword rail | Actual partnership photography missing |
| 02 process/FAQs/CTA | Three numbered steps, split accordion area and yellow closing invitation retained | Mascot missing; owner review of FAQ copy required |
| 04 hero/benefits | Exact eLearning title/marker, two CTAs, large laptop-image reservation, four icon-led benefits | Original laptop/photo and exact font unavailable |
| 04 process and proof | Discover/Design/Develop/Deliver across four columns; adjacent cleared-project reservation | No publishable Information Security Awareness proof supplied |
| 04 six solutions | Six distinct eLearning items, two-column icon-led layout and fine divider | Detail copy provisional until owner review |
| 04 testimonial/FAQ/CTA | Split evidence reservation and working FAQ list; yellow closing CTA | No quote, attribution, photograph or mascot approval |

Other three service details follow reference 04's grammar with their own benefits, process, solutions and answers. Icons were adjusted to match each service's subject rather than copying game/media icons into platform/strategy/support content. Added scope section explains deliverables and limits; contextual links connect other services, Work, Insights and Contact without fabricated case/article destinations.

Mobile uses stacked hero/content, single-column catalogue/benefits/solutions, vertical process steps and full-width answer controls. The catalogue is 2×2 on tablet. Automated overflow checks pass at 1440/1280/1024/768/390/375. At 1440px the index four-column structure and detail four-step strip are preserved. Body/heading/font fidelity remains provisional, and breadcrumbs/scope/related links add useful content beyond the static art. No pixel-perfect or final-image/crop acceptance claim is made.

Decision: engineering and responsive structure accepted by executed checks; final visual/commercial sign-off CONDITIONAL on approved source assets and copy/evidence. Shared Home screenshot regression capture remains unchanged in layout; CTA's new heading prop preserves its original default.
