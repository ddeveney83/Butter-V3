import { z } from "zod";

export const supportOptions = [
  { value: "", label: "Not sure yet" },
  {
    value: "elearning-design-development",
    label: "eLearning Design & Development",
  },
  { value: "learning-platforms-lms", label: "Learning Platforms & LMS" },
  {
    value: "learning-strategy-consultancy",
    label: "Learning Strategy & Consultancy",
  },
  { value: "ongoing-learning-support", label: "Ongoing Learning Support" },
] as const;
const singleLine = (max: number) =>
  z
    .string()
    .trim()
    .max(max, `Use ${max} characters or fewer.`)
    .regex(/^[^\r\n\u0000-\u001f\u007f]*$/, "Use a single line of text.");
export const enquirySchema = z
  .object({
    name: singleLine(100).min(1, "Enter your name."),
    email: singleLine(254)
      .min(1, "Enter your work email.")
      .pipe(z.email("Enter a valid email address.")),
    organisation: singleLine(150).default(""),
    support: z
      .enum([
        "",
        "elearning-design-development",
        "learning-platforms-lms",
        "learning-strategy-consultancy",
        "ongoing-learning-support",
      ])
      .default(""),
    brief: z
      .string()
      .trim()
      .min(
        10,
        "Tell us a little more about your project (at least 10 characters).",
      )
      .max(5000, "Keep your brief to 5,000 characters.")
      .regex(
        /^[^\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]*$/,
        "Remove control characters from your message.",
      ),
    budget: singleLine(100).default(""),
    timeline: singleLine(100).default(""),
    privacy: z.literal(true, {
      error: "Acknowledge the privacy notice before sending.",
    }),
    website: z.string().max(200).default(""),
  })
  .strict();
export type Enquiry = z.infer<typeof enquirySchema>;
export type EnquiryErrors = Partial<Record<keyof Enquiry, string>>;
export function enquiryErrors(error: z.ZodError): EnquiryErrors {
  const errors: EnquiryErrors = {};
  for (const issue of error.issues) {
    const field = issue.path[0] as keyof Enquiry;
    if (field && !errors[field]) errors[field] = issue.message;
  }
  return errors;
}
