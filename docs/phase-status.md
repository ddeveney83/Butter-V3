# Phase status

## Phase 0 — PASS (engineering foundations); awaiting owner review

Scope: discovery, technical/search foundations and development shell only. Phase 1 NOT STARTED. Public website launch BLOCKED by all later phases and missing approvals.

### Delivered
- Read AGENTS/master/roadmap in full; inspected all four images including both templates in reference 03.
- Fresh Next.js/React/strict TypeScript/Tailwind foundation; pinned npm lock, Node 24 and reusable measured tokens.
- All 12 static routes work as labelled development scaffolds; four service routes and exact nav/CTA destinations included. Work/article detail patterns inventoried but unapproved URLs 404. Optional Devon page absent.
- Required asset, visual, content approval, search and launch records created. No invented domain, font identity, contacts, metrics, client engagements or testimonial claims.
- Server HTML, unique draft metadata/H1, canonical configuration validation, all-response noindex headers, robots deny-all and empty sitemap. No JSON-LD or tracker with unverified facts.
- Complete route-intent/evidence map with RESEARCH REQUIRED themes, truthful Devon/South West/UK positioning, schema and measurement contracts.

### Executed evidence
| Check | Outcome |
| --- | --- |
| npm ci | PASS; lockfile installation repeated successfully |
| npm run lint | PASS; zero errors/warnings from lint |
| npm run typecheck | PASS; Next route types + strict tsc |
| npm test | PASS; 2 tests, 0 failed/skipped |
| npm run build | PASS; all static scaffold routes prerendered |
| npm run test:e2e | PASS; 8 tests across 1440px desktop and 390px mobile; 0 failed/skipped |
| npm run format:check | PASS |
| npm audit --omit=dev --audit-level=high | PASS; 0 reported vulnerabilities |

Browser checks exercise all 12 routes, no horizontal overflow, one H1, noindex meta/headers, correct language, server HTML, navigation, keyboard skip link, honest absent form, true 404s for unapproved content/reference art, robots and empty sitemap. The browser-download attempt failed due to network policy; tests then passed using installed Chromium 154. No assertions disabled.

Desktop/mobile screenshots captured and visually inspected at `test-results/foundations-capture-Phase-0-shell-evidence-{desktop,mobile}/phase-0-foundations.png` (ignored generated outputs). The shell is a route-review surface, not the concept homepage: ribbon, official identity, complete section composition and actual visual matching are Phase 1. No pixel-perfect claim. Other responsive widths and full accessibility/performance audits remain Phase 7 obligations.

### Search/approval gate
Published/indexable URLs: zero. All commercial content is development-only. Canonical configuration absent until the owner confirms SITE_URL. Structured-data emission awaits verified visible facts. No analytics provider or conversion tracking is active. Geographic claims limited to the supplied Devon/South West/UK brief. Search demand unverified.

### Remaining inputs and limitations
Official wordmark/font/ribbon/mascot, cleared imagery and client logos, approved projects and attribution, testimonials/metrics, biography/articles, canonical domain, contact provider/destination/DNS, social links, legal text and analytics consent choices remain unresolved. These are recorded future visual/commercial gates; they do not prevent reviewing the foundations. ESLint 9 compatibility pin emits an npm deprecation notice; see architecture notes. No hosting or website deployment performed.

### Reusable environment
install_script and start_skill saved in the cloud environment configuration draft. These persist commands, not live processes; publishing the environment remains a separate user action.

Next action: owner reviews Phase 0 architecture, search plan and asset ledger. Begin Phase 1 only on explicit instruction.

## Phase 1 — CONDITIONAL (engineering validated; final visual/content approval pending)

Owner instructed direct work/pushes on main and authorised Phase 1. Phase 0 was fast-forwarded and pushed to main first. Main is now the working branch; no PR or separate phase branch is required under the updated owner preference.

### Delivered
- Reference-ordered responsive homepage: hero, trust reservation, four-service yellow band, featured work reservation, three-step process, proof reservation, Insights reservation, yellow bottom CTA and compact footer.
- Shared header/footer with exact Services/Work/About/Insights desktop menu, Home logo link, Contact CTA, active-page indication and keyboard-operable mobile modal menu. Native dialog plus explicit Tab boundary wrapping, Escape, focus/scroll restoration and link-close behaviour.
- Reusable pill/text links, heading labels, wordmark treatment, asset placeholders and CTA; service/process content separated from layout. Routine Lucide outline icons added.
- All Home links resolve to existing development destinations. Other page designs remain for phases 2–6. No unapproved case/article route or fake form submission introduced.
- Updated visual, asset, content, search, launch and architecture records. Owner's main-branch preference recorded in AGENTS.md and README.

### Current executed checks
| Check | Outcome |
| --- | --- |
| Lint, strict typecheck, production build | PASS |
| Unit tests | 2 passed; 0 failed/skipped |
| Playwright | 11 passed; 0 failed; 1 intentionally skipped desktop copy of mobile-only menu test |
| Formatting and diff whitespace | PASS |
| Production dependency audit | 0 reported vulnerabilities |

Browser tests cover server HTML, one H1/noindex/language across all 12 destinations, all Home link responses, keyboard skip link, menu focus wrapping/Escape/return focus/link-close/scroll restoration, absence of fake metrics/client claims, draft/reference exclusions, empty sitemap and robots. Overflow checked at 1440/1280/1024/768/390/375. Desktop/mobile full-page and first-fold screenshots captured and visually inspected; see visual-audit.md. Initial menu test exposed reverse Tab leaving the dialog's control sequence; explicit first/last wrapping fixed it and the affected suite passed. A pre-existing development process from our earlier startup occupied port 3000; it was stopped before production browser validation.

### Search and evidence gate
Home metadata is unique and descriptive, with real server-rendered service explanations and a subtle Devon/South West/UK cue. All routes remain non-indexable. Canonical is derived from SITE_URL only when an owner-approved origin exists; presently absent. No invented canonical, Organization/WebSite identity, local office, metrics, endorsement or author is emitted. Sitemap contains zero public URLs. Analytics is not configured and no conversions are claimed.

Final visual fidelity cannot pass without the official ribbon, logo, mascot and confirmed fonts, approved imagery/project content, testimonials/metrics and articles. Those areas are visible development placeholders, not final production content. Shared component acceptance and final asset-dependent visual review remain owner decisions. No website deployment or Phase 2 work performed.

Reusable startup instructions updated in the cloud environment draft to reflect main, the new homepage readiness check and current phase boundary. Saving is separate from environment publication.

Next: owner reviews Phase 1 and supplies/approves source assets as available. Begin Phase 2 only on explicit instruction.
