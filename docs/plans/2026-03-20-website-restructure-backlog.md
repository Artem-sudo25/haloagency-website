# HaloAgency Website Restructure Backlog

Date: 2026-03-20

Related source:

- [Website Restructure PRD](/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/plans/2026-03-20-website-restructure-prd.md)
- [Main-Site Tracking And Forms Spec](/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/plans/2026-03-20-main-site-tracking-and-forms-spec.md)
- [Main-Site Copy Hardening PRD](/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/plans/2026-03-20-main-site-copy-hardening-prd.md)

## Scope Note

Decision on March 20, 2026:

- `/lp/*` landing pages are frozen during the main-site restructure
- all Phase 1 work applies to the main site only
- paid landing pages stay out of scope until a dedicated paid-media review

## 1. Purpose

This backlog turns the restructure PRD into an implementation plan that can be executed in small, reviewable PRs.

The goal is not just to "ship the new structure." The goal is to ship a complete, conversion-oriented website without:

- broken routing
- missing proof
- weak CTA hierarchy
- stale content
- SEO regressions
- analytics gaps

## 2. Delivery Model

### Core rule

Do not run this as one giant redesign PR.

Run it as a controlled sequence of small vertical PRs, where each PR includes:

- route or page implementation
- content migration
- CTA wiring
- metadata
- internal links
- analytics verification
- QA against the launch checklist

### Recommended working split

Use:

- Codex for implementation, routing, component work, metadata, schema, redirects, QA fixes
- CloudCode for copy drafting, section structure, rewrite variants, FAQ drafts, proof formatting
- Human review for positioning, proof accuracy, pricing, trust claims, legal, and final UX decisions

### Branch / PR model

- One branch per backlog item or tightly related item group
- Prefer branch names like `codex/phase-0-integrity-fixes`, `codex/ads-hub`, `codex/google-ads-service-page`
- Keep PRs small enough that they can be fully reviewed in one sitting

## 3. Definition Of Done

A page or route is not done until all of the following are true:

1. The page role matches the PRD.
2. The page has one primary CTA and one secondary CTA max.
3. The page has final migrated content, not placeholder text.
4. Proof is present and relevant to the offer.
5. Metadata is written for the route.
6. Internal links are correct.
7. Analytics events fire for core CTA and form actions.
8. Mobile and desktop layouts are reviewed.
9. All links, forms, and legal references work.
10. The page passes the launch QA checklist.

## 4. AI Working Rules

### Best use of Codex

Use Codex for:

- creating routes and layout structure
- refactoring header, footer, and navigation
- building shared templates
- implementing metadata and sitemap updates
- wiring forms and analytics
- fixing regressions and consistency issues
- running implementation QA against repo state

### Best use of CloudCode

Use CloudCode for:

- page outline proposals
- copy migration from multiple source pages
- headline, subheadline, CTA, and FAQ options
- case study normalization
- proof block drafting
- blog brief and article draft generation

### Human responsibilities

Humans should approve:

- target audience framing
- service naming
- pricing presentation
- proof claims and metrics
- legal and privacy wording
- final launch go/no-go

## 5. Execution Order

### Phase 0: Integrity And Baseline Fixes

Goal:

- Remove trust leaks before restructuring the architecture.

### Phase 1: Structural Foundation

Goal:

- Put the new navigation, routing, and homepage logic in place.

### Phase 2: Ads Service Cluster

Goal:

- Build a proper acquisition-service architecture around Ads.

### Phase 3: Web Service Cluster

Goal:

- Build a proper web-service architecture around site type and business intent.

### Phase 4: Trust / Proof Layer

Goal:

- Make about, case studies, packages, and contact support the funnel properly.

### Phase 5: SEO / Content Layer

Goal:

- Add the informational layer that supports organic growth and internal linking.

### Phase 6: CRO Hardening And Launch

Goal:

- Validate the entire conversion system end to end.

## 6. Backlog

## Phase 0: Integrity And Baseline Fixes

| ID | Work item | Primary owner | Support | Depends on | Done when |
| --- | --- | --- | --- | --- | --- |
| P0-01 | Fix all `/privacy` links to `/privacy-policy` | Codex | Human QA | None | All forms and consent links point to the live route |
| P0-02 | Remove or replace dead `/blog/server-side-tracking` link | Codex | Human content choice | None | No live page links to missing blog routes |
| P0-03 | Remove stale New Year promo from package pages | Codex | Human pricing approval | None | No outdated seasonal offer remains |
| P0-04 | Audit and align route metadata across key pages | Codex | Human copy approval | None | Core routes have route-level metadata aligned to page role |
| P0-05 | Inventory current CTA events and form submissions | Codex | Human review | None | Existing analytics coverage is documented before page rewrites |

### Phase 0 deliverable

- Clean baseline with no obvious trust or routing leaks

## Phase 1: Structural Foundation

| ID | Work item | Primary owner | Support | Depends on | Done when |
| --- | --- | --- | --- | --- | --- |
| P1-01 | Create reusable page templates: hub, service detail, contact, proof blocks | Codex | Human UX review | P0 | Shared templates exist and are approved |
| P1-02 | Refactor header nav to target real routes, not homepage anchors | Codex | Human IA review | P0 | Header matches target architecture |
| P1-03 | Refactor footer nav to support the new page families | Codex | Human IA review | P0 | Footer reflects trust, services, company, legal structure |
| P1-04 | Create `/contact` page and define it as the main conversion endpoint | Codex | CloudCode for copy | P1-01 | Contact page exists and replaces generic anchor dependency |
| P1-05 | Rewrite homepage into a routing + trust page | Codex + CloudCode | Human CRO review | P1-01, P1-02 | Homepage no longer tries to fully sell every service |
| P1-06 | Convert `/ads` into a hub page | Codex + CloudCode | Human service review | P1-01 | `/ads` routes into child ads pages clearly |
| P1-07 | Convert `/web` into a hub page | Codex + CloudCode | Human service review | P1-01 | `/web` routes into child web pages clearly |

### Phase 1 deliverable

- New top-level architecture live
- Homepage, header, footer, and contact system aligned

## Phase 2: Ads Service Cluster

| ID | Work item | Primary owner | Support | Depends on | Done when |
| --- | --- | --- | --- | --- | --- |
| P2-01 | Create `/ads/google-ads` from current LP + `/ads` support content | Codex + CloudCode | Human PPC review | P1-06 | Dedicated Google Ads service page exists and is indexable |
| P2-02 | Create `/ads/meta-ads` from current LP + `/ads` support content | Codex + CloudCode | Human PPC review | P1-06 | Dedicated Meta Ads service page exists and is indexable |
| P2-03 | Decide whether to create `/ads/seznam` now or defer | Human | Codex if approved | P1-06 | Clear scope decision is documented |
| P2-04 | Update internal links from hub, cases, packages, and footer into Ads child pages | Codex | Human QA | P2-01, P2-02 | No ads-intent visitor is forced back through generic `/ads` |
| P2-05 | Align LP trust paths so paid visitors can inspect relevant trust pages cleanly | Codex | Human CRO review | P2-01, P2-02 | LPs support trust validation without losing conversion focus |

### Phase 2 deliverable

- Ads architecture supports both SEO service intent and paid trust validation

## Phase 3: Web Service Cluster

| ID | Work item | Primary owner | Support | Depends on | Done when |
| --- | --- | --- | --- | --- | --- |
| P3-01 | Create `/web/landing-pages` from current web + LP content | Codex + CloudCode | Human CRO review | P1-07 | Landing page service page exists and is indexable |
| P3-02 | Create `/web/business-websites` from current corporate package + web page content | Codex + CloudCode | Human offer review | P1-07 | Business website service page exists and is indexable |
| P3-03 | Create `/web/ecommerce` from current e-commerce package + case content | Codex + CloudCode | Human offer review | P1-07 | E-commerce service page exists and is indexable |
| P3-04 | Update all web-intent internal links and package links | Codex | Human QA | P3-01, P3-02, P3-03 | Users can navigate by site type cleanly |
| P3-05 | Review whether `/lp/web-development` and `/lp/landing-page` need copy realignment after new service pages go live | Human + CloudCode | Codex for changes | P3-01, P3-02 | Paid and SEO page roles stay distinct |

### Phase 3 deliverable

- Web architecture supports both broad navigation and focused service intent

## Phase 4: Trust / Proof Layer

| ID | Work item | Primary owner | Support | Depends on | Done when |
| --- | --- | --- | --- | --- | --- |
| P4-01 | Rebuild `/case-studies` as a proof index with clearer categories | Codex + CloudCode | Human proof review | P1 | Case index routes users by relevant proof type |
| P4-02 | Standardize case study detail page structure | Codex + CloudCode | Human proof review | P4-01 | Each case follows the same proof logic |
| P4-03 | Rewrite `/about` to increase practical credibility and reduce hype | CloudCode + Codex | Human founder review | P1 | About page supports evaluation-stage trust |
| P4-04 | Rewrite `/packages` to support service-page conversion instead of competing with it | Codex + CloudCode | Human pricing review | P1 | Packages help, but do not replace, service intent |
| P4-05 | Audit package subpages and either rewrite, redirect, or hide weak ones | Human + Codex | CloudCode for copy | P4-04 | No stale or misaligned package pages remain live |

### Phase 4 deliverable

- Strong trust and proof layer across the site

## Phase 5: SEO / Content Layer

| ID | Work item | Primary owner | Support | Depends on | Done when |
| --- | --- | --- | --- | --- | --- |
| P5-01 | Create `/blog` architecture and listing page | Codex | Human IA review | P1 | Blog exists as a clean informational layer |
| P5-02 | Publish server-side tracking cornerstone article | CloudCode + Codex | Human subject review | P5-01 | Tracking page no longer points to missing content |
| P5-03 | Publish Google Ads cornerstone article | CloudCode + Codex | Human PPC review | P5-01 | Ads cluster gains informational support |
| P5-04 | Publish Meta Ads cornerstone article | CloudCode + Codex | Human PPC review | P5-01 | Ads cluster gains informational support |
| P5-05 | Publish landing page / web conversion article | CloudCode + Codex | Human CRO review | P5-01 | Web cluster gains informational support |
| P5-06 | Add internal linking rules between services, blog, cases, and packages | Codex | Human SEO review | P5-02 to P5-05 | Internal link graph supports discovery and SEO |

### Phase 5 deliverable

- Indexable commercial and informational layer working together

## Phase 6: CRO Hardening And Launch

| ID | Work item | Primary owner | Support | Depends on | Done when |
| --- | --- | --- | --- | --- | --- |
| P6-01 | Validate CTA hierarchy across all page families | Codex | Human CRO review | P1-P5 | Every page has one clear next step |
| P6-02 | Verify analytics events and form attribution across all routes | Codex | Human analytics review | P1-P5 | Core events are firing and mapped correctly |
| P6-03 | Run full mobile QA sweep | Codex | Human UX review | P1-P5 | All routes pass mobile review |
| P6-04 | Run full SEO QA sweep: metadata, sitemap, robots, internal links | Codex | Human SEO review | P1-P5 | Indexability and metadata are correct |
| P6-05 | Run full trust QA sweep: legal, contact, proof consistency | Codex | Human business review | P1-P5 | No trust leaks remain |
| P6-06 | Produce post-launch monitoring checklist and 14-day bug triage plan | Codex | Human owner | P6-01 to P6-05 | Launch has active stabilization plan |

### Phase 6 deliverable

- Website ready for launch and stabilization

## 7. Suggested PR Sequence

Recommended merge order:

1. `phase-0-integrity-fixes`
2. `phase-1-navigation-and-contact`
3. `phase-1-homepage-restructure`
4. `phase-1-ads-hub-and-web-hub`
5. `phase-2-google-ads-service-page`
6. `phase-2-meta-ads-service-page`
7. `phase-3-landing-pages-service-page`
8. `phase-3-business-websites-service-page`
9. `phase-3-ecommerce-service-page`
10. `phase-4-case-studies-system`
11. `phase-4-about-and-packages`
12. `phase-5-blog-foundation`
13. `phase-5-cornerstone-content`
14. `phase-6-launch-hardening`

## 8. AI Prompting Templates

### Template A: Codex implementation prompt

Use when building or refactoring a page:

```text
Implement [target route] based on the restructure PRD and backlog.

Page role:
- [primary job]

Primary CTA:
- [CTA]

Source content to reuse:
- [source page 1]
- [source page 2]

Requirements:
- Preserve the established visual system
- Use the shared page template where appropriate
- Include route metadata
- Add internal links to relevant case studies, packages, and contact
- Keep one primary CTA and one secondary CTA max
- Reuse existing proof where possible
- Do not leave placeholder copy
- Verify mobile behavior

Acceptance criteria:
- [criteria list]
```

### Template B: CloudCode copy migration prompt

Use when drafting page copy from existing materials:

```text
Draft the content structure and copy for [target route].

Goal:
- [page role]

Audience:
- Russian-speaking businesses in Czechia

Primary CTA:
- [CTA]

Source pages to reuse:
- [source page 1]
- [source page 2]
- [case study references]

Output:
- hero
- who it is for
- what is included
- proof section
- FAQ
- final CTA

Rules:
- Keep the page focused on one service intent
- Reuse current claims and proof where possible
- Reduce hype and vague AI language
- Write with clear commercial intent, not generic agency language
```

## 9. Review Gates Per PR

Every PR should pass:

- IA gate: route and internal links are correct
- CRO gate: CTA hierarchy is clean
- Proof gate: claims are supported
- SEO gate: metadata and indexability are correct
- Analytics gate: events are verified
- UX gate: mobile and desktop reviewed

## 10. Recommended Weekly Cadence

If one person plus AI is implementing:

- Week 1: Phase 0 + Phase 1
- Week 2: Ads cluster
- Week 3: Web cluster
- Week 4: Case studies, about, packages, contact hardening
- Week 5: Blog foundation + first cornerstone articles
- Week 6: QA, stabilization, CRO pass

If a small team plus AI is implementing:

- Stream A: structure and templates
- Stream B: copy migration
- Stream C: proof and case studies
- Stream D: SEO and analytics

That model is faster, but only if one human owner keeps the PRD and migration matrix authoritative.
