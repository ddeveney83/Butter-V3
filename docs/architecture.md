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
