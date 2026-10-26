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

## Phase 3 — Work and case template comparison
Reference 03 inspected as two separate designs: left Work index and right British Red Cross concept detail. No client content was approved by that inspection.

Captured and inspected 1440px desktop / 390px mobile evidence:
- `test-results/work-public-Work-renders-g-40700--examples-or-mockup-clients-{desktop,mobile}/work-index.png`
- `test-results/work-opt-in-review-exercis-0cee7-without-publishing-examples-{desktop,mobile}/work-design-review.png` and `case-template.png`

Work preserves the split hero, exact headline/highlight, cropped-ribbon reservation, filter pills with yellow active state, partnership band and yellow CTA. Because there are no cleared cases, the actual index shows an honest empty state in place of the reference's six real project cards. The optional review page demonstrates the 3-column/2-row card geometry using labelled non-project examples; mobile stacks cards and tablet uses two columns. Each arrow/title links to its real detail destination when published, or the explicit template anchor in review mode.

The right-half template preserves the large text/image hero split, four-position evidence row, Challenge/requirements and Approach/deliverables columns, asymmetric gallery and yellow discussion CTA. Role attribution, audience/constraints, design rationale, outcome narrative and related-service links are explicit. In review mode these are instructions/placeholders, not a client story. Real metrics are never seeded: evidence positions show “Evidence required”. Original image-backed hero treatment, device/interface crops, authentic narrative length and exact wordmark/font/ribbon/mascot fidelity remain unassessable without source assets.

Six-width overflow checks passed at 1440/1280/1024/768/390/375 for the index and populated review/template. Mobile visual inspection confirms wrapped filters, retained highlighted headline, stacked proof/narrative/gallery and reachable CTAs. No global token or existing-template layout changes were made. Full existing Home/Services browser checks still pass. Not pixel-perfect or ready for client publication; final comparison must be repeated with approved source content/images.

## Temporary image review — owner-authorised
Four generated concepts now fill the former blank image reservations: yellow ribbon, fictional laptop learning screen, workshop hands/notes and headphones. Explicit slot selection preserves cream/black/yellow art direction; no full reference screenshot or cropped UI was used as production content. The loop is a provisional ribbon approximation, not the original. Workshop imagery is labelled concept imagery and is not a team/client/testimonial photograph.

Refreshed desktop/mobile screenshots captured and inspected for Home, Services overview, eLearning detail, Work and case template; supporting detail pages also captured by the existing suite. The hero now has a dominant ribbon, service cards have image crops, and editorial/partnership panels show warm imagery rather than grey boxes. The proof/portfolio text still honestly withholds unapproved claims. An initial tablet-width overflow in the new Work composition preview was fixed by constraining figure widths; six-width checks then passed. Existing icon/font/official mascot and true production imagery fidelity remain provisional. No pixel-perfect claim.

Screenshot helpers explicitly wait for optimised images, including off-screen lazy images, so full-page evidence contains actual imagery rather than loading states. Current files remain under the existing ignored test-results paths. Case-template design mode remains disabled by default.

## Phase 4 About visual audit
No dedicated About mockup exists. All four concept PNGs inspected for the existing system; page extends their cream/black/yellow palette, oversized tight headings, yellow text marker, outline annotation, asymmetrical text/image split, fine rules, numbered process and yellow closing CTA. No new theme or palette introduced.

Desktop/mobile screenshots captured and inspected at `test-results/about-About-has-crawlable--45094-and-complete-internal-links-{desktop,mobile}/about-full.png` and `about-first-fold.png`. At desktop, hero keeps a left editorial headline/right ribbon, studio/principles use aligned two-column text, geographic band pairs yellow copy with labelled workshop imagery, and working approach reuses three steps. At mobile, all sections stack, principle labels remain legible, numbered steps retain hierarchy, CTAs remain reachable and temporary image labels stay visible. Six-width overflow checks pass at 1440/1280/1024/768/390/375.

Founder reservation uses a simple outline icon and explicit pending status, not a generated person. No real founder likeness or identity is claimed. Exact font, logo, ribbon and mascot remain provisional/missing as before. About is visually consistent with current implemented templates, not a claim of exact-reference or final brand sign-off. Existing Home/Services/Work checks and image captures still pass.

## Phase 5 Insights visual audit
All four reference PNGs inspected. There is no dedicated Insights/article reference; layouts conservatively extend reference 01's image-led Insights cards and the existing interior editorial hero. Cream/ink/yellow tokens, type families, marker highlight, fine rules, pill/filter treatments, restrained radii and closing CTA are unchanged. No brand redesign or new font/dependency.

Compared the current desktop/mobile hub and draft article captures with reference 01 and the implemented Home: three-column card tracks on desktop (two prepared drafts, without inventing a third), two-column tablet, one-column mobile; thumbnail/category/headline/excerpt/arrow order is preserved. Hero uses the existing labelled ribbon concept. Article layout adds a readable text column, quiet contents column, clear source links and existing yellow-rule treatment; these are new unpictured modules within the same visual language. On mobile, contents stack before the reading column and all source/author/service/related sections remain readable. A glyph arrow mismatch found during inspection was replaced with the shared Lucide ActionLink.

Evidence captured and inspected at 1440px and 390px:
- `test-results/insights-Insights-has-real-ddb21-d-working-public-navigation-{desktop,mobile}/insights-public.png`
- `test-results/insights-Editorial-review--17ef2-d-opens-their-full-articles-{desktop,mobile}/insights-review.png`
- `test-results/insights-Substantive-artic-aae6b-te-dates-and-internal-links-{desktop,mobile}/article-{0,1}-first-fold.png` and `article-{0,1}-full.png`

Six-width overflow checks passed at 1440/1280/1024/768/390/375 for public hub, populated review hub and both article layouts. Existing Home/Services/Work/About browser checks and screenshots remain passing. The public empty state is intentional until article approval; draft cards are visible only in local opt-in review. Dates and proposed-author notices explicitly distinguish editorial review from publication. Temporary image labels remain visible; final editorial images, original logo/font/ribbon/mascot and content approvals remain fidelity/release gaps. No pixel-perfect claim.

CV visually inspected as a rendered PDF as well as extracted text. It includes a portrait; the embedded JPEG was extracted unchanged locally for inspection, with no colour/style edits or generated replacement. It is a candidate supplied source, not a missing image. Website selection and biography approval remain pending; no private CV/contact material is rendered on About. The final receipt/portrait-selection wording was checked again in the focused About suite.

## Phase 6 and accepted-content visual audit
Re-read the entire instruction/spec/roadmap and inspected all four concept PNGs before UI work. There is no separate Contact or legal reference. Contact extends the shared interior heading system: oversized left headline/highlight, right supporting text and outline annotation, fine divider, two-column form/yellow guidance card, restrained input borders and existing black pill. Budget/timeframe sit in a native optional disclosure. Mobile stacks the hero, fields and guidance card with the same palette/type system. Legal pages use an accessible reading width, oversized title and fine section rules, with clear draft status. No new brand colours or fabricated office/contact imagery.

Desktop/mobile Contact, Privacy and Terms captures compared with the supplied reference grammar and existing Home/Services/Work templates. Contact form remains legible at all six widths, optional fields and acknowledgement are reachable, and sidebar/text/input sizing stay within the viewport. Existing Home now shows the two accepted article cards; the third track is left unfilled rather than inventing content. About now displays Daniel's actual supplied CV portrait with accepted biography/qualifications and no founder reservation. Portrait lighting is supplied photography, not a new UI palette. It was extracted unchanged; CSS only controls the visible crop.

Screenshots captured and inspected:
- `test-results/contact-Contact-and-legal--a1c49-thful-linked-and-responsive-{desktop,mobile}/{contact,privacy,terms}.png`
- `test-results/about-About-has-crawlable--45094-and-complete-internal-links-{desktop,mobile}/about-full.png`
- `test-results/insights-Insights-has-real-ddb21-d-working-public-navigation-{desktop,mobile}/insights-public.png`
- `test-results/insights-Approved-articles-05c4d-s-author-and-internal-links-{desktop,mobile}/article-{0,1}-full.png`
- Existing full-suite Home/Services/Work captures retained for regression comparison.

The screenshot helper now waits for every image, including the off-screen lazy founder portrait, so full-page evidence does not show its loading space. A form-result focus race found during testing was fixed using post-commit focus, and a legal external-link glyph was replaced with the shared arrow component. Original logo/font/ribbon/mascot and final editorial imagery remain gaps; all temporary illustration badges persist. No pixel-perfect claim or final brand sign-off.

## Portfolio card reference update — 26 October 2026
Owner supplied a new two-column project-card reference with angled browser frames, real screen content, fine orbit lines, playful foreground symbols, a round top-right arrow and a title/meta/arrow row. This explicitly replaces the older Work index's three-column card composition for this component. Inspected the original four PNGs as the continuing page/system authority; hero, navigation, typography, case-study sections, shared CTA and footer remain in the existing design language.

Built ProjectArtwork and WorkCards freshly in V3. The first four Work cards match the new reference's project order and source screens: environmental sustainability, information-security room scenario, British Red Cross platform and Nansen Academy. Original files are unchanged. Main page remains warm cream/ink/yellow; garden/sage/charcoal are scoped measured artwork surfaces from the new image. The browser header uses V3's current text wordmark treatment, not an asserted official logo asset. Sparse Lucide symbols approximate the playful motifs; exact supplied custom plant/mascot/bulb artwork is not claimed.

Compared resting/hover desktop card captures and full desktop/mobile Work captures with the owner's attached reference: consistent 1.6 aspect ratio, two equal desktop columns, one mobile column, inset angled windows, outlined frames, restrained offset shadow, separate foreground symbol, clean headings/meta and accessible single-link cards. Window rotates gently towards level with 1.025 scale; symbol independently rotates/scales and the arrow nudges. No autoplay or motion library. Hover is limited to hover-capable pointers; keyboard focus is visible and receives equivalent treatment; reduced motion retains resting transforms. Six-width overflow/column checks cover 1440/1280/1024/768/390/375.

Case pages retain the original reference 03 hero/challenge/approach/proof/service/CTA grammar, now with actual sourced copy/images and three alternating narrative/image sections. Employment work uses Daniel's approach and project-deliverables labels. Six missing-image cases have clear text reservations and no fabricated/AI/SVG client screenshot. Source/result context is visible. Home now features two genuine cards; all four services link to matching real cases without modifying their service architecture. Existing page screenshots remain in the full regression set.

Current screenshot evidence:
- `test-results/work-Work-shows-sourced-pr-918b0-w-two-column-card-reference-{desktop,mobile}/work-index.png` and `work-card.png`.
- Desktop `work-card-hover.png` in the same folder.
- `test-results/work-all-migrated-case-stu-7b261-tes-and-explicit-media-gaps-{desktop,mobile}/{information-security,your-learning-platform,humankind-educatorhub}.png`.

Source completeness is not final: the live personal site is still network-blocked; screenshots prove the V3 implementation against the supplied image and documented GitHub snapshot, not that a fresh live crawl succeeded. Exact custom card art, original global brand assets and six image sets remain gaps. No pixel-perfect claim.

## Portfolio presentation update — 26 October 2026
Owner explicitly confirmed Butter delivery and requested removal of public personal/source attribution. Implemented Butter voice in Work/Home/cases, retaining internal provenance and original media. Live /work and all 16 detail routes were successfully retrieved: added Vaccination Programme and Food Safety Level 3, refreshed four project-reported impact figures per case. Project outputs, self-reports, indirect reach and projected savings retain their distinctions; £5.5M is a projection over six years. Food Safety source conflicts (33% in introduction versus 25% impact); use the explicit impact section's 25%. No independent validation or client endorsement is asserted.
Home: three featured cards in one desktop row. Work: three desktop columns, two tablet, one mobile. Case proof: butter-yellow panel, four desktop columns, two tablet, one mobile. Eight projects have original media; eight retain imagery-pending notices. No new screenshots were attached to this message; existing reference art and latest explicit layout instructions guide the update.
Search audit: unique case metadata/H1 and related-service links retained for all 16 routes; no invented dates/locality/schema. Devon positioning unchanged. Staging remains noindex; no deployment, canonical activation, analytics or contact-provider changes. Status CONDITIONAL: final media, brand assets and existing legal/contact/release gates remain.

Validation: lint, TypeScript and production build passed; all 19 unit tests passed. Desktop/mobile browser tests covered all 16 detail routes, filter counts, internal links, attribution removal, four impact cells and overflow at 1440/1280/1024/768/390/375px. Home checks confirm three cards and desktop/mobile columns; computed impact yellow matches #FEDA4E. Screenshots captured and visually reviewed against the existing Home/Work references, applying the owner's requested grid variation. Final brand artwork and pending original media remain conditional.

## Work imagery completion and gallery removal — 26 October 2026
Owner requested filling remaining Work placeholders from the live portfolio and removing the repeated bottom gallery. Retrieved 31 original project images for the eight previously pending cases, converted to local WebP, and recorded source URLs/hashes in portfolio-migration.json. All 16 cases now have genuine hero/card imagery; source screenshots sit once in the narrative, with no repeated closing gallery. One L&D Digital Upskilling source image returned 404 and is excluded; its third story remains text-only. No fabricated replacement, project claim or client endorsement added. Existing source data/gallery arrays remain as an internal media inventory; the gallery UI is removed. This explicit request supersedes the gallery module in the original case reference.
Search audit: all 16 case titles, descriptions, H1s, related-service links and noindex policy retained. Descriptive image alt text and locally hosted assets added. Devon/UK positioning and measurement readiness unchanged. Other site routes and deferred legal/contact configuration unchanged; no deployment authorised. Task status conditional only on existing final brand/legal/contact/release gates, with project imagery placeholders resolved.

Verification: lint, typecheck, production build, all 19 unit tests and all eight focused desktop/mobile Playwright tests passed. Checked all 16 routes for removal of case galleries and pending-media UI, unique narrative image URLs, responsive overflow, navigation/filter integrity and preserved Butter impact panels. Captured screenshots and visually inspected populated Humankind desktop and L&D mobile layouts against the case reference: project images now occupy the existing hero/story frames, and the ending flows directly from story to outcomes/services/CTA. No duplicate image grid remains.

## Sitewide personal attribution removal — 26 October 2026
Latest owner request extends Butter attribution across the site. Service feature labels now credit Butter; published/review article bylines and author descriptions use Butter; Article schema identifies the author as Organization. About retains approved founder experience and portrait with unnamed founder wording; personal-name founder schema is omitted and the public portrait filename/alt text are neutral. Contact, draft notices and legal wording no longer name the individual. Internal provenance remains in source-validation records and documentation; original project screenshots are preserved.
Search audit: unique metadata, real content, service/case/article links and Devon/UK positioning retained. Article author metadata matches the visible Butter byline; no personal-name Person entity is published. Noindex, contact/legal deferrals and deployment gates remain unchanged. This is a scoped copy/attribution correction, not Phase 7 or release authorisation.

Validation: lint, typecheck, production build and 19 unit tests passed. Ten desktop/mobile About/Insights browser tests passed; two route-wide attribution audits passed, checking rendered HTML (including metadata, image URLs and serialised content) across public pages and available review routes for personal-name references. Review Insights correctly returns 404 when there are no drafts. Screenshot capture remains part of existing About/Insights browser coverage; this change preserves components/layout/styles. Scoped attribution correction PASS; existing launch gates remain conditional.

## Spacing and surface review — 26 October 2026
Owner approved a moderate increase in negative space plus subtle Butter-brand component backgrounds. First review scope: Home, Work index and Information Security case only; remaining case templates and site routes await review. Scoped styles/spacing-review.css uses existing canvas/cream/paper/butter tokens, with 48–96px section padding, 24–48px panel padding, 32–40px heading separation, 40px desktop card column gaps and 64px row gaps. Hero padding reaches 86–96px at large desktop; mobile remains 56px. Body copy uses 1.6 line-height, with case paragraphs limited to 62ch. Home process and proof support areas use cream; case deliverables use cream and outcomes use paper. Yellow services, impact and CTA panels remain the strongest colour anchors.
Retains the three-column desktop work grids, four impact columns, all original project media, tight display headings, no duplicate closing gallery and sitewide Butter attribution. Authorised spacing/surface variation supersedes original reference density for these three review routes only. No added assets, libraries, claims, dates or content.
Search audit: unchanged metadata/canonical policy/H1s and related-service/article links; Devon/South West/UK copy retained. All routes remain noindex, legal/contact/measurement configuration deferred. No deployment or public indexing authorised. Other Services/About/Insights/Contact/legal pages have no scoped styling changes. Task is a design review pass, not launch approval.

Validation: lint/typecheck/production build and all 19 unit tests passed. Both desktop/mobile spacing tests passed with overflow checks at 1440/1280/1024/768/390/375px; attribution and case/filter/column checks passed. The initial desktop hover assertion exposed pointer position retained after screenshot scrolling; reset pointer/reduced-motion state before measuring, then the focused hover test passed. Desktop Home/Work/Information Security and mobile Home screenshots were visually reviewed against the original reference compositions: larger pauses and panel insets are the approved variation, with unchanged content order, typography and imagery. Review stage PASS; full-site rollout awaits owner response to the three examples.

## Services refinement and navigation — 26 October 2026
Owner requested more breathing room on Services, individual-service access under the navbar and real Work imagery. Services overview and all four details now use 48–96px section rhythm, cream/paper support surfaces, more generous card/panel padding and 1.6 body leading. Overview hero prioritises two readable columns; narrow provisional ribbon column is hidden. Four overview cards remain on wide desktop, two tablet and one mobile. Detail process steps use a readable 2x2 desktop grid, single column mobile; project feature uses a wider media-first layout. Removed detail testimonial placeholders in favour of useful standard FAQs.
Curated existing published cases: eLearning → Information Security; Platforms → Your Learning Platform; Strategy → Strategic Skills Mapping; Support → Humankind EducatorHub. Original hero images/captions link directly to their cases, with a different original story screen in each featured project. Overview partnership module uses a labelled Humankind project image, replacing the AI workshop illustration without implying it depicts a real client meeting. No new client claims, metrics, source assets or dependencies.
Services remains a normal overview link with a separate native disclosure for four service links. Supports keyboard/touch, Escape/focus return, outside click and focus departure; mobile menu shows the links as a smaller nested service group and retains modal scrolling/focus handling. This explicitly requested grouping and density variation supersedes the previous flat navigation/reference density, retaining the four top-level destinations.
Search audit: all five service routes retain unique title/description/H1, useful server-rendered service/FAQ copy, Devon/South West/UK positioning and direct case links. Existing noindex/canonical/structured-data policy retained. Other routes keep their content; shared header now exposes the service group sitewide. Contact/provider/legal/release gates remain deferred; no deployment authorised.

Validation: lint/typecheck/build and 19 unit tests passed. All 18 focused desktop/mobile Playwright tests passed across Services, FAQ interaction, overview/detail links, source-media pairing, submenu keyboard/touch/Escape/outside-click behaviour, About mobile navigation, existing spacing examples and sitewide attribution. All five service routes checked for overflow at 1440/1280/1024/768/390/375px, unique metadata and noindex. Captured screenshots for all service routes; visually reviewed desktop overview/eLearning and mobile strategy against references 02/04. New spacing and real screens preserve the cream/black/yellow hierarchy; original generic media and placeholder testimonial module are replaced as described. Scoped refinement PASS, existing brand/contact/legal/public-release gates remain conditional.

## Homepage hero artwork — 26 October 2026
Owner uploaded public/assets/brand/Hero image.jpeg and explicitly requested homepage-only use. Replaced the Home ribbon placeholder/cross annotation with the exact supplied 2048px square image, responsive Next Image sizing, intrinsic dimensions and preload. Full composition retained without cropping or image edits. This is owner-approved illustrative brand artwork; the pictured 75% is part of the illustration, not a published project-performance claim. Services and other routes retain their current images; shared ribbon placeholder data unchanged.
Search audit: Home title/description/H1, Devon positioning and real text/CTAs unchanged. Descriptive alt text added, no numeric result/schema claim added. Noindex, legal/contact and public release gates unchanged.

Validation: lint, typecheck and production build passed. Both desktop/mobile responsive spacing checks passed at 1440/1280/1024/768/390/375px. Visually inspected Home desktop/mobile screenshots: image appears beside the headline on desktop and below the copy on mobile, with its full composition retained. Homepage-only artwork replacement PASS; existing release gates remain unchanged.

## Humankind card screenshot and compact header — 26 October 2026
Owner uploaded Screenshot 2026-10-26 at 16.22.39.png in the Humankind project folder and requested card use, with no large Butter wordmark and a smaller browser header. Humankind card.screen now uses that exact screenshot with descriptive alt text; internal owner-upload hash/provenance recorded in portfolio-migration.json. Optional compactHeader presentation removes the wordmark and reduces browser chrome from 37px/12% to 22px/8%, retaining the dots. Existing sage surface, tilted window, shadow, decorative orbit, bulb/spark/arrow icons and hover/reduced-motion CSS remain unchanged. Other project cards retain their existing header treatment. Case hero/story media unchanged.
Search audit: card still links to the same Humankind detail; no text/metadata/outcomes/geography/public-indexing changes. Owner screenshot is an original project screen; no generated replacement or new endorsement. Scoped artwork update, no deployment authorisation.

Validation: lint, typecheck, production build and 19 unit tests passed. Both focused desktop/mobile Work browser tests passed, including filtering, links, responsive columns, overflow, hover/reduced-motion, new screenshot alt text and absent Humankind wordmark. Visually compared desktop/mobile Humankind card captures to the owner's reference: same sage surface, window tilt and icon composition, with the requested thinner header and new screenshot. Scoped update PASS; existing launch gates unchanged.
