export interface LegalDocument {
  title: string;
  description: string;
  sections: { title: string; paragraphs: string[]; items?: string[] }[];
}
// Prepared during Phase 6. Owner has deferred identity/hosting/retention decisions.
// These new documents are not included in approval of the earlier review material.
export const legalDocuments: Record<"privacy" | "terms", LegalDocument> = {
  privacy: {
    title: "Privacy notice",
    description:
      "How this Butter preview handles enquiry information, cookies and website data, with pending operating details clearly identified.",
    sections: [
      {
        title: "Who is responsible",
        paragraphs: [
          "Butter is an independent digital learning studio based in Devon. The legal trading identity, public privacy contact and hosting details have not yet been confirmed. They must be added before this notice can be finalised and the enquiry service enabled.",
        ],
      },
      {
        title: "Information in an enquiry",
        paragraphs: [
          "When enabled, the form will send the name, email, project brief and any optional organisation, support, budget or timeframe you choose to provide. Please avoid including sensitive personal information or confidential project material.",
          "The intended purpose is to understand your request and respond about possible services. The final notice must confirm the applicable lawful bases and the responsible business identity. Sending an enquiry will not subscribe you to marketing.",
        ],
      },
      {
        title: "Delivery and service providers",
        paragraphs: [
          "Online enquiry delivery is currently disabled. The application will report that a message has not been sent while the email service is unconfigured.",
          "The prepared integration uses Resend to deliver enquiries to Butter’s configured inbox. No delivery account or inbox has been connected. Before enabling it, Butter must confirm the email and hosting providers, their processing arrangements and any international-transfer safeguards that apply.",
          "The website does not store enquiry content in an application database. Once delivery is enabled, the email provider and receiving inbox will process the message under the arrangements confirmed in the final notice. Hosting services may also process request and security logs; their details remain to be confirmed.",
        ],
      },
      {
        title: "Spam protection and retention",
        paragraphs: [
          "The form includes a hidden spam field, request-size limits and server-side attempt limits. Its application-level limiter holds short-lived keyed identifiers and attempt counts in server memory for up to 15 minutes. It does not store the message or a plain IP address in that limiter.",
          "The retention period for enquiry emails, provider records and hosting logs has not been decided. The final notice must state the agreed periods or retention criteria before the service is enabled.",
        ],
      },
      {
        title: "Cookies and analytics",
        paragraphs: [
          "The current website code does not set analytics or marketing cookies and does not load an analytics service. Fonts and website images are served by the site. External source links open only when you choose to follow them.",
          "An event interface has been prepared, but no analytics provider is connected. Any future non-essential measurement must be reviewed for privacy, disclosed here and activated only with the required consent. Hosting behaviour must also be checked before launch.",
        ],
      },
      {
        title: "Your rights and questions",
        paragraphs: [
          "Depending on the circumstances, data protection rights can include access, correction, erasure, restriction, objection and portability. The final notice must provide a working contact for exercising those rights. You can also raise concerns with the UK Information Commissioner’s Office.",
          "A confirmed public contact will be added before launch. This draft does not represent a completed privacy notice or approval of unconfigured services.",
        ],
      },
    ],
  },
  terms: {
    title: "Website terms",
    description:
      "Draft terms covering Butter website information, editorial content, enquiries and the matters that must be confirmed before launch.",
    sections: [
      {
        title: "About this website",
        paragraphs: [
          "This website introduces Butter’s digital learning services and shares practical guidance. Butter’s legal trading identity and business correspondence details must be confirmed before these terms are finalised.",
        ],
      },
      {
        title: "Information and editorial guidance",
        paragraphs: [
          "Service information helps you understand the available types of support. The precise scope, deliverables, responsibilities, fees and timescales for any project must be agreed separately.",
          "Articles provide general practical guidance. They do not establish that a particular course, platform or organisation meets a legal or accessibility standard. Check the referenced sources and the requirements that apply to your circumstances.",
        ],
      },
      {
        title: "Enquiries and project agreements",
        paragraphs: [
          "Submitting an enquiry does not create a service contract or confirm availability, pricing or a delivery date. No response-time commitment is made on this website.",
          "While the delivery service is unconfigured, the form cannot send an enquiry. When enabled, a provider acceptance message means the delivery service accepted the request; it does not itself prove that a person has read the email. Project terms will need to be agreed separately before work starts.",
        ],
      },
      {
        title: "Website content and temporary images",
        paragraphs: [
          "The website includes owner-supplied material and editorial content approved for the site. Third-party references and software retain their respective rights. This page does not grant rights to reuse third-party work.",
          "Images labelled AI-generated placeholder are temporary illustrations. They are not real client projects, endorsements, Butter staff photographs or final brand artwork. Daniel’s founder portrait is supplied separately from his CV.",
        ],
      },
      {
        title: "External links and responsible use",
        paragraphs: [
          "Source links are provided for context. Their operators control their content and privacy practices; a reference is not a claim of partnership or endorsement.",
          "Please use the website lawfully and avoid attempts to disrupt it, misuse the enquiry service or submit information you are not entitled to share.",
        ],
      },
      {
        title: "Final review before launch",
        paragraphs: [
          "These draft website terms require review against the confirmed trading identity and operating arrangements. Applicable-law, responsibility and any further legally required provisions must be confirmed before publication as final terms. The site is still a development preview.",
        ],
      },
    ],
  },
};
