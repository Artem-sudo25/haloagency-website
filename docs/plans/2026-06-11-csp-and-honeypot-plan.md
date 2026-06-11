# Plan: CSP rollout + form honeypot/spam protection

Context: follow-up from the 2026-06-11 security audit
(see [docs/security-sop.md](../security-sop.md)). Two changes were deferred
because they touch many files / have higher risk of breaking tracking if done
carelessly. This plan is written so it can be executed in a fresh chat with no
prior context.

Already done (do not redo): removed `NEXT_PUBLIC_HALOTRACK_WEBHOOK_SECRET`
exposure, removed the now-pointless `WEBHOOK_SECRET` check in
`/api/webhook/lead`, added zod validation + HTML-escaping to
`app/api/webhook/lead/route.ts`, added baseline security headers (excluding
CSP) to `next.config.ts`.

**Change 2 (honeypot) was implemented on 2026-06-11** via a reusable
`useHoneypot()` hook in `components/ui/honeypot.tsx` (also ported to
`haloagency-starter`). All 12 forms + the server-side check are done and
verified. Only Change 1 (CSP) remains.

---

## Change 1: Content-Security-Policy (CSP)

### Why
No CSP is currently set. A CSP mitigates XSS by restricting which script/
style/connect/img sources the browser will load. High risk if done wrong:
GTM, Meta Pixel, PostHog, HaloTrack, and Vercel Speed Insights all load
external scripts and make their own network calls — a too-strict CSP silently
breaks tracking (no console errors visible to a normal user, only in devtools
console as CSP violations).

### Known external origins in use (verified 2026-06-11)

- `https://www.googletagmanager.com` — GTM container + `www.google-analytics.com`
- `https://connect.facebook.net` — Meta Pixel
- `https://us.i.posthog.com`, `https://us-assets.i.posthog.com`,
  `https://eu.i.posthog.com`, `https://eu-assets.i.posthog.com` — PostHog
  (depends on `NEXT_PUBLIC_POSTHOG_HOST` — check which region is configured)
- `https://${NEXT_PUBLIC_HALOTRACK_DOMAIN}` (e.g. `track.haloagency.cz`) —
  HaloTrack `t.js`, session/event endpoints
- Vercel Speed Insights (`/_vercel/insights/*`, same-origin via Next.js)
- GTM and Meta Pixel both inject **inline scripts** — a CSP with `script-src`
  will need either `'unsafe-inline'` (weaker) or a nonce-based approach
  (stronger, more work — requires wiring a per-request nonce through
  `middleware.ts` and `<Script>` tags).

### Steps

1. Re-grep for current external origins before starting (script tags, fetch
   calls, image domains in `next.config.ts` `images.remotePatterns`), since
   new integrations may have been added since this plan was written:
   ```
   grep -rohE "https?://[a-zA-Z0-9.-]+" --include="*.tsx" --include="*.ts" app components lib | sort -u
   ```
2. Start with **`Content-Security-Policy-Report-Only`** (not enforcing) added
   via the `headers()` block in `next.config.ts`, so violations are logged in
   the browser console without breaking anything:
   ```ts
   {
     key: "Content-Security-Policy-Report-Only",
     value: [
       "default-src 'self'",
       "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://connect.facebook.net https://*.i.posthog.com https://${HALOTRACK_DOMAIN}",
       "connect-src 'self' https://www.google-analytics.com https://*.i.posthog.com https://${HALOTRACK_DOMAIN}",
       "img-src 'self' data: https://www.googletagmanager.com https://www.facebook.com",
       "style-src 'self' 'unsafe-inline'",
       "frame-src 'self' https://www.googletagmanager.com",
       "base-uri 'self'",
       "form-action 'self'",
     ].join("; "),
   }
   ```
   Replace `${HALOTRACK_DOMAIN}` with the literal domain (CSP header values
   can't use `process.env` interpolation directly inside the array the way
   shown — build the string with a template literal using
   `process.env.NEXT_PUBLIC_HALOTRACK_DOMAIN` in `next.config.ts`).
3. Deploy to a preview environment. Browse the site (homepage, a landing page,
   submit a lead form, accept/reject cookie consent) and check the browser
   console for `Content-Security-Policy-Report-Only` violation messages. Fix
   the policy until there are no unexpected violations.
4. Once clean for a few days of real traffic, switch the header key from
   `Content-Security-Policy-Report-Only` to `Content-Security-Policy` to
   start enforcing.
5. Re-test the same flows (forms, consent banner, GTM events firing in GTM
   Preview mode, PostHog events arriving, Meta Pixel events in Events
   Manager test mode) after enforcement is turned on.

### Acceptance criteria
- No CSP violations in console during normal browsing + form submission.
- GTM tags fire (verify in GTM Preview mode).
- PostHog events still arrive (check PostHog Activity).
- Meta Pixel events still fire (Meta Events Manager test events).
- HaloTrack `t.js` loads and session cookie (`_halo`) is set.
- `npm run build` passes.

---

## Change 2: Honeypot field on lead forms

### Why
`/api/webhook/lead` has no spam protection beyond basic validation. A hidden
honeypot field is the lowest-effort, lowest-risk anti-spam measure (no
external dependency, no CAPTCHA UX friction).

### Affected files (all forms posting to `/api/webhook/lead`)

- `components/sections/Contact.tsx`
- `components/sections/DemoForm.tsx`
- `components/sections/GrowthPlanMagnetForm.tsx`
- `app/[locale]/(site)/ads/_components/AdsLeadForm.tsx`
- `app/[locale]/lp/audit/AuditLPClient.tsx`
- `app/[locale]/lp/experimental/ExperimentalLPClient.tsx`
- `app/[locale]/lp/v2/LPV2Client.tsx`
- `app/[locale]/lp/v3/LPV3Client.tsx`
- `app/[locale]/lp/web-development/WebDevelopmentLPClient.tsx`
- `app/[locale]/lp/landing-page/LandingPageLPClient.tsx`
- `app/[locale]/lp/lp-discount/LPDiscountClient.tsx`
- `app/[locale]/lp/_components/PaidAdsLPTemplate.tsx`
- Plus `app/api/webhook/lead/route.ts` (server-side check)

(Re-run
`grep -rl "api/webhook/lead" --include="*.tsx" .`
to catch any new forms added since this plan was written.)

### Steps

1. **Server side first** (`app/api/webhook/lead/route.ts`):
   - Add an optional field to `leadPayloadSchema`, e.g. `website_url:
     z.string().max(0).optional()` — a field real users will never see or
     fill, but bots that auto-fill all inputs often will.
   - After parsing, if `body.website_url` is non-empty: return
     `NextResponse.json({ success: true })` immediately (pretend success, do
     nothing) — don't reveal to the bot that it was caught.
2. **Each form component**:
   - Add a hidden input to the form JSX, visually hidden (not `display:none`
     via inline style alone — use an off-screen technique like
     `className="absolute -left-[9999px] w-px h-px overflow-hidden"` plus
     `tabIndex={-1}` and `autoComplete="off"`, since some bots skip
     `display:none` fields).
   - Field name should match the schema, e.g. `name="website_url"`.
   - Include its value in the JSON body sent to `/api/webhook/lead`
     (e.g. `website_url: formData.website_url ?? ""` or read via a
     `useState`/`register` depending on whether the form uses
     react-hook-form).
   - For react-hook-form-based forms (Contact, DemoForm, etc.), register the
     field with `register("website_url")` and don't add any validation rule
     to it (it must always be allowed to be empty).

3. Test: submit each form normally (field empty) → lead processed as before.
   Manually POST to `/api/webhook/lead` with `website_url: "spam"` filled →
   verify response is `{ success: true }` but **no** email/n8n/HaloTrack call
   happens (check server logs / Resend dashboard / n8n executions).

### Acceptance criteria
- All forms still submit successfully with the hidden field empty.
- A test POST with the honeypot field filled does not trigger an email,
  n8n call, or HaloTrack push, but still returns a 200 (so bots don't learn
  to avoid the field by checking the response code).
- `npm run build` passes.
