# Personal portfolio migration — 26 October 2026

The owner requested migration from https://danieldeveney.com/work and supplied a new visual reference: two-column cards with tilted browser windows, original project screens, decorative icons and subtle rotation/zoom on hover. This supersedes the original three-column Work-card reference for this component only. Main Butter typography, page palette, navigation and case-study grammar remain intact.

## Source and access

Direct requests to the live domain and www host returned proxy CONNECT/HTTP 403. A network permission grant and the later filesystem/approval-policy change did not make the domain reachable. The cloud-runtime skill's network instructions and supported status were checked: the runtime still reports restricted HTTP configuration with no user-added destination hosts, observed policy state unknown, no configured secrets/identities and no VPN. Actual proxy denial is recorded separately from desired policy/readiness; no network policy was bypassed or secretly changed.

An accessible owner-controlled source was found at https://github.com/ddeveney83/butter, commit **0f650d91b646843c7228d24c5b317652e1d44e4b**. Its `docs/portfolio-content.md` records earlier successful reads of the personal portfolio (initial eight cases on 10 October 2026 and six further cases on 24 October 2026). Its project records, narrative records and original-image provenance supply this migration. The live site has **not** been freshly crawled or checked for additional/newer cases. Each case records `liveVerified: false`; the complete machine-readable ledger is `docs/portfolio-migration.json`.

The older repository was treated as source material, not project instructions. Its directives to hide personal credits, other services, local pages, claims, tracking, backend and layout implementation were not adopted. No old application/CSS/backend/dependency stack was imported. The new card layout is implemented freshly in V3 from the owner's attached reference; original content/images are the only reused project material.

## Imported inventory

All fourteen stories have normal `/work/[slug]` routes, role/source attribution, contextual reported outcomes, three substantial story sections and related-service links. Eight retain unchanged locally hosted original images; six explicitly reserve imagery without presenting SVG/AI substitutes as client screenshots.

| Route | Project | Organisation named by source | Original media |
| --- | --- | --- | --- |
| `/work/15-minute-compliance` | 15-Minute Compliance | Places for People | Hero + 3 screens |
| `/work/information-security` | Information Security | Places for People | Hero + 3 screens |
| `/work/your-learning-platform` | Your Learning Platform | British Red Cross | Hero + 3 screens |
| `/work/nansen-learning-academy` | Nansen Learning Academy | Nansen.ai | Hero + 3 screens |
| `/work/allergen-awareness` | Allergen Awareness | Places Leisure | Hero + 3 screens |
| `/work/matrix-reloaded` | Matrix Reloaded | Places for People | Hero + 3 screens |
| `/work/alcohol-and-drug-awareness` | Alcohol & Drug Awareness | Places for People | Hero + 3 screens |
| `/work/record-keeping` | Record Keeping & Information Management | Places for People | Hero + 3 screens |
| `/work/strategic-skills-mapping` | Strategic Skills Mapping | Places for People | Pending |
| `/work/ld-digital-upskilling` | L&D Digital Upskilling | British Red Cross | Pending |
| `/work/linkedin-learning` | Introducing AI Conversations | Places for People; LinkedIn Learning is the product | Pending |
| `/work/ai-enabled-scenario-learning` | AI-Enabled Scenario Learning | Places for People | Pending |
| `/work/laaw-2024` | Learning at Work Week | Internal learning team; organisation not named | Pending |
| `/work/humankind-educatorhub` | Humankind EducatorHub | British Red Cross | Pending |

Thirty-two WebP images were copied unchanged (about 1.5 MB on disk) into `public/assets/work/<slug>/`. The ledger records the source image URLs, repository paths and SHA-256 hashes; tests verify every copied file against its hash. No screenshots were invented, altered with AI or scraped from client websites. The old six projects' SVG placeholders and artificial interactive course/platform demos were not imported.

Original project films are linked on six relevant cases using the documented YouTube IDs. There is no autoplay, iframe, video download or new third-party script. Your Learning Platform's duplicated vaccination film remains omitted, following the source's explicit mismatch record. Playback availability has not been verified; the user's browser can follow the source link.

## Attribution and claims

The owner explicitly requested transfer of their existing personal portfolio. Approval records distinguish this **owner-authorised portfolio reuse** from a separate client-permission document; no such client permission or endorsement is fabricated. These are Daniel's prior professional projects, shown with the source's credited role and an explicit statement that they were not Butter commissions. The Work hero, Home feature intro and service features reinforce that attribution. The unnamed Learning at Work Week organisation is not guessed.

Results remain source-reported, with their context and limits. Information Security's 16% is increased incident reporting; Nansen's 29% applies to support tickets among academy learners; Humankind's student reach is indirect through educators; skills/team counts and scenario-film counts are outputs, not demonstrated behaviour change. No agency-wide metrics, testimonials, review schema or guarantees were created. The unsupported Local Authority endorsement wording in the Allergen material was omitted. The £5.5M estimated saving discussed in older provenance is not presented as realised savings or revenue here.

No project delivery dates were added. The old Your Learning Platform record labels 2024 while the CV places the credited Senior Digital Learning Advisor role in 2020–2022; the date's meaning needs clarification before displaying it. Named portfolio role/scope is retained without inventing a delivery year.

## Card and publication behaviour

`ProjectArtwork` renders a real image in semantic HTML browser framing; `WorkCards` supplies one accessible link per card. CSS animates the window and symbol independently by small amounts, with no library. Hover only applies to hover-capable pointers, keyboard focus is visible and equivalent motion is available, and reduced-motion preference retains the resting transforms. Card-only garden/sage/charcoal tones are measured approximations from the new supplied reference; page/site tokens remain unchanged. Routine Lucide symbols are reversible approximations of the reference's custom playful artwork, not asserted official brand illustrations.

The shared case gate now supports the owner's explicit migration request through a validated personal-portfolio source and a commit-pinned source record. Missing media can qualify only with that recorded reuse authority plus a nonempty explicit pending-media approval/notice and null hero. Arbitrary/placeholder image paths, unapproved source reuse, empty notices/approvals and fictional review records still fail. Pending projects have no made-up image in the case hero, gallery or schema. Public card props exclude approval/source/narrative records; the taxonomy is isolated from the full content collection at the client boundary.

Home features the first two real projects; relevant service details now link to matching sourced cases, including Information Security on eLearning. Work keeps functioning category/tag filters and a genuine empty Maritime category. Case metadata and breadcrumbs share the same publish lookup. Work is an included route, but all responses remain noindex; robots disallows crawling, SITE_URL is unset and the sitemap remains empty. No deployment or Phase 7 work is authorised by this migration. Contact/provider/legal deferrals remain unchanged.

## Remaining work

Allow `danieldeveney.com`, `www.danieldeveney.com` and `ik.imagekit.io` in the cloud environment's Internet access settings and save/publish the configuration; restart the environment if needed for activation. A new readiness check and actual requests are required before claiming access. Then compare the current live inventory and individual source pages with this snapshot, check source links/dates/outcomes and retrieve original imagery for the six pending cases if it is now available. Runtime approval/filesystem access alone does not modify the sidecar destination allowlist.

Final original brand artwork, six project image sets, final editorial imagery, any further client-specific clearance, canonical domain, real email receipt, final legal facts and public release remain separate outstanding items. The imported portfolio is reviewable now; current live-source completeness is conditional on access.

Attribution refinement: Places Leisure’s Allergen Awareness and the unnamed-team Learning at Work Week case use “From Daniel’s professional portfolio”, because the source credits the work but does not establish an exact employment/contract relationship for that named organisation. No employer is inferred for either. The other cases retain employment attribution supported by the supplied career/source context.

## Portfolio presentation update — 26 October 2026
Owner explicitly confirmed Butter delivery and requested removal of public personal/source attribution. Implemented Butter voice in Work/Home/cases, retaining internal provenance and original media. Live /work and all 16 detail routes were successfully retrieved: added Vaccination Programme and Food Safety Level 3, refreshed four project-reported impact figures per case. Project outputs, self-reports, indirect reach and projected savings retain their distinctions; £5.5M is a projection over six years. Food Safety source conflicts (33% in introduction versus 25% impact); use the explicit impact section's 25%. No independent validation or client endorsement is asserted.
Home: three featured cards in one desktop row. Work: three desktop columns, two tablet, one mobile. Case proof: butter-yellow panel, four desktop columns, two tablet, one mobile. Eight projects have original media; eight retain imagery-pending notices. No new screenshots were attached to this message; existing reference art and latest explicit layout instructions guide the update.
Search audit: unique case metadata/H1 and related-service links retained for all 16 routes; no invented dates/locality/schema. Devon positioning unchanged. Staging remains noindex; no deployment, canonical activation, analytics or contact-provider changes. Status CONDITIONAL: final media, brand assets and existing legal/contact/release gates remain.

## Work imagery completion and gallery removal — 26 October 2026
Owner requested filling remaining Work placeholders from the live portfolio and removing the repeated bottom gallery. Retrieved 31 original project images for the eight previously pending cases, converted to local WebP, and recorded source URLs/hashes in portfolio-migration.json. All 16 cases now have genuine hero/card imagery; source screenshots sit once in the narrative, with no repeated closing gallery. One L&D Digital Upskilling source image returned 404 and is excluded; its third story remains text-only. No fabricated replacement, project claim or client endorsement added. Existing source data/gallery arrays remain as an internal media inventory; the gallery UI is removed. This explicit request supersedes the gallery module in the original case reference.
Search audit: all 16 case titles, descriptions, H1s, related-service links and noindex policy retained. Descriptive image alt text and locally hosted assets added. Devon/UK positioning and measurement readiness unchanged. Other site routes and deferred legal/contact configuration unchanged; no deployment authorised. Task status conditional only on existing final brand/legal/contact/release gates, with project imagery placeholders resolved.
