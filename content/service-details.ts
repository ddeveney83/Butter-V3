import { services } from "./services";
export interface FAQ {
  question: string;
  answer: string;
}
export interface ServiceDetail {
  slug: string;
  title: string;
  heading: string[];
  highlight: string;
  description: string;
  fit: string;
  boundary: string;
  heroAsset: string;
  benefits: { title: string; description: string }[];
  steps: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  faqs: FAQ[];
}
// Owner-review copy derived from master §5; not a claim of provider certification or approved results.
export const serviceDetails: ServiceDetail[] = [
  {
    slug: services[0].slug,
    title: services[0].title,
    heading: ["eLearning", "Design &"],
    highlight: "Development.",
    description:
      "Engaging, accessible and effective digital learning experiences that make a real difference.",
    fit: "For organisations turning complex information into practical learning. Start with what people need to do, then choose the right mix of content, interaction and support.",
    boundary:
      "Formats, authoring tools, accessibility requirements and platform compatibility are agreed during discovery. Formal accreditation, guaranteed completion rates and particular business results are not assumed.",
    heroAsset: "Approved laptop photograph showing a real learning interface",
    benefits: [
      {
        title: "Learner-centred design",
        description:
          "Built around your people, challenges and real-world scenarios.",
      },
      {
        title: "Custom development",
        description:
          "From interactive eLearning to blended and scenario-based learning.",
      },
      {
        title: "Accessible by design",
        description:
          "Plan inclusive content, interaction and testing from the outset.",
      },
      {
        title: "Measurable impact",
        description:
          "Agree useful evaluation criteria before development begins.",
      },
    ],
    steps: [
      {
        title: "Discover",
        description:
          "Understand your people, goals, existing material and learning context.",
      },
      {
        title: "Design",
        description:
          "Shape the structure, storyboards, activities and review approach.",
      },
      {
        title: "Develop",
        description:
          "Build and test the agreed learning experience, including accessible interactions.",
      },
      {
        title: "Deliver",
        description:
          "Support launch, handover and the agreed evaluation of the learning.",
      },
    ],
    solutions: [
      {
        title: "Bespoke eLearning",
        description:
          "Interactive, media-rich learning shaped around a specific audience and goal.",
      },
      {
        title: "Blended learning",
        description:
          "Connect digital learning with live sessions, discussion and practice.",
      },
      {
        title: "Scenario-based learning",
        description:
          "Use realistic decisions and feedback to explore consequences safely.",
      },
      {
        title: "Gamification",
        description:
          "Use purposeful challenges and feedback where they support the learning.",
      },
      {
        title: "Video and multimedia",
        description:
          "Explain ideas through accessible video, audio and supporting resources.",
      },
      {
        title: "Accessibility uplift",
        description:
          "Review existing content and prioritise improvements to access and usability.",
      },
    ],
    faqs: [
      {
        question: "What types of eLearning do you create?",
        answer:
          "The brief can include bespoke interactive courses, scenarios, blended learning, video and multimedia, or improvements to existing content. The format should follow the learning problem rather than a preferred tool. Discovery establishes the audience, expected behaviour, source material and delivery environment before a solution is scoped.",
      },
      {
        question: "Can you work with our existing LMS?",
        answer:
          "Compatibility needs to be checked against your platform, authoring format and reporting requirements. Share the LMS details and any technical constraints at the start. Content packaging, testing access and launch responsibilities can then be included in the agreed scope; compatibility with every platform is not assumed.",
      },
      {
        question: "How do you approach accessibility?",
        answer:
          "Accessibility starts with structure, language and interaction design, not a final checklist. The project should agree relevant WCAG requirements, keyboard access, media alternatives and testing responsibilities. Any constraints in source content, authoring tools or the delivery platform need to be identified and recorded rather than hidden behind a blanket compliance claim.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Timing depends on the amount and condition of source material, interaction complexity, media production and review availability. A short update and a new scenario-based programme need different plans. Share the intended launch date and review process so milestones and dependencies can be agreed before work starts.",
      },
      {
        question: "Can you support ongoing updates?",
        answer:
          "Ongoing Learning Support can cover agreed content updates and improvements after launch. The handover should clarify source files, ownership, versioning and future review needs. Updates outside the original project need a separate scope; ongoing support is not silently included in every build.",
      },
    ],
  },
  {
    slug: services[1].slug,
    title: services[1].title,
    heading: ["Learning"],
    highlight: "Platforms & LMS.",
    description:
      "Make your learning platform easier to use, manage and improve. Practical help with implementation, configuration and ongoing support.",
    fit: "For organisations selecting a learning platform, preparing a rollout or improving an existing learner journey. Start with users, administration and reporting needs before comparing features.",
    boundary:
      "Platform licences, hosting, migrations and third-party integrations require an agreed scope and suitable access. No vendor partnership, universal platform support or integration is claimed without confirmation.",
    heroAsset: "Approved learning-platform screen and device photograph",
    benefits: [
      {
        title: "Clear requirements",
        description:
          "Translate learner and administrator needs into practical priorities.",
      },
      {
        title: "Better journeys",
        description:
          "Review how people find, access and move through learning.",
      },
      {
        title: "Practical configuration",
        description:
          "Plan settings, structure and roles around the agreed use case.",
      },
      {
        title: "Confident handover",
        description:
          "Clarify administration, documentation and support responsibilities.",
      },
    ],
    steps: [
      {
        title: "Discover",
        description:
          "Review users, existing systems, reporting needs and access constraints.",
      },
      {
        title: "Design",
        description:
          "Map the learner journey, information structure and configuration plan.",
      },
      {
        title: "Configure",
        description:
          "Implement and test agreed platform changes in a suitable environment.",
      },
      {
        title: "Support",
        description:
          "Prepare administrators, document decisions and plan ongoing improvement.",
      },
    ],
    solutions: [
      {
        title: "Platform requirements",
        description:
          "Define the learning, administration and reporting capabilities you actually need.",
      },
      {
        title: "Implementation planning",
        description:
          "Map configuration, testing, content and launch responsibilities.",
      },
      {
        title: "LMS configuration",
        description:
          "Shape courses, categories, roles and settings within the agreed platform scope.",
      },
      {
        title: "Learner experience",
        description:
          "Review navigation, enrolment and course discovery for real user tasks.",
      },
      {
        title: "Integration discovery",
        description:
          "Assess data flows, system boundaries and vendor requirements before committing to a connection.",
      },
      {
        title: "Administration support",
        description:
          "Prepare practical guidance and ongoing administration where agreed.",
      },
    ],
    faqs: [
      {
        question: "Can you improve a platform we already use?",
        answer:
          "An existing platform can be reviewed before considering replacement. Start with the tasks that are difficult for learners and administrators, then assess structure, configuration and content. Available permissions and vendor constraints determine what can change. The resulting scope should distinguish configuration work from new software development or vendor support.",
      },
      {
        question: "Which learning platforms do you support?",
        answer:
          "The platform, version and required work need to be confirmed before a support commitment is made. Include your current system, hosting arrangement and technical contacts in the enquiry. No list of vendor partnerships or certifications is implied; feasibility and any specialist requirements are established during discovery.",
      },
      {
        question: "Can you connect our LMS to other systems?",
        answer:
          "Integration starts with requirements and access, not a promise that every system connects. Data ownership, identity management, APIs, vendor terms and security need to be reviewed. Discovery can identify the options and dependencies; development, licences and third-party work require explicit agreement before implementation.",
      },
      {
        question: "Does platform support include licences and hosting?",
        answer:
          "Software licences, hosting and vendor fees are separate considerations unless explicitly included in an agreed proposal. Responsibilities for updates, backups, security and availability must be clear. The scope should identify who operates the platform and what Butter is being asked to configure, document or support.",
      },
    ],
  },
  {
    slug: services[2].slug,
    title: services[2].title,
    heading: ["Learning Strategy"],
    highlight: "& Consultancy.",
    description:
      "Make clearer decisions about learning. Understand the need, prioritise the right response and build a practical plan for meaningful outcomes.",
    fit: "For organisations facing a skills gap, changing role requirements or an unclear learning brief. Explore the performance problem before deciding whether a course, platform change or another intervention is needed.",
    boundary:
      "Recommendations depend on access to people, evidence and business context. Research depth, stakeholder involvement and evaluation are scoped together. A strategy does not guarantee behaviour change or replace management decisions.",
    heroAsset: "Approved discovery workshop or learning-strategy photograph",
    benefits: [
      {
        title: "Problem before solution",
        description:
          "Separate learning needs from wider process and performance issues.",
      },
      {
        title: "Shared priorities",
        description:
          "Give stakeholders a clearer basis for decisions and trade-offs.",
      },
      {
        title: "Practical direction",
        description:
          "Turn insight into a sequenced plan with responsibilities.",
      },
      {
        title: "Useful evaluation",
        description:
          "Identify evidence that can help assess progress over time.",
      },
    ],
    steps: [
      {
        title: "Explore",
        description:
          "Clarify the problem, stakeholders, available evidence and constraints.",
      },
      {
        title: "Analyse",
        description:
          "Identify needs, gaps and possible causes before recommending learning.",
      },
      {
        title: "Plan",
        description:
          "Prioritise interventions, resources, ownership and evaluation.",
      },
      {
        title: "Review",
        description:
          "Test the plan with stakeholders and agree practical next steps.",
      },
    ],
    solutions: [
      {
        title: "Learning needs analysis",
        description:
          "Understand current performance, desired capability and barriers to progress.",
      },
      {
        title: "Stakeholder discovery",
        description:
          "Structure conversations around people, decisions and practical constraints.",
      },
      {
        title: "Curriculum planning",
        description:
          "Organise learning into a coherent journey rather than isolated courses.",
      },
      {
        title: "Skills mapping",
        description:
          "Connect agreed role expectations with capability and development priorities.",
      },
      {
        title: "Evaluation strategy",
        description:
          "Define meaningful indicators and realistic ways to gather evidence.",
      },
      {
        title: "Delivery roadmaps",
        description:
          "Set out priorities, dependencies and ownership for the next stage.",
      },
    ],
    faqs: [
      {
        question: "Do we need a course before starting consultancy?",
        answer:
          "No. Discovery can begin with a performance problem or an uncertain brief. Understanding the audience, context and barriers helps distinguish a learning need from a process, tool or management issue. The recommendation may involve a course, a broader learning journey or changes outside learning; a course is not the automatic answer.",
      },
      {
        question: "What does a learning strategy include?",
        answer:
          "The scope may cover needs analysis, audience priorities, curriculum or skills mapping, intervention options, delivery sequencing and evaluation. The right combination depends on the decision you need to make. Agree the questions, stakeholders, evidence and expected outputs before research starts so the work leads to a usable plan.",
      },
      {
        question: "How do you measure whether a strategy works?",
        answer:
          "Start by defining the change that matters and the evidence available to assess it. Completion data alone rarely explains performance. The evaluation plan should consider appropriate indicators, timeframes and responsibilities, while recognising other influences on outcomes. No percentage improvement or return on investment is promised without evidence.",
      },
      {
        question: "Can you help implement the recommendations?",
        answer:
          "A strategy can identify where design, development, platform work or ongoing support may be useful. Implementation is then scoped separately against agreed priorities, capacity and responsibilities. This keeps recommendations distinct from a commitment to build everything and makes any handover or follow-on work explicit.",
      },
    ],
  },
  {
    slug: services[3].slug,
    title: services[3].title,
    heading: ["Ongoing Learning"],
    highlight: "Support.",
    description:
      "Keep your learning moving. Flexible help with content updates, platform administration and practical improvements after launch.",
    fit: "For organisations that need a continuing learning partner rather than a one-off build. Identify the recurring work, the systems involved and how requests should be prioritised.",
    boundary:
      "Availability, response times, supported systems and the work included must be agreed. No 24/7 cover, emergency incident response or unlimited development is implied. Larger changes are separately assessed and scoped.",
    heroAsset: "Approved photograph of learning-support collaboration",
    benefits: [
      {
        title: "Continuity",
        description:
          "Keep context and decisions available as your learning evolves.",
      },
      {
        title: "Current content",
        description:
          "Plan updates around policy, product and audience changes.",
      },
      {
        title: "Clear priorities",
        description: "Agree how requests are assessed, scheduled and reviewed.",
      },
      {
        title: "Steady improvement",
        description: "Use feedback and evidence to guide manageable changes.",
      },
    ],
    steps: [
      {
        title: "Understand",
        description:
          "Review existing content, systems, access and the recurring work.",
      },
      {
        title: "Agree",
        description:
          "Define scope, responsibilities, availability and request handling.",
      },
      {
        title: "Maintain",
        description:
          "Deliver agreed updates with review, testing and change records.",
      },
      {
        title: "Improve",
        description:
          "Review feedback, priorities and the support arrangement over time.",
      },
    ],
    solutions: [
      {
        title: "Content updates",
        description:
          "Keep existing learning aligned with agreed policy and source changes.",
      },
      {
        title: "Platform administration",
        description:
          "Support routine course and user administration within agreed permissions.",
      },
      {
        title: "Quality reviews",
        description:
          "Check content, links and learning journeys as they change.",
      },
      {
        title: "Accessibility improvements",
        description:
          "Prioritise practical fixes to existing learning materials.",
      },
      {
        title: "Learning advice",
        description:
          "Provide a sounding board for emerging needs and small changes.",
      },
      {
        title: "Improvement planning",
        description:
          "Turn recurring feedback into a prioritised backlog for future work.",
      },
    ],
    faqs: [
      {
        question: "What can ongoing support cover?",
        answer:
          "An arrangement can include agreed content updates, routine platform administration, quality reviews, accessibility improvements and learning advice. The supported systems, permissions and workload need to be defined first. A written scope separates recurring support from larger projects, third-party responsibilities and work that needs additional approval.",
      },
      {
        question: "Is support available on a retainer?",
        answer:
          "A retainer or another flexible arrangement can be discussed around the work you need. Capacity, request handling, review points and any limits must be agreed rather than assumed. No standard price or unlimited allocation is published here; the proposal should make the commercial terms and included work clear.",
      },
      {
        question: "Do you provide emergency or out-of-hours support?",
        answer:
          "No emergency, out-of-hours or 24/7 service should be assumed. Availability, response expectations and escalation responsibilities must be agreed before support begins. Critical hosting, security or vendor incidents may remain with the organisation's own technical team or platform supplier, depending on the operating arrangement.",
      },
      {
        question: "How are larger changes handled?",
        answer:
          "A request that introduces significant new content, functionality or integration should be assessed separately. The review establishes effort, dependencies and whether it fits the existing arrangement. Additional work needs an agreed scope before it starts, so ongoing maintenance does not become an undefined development project.",
      },
    ],
  },
];
export const overviewFAQs: FAQ[] = [
  {
    question: "What types of organisations do you work with?",
    answer:
      "The service offer is for organisations that need practical help with learning design, platforms, strategy or ongoing support. Fit depends on the challenge, audience and scope rather than an assumed client list. Butter is based in Devon and welcomes conversations across the South West and UK-wide. Client relationships are only published with permission.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timing depends on the work involved, source material, technical dependencies and the people available to review it. A content update and a new learning programme need different plans. Share your deadline and constraints during discovery so milestones and responsibilities can be agreed without inventing a standard turnaround.",
  },
  {
    question: "Can you work with our existing LMS?",
    answer:
      "Existing platforms can be assessed as part of the brief. Share the system, version, permissions and the changes or content you need. Compatibility, reporting and vendor constraints must be checked before committing to a solution; support for every LMS or integration is not assumed.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Ongoing Learning Support covers separately agreed recurring work, such as updates, administration and practical improvements. The arrangement should define supported systems, availability, responsibilities and request handling. It is a distinct service, not a promise of unlimited support included with every project.",
  },
  {
    question: "What does a project cost?",
    answer:
      "Cost depends on scope, content readiness, complexity and any third-party requirements. There is no approved price list to publish here. A useful starting brief describes the problem, audience, existing materials, deadline and any budget constraints so an appropriate scope can be discussed before work is commissioned.",
  },
];
export const findServiceDetail = (slug: string) =>
  serviceDetails.find((service) => service.slug === slug);
