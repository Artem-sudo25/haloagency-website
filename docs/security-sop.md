# Security SOP — Next.js Marketing Sites (HaloAgency Stack)

This is the baseline security checklist for any new Next.js site built on the
HaloAgency stack (App Router, lead forms → `/api/webhook/lead`, HaloTrack
attribution, GTM/PostHog/Meta Pixel tracking, Resend email, optional n8n
automation). Apply this when starting a new project or auditing an existing
one. Findings from the 2026-06-11 audit of haloagency-website are baked in
below.

## 1. Environment variables & secrets

- [ ] `.env*` is in `.gitignore` and **nothing** under `.env*` is tracked by git
      (`git ls-files | grep -i env` should return nothing).
- [ ] **`NEXT_PUBLIC_*` vars are public by definition** — Next.js inlines them
      into the client JS bundle at build time. Never put a secret, API key, or
      auth token behind a `NEXT_PUBLIC_` name. If a value needs a
      `NEXT_PUBLIC_` prefix (e.g. a domain name, a GTM container ID, a Pixel
      ID), confirm it's genuinely OK for any visitor to read it in devtools.
- [ ] **Never reuse the same secret value for two different purposes**
      (e.g. one secret used both as a server-only HMAC key *and* as a value
      sent to the browser). If they must be the same secret today, that's a
      sign one of the two uses shouldn't exist.
- [ ] Every secret used for server-to-server auth (webhook secrets, API keys,
      HMAC keys) must only ever be referenced via `process.env.X` in code that
      runs on the server (API routes, Server Components, `after()` blocks) —
      never inside a `"use client"` component or any file that ships to the
      browser.
- [ ] Do a periodic grep before launch:
      `grep -rn "NEXT_PUBLIC_.*SECRET\|NEXT_PUBLIC_.*KEY\|NEXT_PUBLIC_.*TOKEN" --include="*.ts" --include="*.tsx" .`
      — any hit is a candidate for removal/rename.

## 2. Lead-capture API routes (`/api/webhook/lead` pattern)

- [ ] Validate the request body with a zod schema (`.passthrough()` if you
      need to forward arbitrary extra fields to n8n/HaloTrack). Reject with
      400 on `safeParse` failure. Cap string lengths (name/email/phone ≤ a few
      hundred chars) to stop abuse payloads.
- [ ] If the route only exists to receive submissions from your own forms,
      **don't gate it with a "secret" the browser must send** — a browser
      can't hold a real secret. Public lead-capture endpoints are inherently
      public; rely on validation + rate limiting + honeypot instead (see §4).
- [ ] Any value interpolated into an HTML email body (admin notification,
      etc.) must be HTML-escaped. User-controlled `name`, `phone`, `email`,
      and any free-text fields are all attacker-controlled input.
- [ ] Server-to-server calls (this app → HaloTrack, this app → n8n) should use
      a dedicated, server-only secret, ideally with HMAC signing
      (timestamp + body hash) rather than a raw shared-secret header alone.
      Keep that secret out of `NEXT_PUBLIC_*` entirely.

## 3. Security headers (`next.config.ts`)

Every project should set, at minimum:

```ts
async headers() {
  return [
    {
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      ],
    },
  ];
}
```

- [ ] `poweredByHeader: false` in `next.config.ts`.
- [ ] A Content-Security-Policy is **not** included by default in this
      checklist because it must be tailored per project (it depends on which
      tracking scripts — GTM, Meta Pixel, PostHog, HaloTrack — are loaded).
      See the CSP rollout plan for how to add one safely.

## 4. Spam / abuse protection on forms

- [ ] Every public form should include a honeypot field (a hidden input that
      real users never fill in; bots often do). Server rejects/silently drops
      submissions where it's filled.
- [ ] Consider basic rate limiting on `/api/webhook/lead` (e.g. by IP, via
      Vercel/Upstash rate limiting) once traffic justifies it.
- [ ] Don't rely on a client-sent "secret" as spam protection (see §1/§2) —
      it's visible to anyone and to bots that read the bundle.

## 5. Tracking & consent (GTM / PostHog / Meta Pixel / HaloTrack)

- [ ] Consent Mode v2 defaults to denied for `ad_storage`,
      `ad_user_data`, `ad_personalization` until the user accepts
      (see `lib/consent.ts` pattern).
- [ ] HaloTrack session/event calls happen client-side to
      `https://${NEXT_PUBLIC_HALOTRACK_DOMAIN}` — this is fine (no secret
      involved), but lead *submission* with attribution data should go through
      your own `/api/webhook/lead` and be forwarded server-side, not posted
      directly from the browser to HaloTrack with a secret header.

## 6. General code hygiene

- [ ] No `dangerouslySetInnerHTML` except for `JsonLd`-style structured data
      where the input is a server-constructed object, never raw user input.
- [ ] Run `npx tsc --noEmit` and `npm run build` before considering a security
      change complete.
- [ ] Don't commit n8n workflow exports / automation JSON files containing
      live API keys or tokens — scrub credential fields before committing, or
      keep them out of the repo entirely.

## 7. Pre-launch checklist (quick pass)

1. `git ls-files | grep -i env` → empty
2. `grep -rn "NEXT_PUBLIC_.*SECRET\|NEXT_PUBLIC_.*KEY" .` → empty (or justified)
3. `next.config.ts` has the headers block from §3
4. `/api/webhook/lead` (or equivalent) validates input with zod and escapes
   any value used in HTML email
5. Forms have a honeypot field
6. `npm run build` passes

## Appendix A: Reusable prompt — implement form honeypot on any site

Copy-paste the prompt below into a fresh Claude Code chat opened in the
target website's repo. It is self-contained (no prior context needed).
Reference implementation: `components/ui/honeypot.tsx` +
`app/api/webhook/lead/route.ts` in `haloagency-website` and
`haloagency-starter` (2026-06-11).

---

> Add honeypot anti-spam protection to every lead/contact form on this
> website. No CAPTCHA, no external dependencies — just a hidden field that
> bots fill in and real users never see, checked server-side.
>
> **Step 1 — map the territory.** Find the API route(s) that receive form
> submissions (search for `fetch(` calls in form components and for
> `app/api/**/route.ts` handlers). Then list every form component that posts
> to them (e.g. `grep -rl "api/webhook/lead" --include="*.tsx" .` — adapt the
> endpoint path to this project). Show me the list before editing.
>
> **Step 2 — reusable client hook.** Create `components/ui/honeypot.tsx`:
>
> ```tsx
> "use client";
>
> import { useId, useRef } from "react";
>
> /**
>  * Honeypot field name. Must match the field checked server-side in the
>  * lead API route — submissions with a non-empty value are silently
>  * dropped there.
>  */
> export const HONEYPOT_FIELD = "website_url";
>
> /**
>  * Anti-spam honeypot: a visually hidden input that real users never see
>  * or fill, but bots that auto-fill every form field will populate.
>  *
>  * The input is uncontrolled and read from the DOM at submit time, so it
>  * also catches bots that type into the rendered form instead of posting
>  * to the API directly. Hidden via off-screen positioning (not
>  * `display:none`) because some bots skip display-none fields.
>  */
> export function useHoneypot() {
>   const id = useId();
>   const ref = useRef<HTMLInputElement>(null);
>
>   const field = (
>     <div
>       aria-hidden="true"
>       className="absolute -left-[9999px] h-px w-px overflow-hidden"
>     >
>       <label htmlFor={id}>Your website</label>
>       <input
>         ref={ref}
>         id={id}
>         type="text"
>         name={HONEYPOT_FIELD}
>         tabIndex={-1}
>         autoComplete="off"
>         defaultValue=""
>       />
>     </div>
>   );
>
>   return {
>     field,
>     value: () => ref.current?.value ?? "",
>   };
> }
> ```
>
> (If the project doesn't use Tailwind, replace the className with an
> equivalent inline off-screen style — but never `display:none`.)
>
> **Step 3 — server-side check (do this before touching forms).** In each
> lead API route, right after parsing the JSON body:
> - If the route uses zod, add `website_url: z.string().max(500).optional()`
>   to the schema.
> - If `website_url` is non-empty: log something like
>   `"Honeypot triggered, dropping lead silently"` and immediately return the
>   SAME success response a real lead gets (e.g.
>   `NextResponse.json({ success: true, message: "Lead processed" })`).
>   Do NOT send email / CRM / n8n / analytics calls, and do NOT return an
>   error — bots must not be able to tell they were caught.
> - Strip `website_url` from the body before it's forwarded anywhere
>   downstream, so the empty field doesn't pollute payloads.
>
> **Step 4 — wire every form.** For each form component found in step 1
> (works for both react-hook-form and useState-controlled forms, no
> registration needed):
> 1. `import { HONEYPOT_FIELD, useHoneypot } from "@/components/ui/honeypot";`
> 2. `const honeypot = useHoneypot();` inside the component that renders the form
> 3. `{honeypot.field}` as the first child inside the `<form>` element
> 4. Add `[HONEYPOT_FIELD]: honeypot.value(),` to the JSON body sent to the API
>
> Never add validation rules to this field — it must always be allowed to be
> empty.
>
> **Step 5 — verify (don't skip).**
> 1. `npm run build` passes (and lint on the touched files).
> 2. Start the dev server. `curl -X POST` the lead endpoint twice: once with
>    `"website_url": "http://spam.example.com"` in the body and once with
>    `"website_url": ""`. Both must return the same 200 success response,
>    but server logs must show the honeypot log line ONLY for the first, and
>    downstream side effects (email/CRM/analytics attempts) ONLY for the
>    second.
> 3. `curl -sL` a page containing a form and confirm the rendered HTML
>    contains `name="website_url"` (note: lazy-loaded forms only mount it
>    client-side — that's fine).
>
> When done, list every file you changed and confirm each acceptance check
> above explicitly.

---
