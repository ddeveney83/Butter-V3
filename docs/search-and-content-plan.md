# Search and content plan — Phase 0

All search themes below are **RESEARCH REQUIRED**. No volume, rankings, locality demand or AI citations have been verified or promised. GEO means generative engine optimisation; geography is a separate targeting decision.

| Route | Phase | Intent/theme hypothesis | Required answer/evidence | Publication/indexing |
| --- | --- | --- | --- | --- |
| / | 1 | Digital learning design studio | Who Butter helps, offering, truthful Devon base and UK reach | Draft scaffold; noindex |
| /services | 2 | Compare digital learning services | Which of four services fits the problem? | Draft scaffold; noindex |
| /services/elearning-design-development | 2 | Bespoke eLearning design/development | Formats, pedagogy, accessibility, process, actual proof | Draft scaffold; noindex |
| /services/learning-platforms-lms | 2 | LMS implementation and improvement | Supported platforms/scope/integrations, confirmed boundaries | Draft scaffold; noindex |
| /services/learning-strategy-consultancy | 2 | Learning needs/strategy consultancy | Diagnosis, skills mapping, evaluation, credible examples | Draft scaffold; noindex |
| /services/ongoing-learning-support | 2 | Ongoing learning support/retainer | What is included/excluded, requests and maintenance | Draft scaffold; noindex |
| /work | 3 | Digital learning portfolio | Approved project summaries, meaningful categories | Draft scaffold; noindex |
| /work/[slug] | 3 | Specific project problem and solution | Challenge, scope, owner role, evidence, outcomes and permission | No entries; 404; excluded |
| /about | 4 | Butter identity and credibility | Genuine biography, Devon base, working style | Draft scaffold; noindex |
| /insights | 5 | Practical learning expertise | Original approved articles organised by visitor need | Draft scaffold; noindex |
| /insights/[slug] | 5 | Specific LMS/design/accessibility question | Direct answer, constraints, first-hand examples, sources, author/date | No entries; 404; excluded |
| /contact | 6 | Start an enquiry | What to send, real destination, approved reply expectations | Draft scaffold; noindex |
| /privacy | 6 | Understand data use | Actual processors, retention, rights, cookies | Draft; legal copy required; noindex |
| /terms | 6 | Understand site terms | Owner-approved applicable terms | Draft; legal copy required; noindex |
| /elearning-design-devon | 4 optional | Find relevant Devon eLearning support | Differentiated regional value and evidence | Absent; 404; excluded |

## Architecture and publishing
- App Router renders real server HTML; avoid JS-only principal content. One H1 per scaffold; unique route titles/descriptions from central inventory. Final commercial titles and copy reviewed during each owning phase.
- `SITE_URL` remains empty; canonical URLs omitted rather than invented. With approved HTTPS origin configured, route metadata derives canonical URLs consistently. No social image invented.
- Phase 0 forcibly emits noindex/nofollow metadata and X-Robots-Tag for all routes, disallows robots crawling, and emits an empty sitemap. This is not access control: do not deploy confidential work; use host access protection for previews.
- Before public release replace the hard Phase 0 lock with a tested production-only publishing policy, independent of NODE_ENV. A production build is also used for previews and must not imply public indexing. Preview header/noindex policy must remain enforced at host level and in app; verify actual response headers.
- Sitemap includes only approved AND explicitly published canonical page URLs once policy is implemented; never patterns, drafts, API paths or reference art. Public detail lookup and lists must use the same publication filter. No fake detail seeds now.
- One approved canonical HTTPS origin; production host handles HTTP/www aliases and redirects. Test trailing slash consistency, intended slug redirects and true 404s before release.
- Internal journey: Home → Services → specific service ↔ relevant Work/Insights → Contact; logo → Home; footer → Contact/Privacy/Terms. No Devon top-nav item or keyword town footer.

## Verified structured-data contract (not emitted yet)
| Type | Prerequisites |
| --- | --- |
| Organization / WebSite | Confirmed identity, canonical URL and matching visible description; only approved contacts/socials/logo |
| Service / BreadcrumbList | Published substantial page, accurate scope/provider, valid canonical hierarchy |
| Article / Person | Approved published article, visible real author/bio, accurate dates and sources |
| LocalBusiness / ProfessionalService | Verified business eligibility/locality; do not infer address or hours |

Never emit unsupported ratings/reviews/awards; FAQ content is for people and no rich-result guarantee applies. No llms.txt priority over crawlable HTML and real evidence.

## AEO/GEO and geography
Use natural UK English, direct useful answers where appropriate, deeper explanations and authentic examples. A 40–80 word direct answer can help when a real question warrants it; do not force every section into FAQ form. Confirm scope and author expertise. Keep visible facts and structured data consistent.

Devon is primary; South West adjacent; UK-wide commissions welcome. Keep Home locality cue quiet and hero composition unchanged; add useful detail to About/Contact. No Exeter/Plymouth base, fictitious office, regional client proof or near-identical town pages. Optional Devon page stays absent without substantive original content. Confirm Google Business Profile eligibility before any listing; online-only operations are not eligible.

## Measurement contract (no tracking installed)
Plan `cta_click`, `service_view`, `case_study_view`, `contact_form_start`, `contact_form_success`, `contact_form_error`. Allow only aggregate route/service/CTA context; exclude names, emails, message fields and sensitive query strings. Success means backend/provider acceptance, with inbox receipt separately tested, not a button click. Qualified lead definition and Devon/South West/UK enquiry assessment belong to owner business review without visitor profiling.

Select analytics/consent tooling with owner approval; no non-essential tracking before required consent. Document actual processors and event validation. Prepare Search Console and optional Bing verification at launch; monitor query/page performance, indexing and enquiry quality; review content quarterly. Validate keyword hypotheses with available research and later real Search Console data.

## Phase 0 search audit
Published URLs: none. Draft static destinations: 12. Dynamic project/article patterns: inventoried, no entries. Optional Devon route: absent. HTML/H1/title/noindex/headers/robots/sitemap/404/navigation are automated browser targets. Canonical-domain and schema emission remain deliberately unconfigured pending approved facts. No analytics or conversion claim. Final commercial content, public indexing and rich data are later phase gates.

## Phase 1 search audit
Home now renders the real `Learning, designed to matter.` H1, descriptive service explanations and internal service/Work/Insights/Contact links in server HTML. Home metadata: `Butter | Digital learning design studio in Devon` and the brief's truthful Devon/South West/UK description. No geographic keyword added to navigation or repeated town pages.

All responses remain noindex via metadata and response headers. Robots disallows crawling and sitemap remains empty: there are no approved publicly indexable routes. `SITE_URL` canonical derivation remains available, with emission pending the owner-confirmed HTTPS origin. Organization/WebSite JSON-LD intentionally withheld because canonical identity/assets remain unresolved. Service-specific schema, article schema and real proof belong to their later owning phases. No conversion tracker, personal-data collection or fake email submission exists. Search themes remain RESEARCH REQUIRED; AI citation and ranking outcomes unpromised.

## Phase 2 route and search audit
| Route | Distinct title / intent | Helpful content and next step |
| --- | --- | --- |
| /services | Digital learning services: compare four kinds of support | Differentiated cards, process, general FAQs, direct detail links |
| /services/elearning-design-development | eLearning Design & Development: commission bespoke learning | Learner-centred benefits, Discover/Design/Develop/Deliver, six formats, accessibility/platform questions |
| /services/learning-platforms-lms | Learning Platforms & LMS: plan/improve a platform | Requirements, learner journeys, configuration, integration assessment and ownership/licence boundaries |
| /services/learning-strategy-consultancy | Learning Strategy & Consultancy: diagnose needs and plan | Performance problem, evidence, skills/curriculum mapping and realistic evaluation |
| /services/ongoing-learning-support | Ongoing Learning Support: maintain and improve | Recurring work, request handling, availability and larger-change boundaries |

Each route has a unique H1/title/description and real server-rendered content. Detail breadcrumb navigation links Home → Services → current page. Related services, Work, Insights and Contact links resolve; Work/Insights remain honest earlier-stage destinations, not invented case/article details. FAQs provide direct useful answers to different visitor questions with no keyword-town templates.

Devon/South West/UK coverage appears quietly on the overview and existing footer, without changed navigation or unconfirmed town/office claims. Search themes remain RESEARCH REQUIRED; no volume/ranking/citation promises.

Indexing remains disabled throughout via response header/meta, deny-all robots and an empty sitemap. Canonicals derive from SITE_URL only once an approved HTTPS origin exists; absent currently. Service and BreadcrumbList builder is publication-gated and tested; no draft data is emitted as public structured data. An approved origin alone does not publish copy. No FAQ schema, fake ratings, analytics or conversion recording. Domain, approved publication, real assets/evidence and measurement remain later gates.

## Phase 3 — Work search audit
`/work` has a unique title (`Digital learning work and case studies | Butter`), description, reference-derived H1 and real HTML explaining the portfolio's evidence standard. It links to Services/Contact and inherits only truthful Devon/South West/UK positioning, without fabricated local projects. Categories match reference 03; they are interactive filters rather than duplicate indexable landing pages.

`/work/[slug]` is implemented but resolves only a record passing the shared publication predicate. Each future approved case derives its unique title/summary/canonical, truthful role and specific challenge/approach/deliverables/outcomes from that record, with descriptive service links. Employment experience must be labelled visibly. Breadcrumb schema requires the same publication evidence and approved SITE_URL. No client ratings, fake numeric outcomes or unsupported local business data.

Current publishable cases: zero. Unknown, synthetic, preview and mockup client slugs return 404. Canonical origin remains unconfigured; no domain invented. All routes retain noindex/header protection, robots deny-all and empty sitemap. `/review/work` is disabled by default, never linked from Work, excluded from sitemap and never emits project JSON-LD. No analytics, lead tracking or AI-citation claims added. Portfolio search themes remain RESEARCH REQUIRED; first real approved case is the publication gate.

## Temporary imagery search check
Page routes, titles, descriptions, canonical policy, Devon/South West/UK wording and structured-data gates are unchanged. All pages remain noindex and the sitemap empty. Concept figures use decorative empty image alt plus accessible captions identifying the scene and temporary status; they do not create false portfolio/entity evidence or image-only principal copy. No article/client schema or real case was added. Next/image optimises locally retained PNGs; no external image-host dependency or analytics was introduced.

## Phase 4 About / Devon audit
| Route | Intent / decision | Current status |
| --- | --- | --- |
| /about | Understand Butter's independent studio identity, approach and truthful geographic scope | Real server-rendered About content; unique title/description/H1; draft/noindex |
| /elearning-design-devon | Potential substantive locally useful commissioning guide | Omitted: no distinct local evidence/material supplied; returns 404, no navigation/sitemap entry |

About title: `About Butter | Independent digital learning studio in Devon`. Description explains the learning approach, Devon base and South West/UK reach. The visible page explains the studio/services, principles and practical working approach, with a dedicated proportionate geographic section. Contact/service/Work links resolve. No ranking, AI-citation, local project, town-office or city-keyword claims added. Search themes remain RESEARCH REQUIRED.

Canonical URL derives from approved SITE_URL only when configured; currently absent. Publication remains draft; noindex metadata and response header remain, robots denies crawling and sitemap stays empty. Organization schema builder uses only verified name/description/areaServed and the approved origin; emission withheld until published. Founder/Person is withheld without cleared identity/biography/portrait. LocalBusiness/ProfessionalService, address, hours and GBP are not inferred. Eligibility cannot be established from the existing material; owner confirmation of actual in-person contact is needed before considering a profile. Online-only operations must not claim one.

No thin regional page or town variants were created. Original local perspective, genuine regional examples or useful differentiated guidance would be prerequisites for reconsidering the optional page. No analytics tags or conversion-success claim added; enquiry delivery and measurement remain Phase 6/launch gates.

## Phase 5 route and answer audit
| Route | Intent and useful answer | Publication/search state |
| --- | --- | --- |
| `/insights` | Browse practical learning/platform/accessibility guidance; working topic filters and honest empty state | Unique title/description/H1 and server HTML; draft/noindex; no article links until qualified |
| `/insights/choosing-an-lms-for-your-organisation` | How to evaluate an LMS through learner/admin tasks, accessibility, integrations, ownership and a documented pilot | Substantive draft prepared; public 404; owner/byline/author/image approval and real publication date missing |
| `/insights/practical-accessibility-for-digital-learning` | How to review a complete learning journey, keyboard/focus, structure, media and assessment, then retest findings | Substantive draft prepared; public 404; same approvals/date/image gaps |
| `/review/insights` and draft details | Local editorial/design inspection only | Disabled by default, noindex, no canonical/schema, excluded from navigation/Home/public lists/sitemap |

Each draft has an answer-first introduction, five practical sections, scoped source links and a limits statement; no promise of compliance, rankings or AI citations. Author identity is real, but authorship/edited biography are explicitly unapproved. Review preparation date is accurate (25 October 2026) and not a publication date. Published article metadata, social article fields and Article/BreadcrumbList schema derive from the same approved visible content and confirmed HTTPS origin; none currently emitted. Public Home and related lists share the publication filter. Sitemap also requires published parent hubs; all current public URLs remain excluded.

Devon/South West/UK-wide scope appears once in the hub context, preserving the studio's truthful positioning. General guidance is not padded with geographic keywords or invented local examples. Optional regional route remains 404. Links connect Insights to About, Work, Services and Contact without implying the Phase 6 form works. No analytics scripts, new cookies, tracking or conversion claims; existing consent/aggregate-event plan remains pending Phase 6 configuration.

## Phase 6 audit and accepted articles
About now has approved visible founder identity, CV-grounded biography/qualifications and the supplied portrait. Both article paths now return 200 from the same qualified lookup used by Home, hub, related lists and future sitemap/schema. Real inclusion date: 25 October 2026. Preparation date remains separate in source. Author/byline approval is recorded; temporary illustrative images retain labels. No fictional cases, testimonials or metrics were published. About/Insights and articles are included content; this does not enable indexing.

/contact has a distinct title/description/H1, server HTML, accurate Devon/South West/UK-wide scope and service/author/Insights links. Sitewide CTAs reach the real accessible form. It visibly states delivery is unconnected, and the API returns a non-success response; no false lead/conversion is claimed. No contact email/address is inferred from the CV. /privacy and /terms have distinct metadata and substantive draft text with explicit missing operating facts. They remain draft, outside sitemap and noindex.

All routes still carry noindex; robots disallows crawling. SITE_URL is unset, canonical URLs are not invented and the sitemap remains empty. Qualified Article/Breadcrumb/Organization/Person data is ready for the actual approved origin and matches the accepted visible author/content; no unsupported LocalBusiness, office or ratings. Review/source URLs are excluded. No contact/FAQ rich-result or AI-citation promise.

Measurement readiness: named start/success/error contact events, consent-gated adapter, fixed aggregate path property, no PII and no connected analytics provider. No new cookies or provider scripts added. Actual success requires provider acknowledgement; inbox receipt, qualified-lead monitoring and any analytics activation await deferred setup. No town doorway page or extra navigation item.

## Portfolio migration search audit — 26 October 2026
Fourteen differentiated `/work/[slug]` routes now expose substantial server HTML: challenge, audience/constraints, Daniel's specific professional role, approach, three applied story sections, outputs/reported outcomes, original-source context and related service links. Each derives title/description from its own record, with one H1 and real normal detail URLs. Work/Home/service links share the publish gate; no fictional review project or unknown slug resolves. Original source links are visible; direct live source verification is still blocked and this limitation is recorded without pretending a new crawl succeeded.

The case set covers compliance, blended leadership, LMS/LXP, strategy/capability and internal campaign work. No invented Devon client, office, city landing page, employer endorsement or Butter commissioning claim. Existing studio Devon/South West/UK positioning remains accurate; source cases are not padded with locality keywords. Reported metrics retain their actual groups and measures; no ratings/review schema or ranking/AI-citation promise.

Work now has included/publication status so future qualified case sitemap entries derive from the published parent route. Global noindex/robots remains unchanged and the canonical origin is unset, so actual sitemap stays empty and canonical/breadcrumb data is withheld. Future breadcrumb output uses only the same qualified source-backed records; pending media never becomes invented schema imagery. External project films are links, not autoplay/embeds; no new trackers/cookies or measurement activation. Contact remains unconnected by the owner's prior decision.

## Portfolio presentation update — 26 October 2026
Owner explicitly confirmed Butter delivery and requested removal of public personal/source attribution. Implemented Butter voice in Work/Home/cases, retaining internal provenance and original media. Live /work and all 16 detail routes were successfully retrieved: added Vaccination Programme and Food Safety Level 3, refreshed four project-reported impact figures per case. Project outputs, self-reports, indirect reach and projected savings retain their distinctions; £5.5M is a projection over six years. Food Safety source conflicts (33% in introduction versus 25% impact); use the explicit impact section's 25%. No independent validation or client endorsement is asserted.
Home: three featured cards in one desktop row. Work: three desktop columns, two tablet, one mobile. Case proof: butter-yellow panel, four desktop columns, two tablet, one mobile. Eight projects have original media; eight retain imagery-pending notices. No new screenshots were attached to this message; existing reference art and latest explicit layout instructions guide the update.
Search audit: unique case metadata/H1 and related-service links retained for all 16 routes; no invented dates/locality/schema. Devon positioning unchanged. Staging remains noindex; no deployment, canonical activation, analytics or contact-provider changes. Status CONDITIONAL: final media, brand assets and existing legal/contact/release gates remain.

## Work imagery completion and gallery removal — 26 October 2026
Owner requested filling remaining Work placeholders from the live portfolio and removing the repeated bottom gallery. Retrieved 31 original project images for the eight previously pending cases, converted to local WebP, and recorded source URLs/hashes in portfolio-migration.json. All 16 cases now have genuine hero/card imagery; source screenshots sit once in the narrative, with no repeated closing gallery. One L&D Digital Upskilling source image returned 404 and is excluded; its third story remains text-only. No fabricated replacement, project claim or client endorsement added. Existing source data/gallery arrays remain as an internal media inventory; the gallery UI is removed. This explicit request supersedes the gallery module in the original case reference.
Search audit: all 16 case titles, descriptions, H1s, related-service links and noindex policy retained. Descriptive image alt text and locally hosted assets added. Devon/UK positioning and measurement readiness unchanged. Other site routes and deferred legal/contact configuration unchanged; no deployment authorised. Task status conditional only on existing final brand/legal/contact/release gates, with project imagery placeholders resolved.

## Sitewide personal attribution removal — 26 October 2026
Latest owner request extends Butter attribution across the site. Service feature labels now credit Butter; published/review article bylines and author descriptions use Butter; Article schema identifies the author as Organization. About retains approved founder experience and portrait with unnamed founder wording; personal-name founder schema is omitted and the public portrait filename/alt text are neutral. Contact, draft notices and legal wording no longer name the individual. Internal provenance remains in source-validation records and documentation; original project screenshots are preserved.
Search audit: unique metadata, real content, service/case/article links and Devon/UK positioning retained. Article author metadata matches the visible Butter byline; no personal-name Person entity is published. Noindex, contact/legal deferrals and deployment gates remain unchanged. This is a scoped copy/attribution correction, not Phase 7 or release authorisation.

## Spacing and surface review — 26 October 2026
Owner approved a moderate increase in negative space plus subtle Butter-brand component backgrounds. First review scope: Home, Work index and Information Security case only; remaining case templates and site routes await review. Scoped styles/spacing-review.css uses existing canvas/cream/paper/butter tokens, with 48–96px section padding, 24–48px panel padding, 32–40px heading separation, 40px desktop card column gaps and 64px row gaps. Hero padding reaches 86–96px at large desktop; mobile remains 56px. Body copy uses 1.6 line-height, with case paragraphs limited to 62ch. Home process and proof support areas use cream; case deliverables use cream and outcomes use paper. Yellow services, impact and CTA panels remain the strongest colour anchors.
Retains the three-column desktop work grids, four impact columns, all original project media, tight display headings, no duplicate closing gallery and sitewide Butter attribution. Authorised spacing/surface variation supersedes original reference density for these three review routes only. No added assets, libraries, claims, dates or content.
Search audit: unchanged metadata/canonical policy/H1s and related-service/article links; Devon/South West/UK copy retained. All routes remain noindex, legal/contact/measurement configuration deferred. No deployment or public indexing authorised. Other Services/About/Insights/Contact/legal pages have no scoped styling changes. Task is a design review pass, not launch approval.

## Services refinement and navigation — 26 October 2026
Owner requested more breathing room on Services, individual-service access under the navbar and real Work imagery. Services overview and all four details now use 48–96px section rhythm, cream/paper support surfaces, more generous card/panel padding and 1.6 body leading. Overview hero prioritises two readable columns; narrow provisional ribbon column is hidden. Four overview cards remain on wide desktop, two tablet and one mobile. Detail process steps use a readable 2x2 desktop grid, single column mobile; project feature uses a wider media-first layout. Removed detail testimonial placeholders in favour of useful standard FAQs.
Curated existing published cases: eLearning → Information Security; Platforms → Your Learning Platform; Strategy → Strategic Skills Mapping; Support → Humankind EducatorHub. Original hero images/captions link directly to their cases, with a different original story screen in each featured project. Overview partnership module uses a labelled Humankind project image, replacing the AI workshop illustration without implying it depicts a real client meeting. No new client claims, metrics, source assets or dependencies.
Services remains a normal overview link with a separate native disclosure for four service links. Supports keyboard/touch, Escape/focus return, outside click and focus departure; mobile menu shows the links as a smaller nested service group and retains modal scrolling/focus handling. This explicitly requested grouping and density variation supersedes the previous flat navigation/reference density, retaining the four top-level destinations.
Search audit: all five service routes retain unique title/description/H1, useful server-rendered service/FAQ copy, Devon/South West/UK positioning and direct case links. Existing noindex/canonical/structured-data policy retained. Other routes keep their content; shared header now exposes the service group sitewide. Contact/provider/legal/release gates remain deferred; no deployment authorised.
