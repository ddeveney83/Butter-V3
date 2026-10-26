// Identity confirmed directly by the owner. CV received; biography draft in docs/founder-biography-draft.md.
export const founderIdentity = {
  name: "Butter’s founder",
  role: "Founder",
} as const;

export interface FounderProfile {
  name: string;
  role: string;
  biography: string[];
  credentials: string[];
  approval: string;
  portrait: { src: string; alt: string; rights: string };
}
// Confirmed identity comes from the master brief. Editorial copy remains owner-review material.
export const aboutContent: {
  founder: FounderProfile | null;
  principles: { title: string; description: string }[];
  workingStyle: { title: string; description: string }[];
} = {
  founder: {
    name: founderIdentity.name,
    role: founderIdentity.role,
    biography: [
      "Butter’s founder brings more than 20 years of experience across vocational education, learning and development, digital learning and platform ownership.",
      "His career spans frontline team leadership, apprenticeship teaching and assessment, instructional design and the development of organisation-wide learning platforms. He combines practical teaching experience with learning needs analysis, accessible design and product ownership, helping connect the needs of learners with the decisions behind the technology.",
      "His background includes interactive eLearning, curriculum design, LMS implementation, reporting and ongoing improvement across charity, commercial and technology settings. That experience informs Butter’s focus on clear learning design, thoughtful technology and practical support.",
    ],
    credentials: [
      "Level 4 Certificate in Education and Training",
      "Level 4 IQA Assessment Processes and Practice",
      "CIEH Professional Trainer Certificate",
    ],
    approval:
      "Owner accepted all prepared review content on 25 October 2026; CV-derived copy and supplied portrait.",
    portrait: {
      src: "/assets/people/founder-portrait.jpg",
      alt: "Founder of Butter",
      rights:
        "Portrait supplied in the owner's CV; website use accepted with the review content on 25 October 2026.",
    },
  },
  principles: [
    {
      title: "Pedagogy first",
      description:
        "Start with what people need to understand and do. Let the learning problem guide the format, activities and feedback.",
    },
    {
      title: "Accessibility throughout",
      description:
        "Consider language, structure, media and interaction from the beginning. Make access requirements part of the brief and the review process.",
    },
    {
      title: "Simplicity with purpose",
      description:
        "Make complex ideas easier to navigate. Give every screen, sentence and interaction a clear job.",
    },
    {
      title: "Partnership, not hand-offs",
      description:
        "Agree the scope, make room for useful feedback and keep decisions clear as the work develops.",
    },
    {
      title: "Outcomes with evidence",
      description:
        "Define the change that matters and how it can be assessed. Keep the claims proportionate to the evidence.",
    },
  ],
  workingStyle: [
    {
      title: "Understand",
      description:
        "Begin with the audience, the challenge and the context. Agree what a useful outcome looks like before choosing a solution.",
    },
    {
      title: "Shape together",
      description:
        "Work through the approach, content and practical constraints. Use clear review points to make decisions and refine the work.",
    },
    {
      title: "Build and support",
      description:
        "Develop, test and hand over the agreed solution. Plan the support and evaluation needed beyond launch.",
    },
  ],
};
