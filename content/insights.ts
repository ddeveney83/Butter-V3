import type { PublicationStatus } from "./routes";
import { placeholderImages, type PlaceholderImage } from "./placeholder-images";

export const insightCategories = [
  "All",
  "Learning platforms",
  "Accessibility",
  "Learning design",
] as const;
export type InsightCategory = Exclude<
  (typeof insightCategories)[number],
  "All"
>;
export interface Insight {
  slug: string;
  title: string;
  summary: string;
  category: InsightCategory;
  status: PublicationStatus;
  preparedOn: string;
  publishedOn?: string;
  updatedOn?: string;
  approval: { owner: string; author: string };
  author: {
    name: string;
    biography: string;
    approval: string;
    kind?: "Person" | "Organization";
  };
  image: {
    src: string;
    alt: string;
    rights: string;
    temporary?: PlaceholderImage;
  } | null;
  reviewImage: PlaceholderImage;
  answer: string;
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    items?: string[];
    sourceIds?: string[];
  }[];
  sources: { id: string; title: string; url: string; context: string }[];
  serviceSlugs: string[];
  relatedSlugs: string[];
}
const proposedAuthor = {
  name: "Butter",
  kind: "Organization" as const,
  biography:
    "An independent digital learning studio based in Devon, combining learning design, strategy and platform expertise.",
  approval:
    "Owner accepted the reviewed author summary and byline on 25 October 2026.",
};
// Owner accepted both AI-assisted review drafts, author summary, byline and temporary imagery on 25 October 2026.
// The CV informs topic selection only; employer outcomes and private contact data are excluded.
export const insights: Insight[] = [
  {
    slug: "choosing-an-lms-for-your-organisation",
    title: "How to choose an LMS for your organisation",
    summary:
      "Start with learner journeys, test the work that matters and plan who will own the platform after launch.",
    category: "Learning platforms",
    status: "published",
    publishedOn: "2026-10-25",
    preparedOn: "2026-10-25",
    approval: {
      owner: "Owner accepted prepared review content on 25 October 2026.",
      author:
        "The owner accepted the reviewed copy and byline on 25 October 2026.",
    },
    author: { ...proposedAuthor },
    image: {
      ...placeholderImages.laptop,
      alt: "Temporary illustration of a learning interface on a laptop",
      rights:
        "Owner accepted temporary review imagery on 25 October 2026; retain the AI-generated placeholder label.",
      temporary: "laptop",
    },
    reviewImage: "laptop",
    answer:
      "Choose a learning management system by testing the tasks your learners and administrators actually need to complete. Agree the audience, access requirements, reporting questions and operating responsibilities before comparing features. Then use the same practical pilot for every shortlisted platform. A convincing demonstration should show a complete learning journey, including support and reporting, rather than a tour of menus.",
    sections: [
      {
        id: "start-with-the-journey",
        title: "1. Define the learning journey before the feature list",
        paragraphs: [
          "Write down one important journey from invitation to useful action. A new starter might receive an invitation, sign in on a shared device, find a required activity, resume it after an interruption and ask for help. Their manager may need to see whether a practical follow-up has happened. Each step becomes something you can test.",
          "Describe the conditions around that journey. Are people using personal phones or managed laptops? Do they have an organisational email address? Is learning completed during a shift? Which languages, assistive technologies and support arrangements need consideration? A platform can have an impressive catalogue and still be difficult to use in the conditions that matter.",
          "Use three requirement groups: essential for the first release, useful later and outside the current scope. Record the reason and the person responsible for accepting each essential requirement. This keeps a long wish list from obscuring a small number of critical needs.",
        ],
        items: [
          "Audience and access: who needs an account, on which devices and under what constraints?",
          "Learning activity: what should people practise, understand or demonstrate?",
          "Evidence: what decision will a report help someone make?",
          "Operations: who will answer questions, update content and resolve access problems?",
        ],
      },
      {
        id: "make-demos-do-real-work",
        title: "2. Give each supplier the same practical demonstration",
        paragraphs: [
          "Replace an open-ended sales demonstration with a short task script. Ask the supplier to enrol a learner, launch an actual sample activity, resume it, record the result and produce the report you need. Include a realistic mistake, such as an incorrect enrolment, so you can see how an administrator recovers.",
          "Use representative content and accounts rather than accepting screenshots as evidence. If your courses use a packaged learning format, test the exact export settings and reporting fields you intend to use. A statement that a format is supported is a starting point for testing, not confirmation that every completion rule will behave as you expect.",
          "Score the task against clear acceptance criteria: can the learner find the activity without coaching, can the administrator explain the result, and can the team repeat the process? Keep a record of unresolved questions and verify them during a trial before committing.",
        ],
      },
      {
        id: "test-access-and-integrations",
        title: "3. Check accessibility and integrations end to end",
        paragraphs: [
          "Include keyboard use, visible focus, meaningful labels, readable content and usable error messages in the pilot. Check the platform and the learning content separately, then test the combined journey. An accessible platform does not automatically make an uploaded course accessible. WCAG provides testable criteria for web content; a short pilot is not a full conformance assessment.",
          "Map the information that needs to move between systems: identity, enrolment, completion, team structure and reporting. Agree which system is authoritative for each item, how often data changes and who investigates a failure. Ask for a demonstration of a failed or delayed transfer as well as a successful one.",
          "Ask the supplier to explain hosting, security responsibilities, data export, retention and deletion in terms your organisation can review. Bring the relevant IT, privacy and procurement colleagues into that review. These decisions depend on your circumstances and should not be reduced to a single feature-list checkbox.",
        ],
        sourceIds: ["wcag"],
      },
      {
        id: "budget-for-ownership",
        title: "4. Budget for ownership as well as software",
        paragraphs: [
          "Compare the cost of running the service over the same period for every option. Include implementation, content migration, support, hosting, integrations, training, maintenance and the time your own team will spend administering it. Ask how pricing changes with active users, storage or additional functionality.",
          "Open-source software still needs an operating plan. For example, Moodle's official project documentation describes both self-hosting and hosted options. That is a choice about responsibility as well as technology: someone must manage updates, backups, support and the platform's configuration. This is an illustration of an ownership question, not a recommendation that one product suits every organisation.",
          "Name a product owner and an operational owner before launch. Agree who can change the platform, how requests are prioritised, what support is available and how content is retired. Include a practical exit plan: how will you retrieve content and records in a usable form if your requirements change?",
        ],
        sourceIds: ["moodle"],
      },
      {
        id: "make-the-decision",
        title: "5. Make the decision with a small, documented pilot",
        paragraphs: [
          "Invite a representative group to complete the important journey, including people who face the access conditions you identified. Observe where help is needed and record the issue, impact and proposed resolution. Avoid treating a small pilot as proof of satisfaction across the whole workforce; use it to uncover risks before a wider rollout.",
          "Finish with a decision record that connects each essential requirement to observed evidence, any remaining limitation and its owner. If two platforms both meet the essentials, compare their ongoing operational burden and the quality of the learner journey. The most useful result is a system your organisation can run confidently, with a clear plan for what happens next.",
        ],
        items: [
          "Can representative learners complete the journey with the agreed support?",
          "Do reports answer the original questions accurately?",
          "Are accessibility issues and integration risks documented and assigned?",
          "Is there a funded plan for administration, maintenance and exit?",
        ],
      },
    ],
    sources: [
      {
        id: "wcag",
        title: "W3C: Web Content Accessibility Guidelines (WCAG) 2.2",
        url: "https://www.w3.org/TR/WCAG22/",
        context:
          "Reference for accessibility criteria. A pilot checklist does not establish full conformance.",
      },
      {
        id: "moodle",
        title: "Moodle: official project overview and hosting options",
        url: "https://github.com/moodle/moodle/blob/main/README.md",
        context:
          "Supports the distinction between self-hosting and hosted options, not a universal product recommendation.",
      },
    ],
    serviceSlugs: ["learning-platforms-lms", "learning-strategy-consultancy"],
    relatedSlugs: ["practical-accessibility-for-digital-learning"],
  },
  {
    slug: "practical-accessibility-for-digital-learning",
    title: "Practical accessibility checks for digital learning",
    summary:
      "Review a complete learning journey: keyboard access, structure, media alternatives and usable assessment.",
    category: "Accessibility",
    status: "published",
    publishedOn: "2026-10-25",
    preparedOn: "2026-10-25",
    approval: {
      owner: "Owner accepted prepared review content on 25 October 2026.",
      author:
        "The owner accepted the reviewed copy and byline on 25 October 2026.",
    },
    author: { ...proposedAuthor },
    image: {
      ...placeholderImages.headphones,
      alt: "Temporary headphones and notebook illustration",
      rights:
        "Owner accepted temporary review imagery on 25 October 2026; retain the AI-generated placeholder label.",
      temporary: "headphones",
    },
    reviewImage: "headphones",
    answer:
      "Start accessibility review with a complete learning task, from finding the activity to receiving feedback. Check that people can navigate by keyboard, understand the structure, access meaningful media alternatives and complete assessment without avoidable barriers. Use WCAG criteria alongside testing with people and assistive technology. A checklist can reveal problems, but passing a few checks does not establish that a course conforms to WCAG.",
    sections: [
      {
        id: "review-the-whole-journey",
        title: "1. Review the whole journey, not an isolated screen",
        paragraphs: [
          "Select a representative task and follow it from the invitation or course catalogue through to completion. Include sign-in, instructions, media, practice, assessment and the final result. A well-designed course can still be difficult to reach if the enrolment email, login page or surrounding platform creates a barrier.",
          "Record what you tested: the course version, browser, device, input method and any assistive technology. Keep observations specific. Rather than writing 'navigation is inaccessible', note that keyboard focus moves into the activity but cannot reach the Next button. A reproducible observation gives the designer or developer something concrete to investigate.",
          "Agree a target standard and the scope of review with the people commissioning the work. WCAG 2.2 defines testable success criteria and conformance requirements. This guide highlights useful starting points, not every criterion, an audit methodology or legal advice. Automated checks and human evaluation have different roles; neither should be represented as a complete guarantee on its own.",
        ],
        sourceIds: ["wcag"],
      },
      {
        id: "keyboard-and-focus",
        title: "2. Make every learning activity operable by keyboard",
        paragraphs: [
          "Put the pointer aside and use the keyboard to enter the course, follow links, open controls and submit an answer. Check that the current focus is visible, moves in a meaningful sequence and is not hidden behind overlays or sticky navigation. Confirm that a learner can leave a dialog or activity without becoming trapped.",
          "Look closely at interactions built around dragging, hovering or precise movement. A matching exercise may need a way to select an item and then choose its destination. The alternative should support the same learning objective and provide equivalent feedback. Replacing the activity with a message to contact support leaves the learning task unresolved.",
          "Use the expected keyboard behaviour for each control, then test what the learner encounters in the actual published course. Authoring-tool previews can differ from a course running inside a platform. WCAG's keyboard criterion addresses functionality through a keyboard interface; focus visibility and focus not being obscured have their own criteria.",
        ],
        sourceIds: ["keyboard", "focus"],
      },
      {
        id: "structure-and-language",
        title: "3. Give content a structure people can navigate",
        paragraphs: [
          "Use headings to describe the structure, meaningful link labels and instructions that do not rely only on position, colour or shape. 'Choose the policy for reporting a concern' gives more context than 'click the green button on the right'. Keep the visible label and the accessible name consistent so people can recognise the same control across input methods.",
          "Write alternative text according to the job an image does. A decorative ribbon needs no spoken description when it adds no information. A process diagram may need a short identification plus a nearby text explanation of the sequence and relationships. A screenshot used to teach a procedure needs enough context for a learner to understand the relevant action.",
          "Check readable contrast and reflow at enlarged text sizes. If content clips, overlaps or demands repeated horizontal movement, review the layout and the amount of information on the screen. Test with real content, including long labels and feedback, rather than assuming a clean template will remain usable once populated.",
        ],
        sourceIds: ["wcag"],
      },
      {
        id: "media-and-assessment",
        title: "4. Review media alternatives and assessment together",
        paragraphs: [
          "For prerecorded video with audio, check captions against the actual dialogue and meaningful sounds. Correct names, technical terms, timing and speaker identification where relevant. A transcript can help people revisit information, but does not automatically replace the need for synchronised captions. If essential information is only visible, consider the audio description or other alternative required for that content and target level.",
          "Check that assessment instructions, answer choices, errors and feedback are available through the intended access methods. Learners should be able to understand what happened after submitting an answer and how to continue. Review time limits and unnecessary interaction demands against the actual skill being assessed; avoid turning a knowledge check into a test of motor speed.",
          "For a hypothetical safety scenario, the learning objective might be recognising a hazard and selecting a response. Choosing an answer with a keyboard can assess that decision just as a pointer-based interaction can. This is a design illustration, not a report of a Butter project or a claim about a specific learner group.",
        ],
        sourceIds: ["captions", "wcag"],
      },
      {
        id: "turn-findings-into-improvements",
        title: "5. Retest fixes and keep the evidence",
        paragraphs: [
          "Turn findings into a short action record: the affected task, the observed barrier, its impact, the proposed change, an owner and the retest result. Prioritise barriers that prevent access to essential learning while planning how the rest of the agreed scope will be addressed. A fixed template should be retested with the interactions and media used in the live course.",
          "Include people with relevant access needs in research and evaluation, with appropriate arrangements and consent. Their feedback can expose barriers that a technical checklist misses. Be precise about the limits of the sample and continue reviewing changes after launch; one person's successful journey does not establish accessibility for everyone.",
          "Preserve the review scope and known limitations in the handover. The useful outcome is a learning experience that people can use, supported by evidence of what was checked and a maintained route for reporting problems. Avoid adding a blanket 'fully accessible' claim to a course on the strength of a brief review.",
        ],
        items: [
          "Record the test environment and reproduce each barrier.",
          "Assign fixes and retest the complete task after changes.",
          "Keep scope, limitations and unresolved issues visible in handover.",
          "Plan how accessibility will be checked when content or platforms change.",
        ],
      },
    ],
    sources: [
      {
        id: "wcag",
        title: "W3C: Web Content Accessibility Guidelines (WCAG) 2.2",
        url: "https://www.w3.org/TR/WCAG22/",
        context:
          "Normative criteria and conformance requirements. This article covers selected starting points only.",
      },
      {
        id: "keyboard",
        title: "WCAG 2.2: Keyboard (2.1.1)",
        url: "https://www.w3.org/TR/WCAG22/#keyboard",
        context:
          "Keyboard operation of functionality, including the criterion's stated exception.",
      },
      {
        id: "focus",
        title: "WCAG 2.2: Focus Not Obscured (Minimum) (2.4.11)",
        url: "https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum",
        context:
          "Author-created content must not entirely hide the focused component.",
      },
      {
        id: "captions",
        title: "WCAG 2.2: Captions (Prerecorded) (1.2.2)",
        url: "https://www.w3.org/TR/WCAG22/#captions-prerecorded",
        context:
          "Captions for prerecorded audio in synchronised media, with the criterion's stated exception.",
      },
    ],
    serviceSlugs: ["elearning-design-development", "ongoing-learning-support"],
    relatedSlugs: ["choosing-an-lms-for-your-organisation"],
  },
];
