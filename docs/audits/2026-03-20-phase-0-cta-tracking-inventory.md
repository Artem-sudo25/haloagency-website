# HaloAgency Phase 0 CTA And Form Tracking Inventory

Date: March 20, 2026

## Purpose

This document captures the current lead-capture and conversion-tracking baseline before the website restructure begins.

The goal is simple:

1. Know which forms currently submit leads
2. Know which surfaces fire Meta / GTM / HaloTrack events
3. Preserve attribution coverage during Phase 1 to Phase 6
4. Identify the current tracking gaps before pages are rewritten

---

## Current Tracking Stack

### Core pieces in use

- `app/layout.tsx` initializes `gtag` / `dataLayer` and consent defaults
- `components/analytics/ConsentScripts.tsx` loads Meta Pixel and browser-side pageview tracking
- `lib/consent.ts` manages consent mode updates
- `lib/halotrack.ts` provides HaloTrack session access, event tracking, and optional direct lead forwarding
- `/api/webhook/lead` is the main lead intake endpoint
- `/api/audit` is still used by the website audit lead magnet as a separate flow

### Important baseline observation

The current site does not have a broad CTA click-tracking layer for header CTAs, hero buttons, pricing buttons, or case-study CTA clicks.

Today, the measurement system is mostly submission-based:

- form submitted
- lead posted
- Meta `Lead` fired
- GTM / dataLayer event fired
- optional HaloTrack event fired

That means Phase 1 should preserve form-submit tracking first and only then expand click-level measurement.

---

## Inventory

| Surface | Main file | Lead intake | HaloTrack event API | Meta Pixel | GTM / dataLayer | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Contact modal | `components/ui/contact-modal.tsx` | `/api/webhook/lead` | `contact_form_submit` | `Lead` with `content_name: contact_modal` | `generate_lead_v2` | Most complete generic contact flow; used across multiple page types |
| Contact section | `components/sections/Contact.tsx` | `/api/webhook/lead` | None | None | None | Sends lead server-side only; no matching browser conversion events |
| Growth plan magnet | `components/sections/GrowthPlanMagnet.tsx` | `/api/webhook/lead` | `growth_plan_submit` | `Lead` with `content_name: growth_plan` | `generate_lead_v2` | Good baseline for main-site lead magnets |
| Ads lead magnet | `components/sections/AdsLeadMagnet.tsx` | `/api/webhook/lead` | `ads_lead_submit` | `Lead` with `content_name: ads_magnet` | `generate_lead_v2` | Main `/ads` conversion unit |
| Web project form | `components/sections/WebProjectForm.tsx` | `/api/webhook/lead` | `web_project_lead` | `Lead` with `content_name: web_project` | `generate_lead_v2` | High-intent multi-step web lead flow |
| Website audit lead magnet | `components/sections/LeadMagnet.tsx` | `/api/audit` | `audit_submit` | `Lead` with `content_name: website_audit` | None | Divergent flow; also sends a direct HaloTrack lead via `sendLeadToHaloTrack()` |
| Tracking audit form | `components/sections/TrackingAudit.tsx` | `/api/webhook/lead` | None | None | None | Server lead exists, but browser conversion coverage is missing |
| Audit consultation LP | `app/lp/audit/AuditLPClient.tsx` | `/api/webhook/lead` | `audit_consultation_submit`, `audit_consultation_timeline` | `Lead` with `content_name: audit_consultation` | `generate_lead_v2` | Best tracked LP; includes post-submit timeline signal |
| Meta Ads LP | `app/lp/meta-ads/MetaAdsLPClient.tsx` via `app/lp/_components/PaidAdsLPTemplate.tsx` | `/api/webhook/lead` | None | `Lead` with `content_name: lp_meta_ads` | `generate_lead_meta_ads` | Uses shared LP template; phone-first user data |
| Google Ads LP | `app/lp/google-ads/GoogleAdsLPClient.tsx` via `app/lp/_components/PaidAdsLPTemplate.tsx` | `/api/webhook/lead` | None | `Lead` with `content_name: lp_google_ads` | `generate_lead_google_ads` | Uses shared LP template; phone-first user data |
| Web development LP | `app/lp/web-development/WebDevelopmentLPClient.tsx` | `/api/webhook/lead` | None | `Lead` with `content_name: website_web_development` | `generate_lead_web_development` | Dedicated LP tracking pattern |
| Landing page LP | `app/lp/landing-page/LandingPageLPClient.tsx` | `/api/webhook/lead` | None | `Lead` with `content_name: landing_page_lp` | `generate_lead_landing_page` | Dedicated LP tracking pattern |
| Legacy LP v2 | `app/lp/v2/LPV2Client.tsx` | `/api/webhook/lead` | None | `Lead` with `content_name: growth_audit_v2` | `generate_lead_v2` | Legacy LP still live and trackable |
| Legacy LP v3 | `app/lp/v3/LPV3Client.tsx` | `/api/webhook/lead` | None | `Lead` with `content_name: website-demo-v3` | `generate_lead_v3` | Legacy LP still live and trackable |
| Experimental LP | `app/lp/experimental/ExperimentalLPClient.tsx` | `/api/webhook/lead` | None | None | None | Weakest LP measurement; server-side lead only |

---

## Current Event Name Inventory

### HaloTrack event API events

- `ads_lead_submit`
- `audit_consultation_submit`
- `audit_consultation_timeline`
- `audit_submit`
- `contact_form_submit`
- `growth_plan_submit`
- `web_project_lead`

### GTM / dataLayer events

- `generate_lead_google_ads`
- `generate_lead_landing_page`
- `generate_lead_meta_ads`
- `generate_lead_v2`
- `generate_lead_v3`
- `generate_lead_web_development`

### Lead `type` values currently sent to backends

- `ads-lead`
- `audit-consultation`
- `contact`
- `growth-audit-experimental`
- `growth-audit-v2`
- `growth-plan`
- `meta-ads-plan`
- `google-ads-plan`
- `tracking-audit`
- `web-project`
- `website`
- `website-demo-v3`

There are also some older or inconsistent type values still present in the codebase, including `growth_plan`, `audit`, `v2`, `v3`, `landing-page`, `web-development`, and `experimental`. Those should not be normalized in Phase 0, but they should be cleaned up before or during the larger tracking rewrite.

---

## Key Gaps

### 1. Main-site form tracking is inconsistent

Some important forms are fully instrumented, while others only submit to the server:

- `components/ui/contact-modal.tsx` is well instrumented
- `components/sections/Contact.tsx` is not
- `components/sections/TrackingAudit.tsx` is not
- `app/lp/experimental/ExperimentalLPClient.tsx` is not

This means conversion reporting quality depends on which form a visitor chooses.

### 2. Website audit uses a separate pipeline

`components/sections/LeadMagnet.tsx` submits to `/api/audit` instead of the main `/api/webhook/lead` endpoint, and then separately forwards a lead to HaloTrack.

That may be intentional, but it creates a branching data model right before the site restructure.

### 3. Naming is not standardized

The codebase currently mixes:

- business event names
- GTM event names
- lead `type` values
- LP-specific identifiers

Examples:

- `web_project_lead` vs `contact_form_submit`
- `growth-plan` vs `growth_plan`
- `website` vs `website-demo-v3`
- `generate_lead_v2` reused across unrelated surfaces

This is workable, but it is not a clean foundation for a larger multi-page architecture.

### 4. CTA click tracking is mostly absent

No clear click-event layer was found for:

- header CTA buttons
- hero CTA buttons
- pricing CTA buttons
- package CTA buttons
- case-study CTA buttons

Today the site mostly measures the bottom of the funnel, not movement into the funnel.

---

## Guardrails For Phase 1+

### Preserve first

Before changing any page structure, preserve these working behaviors:

- lead posts to `/api/webhook/lead`
- Meta `Lead` event with deduplication ID where already present
- GTM / dataLayer push where already present
- HaloTrack session capture where already present

### Do not silently rename

Do not rename these in the middle of page rewrites without a migration decision:

- current `type` values
- current GTM event names
- current HaloTrack event names
- `source` values used by live funnels

If any naming cleanup happens, it should be done as an explicit tracking refactor with mapping documentation.

### Recommended next tracking step after Phase 1 foundation

Once the new architecture is in place, implement a dedicated tracking normalization pass:

1. Standardize lead `type`, `source`, and `landing_page_type`
2. Add missing browser conversion tracking to `Contact`, `TrackingAudit`, and `ExperimentalLPClient`
3. Add CTA click tracking for top-level routing buttons
4. Define a canonical event naming system for main site vs LPs

---

## Phase 0 Conclusion

The site already has enough measurement infrastructure to safely begin the restructure, but not enough consistency to treat current reporting as clean.

The practical takeaway is:

- the lead plumbing exists
- the best-performing forms are trackable
- measurement is fragmented across page families
- Phase 1 must preserve existing submit tracking while we restructure navigation and page roles
