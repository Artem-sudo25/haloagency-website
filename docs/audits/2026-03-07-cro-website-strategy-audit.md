# HaloAgency Website CRO, UX, Messaging, and Structure Audit

Date: March 7, 2026

## Executive Summary

The current website already contains many of the right building blocks: a homepage, dedicated service pages, case studies, packages, and several paid-traffic landing pages. The problem is not lack of pages. The problem is lack of role clarity.

Today the site mixes brand-building, SEO intent, paid-traffic conversion, pricing, and lead magnets across the same page families. That creates message dilution, weaker conversion paths, and trust leaks at the exact moments a prospect needs clarity.

The highest-value opportunity is to reorganize the site into five clear layers:

1. Brand / trust pages
2. SEO service pages
3. Paid-traffic landing pages
4. Case study pages
5. Optional content pages

Once those layers are separated, the website can do three jobs much better:

1. Convert cold visitors into qualified consultations
2. Rank for service-specific search intent
3. Support paid campaigns with dedicated landing pages that match the ad promise

There are also several trust and compliance issues that should be fixed immediately because they weaken conversion regardless of design quality:

1. Some forms link to `/privacy`, while the actual route is `/privacy-policy`
2. The privacy policy still contains placeholders for legal identity details
3. Legal pages use inconsistent company identity and email addresses
4. The leads package page still shows a New Year offer on March 7, 2026
5. The case study index contains incomplete / non-clickable entries and inconsistent project descriptions

---

## STEP 1 — Current Structure Analysis

### Current page inventory

| Category | Current pages | Current role in journey |
| --- | --- | --- |
| Homepage | `/` | Broad entry point, general trust builder, service overview, pricing teaser, lead magnet, contact |
| Service pages | `/web`, `/ads`, `/tracking`, `/automation` | Explain core offers, pre-qualify leads, show pricing direction, capture leads |
| Landing pages | `/lp/audit`, `/lp/v2`, `/lp/experimental` | Paid-traffic style conversion pages with forms and minimal navigation |
| Offer / package pages | `/packages`, `/packages/site`, `/packages/leads`, `/packages/ecommerce` | Productized offer pages, price anchoring, sales support |
| Portfolio / case studies | `/case-studies`, `/case-studies/nejablonky`, `/case-studies/propradlo`, `/case-studies/segway-tours-budapest` | Proof, credibility, outcome validation |
| Informational pages | `/about`, `/privacy-policy`, `/terms-of-service` | Founder story, legal trust, compliance |
| Blog / content pages | None | No SEO content layer currently exists |

### What each page currently does

#### Homepage

The homepage tries to act as:

1. Brand positioning page
2. Services hub
3. Pricing page
4. Portfolio preview
5. Lead magnet page
6. Contact page

That gives the visitor a lot of information, but it also makes the page feel like a compressed brochure rather than a guided conversion path.

#### Service pages

`/web`, `/ads`, `/tracking`, and `/automation` are designed as broad service overviews. They explain the offer well enough for warm traffic, but they are not yet tightly aligned to specific search intent. They are closer to sales pages than to focused SEO service pages.

#### Landing pages

The `/lp/*` routes are the clearest conversion-focused assets in the site. They already remove the global navigation and keep the visitor on one offer. This is strategically correct. The issue is duplication: there are three overlapping audit-style landing pages with different copy systems and proof structures.

#### Package pages

The package pages act like semi-productized offer pages. They are useful for price framing and for lower-friction buyers, but they are not currently connected into a clean funnel. They often send users back to homepage contact anchors instead of continuing a package-specific conversion flow.

#### Case studies

The detail pages already follow a useful structure: challenge, solution, results, CTA. That is a strong foundation. The index page, however, behaves more like a portfolio grid than a disciplined proof system.

#### Informational pages

The about page is a founder / philosophy page. The legal pages exist, but they do not fully support trust because of missing or inconsistent company data.

---

## STEP 2 — Strategic Role of Each Page

### Current role by page family

| Page family | Trust building | SEO intent | Paid landing | Portfolio validation | Lead capture |
| --- | --- | --- | --- | --- | --- |
| Homepage | Yes | Weak | No | Partial | Yes |
| Service pages | Partial | Partial | Partial | Weak | Yes |
| LP pages | Partial | No | Yes | Partial | Yes |
| Package pages | Partial | Weak | Partial | No | Partial |
| Case studies | Yes | Partial | No | Yes | Partial |
| About / legal | Yes | No | No | No | No |

### Where pages are trying to do too many jobs

#### Homepage

The homepage currently tries to be a brand page, pricing page, service catalog, proof page, lead magnet page, and contact page at the same time. That harms conversion because the visitor does not get a single strong next step above the fold.

#### `/ads`

The ads page is trying to be:

1. A Google Ads page
2. A Meta Ads page
3. A Seznam page
4. A pricing page
5. A lead magnet page
6. A consultation page

That broadens the message, but weakens search relevance and ad message-match.

#### `/web`

The web page is trying to be:

1. A general website development page
2. A landing page design page
3. A corporate website page
4. An e-commerce page
5. A proof page
6. A lead magnet page

It is one of the stronger pages in the site, but it still asks one page to solve multiple different buyer intents.

#### `/case-studies`

The case study index is trying to be both a proof archive and a visual portfolio gallery. Because not every entry is a real, complete case study, the page loses conversion power.

#### Package pages

The package pages behave like offer pages, but the next step is inconsistent. Instead of moving the user toward a package-specific conversion, they often send them back to generic homepage contact sections.

---

## STEP 3 — Structural and UX Problems

### 1. The homepage is broad but not decisive

The hero headline is general: it presents an umbrella agency idea, not a concrete outcome for a clear audience. The primary actions are also weak for conversion because they point to case studies and pricing rather than a consultation, audit, or service page.

Impact:

1. Lower hero conversion rate
2. Less clarity for first-time visitors
3. More drop-off from paid or referral traffic

### 2. Global navigation sends users to homepage anchors instead of dedicated trust pages

The header links for cases and about point to homepage anchors, even though dedicated `/case-studies` and `/about` pages exist. On service pages, that creates awkward back-and-forth behavior and hides the real depth of the site.

Impact:

1. Weaker information architecture
2. Reduced discovery of proof and trust pages
3. More friction for users exploring the site from service pages

### 3. Service pages are too broad for search intent

The current service routes are umbrella pages. For example:

1. `/ads` combines Google Ads, Meta Ads, and Seznam
2. `/web` combines landing pages, multi-page sites, and e-commerce
3. There is no dedicated marketing consulting page

Impact:

1. Weaker SEO targeting
2. Worse ad-to-page message match
3. Less relevance for high-intent buyers searching for a specific service

### 4. The site has too many lead capture mechanisms with no unified funnel logic

Current lead capture methods include:

1. Homepage contact form
2. Contact modal
3. Homepage growth plan form
4. Ads lead magnet form
5. Web concept form
6. LP audit forms

This is not inherently bad, but each form offers a slightly different promise and qualification depth without a clear hierarchy.

Impact:

1. Offer confusion
2. Harder attribution and funnel measurement
3. Lower consistency in lead quality

### 5. Case studies are structurally better than the portfolio index

The detail pages are useful. The index page is weaker because:

1. It contains entries without detail pages
2. Some descriptions feel placeholder-like
3. Project descriptions are inconsistent across the site
4. Results are not standardized by timeframe, baseline, ad spend, or business context

Impact:

1. Credibility loss
2. Lower conversion from prospects comparing agencies
3. Less reuse of proof on service and landing pages

### 6. Trust elements are present, but not yet believable enough

The site uses statistics, testimonials, guarantees, and case studies, but many of them are not grounded in a strong proof system.

Examples of trust weakness:

1. Large claims without proof context
2. Testimonials without logos or role depth
3. No visible “why trust us in Czechia” layer on the homepage
4. Founder story is strong on personality but weaker on operational credibility

Impact:

1. Prospects hesitate before booking
2. Strong creative work does not fully translate into trust
3. High-intent users need more verification than the site currently gives them

### 7. Legal and trust inconsistencies damage conversion

This is a major issue because it affects every form submit and every privacy-conscious user.

Observed issues:

1. Some forms link to `/privacy`, but the live legal route is `/privacy-policy`
2. The privacy policy still contains placeholder company fields
3. The legal pages use `info@haloagency.cz`, while the main site uses `hello@haloagency.cz`
4. The terms page uses a different founder / company name than the rest of the site
5. The leads package page still promotes a New Year offer in March 2026

Impact:

1. Direct trust loss near conversion points
2. Compliance risk
3. Lower paid-traffic efficiency because trust breaks before form submission

### 8. There is no dedicated contact / booking page

The site has contact forms and modals, but not a dedicated conversion page such as `/contact` or `/book-a-call`.

Impact:

1. Users do not have a clear “final step” page
2. Service pages rely too much on a generic modal
3. No single page can be optimized as the main consultation-booking destination

### 9. Package pages are not fully integrated into the site strategy

The packages are useful, but they sit between service pages and landing pages without a clear role. They may help price anchoring, but they can also distract from the core service architecture.

Impact:

1. More paths, less clarity
2. Duplicate pricing communication
3. Less consistent CTA behavior

### 10. There is no real SEO content layer yet

This is not an immediate failure, but it does mean the site currently depends on homepage + service pages + paid LPs without a content system to capture informational queries or nurture mid-funnel traffic.

Impact:

1. Limited long-tail SEO growth
2. Fewer internal links to strengthen service pages
3. Less authority-building content

---

## STEP 4 — Improved Website Architecture

### Recommended five-layer architecture

#### 1. Brand / trust pages

Pages that build confidence and orient the visitor:

1. `/`
2. `/about`
3. `/case-studies`
4. `/contact`
5. `/pricing` or `/solutions` if needed

#### 2. Service pages for SEO search intent

Pages built around what people actually search for:

1. `/services/google-ads-management`
2. `/services/meta-ads-management`
3. `/services/website-development`
4. `/services/landing-page-design`
5. `/services/ecommerce-development`
6. `/services/tracking-analytics-setup`
7. `/services/server-side-tracking`
8. `/services/marketing-consulting`

If resources are limited, launch these first:

1. Google Ads management
2. Meta Ads management
3. Website development
4. Tracking and analytics setup
5. Marketing consulting

#### 3. Landing pages for paid traffic

Pages designed for one offer, one audience, one CTA:

1. `/lp/free-marketing-audit`
2. `/lp/google-ads-audit`
3. `/lp/meta-ads-audit`
4. `/lp/website-for-small-business`
5. `/lp/tracking-audit`

#### 4. Case study pages

Each case study should support a service page and a paid offer:

1. `/case-studies/nejbalonky`
2. `/case-studies/propradlo`
3. `/case-studies/segway-tours-budapest`
4. Additional future pages tied to core services

#### 5. Optional SEO content pages

Only after the core funnel is clean:

1. `/insights/how-much-do-google-ads-cost-in-czechia`
2. `/insights/how-to-know-if-meta-ads-are-working`
3. `/insights/what-server-side-tracking-fixes`
4. `/insights/website-vs-landing-page-for-small-business`

### Recommended sitemap

```text
/
/about
/case-studies
/case-studies/nejbalonky
/case-studies/propradlo
/case-studies/segway-tours-budapest
/contact
/services
/services/google-ads-management
/services/meta-ads-management
/services/website-development
/services/landing-page-design
/services/ecommerce-development
/services/tracking-analytics-setup
/services/server-side-tracking
/services/marketing-consulting
/lp/free-marketing-audit
/lp/google-ads-audit
/lp/meta-ads-audit
/lp/website-for-small-business
/lp/tracking-audit
/insights/*
/privacy-policy
/terms-of-service
```

### Navigation recommendation

Primary navigation:

1. Services
2. Case Studies
3. About
4. Contact
5. Primary CTA: Book Audit / Book Consultation

Secondary navigation or footer:

1. Pricing / Packages
2. Legal pages
3. Automation as a secondary capability, not a primary top-nav service unless it is a deliberate growth focus

---

## STEP 5 — Homepage Audit and Redesign

### What the homepage should be

The homepage should not be the main sales page for every service. It should be the trust-building hub that answers:

1. Who is this agency for?
2. What outcomes does it create?
3. Why should I trust it?
4. Which service or next step fits me?

### Recommended homepage structure

#### 1. Hero

Goal: immediate clarity, audience match, strong CTA

Recommended direction:

Headline:
`Сайты, реклама и аналитика, которые приводят квалифицированные заявки для бизнеса в Чехии`

Subheadline:
`HaloAgency объединяет разработку сайта, Google Ads, Meta Ads и трекинг в одну систему роста — чтобы вы понимали, откуда приходят клиенты и как масштабировать результат.`

Primary CTA:
`Записаться на стратегический разбор`

Secondary CTA:
`Смотреть кейсы`

#### 2. Trust strip

Add a compact proof bar under the hero:

1. Industries served
2. Response time
3. Number of active clients / completed projects
4. Core markets served
5. Optional logos if available

#### 3. Problem / audience section

Explain the real pains the agency solves:

1. Traffic comes, but the site does not convert
2. Ads spend grows, but lead quality does not
3. Analytics is broken, so decisions are made blindly
4. Different contractors handle website, ads, and tracking with no single owner

#### 4. Services overview

Only show the four core services:

1. Website development
2. Google Ads / Meta Ads management
3. Tracking and analytics setup
4. Marketing consulting

Each card should answer:

1. Who it is for
2. What problem it solves
3. What the next step is

#### 5. Case study preview

Show 2 to 3 strongest proof blocks with:

1. Industry
2. Problem
3. Result
4. Relevant service
5. Link to full case study

#### 6. Process

Keep the process section, but simplify it around business clarity:

1. Audit
2. Plan
3. Launch
4. Optimize
5. Scale

#### 7. Credibility / social proof

Add:

1. Testimonials
2. Mini client logos if possible
3. Local-market proof
4. Guarantee / transparency statements

#### 8. Pricing guidance

Do not overload the homepage with full package logic. Replace the current heavy package block with a lighter “starting from” pricing frame and a link to pricing / service pages.

#### 9. FAQ

Keep a short homepage FAQ around:

1. Who you work with
2. Minimum budget
3. What happens after the call
4. Whether you work only in Prague / Czechia

#### 10. Final CTA

Use one clear final ask:

1. Book an audit
2. Request a consultation

### Homepage copy guidance

The current homepage tone is broad and creative. For conversion, it should become more outcome-driven.

Instead of:
`Весь маркетинг под одной крышей`

Prefer:
`Один партнёр отвечает за сайт, рекламу и аналитику — чтобы вы получали больше заявок, а не больше хаоса`

Instead of using generic CTA labels like:
`Связаться` or `Обсудить проект`

Prefer:

1. `Записаться на разбор`
2. `Получить план запуска`
3. `Проверить рекламу и трекинг`
4. `Обсудить сайт под лидогенерацию`

---

## STEP 6 — Service Page Audit

### General diagnosis

The service pages are already more sales-oriented than the homepage, which is good. The main issue is that they are still too broad to maximize SEO or ad relevance.

### What needs to improve on every service page

Each service page should clearly answer:

1. What exactly is the service?
2. Who is it for?
3. What problems does it solve?
4. What is included?
5. What results does it typically improve?
6. What does it cost to start?
7. What should the visitor do next?

### Recommended service page structure

#### 1. Search-intent hero

Example:
`Google Ads management for service businesses in Czechia`

#### 2. Who this service is for

By business model, traffic maturity, and budget stage.

#### 3. Key pains

Examples:

1. No qualified leads
2. Expensive CPA
3. Weak landing page conversion
4. Broken tracking

#### 4. What is included

Use a concrete checklist, not just abstract strategy language.

#### 5. Process

Keep it short and sequential.

#### 6. Proof

At least one relevant case study block on every service page.

#### 7. Pricing guidance

“Starting from” is enough. The site already uses this pattern well. Keep it visible.

#### 8. FAQ

Service-specific questions only.

#### 9. Final CTA

One main CTA tied to the service.

### Recommended service page split

#### Ads

Current issue:
The current `/ads` page is too broad.

Recommendation:

1. Keep `/ads` as an umbrella page only if needed
2. Create separate SEO pages for Google Ads and Meta Ads
3. Use the umbrella page to route visitors by need

#### Web

Current issue:
The current `/web` page combines too many website formats.

Recommendation:

1. Keep `/web` as an umbrella page
2. Create subpages for landing pages, corporate websites, and e-commerce if SEO demand matters

#### Tracking

Current issue:
The page explains the problem well, but it lacks proof depth and a dedicated audit offer.

Recommendation:

1. Add a relevant case study / proof block
2. Add a free tracking audit CTA
3. Separate “tracking setup” from “server-side tracking” if targeting more specific intent

#### Marketing consulting

Current issue:
This core service is missing as a dedicated page.

Recommendation:

Create `/services/marketing-consulting` with a strategy-led offer for businesses that need direction before execution.

---

## STEP 7 — Portfolio / Case Study Audit

### Current assessment

The case study detail pages are the right format direction. The problem is that the proof system is not yet disciplined enough to convert at a high level.

### What to improve

#### 1. Standardize every case study

Every page should follow:

1. Client context
2. Starting situation
3. Problem
4. Solution
5. What was implemented
6. Results
7. Visual proof
8. Relevant CTA

#### 2. Add business context to metrics

Metrics without context are weaker than they look.

Instead of:
`CPA ↓ 40%`

Prefer:
`CPA reduced from 1,950 CZK to 1,130 CZK in 60 days after restructuring Google Ads and fixing call tracking`

#### 3. Add service alignment

Each case study should support a specific service page:

1. Ads case study -> link to Google Ads / Meta Ads page
2. Web case study -> link to website development page
3. Tracking case study -> link to tracking setup page

#### 4. Remove or complete weak portfolio items

Do not show portfolio entries that do not have:

1. A clear story
2. A proof point
3. A real next step

#### 5. Add quote / testimonial inside case study pages

One short client quote adds major credibility.

### Recommended case study template

Hero:

1. Client name
2. Industry
3. Main result
4. Timeframe

Sections:

1. About the client
2. The challenge
3. What we changed
4. Implementation details
5. Results
6. Visual evidence
7. “Need a similar outcome?” CTA

### How portfolio entries become conversion assets

A portfolio entry stops being decorative and starts converting when it proves:

1. Relevance
2. Competence
3. Outcome
4. Repeatability

That means each case study should answer:

1. “Have you solved a problem like mine?”
2. “Do you understand my business type?”
3. “Can I see a before / after result?”

---

## STEP 8 — Missing Landing Pages

### Landing pages the site should add

#### 1. Free Marketing Audit

Audience:
Business owners who know something is not working but are not yet sure which service they need.

#### 2. Google Ads Optimization Audit

Audience:
Warm paid-search or retargeting traffic from businesses already running Google Ads.

#### 3. Meta Ads Funnel Audit

Audience:
Businesses spending on Meta but struggling with CPL / lead quality.

#### 4. Website for Small Business

Audience:
Small service businesses that need a site quickly and want a clear starting price.

#### 5. Tracking / Analytics Audit

Audience:
Businesses with paid traffic but weak attribution confidence.

#### 6. Marketing Consulting Call

Audience:
Higher-intent businesses comparing agencies or deciding what to prioritize first.

### How landing pages should differ from homepage and service pages

#### Homepage

Goal:
Trust and orientation

#### Service page

Goal:
Explain the service and qualify the visitor

#### Paid landing page

Goal:
Convert one traffic source around one offer with one CTA

### Recommended landing page structure

1. Strong, specific headline matched to the ad
2. Short subheadline tied to one problem and one result
3. Immediate form or booking CTA above the fold
4. 3 to 5 trust indicators
5. “What you get” section
6. Short proof block / case examples
7. FAQ
8. Final CTA

### Current LP recommendation

Do not keep three overlapping audit LPs long-term. Consolidate the best elements of:

1. `/lp/audit`
2. `/lp/v2`
3. `/lp/experimental`

into one main audit landing page template, then create offer-specific variants from that template.

---

## STEP 9 — CRO and UX Improvements

### Messaging improvements

#### 1. Replace umbrella messaging with problem-solution messaging

Current messaging often describes the agency category.

Higher-converting messaging should describe the prospect’s business problem and the outcome.

#### 2. Clarify the market focus

The current site appears to target Russian-speaking businesses in Prague / Czechia, but that is not consistently stated in the most strategic places.

Decision required:

1. If the niche is Russian-speaking businesses in Czechia, say it clearly above the fold
2. If the goal is broader Czech / international SMB, remove overly narrow signals and build multilingual strategy intentionally

### CTA improvements

#### 1. Use service-specific CTA copy

Examples:

1. `Проверить Google Ads`
2. `Получить план запуска рекламы`
3. `Запросить сайт под лидогенерацию`
4. `Проверить трекинг`

#### 2. Add persistent primary CTA in header

Recommended:
`Записаться на разбор`

#### 3. Keep CTA context through the funnel

If a user clicks from a package page, case study, or service page, the conversion form should preserve that context in the title and copy.

### Social proof improvements

Add proof at three levels:

1. Macro proof: number of projects, markets, industries
2. Mid proof: testimonials, logos, mini-result cards
3. Deep proof: case studies with before / after detail

### Friction reduction

#### 1. Add a booking option

Offer:

1. Direct calendar booking for high-intent visitors
2. Form for those not ready to book immediately

#### 2. Simplify first-step forms

For service pages, ask only what is needed to start the conversation:

1. Name
2. Email or phone
3. Website
4. Short problem statement

More qualification can happen after submission.

#### 3. Reduce route switching

Do not send package-page users back to homepage contact anchors. Keep them in a dedicated flow.

### Navigation improvements

1. Replace homepage-anchor navigation for About / Case Studies with real page links
2. Add `/contact`
3. Move packages out of primary nav unless pricing is a key buying path
4. Make case studies more discoverable from service pages

### Trust / compliance fixes

These are immediate:

1. Fix all `/privacy` links to `/privacy-policy`
2. Complete privacy policy company details
3. Unify legal entity naming across the site
4. Unify main contact email
5. Remove outdated promotional banners

---

## STEP 10 — Prioritized Action Plan

## HIGH IMPACT

### 1. Redesign the homepage as a trust hub

Why first:
It is the brand’s main entry point and currently carries too many competing roles.

### 2. Rebuild the site architecture and navigation

Why first:
Without role separation, every future page improvement will be less effective.

### 3. Create or split the core SEO service pages

Priority order:

1. Google Ads management
2. Meta Ads management
3. Website development
4. Tracking / analytics setup
5. Marketing consulting

Why:
These pages are the main lead-generation assets for intent-driven traffic.

### 4. Standardize and strengthen case studies

Why:
Proof is one of the biggest conversion levers for agency websites.

### 5. Fix trust / compliance issues immediately

Why:
These are direct conversion leaks, especially for paid traffic.

Immediate fixes:

1. Privacy link routing
2. Legal placeholders
3. Identity / email inconsistency
4. Outdated offers
5. Incomplete portfolio items

## MEDIUM IMPACT

### 6. Consolidate the three audit landing pages into one core template

Why:
This improves testing clarity, maintenance, and paid campaign consistency.

### 7. Create missing paid landing pages by offer

Priority:

1. Free marketing audit
2. Google Ads audit
3. Website for small business
4. Tracking audit

### 8. Build a dedicated `/contact` or `/book-a-call` page

Why:
The site needs one clear consultation destination.

### 9. Reposition package pages

Why:
Packages are useful, but they should support the service architecture instead of competing with it.

## LOW IMPACT

### 10. Add an SEO content layer

Why:
Useful for long-tail demand capture, but only after the main funnel is fixed.

### 11. Expand industry / solution pages

Examples:

1. Lead generation for local services
2. E-commerce growth system
3. Marketing system for clinics / salons / law firms

### 12. Reintroduce automation as a secondary capability

Why:
It is valuable, but it currently dilutes the main offer if kept too prominent in primary navigation.

---

## Recommended Redesign Sequence

### Phase 1

1. Fix trust / legal / routing issues
2. Rewrite homepage messaging and CTA logic
3. Update global navigation

### Phase 2

1. Redesign `/ads`, `/web`, `/tracking`
2. Add `/services/marketing-consulting`
3. Create `/contact`

### Phase 3

1. Standardize case studies
2. Clean the case study index
3. Add case study blocks into service pages

### Phase 4

1. Consolidate audit LPs
2. Launch offer-specific paid LPs
3. Connect ads to matching LPs instead of generic pages

### Phase 5

1. Add pricing architecture
2. Add content / SEO pages
3. Expand solution pages if needed

---

## Final Strategic Recommendation

The website does not need a bigger page count first. It needs cleaner intent separation.

The redesign should focus on this principle:

1. Homepage builds trust
2. Service pages capture search intent
3. Landing pages convert campaign traffic
4. Case studies prove outcomes
5. Contact / audit pages close the loop

If that architecture is implemented well, the current site can move from “creative agency brochure with good ingredients” to “lead-generation system with clear funnels and stronger conversion logic.”
