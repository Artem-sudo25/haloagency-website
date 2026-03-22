# HaloTrack And n8n Compatibility Audit

Date: March 20, 2026

## Purpose

This document maps three things together:

1. The provided HaloAgency tracking kit documentation
2. The current website implementation in this repository
3. The current n8n workflow used for lead-magnet / auto-response handling

The goal is to define what the restructure must preserve and what needs to be normalized so tracking, lead delivery, and automation keep working.

---

## Executive Summary

The current website is already connected to HaloTrack and n8n, but it does **not** match the tracking-kit architecture one-to-one.

The provided tracking kit describes a more standardized system built around:

- `/api/track`
- `/api/contact`
- Supabase visitor and event storage
- GTM + consent-aware tracking provider

This website currently uses a different live pattern:

- `app/layout.tsx` loads the external HaloTrack script
- several forms call `trackFormEvent()` directly to HaloTrack's `/api/event`
- most lead forms submit to `/api/webhook/lead`
- `/api/webhook/lead` fans out to:
  - admin email via Resend
  - n8n via `N8N_WEBHOOK_URL`
  - HaloTrack lead ingestion via `/api/webhook/lead` on the HaloTrack domain

That means the restructure should **not** try to force the site into the tracking-kit file structure during Phase 1.

The correct approach is:

1. keep the current `/api/webhook/lead` contract stable
2. preserve HaloTrack lead forwarding and event IDs
3. normalize form payloads so the current n8n workflow can actually understand them
4. only migrate to the fuller tracking-kit architecture later if that is an explicit backend decision

---

## What The Tracking Kit Describes

From the provided `README.md` and `TRACKING-SETUP.md`, the intended generic HaloAgency kit works like this:

- first-party visitor cookie
- consent-aware tracking provider
- GTM initialization gated by consent
- Supabase tables for visitors, events, and leads
- `/api/track` for server-side event capture
- `/api/contact` for form handling
- server-side forwarding to Meta CAPI and GA4 Measurement Protocol
- Resend email notifications

This is a reusable starter architecture for new client projects.

### Important conclusion

This repo is **not** currently using that exact architecture.

There is no active `/api/track` route in this website, and the main lead ingestion route is `/api/webhook/lead`, not `/api/contact`.

So for this site, the tracking-kit docs should be treated as:

- architecture reference
- implementation direction
- future migration target

But not as the literal current production contract.

---

## Current Website Lead / Tracking Flow

### Main lead path

For most forms, the live flow is:

1. User submits form in the browser
2. Form optionally fires:
   - Meta browser `Lead`
   - GTM / `dataLayer.push`
   - HaloTrack `trackFormEvent()`
3. Form POSTs to `/api/webhook/lead`
4. `/api/webhook/lead`:
   - validates `type` and `phone || email`
   - sends admin email via Resend
   - forwards the raw body to `N8N_WEBHOOK_URL`
   - forwards a transformed lead to HaloTrack's `/api/webhook/lead`

### Key server file

The central integration point is [app/api/webhook/lead/route.ts](/Users/artemhorvatsky/Documents/dev/haloagency-website/app/api/webhook/lead/route.ts).

This route is currently the compatibility boundary the site restructure must preserve.

---

## What The n8n Workflow Actually Expects

The provided workflow file `Lead Magnet Automation (Complete Fix).json` exposes a webhook at:

- `POST /webhook/lead-magnet`

Internally, it expects the incoming request payload under `item.json.body`.

### Minimum validation in the workflow

The workflow's `Validate Data` node only checks:

- `body.email || body.contact`

This is critical.

The website's `/api/webhook/lead` route accepts:

- `type`
- `phone || email`

The n8n workflow is stricter than the website API for auto-response purposes.

### n8n normalization logic

The workflow derives these fields:

- `lead_type` from `body.type`
- `lead_to` from `body.email || body.contact`
- `lead_site` from `body.websiteOrProfile || body.website`
- `lead_business_type` from `body.businessType || body.business_type`
- `lead_goal` from `body.mainGoal || body.goal`
- `lead_problem` from `body.mainProblem || body.message`

### Explicitly supported form types

The `Route by Form Type` node only has dedicated branches for:

- `web-project`
- `growth-plan`
- `ads-lead`
- `contact`

All other types fall through to the `contact` branch.

### Airtable constraints inside the workflow

The Airtable `Form Type` options shown in the workflow are also limited to:

- `web-project`
- `tracking-audit`
- `ads-lead`
- `growth-plan`
- `contact`

This means unsupported or unexpected `type` values are a reliability risk.

### Email-send dependency

The `Send Email` node uses:

- `$('Webhook').item.json.body.email`

So email-based auto-response is fundamentally designed around forms that submit an email address, not phone-only paid LPs.

---

## Compatibility Matrix

| Form surface | Current API path | Current `type` | n8n validation | n8n routing quality | Compatibility status | Main issue |
| --- | --- | --- | --- | --- | --- | --- |
| Growth Plan Magnet | `/api/webhook/lead` | `growth-plan` | Passes | Correct branch | Good | Keep as baseline |
| Ads Lead Magnet | `/api/webhook/lead` | `ads-lead` | Passes | Correct branch | Good | Keep as baseline |
| Web Project Form | `/api/webhook/lead` | `web-project` | Passes | Correct branch | Good | Keep as baseline |
| Contact section | `/api/webhook/lead` | `contact` | Passes | Correct branch | Good | Tracking instrumentation is lighter, but schema is compatible |
| Contact modal | `/api/webhook/lead` | `contact` | Passes | Correct branch | Good | Best current generic contact implementation |
| Tracking Audit | `/api/webhook/lead` | `tracking-audit` | Passes | Falls back to contact | Partial | Wrong AI prompt and weak field mapping |
| Audit consultation LP | `/api/webhook/lead` | `audit-consultation` | Passes | Falls back to contact | Partial | Unsupported type for dedicated automation |
| Meta Ads LP | `/api/webhook/lead` | `meta-ads-plan` | Fails if no email/contact | Not reached reliably | Poor | Phone-first LP is incompatible with email-based validation |
| Google Ads LP | `/api/webhook/lead` | `google-ads-plan` | Fails if no email/contact | Not reached reliably | Poor | Phone-first LP is incompatible with email-based validation |
| Web development LP | `/api/webhook/lead` | `website` | Fails if no email/contact | Not reached reliably | Poor | Phone-first LP is incompatible with email-based validation |
| Landing page LP | `/api/webhook/lead` | `website` | Fails if no email/contact | Not reached reliably | Poor | Phone-first LP is incompatible with email-based validation |
| LP v2 | `/api/webhook/lead` | `growth-audit-v2` | Fails if no email/contact | Not reached reliably | Poor | Phone-first LP is incompatible with workflow validation |
| LP v3 | `/api/webhook/lead` | `website-demo-v3` | Fails if no email/contact | Not reached reliably | Poor | Phone-first LP is incompatible with workflow validation |
| Experimental LP | `/api/webhook/lead` | `growth-audit-experimental` | Passes | Falls back to contact | Partial | Email exists, but branch/prompt is not aligned |
| Website audit lead magnet | `/api/audit` | No standardized lead type in payload to n8n | Passes on raw `email` only | No meaningful branch mapping | Poor | Uses separate API path and incompatible payload shape |

---

## High-Risk Mismatches

### 1. Phone-first LPs do not fit the current n8n workflow

Several LPs submit a phone number but not an email address.

That is acceptable for `/api/webhook/lead`, but the current n8n workflow validates only:

- `body.email || body.contact`

So those LP submissions can:

- succeed at the website API level
- send admin email
- reach HaloTrack
- but fail the auto-response / Airtable automation layer

This is the single biggest compatibility issue.

### 2. The workflow only truly understands four main lead types

The dedicated AI-response logic is only written for:

- `web-project`
- `ads-lead`
- `growth-plan`
- `contact`

Everything else gets treated like a generic contact lead.

That is acceptable for some fallback behavior, but not for a clean conversion system across a restructured site.

### 3. The website audit magnet is on a parallel pipeline

[app/api/audit/route.ts](/Users/artemhorvatsky/Documents/dev/haloagency-website/app/api/audit/route.ts) sends a custom payload directly to `N8N_WEBHOOK_URL`:

- `url`
- `email`
- score and diagnostic data

It does **not** send the canonical lead payload used by `/api/webhook/lead`.

So the website audit flow is not aligned with the lead-magnet automation workflow.

### 4. The kit docs and current implementation describe different backends

The reusable kit expects:

- `/api/contact`
- `/api/track`
- Supabase persistence

The current website uses:

- `/api/webhook/lead`
- external HaloTrack script and event API
- optional direct HaloTrack lead forwarding
- n8n as the auto-response layer

If the restructure assumes the kit is already live here, it will create bad implementation decisions.

---

## Practical Rules For The Website Restructure

### Rule 1: Keep `/api/webhook/lead` as the canonical lead-ingestion endpoint

During the restructure, all main lead forms should continue to submit to:

- `/api/webhook/lead`

unless there is an explicit backend migration project.

### Rule 2: Preserve these fields on every serious lead form

If a form should be compatible with the current HaloTrack + n8n setup, it should send at least:

- `type`
- `email` or `contact`
- `phone` when available
- `name` when available
- `websiteOrProfile` when available
- `source`
- `session_id`
- `lead_id`
- `consent_given`
- `value`
- `currency`

And for richer AI-response forms, also:

- `businessType`
- `mainGoal` or `goal`
- `mainProblem` or `message`

### Rule 3: Separate “AI auto-response” forms from “phone-first paid LP” forms

The current n8n workflow is clearly optimized for email-based leads and AI-generated follow-up emails.

That means there are two valid patterns:

1. **Email-based strategic forms**
   - growth plan
   - ads lead magnet
   - web project form
   - contact form
   - future service consultation forms

2. **Phone-first paid LP forms**
   - should prioritize speed and sales contact
   - should not rely on this current n8n email auto-response workflow unless email is added or the workflow is changed

### Rule 4: Do not silently invent new `type` values during Phase 1

Because the current n8n routing is hardcoded, new service-page forms should either:

- reuse existing supported `type` values intentionally

or

- be introduced together with an n8n workflow update

### Rule 5: Treat the audit form as a migration candidate

The website audit lead magnet should eventually be brought into the same canonical lead schema as the rest of the site.

Right now it is a separate automation path and should be treated as technical debt.

---

## Recommended Tracking / Form Architecture For The Restructure

### Short-term: preserve and normalize

Use the existing live architecture and make it consistent:

1. Main site service forms should use an email-based schema compatible with n8n AI response
2. Paid LPs can remain phone-first, but should be treated as a separate operational flow
3. All service and contact forms should go through `/api/webhook/lead`
4. Existing HaloTrack deduplication and client-side conversion events should be preserved

### Mid-term: tracking normalization pass

After Phase 1 foundation:

1. Define a canonical list of supported lead `type` values
2. Update n8n branches to match the final website architecture
3. Decide which forms deserve AI auto-response and which do not
4. Bring `TrackingAudit` and the website audit magnet into the canonical schema
5. Add CTA click tracking for new homepage and hub-page routing buttons

### Long-term: optional backend migration

Only if desired, migrate this site closer to the generic tracking-kit architecture:

- `/api/contact`
- `/api/track`
- Supabase visitor/event storage
- unified event persistence

That should be a deliberate backend project, not an incidental side effect of the website redesign.

---

## Immediate Implementation Guidance

For the upcoming site restructure, use this operational rule:

- **Homepage, hub pages, service pages, contact page:** email-based forms compatible with current n8n + HaloTrack
- **Paid LPs:** preserve current fast-conversion patterns, but do not assume the current lead-magnet workflow can auto-process them correctly

If we want phone-first LPs to receive proper automated follow-up, then the n8n workflow needs one of these changes:

1. validate `phone || email || contact`, not only `email || contact`
2. support phone-first branches explicitly
3. stop relying on the `Send Email` node for those LP types

---

## Conclusion

The tracking stack is usable and worth preserving, but the current form system has two different realities:

1. a working HaloTrack lead / event layer
2. a narrower, email-oriented n8n auto-response workflow

The restructure should respect that distinction.

The immediate engineering goal is not to rebuild tracking from scratch.

It is to:

- preserve the current lead-ingestion path
- standardize the forms that should feed AI follow-up
- isolate phone-first LP behavior from the assumptions of the current lead-magnet workflow
