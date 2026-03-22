# Main-Site CTA Tracking Pass

Date: 2026-03-20

## Scope

This pass applied to the restructured main site only:

- `/`
- `/about`
- `/contact`
- `/ads`
- `/ads/*`
- `/web`
- `/web/*`
- `/tracking`
- `/automation`
- `/case-studies`
- `/case-studies/*`
- `/packages`
- `/packages/*`

Paid landing pages under `/lp/*` were left untouched.

## What Was Added

### 1. Reusable CTA click tracking

Added:

- [CtaTrackingListener.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/components/analytics/CtaTrackingListener.tsx)
- [site-tracking.ts](/Users/artemhorvatsky/Documents/dev/haloagency-website/lib/site-tracking.ts)

Behavior:

- listens for clicks on elements marked with `data-cta-track="true"`
- pushes a `cta_clicked` event into `dataLayer`
- includes:
  - `cta_name`
  - `cta_location`
  - `cta_category`
  - `cta_href`
  - `page_path`
  - `page_title`

### 2. Contact form browser-side conversion coverage

Upgraded:

- [Contact.tsx](/Users/artemhorvatsky/Documents/dev/haloagency-website/components/sections/Contact.tsx)

Behavior after successful submit:

- includes `lead_id`, `value`, and `currency` in the request body to `/api/webhook/lead`
- fires HaloTrack event `contact_form_submit`
- pushes a browser-side lead event via:
  - Meta `Lead` with `content_name: contact_form`
  - `dataLayer` event `generate_lead_v2`

## Coverage

This pass added explicit CTA markers to the main decision points across the rebuilt routes.

Current count:

- `58` main-site CTA surfaces with `data-cta-track="true"`

Examples covered:

- header desktop/mobile CTA
- homepage hero and final CTA
- ads hub and web hub primary routing CTAs
- service-detail CTA blocks
- case-studies hub and case-study detail CTA blocks
- packages hub and package-detail CTA blocks
- contact page hero and support routes

## Notes

- LP event names and LP form behavior were not changed.
- Existing `layout.tsx` GTM script warnings and `CaseStudyLayout.tsx` image warnings remain outside the scope of this pass.
- This pass creates measurement coverage for movement into the funnel, not just final form submissions.

## Next Logical Step

Use this coverage to do a real GTM / GA4 / HaloTrack verification pass:

1. confirm `cta_clicked` appears in `dataLayer`
2. confirm `contact_form_submit` reaches HaloTrack
3. confirm `generate_lead_v2` still deduplicates correctly with Meta `Lead`
4. confirm no duplicate lead events fire on the contact route
