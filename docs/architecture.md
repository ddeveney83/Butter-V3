# Phase 0 architecture and development

Fresh Next.js App Router + strict TypeScript + Tailwind 4. Server Components by default. Node 24/npm pinned; dependencies exact and package-lock committed. No old Butter implementation carried over.

## Commands
```sh
npm ci
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```
Use `npm run start` after a build to run production mode. E2E starts its own production server on port 3000; stop a manually started server before running it. This cloud machine already has Chromium 154 at /usr/bin/chromium. Playwright uses it automatically; elsewhere set PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH or install the matching Playwright Chromium. CDN downloads were denied here, so they are not part of cloud setup. Node/npm caches are in /workspace for cloud filesystem permissions. Build is performed once; browser tests reuse it with two workers.

## Boundaries
- `app/`: root shell, development route scaffolds, metadata, robots/sitemap, real 404.
- `content/routes.ts`: complete static inventory, owning phases, intents, draft states, nav map and detail/optional patterns.
- `content/editorial.ts`: future typed approval/evidence contracts; no fictitious entries.
- `lib/`: shared configuration, HTTPS canonical validation and metadata helper.
- `components/layout/`: deliberately basic development shell; replace with faithful header/footer in Phase 1.
- `styles/tokens.css`: measured palette and reusable layout tokens.
- `public/assets/`: empty approved-source destinations; reference PNGs stay outside public.
- `tests/`: publication/canonical checks and real browser shell, route, keyboard, noindex and exclusion checks.
- `docs/`: required decisions/visual/content/search/phase/launch records.

A single statically generated catch-all currently serves only known scaffold destinations. Unknown paths, project/article details and the optional regional page return 404. As each phase begins, replace its scaffolds with explicit route files and approved typed content; never turn the catch-all into a generic published template. No contact API exists before the real integration phase.

## Tool and dependency rationale
Next/React are runtime; Tailwind/PostCSS are styling compilation. Inter/Inter Tight variable packages provide legally distributed provisional local fonts, with included licences. TypeScript/types, ESLint Next presets, Prettier, Node test runner via tsx, Playwright are development tooling. Zod/Lucide/provider SDK are intentionally deferred until used. No UI framework, CMS, database or motion/state library.

Next.js official source docs consulted for manual installation and robots conventions; stable dependency versions confirmed through npm metadata. No experimental compiler/cache features enabled. Hosting assumption is Netlify pending current server/adapter validation, not a static export; Vercel is an alternative requiring selection. Secrets remain server-only and outside Git.

## Review and working model
Use this existing isolated checkout; do not create a worktree unless requested. Phase branch: phase-0-foundation. Main remains approved source. Each later phase is separate/reviewed before moving on; no automatic merge or website deployment.

ESLint 9.39.5 is retained because the installed Next preset’s import/react/a11y plugins do not declare ESLint 10 compatibility. npm reports upstream deprecation; lint executes cleanly. Revisit when the preset/plugin peer ranges support ESLint 10. Production dependency audit currently reports zero vulnerabilities.

Next.js automatic agent-rule generation is disabled with `agentRules: false` so `npm run dev` preserves the authoritative supplied AGENTS.md. No project instruction documents were replaced.

## Phase 1 and current working model
Owner requested working directly on main; Phase 0 is now on main and Phase 1 is also delivered there. Do not require a branch or PR unless requested again. Review each phase before proceeding; public release remains separate.

The development header/footer were replaced by SiteHeader/SiteFooter and reusable primitives. A native modal dialog handles mobile navigation; explicit first/last Tab wrapping, Escape, focus restoration and body scroll restoration are implemented. All noninteractive homepage content remains server-rendered. Asset placeholders reserve layout only, with visible status labels and no fictional source material. Routine icons use lucide-react.

## Phase 2 service architecture
Explicit static `/services` index and four generated `/services/[slug]` routes replace the matching catch-all scaffolds. The catch-all retains only the other planned destinations. `content/service-details.ts` keeps service-specific content separate from reusable layouts. Shared ProcessSteps, FAQSection, RelatedServices and FAQAccordion serve all service routes. The shared BottomCTA now accepts a heading prop with an unchanged Home default. `styles/services.css` scopes layout rules to services and preserves Home styling.

Service JSON-LD generation in `lib/service-schema.ts` requires both published status and an approved canonical origin; current content remains draft. Browser tests cover all five destinations, FAQ keyboard/pointer states, related links, active navigation, distinct server HTML metadata, all six widths and screenshot evidence. No package additions or runtime secrets required.

## Phase 3 — Work architecture
Explicit `/work` and `/work/[slug]` routes replace the Work scaffold. `content/case-studies.ts` defines real project narratives, attribution, approval, rights and evidence; its collection remains empty. `content/editorial.ts` re-exports it for compatibility, retaining Insights separately.

`lib/work.ts` provides the shared fail-closed publication predicate used by both list and detail lookup. It requires published status, owner/client permission records, meaningful role/context/approach/outcomes evidence, cleared hero/gallery media and known related services. Draft/approval-only records never enter public lists or resolve at detail URLs. Card data is reduced to display fields before passing to client UI; approval/evidence records are not sent to the browser as card props. Breadcrumb schema uses the same predicate plus confirmed canonical identity.

`WorkGallery` is a client island with pure category/tag matching in `lib/work-filter.ts`; all filters are native buttons, with aria-pressed, controlled result region, live counts and an accessible reset/empty state. All published cards are in initial server HTML. `CaseStudyLayout` is server-rendered, with actual attribution, Challenge/Approach/Deliverables, optional evidenced proof, approved gallery, outcome narrative, service links and CTA.

Optional design review: start with `ENABLE_DESIGN_REVIEW=true npm run dev` and request `/review/work` locally. It contains six explicitly labelled layout examples and the case template, never real client names/results. It is disabled by default and returns 404 unless that exact runtime flag is true; it has no public navigation link or sitemap entry. It is not authentication: do not enable on a public deployment. No project is published by enabling it. `.env.example` documents false as the default.

Playwright enables the review route only for its controlled production test server so populated filtering and the full template can be tested without seeding production content. Validate the default disabled behaviour separately using a production server without the flag. No dependencies, credentials or commercial integrations added.

## Phase 4 About architecture
Explicit app/about/page.tsx replaces the About catch-all scaffold. content/about.ts separates principles/working-style copy and a nullable founder profile from the layout. lib/about.ts gates founder display on recorded approval, real biography and cleared portrait under the people asset path; placeholder imagery is rejected. Organization identity data is publication/canonical-gated and adds Person information only for that same cleared profile. It never infers a LocalBusiness from geography.

About uses existing ActionLink, Eyebrow, AssetPlaceholder, ProcessSteps and BottomCTA primitives, preserving the temporary image labels. styles/about.css is scoped to About, with the same tokens/grid/hairlines and responsive hierarchy. No new dependency, client-side interaction, credentials, external service or deployment needed. Optional Devon route remains absent/404.

## Phase 5 Insights architecture
Explicit `/insights` and `/insights/[slug]` routes replace the hub scaffold. `content/insights.ts` holds typed structured articles (answer, sections, scoped source references, author, approval, real dates, images and service/related links). Two substantive AI-assisted drafts are prepared for owner review; no approved author byline or publication date is invented. Markdown review copies are in `docs/editorial-review/`. No MDX/CMS dependency added.

`lib/insights.ts` shares the publication predicate across hub, Home cards, detail lookup, related articles, sitemap and Article/BreadcrumbList data. It requires explicit published status, owner/copy and byline approval, approved author summary, valid nonfuture publication/update dates, nonempty sections, resolvable source references, safe HTTPS sources, cleared image under `/assets/insights/` and known service relationships. Draft/approved-only content and placeholder images fail closed. Setting approval does not publish an article. Root noindex/robots policy is unchanged; publishing site content and approving deployment/indexing are separate actions.

`InsightsGallery` is the only new interactive island: native topic buttons, aria-pressed, live counts and reset/empty state. Cards receive display-only data; article narratives/sources remain server-rendered. Article layout uses a reading column, contents anchors, answer summary, specific source links, genuine dates, author context and related service/article routes. Date display lives separately from server publication logic to keep the client boundary small. Home uses the same published cards when any qualify, otherwise retains its labelled reservations.

Optional local review flag now enables `/review/insights` and its two article details as well as Work. All review routes check `ENABLE_DESIGN_REVIEW=true` at request time, return 404 by default, remain noindex, have no public nav/sitemap links, and emit no Article schema/canonical. This flag is not authentication and must stay false on public hosts. Review author text explicitly says proposed/unapproved and draft preparation dates are never represented as publication dates.

Sitemap now derives approved static URLs and qualified detail URLs from the existing publication gates, requiring a configured HTTPS origin and a published parent hub. All routes remain draft and no origin is set, so the actual sitemap remains empty. No contact, analytics, hosting or email integration changes in Phase 5.

## Phase 6 contact, legal and accepted editorial content
Explicit Contact, Privacy and Terms routes replace the last three scaffolds; the catch-all scaffold was removed. Unknown routes remain real 404s. Contact uses the existing tokens/grid/primitives with a client enquiry island and native optional-field disclosure. Both legal pages share a server layout and typed content, with visible draft/LEGAL COPY REQUIRED status. Contact is dynamic so server configuration is checked at request time. No new palette, provider account, CMS/database or analytics script.

lib/contact/validation.ts holds strict shared Zod validation and safe field errors. config.ts reads server-only configuration and an independent approved public email. handler.ts validates origin/type/size/fields/honeypot, applies bounded per-process rate limits and sends plain-text enquiries through fixed Resend API fetch with a timeout and keyed idempotency. Only provider acceptance can return success. No application enquiry persistence or PII logging. rate-limit.ts uses expiring keyed identities; only an explicitly selected trusted Netlify header is supported. The host must supply edge/shared protection for multi-instance deployment. See contact-setup.md for limitations, activation and actual inbox-receipt verification.

Form status focus runs after React commits the result, preventing a fast failure from missing the result element. Failure preserves input; success resets. Measurement is a no-op without an explicitly installed consented adapter; its API only accepts named contact events and a fixed /contact path. No form values, user IDs or messages are event properties.

Owner accepted the prepared biography, portrait, two article drafts and attribution. About now uses the populated cleared founder profile; article records resolve from public paths, Home and related cards. Temporary article images are allowed only through the recorded manifest key/source match and retain labels. Review routes do not present already-published articles as unapproved; they return 404 when no drafts remain. Sitewide noindex/robots and absent canonical origin remain in force. Marking content published means included in this preview, not deployment or search activation. Home/Services/Work prose is accepted but remains at approved route status pending release; About/Insights and the two articles have explicit included records.
