export type ContactEvent =
  "contact_form_start" | "contact_form_success" | "contact_form_error";
type Adapter = (event: ContactEvent, properties: { path: "/contact" }) => void;
let adapter: Adapter | null = null;
let consent = false;
// No analytics service is installed. A future approved integration must provide consent.
// No enquiry values or user-derived event properties are accepted by this interface.
export function configureContactMeasurement(
  next: Adapter | null,
  granted: boolean,
) {
  adapter = next;
  consent = granted;
}
export function recordContactEvent(event: ContactEvent) {
  if (!consent || !adapter) return;
  try {
    adapter(event, { path: "/contact" });
  } catch {
    /* Measurement must not interrupt an enquiry. */
  }
}
