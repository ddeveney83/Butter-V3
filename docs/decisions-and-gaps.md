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
