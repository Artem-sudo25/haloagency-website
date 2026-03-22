# HaloAgency Website Restructure PRD

Date: 2026-03-20

Related execution artifacts:

- [Website Restructure Backlog](/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/plans/2026-03-20-website-restructure-backlog.md)
- [Website Content Migration Matrix](/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/plans/2026-03-20-website-content-migration-matrix.md)
- [Website Launch QA Checklist](/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/plans/2026-03-20-website-launch-qa-checklist.md)
- [Main-Site Tracking And Forms Spec](/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/plans/2026-03-20-main-site-tracking-and-forms-spec.md)
- [Main-Site Copy Hardening PRD](/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/plans/2026-03-20-main-site-copy-hardening-prd.md)

## Scope Note

Decision on March 20, 2026:

- `/lp/*` landing pages are frozen during the main-site restructure
- paid landing pages remain unchanged unless a separate paid-media review is requested
- the current restructure scope is the main site only

## 1. Purpose

Restructure the current HaloAgency website into a clear conversion system that supports:

- paid traffic conversion
- SEO growth from high-intent service queries
- trust-building for warm and referral traffic
- better qualification before lead submission

This PRD is based on the current website content and page inventory. The goal is not to invent a different agency. The goal is to reorganize the existing content, proof, and offers into a cleaner structure with stronger page roles.

## 2. Core Strategy

The website should operate as a 3-layer system:

1. Paid landing pages
2. Indexable service and proof pages
3. Brand and conversion support pages

The role of each layer:

- Paid landing pages close one ad promise and one offer.
- Service pages rank, qualify, and convert high-intent visitors.
- Homepage, about, case studies, and packages build trust and route users to the right next step.

## 3. Strategic Principles

These principles define the target state:

1. One page = one job.
2. Homepage routes. Service pages sell. LPs close.
3. Every indexable service page targets one primary intent.
4. Every major page has one primary CTA and one secondary CTA at most.
5. Proof appears close to the decision point, not buried in separate sections.
6. Paid traffic and SEO traffic can share proof assets, but should not share the same page structure.
7. Navigation should help visitors self-select, not dump everything into the homepage.
8. Modals are support UX, not the primary conversion architecture.
9. Packages should anchor pricing, not replace service pages.
10. Existing strong content should be reused before rewriting from scratch.

## 4. Current Content Inventory To Reuse

### Homepage content already available

- agency-level hero
- services overview
- featured projects
- founder/about block
- process section
- package section
- FAQ
- growth plan lead magnet
- contact section

### Service content already available

- `/ads` overview content
- `/web` overview content
- `/tracking` focused service content
- `/automation` focused service content

### Paid content already available

- `/lp/google-ads`
- `/lp/meta-ads`
- `/lp/web-development`
- `/lp/landing-page`
- other experimental LP variants

### Proof content already available

- `/case-studies`
- case study detail pages
- featured project cards on homepage

### Pricing content already available

- homepage package cards
- `/packages`
- package detail pages

### Trust content already available

- `/about`
- legal pages
- testimonials and guarantees across service pages

## 5. Main Problems In The Current Structure

1. The homepage tries to do too many jobs at once.
2. Navigation sends users back to homepage anchors instead of dedicated trust pages.
3. `/ads` and `/web` are umbrella pages with multiple intents mixed together.
4. Lead capture is fragmented across modals, homepage forms, service forms, and LPs.
5. Package pages are not clearly positioned in the funnel.
6. Case studies exist, but the proof system is not standardized.
7. There are trust leaks from broken or stale destinations and inconsistent conversion paths.

## 6. Target Website Model

### A. Paid Layer

Purpose:

- high message match
- minimal distractions
- one offer per page
- one form and one CTA path

Rules:

- keep under `/lp/*`
- keep `noindex`
- no global navigation
- use ad-specific headline, proof, and CTA

### B. Service Layer

Purpose:

- rank for service intent
- explain one service clearly
- qualify fit
- convert visitors into a call, plan, or audit request

Rules:

- one primary problem per page
- one service per page
- strong related proof and objection handling
- clear internal links to case studies and contact

### C. Brand / Proof Layer

Purpose:

- build trust
- answer “why you”
- show outcomes
- help uncertain visitors orient themselves

Pages:

- homepage
- about
- case studies index
- case study details
- packages
- contact

## 7. Target Information Architecture

Recommended structure:

```text
Homepage (/)
├── Ads Hub (/ads)
│   ├── Google Ads (/ads/google-ads)
│   ├── Meta Ads (/ads/meta-ads)
│   └── Seznam Ads (/ads/seznam) [Phase 3, optional]
├── Web Hub (/web)
│   ├── Landing Pages (/web/landing-pages)
│   ├── Business Websites (/web/business-websites)
│   └── E-commerce Development (/web/ecommerce)
├── Tracking & Analytics (/tracking)
├── Automation & AI (/automation)
├── Packages (/packages)
├── Case Studies (/case-studies)
│   ├── Nejbalonky
│   ├── ProPradlo
│   ├── Segway Tours
│   ├── Doggy Salon
│   └── CatCafe
├── About (/about)
├── Contact (/contact)
└── Resources (/blog) [Phase 2]
    ├── Server-Side Tracking Guide
    ├── Google Ads Guide
    ├── Meta Ads Guide
    └── Landing Page Guide

Paid LPs (/lp/*) [Noindex]
├── /lp/google-ads
├── /lp/meta-ads
├── /lp/web-development
├── /lp/landing-page
└── future paid variants
```

## 8. Page Roles And Requirements

| Page | Primary job | Main traffic | Primary CTA | Notes |
| --- | --- | --- | --- | --- |
| `/` | Brand positioning + routing | Direct, branded, referral, warm paid visitors | Go to relevant service or book a call | Should not try to fully sell every service |
| `/ads` | Ads service hub | Broad service intent, warm traffic | Choose Google Ads or Meta Ads | Hub, not the main PPC sales page |
| `/ads/google-ads` | Sell Google Ads service | SEO high intent, warm traffic | Get Google Ads plan | Reuse current LP proof + current `/ads` support content |
| `/ads/meta-ads` | Sell Meta Ads service | SEO high intent, warm traffic | Get Meta Ads plan | Reuse current LP proof + current `/ads` support content |
| `/web` | Web service hub | Broad web intent, warm traffic | Choose site type or request proposal | Hub, not main conversion page |
| `/web/landing-pages` | Sell landing page build | SEO high intent, warm traffic | Request landing page concept | Use current web content + LP logic |
| `/web/business-websites` | Sell multi-page websites | SEO high intent, warm traffic | Request site proposal | Derived from current corporate package content |
| `/web/ecommerce` | Sell e-commerce builds | SEO high intent, warm traffic | Request store scope | Derived from current e-commerce content |
| `/tracking` | Sell tracking setup | SEO, warm traffic, supporting page for ads/web | Request tracking audit | Already close to correct role |
| `/automation` | Sell automation service | SEO, warm traffic, supporting page for operations | Request automation audit | Already close to correct role |
| `/case-studies` | Proof index | Warm traffic, evaluation stage | View relevant case or contact | Should filter by service and business type |
| case study details | Prove outcomes | Warm and bottom-funnel traffic | Talk about a similar project | Must include business context, work, results, next step |
| `/packages` | Pricing anchor | Warm traffic, sales support | Choose package or contact | Should support, not replace, service pages |
| `/about` | Trust and founder credibility | Warm traffic, referral, evaluation stage | Book a call | Reduce hype, increase operational credibility |
| `/contact` | Final conversion page | All traffic types | Submit inquiry / book call | Dedicated conversion endpoint |
| `/blog` | SEO authority + internal linking | Organic informational traffic | Read related service or contact | Phase 2 |

## 9. Homepage PRD

### Primary role

The homepage should answer:

- who HaloAgency is for
- what outcomes it helps create
- what service area the visitor should choose next
- why HaloAgency is credible

### The homepage should do

1. Position the agency clearly for Russian-speaking businesses in Czechia.
2. Segment visitors by main problem or goal.
3. Show proof fast.
4. Route users into the right service page.
5. Offer one global conversion path for visitors ready to talk.

### The homepage should not do

1. Explain every service in full.
2. Carry multiple long-form lead magnets.
3. act as the main pricing page
4. act as the main contact page
5. replace service-specific pages

### Recommended homepage structure

1. Hero
2. Proof strip or featured results
3. Choose your path / main service categories
4. Featured case studies
5. Why HaloAgency / founder credibility
6. How we work
7. Package or pricing teaser
8. Final CTA

### Homepage content to keep or adapt

- Keep the current agency-level positioning.
- Keep service cards, but frame them as route choices rather than mini sales pages.
- Keep featured case studies.
- Keep a smaller founder/trust block.
- Keep process summary.
- Reduce the package section to a teaser with a link to `/packages`.
- Remove the homepage growth plan magnet as a major block.
- Replace the homepage contact section with a stronger CTA into `/contact`.

## 10. Service Page PRD

### Required service page structure

Every indexable service page should include:

1. Problem-aware hero
2. Who it is for
3. What is included
4. Why it works
5. Related case study proof
6. Process
7. Pricing guidance or “starting from”
8. FAQ
9. Final CTA

### CTA framework

Recommended primary CTA by service family:

- Ads pages: “Get a plan” or “Request an audit”
- Web pages: “Request a concept” or “Request a proposal”
- Tracking: “Request tracking audit”
- Automation: “Request automation audit”

### Important distinction

Paid LP CTA and service-page CTA can be similar, but the page structure should differ:

- LPs close faster and remove distractions.
- SEO service pages educate more, prove more, and interlink more.

## 11. Hubs Vs Child Pages

### `/ads` should become a hub page

Its job:

- explain the acquisition layer at a high level
- help the visitor choose Google Ads vs Meta Ads
- explain how tracking and landing pages support performance

It should not remain the main page targeting every PPC keyword.

### `/web` should become a hub page

Its job:

- explain site-building outcomes
- help the visitor choose landing page vs business website vs e-commerce
- show how websites connect to ads and tracking

It should not remain the main page targeting every web-development query.

## 12. Packages Strategy

### Role of packages

Packages should do three jobs:

1. anchor pricing
2. simplify comparison
3. support warm buyers who want a faster buying decision

### Package rules

- Keep one main packages page.
- Use package cards as a decision aid, not the primary entry point for cold traffic.
- Retire or rewrite stale package detail pages before sending traffic to them.
- If keeping package detail pages, each one needs a dedicated CTA and updated offer logic.

### Recommendation

- Keep `/packages`.
- Rewrite or temporarily hide weak subpages.
- Treat the current “Lead Machine” package as salvageable only after a rewrite.

## 13. Case Study System

### Role

Case studies should function as the site-wide proof engine.

### Requirements

Every case study should standardize:

- client type
- business context
- problem
- work delivered
- results
- timeline
- service mix
- CTA to the relevant service page

### Case study index should support filtering by

- service type
- business type
- objective

### Current content to reuse

- current case study details
- homepage featured projects
- metrics already used across service pages and LPs

## 14. About Page Strategy

### Role

The about page should answer:

- who is behind HaloAgency
- how the agency works
- why the agency is credible
- what kind of clients it is best for

### Adjustment

The current page has a strong founder presence, but too much AI-first positioning relative to practical credibility.

Target shift:

- less “AI as identity”
- more “growth systems, clear process, local market experience, accountability”

## 15. Contact Strategy

### Required change

Create a dedicated `/contact` page.

### Why

- gives all pages a clean final destination
- improves CTA consistency
- makes conversion optimization easier
- reduces dependence on homepage anchors and modals

### Contact page should include

- short expectation-setting copy
- one main inquiry form
- service selector
- response time
- messenger options
- trust note

## 16. SEO Strategy

### Main SEO approach

Use the website structure to separate:

- commercial high-intent pages
- proof pages
- informational content

### SEO page types

1. service hub pages
2. child service pages
3. case studies
4. blog resources

### Priority commercial pages

Phase 1:

- `/ads/google-ads`
- `/ads/meta-ads`
- `/web/landing-pages`
- `/web/business-websites`
- `/web/ecommerce`
- `/tracking`
- `/automation`

### Blog priorities

Phase 2:

- server-side tracking guide
- Google Ads guide for businesses in Czechia
- Meta Ads guide for businesses in Czechia
- landing page guide for paid traffic

### SEO rules

- one main keyword intent per service page
- strong internal links from hubs, cases, and blog to service pages
- noindex remains only for `/lp/*`
- metadata must be written per route, not left to generic layout metadata

## 17. Paid Traffic Strategy

### Rule set

1. Keep paid LPs separate from SEO service pages.
2. Keep LPs under `/lp/*` with no global nav.
3. Use main website pages as trust destinations visitors may inspect after the click.
4. Ensure case studies and about page support paid traffic validation.

### Paid traffic support flow

Ad -> Paid LP -> lead form

Secondary trust path:

Ad -> Paid LP -> About / Case Studies / Homepage -> lead form or contact

That means the main website must be structurally stronger even if it is not the initial landing page.

## 18. Navigation Model

### Header

Recommended header:

- Services
- Case Studies
- Packages
- About
- Contact
- CTA button: “Get a plan” or “Book a call”

### Services dropdown

- Google Ads
- Meta Ads
- Landing Pages
- Business Websites
- E-commerce
- Tracking
- Automation

### Remove

- homepage anchor dependence for core pages
- generic “services only” without pathway clarity

## 19. Content Migration Map

| Current source | Target destination | Action |
| --- | --- | --- |
| homepage hero | homepage | rewrite for routing, not pricing/case navigation |
| homepage services cards | homepage + header nav | keep as segmentation block |
| homepage projects | homepage + `/case-studies` | keep, but link into stronger proof system |
| homepage about block | homepage + `/about` | shorten on home, expand on about |
| homepage process | homepage + service pages | keep summary on home, service-specific detail elsewhere |
| homepage packages | `/packages` + homepage teaser | move depth off home |
| homepage growth plan magnet | `/contact` or dedicated strategy page | remove from homepage core flow |
| homepage contact | `/contact` | replace with CTA to dedicated contact page |
| `/ads` content | `/ads` hub | keep as high-level acquisition overview |
| `/lp/google-ads` content | `/ads/google-ads` + paid LP | repurpose into indexable service page and retain LP variant |
| `/lp/meta-ads` content | `/ads/meta-ads` + paid LP | repurpose into indexable service page and retain LP variant |
| `/web` content | `/web` hub | keep as overview |
| web packages and outcomes | child pages under `/web/*` | split by landing page, business website, e-commerce |
| `/tracking` content | `/tracking` | mostly keep, tighten proof and CTA |
| `/automation` content | `/automation` | mostly keep, tighten proof and CTA |
| `/case-studies` content | `/case-studies` | rewrite as proof index with better taxonomy |
| package detail pages | `/packages` or rewritten package pages | retire weak pages, rewrite any page that remains |

## 20. Conversion Architecture

### Primary CTA hierarchy

Across the whole site, use only a small set of CTA patterns:

- Get a plan
- Request a concept
- Request an audit
- Book a call

### Form hierarchy

Primary forms:

- paid LP form
- contact form
- service-page inquiry form or CTA into contact

Secondary forms:

- package inquiry

Deprioritize:

- homepage lead magnet as a core site element
- too many different offer forms on overlapping pages

## 21. Trust System Requirements

The site should present trust in layers:

1. immediate proof in hero and above the fold
2. featured outcomes on homepage and service pages
3. detailed proof in case studies
4. credibility on about page
5. legal and contact clarity near forms

### Required trust improvements

- fix broken privacy destinations
- remove stale promotional copy
- remove dead blog references until content exists
- make case study metrics more standardized
- ensure contact and legal information are consistent

## 22. Analytics Requirements

Track by page family:

- homepage to service-page clickthrough rate
- service-page lead rate
- case-study assist rate
- package-page lead rate
- paid LP lead rate
- contact-page completion rate

Track by CTA type:

- Get a plan
- Request a concept
- Request an audit
- Book a call

## 23. Implementation Phases

### Phase 0: Integrity Fixes

Timeline: 1-2 days

Scope:

- fix `/privacy` links to `/privacy-policy`
- remove or replace dead `/blog/server-side-tracking` link until blog exists
- remove stale New Year offer from package page
- point header/footer to dedicated pages instead of homepage anchors where appropriate
- align metadata baseline and route-level metadata

### Phase 1: Architecture And Routing

Timeline: 3-5 days

Scope:

- create `/contact`
- restructure header and footer
- turn `/ads` and `/web` into hubs
- simplify homepage
- reduce homepage depth and create stronger route logic to child service pages

### Phase 2: Service Page Split

Timeline: 1-2 weeks

Scope:

- create `/ads/google-ads`
- create `/ads/meta-ads`
- create `/web/landing-pages`
- create `/web/business-websites`
- create `/web/ecommerce`
- update internal links from homepage, packages, and case studies

### Phase 3: Proof And SEO Layer

Timeline: 1-2 weeks

Scope:

- rebuild `/case-studies` index
- standardize case study detail structure
- launch `/blog`
- publish first 3-4 cornerstone articles
- add internal linking patterns between resources, case studies, and service pages

### Phase 4: CRO And Testing

Timeline: ongoing

Scope:

- test homepage hero CTA
- test service page CTA copy
- test proof placement on service pages
- test contact page vs modal behavior
- test package page framing

## 24. Success Metrics

Primary success metrics:

- higher qualified lead volume from non-LP pages
- higher homepage clickthrough to service pages
- stronger service-page conversion rates
- increased assisted conversions from case studies
- improved organic visibility for service-intent pages

Secondary success metrics:

- lower bounce from homepage
- clearer attribution by page family
- more consistent CTA usage across the site

## 25. Non-Goals

This PRD does not include:

- a full visual rebrand
- multilingual expansion beyond the current primary audience
- a new service offering beyond what the site already sells
- deep CRM or RevOps redesign

## 26. Final Recommendation

The correct structure is not “homepage plus random service pages plus LPs.”

The correct structure is:

- homepage as routing and trust
- service hubs as category pages
- child service pages as SEO and conversion pages
- case studies as a proof system
- packages as pricing support
- contact as the main final conversion page
- paid LPs as isolated conversion assets

That structure preserves the strongest existing content while aligning the site with high-performing agency-site best practices: clearer intent matching, cleaner funnels, stronger proof placement, and better separation between paid, SEO, and brand traffic.
