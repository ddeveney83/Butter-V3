# Decisions and asset ledger — Phase 0

## Confirmed
- Authority: AGENTS.md, full master spec v2 and roadmap; original four PNGs inspected before implementation.
- Fresh implementation in Butter-V3; no old website code, CSS or dependencies imported.
- Butter is Devon-based, with South West and UK-wide coverage. No town, street address, office or opening hours confirmed.
- Four canonical services and exact primary navigation retained in `content/routes.ts`.
- Node 24, npm, stable Next.js 16.4.3 / React 19.3.1, TypeScript strict, Tailwind 4.3.3. Exact installed versions retained in lockfile.
- Typed local content chosen over MDX initially: no articles supplied; avoids an unused compiler/CMS dependency. Empty case/article collections include publication/evidence/rights contracts.
- Phase 0 route scaffolds are review tools, not public pages. All responses carry noindex; sitemap empty; unapproved dynamic details and optional Devon route return 404.

## Measured approximations
- All nine colour tokens from master §2.2, not asserted original brand values.
- 1440px maximum container, 48–64px desktop gutters, 8–16px cards, pill buttons, compressed heavy display typography. Precise layout measurements belong to Phase 1 comparisons.

## Provisional engineering choices
- Inter Tight heading / Inter body: licensed variable fonts from npm, served via next/font/local. Exact brand family NOT identified. Local font packaging keeps builds independent of Google font downloads; the master normally suggests next/font/google. This changes delivery only, not the permitted substitute families. Packages include OFL licences; retain rights records when moving to official fonts.
- Netlify is the initial hosting assumption from master §7, NOT a connected or deployed service. Reassess server-side adapter support before commitment. Vercel only if explicitly chosen.
- Canonical origin is absent until SITE_URL is confirmed; no production domain invented. HTTPS-origin validation prevents malformed canonical configuration.
- No provider, analytics SDK, CMS, database, animation library or paid service selected. Lucide and Zod deferred until their UI/form phases require them.
- Framework direct docs domains returned HTTP 403; official Next.js installation/robots source docs read through raw.githubusercontent.com. Use installed framework docs for version-specific follow-up.

## Asset required — source filenames are requested destinations, not supplied files
| Proposed destination | Placement | Missing approval/source | Gate |
| --- | --- | --- | --- |
| public/assets/brand/butter-wordmark.svg | Header/footer | Official vector mark and usage rights | Phase 1 exact identity / launch |
| public/assets/brand/butter-ribbon.webp | Home/Services/Work heroes | Isolated high-resolution original with correct crops | Phase 1 visual sign-off |
| public/assets/brand/butter-mascot.svg | Bottom CTA | Approved original character | CTA visual sign-off |
| public/assets/brand/fonts/ | Global headings/body | Exact family, files, weights and web licence | Final visual sign-off |
| public/assets/work/ | Cards, case hero and outcome galleries | Original screenshots/device images, permissions, confidential-content clearance | Phase 3 publication |
| public/assets/services/ | Four service cards, laptop hero | Licensed/approved photos and real learning-product imagery | Phase 2 visual sign-off |
| public/assets/people/ | Partnership, proof and About | Genuine approved photography/headshot | Phase 4 / proof publication |
| public/assets/insights/ | Home and article cards | Approved editorial imagery | Phase 5 publication |
| public/assets/brand/client-logos/ | Home trust strip | Owner/client authorisation and relationship attribution | Public trust strip |
| public/assets/brand/social-card.* | Social metadata | Approved OG artwork and canonical identity | Public metadata |

## Content and integration gaps
- Client candidates are concepts only: British Red Cross, Places for People, PSA, flooding/LearnDash, Nansen.ai and Strategic Skills Mapping. Confirm each scope, delivery role, publication rights and evidence. Employment experience must not imply a Butter agency engagement.
- No testimonial permission, exact approved quote, attribution or verified metrics supplied. Do not publish 20+, 13,000+, 10,000+ or 93%+ from mockups.
- Founder biography, qualifications, portrait, real service boundaries and article authorship require approval.
- Canonical domain, contact email/inbox, sender identity, social destinations and response expectations not supplied.
- Email provider/credentials and sender DNS verification deferred to Phase 6; no form or fake success implemented.
- Analytics selection, consent design, actual processors and owner-approved UK privacy/terms remain release blockers.
- Google Business Profile eligibility requires owner confirmation of real in-person contact; online-only operations are ineligible. No private address published.

Structural work can proceed with these recorded gaps. They prevent final visual/commercial launch acceptance, not the Phase 0 tooling gate. Brand departures, public claims, paid integrations, privacy and launch require owner approval.

## Tooling compatibility note
ESLint 9.39.5 is a documented temporary compatibility pin: current Next preset plugins exclude ESLint 10 from peer ranges. ESLint 10 was evaluated and reverted to avoid unsupported peer dependencies. npm emits a deprecation warning, while lint passes. Upgrade with the compatible preset/plugin release. Playwright CDN denied downloads; system Chromium 154 successfully runs browser checks with no network-policy expansion.

## Phase 1 decisions
- Owner explicitly authorised direct work/pushes on main and Phase 1. Phase 0 fast-forwarded to main before homepage work; no history rewrite. This Git preference supersedes the starter-pack branch/PR guidance, without changing design or release requirements.
- Shared header/footer, accessible modal mobile navigation, reusable action/eyebrow/wordmark/asset/CTA primitives, typed service/process data and complete homepage section structure implemented.
- Lucide added for routine outline service icons, menu/close and arrows. No brand art replacement, animation library or tracking dependency added.
- Official logo remains missing: lowercase text with dot is provisional, identified in source and audit, not claimed as original vector artwork.
- Work images, trust marks, proof/testimonials, metrics, article imagery/content and mascot remain labelled development reservations. No unapproved client names, performance figures or fake articles rendered.
- Canonical domain still missing: canonical omitted when SITE_URL empty; no invented production URL, email or social destination. Verified Organization/WebSite emission deferred until canonical identity is confirmed.
- User-facing product copy remains concise UK English; geographic cue is a quiet secondary line, not a changed hero or Devon nav item.

## Phase 2 — service offering implementation
- Direct-main workflow retained per owner instruction. Only Services overview and four detail pages implemented; no Phase 3 portfolio or later page design started.
- Explicit `/services` and `/services/[slug]` routes replace those catch-all scaffolds. Static generation restricts service slugs to the four canonical offerings; unknown slugs remain 404.
- New typed service-detail data defines distinct fit, boundaries, benefits, process, six solution areas and FAQs for each service. This is PROVISIONAL owner-review service copy derived from master §5, not an approved client/capability credential claim.
- Scope avoids invented platform vendors/certifications, pricing, turnaround, guaranteed outcomes or 24/7 support. Third-party platform/licence/integration obligations are explicitly scoped.
- Routine service/benefit/solution icons reuse existing Lucide dependency. No new dependency, paid service, analytics or contact integration added.
- FAQ buttons have real expand/collapse state, aria-expanded/controls, labelled answer regions and keyboard/pointer support. All answers are in server HTML; no FAQ rich-result claim or markup.
- Service/Breadcrumb JSON-LD builder implemented but emits nothing for draft/approved-only content or absent canonical identity. All current services remain draft; no fake schema endorsements, price or results are emitted.
- Approved ribbon/laptop/platform imagery, workshop/support/partnership photographs, testimonial quotes/attribution, service proof/case media and official identity remain ASSET REQUIRED. Layout reservations are visibly labelled; Information Security Awareness is not fabricated as a publishable case.

## Phase 3 — portfolio evidence gate
- Owner authorised Phase 3 on main. Reference 03's left Work index and right case-study template inspected separately.
- No approved real project record, cleared project image, quote, metric or precise role attribution exists in the repository. The supplied mockups remain concepts; client names and figures in them are not authorisation.
- Work index implemented with functional categories and an honest empty state rather than fabricated portfolio cards. All real detail URLs return 404 until their record passes publication/permission/evidence/rights checks.
- Case-study template, typed evidence/role contracts, shared publication gate, real card links and contextual services implemented. Explicit employment-versus-Butter labels prevent role ambiguity once owner supplies the actual record.
- Disabled-by-default `/review/work` provides labelled layout-only examples and template placeholders for visual/interaction review. No real client identity, invented engagement, outcome statistic or purported project screen is used. These examples are not part of caseStudies and cannot resolve under `/work/[slug]`.
- Owner asked asynchronously for the first approved project, scope, actual role, outcome evidence and permissions. If not supplied in this turn, this remains a concrete Phase 3 publication/launch blocker, not a reason to invent data.
- Asset gaps: original ribbon; official font/logo/mascot; cleared case hero/card/gallery screenshots/device images; partnership photography; approved outcome evidence and client publication permission.

## Owner-requested temporary imagery before Phase 4
The owner explicitly requested placeholder images to visualise the site. Four AI-generated concepts were added in public/assets/placeholders and wired to existing image slots through a central manifest. This authorises temporary visual use, not original-brand identification, real project claims or production sign-off. Every figure has a visible AI-generated-placeholder label. A separate three-image composition preview appears on Work without creating published cases. See temporary-imagery.md for provenance and replacement guidance. Official source assets and the first approved real case remain unresolved; Phase 4 not started.

## Phase 4 — About and genuine Devon relevance
- Owner explicitly authorised the next phase after temporary image review. Direct-main workflow retained; no Phase 5 work started.
- About now has its own page instead of a scaffold: editorial hero, studio explanation, five principles from master §4.6, working approach, Devon/South West/UK coverage, service links and CTA.
- Confirmed facts remain limited to the supplied brief: independent digital learning studio, Devon base, four offerings, South West initial market and UK-wide remote capability. Expanded editorial copy is PROVISIONAL pending owner review; it adds no founding date, headcount, office, credentials or client history.
- Founder name/role/biography/experience/qualifications and a cleared real portrait are not supplied. Owner was asked asynchronously. Data remains null; an explicit development reservation appears rather than an invented person or generated portrait. The approval helper withholds personal presentation without recorded approval, meaningful biography and cleared source portrait.
- Optional /elearning-design-devon intentionally omitted: no differentiated Devon-specific experience, examples or original regional guidance supplied. Existing About, Services and Contact positioning can carry truthful locality initially. No town variants or Devon navigation tab.
- Google Business Profile eligibility remains UNKNOWN: no confirmed real in-person customer contact, hours or eligibility decision. Do not infer eligibility from a Devon base or create a listing for online-only activity. No physical address, hours, map, GBP claim, LocalBusiness or ProfessionalService schema emitted.
- Organization schema prepared from verified brief identity but withheld until approved publication and canonical origin. Person details only enter it through the cleared founder profile; no fabricated person, awards or ratings.
- User-authorised ribbon/workshop concept images reused with labels; workshop is not a photograph of Butter staff or a local project. Official identity assets and real founder imagery remain outstanding.

## Phase 4 owner identity clarification
Owner confirmed Daniel Deveney as Butter's founder in this conversation. This name/role can appear on About independently of the full biography. No CV or career history is attached here, and no cross-chat retrieval capability is available in this session. Career/qualification/experience claims and a genuine portrait remain pending. The full founder profile stays null and Person schema remains withheld.

## Phase 5 and owner CV
- **CONFIRMED SOURCE:** Owner supplied Daniel's two-page CV. Founder identity remains Daniel Deveney. Career and qualifications are available for drafting; personal contact fields are excluded and the raw CV is not committed or served.
- **PROVISIONAL:** Edited biography in `docs/founder-biography-draft.md`; selected qualification titles require review. No award claim, employer result or Butter delivery attribution assumed. **SOURCE AVAILABLE / SELECTION PENDING:** The CV contains a portrait, visually inspected and extracted unchanged locally; confirm website selection/usage or supply a preferred alternative. Full founder profile remains withheld pending approved wording and image selection under master §4.6.
- **IMPLEMENTED:** Insights hub, structured article layouts, topic filtering, reading/contents/source/author/date components, Home/related/service links and shared publication/schema/sitemap controls. No dependencies added.
- **CONTENT APPROVAL REQUIRED:** Two substantive AI-assisted draft guides, proposed Daniel byline and short CV-informed author summary. All remain draft with no publication date. Public hub has a truthful empty state. Local opt-in review renders real prepared drafts, not fictional published articles; no public review link or schema.
- **ASSET REQUIRED:** Cleared editorial images in the insights asset folder. Existing labelled AI concepts reused only for development review. Original logo/font/ribbon/mascot and real project/photo gaps persist.
- **SOURCE CHECK:** W3C's website was blocked by the environment network policy. Read the official W3C WCAG GitHub source (guidelines/index.html and keyboard, focus-not-obscured-minimum, captions-prerecorded, non-text-content criteria) and the official Moodle README instead. Article citations point to the normative WCAG 2.2 URLs and Moodle's project overview; no external live-link check falsely claimed. Practical recommendations are marked editorial guidance, not certified accessibility advice or client outcome evidence.
- **UNCHANGED RELEASE GATES:** No public deployment/indexing, canonical domain, analytics or contact delivery configured. Phase 3 approved-case blocker remains. Phase 6 is not started.

## Phase 6 decisions and owner deferrals
- **CONFIRMED:** Owner accepted prepared review content. Biography/CV portrait/selected qualifications, two substantive articles and Daniel's byline are now included. Completed Home/Services/Work copy is accepted; no fictional Work examples or employer cases published. Raw CV/contact fields excluded.
- **OWNER-APPROVED TEMPORARY USE:** Both accepted articles use manifest-matched concept illustrations with visible labels. This exception lets approved prose appear now without pretending images are final. Original logo/font/ribbon/mascot, real project imagery and final editorial images remain production gaps.
- **IMPLEMENTED:** Contact and draft legal pages, shared Zod validation, server delivery adapter, spam/size/origin checks, pending/success/error/focus states, configuration failure, consent-gated measurement interface, and no database or enquiry logging. Zod 4.6.7 is the only explicit runtime dependency added (already transitive); native fetch avoids a provider SDK.
- **DEFERRED BY OWNER:** Inbox/public email/provider setup “will do this later”; trading identity/hosting/retention “not known at the mo”. CONTACT_ENABLED stays false. No account or live email configured/sent; no approved privacy identity, address, response SLA or retention guessed. New legal copy is draft, not vetted or approved.
- **LIMITATION:** Memory rate limits apply per instance, with a shared unidentified bucket unless hosted behind the selected trusted header. Hosting edge/shared abuse protection and actual origin routing require verification before multi-instance release. No global durability is claimed.
- **NOT RELEASED:** No deployment, indexing or analytics activation. First real approved case/evidence/client media still required. Phase 7 not started.

## Portfolio follow-up — 26 October 2026
- **OWNER REQUEST:** Personal-portfolio migration and supplied two-column tilted-window cards with subtle screen/icon rotation/zoom. This card-specific visual change is authorised; main brand/layout remains intact.
- **SOURCED:** Fourteen narratives and 32 unchanged original images from the owner's older repository, commit 0f650d91b646843c7228d24c5b317652e1d44e4b, which documents earlier personal-site crawls. All cases visibly retain Daniel's professional/employment attribution; no Butter contracts/client approvals invented. Source-reported outcomes retain limits; mismatched video, unsupported regulator endorsement and conflicting project dates omitted.
- **ACCESS BLOCKED:** Live portfolio/domain CDN requests still denied by the cloud proxy. Runtime status still describes restricted destinations with no user-added hosts and observed policy state unknown; actual HTTP denial is distinct from readiness/configuration. No direct-routing/proxy bypass attempted. Domain allowlist/save/publish is needed for current live verification. Filesystem/approval-policy changes did not establish network access.
- **ASSET REQUIRED:** Original imagery for Strategic Skills Mapping, L&D Digital Upskilling, Introducing AI Conversations, AI-Enabled Scenario Learning, Learning at Work Week and Humankind EducatorHub. Their substantial sourced narratives are included with explicit missing-media notices and null image records. No old SVG placeholder promoted to client evidence.
- **MEASURED APPROXIMATION:** Card-only sage/garden/charcoal surfaces and routine Lucide icons derive from the new reference; custom mascot/icon art remains unresolved. Original supplied hero/media and global Butter palette/fonts are preserved.
- **UNCHANGED:** No public release/indexing, email activation, legal facts or Phase 7. Final source completeness remains conditional on a successful live crawl; see portfolio-migration.md/json.

## Portfolio presentation update — 26 October 2026
Owner explicitly confirmed Butter delivery and requested removal of public personal/source attribution. Implemented Butter voice in Work/Home/cases, retaining internal provenance and original media. Live /work and all 16 detail routes were successfully retrieved: added Vaccination Programme and Food Safety Level 3, refreshed four project-reported impact figures per case. Project outputs, self-reports, indirect reach and projected savings retain their distinctions; £5.5M is a projection over six years. Food Safety source conflicts (33% in introduction versus 25% impact); use the explicit impact section's 25%. No independent validation or client endorsement is asserted.
Home: three featured cards in one desktop row. Work: three desktop columns, two tablet, one mobile. Case proof: butter-yellow panel, four desktop columns, two tablet, one mobile. Eight projects have original media; eight retain imagery-pending notices. No new screenshots were attached to this message; existing reference art and latest explicit layout instructions guide the update.
Search audit: unique case metadata/H1 and related-service links retained for all 16 routes; no invented dates/locality/schema. Devon positioning unchanged. Staging remains noindex; no deployment, canonical activation, analytics or contact-provider changes. Status CONDITIONAL: final media, brand assets and existing legal/contact/release gates remain.

## Work imagery completion and gallery removal — 26 October 2026
Owner requested filling remaining Work placeholders from the live portfolio and removing the repeated bottom gallery. Retrieved 31 original project images for the eight previously pending cases, converted to local WebP, and recorded source URLs/hashes in portfolio-migration.json. All 16 cases now have genuine hero/card imagery; source screenshots sit once in the narrative, with no repeated closing gallery. One L&D Digital Upskilling source image returned 404 and is excluded; its third story remains text-only. No fabricated replacement, project claim or client endorsement added. Existing source data/gallery arrays remain as an internal media inventory; the gallery UI is removed. This explicit request supersedes the gallery module in the original case reference.
Search audit: all 16 case titles, descriptions, H1s, related-service links and noindex policy retained. Descriptive image alt text and locally hosted assets added. Devon/UK positioning and measurement readiness unchanged. Other site routes and deferred legal/contact configuration unchanged; no deployment authorised. Task status conditional only on existing final brand/legal/contact/release gates, with project imagery placeholders resolved.

## Sitewide personal attribution removal — 26 October 2026
Latest owner request extends Butter attribution across the site. Service feature labels now credit Butter; published/review article bylines and author descriptions use Butter; Article schema identifies the author as Organization. About retains approved founder experience and portrait with unnamed founder wording; personal-name founder schema is omitted and the public portrait filename/alt text are neutral. Contact, draft notices and legal wording no longer name the individual. Internal provenance remains in source-validation records and documentation; original project screenshots are preserved.
Search audit: unique metadata, real content, service/case/article links and Devon/UK positioning retained. Article author metadata matches the visible Butter byline; no personal-name Person entity is published. Noindex, contact/legal deferrals and deployment gates remain unchanged. This is a scoped copy/attribution correction, not Phase 7 or release authorisation.

## Spacing and surface review — 26 October 2026
Owner approved a moderate increase in negative space plus subtle Butter-brand component backgrounds. First review scope: Home, Work index and Information Security case only; remaining case templates and site routes await review. Scoped styles/spacing-review.css uses existing canvas/cream/paper/butter tokens, with 48–96px section padding, 24–48px panel padding, 32–40px heading separation, 40px desktop card column gaps and 64px row gaps. Hero padding reaches 86–96px at large desktop; mobile remains 56px. Body copy uses 1.6 line-height, with case paragraphs limited to 62ch. Home process and proof support areas use cream; case deliverables use cream and outcomes use paper. Yellow services, impact and CTA panels remain the strongest colour anchors.
Retains the three-column desktop work grids, four impact columns, all original project media, tight display headings, no duplicate closing gallery and sitewide Butter attribution. Authorised spacing/surface variation supersedes original reference density for these three review routes only. No added assets, libraries, claims, dates or content.
Search audit: unchanged metadata/canonical policy/H1s and related-service/article links; Devon/South West/UK copy retained. All routes remain noindex, legal/contact/measurement configuration deferred. No deployment or public indexing authorised. Other Services/About/Insights/Contact/legal pages have no scoped styling changes. Task is a design review pass, not launch approval.

## Services refinement and navigation — 26 October 2026
Owner requested more breathing room on Services, individual-service access under the navbar and real Work imagery. Services overview and all four details now use 48–96px section rhythm, cream/paper support surfaces, more generous card/panel padding and 1.6 body leading. Overview hero prioritises two readable columns; narrow provisional ribbon column is hidden. Four overview cards remain on wide desktop, two tablet and one mobile. Detail process steps use a readable 2x2 desktop grid, single column mobile; project feature uses a wider media-first layout. Removed detail testimonial placeholders in favour of useful standard FAQs.
Curated existing published cases: eLearning → Information Security; Platforms → Your Learning Platform; Strategy → Strategic Skills Mapping; Support → Humankind EducatorHub. Original hero images/captions link directly to their cases, with a different original story screen in each featured project. Overview partnership module uses a labelled Humankind project image, replacing the AI workshop illustration without implying it depicts a real client meeting. No new client claims, metrics, source assets or dependencies.
Services remains a normal overview link with a separate native disclosure for four service links. Supports keyboard/touch, Escape/focus return, outside click and focus departure; mobile menu shows the links as a smaller nested service group and retains modal scrolling/focus handling. This explicitly requested grouping and density variation supersedes the previous flat navigation/reference density, retaining the four top-level destinations.
Search audit: all five service routes retain unique title/description/H1, useful server-rendered service/FAQ copy, Devon/South West/UK positioning and direct case links. Existing noindex/canonical/structured-data policy retained. Other routes keep their content; shared header now exposes the service group sitewide. Contact/provider/legal/release gates remain deferred; no deployment authorised.

## Homepage hero artwork — 26 October 2026
Owner uploaded public/assets/brand/Hero image.jpeg and explicitly requested homepage-only use. Replaced the Home ribbon placeholder/cross annotation with the exact supplied 2048px square image, responsive Next Image sizing, intrinsic dimensions and preload. Full composition retained without cropping or image edits. This is owner-approved illustrative brand artwork; the pictured 75% is part of the illustration, not a published project-performance claim. Services and other routes retain their current images; shared ribbon placeholder data unchanged.
Search audit: Home title/description/H1, Devon positioning and real text/CTAs unchanged. Descriptive alt text added, no numeric result/schema claim added. Noindex, legal/contact and public release gates unchanged.

## Humankind card screenshot and compact header — 26 October 2026
Owner uploaded Screenshot 2026-10-26 at 16.22.39.png in the Humankind project folder and requested card use, with no large Butter wordmark and a smaller browser header. Humankind card.screen now uses that exact screenshot with descriptive alt text; internal owner-upload hash/provenance recorded in portfolio-migration.json. Optional compactHeader presentation removes the wordmark and reduces browser chrome from 37px/12% to 22px/8%, retaining the dots. Existing sage surface, tilted window, shadow, decorative orbit, bulb/spark/arrow icons and hover/reduced-motion CSS remain unchanged. Other project cards retain their existing header treatment. Case hero/story media unchanged.
Search audit: card still links to the same Humankind detail; no text/metadata/outcomes/geography/public-indexing changes. Owner screenshot is an original project screen; no generated replacement or new endorsement. Scoped artwork update, no deployment authorisation.
