# Butter — Website Build Project

Independent digital learning studio | Devon, South West England and UK-wide

**Status:** Phases 0–4 foundations, Home, Services, Work engineering and About implemented on `main`: Next.js development shell, route inventory, design tokens, search safeguards and audit documents. This is **not a completed or publicly launchable website**. Phase 1 visual acceptance remains conditional on approved brand assets and content.

## Begin here

1. Read [`SETUP_GITHUB_CODEX.md`](./SETUP_GITHUB_CODEX.md) for novice-friendly instructions using GitHub Desktop (recommended on Mac), or GitHub in a browser.
2. Read [`AGENTS.md`](./AGENTS.md) — the concise persistent instructions that Codex discovers automatically.
3. Read [`BUTTER_MASTER_SPEC.md`](./BUTTER_MASTER_SPEC.md) — the full technical/visual/SEO/AEO/GEO contract.
4. Read [`BUILD_ROADMAP.md`](./BUILD_ROADMAP.md) — the controlled Phase 0–8 sequence covering every navigation page.
5. Read [`CODEX_FIRST_PROMPTS.md`](./CODEX_FIRST_PROMPTS.md) — exact prompts for Phase 0, Phase 1 and subsequent phases.
6. Keep the original visual references in [`reference/`](./reference/).

### Rules

- Use a **new repository**, not the previous Butter website repository.
- Treat the four original PNGs as design evidence, not as production web page screenshots to paste into the live site.
- Do not invent client relationships, case study results, testimonials, logo approvals, source brand font, mascot/ribbon SVGs or a physical office.
- Devon-first local positioning; South West and UK-wide coverage. Technical SEO, AEO and GEO are required from Phase 0.
- **GitHub `main` is the source of truth**; the owner has requested direct work and pushes on `main`. Continue reviewing one phase at a time before beginning the next.
- Never commit credentials, form enquiry data, `.env.local` or generated build artifacts. Hosting/live content and GitHub source storage are separate.

## What is in this initial repository?

```text
AGENTS.md
BUTTER_MASTER_SPEC.md
BUILD_ROADMAP.md
CODEX_FIRST_PROMPTS.md
SETUP_GITHUB_CODEX.md
README.md
.gitignore
reference/
  01-home-desktop.png
  02-services-desktop.png
  03-work-and-case-study-desktop.png
  04-elearning-service-desktop.png
```

Additional `app/`, `components/`, `lib/`, `content/`, `public/` and `docs/` folders will be created by Codex as implementation progresses, consistent with the master spec.

## Development foundations

Use Node 24 (`.nvmrc`) and npm.

```sh
npm ci
npm run dev
```

Checks: `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, then `npm run test:e2e` (starts its own production server). Playwright automatically uses system Chromium in this cloud environment. See [architecture](docs/architecture.md), [phase status](docs/phase-status.md), [asset gaps](docs/decisions-and-gaps.md) and [search plan](docs/search-and-content-plan.md).

Home, About, Services overview and all four details, Work, Insights, Contact, Privacy and Terms now have implemented pages. The owner accepted the founder biography/CV portrait and two substantive Insights articles; these appear in normal page lists and detail routes. Work now includes fourteen sourced stories from Daniel’s professional portfolio, with original imagery for eight and explicit imagery-pending states for six. Temporary AI illustrations retain visible labels.

Contact has a finished form and server-side Resend adapter, but **email delivery is disabled at the owner's request** until account/inbox/domain configuration is supplied. Privacy and Terms are substantial drafts pending the trading identity, hosting and retention decisions. No real inbox receipt or legal approval is claimed. See [contact setup](docs/contact-setup.md).

All pages remain noindex, SITE_URL is unset and sitemap empty. No deployment or analytics activation. Work directly on main as requested; do not begin Phase 7 without instruction.

## Optional local design review

`ENABLE_DESIGN_REVIEW=true npm run dev` enables `/review/work` for labelled fictional layout examples, never genuine portfolio proof. Keep it false on public hosts; it is not authentication. Insights review routes now return 404 because both prepared drafts have been accepted and moved to their normal article URLs.

Review the [accepted biography](docs/founder-biography-draft.md), [LMS guide](docs/editorial-review/choosing-an-lms-for-your-organisation.md) and [accessibility guide](docs/editorial-review/practical-accessibility-for-digital-learning.md). The full CV and private contact fields are not committed or served. Original brand/editorial assets, six project image sets, current live-source verification, email activation, final legal text and launch approval remain outstanding.

## Personal portfolio migration

Fourteen source-backed cases, original image provenance, role attribution, two-column cards and reduced-motion-aware hover effects are now implemented. The original portfolio domain is still network-blocked, so this import uses the documented source snapshot in the owner’s older GitHub repository; it does not claim a fresh live crawl. See [migration inventory and access notes](docs/portfolio-migration.md) and [source/image ledger](docs/portfolio-migration.json). No old application styling/backend or artificial course demos were imported.
