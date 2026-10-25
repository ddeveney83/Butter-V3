# BUTTER — MASTER BUILD & DESIGN CONTRACT

**Project:** Butter — independent digital learning studio based in Devon, UK; initial market Devon and South West England, with UK-wide capability  
**Document role:** Comprehensive authoritative design, content and technical specification, automatically referenced by root `AGENTS.md`  
**Version:** 2.0 — 25 October 2026 (Devon-first, phased delivery and search from day one)  
**Instruction priority:** Root `AGENTS.md` requires reading this file at the start of EVERY task. Treat these as binding project requirements for ALL design, code, content, refactoring, testing and review work. Do not silently reinterpret, simplify or supersede them.

---

## 0. THE MISSION AND DEFINITION OF DONE

Build a **beautiful, polished, fully operational, accessible, search-friendly, lead-generating** website for Butter. The attached concept art is the **visual source of truth**. The goal is not a site "inspired by" the references. Reproduce the references as closely as the browser medium and available brand assets allow, while retaining excellent UX and real functionality.

The brand is an independent UK digital learning studio. Butter combines learning strategy, instructional design, development and technology to solve real learning problems. This is a commercial services/portfolio website designed to turn interested visitors into genuine enquiries.

**The design must feel:** premium, confident, editorial, considered, human, precise, modern, understated, warm, accessible, with **controlled** touches of playfulness. Never generic SaaS, corporate blue, startup gradients, glassmorphism, overly rounded bubbly UI, template-like hero sections, gratuitous motion or stock-illustration clutter.

**A successful build must:**
1. Look demonstrably like the reference screenshots at desktop scale.
2. Behave beautifully and accessibly at desktop, tablet and mobile sizes.
3. Contain working, connected navigation and internal links.
4. Present the four services and genuine work compellingly.
5. Accept enquiries through a real server-side submission mechanism (when credentials are configured), with robust validation and explicit configuration status.
6. Be SEO-, AEO- and GEO-ready from Phase 0, fast, easy to edit and structurally extendable; build authentic Devon relevance without limiting national reach.
7. Make no fictitious claims, logos, testimonials, photographs, awards, client results, metrics or working integrations.
8. Be launch-ready **only after** the real assets, content, legal copy, contact destination and credentials have been confirmed.

**Non-negotiable operating rule:** DO NOT invent missing brand decisions or business facts. Classify them as `CONFIRMED`, `MEASURED APPROXIMATION`, `PROVISIONAL`, or `ASSET REQUIRED`, record them in `docs/decisions-and-gaps.md`, and prefer reversible implementations.

---

## 1. REFERENCE ART — MANDATORY

Read and visually inspect these files **before building or editing UI**:

| File | Authority |
| --- | --- |
| `reference/01-home-desktop.png` | Homepage layout, brand identity, global header/footer, service panel, featured work, process, stats, insights, CTA. |
| `reference/02-services-desktop.png` | Services landing page, four service columns/cards, supporting photos, partnership band, process, FAQs, CTA. |
| `reference/03-work-and-case-study-desktop.png` | **Two distinct page references in one image:** left = Work index, right = British Red Cross case-study detail. |
| `reference/04-elearning-service-desktop.png` | Individual eLearning Design & Development service page, benefits, four-step process, featured work, solutions, testimonial/FAQs, CTA. |

These are concept mockups, **not clean production photography or source brand assets**. Do not use a whole screenshot or a crop of the entire interface as a substituted site section. Build real semantic HTML components. Avoid reconstructing a photographic object with a crude CSS shape and calling it a match. If a necessary source illustration, image, logo, font or device mockup is missing, record its filename and placement as `ASSET REQUIRED`. Use a clearly defined temporary development placeholder, never a fabricated final asset.

### Visual reference hierarchy
1. **Original supplied identity assets** (SVG logo, mascot, butter-ribbon artwork, photographs, font files with usage rights) take precedence over approximations.
2. **These four reference images** determine composition, relative scale, hierarchy, colour relationships and component styles.
3. **This document** fills in implementation conventions and features not visible in static art.
4. For unpictured pages or breakpoints, extrapolate the **existing** design system conservatively; never design a new visual language.

The reference images are portrait exports of desktop layouts and differ in pixel dimensions. They **do not** represent four actual browser viewport widths. Derive column proportions/spacing visually rather than hard-coding their exported pixel widths. Prioritise likeness at 1440px-wide desktop, then preserve the same hierarchy responsively.

### Asset policy
- All original reference images stay in `/reference`, excluded from the production image gallery and search indexing.
- Production assets live in `public/assets/{brand,work,services,insights,people}` with descriptive filenames.
- Only use photographs supplied/approved by the owner or legitimately licensed for the intended purpose. Do not scrape client brand sites or use AI-generated people/projects as genuine portfolio evidence.
- Never paste a screenshot as an image of a finished website in place of implemented UI.
- Ask for exact source assets **when needed for accurate sign-off**, but continue safe structural work first.

---

## 2. BRAND / ART DIRECTION — LOCKED

### 2.1 Identity
- Wordmark: lowercase, ultra-bold `butter` in near-black with a **small yellow dot** directly after it. Use the official wordmark asset when provided. Do not attempt to "improve" or redesign it.
- Signature graphic: richly lit **butter-yellow curled 3D paper/ribbon** with subtle paper texture and soft shadows. It appears prominently in the homepage and other large editorial hero areas. **Use an approved, isolated original graphic** rather than random yellow waves, blobs, emoji or CSS pseudo-3D substitutions.
- Mascot: traditional, outlined yellow butter character with expressive eyes/limbs; use sparingly in the **bottom yellow CTA band**. The mascot is **secondary**, never the dominant hero, and must be sourced from an approved image/SVG.
- Iconography: sparse, one consistent family of clean black outline icons, matching the reference. `lucide-react` is acceptable for routine UI icons but do not substitute it for distinctive custom brand artwork.
- Photographic style: premium, realistic, well-cropped, warm-neutral photography; authentic people interacting with learning products; credible screen/device mockups; no stock-looking staged celebration shots, fake dashboards or inconsistent photographic colour grading.

### 2.2 Colour system
Reference screenshots have been sampled; the following are **MEASURED APPROXIMATIONS**, not asserted original brand values. Define them as tokens, never scatter hex values through components. Re-check against provided original identity files if/when supplied.

| Token | Initial value | Use |
| --- | --- | --- |
| `--color-canvas` | `#FAF8F0` | Main warm off-white page surface |
| `--color-cream` | `#F9F6EE` | Alternate warm background |
| `--color-ink` | `#080808` | Main headings, body, primary buttons |
| `--color-butter` | `#FEDA4E` | Core butter-yellow CTA areas, underline blocks, circles, badges |
| `--color-butter-soft` | `#FFE576` | Light yellow gradient/highlight variation, only where visually justified |
| `--color-paper` | `#F4EEE4` | Neutral background cards/soft surface |
| `--color-border` | `#DDD8CE` | Hairlines, columns, section dividers |
| `--color-muted` | `#66635F` | Secondary text, eyebrow labels where contrast permits |
| `--color-white` | `#FFFFFF` | White photographic/card interfaces when shown |

Some yellow reference bands have soft light/shadow variation. Use very subtle yellow tonal changes for those only; **no multicolour gradients**. The site must remain visually dominated by cream/off-white, black and yellow. Never introduce an unapproved secondary brand hue. Use appropriate text colour and contrast based on actual tested pairings. When a colour fails WCAG AA at body size, adjust the implementation minimally and document it.

### 2.3 Typography — do not fabricate font identification
The exact font family **cannot be proven from a raster image**. It is `ASSET REQUIRED / NOT CONFIRMED` until a font name/file or brand guideline is supplied. Do **not** tell the owner that a guessed font is the original.

Implementation strategy:
1. Look for legally usable provided font files and use `next/font/local` if available.
2. Otherwise, use `Inter Tight` (headings) and `Inter` (body) with `next/font/google` as **PROVISIONAL substitutes**, and flag for side-by-side visual review. Adjust only after comparing to the concepts. Avoid uncontrolled fallback flicker.
3. Do not add five competing font families. Use one heading family and one body family maximum, preferably the same family if final brand assets indicate this.

Typography characteristics taken from the art:
- Oversized, extremely bold neo-grotesk headline letterforms, near-black, tight tracking and compressed line-height.
- Desktop display headings generally ~`clamp(3.7rem, 6.7vw, 7.5rem)` based on context; on service/work interiors ~`clamp(3.2rem, 5.4vw, 6rem)`.
- Section headlines generally ~`clamp(2.2rem, 3.8vw, 4.1rem)`, weight 800–900, line-height ~0.96–1.06.
- Body ~16–18px desktop, ~15–17px mobile, line-height ~1.35–1.55 depending on context. Balance density with readability.
- Eyebrows: tiny uppercase, widely tracked, 10–12px at visual size; they communicate editorial section labels. Ensure accessibility/reflow.
- Links: simple black text, short underline/line treatment and a small diagonal/up-right arrow where shown.
- Yellow horizontal marker **behind or immediately under** selected last words/lines of heading; exact word selection and layer placement follow screenshots. Use a robust CSS background/pseudo-element wrapping the phrase, not a random SVG squiggle.
- Word wrapping matters: manually tune headline max-width and line breaks for matching desktop composition; permit natural wrapping on small screens to prevent clipping.

### 2.4 Layout, spacing, shape
- Overall art direction: spacious Swiss/editorial grid with intentional asymmetry.
- Desktop container: start with `max-width: 1440px`; typical internal gutters ~48–64px, responsive and adjusted against the reference. Do not stretch long text lines across full width.
- Page background spans the viewport. Important cards/bands use a separate contained full-width composition with internal padding.
- Global section padding starts at ~80–112px vertical on large desktop for major modules, **except the reference's denser sections**, where match takes precedence. Mobile ~48–72px. Avoid uniform giant empty gaps.
- 12-column conceptual grid or CSS grid/flex to reproduce 2-, 3- and 4-column compositions; all align to a shared vertical rhythm.
- Rounded radius is modest: ~8–16px for cards and illustrated bands; buttons are fully rounded pills (~999px).
- Fine grey separators/hairlines segment areas. Service cards sometimes rely on **vertical lines** between columns rather than independent floating shadows.
- No heavy box shadows, dramatic glow, thick coloured borders, arbitrary diagonal cuts, glass effects or generic UI component backgrounds.
- Use suitable image `object-fit: cover`, fixed aspect-ratio wrappers for consistent grids and authentic crop positioning.

### 2.5 Key branded components
Build reusable visual primitives that mirror the reference:
- `<SiteHeader>`: logo left, centered `Services / Work / About / Insights`, black `Let's talk ↗` pill right, thin underline divider; active page indicated by short yellow underline. Sticky header **only if it does not materially alter the reference or usability**.
- `<DisplayHeading>` with optional yellow highlight phrase.
- `<EyebrowLabel>` with small uppercase + letterspacing.
- `<PillButton>` black/white text, thin arrow, accessible visible focus state; optional yellow variant.
- `<TextArrowLink>` understated underline + arrow.
- `<ButterRibbonArtwork>` only from approved asset; controlled scaling/cropping per page.
- `<ServiceCard>` and `<ServiceColumn>` with subtle border/icon/title/body/action, controlled responsive layouts.
- `<WorkCard>` with authentic image, category, title, description, tags, navigation.
- `<SectionDivider>` and `<ProcessSteps>` with numbered circles and horizontal arrows.
- `<FAQAccordion>` with minimal plus/minus affordance.
- `<StatsRow>` with verified metrics only.
- `<Testimonial>` with verified quotation and attribution only.
- `<BottomCTA>`: large yellow band; left editorial headline, right supporting line/button, small mascot at far right on desktop; gracefully reposition on mobile.
- `<SiteFooter>`: compact wordmark/tagline, navigation, approved social links, copyright, privacy/terms.

Make component API/content data clean enough to use consistently; do not build one component per screenshot just to reproduce a static picture.

---

## 3. INFORMATION ARCHITECTURE / EXACT ROUTES

Use readable routes, semantic navigation and no broken/empty destinations:

```
/
/services
/services/elearning-design-development
/services/learning-platforms-lms
/services/learning-strategy-consultancy
/services/ongoing-learning-support
/work
/work/[slug]
/about
/insights
/insights/[slug]
/contact
/elearning-design-devon        # OPTIONAL PHASE 4: publish only if genuinely useful, original and approved
/privacy
/terms
```

All primary nav links, logo, footer links, cards and CTAs must work. Every "Find out more" action links to the corresponding service. Work cards link to their matching case-study route. Insights cards link to a real article, not a placeholder. If approved content for a detail route is missing, do not publish a fabricated article or case study; provide a genuine approved summary or keep the item out of published navigation until ready.

Preserve content order and section hierarchy shown in the screenshots. Do not add unreferenced navigation (e.g. Pricing, Careers, Resources mega-menu) or visual features without explicit approval.

**Navigation integrity:** The exact visible desktop menu remains **Services, Work, About, Insights**, with Butter logo linking Home and `Let's talk` linking Contact. Do not add a Devon tab or extra top-level navigation because of SEO. Contact is accessible via the global CTA and footer. Local discovery content belongs in well-contextualised About/Contact text, page metadata, internal links and (only if justified) one targeted regional landing page. Every top-level route must have a finished, usable page at production launch, not merely a blank stub.

**DEVON-FIRST positioning (confirmed geographic market, not confirmed street/city):** Butter is based in **Devon**, starting by pursuing business in **Devon and the South West**, while remaining open to **UK-wide remote work**. Never say Exeter-based, Plymouth-based, "office in", "serving from our Exeter studio", or show a physical address unless specifically confirmed. Avoid locality keyword stuffing, city doorway pages, invented regional clients, maps/pins, business opening hours, fake business locations or generic geographic filler. Add only a quiet, truthful Devon cue that does not disturb the approved screenshot hero composition. Section 10.1 defines full search/growth rules.

---

## 4. PAGE BLUEPRINTS — REPRODUCE THE ART

### 4.1 HOME `/`
**See `reference/01-home-desktop.png`. Follow this order:**
1. **Header** with small black wordmark/yellow period; four centered links; black CTA pill.
2. **Hero**: tiny uppercase `INDEPENDENT DIGITAL LEARNING STUDIO / UK`; huge stacked left headline exactly `Learning, / designed / to matter.` at target desktop composition; butter-yellow highlight behind `matter.`; short body copy beneath about turning complex learning challenges into beautifully simple digital experiences; black `Start a project ↗` CTA and secondary `Explore our work ↗`. At upper right include minimalist plus/cross annotation and label; dominant highly realistic curled yellow ribbon visual. Do not move image into a generic small rounded card.
3. **Trust strip**: restrained monochrome authorised organisational marks across horizontal strip as shown. Client/experience claim rules in §6 apply; if permission/status uncertain, record `CONTENT APPROVAL REQUIRED` and avoid misrepresentation.
4. **Yellow Services Panel**: generous yellow rounded band; left heading `End-to-end learning solutions for real-world impact.`; small section label, `Explore all services ↗` top-right. Four evenly balanced service columns, thin separators, simple icons, headings, descriptions and `Find out more ↗` links. Use exact service names §5.
5. **Featured Work**: `Real challenges. Meaningful results.` as bold editorial title; side intro and `Explore all case studies ↗`; three large photographic/image-led cards with short descriptions and restrained category tags, following reference proportions. Only approved content/images.
6. **How We Work**: `A simple process. Real progress.` with `01 Discover → 02 Design → 03 Deliver`; yellow first circle, neutral subsequent circles. Text brief, grounded.
7. **Proof Panel**: left large quotation in pale background, middle portrait/collaboration image, right stacked metrics. Show only verifiable testimonials and metrics. If unverified, reserve layout but use approved non-claim content / clearly labelled development-only placeholder; do not publish fake endorsement.
8. **Insights**: `Ideas, insights and practical advice.` with three image-led article cards and article detail links, only for actual prepared posts.
9. **Final CTA**: full-width yellow invitation `Let's start a conversation.`; small explanatory copy, black `Let's talk ↗` button, small Butter mascot at right.
10. **Footer**: wordmark, micro-tagline `Better learning. By design.`, internal nav, live approved socials, privacy and terms.

### 4.2 SERVICES `/services`
**See `reference/02-services-desktop.png`:**
1. Same header with Services active underline.
2. Bold split hero headed `End-to-end learning solutions for real-world impact.`; large yellow highlight on last statement; supporting introductory text to the right, small cross annotation, ribbon cropped on far right; black CTA.
3. **Four service columns**: icon housed in small yellow square, title, service description, understated arrow link; real supporting photo/mockup under each. Retain four-column desktop structure; 2x2 tablet, single-column mobile.
4. **Partnership panel**: large left copy `More than delivery. A long-term partner.` with short description + yellow CTA; warm authentic human photo at right; tall narrow yellow rail with arranged editorial keywords.
5. **Process**: heading `A clear process from insight to impact.` with three steps Discover/Design/Deliver.
6. **FAQs**: left title `Your questions answered.` and explanatory text, right restrained horizontal accordion list; plus/minus icons.
7. Yellow CTA `Let's make learning happen.` and footer.

### 4.3 INDIVIDUAL SERVICES `/services/[slug]`
**Primary detailed layout reference:** `reference/04-elearning-service-desktop.png`.
- eLearning page hero exact heading `eLearning Design & Development.` with yellow highlight behind `Development.`; short statement; two CTAs; hero photograph of laptop showing approved example learning interface. Small cross annotation.
- Benefits band of four icon-led columns: `Learner-centred design`, `Custom development`, `Accessible by design`, `Measurable impact`.
- Main workflow title `From ideas to lasting impact.`; four horizontal steps `01 Discover → 02 Design → 03 Develop → 04 Deliver` with supporting copy.
- Feature case study beside process/section: genuine Information Security Awareness project example when cleared.
- Solutions/types section: `Flexible solutions for your needs.` followed by **six** simple service items across columns: Bespoke eLearning; Blended learning; Scenario-based learning; Gamification; Video and multimedia; Accessibility uplift. Preserve icons, fine dividers and spacing.
- Bottom split testimonial and image **only if verified**, plus FAQ accordion.
- Yellow CTA `Let's create something better.` with mascot; footer.
- Other three service detail routes use the **same architecture and visual grammar**, modifying only accurately scoped offerings, benefits, process, case studies and FAQ; do not pretend each is a unique visual redesign.

### 4.4 WORK `/work`
**See the LEFT HALF of `reference/03-work-and-case-study-desktop.png`.**
- Split hero: editorial `Real challenges. Meaningful results.` with yellow highlight on selected line, short explanatory paragraph, black CTA, cropped ribbon on right, plus/cross annotation.
- Under hero, understated category filter pills, yellow selected state; reference labels `All`, `Charity & Non-profit`, `Housing & Communities`, `Maritime`, `Compliance`, `LMS & Platforms`, `Strategy`.
- Responsive **3-column, 2-row** visual case study index of image-led work cards, each with eyebrow, bold title, summary and outlined circular arrow link. Provide functional category filtering, keyboard accessibility, and a good empty state.
- Reference cards suggest: British Red Cross; Places for People; Proficiency in Security Awareness (PSA); Preparing for Localised Flooding in the UK; Nansen.ai; Strategic Skills Mapping. **These are subject to permission/content verification**; do not publish invented responsibilities/results or any restricted client deliverables.
- Bottom `More than projects. Long-term partnerships.` panel, with supportive photo and yellow button.
- Final yellow CTA and footer.

### 4.5 CASE STUDY DETAIL `/work/[slug]`
**See the RIGHT HALF of `reference/03-work-and-case-study-desktop.png`.**
- Project-specific, image-backed editorial hero (example: British Red Cross). Top eyebrow client category, huge project name, strong one-line outcome/value statement, brief intro, action link if real/appropriate; large image anchored at right with thoughtful text contrast.
- Compact proof/metric row with four evenly spaced columns; **never use the reference's `10,000+`, `93%+` or other metrics unless owner confirms scope and attribution**. If no metrics are verified, use factual qualitative proof without numeric invention.
- `THE CHALLENGE`: broad readable text column, companion `KEY REQUIREMENTS` subtle checklist panel.
- `OUR APPROACH`: bold editorial heading and concise narrative; adjoining `WHAT WE DELIVERED` icon-led list.
- Visual outcomes gallery: authentic laptop/device screenshot and smaller approved interface/example details; reference uses an asymmetrical large-left/small-right layout.
- Strong related-project or discussion CTA followed by standard footer.
- Case studies must describe challenge, audience, constraints, design decision, delivery, impact and evidence, not just generic services descriptions.

### 4.6 ABOUT `/about`
No direct reference is supplied in this pack; this page must look **indistinguishable in design system** from the referenced ones, not like a new theme. Build: confident editorial hero; honest story of the independent studio; values/principles (pedagogy first, accessibility, simplicity, partnership, measurable outcomes); working style; founder/leadership presentation **only with supplied photo and approved biography**; genuine experience/credibility; clear CTA. Avoid inventing a multi-person staff, office locations or recognitions.

### 4.7 INSIGHTS `/insights` AND ARTICLE DETAIL
No direct page reference is supplied in this pack. Use identical typography, header/footer, tags and card treatments seen in the homepage Insights section: editorial page title, category/filter chips where useful, 3-column article cards, meaningful thumbnails, dates, excerpts and real article pages. Render articles via MDX/structured local content, with accessible reading width, table of contents only if warranted, accurate authorship, related articles, shareable canonical URL. Never auto-create pseudo-expert blog filler or fake publication dates.

### 4.8 CONTACT `/contact`
No direct page reference is supplied in this pack. Keep strong, uncomplicated conversion structure: prominent editorial heading `Let's start a conversation.` (or faithful approved alternative); friendly explanation; short accessible form; clear submission/error/success states; real reply destination; alternative approved email contact; privacy explanation. Avoid overcomplicated multi-step forms, fake Calendly embeds, fake telephone numbers or unnecessary required fields. Reuse yellow brand panels/pills where appropriate without overdoing them.

### 4.9 PRIVACY AND TERMS
Publish actual owner-approved legal texts appropriate to a UK studio and actual processors/deployment practices; do not generate and represent boilerplate as vetted legal advice. Until approved: mark `LEGAL COPY REQUIRED`; do not signal launch readiness.

---

## 5. SERVICE OFFERINGS AND COPY VOICE

These are the four canonical top-level service names; use them consistently on Home, Services, navigation/card CTAs and service pages:

1. **eLearning Design & Development** — engaging, accessible, effective learning experiences; bespoke interactive courses, scenarios, blended formats, multimedia and Storyline-ready learning.
2. **Learning Platforms & LMS** — implementation, configuration, optimisation, integrations, experience and support for learning platforms.
3. **Learning Strategy & Consultancy** — discovery, learning needs analysis, curriculum/skills mapping, practical plans, outcome/evaluation strategy.
4. **Ongoing Learning Support** — retainers and flexible ongoing content updates, platform administration, maintenance, improvement and advisory services.

**Writing style:** natural UK English, intelligent and direct, warm, quietly confident, not corporate jargon. The central idea is **better learning by design**. Focus on clients' problems and meaningful results. Short punchy headings, concise body, purposeful calls to action. No em dashes every other sentence, no exaggerated marketing prose, no empty phrases such as "revolutionise learning", "unlock limitless potential" or "cutting-edge solutions". Mirror displayed concept copy where clearly legible, then refine only with owner approval. Use `organisation`, `programme`, `learner-centred`, `behaviour`, `optimise` spelling.

**Evidence/claims policy:**
- A concept mockup is **not verification** of a fact. `20+ years`, `13,000+`, `93%+`, project outcomes, clients, logos and quotation text must be verified and attributed correctly before public use.
- Distinguish **the founder's career experience** from **Butter agency client engagements**. Never imply Butter delivered a project under its own contract if the work was actually undertaken in an employed role, without appropriate, approved clarification.
- Do not claim partnerships, accreditations, MCA approval, awards, official endorsement or client testimonials unless evidenced/approved.
- Never fabricate a contact email, real person, headshot or customer logo. If authentic data is missing, mark the field in the data source as unpublished/approval-pending.
- Do not invent or alter a client's proprietary eLearning screens, nor release private details into public code.

---

## 6. UX, LEAD GENERATION AND CONVERSION

### Primary journey
Visitor understands the value proposition within the hero → explores the relevant service → sees credible evidence in Work → learns how Butter works → submits a low-friction enquiry. Secondary journey: Insight → service or case study → contact. CTAs throughout should lead to an intentional destination, not dead-end anchors.

### CTA map
- Header `Let's talk` → `/contact` (all pages).
- Home/Work/Service `Start a project` → `/contact` with optional safe query context, e.g. `?interest=elearning`.
- Services `Find out more` → corresponding individual service route.
- Work card/`Read the full case study` → specific public case-study route.
- Insights `Read article` → published article route.
- Contact success view → acknowledged next step; no fake confirmation when submission failed.

### Enquiry form: must function, not merely look real
- Fields: Name (required), work email (required), organisation (optional), type of support (optional select), short project brief (required), budget/timeline (optional, never mandatory), privacy acknowledgement as needed. Keep visible form brief and mobile-friendly.
- Zod or equivalent shared validation client/server, with meaningful accessible labels, error messages, loading, safe confirmation, server-side validation and success/error response handling.
- Implement a server-side route/action with a **real delivery provider** (e.g. Resend transactional email service) using environment variables. Never expose API keys in browser bundles.
- Provide `.env.example` with clearly labelled `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `RESEND_API_KEY` (if Resend chosen), `SITE_URL`, etc. Never put secrets into Git.
- Provider may be unconfigured locally. In that case display a truthful non-success configuration state in development, log a clear warning, and document exact setup steps. **Never pretend an enquiry was sent** or silently discard it.
- Add spam mitigation: honeypot + server-side rate limiting; consider Turnstile if warranted, with privacy/consent implications. Include input length limits, sanitisation/escaping, anti-header-injection safety, timeout/error handling, no secret leakage in errors.
- Consent to marketing, if offered, must be separate and unticked by default; not a condition of submitting an enquiry.
- Do not store personal enquiries persistently unless configured, documented, justified and secured.
- Email deliverability requires correct DNS/domain settings outside app code; document verification as a launch blocker.
- Instrument successful submit as a conversion event **only** in the consent-compliant configured analytics setup.

### Trust and proof
- Place authentic work and confirmed credentials near conversion points.
- For testimonials, require permission, approved exact quote, attribution. If absent, omit from launch rather than fabricate.
- No fake scarcity, notification popups, countdowns or deceptive conversion patterns.
- Contact reassurance: where the enquiry goes and what to expect, using only service levels owner confirms.

---

## 7. REQUIRED TECH STACK AND ARCHITECTURE

Build a fresh maintainable repository; do **not** import the appearance or CSS system from any older Butter site.

**Preferred production stack:**
- **Next.js App Router**, stable supported release at implementation time.
- **React + TypeScript strict mode**.
- **Tailwind CSS** stable supported release with central CSS variables/design tokens; plain CSS/CSS Modules as needed for art-directed sections. No unnecessary UI framework fighting against the concept art.
- **Next.js built-ins** for routing, fonts, image optimisation and metadata; Server Components by default, Client Components only where interaction requires them.
- `lucide-react` for simple supporting icons where the reference calls for it.
- **MDX or typed local content/data** for case studies, insights, FAQs and service offerings, designed for future CMS migration without a rewrite.
- **Zod** for form validation; integrate only the minimal necessary contact-provider library.
- **ESLint + Prettier**, TypeScript checks and a sensible test setup.
- **Playwright** for real browser smoke flows and responsive/visual screenshot inspection. Use browser accessibility testing tools where available.
- **Netlify** as a viable deployment target, provided the selected Next.js features and server-side email integration are supported by the current adapter/platform configuration; document the chosen deployment. Do not assume a static export can execute server-side contact handling. Vercel is an alternative if explicitly chosen.

Prefer npm as package manager for ease of onboarding; pin the dependency lockfile. Inspect current official documentation before adopting framework-specific APIs. Avoid experimental features without a clear reason and owner approval. Do not add a CMS, database, headless commerce layer, animation library or state manager by default. Build for reliability and ease of handover.

### Suggested architecture
```
app/
  layout.tsx
  page.tsx
  services/page.tsx
  services/[slug]/page.tsx
  work/page.tsx
  work/[slug]/page.tsx
  about/page.tsx
  insights/page.tsx
  insights/[slug]/page.tsx
  contact/page.tsx
  elearning-design-devon/page.tsx  # only if approved as a useful original page
  privacy/page.tsx
  terms/page.tsx
  api/contact/route.ts
  sitemap.ts
  robots.ts
components/
  layout/                  # global header, mobile nav, footer
  ui/                      # headings, pills, links, icon wrappers, FAQ
  sections/                # hero, proof, service bands, process, CTA
  cards/                   # work, service, insight cards
  forms/                   # enquiry form
content/
  services.ts
  case-studies.ts
  insights/                 # approved .mdx entries
  faqs.ts
lib/
  contact/                  # server validation/provider integration
  seo.ts                     # metadata, canonical and verified structured data
  site-config.ts             # includes Devon-first but nationwide positioning
styles/
  tokens.css               # design tokens, typography variables
public/assets/
  brand/ work/ services/ insights/ people/
reference/                    # provided concept PNGs, NOT production assets
docs/
  decisions-and-gaps.md
  visual-audit.md
  launch-checklist.md
  content-approvals.md
  search-and-content-plan.md  # search intents, approvals, search measurement
  phase-status.md             # per-phase checklists and gates
AGENTS.md                    # auto-loaded Codex instructions
BUTTER_MASTER_SPEC.md         # full authoritative specification
BUILD_ROADMAP.md              # operational checklist, aligned to section 12
.env.example
README.md
```

Do not make abstractions just to satisfy a folder example; preserve clear separation of site content, reusable visual components and server-only business logic. Never overcomplicate the stack.

### Configuration/data
- Centralise `SITE_NAME`, description, URL, contact and social destinations in `lib/site-config.ts`.
- Separate content data from layout. A card should not have its entire story hard-coded into multiple JSX files.
- Include publication/status fields (`draft`, `approved`, `published`) for cases/articles that require approval; only render published items on live public routes.
- Record asset filenames and source/rights information where relevant.
- Consistent URL slugs; redirects if slugs change after launch.

---

## 8. RESPONSIVE RULES — NO SECOND DESIGN LANGUAGE

Build for reference-derived **desktop first in visual comparison**, but implement mobile-friendly semantics and CSS from the beginning. Required visual checks at **1440, 1280, 1024, 768, 390 and 375px** widths. Verify wider viewports without excessive stretched white space.

### Desktop
- Preserve hero art/text split, bold left typography and large dominant curled ribbon.
- Header center navigation and right-aligned black pill.
- Homepage yellow services block in 4 columns with thin vertical rules.
- Work index 3 columns; service overview 4 columns; process horizontal steps with connecting arrows.
- Maintain image composition/cropping and editorial asymmetry.

### Tablet
- Scale typography and reduce gaps rather than discarding design intent.
- Service columns 2x2 where necessary, cards in 2 columns, process may wrap as a neat grid.
- Ribbon remains deliberate but must not obscure copy or create overflow.

### Mobile
- Header brand left, functional menu button right; accessible expandable menu with keyboard operation, Escape handling, focus management and body scroll behaviour.
- Hero text and ribbon stack in a considered sequence: strong headline/CTA visible before decorative graphic if needed.
- Display headline scales with `clamp()` and does not clip words; preserve yellow highlight.
- Services, featured work, insights, FAQs, process steps, metrics and contact form become single column, with practical spacing.
- Yellow bottom CTA keeps headline, text and working button visible; mascot can scale/reposition lower or be omitted **only if it would compromise usability**.
- No sideways scrolling, overlapping sticky headers, 10px body text, dead tap targets or text baked into images.

Touch targets ~44px minimum wherever practicable. All cards and tags should have proper link/button semantics, not clickable `div`s.

---

## 9. INTERACTION AND ANIMATION

Static art is the baseline. Add subtle, intentional interactions without making the implementation look unlike the reference:
- Button/link hover: modest colour/arrow movement, underline, or background change; 150–250ms.
- Cards: subtle image scale/translation or link emphasis on hover only if performance and accessibility permit.
- FAQ: semantic expand/collapse, `aria-expanded`, keyboard support; avoid jumpy transitions.
- Work filter: immediate accessible update, maintain all/category state, no fake filtered data.
- Menu: accessible keyboard and screen-reader semantics, closes predictably.
- Form: inline validation, clear submission state, genuinely functioning success message.
- Prefer CSS over JS motion libraries; respect `prefers-reduced-motion: reduce` and disable non-essential animation.
- No autoplaying background videos, huge parallax movement, cursor trails or looping floating butter shapes without specific approval.

---

## 10. ACCESSIBILITY, SEO, PRIVACY, PERFORMANCE, QUALITY

### Accessibility
Target **WCAG 2.2 AA** where achievable across the experience: semantic landmarks, one logical H1 per page, heading order, descriptive link text, visible focus, keyboard navigation, correct labels/help/error patterns, sufficient contrast, reduced-motion support, adequate target sizes, non-colour-only status indications, accessible accordions and menu. Use meaningful alt text for informative images; decorative ribbon/mascot can be `alt=""` if duplicative. Test real interactions with keyboard and mobile. Do not sacrifice accessible real text to turn headlines/buttons into images.

### SEO, AEO, GEO and Devon-first organic discovery — built into EVERY phase

**SEO** = search engine optimisation: discoverability in traditional organic search. **AEO** = answer engine optimisation: make useful, accurate answers easy for search systems and visitors to find and understand. **GEO** here = *generative engine optimisation*: make Butter's original expertise and verifiable entity facts easy to interpret, assess and cite in AI-driven discovery. **Geographic targeting** is separately covered as Devon/South West. None guarantees rankings, rich results or AI citations. Do not chase gimmicks or promise outcomes.

**Site-wide foundations from PHASE 0, NOT postponed to pre-launch:**
- Map one genuinely differentiated primary search intent and a small set of related terms to each approved route. No keyword cannibalisation, doorway pages or programmatic city duplication. Record candidates and validation status in `docs/search-and-content-plan.md`; sample terms in §10.1 are **research hypotheses, not verified volume/rankings**.
- Render all commercially important content as **server-rendered/static real HTML**. Don't hide principal service explanations or answers in inaccessible Javascript-only widgets, canvas graphics or screenshots.
- Create unique titles, descriptions, social OG images, accurate canonical URLs and meaningful page H1s. Preserve exact screenshot headline art while using body copy, metadata and descriptive surrounding text to communicate services and locality naturally.
- Build `app/sitemap.ts`, `app/robots.ts` and metadata using stable Next.js App Router conventions. Sitemap includes **only approved public canonical URLs**; exclude drafts and reference PNGs. Deployment preview/staging must be `noindex` via reliable deployment policy, not accidentally indexed.
- One canonical domain configured by `SITE_URL`, including correct slash/HTTP-to-HTTPS redirect strategy. Add redirects for intentional slug changes; test 404s and trailing slash consistency.
- Use descriptive internal links: Services ↔ individual service pages ↔ relevant Work ↔ genuine Insights ↔ Contact. Do not flood the footer with lists of keyword-stuffed town/service combinations.
- Implement verified JSON-LD sparingly: `Organization`/`WebSite` and published `Service`, `BreadcrumbList`, `Article` and `Person` as appropriate. Use `LocalBusiness`/`ProfessionalService` only if business identity/eligibility and required locality information are actually verified. Structured data must match visible, approved facts; never add fake reviews, ratings, awards or opening times. `FAQPage` markup is not a guaranteed rich-result strategy; use FAQs primarily for real users.
- Approved content should explain who Butter helps, what it delivers, how it works, constraints, typical fit, alternatives, evidence and next steps in concise, readable UK English. Honest answers and genuine worked examples are better than machine-written generic articles.
- Use authentic authorship with an approved founder bio/credentials, first-hand examples, original insight, accurately dated articles and sourced claims. A case study needs specific problem, approach, scope, evidence, and precise role attribution.
- Maintain consistent name/description/contact/areaServed/social identity across website and any eligible external listings. Do not create artificial backlinks, purchased citations, fake third-party mentions or fictitious reviews.
- `llms.txt` or bot-targeted content files are NOT a requirement for Google AI search. Do not prioritise them above crawlable HTML, original content, indexability, internal linking and legitimate brand signals. AEO/GEO tactics must be evidence-based and reviewed for changing search guidance.
- Integrate a consent-compliant analytics measurement plan from day one; fire analytics tags only where permitted and do not log personal enquiry fields. Measure organic visits, page and query engagement, service-to-contact journeys, successful enquiries and qualified leads where possible. No unconfigured script should silently claim to track conversions.

**DEVON-FIRST local discovery rules:**
- Primary geography **Devon**; natural secondary coverage **South West England**; broader market **UK-wide** (genuine remote capability). Treat these as truthful descriptions, not a licence for repeated copy.
- Use a subtle approved geographic cue on Home, then more meaningful explanation on About and Contact; retain the approved hero headline and visual composition. Home metadata may mention Devon if it fits the natural proposition without becoming a keyword list.
- Include relevant Devon evidence only when authentic: legitimate Devon collaborations/meetings, a founder's genuine local perspective, region-relevant insight or case study. Do not fabricate local proof or force every case study to mention Devon.
- Optionally publish `/elearning-design-devon` in Phase 4 **only if** it provides unique, substantive, genuinely locally useful content and a clear CTA. If no such material exists, do not publish it yet; About/Services/Contact can carry location signals initially.
- If Butter meets Google's Business Profile eligibility rules (real in-person customer contact during stated hours), a correctly configured eligible profile may help local discoverability. If operations are **online-only**, do NOT create or claim an eligible local Google Business Profile. If an eligible service-area business operates from home, do not expose the private residential address on the site or publicly in the profile. Obtain owner confirmation before configuration.
- Do not target Exeter or any Devon town as a claimed base without an explicit factual decision. Do not spin up near-identical pages for Exeter, Plymouth, Torquay, Barnstaple, etc.

**At the close of EACH phase**, supply a search acceptance audit: published URLs, unique metadata, canonical/indexing status, internal links, structured data validity, useful question-answer content where appropriate, Devon/UK geographic consistency, and measurement readiness. Section 12 sets exact gates.


### 10.1 Search-intent map (provisional, research/approval needed)

| Page / route | Primary visitor need | Candidate search theme — NOT volume-verified | Local relevance | Content/answer priority |
| --- | --- | --- | --- | --- |
| `/` | Understand Butter and assess overall fit | digital learning design studio / eLearning agency | Subtle `Based in Devon, working across the UK` cue if approved | Who we are, what we do, for whom, why work with us, CTA |
| `/services` | Compare available support | digital learning services / eLearning services | Devon/South West mentioned naturally once, not in each card | Which service solves which problem? |
| `/services/elearning-design-development` | Commission bespoke learning | eLearning design and development / bespoke eLearning | Optional Devon in supporting content | Deliverables, process, formats, accessibility, evidence, FAQs |
| `/services/learning-platforms-lms` | Select/implement/improve platform | LMS implementation / Moodle LMS support | Regional availability only if genuine | Platform support scope, assessment, integrations, ongoing support |
| `/services/learning-strategy-consultancy` | Solve performance/skills challenges | learning strategy consultancy / learning needs analysis | South West and UK as appropriate | Discovery, diagnosis, strategy, evaluation, examples |
| `/services/ongoing-learning-support` | Obtain an expert ongoing partner | outsourced learning development / LMS support retainer | Local partnership where factually relevant | Retainer scope, request process, what is included/excluded |
| `/work` + case pages | Evaluate real proof | digital learning case studies / portfolio | Geographic relevance only if proven | Problem, intervention, owner role, outcome, client approval |
| `/about` | Decide if Butter is credible | about Butter / Devon digital learning specialist | Clear and truthful Devon positioning | Founder, experience, values, how Butter operates |
| `/insights` + articles | Learn and evaluate expertise | LMS selection, accessibility, learning design, scenario-based learning | Region-specific topics only if genuine | Direct answer first, original perspective, sources, applied advice |
| `/contact` | Start a brief / speak to a person | contact Butter / eLearning consultation | Say based in Devon and works wider UK if true | What to send, response expectation if approved, functional form |
| `/elearning-design-devon` (conditional) | Find a trusted relevant Devon provider | eLearning design Devon / digital learning Devon | **Devon-specific substantive original page** | Who local work is suited to, regional approach, actual experience, CTA |

These are candidate themes, not a promise of search demand or a substitute for keyword research. Validate with a deliberate research process using relevant available tools and real Search Console data after launch. Do not write pages solely to satisfy a keyword spreadsheet.

**Answer-first content component pattern (where useful):** present a genuine user question as a descriptive H2/H3, give a direct 40–80-word plain-English answer, then deeper explanation, constraints, authentic example and helpful link/CTA. This is a writing aid, NOT a rigid SEO formula. Never turn every editorial section into a robotic FAQ to satisfy a speculative GEO tactic. Article content should include sources and publication/update dates only when accurate.

**Measurement model:** capture `cta_click`, `service_view`, `case_study_view`, `contact_form_start`, `contact_form_success` and `contact_form_error` (only aggregate event properties, no name, email or message). Define what counts as a qualified enquiry outside the public site; validate inbox receipt rather than counting button clicks as leads. Record where data is processed and obtain appropriate consent where applicable. Monitor by page/service/locality without creating privacy-invasive individual profiles.

### Privacy / security
- UK privacy and cookie expectations: consent management only when non-essential tracking is used; no marketing/analytics cookies before valid consent where required. Keep a clear record of actually deployed services in the privacy text; review legal accuracy before launch.
- Server-only secrets, safe form handling, dependency hygiene, sensible HTTP security settings appropriate to deployment, no exposed debug routes or personal submissions.
- No unsupported third-party embeds that slow the page or surprise visitors with trackers.

### Performance
- Target Lighthouse **90+** in Performance, Accessibility, Best Practices and SEO on representative production pages where realistic; never treat a numerical target as a licence to compromise visual fidelity.
- Optimise actual image assets using correct dimensions, `next/image`, responsive `sizes`, modern formats when appropriate; preload the true hero/LCP image only; lazy-load off-screen photography.
- Avoid excessive font weights/subsets, unnecessary JS hydration, layout shift, blocking scripts and giant uncompressed portfolio files.
- Test Core Web Vitals, particularly LCP, CLS and INP, on production-like builds.

### Testing and delivery commands
Set up scripts for `dev`, `build`, `lint`, `typecheck`, `test` and `test:e2e` as applicable. On each meaningful change, run at least lint, typecheck and production build; run focused browser tests for changed flows. Tests should cover nav, category filtering, FAQ, valid/invalid contact submission (provider mocked in CI), unpublished items hidden, and mobile menu. Explain clearly when external integration credentials are not configured.

---

## 11. VISUAL-FIDELITY WORKFLOW — REQUIRED FOR EVERY PAGE

**Do not code blindly. Follow this sequence:**

**A. Audit reference:** identify page modules, headings/copy, colour zones, column proportions, gutter hierarchy, image aspect ratios, special brand assets and interaction affordances. Log reference-specific details in `docs/visual-audit.md`.

**B. Asset and evidence audit:** look for available source files, rights, exact font, client-logo approvals, copy/metric proof. Mark missing elements in `docs/decisions-and-gaps.md`. Do not silently substitute unrelated content.

**C. Implement design system first:** tokens, fonts (provisional if necessary), header, CTA buttons, typography, grids, section wrappers, global footer. Complete representative hero + button + card before cloning patterns.

**D. Build the full real page:** semantic responsive components, authentic route links, proper content data. Focus on likeness, not cosmetic new ideas.

**E. Visually compare:** capture browser screenshots at 1440px desktop and representative other widths. Compare against the corresponding original reference **side by side** (recognising that source image dimensions are export dimensions, not viewport dimensions). Examine typography shape, line wrapping, first fold, artwork scale, column alignment, card crops, section transitions, overall page height, CTA band, footer.

**F. Iterate until matched:** fix the largest differences first, in priority order: (1) typography/headline wraps, (2) hero geometry, (3) dominant graphic, (4) vertical rhythms and grid, (5) image crop, (6) colours, (7) minor borders/icons. Do not add polish that drifts from the source.

**G. Test behaviour and accessibility:** keyboard/mobile/form/filter/accordion/links plus production build and performance.

**H. Record state:** update `docs/visual-audit.md`, `docs/decisions-and-gaps.md`, and where relevant `docs/content-approvals.md` with what matches, what is provisional and what blocks release. Keep the documentation accurate across future Codex sessions.

**Review checklist for every significant UI change:**
- Does it still resemble the reference instantly, not just conceptually?
- Is the typography still the same scale/weight/tracking and wrapped correctly?
- Is the same cream/black/yellow visual system used without new colours?
- Are the reference's negative space, thin rules and card proportions preserved?
- Is the brand ribbon or mascot represented with **approved** source assets?
- Are navigation, CTAs, filters, FAQs and forms actually operable?
- Are all business statements and logos approved, not made up?
- Did the mobile version preserve the visual language and improve usability?

---

## 12. PHASED DELIVERY — REQUIRED ROADMAP, PAGE COVERAGE AND SEARCH GATES

**Delivery principle:** 9 phases (0–8), all one coherent website. Build sequentially in small reviewable changes, but initialise SEO/AEO/GEO, local strategy and analytics architecture **in Phase 0**. Never treat search optimisation as a one-off Phase 7 task. A completed phase needs a working implementation, screenshot or evidence as appropriate, passing checks, a written progress/gaps record and a search audit. Do not publicly launch while any of the four primary nav destinations or Contact is a stub. The operational checklist is `BUILD_ROADMAP.md`, kept consistent with this section.

### PHASE 0 — Discovery, content, positioning & technical/search foundations
**Deliverables:** inspect all 4 concept PNGs; produce asset/font gap inventory and measured tokens; confirm no old repo/design carry-over; scaffold Next.js/TS/Tailwind/App Router, lint/test commands, shared config; create content route map for ALL visible nav items and service/case/article details; list preliminary Devon-first search themes with explicit `RESEARCH REQUIRED` status; create `docs/search-and-content-plan.md`, `docs/phase-status.md`, `docs/decisions-and-gaps.md` and initial metadata/schema/sitemap strategy. Agree a canonical domain placeholder from configuration (not an invented domain), hosting assumptions, release approval rules and conversion measurement definitions. Set route links/navigation structure from outset.
**Search gate:** search intent mapped to every route; server-rendering/indexability approach, canonical/robots/staging rules, JSON-LD data contract, truthful Devon/South West/UK coverage documented. No keyword volume/ranking claims.
**Exit gate:** build/lint/typecheck work, route inventory exists, all material uncertainties clearly tagged, architecture and search foundations reviewable.

### PHASE 1 — Global design system, homepage and navigation benchmark
**Deliverables:** exact warm cream/black/yellow tokens, provisional font strategy, header/footer/mobile nav, black pill CTAs, highlights, section spacing, typography, cards, CTA strip; full Home page following reference `01` from hero to footer with approved assets or explicitly documented missing assets. Working nav links point to existing accessible destinations (unbuilt pages remain in development-only state until approved). Install SEO metadata utilities, baseline `app/sitemap.ts` and `app/robots.ts` with safe publish filters. First-pass metadata and verified `Organization`/`WebSite` data when sufficient. Build real semantic content, not screenshot overlays.
**Search gate:** unique Home metadata/canonical/H1, internal navigation, honest Devon positioning integrated without distorting art, successful crawlable server HTML; staging never indexed.
**Exit gate:** 1440px/390px visual comparisons recorded, no broken major interactions, shared tokens/components accepted, no fake trust claims.

### PHASE 2 — SERVICES menu and ALL FOUR sellable service detail pages
**Routes:** `/services` + each of the four listed `/services/[slug]`. Match reference `02` for index and `04` for eLearning detail; clone the approved design grammar for 3 other service detail pages, not the copy. Include benefit/process/solution/real proof/FAQ/CTA modules, genuine service boundaries, responsive gallery and functioning accordions.
**Search gate:** one distinct intent, unique description/title/H1, real HTML service explanations, specific answer-led FAQs, internal links to relevant Work/Insights/Contact, correct published Service/breadcrumb data where supported. Natural locality, no duplicated keyword-heavy service templates.
**Exit gate:** all four service `Find out more` links lead to substantial pages; mobile/desktop visuals, a11y and build pass. Required proof gaps documented.

### PHASE 3 — WORK menu, live filters and credible case study details
**Routes:** `/work`, `/work/[slug]`. Match both halves of reference `03`; functional filter buttons, card links, real case template, approved screenshots, authentic evidence, explicit employment-vs-agency attribution. Keep unapproved items draft/unpublished.
**Search gate:** unique case titles/excerpts, crawlable approved project narratives with challenge/approach/results (only proved outcomes), internal service links, case breadcrumb data; **no invented metrics or organisation endorsements**.
**Exit gate:** Work index and at least an owner-approved publishable case study/detail (or clearly report launch blocker); all filters and links tested.

### PHASE 4 — ABOUT menu + genuine Devon relevance
**Routes:** `/about`; evaluate optional `/elearning-design-devon`. Extend the existing editorial visual system. Show real founder/studio story and authority only when supplied/confirmed, truthful Devon base and UK-wide delivery. Add one optional regional landing page *only* if differentiated regional information is available; otherwise leave it out of nav/sitemap and rely on genuine About/Services/Contact descriptions.
**Search gate:** verifiable location/identity, truthful service-area signals, approved Person/Organization data, local page quality checked against doorway-page risks. Check Google Business Profile eligibility; never claim one if purely online-only.
**Exit gate:** About has real useful content and active CTA; owner-approved geographic claims; visual consistency review.

### PHASE 5 — INSIGHTS menu, editorial system & AI-discoverable expertise
**Routes:** `/insights`, `/insights/[slug]`. Match home card design, create accessible article typography/navigation and editorial workflow with real author data and sources. Prepare **2–3 substantive owner-approved cornerstone pieces** if available, for example: choosing an LMS for your organisation; scenario-based eLearning that changes behaviour; practical accessibility improvements. Never auto-publish shallow filler or date-stamped fabricated posts.
**Search gate:** query-intent-led content, direct helpful answers in natural language, unique title/description/canonical, correct `Article`/breadcrumbs when supported, visible author/date, sources and context; service/work internal links. No promises of AI citations.
**Exit gate:** index and detail routes work; only approved published pieces in public lists/sitemap; reading and mobile tests pass.

### PHASE 6 — CONTACT journey, conversion engine, privacy & legal readiness
**Routes:** `/contact`, `/privacy`, `/terms`. Build contact page consistent with yellow/black/cream editorial direction. Configure and test real server-side form delivery, validation, anti-spam, success/failure, meaningful enquiry routing and no fake success. Ensure sitewide CTAs are coherent; add analytics event interface with proper consent handling and no PII. Privacy/legal statements reflect actual processors; owner review required.
**Search gate:** contact route crawlable and clearly connected to all offerings; approved location wording and business identity; canonical/metadata; test end-to-end CTA tracking only where legal and configured.
**Exit gate:** an actual controlled submission reaches the correct inbox; error and spam paths tested, privacy/cookie controls functional, legal copy owner-approved. No release if this fails.

### PHASE 7 — Cross-site UX, visual, technical SEO/AEO/GEO, accessibility & quality audit
**Scope:** ALL primary nav paths plus every published service, project, article, contact, privacy and terms route; footer and mobile nav. Compare desktop screenshots (1440, 1280, 1024), tablet (768) and mobile (390, 375). Audit H1/headings/meta/canonical/robots/sitemap/structured data/404/redirects/image alt/core web vitals/internal linking/author facts/region claims. Review every CTA. Test keyboard, screen reader basics, build, unit and Playwright end-to-end. No empty pages, fake social proof, stock unlicensed media, duplicate or inconsistent metadata.
**Search gate:** page-by-page indexed/published matrix; validate structured data and rendered HTML; staging noindex and production indexing policy verified; authentic answers/examples; Google Search Console / Bing Webmaster setup instructions prepared.
**Exit gate:** all critical defects fixed and accepted; remaining noncritical gaps documented with owner sign-off; every visible menu item and lead route complete.

### PHASE 8 — Deploy, index, measure & improve
**Deliverables:** choose supported hosting, configure domain/HTTPS, test provider/DNS/email, verify production robots/sitemap/canonical/indexability; register/verify Google Search Console and (if useful) Bing Webmaster Tools; submit sitemap; monitor first index coverage and queries over time; consent-compliant analytics and enquiry funnel; check actual inbox/lead notifications. Establish editorial maintenance cadence and a targeted Devon-first business development/content plan. Optimise based on evidence, not speculative ranking hacks. No claim that results/impressions are immediate or guaranteed.
**Search gate:** public canonical URLs discoverable, data and conversions verified, owner reviews early search insights and regional enquiry quality (Devon, South West, UK).
**Exit gate:** go-live checklist owner-approved, rollback documented, post-launch monitoring ownership clear; quarterly content review and small incremental improvements agreed.

### Complete menu and page accountability grid

| Visible element | Route(s) | Build phase | Final verification |
| --- | --- | --- | --- |
| Butter wordmark / Home | `/` | 1 | Logo link and full Home reference audit |
| **Services** | `/services` | 2 | Overview + all four linked detail routes |
| **Work** | `/work` | 3 | Filtered cards + approved case details |
| **About** | `/about` | 4 | True biography/studio and geographic statement |
| **Insights** | `/insights` | 5 | Index + authentic approved full articles |
| **Let's talk / Contact** | `/contact` | 6 (link from 1) | All CTAs lead to a delivered enquiry, not only a form UI |
| Footer Privacy & Terms | `/privacy`, `/terms` | 6 | Linked, accessible and owner-approved |
| Conditional regional page (not a new top nav) | `/elearning-design-devon` | 4 if content exists | Original local value; no thin/doorway page |

**Before EACH Codex phase begins:** reread `AGENTS.md`, `BUTTER_MASTER_SPEC.md` and `BUILD_ROADMAP.md`; inspect relevant reference images; update status and current search/approval gaps. **After EACH phase ends:** report completed pages, test results, visual matching, outstanding input gaps, exact search/measurement checklist, and next phase. Routine engineering decisions do not need repeated sign-off; brand departures, public claims, paid external integrations, privacy policy and launch do.

## 13. CODING AND CHANGE CONTROL RULES

1. Never make a broad unsolicited rebrand, layout rewrite or font swap while solving a narrow bug.
2. Before editing a component, inspect relevant existing tokens/components and corresponding reference image.
3. Prefer reusing existing components and data fields; avoid duplicate nearly identical implementations.
4. Keep TypeScript strict, avoid `any` unless justified, and keep forms/server-only operations secure.
5. Keep dependency count low. Document every substantial added dependency and its benefit.
6. Follow the site's conventions even when a generic component library makes another aesthetic easier.
7. Maintain meaningful commit-friendly changes; do not delete user work or rewrite the repo's history.
8. Document temporary placeholder content visibly in source/approval docs so it cannot be mistaken for approved live content.
9. When changing global tokens or shared components, visually check **all four referenced templates** for regressions.
10. Do not claim a test passed unless executed; do not claim a form sends emails unless a real provider-backed request succeeded.
11. If asked for a feature that conflicts with brand fidelity, explain trade-off and propose the least visually disruptive solution.
12. Use an accessible empty state, not a fake sample, when no real content is available.

### How to communicate results
For each delivered phase/task, summarise briefly:
- What changed and which files/routes.
- What reference section(s) it matches.
- Which commands/tests were run and outcomes.
- What is still provisional, missing or needs owner approval.
- One clear next recommended action.

No generic claims such as “pixel perfect” without an actual side-by-side audit. No placeholder UI presented as production complete.

---

## 14. FINAL ACCEPTANCE GATES — NEVER SKIP

### Visual
- [ ] Desktop Home follows screenshot section-by-section from hero to footer.
- [ ] Services overview closely matches its reference.
- [ ] Work index and case study each match their separate reference half.
- [ ] eLearning service detail closely matches its reference.
- [ ] All remaining pages use the same tokens/typographic language; nothing looks template-generated.
- [ ] Final exact font/logo/ribbon/mascot assets are resolved or reported as launch blockers.
- [ ] Layout is consistent and coherent at 1440/1280/1024/768/390/375px.

### Functional
- [ ] All links/routes/active navigation states work.
- [ ] Category filters, FAQs and mobile menu work by mouse, touch and keyboard.
- [ ] Enquiry form properly validates and actually sends to the configured real destination.
- [ ] Enquiry failure never shows false success; basic spam protections operational.
- [ ] Only approved case studies/articles and verified claims are public.

### Search and regional discovery
- [ ] SEO/AEO/GEO architecture implemented from Phase 0, with a page-level intent and evidence matrix.
- [ ] All published routes have unique titles, H1s, descriptions, canonicals and relevant internal links.
- [ ] Correct, validated, claim-accurate JSON-LD without fake LocalBusiness, ratings or FAQ rich-result guarantees.
- [ ] Production `robots.txt`/sitemap and staging non-indexing verified; only owner-approved public URLs included.
- [ ] Devon-based, South West and UK-wide positioning is accurate, proportionate and visually unobtrusive.
- [ ] No fictitious location, mass city pages, invented local references or GBP listing without eligibility.
- [ ] Valuable first-hand answers, real evidence and approved authorship, not fabricated AI-search fodder.
- [ ] Search Console + conversion monitoring ready, respecting privacy and actual consent choices.

### Technical / release
- [ ] Production build, lint/typecheck and critical browser tests pass.
- [ ] Accessibility reviewed against WCAG 2.2 AA; key issues resolved/documented.
- [ ] SEO/social metadata, sitemap, canonical links and responsive images are ready.
- [ ] UK privacy/consent and legal text reflect real implemented services.
- [ ] No leaked credentials, invented proof, unlicensed client assets or fake integrations.
- [ ] Deployment environment, domain, email DNS and contact routing tested.
- [ ] `docs/launch-checklist.md` identifies and resolves every release blocker.

**ADDITIONAL OVERRIDING SEARCH RULE:** The fact that the primary customer market starts in Devon must inform architecture, truthful content and measurement from the beginning; it must not distort approved Butter visuals or trigger generic local SEO spam. SEO/AEO/GEO are ongoing quality practices, not magic post-launch add-ons.

**FINAL OVERRIDING RULE:** If a design choice would make the site look less like the Butter concept screenshots, do not make it merely because it is trendy or expedient. If a factual/commercial claim or asset cannot be verified, do not invent it. Preserve Butter's exact intended character: warm cream, black, confident oversized editorial type, distinctive restrained yellow, authentic work and a beautiful functional route to starting a conversation.
