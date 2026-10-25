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

Home, About, Services overview and all four service detail pages are implemented for development review; Work includes filters and a case template, with no approved real cases yet; remaining destinations are labelled draft scaffolds. Indexing is disabled throughout. Case/article detail routes and the optional Devon page remain unavailable until approved content exists. Do not deploy this as the finished website or begin a new phase without instruction. No contact form/provider is configured.

## Work design review (optional, local only)

`ENABLE_DESIGN_REVIEW=true npm run dev` enables `/review/work` for local inspection of labelled layout examples and the case template. The route returns 404 by default, has no public navigation link and never publishes a project. Do not enable it on a public host. Real cases require owner/client approval, exact role attribution, cleared media and evidence; see `docs/content-approvals.md`.

Temporary AI-generated images have been added at the owner’s request for layout visualisation. They remain labelled and separate from real case evidence; see [temporary imagery](docs/temporary-imagery.md). Phase 4 About is implemented for review; founder details and final assets await approval.

About now has a dedicated studio/approach page with truthful Devon positioning. The optional Devon landing page remains omitted pending differentiated original content. Founder details are not inferred; see [phase status](docs/phase-status.md).
