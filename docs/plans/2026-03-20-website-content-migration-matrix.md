# HaloAgency Website Content Migration Matrix

Date: 2026-03-20

Related sources:

- [Website Restructure PRD](/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/plans/2026-03-20-website-restructure-prd.md)
- [Website Restructure Backlog](/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/plans/2026-03-20-website-restructure-backlog.md)

## 1. Purpose

This matrix maps current site content into the target website architecture so implementation can proceed without losing useful material.

Use this document during page build PRs to answer:

- what content gets reused
- what content gets cut
- what content gets split
- what net-new content must be written

## 2. Status Labels

- `Reuse`: move with light editing
- `Adapt`: keep the core, but rewrite for the new page role
- `Split`: divide across multiple target pages
- `Retire`: remove from live site
- `Net new`: new content required

## 3. Migration Matrix

| Target route | Page role | Current source(s) | Reuse / adapt / split | Keep | Remove or de-emphasize | Net new needed | Primary CTA | Proof to include | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Brand positioning + routing | `/`, homepage sections | Adapt | agency-level positioning, service overview, featured projects, about summary, process summary, package teaser | long-form lead magnet block, full contact block, over-detailed pricing | stronger route-first hero, quick segmentation block, proof strip | Book a call or choose a service | featured cases and concise results | P1 |
| `/ads` | Ads hub | `/ads`, homepage services, LP support messaging | Adapt | acquisition overview, channels overview, role of tracking and landing pages | detailed package selling, overlapping long-form sales copy, lead magnet as main offer | clearer "choose Google Ads vs Meta Ads" decision logic | Choose service | short cross-service proof cards | P1 |
| `/ads/google-ads` | Google Ads service detail | `/lp/google-ads`, `/ads`, relevant cases | Split + adapt | Google Ads pain points, offer, FAQ, process, pricing guidance | Meta-specific sections, generic ads umbrella copy | SEO-focused intro, internal links, stronger trust path | Get Google Ads plan | Google Ads case proof and search-intent outcomes | P2 |
| `/ads/meta-ads` | Meta Ads service detail | `/lp/meta-ads`, `/ads`, relevant cases | Split + adapt | Meta Ads pain points, offer, FAQ, process, pricing guidance | Google-specific sections, generic ads umbrella copy | SEO-focused intro, internal links, stronger trust path | Get Meta Ads plan | Meta Ads case proof and funnel outcomes | P2 |
| `/ads/seznam` | Optional Seznam service detail | `/ads` | Net new or partial reuse | any existing Seznam mention | broad ads overview copy | full page if kept | Request ads consultation | local-market proof if available | P3 optional |
| `/web` | Web hub | `/web`, homepage services, package summaries | Adapt | web outcomes, site type comparison, ads-readiness, SEO-readiness | trying to fully sell every site type at once | clearer route split by site type | Choose site type | featured web-related cases | P1 |
| `/web/landing-pages` | Landing page service detail | `/lp/landing-page`, `/lp/web-development`, `/web` | Split + adapt | landing-page-specific value, speed, conversion focus, paid-traffic fit | multi-page and e-commerce material | SEO-targeted hero and proof structure | Request landing page concept | conversion-focused web proof | P3 |
| `/web/business-websites` | Multi-page website service detail | `/web`, corporate package content, cases | Split + adapt | company site benefits, trust, structure, SEO base | landing-page-only framing, e-commerce features | service-intent copy and stronger objection handling | Request site proposal | B2B and service-business proof | P3 |
| `/web/ecommerce` | E-commerce service detail | `/web`, e-commerce package content, e-commerce cases | Split + adapt | catalog, payments, integrations, tracking, scale logic | general corporate-site material | stronger commerce proof and buyer-fit section | Request store scope | e-commerce results and implementation proof | P3 |
| `/tracking` | Tracking service page | `/tracking` | Adapt | problem, solution, HaloTrack framing, process, pricing, FAQ | dead blog link until resource exists, any weak generalization | stronger case proof, improved CTA framing | Request tracking audit | conversion recovery, data accuracy, ads performance proof | P2 |
| `/automation` | Automation service page | `/automation` | Adapt | service cards, use cases, FAQ, process, pricing | generic AI-first signals that do not support buyer trust | more concrete business outcomes and proof | Request automation audit | workflow and time-saving proof | P2 |
| `/case-studies` | Proof index | `/case-studies`, homepage projects, service pages | Adapt | project cards, categories, existing proof assets | weak filters, inconsistent taxonomy | service-type filters, objective filters, stronger summaries | View relevant case | all cases | P4 |
| case study detail pages | Detailed proof | current case study pages, homepage projects, service-page metrics | Adapt | challenge, solution, result, CTA | inconsistent framing and metrics | standard structure, clearer business context, related-service CTA | Talk about a similar project | precise metrics and service mix | P4 |
| `/about` | Founder + trust | `/about`, homepage about block | Adapt | founder story, systems approach, practical experience | excessive AI-first positioning, vague hype | stronger credibility framing and clearer agency model | Book a call | concise proof and operating principles | P4 |
| `/packages` | Pricing anchor | `/packages`, homepage package section, package detail pages | Adapt | top-level package comparison and decision support | using packages as primary cold-traffic sales pages | package chooser logic, support links to service pages | Choose package or contact | package-level proof and scope clarity | P4 |
| package detail pages | Optional package detail support | `/packages/site`, `/packages/leads`, `/packages/ecommerce` | Adapt or retire | only strong, up-to-date package logic | stale promos, generic homepage-anchor CTAs, weak trust signals | rewritten package pages or redirects | Request package consultation | package-fit proof | P4 |
| `/contact` | Final conversion page | homepage contact, modal patterns, messenger/contact info | Adapt + consolidate | contact info, service selector, inquiry form, response time | dependence on homepage anchor, generic scattered CTA endpoints | clean expectation-setting hero and conversion path | Submit inquiry | response-time and trust note | P1 |
| `/blog` | Informational content hub | none | Net new | n/a | n/a | blog listing, category structure, internal linking rules | Read related service | linked service and case proof | P5 |
| `/blog/server-side-tracking` | Tracking authority article | `/tracking` explanatory content | Adapt + expand | tracking problem explanation, server-side framing | sales-only phrasing | educational article structure | Read related service / request audit | tracking proof snippets | P5 |
| `/blog/google-ads-guide` | Google Ads authority article | `/lp/google-ads`, `/ads/google-ads` | Adapt + expand | pain points, channel logic, fit criteria | LP-style hard sell | educational search-intent article | Read related service / get plan | Google Ads proof | P5 |
| `/blog/meta-ads-guide` | Meta Ads authority article | `/lp/meta-ads`, `/ads/meta-ads` | Adapt + expand | audience, offer, funnel, fit criteria | LP-style hard sell | educational article | Read related service / get plan | Meta Ads proof | P5 |
| `/blog/landing-page-guide` | Web conversion authority article | `/web`, `/lp/landing-page` | Adapt + expand | landing-page logic, paid traffic fit | mixed-intent site build content | educational article | Read related service / request concept | web conversion proof | P5 |

## 4. Existing Content That Should Be Retired Or Reduced

These items should not survive untouched into the new site:

1. Homepage as the main place for full pricing, long-form lead magnet, FAQ, process, and contact all at once
2. Header and footer links that bounce users back to homepage anchors instead of dedicated pages
3. `/ads` as a single page trying to serve Google Ads, Meta Ads, and Seznam search intent simultaneously
4. `/web` as a single page trying to sell landing pages, corporate websites, and e-commerce simultaneously
5. Stale package page promotions and generic anchor CTAs
6. Any dead internal link, especially trust or legal links

## 5. Proof Asset Allocation

Use this mapping when placing proof:

| Proof asset | Best target page(s) |
| --- | --- |
| Nejbalonky | `/web/ecommerce`, `/ads/google-ads`, `/case-studies` |
| ProPradlo | `/web/business-websites`, `/ads/google-ads`, `/case-studies` |
| Segway Tours | `/web/business-websites`, SEO-related content, `/case-studies` |
| Doggy Salon | `/ads/meta-ads`, `/web/landing-pages`, `/case-studies` |
| CatCafe | `/web/landing-pages` or `/web/business-websites`, `/case-studies` |

## 6. CTA Migration Rules

### Keep

- "Get a plan" for Ads pages
- "Request a concept" for Landing Page / Web pages
- "Request an audit" for Tracking and Automation
- "Book a call" or "Submit inquiry" for Contact and Homepage

### Reduce

- too many different lead magnet promises
- package-first CTAs on pages whose job is service qualification
- homepage CTAs that send users into low-intent browsing instead of the next correct funnel step

## 7. Use During Implementation

For each page PR:

1. open this matrix
2. identify the target route row
3. list the exact source files or sections being reused
4. explicitly cut the "remove or de-emphasize" items
5. write only the minimum net-new content needed to complete the target role

If a PR keeps material that this matrix marks for retirement, it should be justified in review rather than left in by accident.
