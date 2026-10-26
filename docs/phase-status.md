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

## Phase 2 — CONDITIONAL (five service pages implemented and validated)

Owner authorised the next phase; work stays directly on main. Phase 3 NOT STARTED. No deployment or public indexing enabled.

### Routes and features
- `/services`: reference 02 overview, four real service detail links, partnership band, three-step process, five functioning FAQs and tailored yellow CTA.
- `/services/elearning-design-development`: reference 04 structure, exact service title, four benefits, four-step process, six solution areas, explicit scope, project/testimonial reservations and five FAQs.
- `/services/learning-platforms-lms`: distinct platform requirements/configuration/journey/support content, four benefits/steps, six solutions and four FAQs.
- `/services/learning-strategy-consultancy`: distinct needs analysis/stakeholder/curriculum/skills/evaluation content, four benefits/steps, six solutions and four FAQs.
- `/services/ongoing-learning-support`: distinct updates/administration/request handling/improvement content, four benefits/steps, six solutions and four FAQs.
- Breadcrumbs, active Services navigation, related services/Work/Insights links and contact-interest query destinations work. Unknown service slugs return 404. Existing Home, mobile menu and draft protections remain operational.

### Executed validation
| Check | Outcome |
| --- | --- |
| Lint | PASS |
| Typecheck | PASS; generated route types and strict tsc |
| Production build | PASS; index + all four details prerendered |
| Unit tests | 3 passed, 0 failed/skipped |
| Browser tests | 17 passed, 0 failed; 1 intentionally skipped desktop copy of mobile-only menu test |
| Format/whitespace | PASS |

Browser checks exercise every FAQ via Enter, Space and pointer, verifying aria-expanded, answer visibility and valid control targets. They also verify unique metadata/server HTML, one H1, active navigation, all page links and on-page approach targets, four overview destinations, substantial detail sections, contact context and honest unconfigured delivery, true unknown-service 404, all six responsive widths and current screenshot output. An older broad Contact-link selector became ambiguous when the overview gained multiple valid CTAs; it was scoped to the header, preserving the original navigation assertion. No application behaviour or assertion was disabled.

### Visual and content gate
1440px/390px evidence captured for all five routes; desktop pages, mobile first folds and the full mobile eLearning layout visually inspected against references 02/04 and inherited Phase 1 system. See visual-audit.md. Official identity/fonts/ribbon/mascot, service/partnership/laptop imagery, authentic cleared project proof and testimonials remain missing. These are labelled development reservations. Expanded service/FAQ copy requires owner review. No vendor accreditation, outcome statistics, project endorsement, price or support SLA invented.

### SEO/AEO/GEO/Devon gate
Unique titles/descriptions/H1s and helpful service-specific answers in server HTML. Internal service, Work, Insights and Contact connections verified. Quiet truthful Devon/South West/UK coverage retained without town spam. All current pages remain draft/noindex; sitemap empty; canonical domain missing, so no invented canonical emitted. Service/Breadcrumb schema builder tested with publication and canonical prerequisites; no draft JSON-LD emitted. Analytics/conversion instrumentation remains unconfigured. Search demand and AI citations unpromised.

Phase 2 engineering delivered for review. Final visual/content/publication acceptance is CONDITIONAL. Owner can review the service copy and supply source assets; begin Phase 3 only when instructed.

## Phase 3 — engineering delivered; BLOCKED for first publishable case
Owner authorised Phase 3 on main. Work index, filtering, case-study template and evidence/approval controls are implemented; Phase 4 NOT STARTED. No deployment or indexing enabled.

### Implemented
- `/work`: reference 03 left-half hero, all seven filter options, yellow selected state, keyboard/pointer selection, live counts, reset and honest empty state, partnership panel and CTA.
- `/work/[slug]`: reference 03 right-half template with project hero, explicit Butter-versus-employment attribution, supported proof only, Challenge/audience/constraints/requirements, Approach/design decision/deliverables, cleared gallery, outcome evidence, service links and CTA. Unknown/unapproved entries remain true 404s.
- Shared publication predicate requires published status plus recorded owner/client permissions, role, context, source evidence, cleared media and known service links. Public list and detail lookup use the same predicate; card props exclude private approval fields. Real collection is empty.
- `/review/work`: disabled-by-default local design mode with six labelled layout examples and the case template. No genuine organisation name, case engagement or result asserted. Not linked in public navigation/Work or included in sitemap. Explicit environment flag required; not an authentication mechanism or a public preview service.

### Executed checks
| Check | Result |
| --- | --- |
| Lint | PASS |
| Strict typecheck / Next route types | PASS |
| Unit tests | 6 passed; 0 failed/skipped |
| Production build | PASS |
| Browser suite | 21 passed; 0 failed; 1 intentionally skipped desktop duplicate of mobile-only menu test |
| Default production configuration | /work 200; /review/work 404; /work/layout-only 404 |
| Format/whitespace | PASS |

Publication tests reject drafts/approval-only records, missing owner/client/role/evidence/rights, traversal image paths, unsupported metrics and invalid service references. Filter tests cover All, individual categories, overlapping tags, empty results and nonmutation. Browser checks exercise actual empty and populated review UI, keyboard/pointer selection, focus/aria-pressed/live counts, card links, template sections, related routes, no mockup clients/figures in public HTML, no public review/case URLs or sitemap leakage, active navigation and responsive overflow at all six required widths. Screenshots captured and inspected; see visual-audit.md. An initial missing type import and an ambiguous eyebrow selector were corrected; checks rerun without disabling assertions.

### Search / geographic / measurement audit
Work title/description/H1 and real server HTML implemented. Future case metadata and canonical derive from published source records and configured SITE_URL; breadcrumb data shares the approval gate. Zero publishable cases; no case schema currently emitted. All responses remain noindex, robots disallows crawling and sitemap is empty. Devon/South West/UK positioning stays truthful via existing footer, with no invented local project proof or office. No analytics/conversion/AI-citation claim added; no contact delivery represented.

### Required input / acceptance blocker
Phase 3's approved-case gate is BLOCKED: at least one real owner-approved case, exact role/scope, client permission, cleared images and genuine outcome evidence must be provided. The owner was asked for that information asynchronously. No reply or general phase instruction is treated as approval of the mockup's names/figures. Official identity/ribbon/mascot/font and project/partnership assets remain visual gaps.

Safe engineering work is ready for review on main; this does not make the portfolio or website launch-ready. Next: supply the first approved case record and assets to complete the publication gate. Do not begin Phase 4 until instructed.

## Temporary image update — PASS for requested visualisation; Phase 4 not started
Owner requested placeholder imagery before moving on. Added four locally retained AI-generated concepts and explicit image choices across Home, Services, Work and the optional case template. Work has a separate labelled composition preview, with zero real cases still published. Official logo/font/mascot/ribbon and real project evidence remain final-asset/publication gaps.

Validation passed: lint, strict typecheck, production build, 6 unit tests and 21 browser tests (one intentional desktop duplicate of a mobile-only test skipped). Format and whitespace checks passed. Browser screenshot helpers verify placeholder images fully load; responsive tests pass at 1440/1280/1024/768/390/375. Desktop/mobile screenshot review confirmed that images fill their intended areas with visible placeholder labels. The new Work preview initially overflowed at a narrower width; figure width constraints fixed it and the full suite passed. A publication test also confirms that placeholder image paths cannot qualify as cleared project media.

No deployment, indexing, genuine case publication or Phase 4 work performed. Phase 3's first-real-case blocker remains; temporary imagery does not supply client evidence. Review current screenshots before authorising the next phase. Detailed provenance and replacement instructions: temporary-imagery.md.

## Phase 4 — CONDITIONAL (About implemented; owner facts pending)
Owner authorised the next phase after temporary image review; implementation stays directly on main. Phase 5 NOT STARTED. No deployment/indexing change.

### Delivered
- /about replaces its scaffold with a responsive editorial page: confirmed studio identity, five principles, working approach, Devon/South West/UK coverage, related service links and Contact CTA.
- Existing visual primitives and labelled temporary ribbon/workshop imagery reused; no real staff photo or generated founder likeness claimed.
- Nullable founder data and approval gate ensure biography/credentials/portrait appear only with meaningful approved identity and cleared real source image. Current record remains null and an explicit reservation is shown.
- Organization data prepared using verified brief facts, gated on publication/canonical origin; no unsupported Person, address, hours, LocalBusiness, Google listing, award or rating.
- Optional /elearning-design-devon evaluated and omitted: no differentiated original regional evidence/content supplied. It remains 404 and outside navigation/sitemap.

### Executed checks
| Check | Result |
| --- | --- |
| Lint | PASS |
| Strict types / Next route types | PASS |
| Unit tests | 8 passed; 0 failed/skipped |
| Production build | PASS; About prerendered |
| Browser suite | 25 passed; 0 failed; 1 intentional desktop duplicate of mobile-only menu test skipped |
| Format / whitespace | PASS |

About browser checks verify real server HTML, unique metadata/H1, noindex, five principles/three working steps, proportionate region wording, pending founder state, absent invented claims/schema, all internal links, active desktop/mobile About navigation, keyboard Contact CTA, optional Devon 404/sitemap exclusion and no overflow at all six required widths. Images loaded and full/first-fold captures inspected at desktop/mobile. Existing page, menu, FAQ and Work publication/filter checks remain passing. Unit checks reject missing founder approval/bio/rights and placeholder portraits, and verify geographic identity does not manufacture a local business or person.

### Search / evidence acceptance
About uses confirmed Devon base/South West focus/UK-wide remote scope without fabricated offices/local projects or a new Devon nav item. Unique descriptive title/H1/body/internal links in real HTML; domain/canonical still unconfigured. All pages remain draft/noindex; sitemap empty; no schema emitted while About is draft. No analytics or email delivery claimed. GBP eligibility remains unestablished because actual in-person contact/operating circumstances are unknown; no listing created. Optional regional page is deferred, not a missing mandatory route.

Status CONDITIONAL for final content/brand approval: founder name, biography, credentials and genuine portrait remain requested; expanded editorial wording awaits owner review. Safe engineering work is complete without inventing missing facts. Earlier approved-case, identity-asset, contact/legal and release blockers persist. Next: owner reviews About and supplies founder material; begin Phase 5 only on instruction.

### Phase 4 identity update
Owner confirmed founder Daniel Deveney; About's founder reservation now uses that name and role. CV/career details from other chats are not accessible in this session, so biography, credentials and portrait still need source material. This does not clear the remaining content or publication gates.

## Phase 5 — CONDITIONAL (editorial system delivered; draft approval pending)
Owner supplied the CV and explicitly authorised Phase 5 on main. Phase 6 NOT STARTED. No deployment or indexing enabled.

### Delivered
- `/insights`: finished development hub, real topic filters/live result counts, reset and honest empty state, Devon/South West/UK context and meaningful About/Work/Services/Contact links.
- `/insights/[slug]`: server-rendered structured article layout with one H1, answer-first introduction, contents anchors, five substantial sections, references/source scope, author context, dates, relevant services and approved related articles. Unknown/unapproved articles return true 404s.
- Two substantive AI-assisted cornerstone drafts: LMS selection and practical accessibility. Actual full prose/source references prepared for owner review, with readable Markdown copies under docs/editorial-review/. No invented case, attributed personal anecdote, approval or publication date.
- Shared publish predicate for Home, hub, details, related cards, sitemap and Article/BreadcrumbList data. Requires owner/copy, author/byline and biography approval, genuine dates, cleared editorial image, usable source/section references and service links. Draft approval alone never publishes. All current draft detail URLs remain 404.
- Local opt-in `/review/insights` and both article reviews show the real prepared drafts, labelled proposed authorship, accurate preparation date and temporary concept images. They return 404 by default, remain outside public navigation/sitemap and emit no Article schema/canonical. Review flag is not authentication; keep off on public hosts.
- CV-derived biography draft and selected qualification review prepared. Raw CV/personal contacts are outside Git/public assets; employment experience is not converted to Butter client proof. Visual inspection found a candidate portrait in the CV. About now records the supplied CV and pending wording/photo selection; full approved founder profile remains null.

### Executed checks
| Check | Result |
| --- | --- |
| Lint | PASS |
| Strict types / Next route types | PASS |
| Unit tests | 10 passed; 0 failed/skipped |
| Production build | PASS; Insights hub prerendered, detail/review runtime-gated |
| Full browser suite | 31 passed; 0 failed; 1 intentional desktop duplicate of mobile-only menu test skipped |
| Default production configuration | Insights 200/noindex; both draft details and all three Insights review URLs 404; Work review 404; sitemap zero URLs |
| Format / whitespace | PASS |

New browser checks cover public draft isolation, unknown/draft 404s, hub active navigation, real empty/populated filters by keyboard/pointer, draft card-to-article navigation, actual full server HTML, metadata, one H1, honest byline/date, contents target scrolling, unique IDs, source URLs, related links, all internal destinations and six-width overflow. Both articles contain over 800 words of body content; no empty template is presented as a finished guide. Screenshot evidence captured/inspected. Unit checks exercise missing approvals, dates, rights, placeholder/traversal images, unsafe source links, missing section sources and qualified Article/breadcrumb output. An initial type narrowing issue in the schema assertions and a test-selector spacing mismatch were corrected before final passing checks. No dependency added.

After visual PDF inspection clarified that the CV contains a portrait, the About receipt text was corrected. Lint/types/build/format and a further focused About browser check were rerun for this final text change; the full 31-test result above applies to the complete Phase 5 UI and controls.

### Search / evidence / geographic gate
Unique hub and article metadata/H1 and crawlable body/source/author structure implemented. Canonical/social article URLs require the configured HTTPS origin; review has none. Article schema is blocked for unapproved drafts, and visible public content has no unsupported author/award/metric/schema claims. The sitemap requires published records and hubs plus origin; actual sitemap remains empty. All website responses remain noindex and robots disallows crawling. Devon cue is proportionate at hub level with no invented office/local example or city page. General guidance retains its own distinct intents without geographic filler. No analytics, conversion, provider receipt or AI-citation guarantee claimed.

### Outstanding acceptance inputs
Phase 5 is CONDITIONAL until the owner reviews the two actual drafts, author summary/byline and supplies cleared editorial imagery before publication. Draft preparation is not owner approval. CV biography wording/qualification titles and portrait selection also remain for review. Prior Phase 3 real-case permission/evidence/media blocker and final brand assets/contact/legal/release gates persist. The master requires only approved publishable articles in public lists; the implemented empty state and 404s enforce that rule while review proceeds.

Next: review the biography and two complete guides, choose the CV portrait or preferred alternative, and authorise Phase 6 separately when ready.

## Review acceptance and Phase 6 — CONDITIONAL; live delivery deferred by owner
Owner accepted all prepared review material and authorised Phase 6 directly on main. When asked for inbox/provider and legal operating facts, owner explicitly deferred email setup and stated identity/hosting/retention are not known. This phase completes the safe implementation without pretending those integrations or legal decisions exist. Phase 7 NOT STARTED.

### Accepted content included
- About now has Daniel Deveney's accepted CV-derived biography, selected qualifications and unchanged supplied portrait, with explicit source/approval references.
- Both prepared substantive guides and Daniel's author summary/bylines are accepted. Normal `/insights/[slug]` routes now resolve and appear in Home, hub and related lists with 25 October 2026 inclusion dates. Typed manifest-matched temporary article illustrations retain their AI-generated labels under the owner's approval. Final imagery remains outstanding.
- Previous completed page prose is accepted. No fictional Work example, employer/client permission, logo, testimonial, unverified award or metric is promoted to genuine proof. Zero real cases remain published. No full CV/private contact fields included.

### Phase 6 delivered
- `/contact`: unique metadata/H1, accurate Devon/South West/UK scope, short accessible form, optional organisation/support/budget/timing, privacy acknowledgement, native optional disclosure and meaningful related links. All prior CTAs reach this implemented destination.
- `/api/contact`: shared strict Zod validation, same-origin JSON, streamed size bound, honeypot, bounded keyed per-process attempt limit, fixed recipient/provider, plaintext message, server-only secrets, provider/browser timeouts, idempotency, no PII logging/database, generic failures and provider-acceptance-only success.
- Client form: field errors and focus, busy/duplicate protection, preserved values on failure, reset on accepted delivery, focused announced result, accurate unconfigured status. Optional public email is independent from the receiving inbox and remains unset.
- Privacy and Terms: substantial server-rendered draft documents reflecting implemented data flow/cookies/spam controls and the precise unknown legal/provider/hosting/retention decisions. Clearly labelled LEGAL COPY REQUIRED; no legal approval invented. Last scaffold/catch-all removed.
- Consent-gated measurement adapter with only named contact events and fixed aggregate path; no analytics provider, tags, cookies or conversion claims activated.
- `.env.example` and `docs/contact-setup.md` provide the deferred provider/DNS/secrets/legal/host-limiter setup and actual inbox-receipt checks. No external service account, payment, deployment or test email created.

### Executed checks
| Check | Result |
| --- | --- |
| Lint | PASS |
| Strict types / Next route types | PASS |
| Unit tests | 16 passed; 0 failed/skipped |
| Production build | PASS |
| Full desktop/mobile browser suite | 39 passed; 0 failed; 1 intentional desktop duplicate of mobile-only menu test skipped |
| Format / whitespace | PASS |

Unit tests cover validation/header injection/unknown recipients, malformed/oversized/cross-site/type requests, honeypot, unconfigured non-success without sending/logging PII, synthetic provider acceptance/failure/missing ID/network errors, controlled recipients/headers, rate expiry/capacity/trusted header rules, consent/no-PII measurement and accepted-content publication/schema gates. Browser tests cover all routes and six widths, real input/acknowledgement errors, focus/busy/status/error-preservation/reset, mocked provider UI, actual unconfigured API responses, accepted article/byline/portrait links and existing navigation/FAQs/Work filters. Provider acceptance tests are synthetic, not live inbox evidence.

A stale generated dev route type after scaffold removal was regenerated; initial browser testing caught Next's internal-host origin normalisation, an ambiguous framework alert selector and a fast-response result focus race. Corrected the handler/selector/post-commit focus, then reran all checks successfully. Screenshot helper now verifies the new portrait loads before full-page capture. No checks were disabled to resolve those failures.

### Search / regional / release gate
Accepted article pages and author/portrait facts are real server HTML and share qualified Home/hub/detail/related/schema lookups. Contact/legal have unique metadata/H1 and complete links. Canonical origin remains unset, sitemap empty, all responses noindex and robots disallows crawling. No fake LocalBusiness, street/city, client endorsement, office, ranking or AI-citation claim. Devon relevance remains proportionate; optional regional page is still omitted. Measurement is inactive without consent/provider, and no enquiry delivery or lead has been counted.

### Remaining gate
Safe engineering acceptance is CONDITIONAL. **Actual inbox receipt is BLOCKED by the owner's deferred provider/inbox/domain setup**, and legal finalisation by unknown trading identity/hosting/retention plus future review. Per-instance memory protection needs host-level edge/shared enforcement and origin verification on the actual deployment. Prior real-case/evidence and final brand/editorial assets remain release gaps. The owner has been informed; no repeated request for those deferred facts is needed now. Next phase requires separate instruction.

## Portfolio follow-up — CONDITIONAL on current live-source verification and six image sets
Owner requested migrating the personal portfolio and supplied a revised card reference on 26 October 2026. This is an authorised portfolio follow-up before Phase 7, not permission to launch or enable indexing.

### Delivered
- Fourteen source-backed project stories imported from the owner's older repository's documented prior personal-site crawl; 32 original WebP images copied unchanged with source URLs and SHA-256 ledger. Eight cases have original media; six have substantial source-backed narratives and explicit imagery-pending states, never invented screenshots.
- Normal Work detail routes include role attribution, challenge/audience/constraints, approach, three story sections, deliverables/reported results, original-source context, gallery where supplied, original film links where appropriate and related services. All identify Daniel's professional experience rather than Butter commissions. No separate client permission, endorsement or underlying results dataset is invented.
- New two-column cards and shared art frame: actual screens, measured scoped surface colours, tilted HTML windows, foreground icons and subtle rotation/zoom. Keyboard focus and reduced motion supported. Work filters remain functional, including a genuinely empty Maritime category; no fabricated projects fill it.
- Home features real migrated work; all four service details link to relevant cases. Existing global design, contact/legal deferrals, noindex/robots/canonical gates remain intact. Fictional review entries stay outside the published collection and unknown detail URLs remain 404.

### Source/access boundary
Direct domain/www requests failed with cloud proxy 403. Supported runtime diagnostics and the networking skill confirmed a restricted configuration without user-added destination hosts; observed policy state is unknown, so no applied readiness is inferred. Filesystem/approval-policy changes and a generic network grant did not establish destination access. No proxy/direct-route bypass used. The owner was given exact domain/CDN allowlist instructions. GitHub snapshot commit 0f650d91b646843c7228d24c5b317652e1d44e4b records earlier successful reads and provides the material; source records explicitly say liveVerified false. No claim of a current live crawl or complete inventory beyond that snapshot.

### Validation and acceptance
Lint, strict type/route checks, production build and 19 unit tests pass. Tests cover all fourteen qualified records, role/source/permission distinctions, six controlled missing-media exceptions, rejection of arbitrary placeholder media, 32 unchanged image hashes, source-context measures and all earlier publication/contact checks. Browser coverage checks each case at all six widths, normal URLs/metadata/server HTML/source/role/media states/internal links, card grid/filter/hover/focus/reduced-motion and previous Home/Services/About/Insights/Contact/FAQ/menu flows. Final full desktop/mobile suite: **41 passed, 0 failed, 1 intentional desktop duplicate of the mobile-only menu check skipped**. Format and whitespace checks pass.

Initial test issues were an expected category total that omitted an overlapping Strategy tag and an unescaped ampersand in the HTML assertion; the source/renderer were correct. Updated the test expectations without weakening content or interaction checks. A later pending-image wording assertion was updated after refining the user-facing copy; all checks are rerun. No new dependency or old application CSS/backend/demos imported.

### Search / release gate
Each case has unique record-derived metadata/H1, substantial server HTML, visible source/role and meaningful service links. Metrics retain their actual groups and measures; no global Butter result, review schema, local office/client claim or AI-citation promise. Work inclusion prepares future case sitemap entries through the same qualified parent/detail predicates. Actual SITE_URL remains unset; sitemap empty; all routes noindex and robots disallows crawling. No analytics, public deployment or Phase 7 activation.

Acceptance is CONDITIONAL for a fresh live-source inventory check and original images for Strategic Skills Mapping, L&D Digital Upskilling, Introducing AI Conversations, AI-Enabled Scenario Learning, Learning at Work Week and Humankind EducatorHub. Story/card implementation is reviewable now. Next: apply the intended Internet access allowlist and recheck the current live project inventory/media; original identity/editorial assets and deferred email/legal facts remain release gates.
