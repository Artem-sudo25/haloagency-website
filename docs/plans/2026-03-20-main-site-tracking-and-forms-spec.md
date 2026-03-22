# HaloAgency Main-Site Tracking And Forms Spec

Date: 2026-03-20

## 1. Scope

This spec applies to the main website only:

- `/`
- `/about`
- `/ads`
- `/web`
- `/tracking`
- `/automation`
- `/case-studies`
- `/packages`
- `/contact`

Paid landing pages under `/lp/*` are frozen during the main-site restructure.

That means:

- no LP copy rewrites
- no LP form rewiring
- no LP tracking changes
- no LP event-name changes

LPs remain a protected paid-traffic system until a dedicated paid-media review is requested.

## 2. Canonical Lead Ingestion Rule

For the current website, the canonical lead-ingestion endpoint is:

- `/api/webhook/lead`

Do not migrate main-site forms to `/api/contact` or any other route during the restructure unless a separate backend migration is approved.

## 3. Main-Site Form Goal

Main-site forms are not phone-first LP forms.

Their job is to:

- capture qualified intent
- provide enough context for follow-up
- remain compatible with the current n8n auto-response workflow
- preserve HaloTrack attribution and lead forwarding

Because the current n8n workflow is email-oriented, main-site forms should remain email-based.

## 4. Required Fields For Main-Site Forms

Every serious main-site lead form should send:

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

Where possible, also send:

- `businessType`
- `mainGoal`
- `mainProblem` or `message`

## 5. Supported Main-Site Lead Types

Use only these lead `type` values for the restructured main site unless n8n is updated:

- `contact`
- `growth-plan`
- `ads-lead`
- `web-project`
- `tracking-audit`

Notes:

- `tracking-audit` currently falls back to a generic path in n8n, but it is still a better main-site choice than inventing a new unsupported type.
- Do not invent new service-page lead types in Phase 1.

## 6. Page Ownership

### Homepage

- Primary conversion route: `/contact`
- Secondary form block: `growth-plan`
- CTA job: route and qualify, not close every offer on-page

### `/contact`

- Main-site general conversion endpoint
- Lead type: `contact`
- Required: email-based submission

### `/ads`

- Main-site commercial / hub intent
- Primary form type: `ads-lead`

### `/web`

- Main-site commercial / hub intent
- Primary form type: `web-project`

### `/tracking`

- Main-site service intent
- Keep current tracking-audit behavior until a deeper automation rewrite

### `/automation`

- Use generic consultation pattern for now
- Lead type: `contact`

## 7. LP Freeze Rules

Do not change any of the following on `/lp/*` during the main-site restructure:

- current lead `type` values
- current `source` values
- Meta Pixel event names
- GTM / `dataLayer` event names
- phone-first form behavior

If LP forms need changes later, treat that as a separate paid-media implementation project.

## 8. Phase 1 Implementation Rule

Phase 1 should focus on:

- main-site navigation
- `/contact`
- homepage CTA routing
- service hub structure

It should preserve the current working lead pipeline while making the main site more coherent.
