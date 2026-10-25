# Butter — exact prompts to give Codex

**IMPORTANT:** Use **one phase at a time**. Make phase changes on a working branch, review screenshots and tests, then approve a pull request into `main` before continuing.

## Prompt 1 — verify understanding (no changes)

```text
You are working in the brand-new Butter website repository. Before changing anything, read AGENTS.md, the full BUTTER_MASTER_SPEC.md and BUILD_ROADMAP.md; inspect all four PNGs in reference/. Confirm that these are the authoritative instructions. Summarise the exact nine-phase build plan (0–8), all website menu destinations, the provisional design tokens/font assumptions, the Devon-first SEO/AEO/GEO strategy, the technical architecture and any missing brand/business assets. Do NOT write or change code yet. Do not invent brand assets, client evidence or a Devon street address.
```

## Prompt 2 — Phase 0: foundation only

```text
Read and follow AGENTS.md, the complete BUTTER_MASTER_SPEC.md and BUILD_ROADMAP.md; inspect the reference screenshots.

Implement PHASE 0 ONLY in this new repository:
- Audit the concept art; record measured design tokens, provisional fonts and missing original assets.
- Scaffold a maintainable Next.js App Router / TypeScript strict / Tailwind CSS codebase.
- Establish central design tokens, semantic layout primitives, shared navigation/footer scaffolding and the full route inventory for Home, Services (and 4 detail pages), Work (and approved case studies), About, Insights (and articles), Contact, Privacy and Terms.
- Produce a page-by-page Devon-first, South West and UK-wide search-intent plan, crawlability/indexing/metadata/canonical design, sensible verified schema plan, internal-link model and AEO/GEO content requirements.
- Set up lint, type checking, build commands and any necessary test harness, plus draft evidence / decision / content-approval logs under docs/.
- Do not invent brand artwork, original fonts, a local address, case study results, conversion metrics, testimonials, legal language or unconfigured integrations.
- Do not complete other phases, publish the website or claim any enquiry form is operational without verified delivery.

Run appropriate checks, list exact files changed, report PASS/CONDITIONAL/BLOCKED and unresolved dependencies, then stop for review. Work on a phase branch rather than directly on main.
```

## Prompt 3 — Phase 1: homepage visual benchmark

```text
Re-read AGENTS.md, the complete BUTTER_MASTER_SPEC.md and BUILD_ROADMAP.md, and inspect reference/01-home-desktop.png. Implement PHASE 1 ONLY: reproduce the entire homepage as faithfully as approved assets allow. Keep the actual reference image as a design target, not a substitute for implemented HTML. Apply accessible responsive design, shared header/footer and SEO/AEO/GEO foundations. Flag ribbon/mascot/logo/photo/font source gaps rather than generating unrelated substitutes. Capture 1440px desktop and 390px mobile screenshots, compare the implemented design to the source image, fix material differences, test key links and navigation, run lint/typecheck/build, and report the phase gate with any unresolved assets. Do not build later pages yet. Work on a phase branch and propose a pull request for my review.
```

## Prompt 4 — reusable next-phase command

```text
Re-read AGENTS.md, the entire BUTTER_MASTER_SPEC.md and BUILD_ROADMAP.md and inspect the relevant source PNG(s). Work on PHASE [NUMBER] ONLY, including every named page, interaction, route, responsiveness, accessibility, Devon-first SEO/AEO/GEO gate and truthful business-content requirement. Use the existing Butter design system; do not redesign, hallucinate or introduce unapproved assets. Run lint/typecheck/build and page-specific tests, document screenshot comparisons and any gaps, update docs/phase-status.md, and submit the changes for review in a branch/PR. Do not start another phase without approval.
```

## Later: pre-launch check

```text
Perform the full Phase 7 QA / Phase 8 launch-readiness audit, WITHOUT deploying or publishing. Verify every nav/CTA and live form delivery, authorised assets, approved client/project attribution, privacy and terms, mobile accessibility, consent-aware analytics, SEO metadata and sitemap/indexing configuration, Search Console readiness, and all unresolved blockers. Return a release gate: PASS, CONDITIONAL or BLOCKED, with objective evidence and a precise issue list.
```
