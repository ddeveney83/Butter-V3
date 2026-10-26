# BUTTER — PERMANENT CODEX INSTRUCTIONS

**ALWAYS READ `BUTTER_MASTER_SPEC.md` IN FULL and `BUILD_ROADMAP.md` at the START of every task, before editing code, design, components, copy, dependencies, or project files.** The master specification is the authoritative contract; the roadmap translates §12 into execution gates. This short file exists because Codex auto-discovers root `AGENTS.md`, while the much longer specification would exceed Codex's default auto-loaded instruction-size budget. Do not treat the shorter file as a substitute for the full spec.

## Absolute priorities

1. **Visual truth:** Inspect `reference/01-home-desktop.png`, `02-services-desktop.png`, `03-work-and-case-study-desktop.png` (two page designs in one image), and `04-elearning-service-desktop.png` whenever working on the corresponding layout. Reproduce the Butter references as faithfully as possible, not just "inspired by" them.
2. **No design hallucinations:** Keep the warm off-white, butter-yellow, near-black, huge editorial typography, fine dividers, specific layout proportions, ribbon art motif, black pill buttons and restrained playful CTA mascot. Never introduce unrelated palettes, fonts or generic component styling.
3. **No business hallucinations:** Never invent original fonts, branded artwork, project images, client relationships, agency delivery claims, testimonials, qualifications, metrics, legal approvals or working integrations. Mark missing inputs and distinguish approved facts from provisional choices.
4. **Devon-first search from day one:** Butter is based in Devon and initially targets Devon and South West organisations while welcoming UK-wide commissions. Read master §§3, 10 and 12. Integrate technical SEO, trustworthy answer-first content (AEO), and evidence-led generative-search discoverability (GEO) in **every phase**, not only launch. Never invent an Exeter office/address or local proof, add spammy city pages, promise AI citations or imply Google Business Profile eligibility for online-only services.
5. **Phase gate discipline:** Use phases 0–8 in `BUILD_ROADMAP.md`; explicitly account for the Home, Services + four detail pages, Work + case studies, About, Insights + articles, Contact and legal footer. At each phase verify metadata/canonicals/indexing, Devon positioning, internal links and measurement readiness. Do not launch with any of the four nav routes or Contact unfinished.
6. **Tech baseline:** Fresh maintainable Next.js App Router + TypeScript strict + Tailwind design tokens; reusable React components; typed content; real server-side lead form via configured provider; accessible responsive semantic UI. Read precise requirements in the full spec.
7. **Real functionality:** Every visible navigation item and CTA works. Case filters, FAQ accordions, mobile navigation and enquiry form have real implementation and tests. Never display a form success message when an email was not actually accepted by the backend/provider.
8. **Accessibility and quality:** Aim WCAG 2.2 AA. Test desktop and mobile, run lint/typecheck/build and relevant browser tests. Check design regressions after shared UI changes.
9. **Record gaps and progress:** Maintain `docs/decisions-and-gaps.md`, `docs/visual-audit.md`, `docs/content-approvals.md`, `docs/search-and-content-plan.md`, `docs/phase-status.md` and `docs/launch-checklist.md` as specified. Keep them factual and clear.
10. **Change control:** Do not carry over the old Butter site styling, redesign approved layouts, create random new dependencies, or publish placeholder case studies/articles as genuine. Document and seek approval for significant visual deviations or external commercial services.

## Mandatory workflow for EVERY task

1. Read the **entire** `BUTTER_MASTER_SPEC.md`, `BUILD_ROADMAP.md` and relevant reference images; inspect current repository implementation.
2. State the exact relevant requirements and flag blockers/assumptions, distinguishing confirmed facts from visually measured approximations and source-asset gaps.
3. Implement the smallest coherent solution that stays within Butter's design system, using shared components.
4. Run relevant checks, including a per-route SEO/AEO/GEO/Devon audit. Capture and compare screenshots when changing UI; never call something pixel-perfect without comparing it.
5. Report what changed, what ran, phase PASS/CONDITIONAL/BLOCKED status, indexed/public route and search gates, outstanding visual/content/asset/integration gaps, and the next recommended action.

**If any brief or follow-up conflicts with `BUTTER_MASTER_SPEC.md`, do not silently replace brand foundations. Identify the conflict and ask for a decision before making a substantial aesthetic/architectural change.**

## Owner-approved Git workflow

The owner explicitly requested working and pushing directly on `main` after Phase 0 to simplify management. Use `main` for subsequent phases unless the owner changes this preference. Continue phase-by-phase review and stop before the next phase; this does not authorise website deployment or waive content/brand approval gates.

## Owner-authorised temporary image review

Before Phase 4, the owner requested temporary images to visualise the layouts. AI-generated concept images in `public/assets/placeholders/` are permitted for this review, with visible “AI-generated placeholder” labels. They are not original brand artwork, real people/client projects, testimonials or publication evidence. Preserve these labels and the separate empty approved-case collection; final source-asset and approval gates still apply. Phase work remains subject to the owner’s explicit per-phase instructions.

## Owner acceptance and Phase 6 deferrals
On 25 October 2026 the owner instructed adding everything prepared for review, then Phase 6. The CV-derived biography/qualifications, supplied portrait, two prepared articles, Daniel's author summary/bylines and existing page copy are accepted for inclusion. Temporary editorial illustrations may accompany the accepted articles in the development preview **with their AI-generated placeholder labels**; they remain provisional assets. Do not turn fictional Work layout examples into genuine cases or invent missing client permission/evidence. This acceptance does not authorise deployment or public indexing.

The owner explicitly deferred the enquiry inbox/provider setup and stated legal identity/hosting/retention are not yet known. Keep delivery disabled and new legal documents clearly draft pending those facts. Do not request the same details again during this phase or infer business contact details from the CV. Finish/test the safe implementation and document the remaining activation/receipt checks. Phase 7 still requires separate instruction.

## Owner-requested portfolio migration and card reference
On 26 October 2026 the owner requested importing projects from their personal portfolio and supplied a new two-column card reference with tilted screens, playful icons and subtle hover rotation/zoom. This explicitly authorises the card-grid variation and scoped artwork tones; retain the rest of Butter's design system and reduced-motion support. Reuse original source project media/content only, with Daniel's professional/employment role visible; never recast these as Butter commissions or fabricate client endorsement. An owner-controlled GitHub snapshot supplies fourteen sourced stories/32 original images while the live domain is network-blocked. Six stories lack original media and must retain explicit imagery-pending notices, never fake screenshots. See docs/portfolio-migration.md/json for sources, permission distinctions and access/completeness gaps. This is a portfolio follow-up, not Phase 7 or deployment authorisation.
