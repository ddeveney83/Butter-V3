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
