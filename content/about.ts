// Confirmed directly by the owner in this conversation. Career details remain pending.
export const founderIdentity = {
  name: "Daniel Deveney",
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
  founder: null,
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
