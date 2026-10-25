# Contact delivery setup

Phase 6 includes a working server-side integration and a finished enquiry form. The owner explicitly deferred the inbox/provider setup and does not yet know the legal identity, hosting or retention arrangements. **CONTACT_ENABLED remains false. No live test email has been sent or received.** The preview reports unconfigured delivery as an error, never success. The prepared integration uses Resend; no account, paid service or sending domain has been created or connected.

## What is implemented

The browser and server share Zod validation. Required: name, work email, a 10–5,000-character project brief and privacy acknowledgement. Organisation, support type, budget and timeframe are optional. Unknown fields and unsupported support types are rejected; single-line inputs reject control/header characters. There is no marketing subscription, file upload or application database.

POST `/api/contact` accepts same-origin JSON only, rejects cross-site requests, limits streamed bodies to 32 KiB, checks the hidden spam field and applies attempt limits. A configured canonical origin takes precedence over the request host; without it, the actual Host is checked because Next may normalise its internal Request URL. Requests with absent/mismatched Origin fail. Unsupported methods return 405.

The server fixes the recipient/from address and provider endpoint. The visitor's validated email is reply_to, never the sender or destination. User content is included as plain text, with a fixed subject. Secrets remain server-only. A 10-second provider timeout, no redirect following, keyed idempotency and generic error responses prevent false acknowledgement and secret leakage. Only a successful provider response with an accepted message ID returns success. Provider acceptance is not proof of inbox delivery or a human reading the message.

The form preserves entries on failure, prevents duplicate submissions, announces status and moves focus to the response. It resets only on accepted delivery. Browser requests time out after 15 seconds. Analytics events have an explicit consent-gated adapter and fixed aggregate properties; no provider is installed, so the interface currently sends nothing and sets no cookies.

## Complete later, before enabling delivery

1. Confirm Butter's legal trading identity, approved public privacy/contact address, hosting and enquiry-retention arrangements. Finish and approve `/privacy` and `/terms` for the actual services. No private residential address is inferred from the CV.
2. Choose the provider. If using the prepared Resend integration, configure its account and verify the owner-controlled sending domain and required DNS records. Review provider processing/transfer/retention terms. A different provider can replace the server adapter without changing the form.
3. Configure environment secrets in the actual hosting environment (never Git/chat/client variables): `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`, and a random `CONTACT_RATE_LIMIT_SECRET` of at least 32 characters. From/to values are plain email addresses, not display-name strings. Generate the random secret securely, for example with `openssl rand -hex 32`, and save it directly to the secret manager.
4. Set the approved HTTPS `SITE_URL` and verify origin handling on the chosen host. `CONTACT_PUBLIC_EMAIL` is optional and independent from the private receiving inbox; only set it to an address approved for visitors to see.
5. Configure anti-spam protection for the hosting topology. The built-in limits are per process: five attempts per keyed identity per 15 minutes when configured, twenty in the unconfigured shared bucket, and sixty globally per process. Capacity is bounded to 10,000 buckets and identifiers expire after 15 minutes. No raw IP or message is stored by the limiter. `CONTACT_TRUSTED_PROXY=netlify` trusts only Netlify's `x-nf-client-connection-ip`, and only when the app is actually behind that trusted platform. Never select it on a directly reachable host. Otherwise visitors share the unidentified bucket; arbitrary forwarded-for is never trusted. Multi-instance/global enforcement must be supplied by the chosen host's edge/shared limit before launch.
6. After legal/provider/DNS checks, set `CONTACT_ENABLED=true` and restart/redeploy. Missing or malformed configuration still fails closed. Keep `ENABLE_DESIGN_REVIEW=false` on public hosts.
7. Submit one authorised controlled enquiry and confirm the actual message arrives in the intended inbox, the reply-to is correct, and the provider logs match. Also verify invalid input, spam/rate limits, provider errors/timeouts and the no-false-success paths. The current tests use synthetic provider responses and are not receipt evidence.
8. Review privacy text against actual hosting logs, inbox/provider retention, transfers and user-rights contact. No analytics activation is implied: a future adapter needs an approved provider, appropriate disclosure and consent, then tests with no enquiry PII.

Identical enquiry payloads share a keyed Resend idempotency key to reduce duplicate sends after ambiguous retries. Review the provider's current idempotency policy during account setup. A timeout can be ambiguous, so the UI says delivery could not be confirmed rather than claiming that an accepted message was never sent.

## References checked during implementation

Next's installed route-handler documentation (stable App Router Request/Response APIs) and Resend's official `resend-node` source (`src/emails/emails.ts`, `/emails` creation) informed the adapter. Native server fetch avoids adding a provider SDK. Zod 4.6.7, already in the dependency tree, is now an explicit pinned runtime dependency for shared validation.
