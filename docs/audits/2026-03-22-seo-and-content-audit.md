# SEO And Content Audit

Date: 2026-03-22
Site: `https://haloagency.cz`
Scope: Technical SEO, structured data, image accessibility, crawl controls, AI crawler readiness, and blog topic opportunities

## Executive Summary

The site has a solid indexable service architecture and a working baseline of page metadata, JSON-LD, breadcrumbs, and sitemap generation. The core problem is not "missing SEO entirely". The problem is that the implementation is incomplete and uneven.

The biggest gaps are:

1. No `robots.txt` at all.
2. No explicit AI crawler policy layer.
3. No canonical discipline at route level.
4. Sitemap omissions and low-quality `lastModified` handling.
5. Thin schema on service and case-study pages.
6. Generic alt text on case-study imagery.
7. No blog or topic-cluster layer yet.

The result is that Google can still crawl and index the site, but the site is leaving search clarity, snippet quality, image understanding, and AI-surface visibility on the table.

## Critical Findings

### 1. Missing `robots.txt`

No `robots.txt` route or static file exists in the project root. That means:

- Google has no sitemap hint via `robots.txt`
- AI crawlers have no explicit allow/block guidance
- there is no crawl policy layer for low-value paths

Local evidence:

- no file found in `app` or `public` for `robots.ts`, `robots.txt`, or `llms.txt`

Why it matters:

- Google documents that crawlers fetch `robots.txt` before crawling and that `Sitemap:` can be declared there
- OpenAI, Anthropic, and Perplexity also rely on `robots.txt` directives for crawler control

Recommended fix:

- add `app/robots.ts`
- declare `Sitemap: https://haloagency.cz/sitemap.xml`
- allow indexable public routes
- explicitly control AI bots by user agent where needed

### 2. No explicit AI crawler readiness layer

The site has no `llms.txt` or equivalent human-readable AI discovery file, and no crawler-specific controls for:

- `OAI-SearchBot`
- `GPTBot`
- `ClaudeBot`
- `Claude-SearchBot`
- `PerplexityBot`

This is not a blocker for Google SEO, but it is a clear gap if the goal is visibility inside ChatGPT, Claude, and Perplexity.

Important nuance:

- `GPTBot` is for training-related crawling
- `OAI-SearchBot` is the crawler tied to ChatGPT search visibility
- Anthropic splits model, search, and user fetchers across `ClaudeBot`, `Claude-SearchBot`, and `Claude-User`
- Perplexity splits `PerplexityBot` and `Perplexity-User`

Recommended fix:

- define a deliberate robots policy instead of relying on default silence
- likely allow search/index bots you want visibility from
- separately decide whether to allow training bots
- add `llms.txt` as a supplemental discovery asset, not as a replacement for `robots.txt`

### 3. Sitemap is incomplete and uses weak freshness data

File: `/Users/artemhorvatsky/Documents/dev/haloagency-website/app/sitemap.ts`

Problems:

- missing live case study URLs such as `/case-studies/catcafe` and `/case-studies/doggy-salon`
- every URL uses `lastModified: new Date()`, so all pages look freshly changed on every deploy
- no blog path exists yet, so there is no content-growth layer to submit once publishing begins

Why it matters:

- Google recommends that sitemaps contain canonical URLs
- weak or noisy timestamps reduce the usefulness of sitemap freshness signals
- omitted URLs reduce discovery certainty for deeper content

Recommended fix:

- include every indexable route
- use stable content-based `lastModified` values where possible
- keep LP pages out of sitemap if they remain `noindex`
- add blog URLs once content is live

### 4. No canonical URLs declared on pages

Search results show `openGraph` metadata on many pages, but no route-level `alternates.canonical` implementation was found.

Local evidence:

- no `alternates:` surfaced in page metadata exports

Why it matters:

- the site is not currently multilingual, faceted, or parameter-heavy, so this is not a disaster
- but explicit canonicals make URL preference clearer to Google and reduce ambiguity if variants or shared links start to appear

Recommended fix:

- add `alternates: { canonical: "..." }` to indexable routes
- standardize it through a helper

## High-Priority Findings

### 5. Global metadata is too generic

File: `/Users/artemhorvatsky/Documents/dev/haloagency-website/app/layout.tsx`

Current defaults:

- title: `HaloAgency - Digital Agency`
- description: `Web Development, Ads & Tracking`

Why it matters:

- global metadata is the fallback for any route without its own metadata
- the current copy is generic, English, and weaker than the actual route positioning

Recommended fix:

- upgrade fallback metadata to a strong brand-level Russian primary default
- include default OG and Twitter metadata
- set a default site-level social image

### 6. Structured data exists, but it is thin and partly outdated

File: `/Users/artemhorvatsky/Documents/dev/haloagency-website/lib/seo.ts`

Current strengths:

- breadcrumb schema exists
- `WebPage`, `CollectionPage`, `Service`, `FAQPage`, and `Article` helpers exist
- homepage outputs organization and website schema

Current problems:

- organization schema still uses `hello@haloagency.cz` instead of `info@helloagency.cz`
- organization schema has no `logo`, `sameAs`, or postal address
- service schema is minimal and lacks stronger provider or offer context
- article schema for case studies lacks `datePublished`, `dateModified`, and `image`
- publisher/organization details are too thin for a trust-heavy agency site

Recommended fix:

- update contact data in schema immediately
- enrich organization schema with logo, address, and social profiles
- add image/date fields to article-like pages
- add stronger page-specific schema where appropriate

### 7. FAQ schema is present, but its SEO effect is limited for this type of site

Files include:

- `/Users/artemhorvatsky/Documents/dev/haloagency-website/app/web/landing-pages/page.tsx`
- similar service routes

FAQ JSON-LD is valid as a content-clarity layer, but Google’s FAQ rich result availability is now highly restricted, largely to authoritative health and government sites.

That means:

- keep FAQ schema if the content is useful and visible on page
- do not overestimate its ranking or SERP-rich-result upside
- do not rely on FAQ schema as a major SEO lever for commercial service pages

### 8. Case-study detail pages are under-optimized

Files:

- case-study detail routes under `/Users/artemhorvatsky/Documents/dev/haloagency-website/app/case-studies/*/page.tsx`
- layout: `/Users/artemhorvatsky/Documents/dev/haloagency-website/components/case-studies/CaseStudyLayout.tsx`

Problems:

- only the top-level `/case-studies` page exports route metadata
- detail pages appear to rely mostly on shared layout behavior
- article schema is present, but the content is really closer to a case-study/article hybrid and lacks stronger publishing fields
- hero and gallery image alt text is generic

Recommended fix:

- add per-case `metadata`
- add better title, description, canonical, and OG data per case
- use case-specific descriptive alt text
- consider `Article` or `CreativeWork` improvements with image/date metadata

### 9. Alt text quality is uneven

Good:

- founder imagery is descriptive
- homepage/project preview alt text is serviceable

Weak:

- `/Users/artemhorvatsky/Documents/dev/haloagency-website/components/case-studies/CaseStudyLayout.tsx`
  - `alt="Search Result"`
  - `alt="Full view"`
  - `alt="Analytics Dashboard"`
  - `alt="{title} mockup"`
- several LP testimonial and proof images use generic names like `Клиент HaloAgency`

Why it matters:

- Google uses alt text alongside page context to understand images
- generic alt text weakens image search value and accessibility

Recommended fix:

- rewrite case-study image alt text to describe what is shown and why it matters
- keep decorative images empty-alt only if they are truly decorative
- avoid stuffing keywords into alt text

## Medium-Priority Findings

### 10. No Twitter metadata layer

The site uses `openGraph` metadata on many pages, but no `twitter` metadata surfaced in route metadata exports.

Why it matters:

- social share previews are less controlled
- page-level sharing quality is weaker than it needs to be for case studies and service pages

Recommended fix:

- add shared Twitter card metadata defaults
- add route-level overrides for important pages

### 11. OG image strategy is too generic

File: `/Users/artemhorvatsky/Documents/dev/haloagency-website/app/opengraph-image.tsx`

Current state:

- one generic generated OG image for the whole site

Why it matters:

- homepage is covered
- service pages and case studies miss a chance to reinforce topic relevance and CTR in shares

Recommended fix:

- keep the global default
- add per-route OG images for:
  - `/ads`
  - `/web`
  - `/tracking`
  - `/automation`
  - major case studies

### 12. Breadcrumbs are implemented well, but only part of the opportunity is used

Files:

- `/Users/artemhorvatsky/Documents/dev/haloagency-website/components/navigation/Breadcrumbs.tsx`
- `/Users/artemhorvatsky/Documents/dev/haloagency-website/lib/seo.ts`

Current state:

- visible breadcrumbs exist
- breadcrumb JSON-LD exists

Opportunity:

- maintain breadcrumb coverage consistently on every deep route
- ensure metadata and internal-link architecture always align with breadcrumb hierarchy

### 13. Homepage still contains a content magnet route in the main flow

File: `/Users/artemhorvatsky/Documents/dev/haloagency-website/app/page.tsx`

The homepage still imports and renders `GrowthPlanMagnet`.

This is more of an intent and crawl-focus issue than a hard SEO error, but it affects:

- homepage clarity
- internal focus
- conversion path cleanliness

Recommended fix:

- keep homepage primarily as brand + service-routing + proof
- let `/growth-plan` live as a dedicated indexed or selectively indexed mid-funnel route, depending on long-term strategy

## AI Search / GEO Readiness

### Current state

The site is not hostile to AI crawlers, but it is not intentionally prepared for them either.

What already helps:

- clean route hierarchy
- visible service specialization
- FAQ content on service pages
- case studies
- JSON-LD baseline

What is missing:

- explicit crawler rules in `robots.txt`
- `llms.txt`
- richer author/organization identity
- more quotable expert content
- blog content that answers concrete intent-driven questions
- consistent canonical and metadata control

### Recommended AI-crawler policy

Recommended decision framework:

- Allow:
  - `Googlebot`
  - `OAI-SearchBot`
  - `Claude-SearchBot`
  - `PerplexityBot`
- Decide intentionally on:
  - `GPTBot`
  - `ClaudeBot`
- Review whether to allow user fetchers:
  - `ChatGPT-User`
  - `Claude-User`
  - `Perplexity-User`

Suggested stance for this site:

- if the goal is discovery and citation, allow search bots
- if the goal is brand protection from training reuse, disallow training bots while allowing search bots

### `llms.txt` recommendation

`llms.txt` is not a Google ranking factor and is not a substitute for `robots.txt`.

Still worth adding as a supplemental asset because it can:

- summarize the site for AI agents
- expose preferred core routes
- list case studies, services, contact, and legal URLs in a machine-friendly way

Recommended sections:

- site summary
- key services
- key proof pages
- contact
- legal

## Recommended Fix Order

### Phase 1: Crawl and indexing control

1. Add `app/robots.ts`
2. reference sitemap in robots
3. define AI crawler policy
4. add `llms.txt`

### Phase 2: Metadata and canonical discipline

1. upgrade global fallback metadata
2. add canonical URLs to all indexable routes
3. add Twitter metadata defaults
4. add per-page OG for major routes

### Phase 3: Structured data cleanup

1. fix outdated schema contact email
2. enrich organization schema
3. improve case-study article schema
4. validate JSON-LD in Rich Results Test

### Phase 4: Image and proof optimization

1. rewrite generic alt text
2. improve image filenames where practical
3. strengthen case-study metadata

### Phase 5: Content expansion

1. add `/blog`
2. publish 3 to 5 cornerstone articles first
3. interlink blog posts into service pages, cases, and contact

## Blog Opportunity Audit

The site is strong on service pages but weak on informational search capture. Right now it can rank for branded and service-intent queries, but it is missing the content layer that captures:

- early research
- comparison intent
- diagnostic intent
- AI-search citation opportunities

The best blog strategy is not broad "marketing tips". It should be tightly tied to the exact commercial system the site sells:

- web pages for conversion
- Google Ads / Meta Ads
- tracking and analytics
- automation
- local business growth in Czechia

## 10 Blog Topics To Start With

### 1. Когда бизнесу в Чехии нужен лендинг, а когда полноценный сайт

Why this helps:

- supports `/web/landing-pages` and `/web/business-websites`
- captures a classic decision-stage query
- helps warm leads choose the right project scope

What to do:

- compare landing page vs business website by traffic source, offer clarity, budget, and speed
- include examples from service businesses and local SMBs

Keywords:

- `лендинг или сайт`
- `что лучше лендинг или сайт`
- `сайт для бизнеса в Чехии`
- `лендинг для рекламы`

### 2. Почему Google Ads не работает: 7 причин, которые не в рекламе

Why this helps:

- strong bridge into `/ads/google-ads`, `/tracking`, and `/web`
- fits audit-led lead generation
- positions you as someone who sees the full system, not just ad settings

What to do:

- focus on landing page mismatch, broken tracking, bad offer, weak follow-up, low-margin economics
- end with an audit CTA

Keywords:

- `почему google ads не работает`
- `нет заявок с google ads`
- `дорогие лиды google ads`
- `аудит google ads`

### 3. Как понять, что проблема не в сайте, а в аналитике и обработке заявок

Why this helps:

- supports `/tracking` and `/automation`
- captures diagnostic intent
- differentiates you from agencies that jump straight to redesign

What to do:

- explain typical false positives when owners blame the website
- show signs of broken attribution or lead handling

Keywords:

- `почему мало заявок с сайта`
- `настройка аналитики сайта`
- `как понять где теряются заявки`
- `crm и заявки с сайта`

### 4. Что должно быть на сайте услуг, чтобы он приводил заявки

Why this helps:

- supports `/web/business-websites`
- aligns with local service businesses, one of your clearest audiences
- can be cited by AI tools answering practical SMB questions

What to do:

- cover structure, offer clarity, proof, FAQ, CTA, contact path, mobile speed
- use screenshots or mini case excerpts

Keywords:

- `сайт услуг что должно быть`
- `сайт для сервисного бизнеса`
- `структура сайта услуг`
- `как повысить заявки с сайта`

### 5. Нужен ли бизнесу в Чехии Meta Ads или лучше начать с Google Ads

Why this helps:

- supports both `/ads/google-ads` and `/ads/meta-ads`
- captures commercial comparison intent
- helps pre-qualify channel fit

What to do:

- compare search intent, impulse demand, retargeting, offer maturity, and budget realities
- include cases where both channels work together

Keywords:

- `google ads или facebook ads`
- `meta ads или google ads`
- `какую рекламу выбрать для бизнеса`
- `реклама для бизнеса в чехии`

### 6. Как настроить сайт под рекламу, чтобы не сливать бюджет

Why this helps:

- supports `/web/*` and `/ads/*`
- strong bridge article between web and media services
- very usable in both SEO and sales

What to do:

- explain the handoff between ad promise and landing page
- cover headline match, CTA clarity, speed, forms, and tracking events

Keywords:

- `сайт под рекламу`
- `лендинг для google ads`
- `как подготовить сайт к рекламе`
- `конверсия лендинга`

### 7. Что такое нормальный трекинг для малого бизнеса: без BigQuery и боли

Why this helps:

- supports `/tracking`
- captures a practical audience that feels analytics is too complex
- positions HaloAgency as pragmatic, not enterprise-theater

What to do:

- explain the minimum viable stack: GA4, GTM, form events, ad platform conversions, call or lead tracking where needed
- keep it plain-language

Keywords:

- `настройка аналитики для малого бизнеса`
- `ga4 для бизнеса`
- `что отслеживать на сайте`
- `настройка gtm`

### 8. Как связать сайт, рекламу и CRM в одну рабочую систему

Why this helps:

- supports `/automation`, `/tracking`, `/contact`
- reinforces your system-level positioning
- good candidate for AI-citation because it answers a concrete operations question

What to do:

- outline the flow from click to form to CRM to follow-up to reporting
- explain common breakpoints

Keywords:

- `сайт реклама crm интеграция`
- `автоматизация заявок`
- `как связать сайт и crm`
- `обработка лидов с сайта`

### 9. Как подготовить интернет-магазин к Google Shopping и Meta Catalog Ads

Why this helps:

- supports `/web/ecommerce`
- supports paid-media upsell
- highly commercial and specific

What to do:

- cover product feed quality, structure, tracking, catalog hygiene, merchant setup, remarketing readiness

Keywords:

- `подготовка магазина к google shopping`
- `google shopping для интернет-магазина`
- `meta catalog ads`
- `реклама интернет-магазина`

### 10. Сколько должен стоить сайт для малого бизнеса в Чехии и от чего зависит цена

Why this helps:

- supports `/packages`, `/web/business-websites`, `/web/landing-pages`, `/web/ecommerce`
- captures pricing-intent traffic
- reduces hesitation before contact

What to do:

- explain what changes price: structure, content, integrations, catalog size, tracking, copy, language versions
- avoid fake precision and show realistic ranges tied to scope

Keywords:

- `сколько стоит сайт в чехии`
- `цена лендинга`
- `стоимость сайта для бизнеса`
- `сколько стоит интернет-магазин`

## Best First 3 Posts

If publishing starts now, the highest-leverage first three are:

1. `Когда бизнесу в Чехии нужен лендинг, а когда полноценный сайт`
2. `Почему Google Ads не работает: 7 причин, которые не в рекламе`
3. `Что такое нормальный трекинг для малого бизнеса: без BigQuery и боли`

Why these three first:

- they connect directly to your three strongest commercial clusters
- they are practical enough to rank and to be cited by AI systems
- they build authority without drifting into generic agency-blog territory

## External References

- Google robots.txt documentation: https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec
- Google robots.txt creation guide: https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt
- Google sitemap guide: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google image SEO and alt text guidance: https://developers.google.com/search/docs/appearance/google-images
- Google canonical guidance: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Google FAQ structured data guidance: https://developers.google.com/search/docs/appearance/structured-data/faqpage
- OpenAI crawler overview: https://platform.openai.com/docs/bots/overview-of-
- Anthropic crawler policy: https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Perplexity crawler docs: https://docs.perplexity.ai/docs/resources/perplexity-crawlers
