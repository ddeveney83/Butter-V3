"use client";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { ArrowUpRight } from "lucide-react";
import {
  enquirySchema,
  enquiryErrors,
  supportOptions,
  type EnquiryErrors,
  type Enquiry,
} from "@/lib/contact/validation";
import { recordContactEvent } from "@/lib/measurement";

function Field({
  name,
  label,
  required = false,
  errors,
  children,
}: {
  name: keyof Enquiry;
  label: string;
  required?: boolean;
  errors: EnquiryErrors;
  children: ReactNode;
}) {
  return (
    <div className="enquiry-field">
      <label htmlFor={name}>
        {label}
        {!required && <span> (optional)</span>}
      </label>
      {children}
      {errors[name] && (
        <p className="field-error" id={`${name}-error`}>
          {errors[name]}
        </p>
      )}
    </div>
  );
}
export function EnquiryForm({ available }: { available: boolean }) {
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const submitting = useRef(false);
  const started = useRef(false);
  const resultRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (status) resultRef.current?.focus();
  }, [status]);
  function showStatus(success: boolean, message: string) {
    setStatus({ success, message });
  }
  const inputAttributes = (name: keyof Enquiry) => ({
    id: name,
    name,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    const data = Object.fromEntries(
      [
        "name",
        "email",
        "organisation",
        "support",
        "brief",
        "budget",
        "timeline",
        "website",
      ].map((key) => [key, fields.get(key) ?? ""]),
    );
    const parsed = enquirySchema.safeParse({
      ...data,
      privacy: fields.get("privacy") === "on",
    });
    setStatus(null);
    if (!parsed.success) {
      const next = enquiryErrors(parsed.error);
      setErrors(next);
      recordContactEvent("contact_form_error");
      requestAnimationFrame(() =>
        form
          .querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)
          ?.focus(),
      );
      return;
    }
    submitting.current = true;
    setPending(true);
    setErrors({});
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        cache: "no-store",
        signal: AbortSignal.timeout(15000),
        body: JSON.stringify(parsed.data),
      });
      const body: unknown = await response.json();
      if (
        !body ||
        typeof body !== "object" ||
        !("ok" in body) ||
        !("message" in body) ||
        typeof body.message !== "string" ||
        body.message.length > 500
      )
        throw new Error("response");
      if (response.ok && body.ok === true) {
        form.reset();
        showStatus(true, body.message);
        recordContactEvent("contact_form_success");
      } else {
        if (
          "errors" in body &&
          body.errors &&
          typeof body.errors === "object"
        ) {
          const next: EnquiryErrors = {};
          for (const key of Object.keys(
            enquirySchema.shape,
          ) as (keyof Enquiry)[]) {
            const value = (body.errors as Record<string, unknown>)[key];
            if (typeof value === "string" && value.length <= 500)
              next[key] = value;
          }
          setErrors(next);
        }
        showStatus(false, body.message);
        recordContactEvent("contact_form_error");
      }
    } catch {
      showStatus(
        false,
        "We could not confirm delivery. Please try again later. Your entries are still in the form.",
      );
      recordContactEvent("contact_form_error");
    } finally {
      submitting.current = false;
      setPending(false);
    }
  }
  return (
    <form
      className="enquiry-form"
      onSubmit={submit}
      noValidate
      aria-label="Project enquiry"
      aria-busy={pending}
      onFocusCapture={() => {
        if (!started.current) {
          started.current = true;
          recordContactEvent("contact_form_start");
        }
      }}
    >
      {!available && (
        <div className="contact-unavailable" role="note">
          <strong>Online enquiries are not available yet.</strong>
          <p>
            The email service is not connected. Submitting this form will not
            send a message.
          </p>
        </div>
      )}
      <p className="form-instructions">
        Name, email, project brief and privacy acknowledgement are required.
        Everything else is optional.
      </p>
      <div className="enquiry-pair">
        <Field name="name" label="Your name" required errors={errors}>
          <input
            {...inputAttributes("name")}
            autoComplete="name"
            maxLength={100}
            required
          />
        </Field>
        <Field name="email" label="Work email" required errors={errors}>
          <input
            {...inputAttributes("email")}
            type="email"
            autoComplete="email"
            maxLength={254}
            required
          />
        </Field>
      </div>
      <div className="enquiry-pair">
        <Field name="organisation" label="Organisation" errors={errors}>
          <input
            {...inputAttributes("organisation")}
            autoComplete="organization"
            maxLength={150}
          />
        </Field>
        <Field name="support" label="Type of support" errors={errors}>
          <select {...inputAttributes("support")} defaultValue="">
            {supportOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field
        name="brief"
        label="Tell us about your project"
        required
        errors={errors}
      >
        <textarea
          {...inputAttributes("brief")}
          rows={7}
          minLength={10}
          maxLength={5000}
          required
          aria-describedby={`brief-help${errors.brief ? " brief-error" : ""}`}
        />
        <p className="field-help" id="brief-help">
          Your audience, the learning challenge and what you would like to
          change. Up to 5,000 characters. Please leave out sensitive or
          confidential information.
        </p>
      </Field>
      <details className="enquiry-options">
        <summary>Add a budget or timeframe (optional)</summary>
        <div className="enquiry-pair">
          <Field name="budget" label="Budget" errors={errors}>
            <input {...inputAttributes("budget")} maxLength={100} />
          </Field>
          <Field name="timeline" label="Timeframe" errors={errors}>
            <input {...inputAttributes("timeline")} maxLength={100} />
          </Field>
        </div>
      </details>
      <div className="enquiry-honeypot" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          autoComplete="off"
          tabIndex={-1}
          maxLength={200}
        />
      </div>
      <div className="enquiry-privacy">
        <label>
          <input {...inputAttributes("privacy")} type="checkbox" required />{" "}
          <span>
            I have read the <Link href="/privacy">privacy notice</Link> and
            understand how my enquiry will be handled.
          </span>
        </label>
        {errors.privacy && (
          <p className="field-error" id="privacy-error">
            {errors.privacy}
          </p>
        )}
      </div>
      <p className="field-help">
        This sends an enquiry only. It does not subscribe you to marketing.
      </p>
      <button className="pill-button" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send enquiry"}
        <ArrowUpRight size={17} aria-hidden="true" />
      </button>
      {status && (
        <div
          ref={resultRef}
          tabIndex={-1}
          role={status.success ? "status" : "alert"}
          className={`enquiry-result ${status.success ? "enquiry-success" : "enquiry-error"}`}
        >
          <strong>
            {status.success ? "Thank you." : "Your enquiry needs attention."}
          </strong>
          <p>{status.message}</p>
        </div>
      )}
      <noscript>
        <p>
          The online form needs JavaScript to submit. Use the contact email if
          one is shown.
        </p>
      </noscript>
    </form>
  );
}
