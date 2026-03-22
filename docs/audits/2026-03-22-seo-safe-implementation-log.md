# SEO Safe Implementation Log

Date: 2026-03-22
Scope: Safe technical SEO changes implemented without requiring business-owner input

## Implemented

### Crawl controls

- Added `/Users/artemhorvatsky/Documents/dev/haloagency-website/app/robots.ts`
- Added `/Users/artemhorvatsky/Documents/dev/haloagency-website/app/llms.txt/route.ts`
- Added layout-level `noindex` protection for paid landing pages in `/Users/artemhorvatsky/Documents/dev/haloagency-website/app/lp/layout.tsx`

Current `robots.txt` behavior:

- allows public crawl of the main site
- disallows `/api/`
- disallows `/lp/`
- exposes the sitemap URL

### Sitemap

Updated `/Users/artemhorvatsky/Documents/dev/haloagency-website/app/sitemap.ts` to:

- include missing case study routes
- stop using `new Date()` for every URL
- use stable `lastModified` values instead of deploy-time noise

### Metadata and canonicals

Extended `/Users/artemhorvatsky/Documents/dev/haloagency-website/lib/seo.ts` with a shared metadata helper that now adds:

- canonical URLs
- Open Graph defaults
- Twitter card defaults
- consistent authors / creator / publisher fields

Applied the shared metadata layer to the main indexable route pages, including:

- home
- about
- contact
- ads and web hubs
- ads service pages
- tracking
- automation
- growth-plan
- packages and package detail pages
- case studies index
- legal pages

### Structured data cleanup

Updated `/Users/artemhorvatsky/Documents/dev/haloagency-website/lib/seo.ts` to:

- replace the old schema email with `info@helloagency.cz`
- use the current phone number from `legal.ts`
- add organization logo
- add organization address
- enrich website, service, and article schema with better publisher / provider context
- add article image support

### Case studies

Improved the case-study SEO layer by:

- making the detail routes metadata-capable
- adding page-level metadata to each live case study
- passing hero image paths into article schema
- replacing generic alt text in the case-study layout with descriptive text

Files updated:

- `/Users/artemhorvatsky/Documents/dev/haloagency-website/components/case-studies/CaseStudyLayout.tsx`
- `/Users/artemhorvatsky/Documents/dev/haloagency-website/app/case-studies/catcafe/page.tsx`
- `/Users/artemhorvatsky/Documents/dev/haloagency-website/app/case-studies/doggy-salon/page.tsx`
- `/Users/artemhorvatsky/Documents/dev/haloagency-website/app/case-studies/nejablonky/page.tsx`
- `/Users/artemhorvatsky/Documents/dev/haloagency-website/app/case-studies/propradlo/page.tsx`
- `/Users/artemhorvatsky/Documents/dev/haloagency-website/app/case-studies/segway-tours-budapest/page.tsx`

### Image alt text

Improved safe, high-confidence alt text in:

- `/Users/artemhorvatsky/Documents/dev/haloagency-website/components/case-studies/CaseStudyLayout.tsx`
- `/Users/artemhorvatsky/Documents/dev/haloagency-website/app/case-studies/CaseStudiesPageClient.tsx`
- `/Users/artemhorvatsky/Documents/dev/haloagency-website/components/sections/Projects.tsx`

## Deliberately Not Implemented

These items need an explicit decision from the site owner before implementation.

### 1. Bot policy confirmed

Confirmed decisions:

- training-focused bots are allowed
- no separate crawler-specific rules are needed right now

That means the current general allow policy in `robots.txt` remains the intended setup.

### 2. `growth-plan` indexation confirmed

Confirmed decision:

- `/growth-plan` is now treated as a mid-funnel route and set to `noindex`

Implementation impact:

- removed from sitemap
- kept visible and linkable inside the site
- still available to users from internal navigation and CTA paths

### 3. Per-route OG image system

Open question:

- Do you want dedicated Open Graph images for each major service page and case study, or is the current global OG image enough for now?

This is a quality improvement, but it requires design and content choices rather than only engineering work.

### 4. Public profile links for `sameAs`

Open question:

- Which official profiles should be attached to Organization schema as `sameAs`?

I did not invent or assume public social/company profile URLs.

## Verification

Build verification:

- `npm run build` passed after the SEO implementation

Known non-blocking diagnostics that remain:

- GTM `dangerouslySetInnerHTML` warnings in `/Users/artemhorvatsky/Documents/dev/haloagency-website/app/layout.tsx`
- `noImgElement` warnings in `/Users/artemhorvatsky/Documents/dev/haloagency-website/components/case-studies/CaseStudyLayout.tsx`

These were not introduced by the SEO implementation and did not block the production build.
