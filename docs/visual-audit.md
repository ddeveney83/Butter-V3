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
