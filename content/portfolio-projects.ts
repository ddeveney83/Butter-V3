import type { CaseStudy } from "./case-studies";

// Original source provenance is retained privately in docs/portfolio-migration.json.
export const migratedCases: CaseStudy[] = [
  {
    slug: "15-minute-compliance",
    title: "15-Minute Compliance",
    organisation: "Places for People",
    discipline: "eLearning · Microlearning",
    summary:
      "A redesign of 62 compliance courses into focused 15-minute modules. Each experience centred on one clear learning objective, replacing lengthy training with practical, active learning.",
    category: "Housing & Communities",
    tags: ["Compliance"],
    status: "published",
    approval: {
      owner:
        "Owner confirmed on 26 October 2026 that this work was completed by Butter and requested Butter attribution.",
      clientPermission: "",
      portfolioReuse:
        "Owner-authorised project content and original media reuse; Butter delivery confirmed by owner on 26 October 2026.",
    },
    role: {
      kind: "butter",
      description: "Learning designed and delivered by Butter.",
    },
    headline: "The useful bits. In a little less time.",
    introduction:
      "A redesign of 62 compliance courses into focused 15-minute modules. Each experience centred on one clear learning objective, replacing lengthy training with practical, active learning.",
    challenge: {
      title: "The learning challenge, in context.",
      text: "A redesign of 62 compliance courses into focused 15-minute modules. Each experience centred on one clear learning objective, replacing lengthy training with practical, active learning.",
      audience: "Employees completing required compliance learning.",
      constraints:
        "Redesigning 62 courses as focused modules, keeping essential content and a clear learning objective in each.",
    },
    requirements: ["Curriculum redesign", "Articulate 360", "Vyond animation"],
    approach: {
      title: "A considered response to a real need.",
      text: "The business case came first. Essential content was prioritised with subject matter experts, then brought to life through short animations, scenarios and simulations. Completion data, quiz results and feedback shaped improvements after launch.",
      designDecision:
        "The programme redesigned 62 compliance courses into focused modules. A clear learning objective helped establish what each experience needed to do before production began.",
    },
    deliverables: ["Curriculum redesign", "Articulate 360", "Vyond animation"],
    outcomes: [
      {
        value: "9.91 hrs",
        label: "Training time saved per employee",
        evidence: "Project-reported figure.",
      },
      {
        value: "£5.5M",
        label: "Projected cost saving over 6 years",
        evidence: "Project-reported figure.",
      },
      {
        value: "30%",
        label: "Increase in completion rates",
        evidence: "Project-reported figure.",
      },
      {
        value: "90%+",
        label: "Sustained compliance rate organisation-wide",
        evidence: "Project-reported figure.",
      },
    ],
    outcomeNarrative:
      "Project results showed 9.91 hours of training time saved per employee.",
    evidence: [
      "Figures describe this project and its reported measurement period. They are not guarantees of future results.",
    ],
    hero: {
      src: "/assets/work/15-minute-compliance/hero.webp",
      alt: "15-Minute Compliance: 15-Minute Compliance hero",
      rights:
        "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
    },
    gallery: [
      {
        src: "/assets/work/15-minute-compliance/screen-1.webp",
        alt: "15-Minute Compliance: COSHH Welcome",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      {
        src: "/assets/work/15-minute-compliance/screen-2.webp",
        alt: "15-Minute Compliance: Rise 360 Environmental Course",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      {
        src: "/assets/work/15-minute-compliance/screen-3.webp",
        alt: "15-Minute Compliance: GDPR Landing Page",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
    ],
    serviceSlugs: ["elearning-design-development", "ongoing-learning-support"],
    card: {
      tone: "garden",
      icon: "sprout",
      screen: {
        src: "/assets/work/15-minute-compliance/screen-2.webp",
        alt: "15-Minute Compliance: Rise 360 Environmental Course",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      tilt: "left",
    },
    source: {
      url: "https://danieldeveney.com/work/15-minute-compliance",
      snapshot:
        "https://github.com/ddeveney83/butter/blob/0f650d91b646843c7228d24c5b317652e1d44e4b/src/data/projects.ts",
      checkedOn: "2026-10-26",
      liveVerified: true,
    },
    story: [
      {
        title: "Make room for the essential.",
        paragraphs: [
          "The programme redesigned 62 compliance courses into focused modules. A clear learning objective helped establish what each experience needed to do before production began.",
          "Subject matter experts helped prioritise essential content. The work began with the business case and the learning need, rather than shortening material without considering its purpose.",
        ],
        image: {
          src: "/assets/work/15-minute-compliance/screen-1.webp",
          alt: "15-Minute Compliance: COSHH Welcome",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
      {
        title: "Give the learner something to do.",
        paragraphs: [
          "Short animations, scenarios and simulations brought the content into practical situations. Active learning gave each module more to offer than a sequence of information screens.",
          "The collection included different compliance subjects, with each experience centred on its own objective. A consistent focus helped the modules work as a wider programme without making every topic identical.",
        ],
        image: {
          src: "/assets/work/15-minute-compliance/screen-2.webp",
          alt: "15-Minute Compliance: Rise 360 Environmental Course",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
      {
        title: "Keep improving after launch.",
        paragraphs: [
          "Completion information, quiz results and learner feedback informed improvements after delivery. Together, they offered different signals about participation, understanding and the experience itself.",
          "The reported training-time saving describes a change in the time required of employees. It remains distinct from evidence about how effectively colleagues apply the guidance at work.",
        ],
        image: {
          src: "/assets/work/15-minute-compliance/screen-3.webp",
          alt: "15-Minute Compliance: GDPR Landing Page",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
    ],
    videos: [],
  },
  {
    slug: "information-security",
    title: "Information Security",
    organisation: "Places for People",
    discipline: "eLearning · Threat-led scenarios",
    summary:
      "A rebuilt security pathway grounded in actual phishing emails, a vishing call scenario and a colleague’s experience. Six short modules made security feel relevant to the next message in a learner’s inbox.",
    category: "Housing & Communities",
    tags: ["Compliance"],
    status: "published",
    approval: {
      owner:
        "Owner confirmed on 26 October 2026 that this work was completed by Butter and requested Butter attribution.",
      clientPermission: "",
      portfolioReuse:
        "Owner-authorised project content and original media reuse; Butter delivery confirmed by owner on 26 October 2026.",
    },
    role: {
      kind: "butter",
      description: "Learning designed and delivered by Butter.",
    },
    headline: "Real threats. Better instincts.",
    introduction:
      "A rebuilt security pathway grounded in actual phishing emails, a vishing call scenario and a colleague’s experience. Six short modules made security feel relevant to the next message in a learner’s inbox.",
    challenge: {
      title: "The learning challenge, in context.",
      text: "A rebuilt security pathway grounded in actual phishing emails, a vishing call scenario and a colleague’s experience. Six short modules made security feel relevant to the next message in a learner’s inbox.",
      audience:
        "Colleagues making decisions about suspicious messages and security threats.",
      constraints:
        "Six short modules, authentic threat examples, transcripts and text equivalents, with SCORM and user testing.",
    },
    requirements: [
      "Threat-led design",
      "Gamified pathway",
      "Multimodal content",
    ],
    approach: {
      title: "A considered response to a real need.",
      text: "Points, badges and visible progress kept the journey moving. Authentic assets supported decisions and human testimony made the consequences tangible. Transcripts, text equivalents, user testing and SCORM checks supported an accessible deployment.",
      designDecision:
        "Six short modules rebuilt the security pathway around relevant situations. Points, badges and visible progress helped connect the parts of the learning journey.",
    },
    deliverables: [
      "Threat-led design",
      "Gamified pathway",
      "Multimodal content",
    ],
    outcomes: [
      {
        value: "16%",
        label: "Increase in security incident reporting",
        evidence: "Project-reported figure.",
      },
      {
        value: "10%",
        label: "Increase in compliance completion rates",
        evidence: "Project-reported figure.",
      },
      {
        value: "20 mins",
        label: "Average time saved per learner",
        evidence: "Project-reported figure.",
      },
      {
        value: "4.6",
        label: "Star satisfaction rating",
        evidence: "Project-reported figure.",
      },
    ],
    outcomeNarrative:
      "Project results showed a 16% increase in security incident reporting, alongside improved completion and a 4.6-star satisfaction rating.",
    evidence: [
      "Figures describe this project and its reported measurement period. They are not guarantees of future results.",
    ],
    hero: {
      src: "/assets/work/information-security/hero.webp",
      alt: "Information Security: Information Security hero",
      rights:
        "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
    },
    gallery: [
      {
        src: "/assets/work/information-security/screen-1.webp",
        alt: "Information Security: Gamification",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      {
        src: "/assets/work/information-security/screen-2.webp",
        alt: "Information Security: Real Example",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      {
        src: "/assets/work/information-security/screen-3.webp",
        alt: "Information Security: Gamified Journey",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
    ],
    serviceSlugs: ["elearning-design-development", "ongoing-learning-support"],
    card: {
      tone: "ink",
      icon: "shield",
      screen: {
        src: "/assets/work/information-security/screen-2.webp",
        alt: "Information Security: Real Example",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      tilt: "right",
    },
    source: {
      url: "https://danieldeveney.com/work/information-security",
      snapshot:
        "https://github.com/ddeveney83/butter/blob/0f650d91b646843c7228d24c5b317652e1d44e4b/src/data/projects.ts",
      checkedOn: "2026-10-26",
      liveVerified: true,
    },
    story: [
      {
        title: "Give the journey a clear rhythm.",
        paragraphs: [
          "Six short modules rebuilt the security pathway around relevant situations. Points, badges and visible progress helped connect the parts of the learning journey.",
          "The structure supported engagement while keeping attention on security decisions. The next message in a colleague’s inbox provided a more useful context than an abstract list of threats.",
        ],
        image: {
          src: "/assets/work/information-security/screen-1.webp",
          alt: "Information Security: Gamification",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
      {
        title: "Use the message people might receive.",
        paragraphs: [
          "Actual phishing messages, a vishing call scenario and a colleague’s experience grounded the content in recognisable situations. Human testimony helped make the consequences tangible.",
          "Authentic assets supported the decisions learners were asked to consider. The emphasis was on noticing, checking and following the appropriate reporting process.",
        ],
        image: {
          src: "/assets/work/information-security/screen-2.webp",
          alt: "Information Security: Real Example",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
      {
        title: "Keep the experience available.",
        paragraphs: [
          "Transcripts and text equivalents supported access to the media. User testing and SCORM checks considered both the learner experience and its delivery through the platform.",
          "The reported increase concerns security incident reporting. It is presented as reporting behaviour, alongside completion and satisfaction, without converting it into a claim that incidents fell.",
        ],
        image: {
          src: "/assets/work/information-security/screen-3.webp",
          alt: "Information Security: Gamified Journey",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
    ],
    videos: [
      {
        id: "pDW1wi8d4us",
        title: "Information Security — original project film",
      },
    ],
  },
  {
    slug: "your-learning-platform",
    title: "Your Learning Platform",
    organisation: "British Red Cross",
    discipline: "LMS · Cornerstone",
    summary:
      "An enterprise migration from Fuse to Cornerstone Learning for 25,000 staff and volunteers. Fourteen separate business areas became one secure, responsive learning experience.",
    category: "Charity & Non-profit",
    tags: ["LMS & Platforms"],
    status: "published",
    approval: {
      owner:
        "Owner confirmed on 26 October 2026 that this work was completed by Butter and requested Butter attribution.",
      clientPermission: "",
      portfolioReuse:
        "Owner-authorised project content and original media reuse; Butter delivery confirmed by owner on 26 October 2026.",
    },
    role: {
      kind: "butter",
      description: "Learning designed and delivered by Butter.",
    },
    headline: "One place. A world of learning.",
    introduction:
      "An enterprise migration from Fuse to Cornerstone Learning for 25,000 staff and volunteers. Fourteen separate business areas became one secure, responsive learning experience.",
    challenge: {
      title: "The learning challenge, in context.",
      text: "An enterprise migration from Fuse to Cornerstone Learning for 25,000 staff and volunteers. Fourteen separate business areas became one secure, responsive learning experience.",
      audience:
        "British Red Cross staff and volunteers across fourteen business areas.",
      constraints:
        "Migrating content from Fuse to Cornerstone while coordinating role-based access, governance and user acceptance testing.",
    },
    requirements: [
      "LMS migration",
      "Platform configuration",
      "User acceptance testing",
    ],
    approach: {
      title: "A considered response to a real need.",
      text: "Stakeholder consultations shaped the requirements. A coordinated content migration, role-based access model and cross-department testing supported rollout. Clear governance and documentation helped teams manage the transition.",
      designDecision:
        "The migration brought fourteen business areas into a shared learning environment for 25,000 staff and volunteers. Stakeholder consultations helped establish the requirements behind that scale.",
    },
    deliverables: [
      "LMS migration",
      "Platform configuration",
      "User acceptance testing",
    ],
    outcomes: [
      {
        value: "25,000+",
        label: "Users on a single unified platform",
        evidence: "Project-reported figure.",
      },
      {
        value: "47%",
        label: "Reduction in L&D admin time",
        evidence: "Project-reported figure.",
      },
      {
        value: "31%",
        label: "Increase in mandatory completion rates post-migration",
        evidence: "Project-reported figure.",
      },
      {
        value: "98%",
        label: "UAT sign-off rate before rollout",
        evidence: "Project-reported figure.",
      },
    ],
    outcomeNarrative:
      "Project results showed 47% less L&D administration time and a 31% increase in mandatory learning completion in the first year after migration.",
    evidence: [
      "Figures describe this project and its reported measurement period. They are not guarantees of future results.",
    ],
    hero: {
      src: "/assets/work/your-learning-platform/hero.webp",
      alt: "Your Learning Platform: Your Learning Platform hero",
      rights:
        "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
    },
    gallery: [
      {
        src: "/assets/work/your-learning-platform/screen-1.webp",
        alt: "Your Learning Platform: Mobile app user guide",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      {
        src: "/assets/work/your-learning-platform/screen-2.webp",
        alt: "Your Learning Platform: Admin backend",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      {
        src: "/assets/work/your-learning-platform/screen-3.webp",
        alt: "Your Learning Platform: Personalised landing page",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
    ],
    serviceSlugs: ["learning-platforms-lms", "ongoing-learning-support"],
    card: {
      tone: "yellow",
      icon: "layers",
      screen: {
        src: "/assets/work/your-learning-platform/screen-3.webp",
        alt: "Your Learning Platform: Personalised landing page",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      tilt: "left",
    },
    source: {
      url: "https://danieldeveney.com/work/your-learning-platform",
      snapshot:
        "https://github.com/ddeveney83/butter/blob/0f650d91b646843c7228d24c5b317652e1d44e4b/src/data/projects.ts",
      checkedOn: "2026-10-26",
      liveVerified: true,
    },
    story: [
      {
        title: "Understand the people using it.",
        paragraphs: [
          "The migration brought fourteen business areas into a shared learning environment for 25,000 staff and volunteers. Stakeholder consultations helped establish the requirements behind that scale.",
          "The work connected the platform to different user needs, with a secure, responsive experience as the shared direction. Guidance and documentation supported people through the transition.",
        ],
        image: {
          src: "/assets/work/your-learning-platform/screen-1.webp",
          alt: "Your Learning Platform: Mobile app user guide",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
      {
        title: "Bring the content together.",
        paragraphs: [
          "A coordinated migration moved learning from Fuse to Cornerstone Learning. Platform configuration and role-based access were considered alongside the content being transferred.",
          "The administration experience was part of the wider system. Clear governance and documentation helped teams understand how the shared environment would be managed.",
        ],
        image: {
          src: "/assets/work/your-learning-platform/screen-2.webp",
          alt: "Your Learning Platform: Admin backend",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
      {
        title: "Test the journey with the teams.",
        paragraphs: [
          "Cross-department user acceptance testing supported rollout. The process connected requirements and configuration to the experience people would encounter when finding and completing learning.",
          "The source reports changes in administration time and mandatory learning completion during the first year after migration. Those results provide context for the transition, with ongoing management remaining part of the platform’s work.",
        ],
        image: {
          src: "/assets/work/your-learning-platform/screen-3.webp",
          alt: "Your Learning Platform: Personalised landing page",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
    ],
    videos: [],
  },
  {
    slug: "nansen-learning-academy",
    title: "Nansen Learning Academy",
    organisation: "Nansen.ai",
    discipline: "LMS / LXP · Webflow",
    summary:
      "A custom learning experience platform supporting adoption of Nansen’s blockchain analytics product. Foundational, intermediate and advanced tracks helped users build confidence at their own level.",
    category: "LMS & Platforms",
    tags: [],
    status: "published",
    approval: {
      owner:
        "Owner confirmed on 26 October 2026 that this work was completed by Butter and requested Butter attribution.",
      clientPermission: "",
      portfolioReuse:
        "Owner-authorised project content and original media reuse; Butter delivery confirmed by owner on 26 October 2026.",
    },
    role: {
      kind: "butter",
      description: "Learning designed and delivered by Butter.",
    },
    headline: "Complex data. A clearer way in.",
    introduction:
      "A custom learning experience platform supporting adoption of Nansen’s blockchain analytics product. Foundational, intermediate and advanced tracks helped users build confidence at their own level.",
    challenge: {
      title: "The learning challenge, in context.",
      text: "A custom learning experience platform supporting adoption of Nansen’s blockchain analytics product. Foundational, intermediate and advanced tracks helped users build confidence at their own level.",
      audience:
        "Users with different starting levels learning a blockchain analytics product.",
      constraints:
        "Foundational, intermediate and advanced pathways for a global audience, connected to the wider product and community.",
    },
    requirements: ["Webflow LXP", "Learning pathways", "Video tutorials"],
    approach: {
      title: "A considered response to a real need.",
      text: "Microlearning tutorials and guides connected product features to analytics workflows. A Discord community supported peer learning, while Google Analytics and Gainsight data informed improvements with a globally distributed team.",
      designDecision:
        "Nansen’s analytics product brings complex information into everyday workflows. The academy provided foundational, intermediate and advanced tracks so users could begin with an appropriate level of learning.",
    },
    deliverables: ["Webflow LXP", "Learning pathways", "Video tutorials"],
    outcomes: [
      {
        value: "38%",
        label: "Growth in active users within 3 months",
        evidence: "Project-reported figure.",
      },
      {
        value: "64%",
        label: "New users completing a module within 30 days",
        evidence: "Project-reported figure.",
      },
      {
        value: "29%",
        label: "Reduction in support tickets from academy learners",
        evidence: "Project-reported figure.",
      },
      {
        value: "4,200+",
        label: "Active Discord community members",
        evidence: "Project-reported figure.",
      },
    ],
    outcomeNarrative:
      "Project results showed 29% fewer support tickets among academy learners and 64% of new sign-ups completing at least one module within 30 days.",
    evidence: [
      "Figures describe this project and its reported measurement period. They are not guarantees of future results.",
    ],
    hero: {
      src: "/assets/work/nansen-learning-academy/hero.webp",
      alt: "Nansen Learning Academy: Nansen Learning Academy hero",
      rights:
        "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
    },
    gallery: [
      {
        src: "/assets/work/nansen-learning-academy/screen-1.webp",
        alt: "Nansen Learning Academy: Nansen Concept One",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      {
        src: "/assets/work/nansen-learning-academy/screen-2.webp",
        alt: "Nansen Learning Academy: Nansen Concept Two",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      {
        src: "/assets/work/nansen-learning-academy/screen-3.webp",
        alt: "Nansen Learning Academy: Nansen Concept Three",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
    ],
    serviceSlugs: ["learning-platforms-lms", "ongoing-learning-support"],
    card: {
      tone: "sage",
      icon: "bulb",
      screen: {
        src: "/assets/work/nansen-learning-academy/screen-2.webp",
        alt: "Nansen Learning Academy: Nansen Concept Two",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      tilt: "left",
    },
    source: {
      url: "https://danieldeveney.com/work/nansen-learning-academy",
      snapshot:
        "https://github.com/ddeveney83/butter/blob/0f650d91b646843c7228d24c5b317652e1d44e4b/src/data/projects.ts",
      checkedOn: "2026-10-26",
      liveVerified: true,
    },
    story: [
      {
        title: "Meet people at their level.",
        paragraphs: [
          "Nansen’s analytics product brings complex information into everyday workflows. The academy provided foundational, intermediate and advanced tracks so users could begin with an appropriate level of learning.",
          "A custom Webflow learning experience connected those routes. The platform strategy considered product adoption alongside the structure of the learning itself.",
        ],
        image: {
          src: "/assets/work/nansen-learning-academy/screen-1.webp",
          alt: "Nansen Learning Academy: Nansen Concept One",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
      {
        title: "Connect the feature to a workflow.",
        paragraphs: [
          "Microlearning tutorials and guides linked product features to analytics tasks. Video supported explanation while the wider pathway helped users build confidence over time.",
          "The content gave the product’s complexity a learning structure. Each level provided a different starting point within a connected academy experience.",
        ],
        image: {
          src: "/assets/work/nansen-learning-academy/screen-2.webp",
          alt: "Nansen Learning Academy: Nansen Concept Two",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
      {
        title: "Support the journey beyond a lesson.",
        paragraphs: [
          "A Discord community supported peer learning, while Google Analytics and Gainsight data informed improvements with a globally distributed team. The academy was part of the wider customer experience.",
          "The source’s support-ticket result applies to academy learners, and its new-user figure concerns completing at least one module within 30 days. Keeping those groups clear helps make the reported outcomes useful.",
        ],
        image: {
          src: "/assets/work/nansen-learning-academy/screen-3.webp",
          alt: "Nansen Learning Academy: Nansen Concept Three",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
    ],
    videos: [
      {
        id: "Gro343VP054",
        title: "Nansen Learning Academy — original project film",
      },
    ],
  },
  {
    slug: "allergen-awareness",
    title: "Allergen Awareness",
    organisation: "Places Leisure",
    discipline: "eLearning · Food safety",
    summary:
      "A five-part digital learning programme helping leisure teams make safer food-service decisions. Built for franchised outlets, with consistent guidance on allergen handling and Natasha’s Law.",
    category: "Compliance",
    tags: [],
    status: "published",
    approval: {
      owner:
        "Owner confirmed on 26 October 2026 that this work was completed by Butter and requested Butter attribution.",
      clientPermission: "",
      portfolioReuse:
        "Owner-authorised project content and original media reuse; Butter delivery confirmed by owner on 26 October 2026.",
    },
    role: {
      kind: "butter",
      description: "Learning designed and delivered by Butter.",
    },
    headline: "Small decisions. Serious care.",
    introduction:
      "A five-part digital learning programme helping leisure teams make safer food-service decisions. Built for franchised outlets, with consistent guidance on allergen handling and Natasha’s Law.",
    challenge: {
      title: "The learning challenge, in context.",
      text: "A five-part digital learning programme helping leisure teams make safer food-service decisions. Built for franchised outlets, with consistent guidance on allergen handling and Natasha’s Law.",
      audience: "Food-service colleagues in franchised leisure outlets.",
      constraints:
        "Consistent allergen guidance across five modules, with an assessment that unlocks after the learning.",
    },
    requirements: [
      "Scenario design",
      "AI-presented video",
      "Interactive assessment",
    ],
    approach: {
      title: "A considered response to a real need.",
      text: "Realistic decisions and gamified checks put the learner behind the counter. An AI-presented guide supports the journey, with the final assessment unlocked after the modules. Food safety and legal specialists shaped the content,.",
      designDecision:
        "The learning centres on the decisions a food-service colleague needs to make. A customer question, uncertain ingredient information or a handling task gives the guidance a practical setting.",
    },
    deliverables: [
      "Scenario design",
      "AI-presented video",
      "Interactive assessment",
    ],
    outcomes: [
      {
        value: "40%",
        label: "Improvement in allergen audit scores",
        evidence: "Project-reported figure.",
      },
      {
        value: "95%",
        label: "Learner satisfaction rating",
        evidence: "Project-reported figure.",
      },
      {
        value: "92%",
        label: "First-attempt assessment pass rate",
        evidence: "Project-reported figure.",
      },
      {
        value: "6 weeks",
        label: "Analysis to endorsed deployment",
        evidence: "Project-reported figure.",
      },
    ],
    outcomeNarrative:
      "Project results showed a 40% improvement in allergen audit results within six months, with 92% of learners passing on their first attempt.",
    evidence: [
      "Figures describe this project and its reported measurement period. They are not guarantees of future results.",
    ],
    hero: {
      src: "/assets/work/allergen-awareness/hero.webp",
      alt: "Allergen Awareness: Allergen Awareness hero",
      rights:
        "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
    },
    gallery: [
      {
        src: "/assets/work/allergen-awareness/screen-1.webp",
        alt: "Allergen Awareness: Virtual Host",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      {
        src: "/assets/work/allergen-awareness/screen-2.webp",
        alt: "Allergen Awareness: Allergy Branching",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      {
        src: "/assets/work/allergen-awareness/screen-3.webp",
        alt: "Allergen Awareness: Universal Content",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
    ],
    serviceSlugs: ["elearning-design-development", "ongoing-learning-support"],
    card: {
      tone: "yellow",
      icon: "shield",
      screen: {
        src: "/assets/work/allergen-awareness/screen-3.webp",
        alt: "Allergen Awareness: Universal Content",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      tilt: "left",
    },
    source: {
      url: "https://danieldeveney.com/work/allergen-awareness",
      snapshot:
        "https://github.com/ddeveney83/butter/blob/0f650d91b646843c7228d24c5b317652e1d44e4b/src/data/projects.ts",
      checkedOn: "2026-10-26",
      liveVerified: true,
    },
    story: [
      {
        title: "Start at the counter.",
        paragraphs: [
          "The learning centres on the decisions a food-service colleague needs to make. A customer question, uncertain ingredient information or a handling task gives the guidance a practical setting.",
          "An AI-presented host provides continuity across the five-part programme. The experience brings consistent allergen guidance to franchised leisure outlets while keeping attention on safe actions at the point of service.",
        ],
        image: {
          src: "/assets/work/allergen-awareness/screen-1.webp",
          alt: "Allergen Awareness: Virtual Host",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
      {
        title: "Show what follows a decision.",
        paragraphs: [
          "Branching situations and gamified checks turn the content into choices to consider. Learners can connect a response to its consequences, with food safety information supporting the reasoning.",
          "Food safety and legal specialists shaped the substance, including the treatment of Natasha’s Law. That specialist input helped preserve the distinctions that matter when guidance becomes a learner-facing activity.",
        ],
        image: {
          src: "/assets/work/allergen-awareness/screen-2.webp",
          alt: "Allergen Awareness: Allergy Branching",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
      {
        title: "Bring the learning together.",
        paragraphs: [
          "The final assessment unlocks after the modules, bringing the programme’s learning into a shared checkpoint. The sequence connects explanation, practice and assessment rather than treating them as separate pieces.",
          "The reported audit improvement and first-attempt pass rate provide different views of the result: workplace practice and performance within the course.",
        ],
        image: {
          src: "/assets/work/allergen-awareness/screen-3.webp",
          alt: "Allergen Awareness: Universal Content",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
    ],
    videos: [
      {
        id: "CBL-PzLTkvM",
        title: "Allergen Awareness — original project film",
      },
    ],
  },
  {
    slug: "matrix-reloaded",
    title: "Matrix Reloaded",
    organisation: "Places for People",
    discipline: "Blended learning · Leadership",
    summary:
      "A six-month leadership programme supporting a move to matrix working. Self-paced online modules, virtual sessions and workplace practice helped leaders navigate influence, ambiguity and shared accountability.",
    category: "Housing & Communities",
    tags: [],
    status: "published",
    approval: {
      owner:
        "Owner confirmed on 26 October 2026 that this work was completed by Butter and requested Butter attribution.",
      clientPermission: "",
      portfolioReuse:
        "Owner-authorised project content and original media reuse; Butter delivery confirmed by owner on 26 October 2026.",
    },
    role: {
      kind: "butter",
      description: "Learning designed and delivered by Butter.",
    },
    headline: "Less silo thinking. More shared possibility.",
    introduction:
      "A six-month leadership programme supporting a move to matrix working. Self-paced online modules, virtual sessions and workplace practice helped leaders navigate influence, ambiguity and shared accountability.",
    challenge: {
      title: "The learning challenge, in context.",
      text: "A six-month leadership programme supporting a move to matrix working. Self-paced online modules, virtual sessions and workplace practice helped leaders navigate influence, ambiguity and shared accountability.",
      audience: "Leaders navigating matrix working and shared accountability.",
      constraints:
        "A six-month blend of online modules, virtual sessions and workplace practice, with peer support between sessions.",
    },
    requirements: ["Digital modules", "Virtual learning", "Social learning"],
    approach: {
      title: "A considered response to a real need.",
      text: "Bite-sized concepts lead into practical conversations and on-the-job exercises. Microsoft Teams communities made space for peer learning, while surveys and focus groups informed refinements throughout the programme.",
      designDecision:
        "Matrix working changes how leaders coordinate, influence and share responsibility. The programme introduced those ideas in short digital modules, giving colleagues a foundation for the conversations ahead.",
    },
    deliverables: ["Digital modules", "Virtual learning", "Social learning"],
    outcomes: [
      {
        value: "91%",
        label: "Programme completion rate",
        evidence: "Project-reported figure.",
      },
      {
        value: "74%",
        label: "Reported improved confidence in matrix working",
        evidence: "Project-reported figure.",
      },
      {
        value: "68%",
        label: "Reported clearer cross-functional accountability",
        evidence: "Project-reported figure.",
      },
      {
        value: "4.4/5",
        label: "Average programme satisfaction score",
        evidence: "Project-reported figure.",
      },
    ],
    outcomeNarrative:
      "Project results showed 91% programme completion across leadership tiers, with 74% of leaders feeling more confident about matrix working.",
    evidence: [
      "Figures describe this project and its reported measurement period. They are not guarantees of future results.",
    ],
    hero: {
      src: "/assets/work/matrix-reloaded/hero.webp",
      alt: "Matrix Reloaded: Matrix Reloaded hero",
      rights:
        "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
    },
    gallery: [
      {
        src: "/assets/work/matrix-reloaded/screen-1.webp",
        alt: "Matrix Reloaded: Matrix Working Cover",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      {
        src: "/assets/work/matrix-reloaded/screen-2.webp",
        alt: "Matrix Reloaded: PfP Silo",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      {
        src: "/assets/work/matrix-reloaded/screen-3.webp",
        alt: "Matrix Reloaded: Coca Cola Matrix",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
    ],
    serviceSlugs: [
      "elearning-design-development",
      "learning-strategy-consultancy",
    ],
    card: {
      tone: "sage",
      icon: "bulb",
      screen: {
        src: "/assets/work/matrix-reloaded/screen-1.webp",
        alt: "Matrix Reloaded: Matrix Working Cover",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      tilt: "left",
    },
    source: {
      url: "https://danieldeveney.com/work/matrix-reloaded",
      snapshot:
        "https://github.com/ddeveney83/butter/blob/0f650d91b646843c7228d24c5b317652e1d44e4b/src/data/projects.ts",
      checkedOn: "2026-10-26",
      liveVerified: true,
    },
    story: [
      {
        title: "Make the shift understandable.",
        paragraphs: [
          "Matrix working changes how leaders coordinate, influence and share responsibility. The programme introduced those ideas in short digital modules, giving colleagues a foundation for the conversations ahead.",
          "A six-month blend of online learning, virtual sessions and workplace practice let the subject develop over time. Each format had a role in connecting an organisational change to everyday leadership.",
        ],
        image: {
          src: "/assets/work/matrix-reloaded/screen-1.webp",
          alt: "Matrix Reloaded: Matrix Working Cover",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
      {
        title: "Look beyond the team boundary.",
        paragraphs: [
          "Bite-sized concepts led into practical conversations about influence, ambiguity and competing priorities. The focus was the work leaders needed to navigate with other teams.",
          "Virtual sessions added space to discuss those situations. The digital content supported that discussion, while workplace exercises offered a route to try the thinking in context.",
        ],
        image: {
          src: "/assets/work/matrix-reloaded/screen-2.webp",
          alt: "Matrix Reloaded: PfP Silo",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
      {
        title: "Keep the conversation going.",
        paragraphs: [
          "Microsoft Teams communities supported peer learning between formal activities. Leaders could connect the programme to their own experience and learn from the perspectives of colleagues.",
          "Surveys and focus groups informed refinements during delivery. Reported completion and confidence describe engagement and perception; longer-term changes in leadership practice need their own evidence.",
        ],
        image: {
          src: "/assets/work/matrix-reloaded/screen-3.webp",
          alt: "Matrix Reloaded: Coca Cola Matrix",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
    ],
    videos: [
      {
        id: "8FknqeLTALg",
        title: "Matrix Reloaded — original project film",
      },
    ],
  },
  {
    slug: "alcohol-and-drug-awareness",
    title: "Alcohol & Drug Awareness",
    organisation: "Places for People",
    discipline: "eLearning · Reflective microlearning",
    summary:
      "An outdated compliance course rebuilt as a focused, under-15-minute experience. Workplace video scenarios, knowledge checks and optional anonymous reflection made the topic more approachable for a busy workforce.",
    category: "Housing & Communities",
    tags: ["Compliance"],
    status: "published",
    approval: {
      owner:
        "Owner confirmed on 26 October 2026 that this work was completed by Butter and requested Butter attribution.",
      clientPermission: "",
      portfolioReuse:
        "Owner-authorised project content and original media reuse; Butter delivery confirmed by owner on 26 October 2026.",
    },
    role: {
      kind: "butter",
      description: "Learning designed and delivered by Butter.",
    },
    headline: "A sensitive subject. A thoughtful approach.",
    introduction:
      "An outdated compliance course rebuilt as a focused, under-15-minute experience. Workplace video scenarios, knowledge checks and optional anonymous reflection made the topic more approachable for a busy workforce.",
    challenge: {
      title: "The learning challenge, in context.",
      text: "An outdated compliance course rebuilt as a focused, under-15-minute experience. Workplace video scenarios, knowledge checks and optional anonymous reflection made the topic more approachable for a busy workforce.",
      audience: "A busy workforce engaging with a sensitive workplace topic.",
      constraints:
        "An under-15-minute course with optional anonymous reflection, separating completion records from reflective feedback.",
    },
    requirements: ["Microlearning", "Scenario video", "Reflection prompts"],
    approach: {
      title: "A considered response to a real need.",
      text: "Relatable situations came before policy and theory. SCORM data tracked completion, while anonymous Microsoft Forms feedback offered a safer space for peer reflection and a qualitative view of awareness change.",
      designDecision:
        "The refresh replaced an outdated compliance course with a more focused experience. Workplace video situations introduced the topic before moving into policy and theory.",
    },
    deliverables: ["Microlearning", "Scenario video", "Reflection prompts"],
    outcomes: [
      {
        value: "93%",
        label: "COMPLETION RATE",
        evidence: "Project-reported figure.",
      },
      {
        value: "17,000+",
        label: "SOCIAL LEARNING ENGAGEMENT",
        evidence: "Project-reported figure.",
      },
      {
        value: "67.5%",
        label: "AWARENESS SHIFT ON WORKPLACE IMPACT",
        evidence: "Project-reported figure.",
      },
      {
        value: "< 15m",
        label: "COURSE DURATION",
        evidence: "Project-reported figure.",
      },
    ],
    outcomeNarrative:
      "Project results showed 93% course completion and more than 17,000 employees engaging with the social learning component.",
    evidence: [
      "Figures describe this project and its reported measurement period. They are not guarantees of future results.",
    ],
    hero: {
      src: "/assets/work/alcohol-and-drug-awareness/hero.webp",
      alt: "Alcohol & Drug Awareness: Alcohol and Drug Awareness hero",
      rights:
        "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
    },
    gallery: [
      {
        src: "/assets/work/alcohol-and-drug-awareness/screen-1.webp",
        alt: "Alcohol & Drug Awareness: Alcohol and Drug 01",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      {
        src: "/assets/work/alcohol-and-drug-awareness/screen-2.webp",
        alt: "Alcohol & Drug Awareness: Alcohol and Drug 03",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      {
        src: "/assets/work/alcohol-and-drug-awareness/screen-3.webp",
        alt: "Alcohol & Drug Awareness: Alcohol and Drug 04",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
    ],
    serviceSlugs: ["elearning-design-development", "ongoing-learning-support"],
    card: {
      tone: "garden",
      icon: "bulb",
      screen: {
        src: "/assets/work/alcohol-and-drug-awareness/screen-2.webp",
        alt: "Alcohol & Drug Awareness: Alcohol and Drug 03",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      tilt: "left",
    },
    source: {
      url: "https://danieldeveney.com/work/alcohol-and-drug-awareness",
      snapshot:
        "https://github.com/ddeveney83/butter/blob/0f650d91b646843c7228d24c5b317652e1d44e4b/src/data/projects.ts",
      checkedOn: "2026-10-26",
      liveVerified: true,
    },
    story: [
      {
        title: "Begin with a recognisable moment.",
        paragraphs: [
          "The refresh replaced an outdated compliance course with a more focused experience. Workplace video situations introduced the topic before moving into policy and theory.",
          "That ordering gave colleagues a context for the guidance. The emphasis was on recognising a situation and thinking about an appropriate response within the workplace.",
        ],
        image: {
          src: "/assets/work/alcohol-and-drug-awareness/screen-1.webp",
          alt: "Alcohol & Drug Awareness: Alcohol and Drug 01",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
      {
        title: "Keep the essentials in reach.",
        paragraphs: [
          "The rebuilt course ran for less than 15 minutes, combining short video scenarios and knowledge checks. Its length supported a busy audience without making duration the only measure of quality.",
          "The checks gave learners a chance to work with the content. SCORM completion data provided a view of participation alongside the more reflective parts of the experience.",
        ],
        image: {
          src: "/assets/work/alcohol-and-drug-awareness/screen-2.webp",
          alt: "Alcohol & Drug Awareness: Alcohol and Drug 03",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
      {
        title: "Make room for reflection.",
        paragraphs: [
          "Optional anonymous reflection through Microsoft Forms offered a separate space to consider the subject. Feedback provided a qualitative view of awareness alongside course completion.",
          "Keeping that reflection optional recognised the sensitivity of the topic. The source reports both completion and engagement with the social learning component, rather than treating them as the same outcome.",
        ],
        image: {
          src: "/assets/work/alcohol-and-drug-awareness/screen-3.webp",
          alt: "Alcohol & Drug Awareness: Alcohol and Drug 04",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
    ],
    videos: [
      {
        id: "lhlu939vvcc",
        title: "Alcohol & Drug Awareness — original project film",
      },
    ],
  },
  {
    slug: "record-keeping",
    title: "Record Keeping & Information Management",
    organisation: "Places for People",
    discipline: "eLearning · Applied practice",
    summary:
      "A modular learning experience responding to gaps identified by the Housing Ombudsman. Digital record management, retention and data protection became practical skills to apply in everyday housing work.",
    category: "Housing & Communities",
    tags: ["Compliance"],
    status: "published",
    approval: {
      owner:
        "Owner confirmed on 26 October 2026 that this work was completed by Butter and requested Butter attribution.",
      clientPermission: "",
      portfolioReuse:
        "Owner-authorised project content and original media reuse; Butter delivery confirmed by owner on 26 October 2026.",
    },
    role: {
      kind: "butter",
      description: "Learning designed and delivered by Butter.",
    },
    headline: "Good records make room for better decisions.",
    introduction:
      "A modular learning experience responding to gaps identified by the Housing Ombudsman. Digital record management, retention and data protection became practical skills to apply in everyday housing work.",
    challenge: {
      title: "The learning challenge, in context.",
      text: "A modular learning experience responding to gaps identified by the Housing Ombudsman. Digital record management, retention and data protection became practical skills to apply in everyday housing work.",
      audience: "Housing colleagues managing everyday records and information.",
      constraints:
        "Record management, retention and data protection needed to connect to practical documentation tasks.",
    },
    requirements: [
      "Learning design",
      "Branching simulations",
      "Accessible multimedia",
    ],
    approach: {
      title: "A considered response to a real need.",
      text: "Simulations and knowledge checks connected policy to real documentation tasks. Video, animation and infographics supported the learning, with SME input, WCAG-led design and LMS reporting built into delivery.",
      designDecision:
        "The brief responded to gaps identified by the Housing Ombudsman. The learning connected record management to the documentation tasks colleagues encountered in housing work.",
    },
    deliverables: [
      "Learning design",
      "Branching simulations",
      "Accessible multimedia",
    ],
    outcomes: [
      {
        value: "52%",
        label: "Reduction in record keeping errors post-launch",
        evidence: "Project-reported figure.",
      },
      {
        value: "88%",
        label: "First-attempt assessment pass rate",
        evidence: "Project-reported figure.",
      },
      {
        value: "4.3/5",
        label: "Average learner satisfaction score",
        evidence: "Project-reported figure.",
      },
      {
        value: "3 hrs",
        label: "Saved per manager per month",
        evidence: "Project-reported figure.",
      },
    ],
    outcomeNarrative:
      "Post-launch audits reported 52% fewer record-keeping errors. The source also reports an 88% first-attempt assessment pass rate.",
    evidence: [
      "Figures describe this project and its reported measurement period. They are not guarantees of future results.",
    ],
    hero: {
      src: "/assets/work/record-keeping/hero.webp",
      alt: "Record Keeping & Information Management: Record Keeping and Information Management hero",
      rights:
        "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
    },
    gallery: [
      {
        src: "/assets/work/record-keeping/screen-1.webp",
        alt: "Record Keeping & Information Management: Record keeping One",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      {
        src: "/assets/work/record-keeping/screen-2.webp",
        alt: "Record Keeping & Information Management: Record keeping Two",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      {
        src: "/assets/work/record-keeping/screen-3.webp",
        alt: "Record Keeping & Information Management: Record keeping Four",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
    ],
    serviceSlugs: ["elearning-design-development", "ongoing-learning-support"],
    card: {
      tone: "yellow",
      icon: "shield",
      screen: {
        src: "/assets/work/record-keeping/screen-1.webp",
        alt: "Record Keeping & Information Management: Record keeping One",
        rights:
          "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
      },
      tilt: "left",
    },
    source: {
      url: "https://danieldeveney.com/work/record-keeping",
      snapshot:
        "https://github.com/ddeveney83/butter/blob/0f650d91b646843c7228d24c5b317652e1d44e4b/src/data/projects.ts",
      checkedOn: "2026-10-26",
      liveVerified: true,
    },
    story: [
      {
        title: "Start with the record people need.",
        paragraphs: [
          "The brief responded to gaps identified by the Housing Ombudsman. The learning connected record management to the documentation tasks colleagues encountered in housing work.",
          "A modular structure brought digital records, retention and data protection into a connected experience. The aim was to make approved guidance usable when someone needed to capture or retrieve information.",
        ],
        image: {
          src: "/assets/work/record-keeping/screen-1.webp",
          alt: "Record Keeping & Information Management: Record keeping One",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
      {
        title: "Turn the rules into practice.",
        paragraphs: [
          "Simulations and knowledge checks connected policy to practical record-handling decisions. Video, animation and infographics offered different ways to explain the important ideas.",
          "Subject specialists informed the content, while WCAG-led design considered access to the experience. These were connected parts of production, from shaping the guidance to checking the learner journey.",
        ],
        image: {
          src: "/assets/work/record-keeping/screen-2.webp",
          alt: "Record Keeping & Information Management: Record keeping Two",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
      {
        title: "Check more than completion.",
        paragraphs: [
          "LMS reporting supported delivery and assessment checks. First-attempt assessment performance helped describe how learners responded within the course.",
          "Post-launch audits offered a separate view of workplace records. The reported reduction in errors is presented alongside assessment results so the evidence keeps its original context.",
        ],
        image: {
          src: "/assets/work/record-keeping/screen-3.webp",
          alt: "Record Keeping & Information Management: Record keeping Four",
          rights:
            "Owner-authorised transfer of the existing personal portfolio on 26 October 2026; source and file hashes recorded in docs/portfolio-migration.json.",
        },
      },
    ],
    videos: [
      {
        id: "GuJW_E7IwaA",
        title:
          "Record Keeping & Information Management — original project film",
      },
    ],
  },
  {
    slug: "strategic-skills-mapping",
    title: "Strategic Skills Mapping",
    organisation: "Places for People",
    discipline: "Learning strategy · Skills analysis",
    summary:
      "A learning needs analysis across five operational teams, turning conversations about performance into a shared skills framework and practical development plans.",
    category: "Housing & Communities",
    tags: ["Strategy"],
    status: "published",
    approval: {
      owner:
        "Owner confirmed on 26 October 2026 that this work was completed by Butter and requested Butter attribution.",
      clientPermission: "",
      portfolioReuse:
        "Owner-authorised project content and original media reuse; Butter delivery confirmed by owner on 26 October 2026.",
    },
    role: {
      kind: "butter",
      description: "Learning designed and delivered by Butter.",
    },
    headline: "A clearer picture of what comes next.",
    introduction:
      "A learning needs analysis across five operational teams, turning conversations about performance into a shared skills framework and practical development plans.",
    challenge: {
      title: "The learning challenge, in context.",
      text: "A learning needs analysis across five operational teams, turning conversations about performance into a shared skills framework and practical development plans.",
      audience: "Colleagues and leaders across five operational teams.",
      constraints:
        "A shared skills taxonomy needed to connect individual needs, team priorities and practical development plans.",
    },
    requirements: [
      "Stakeholder interviews",
      "Skills framework",
      "Development planning",
    ],
    approach: {
      title: "A considered response to a real need.",
      text: "Structured interviews with team leaders and colleagues surfaced the skills people used, the gaps they experienced and the priorities ahead. A common taxonomy connected technical, behavioural and role-specific skills to business needs.",
      designDecision:
        "The starting point was the work people needed to do. Conversations with leaders and individual contributors explored everyday responsibilities, changing expectations and barriers to good performance.",
    },
    deliverables: [
      "Stakeholder interviews",
      "Skills framework",
      "Development planning",
    ],
    outcomes: [
      {
        value: "5",
        label: "Teams with aligned development priorities",
        evidence: "Project-reported figure.",
      },
      {
        value: "17+",
        label: "Individuals with structured PDPs",
        evidence: "Project-reported figure.",
      },
      {
        value: "8",
        label: "Skill categories prioritised for investment",
        evidence: "Project-reported figure.",
      },
      {
        value: "100%",
        label: "Evidence-based L&D strategy in place",
        evidence: "Project-reported figure.",
      },
    ],
    outcomeNarrative:
      "Project results showed eight skill categories, alignment across five teams and structured personal development plans for more than 17 colleagues. These are reported project outputs, rather than a measured improvement in business performance.",
    evidence: [
      "Figures describe this project and its reported measurement period. They are not guarantees of future results.",
    ],
    hero: null,
    gallery: [],
    serviceSlugs: [
      "learning-strategy-consultancy",
      "elearning-design-development",
    ],
    card: {
      tone: "garden",
      icon: "compass",
      screen: null,
      tilt: "left",
    },
    source: {
      url: "https://danieldeveney.com/work/strategic-skills-mapping",
      snapshot:
        "https://github.com/ddeveney83/butter/blob/0f650d91b646843c7228d24c5b317652e1d44e4b/src/data/projectCaseStudies.ts",
      checkedOn: "2026-10-26",
      liveVerified: true,
    },
    story: [
      {
        title: "Listen before designing.",
        paragraphs: [
          "The starting point was the work people needed to do. Conversations with leaders and individual contributors explored everyday responsibilities, changing expectations and barriers to good performance.",
          "Grouping those insights made it possible to distinguish an individual development need from a shared team priority. The analysis gave stakeholders something concrete to discuss before choosing learning interventions.",
        ],
        image: null,
      },
      {
        title: "Make the gaps visible.",
        paragraphs: [
          "Eight categories provided a common language for skills that had previously been described in different ways. Technical knowledge sat alongside behavioural skills and the capabilities specific to each role.",
          "Comparing the current picture with future needs helped teams discuss where to focus. The framework supported prioritisation without treating every gap as a request for another course.",
        ],
        image: null,
      },
      {
        title: "Turn insight into a next step.",
        paragraphs: [
          "Recommendations were translated into personal development plans with colleagues and their managers. Each plan connected a recognised need to an actionable development opportunity.",
          "The resulting framework and plans gave the teams a reference for ongoing development conversations. The value of the work was a clearer basis for decisions, with follow-up needed to establish longer-term performance impact.",
        ],
        image: null,
      },
    ],
    videos: [],
    pendingMedia: {
      notice:
        "Original project imagery is being prepared. No substitute is presented as a project screenshot or client deliverable.",
      approval:
        "Owner requested this documented project’s inclusion on 26 October 2026; publish the sourced narrative with an explicit image reservation rather than invented screenshots.",
    },
  },
  {
    slug: "ld-digital-upskilling",
    title: "L&D Digital Upskilling",
    organisation: "British Red Cross",
    discipline: "Capability building · Blended learning",
    summary:
      "A two-year development programme helping an L&D team build the confidence and practical skills to design, create and publish digital learning independently.",
    category: "Charity & Non-profit",
    tags: ["Strategy"],
    status: "published",
    approval: {
      owner:
        "Owner confirmed on 26 October 2026 that this work was completed by Butter and requested Butter attribution.",
      clientPermission: "",
      portfolioReuse:
        "Owner-authorised project content and original media reuse; Butter delivery confirmed by owner on 26 October 2026.",
    },
    role: {
      kind: "butter",
      description: "Learning designed and delivered by Butter.",
    },
    headline: "Help the team make it themselves.",
    introduction:
      "A two-year development programme helping an L&D team build the confidence and practical skills to design, create and publish digital learning independently.",
    challenge: {
      title: "The learning challenge, in context.",
      text: "A two-year development programme helping an L&D team build the confidence and practical skills to design, create and publish digital learning independently.",
      audience:
        "L&D colleagues with different levels of digital design and production experience.",
      constraints:
        "A two-year programme combined facilitated sessions, self-paced resources, practice and a creative capstone.",
    },
    requirements: [
      "Facilitated workshops",
      "Self-paced resources",
      "Creative capstone",
    ],
    approach: {
      title: "A considered response to a real need.",
      text: "Face-to-face workshops, virtual sessions, tool practice and peer support met colleagues at different levels of experience. Instructional design foundations were connected to hands-on work in Rise, Storyline and Vyond, with a playful capstone to bring the learning together.",
      designDecision:
        "The programme began with the decisions behind a useful learning experience. ADDIE, SAM, Bloom’s taxonomy and Gagné’s instructional events gave the team different ways to plan and evaluate their work.",
    },
    deliverables: [
      "Facilitated workshops",
      "Self-paced resources",
      "Creative capstone",
    ],
    outcomes: [
      {
        value: "100%",
        label: "Participants publishing eLearning independently",
        evidence: "Project-reported figure.",
      },
      {
        value: "3x",
        label: "Increase in internally produced digital assets",
        evidence: "Project-reported figure.",
      },
      {
        value: "41%",
        label: "Reduction in external development spend",
        evidence: "Project-reported figure.",
      },
      {
        value: "4.6/5",
        label: "Programme satisfaction score",
        evidence: "Project-reported figure.",
      },
    ],
    outcomeNarrative:
      "Project results showed that every participant independently published an eLearning asset, with three times as many internal assets produced per quarter. Programme satisfaction was reported as 4.6 out of 5; the figures describe this programme’s experience rather than a guaranteed result.",
    evidence: [
      "Figures describe this project and its reported measurement period. They are not guarantees of future results.",
    ],
    hero: null,
    gallery: [],
    serviceSlugs: [
      "learning-strategy-consultancy",
      "elearning-design-development",
    ],
    card: {
      tone: "yellow",
      icon: "compass",
      screen: null,
      tilt: "left",
    },
    source: {
      url: "https://danieldeveney.com/work/ld-digital-upskilling",
      snapshot:
        "https://github.com/ddeveney83/butter/blob/0f650d91b646843c7228d24c5b317652e1d44e4b/src/data/projectCaseStudies.ts",
      checkedOn: "2026-10-26",
      liveVerified: true,
    },
    story: [
      {
        title: "Build the design foundations.",
        paragraphs: [
          "The programme began with the decisions behind a useful learning experience. ADDIE, SAM, Bloom’s taxonomy and Gagné’s instructional events gave the team different ways to plan and evaluate their work.",
          "Facilitated exercises connected these ideas to real briefs. The blend of face-to-face and virtual sessions supported both existing colleagues and people joining the team during the programme.",
        ],
        image: null,
      },
      {
        title: "Give practice a purpose.",
        paragraphs: [
          "Self-paced resources and practical tool exercises helped colleagues move from watching a demonstration to creating an asset. Peer forums created space to share work, compare approaches and ask questions.",
          "The emphasis was on making informed design choices rather than collecting software features. Each practice activity gave colleagues a chance to connect a tool to a learning need.",
        ],
        image: null,
      },
      {
        title: "Make something worth sharing.",
        paragraphs: [
          "The Veggie Ninja capstone brought design, media production and interaction building into one creative challenge. It offered a playful setting for applying the skills developed throughout the programme.",
          "Independent publishing was the practical milestone. The source also reports increased internal production, showing how capability development can support an ongoing learning service beyond a single training event.",
        ],
        image: null,
      },
    ],
    videos: [],
    pendingMedia: {
      notice:
        "Original project imagery is being prepared. No substitute is presented as a project screenshot or client deliverable.",
      approval:
        "Owner requested this documented project’s inclusion on 26 October 2026; publish the sourced narrative with an explicit image reservation rather than invented screenshots.",
    },
  },
  {
    slug: "linkedin-learning",
    title: "Introducing AI Conversations",
    organisation: "Places for People",
    discipline: "Campaign film · Learning adoption",
    summary:
      "An internal launch film introducing LinkedIn Learning’s AI Conversations feature to colleagues at Places for People, using familiar workplace moments to make the benefit clear.",
    category: "Housing & Communities",
    tags: [],
    status: "published",
    approval: {
      owner:
        "Owner confirmed on 26 October 2026 that this work was completed by Butter and requested Butter attribution.",
      clientPermission: "",
      portfolioReuse:
        "Owner-authorised project content and original media reuse; Butter delivery confirmed by owner on 26 October 2026.",
    },
    role: {
      kind: "butter",
      description: "Learning designed and delivered by Butter.",
    },
    headline: "A new learning tool. A reason to try it.",
    introduction:
      "An internal launch film introducing LinkedIn Learning’s AI Conversations feature to colleagues at Places for People, using familiar workplace moments to make the benefit clear.",
    challenge: {
      title: "The learning challenge, in context.",
      text: "An internal launch film introducing LinkedIn Learning’s AI Conversations feature to colleagues at Places for People, using familiar workplace moments to make the benefit clear.",
      audience:
        "Places for People colleagues being introduced to LinkedIn Learning’s AI Conversations feature.",
      constraints:
        "An internal film of under two minutes, with a clear demonstration, captions and an invitation to try the feature.",
    },
    requirements: [
      "Campaign storyboard",
      "Animated launch film",
      "Captioned demonstration",
    ],
    approach: {
      title: "A considered response to a real need.",
      text: "A film of under two minutes connected recognisable conversation challenges to a short tool demonstration and a clear invitation to try it. Screen captures, interface mockups and voiceover kept the explanation grounded in the colleague experience.",
      designDecision:
        "The opening needed to answer a simple question: why would a busy colleague care? Familiar workplace scenarios introduced the need before the product appeared.",
    },
    deliverables: [
      "Campaign storyboard",
      "Animated launch film",
      "Captioned demonstration",
    ],
    outcomes: [
      {
        value: "35%",
        label: "Click-through rate",
        evidence: "Project-reported figure.",
      },
      {
        value: "550+",
        label: "New users within weeks",
        evidence: "Project-reported figure.",
      },
      {
        value: "First Awareness",
        label: "How most staff heard about the tool",
        evidence: "Project-reported figure.",
      },
      {
        value: "Foundation Asset",
        label: "Adopted across L&D programmes",
        evidence: "Project-reported figure.",
      },
    ],
    outcomeNarrative:
      "Project results showed a 35% click-through rate and more than 550 new users within weeks of the campaign. These are reported campaign results; the case study does not establish that the film alone caused every sign-up. This was an internal Places for People campaign, rather than a commission from LinkedIn.",
    evidence: [
      "Figures describe this project and its reported measurement period. They are not guarantees of future results.",
    ],
    hero: null,
    gallery: [],
    serviceSlugs: ["elearning-design-development", "ongoing-learning-support"],
    card: {
      tone: "sage",
      icon: "film",
      screen: null,
      tilt: "left",
    },
    source: {
      url: "https://danieldeveney.com/work/linkedin-learning",
      snapshot:
        "https://github.com/ddeveney83/butter/blob/0f650d91b646843c7228d24c5b317652e1d44e4b/src/data/projectCaseStudies.ts",
      checkedOn: "2026-10-26",
      liveVerified: true,
    },
    story: [
      {
        title: "Start with a familiar moment.",
        paragraphs: [
          "The opening needed to answer a simple question: why would a busy colleague care? Familiar workplace scenarios introduced the need before the product appeared.",
          "This gave the campaign a human starting point. The tool became a way to practise something useful, with a short narrative carrying viewers towards the demonstration.",
        ],
        image: null,
      },
      {
        title: "Show the experience clearly.",
        paragraphs: [
          "Screen captures and interface mockups showed what a colleague would encounter after clicking through. The sequence focused on the useful steps, keeping the film short enough for an internal launch.",
          "Voiceover supported the story, while high-contrast captions kept it understandable when watched without sound. The visual treatment connected the practical demonstration to the wider campaign.",
        ],
        image: null,
      },
      {
        title: "Make the next action obvious.",
        paragraphs: [
          "The closing invitation directed colleagues to their learning accounts to try the feature. Recognition, demonstration and action formed one continuous journey.",
          "The reported click-through and new-user figures provide context for the launch. They are useful signals of adoption, with further evidence needed to understand sustained use and learning outcomes.",
        ],
        image: null,
      },
    ],
    videos: [],
    pendingMedia: {
      notice:
        "Original project imagery is being prepared. No substitute is presented as a project screenshot or client deliverable.",
      approval:
        "Owner requested this documented project’s inclusion on 26 October 2026; publish the sourced narrative with an explicit image reservation rather than invented screenshots.",
    },
  },
  {
    slug: "ai-enabled-scenario-learning",
    title: "AI-Enabled Scenario Learning",
    organisation: "Places for People",
    discipline: "Scenario video · Leadership development",
    summary:
      "Twenty scenario videos designed for eight leadership programmes, giving facilitators a consistent way to introduce workplace dilemmas and open up discussion.",
    category: "Housing & Communities",
    tags: [],
    status: "published",
    approval: {
      owner:
        "Owner confirmed on 26 October 2026 that this work was completed by Butter and requested Butter attribution.",
      clientPermission: "",
      portfolioReuse:
        "Owner-authorised project content and original media reuse; Butter delivery confirmed by owner on 26 October 2026.",
    },
    role: {
      kind: "butter",
      description: "Learning designed and delivered by Butter.",
    },
    headline: "Real dilemmas. Room to think.",
    introduction:
      "Twenty scenario videos designed for eight leadership programmes, giving facilitators a consistent way to introduce workplace dilemmas and open up discussion.",
    challenge: {
      title: "The learning challenge, in context.",
      text: "Twenty scenario videos designed for eight leadership programmes, giving facilitators a consistent way to introduce workplace dilemmas and open up discussion.",
      audience: "Leaders and facilitators in eight leadership programmes.",
      constraints:
        "Twenty videos needed a consistent production approach and reusable support for facilitated discussion.",
    },
    requirements: [
      "Scenario scripts",
      "AI-presented video",
      "Facilitator resources",
    ],
    approach: {
      title: "A considered response to a real need.",
      text: "A whole–part–whole structure placed a recognisable situation before the theory, then returned to it for reflection. Synthesia presenters, branded environments and reusable resources supported a consistent experience across the programmes.",
      designDecision:
        "Each scenario began with a situation leaders could recognise. The scripts created a reason to think and talk before introducing the relevant leadership concept.",
    },
    deliverables: [
      "Scenario scripts",
      "AI-presented video",
      "Facilitator resources",
    ],
    outcomes: [
      {
        value: "20",
        label: "Scenario videos produced",
        evidence: "Project-reported figure.",
      },
      {
        value: "4.8",
        label: "Star satisfaction rating",
        evidence: "Project-reported figure.",
      },
      {
        value: "8 Progs",
        label: "Leadership programmes deployed across",
        evidence: "Project-reported figure.",
      },
      {
        value: "Reusable",
        label: "Scaled and extended across organisation",
        evidence: "Project-reported figure.",
      },
    ],
    outcomeNarrative:
      "Project results showed 20 scenario videos deployed across eight leadership programmes. These delivery figures describe the reach of the production; they do not by themselves measure a change in leadership behaviour.",
    evidence: [
      "Figures describe this project and its reported measurement period. They are not guarantees of future results.",
    ],
    hero: null,
    gallery: [],
    serviceSlugs: ["elearning-design-development", "ongoing-learning-support"],
    card: {
      tone: "garden",
      icon: "film",
      screen: null,
      tilt: "left",
    },
    source: {
      url: "https://danieldeveney.com/work/ai-enabled-scenario-learning",
      snapshot:
        "https://github.com/ddeveney83/butter/blob/0f650d91b646843c7228d24c5b317652e1d44e4b/src/data/projectCaseStudies.ts",
      checkedOn: "2026-10-26",
      liveVerified: true,
    },
    story: [
      {
        title: "Let the dilemma do the work.",
        paragraphs: [
          "Each scenario began with a situation leaders could recognise. The scripts created a reason to think and talk before introducing the relevant leadership concept.",
          "The whole–part–whole structure let facilitators return to the opening situation after exploring the theory. That return created space to reconsider a response with a different perspective.",
        ],
        image: null,
      },
      {
        title: "Create a consistent cast.",
        paragraphs: [
          "AI presenters supported production across a set of programmes, with varied characters and custom environments used to make each situation distinct. Branding held the collection together.",
          "The production choices served the facilitated experience: a clear setup, a manageable amount of information and an intentional point to pause. The videos supported conversation rather than replacing the facilitator.",
        ],
        image: null,
      },
      {
        title: "Design beyond the video.",
        paragraphs: [
          "Reusable resources helped facilitators connect the films to their sessions. Discussion and reflection made the scenarios part of a wider learning experience.",
          "The collection reached eight leadership programmes. Its production scale is documented separately from learning impact, which would require evidence about how leaders applied the ideas at work.",
        ],
        image: null,
      },
    ],
    videos: [],
    pendingMedia: {
      notice:
        "Original project imagery is being prepared. No substitute is presented as a project screenshot or client deliverable.",
      approval:
        "Owner requested this documented project’s inclusion on 26 October 2026; publish the sourced narrative with an explicit image reservation rather than invented screenshots.",
    },
  },
  {
    slug: "laaw-2024",
    title: "Learning at Work Week",
    organisation: "Internal learning team",
    discipline: "Campaign animation · Internal communications",
    summary:
      "A seven-film internal campaign for Learning at Work Week, introducing the people behind a learning service through short, personalised superhero animations.",
    category: "Strategy",
    tags: [],
    status: "published",
    approval: {
      owner:
        "Owner confirmed on 26 October 2026 that this work was completed by Butter and requested Butter attribution.",
      clientPermission: "",
      portfolioReuse:
        "Owner-authorised project content and original media reuse; Butter delivery confirmed by owner on 26 October 2026.",
    },
    role: {
      kind: "butter",
      description: "Learning designed and delivered by Butter.",
    },
    headline: "Put a face to the learning team.",
    introduction:
      "A seven-film internal campaign for Learning at Work Week, introducing the people behind a learning service through short, personalised superhero animations.",
    challenge: {
      title: "The learning challenge, in context.",
      text: "A seven-film internal campaign for Learning at Work Week, introducing the people behind a learning service through short, personalised superhero animations.",
      audience:
        "Colleagues discovering an internal learning team; the source does not name the organisation.",
      constraints:
        "Seven square-format films of 30–60 seconds, designed for a social feed and viewing without sound.",
    },
    requirements: [
      "Campaign concept",
      "Seven animated portraits",
      "Social-first films",
    ],
    approach: {
      title: "A considered response to a real need.",
      text: "Thirty-to-sixty-second animations gave each team member a distinctive superhero introduction. Square-format films, bold typography and captions were designed for discovery in the Viva Engage feed, including viewing without sound.",
      designDecision:
        "The idea brought the people behind the learning service into view. Each animated introduction connected a team member’s personality and expertise to the support available to colleagues.",
    },
    deliverables: [
      "Campaign concept",
      "Seven animated portraits",
      "Social-first films",
    ],
    outcomes: [
      {
        value: "1,350+",
        label: "Reactions across the week",
        evidence: "Project-reported figure.",
      },
      {
        value: "25%",
        label: "Increase in learning service requests",
        evidence: "Project-reported figure.",
      },
      {
        value: "#1",
        label: "Highest performing Viva Engage content",
        evidence: "Project-reported figure.",
      },
      {
        value: "Kept",
        label: "Personalised videos retained by team",
        evidence: "Project-reported figure.",
      },
    ],
    outcomeNarrative:
      "Project results showed more than 1,350 reactions over the week and a 25% increase in requests to the learning service. These are reported campaign figures, with no claim that reactions alone demonstrate improved learning.",
    evidence: [
      "Figures describe this project and its reported measurement period. They are not guarantees of future results.",
    ],
    hero: null,
    gallery: [],
    serviceSlugs: ["elearning-design-development", "ongoing-learning-support"],
    card: {
      tone: "yellow",
      icon: "film",
      screen: null,
      tilt: "left",
    },
    source: {
      url: "https://danieldeveney.com/work/laaw-2024",
      snapshot:
        "https://github.com/ddeveney83/butter/blob/0f650d91b646843c7228d24c5b317652e1d44e4b/src/data/projectCaseStudies.ts",
      checkedOn: "2026-10-26",
      liveVerified: true,
    },
    story: [
      {
        title: "Make the service feel human.",
        paragraphs: [
          "The idea brought the people behind the learning service into view. Each animated introduction connected a team member’s personality and expertise to the support available to colleagues.",
          "A shared superhero concept made the films feel like one campaign, while individual treatments gave viewers a reason to recognise and remember the people involved.",
        ],
        image: null,
      },
      {
        title: "Design for the feed.",
        paragraphs: [
          "Each film ran for 30 to 60 seconds in a square format suited to Viva Engage. Strong contrast and captions kept the message available to colleagues scrolling without sound.",
          "The original production used an acid-yellow, black and indigo palette with bold display typography. Final media can retain that project identity inside the butter case-study frame.",
        ],
        image: null,
      },
      {
        title: "Connect attention to a service.",
        paragraphs: [
          "Learning at Work Week gave the team a timely reason to introduce its offer. The campaign paired a memorable creative treatment with an existing route to ask the team for help.",
          "The reported reactions and increase in service requests indicate interest during the launch period. They offer a more useful account of the campaign than presenting animation views as a learning outcome.",
        ],
        image: null,
      },
    ],
    videos: [],
    pendingMedia: {
      notice:
        "Original project imagery is being prepared. No substitute is presented as a project screenshot or client deliverable.",
      approval:
        "Owner requested this documented project’s inclusion on 26 October 2026; publish the sourced narrative with an explicit image reservation rather than invented screenshots.",
    },
  },
  {
    slug: "humankind-educatorhub",
    title: "Humankind EducatorHub",
    organisation: "British Red Cross",
    discipline: "LMS · Moodle · Humanitarian education",
    summary:
      "A Moodle-based learning platform helping UK secondary-school educators approach humanitarian topics with confidence, combining self-paced development with resources for the classroom.",
    category: "Charity & Non-profit",
    tags: ["LMS & Platforms"],
    status: "published",
    approval: {
      owner:
        "Owner confirmed on 26 October 2026 that this work was completed by Butter and requested Butter attribution.",
      clientPermission: "",
      portfolioReuse:
        "Owner-authorised project content and original media reuse; Butter delivery confirmed by owner on 26 October 2026.",
    },
    role: {
      kind: "butter",
      description: "Learning designed and delivered by Butter.",
    },
    headline: "Support the educator. Reach the classroom.",
    introduction:
      "A Moodle-based learning platform helping UK secondary-school educators approach humanitarian topics with confidence, combining self-paced development with resources for the classroom.",
    challenge: {
      title: "The learning challenge, in context.",
      text: "A Moodle-based learning platform helping UK secondary-school educators approach humanitarian topics with confidence, combining self-paced development with resources for the classroom.",
      audience:
        "UK secondary-school educators working with humanitarian topics.",
      constraints:
        "A Moodle learning journey needed to connect educator development, classroom resources and operational handover.",
    },
    requirements: [
      "Custom Moodle experience",
      "Educator learning journey",
      "Operational handover",
    ],
    approach: {
      title: "A considered response to a real need.",
      text: "A product-led build connected platform architecture, content design and educator needs. A custom homepage and considered course journey helped time-pressed teachers discover learning and classroom resources, with documentation to support the team managing the platform.",
      designDecision:
        "Sensitive humanitarian topics ask more of an educator than subject knowledge alone. The platform needed to make a useful teaching framework and appropriate resources easy to find.",
    },
    deliverables: [
      "Custom Moodle experience",
      "Educator learning journey",
      "Operational handover",
    ],
    outcomes: [
      {
        value: "4,500+",
        label: "Students reached indirectly through educators",
        evidence: "Project-reported figure.",
      },
      {
        value: "1,500+",
        label: "Teachers enrolled",
        evidence: "Project-reported figure.",
      },
      {
        value: "78%",
        label: "Reported increased teaching confidence",
        evidence: "Project-reported figure.",
      },
      {
        value: "84%",
        label: "Module completion rate",
        evidence: "Project-reported figure.",
      },
    ],
    outcomeNarrative:
      "Project results showed more than 1,500 teachers enrolled, indirect reach to over 4,500 students through the educator model and 78% of educators reporting increased confidence teaching humanitarian topics. Student reach is distinguished from direct platform enrolment; development is ongoing.",
    evidence: [
      "Figures describe this project and its reported measurement period. They are not guarantees of future results.",
    ],
    hero: null,
    gallery: [],
    serviceSlugs: ["learning-platforms-lms", "ongoing-learning-support"],
    card: {
      tone: "sage",
      icon: "bulb",
      screen: null,
      tilt: "left",
    },
    source: {
      url: "https://danieldeveney.com/work/humankind-educatorhub",
      snapshot:
        "https://github.com/ddeveney83/butter/blob/0f650d91b646843c7228d24c5b317652e1d44e4b/src/data/projectCaseStudies.ts",
      checkedOn: "2026-10-26",
      liveVerified: true,
    },
    story: [
      {
        title: "Start with the teacher’s day.",
        paragraphs: [
          "Sensitive humanitarian topics ask more of an educator than subject knowledge alone. The platform needed to make a useful teaching framework and appropriate resources easy to find.",
          "The journey connected personal development with classroom application. Self-paced learning sat alongside downloadable materials so educators could move from building their own confidence to planning a lesson.",
        ],
        image: null,
      },
      {
        title: "Build around the learning.",
        paragraphs: [
          "The build used Moodle with a custom homepage and an educator-focused route from first visit to course completion. Platform decisions were made alongside product, content design and marketing colleagues.",
          "Sprint-based work supported an evolving product. The aim was a coherent experience in which the technology, teaching approach and brand worked together for busy secondary-school professionals.",
        ],
        image: null,
      },
      {
        title: "Leave the team ready to run it.",
        paragraphs: [
          "The handover was treated as part of the product. Systems, documentation and processes helped the community education team manage the platform beyond the initial development work.",
          "Reported teacher enrolment, student reach and educator confidence describe different aspects of the project. Keeping them separate makes the scale and limitations of the evidence easier to understand as the platform continues to develop.",
        ],
        image: null,
      },
    ],
    videos: [],
    pendingMedia: {
      notice:
        "Original project imagery is being prepared. No substitute is presented as a project screenshot or client deliverable.",
      approval:
        "Owner requested this documented project’s inclusion on 26 October 2026; publish the sourced narrative with an explicit image reservation rather than invented screenshots.",
    },
  },
  {
    slug: "vaccination-programme",
    title: "Vaccination Programme",
    organisation: "British Red Cross, NHS and St John Ambulance",
    discipline: "LMS · Blended learning · Rapid deployment",
    summary:
      "One place to learn. Ready when it mattered. We brought a Moodle platform, focused modules and live virtual sessions together to support an urgent, coordinated pandemic response.",
    category: "Charity & Non-profit",
    tags: ["LMS & Platforms"],
    status: "published",
    approval: {
      owner:
        "Owner confirmed on 26 October 2026 that this work was completed by Butter and requested Butter attribution.",
      clientPermission: "",
      portfolioReuse:
        "Owner-authorised project content and original media reuse; Butter delivery confirmed by owner on 26 October 2026.",
    },
    role: {
      kind: "butter",
      description: "Learning designed and delivered by Butter.",
    },
    headline: "Clarity when every hour counts.",
    introduction:
      "One place to learn. Ready when it mattered. We brought a Moodle platform, focused modules and live virtual sessions together to support an urgent, coordinated pandemic response.",
    challenge: {
      title: "One response. A shared understanding.",
      text: "Teams needed consistent, accessible guidance at pace. Separate training resources made coordination harder during a rapidly changing pandemic response.",
      audience:
        "Staff, volunteers and healthcare professionals across three partner organisations.",
      constraints:
        "Rapid deployment, changing guidance and alignment across three organisations.",
    },
    requirements: [
      "Centralised Moodle platform",
      "Scenario-based microlearning",
      "Live virtual learning",
    ],
    approach: {
      title: "Start with what people need to do.",
      text: "We connected a central Moodle platform with short learning modules and live virtual sessions. Stakeholder feedback and completion data helped shape updates as guidance evolved.",
      designDecision:
        "One accessible source of guidance supported a dispersed workforce working unpredictable hours.",
    },
    deliverables: [
      "Centralised Moodle platform",
      "Scenario-based microlearning",
      "Live virtual learning",
    ],
    outcomes: [
      {
        value: "72 hrs",
        label: "Brief to first cohort trained and deployed",
        evidence: "Project-reported figure.",
      },
      {
        value: "89%",
        label: "Module completion rate across all partners",
        evidence: "Project-reported figure.",
      },
      {
        value: "96%",
        label: "Reported feeling prepared for deployment",
        evidence: "Project-reported figure.",
      },
      {
        value: "3",
        label: "Major organisations unified on one platform",
        evidence: "Project-reported figure.",
      },
    ],
    outcomeNarrative:
      "The first cohort was trained within 72 hours of brief. Module completion reached 89% across the three partners, and 96% of personnel reported feeling prepared for deployment.",
    evidence: [
      "Figures describe this project and its reported measurement period. They are not guarantees of future results.",
    ],
    hero: null,
    gallery: [],
    serviceSlugs: ["elearning-design-development", "learning-platforms-lms"],
    card: {
      tone: "garden",
      icon: "compass",
      screen: null,
      tilt: "left",
    },
    source: {
      url: "https://danieldeveney.com/work/vaccination-programme",
      snapshot:
        "https://github.com/ddeveney83/butter/blob/0f650d91b646843c7228d24c5b317652e1d44e4b/src/data/projectCaseStudies.ts",
      checkedOn: "2026-10-26",
      liveVerified: true,
    },
    story: [
      {
        title: "Find the shared need.",
        paragraphs: [
          "Teams needed consistent, accessible guidance at pace. Separate training resources made coordination harder during a rapidly changing pandemic response.",
        ],
        image: null,
      },
      {
        title: "Build a useful journey.",
        paragraphs: [
          "We connected a central Moodle platform with short learning modules and live virtual sessions. Stakeholder feedback and completion data helped shape updates as guidance evolved.",
        ],
        image: null,
      },
      {
        title: "Keep improving.",
        paragraphs: [
          "Completion data and learner feedback informed refinements to the programme.",
        ],
        image: null,
      },
    ],
    videos: [],
    pendingMedia: {
      notice:
        "Original project imagery is being prepared. No substitute is presented as a project screenshot or client deliverable.",
      approval:
        "Owner requested this documented project’s inclusion on 26 October 2026; publish the sourced narrative with an explicit image reservation rather than invented screenshots.",
    },
  },
  {
    slug: "food-safety-level-3",
    title: "Food Safety Level 3",
    organisation: "PGL Travel Ltd",
    discipline: "Blended learning · Food safety",
    summary:
      "Less time travelling. More time applying. We reshaped classroom-only certification into a blended programme, pairing flexible online learning with focused practical sessions.",
    category: "Compliance",
    tags: ["Compliance"],
    status: "published",
    approval: {
      owner:
        "Owner confirmed on 26 October 2026 that this work was completed by Butter and requested Butter attribution.",
      clientPermission: "",
      portfolioReuse:
        "Owner-authorised project content and original media reuse; Butter delivery confirmed by owner on 26 October 2026.",
    },
    role: {
      kind: "butter",
      description: "Learning designed and delivered by Butter.",
    },
    headline: "Make the practical time count.",
    introduction:
      "Less time travelling. More time applying. We reshaped classroom-only certification into a blended programme, pairing flexible online learning with focused practical sessions.",
    challenge: {
      title: "Give essential learning a better shape.",
      text: "Classroom-only delivery meant travel, accommodation and time away from work. Foundational knowledge and practical activities needed different kinds of space.",
      audience: "120 employees completing food safety certification each year.",
      constraints:
        "Preserve practical application while reducing the time and cost of classroom-only delivery.",
    },
    requirements: [
      "Articulate Storyline modules",
      "Practical learning sessions",
      "Moodle deployment and reporting",
    ],
    approach: {
      title: "Start with what people need to do.",
      text: "We moved foundational knowledge into interactive Storyline modules and reserved the in-person session for hands-on application. A pilot informed refinements before rollout.",
      designDecision:
        "Flexible self-paced preparation made room for focused practical learning.",
    },
    deliverables: [
      "Articulate Storyline modules",
      "Practical learning sessions",
      "Moodle deployment and reporting",
    ],
    outcomes: [
      {
        value: "25%",
        label: "Reduction in logistical costs",
        evidence: "Project-reported figure.",
      },
      {
        value: "22 hrs",
        label: "Saved per employee vs. previous format",
        evidence: "Project-reported figure.",
      },
      {
        value: "91%",
        label: "Certification pass rate, up from 76%",
        evidence: "Project-reported figure.",
      },
      {
        value: "4.5/5",
        label: "Learner satisfaction score",
        evidence: "Project-reported figure.",
      },
    ],
    outcomeNarrative:
      "The blended programme reduced logistical costs by 25% and saved 22 hours per employee. Certification pass rates rose from 76% to 91%, with learner satisfaction at 4.5 out of 5.",
    evidence: [
      "Figures describe this project and its reported measurement period. They are not guarantees of future results.",
    ],
    hero: null,
    gallery: [],
    serviceSlugs: ["elearning-design-development", "learning-platforms-lms"],
    card: {
      tone: "garden",
      icon: "compass",
      screen: null,
      tilt: "left",
    },
    source: {
      url: "https://danieldeveney.com/work/food-safety-level-3",
      snapshot:
        "https://github.com/ddeveney83/butter/blob/0f650d91b646843c7228d24c5b317652e1d44e4b/src/data/projectCaseStudies.ts",
      checkedOn: "2026-10-26",
      liveVerified: true,
    },
    story: [
      {
        title: "Find the shared need.",
        paragraphs: [
          "Classroom-only delivery meant travel, accommodation and time away from work. Foundational knowledge and practical activities needed different kinds of space.",
        ],
        image: null,
      },
      {
        title: "Build a useful journey.",
        paragraphs: [
          "We moved foundational knowledge into interactive Storyline modules and reserved the in-person session for hands-on application. A pilot informed refinements before rollout.",
        ],
        image: null,
      },
      {
        title: "Keep improving.",
        paragraphs: [
          "Completion data and learner feedback informed refinements to the programme.",
        ],
        image: null,
      },
    ],
    videos: [],
    pendingMedia: {
      notice:
        "Original project imagery is being prepared. No substitute is presented as a project screenshot or client deliverable.",
      approval:
        "Owner requested this documented project’s inclusion on 26 October 2026; publish the sourced narrative with an explicit image reservation rather than invented screenshots.",
    },
  },
];
