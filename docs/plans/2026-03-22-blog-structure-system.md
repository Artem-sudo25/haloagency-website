# Blog Structure System

Date: 2026-03-22
Goal: Define a reusable blog format for HaloAgency so each article supports search, warm traffic, and service-page conversion without drifting into generic agency-blog content.

## What The Blog Is For

The blog should not exist to publish abstract marketing thoughts.

It should do 4 jobs:

1. Capture informational search before the person is ready to contact an agency.
2. Explain practical problems in plain Russian for business owners in Czechia.
3. Route readers into the right service page, case study, or contact page.
4. Give Google, ChatGPT, Claude, Perplexity, and AI Overviews more quotable material tied to the services already on the site.

## What The Blog Is Not For

- broad “digital marketing tips”
- generic thought leadership with no concrete use case
- content that ignores Czech-market context
- articles that only repeat service-page copy in longer form
- soft, abstract writing about “brand growth” without a diagnostic angle

## Core Publishing Rules

- Write for Russian-speaking founders, owners, and practical marketing leads in Czechia.
- Use direct language. No agency theatre.
- Prefer diagnostic and decision-making articles over inspirational content.
- Each article should answer one real question with a clear next step.
- Each article should link naturally to:
  - one primary service page
  - one supporting page
  - one relevant case study where possible
- Each article should end with one main CTA only:
  - `Обсудить задачу`
  - or `Отправить короткий бриф`

## Recommended Blog Architecture

Blog URL pattern:

- `/blog`
- `/blog/[slug]`

Suggested first categories:

- `Сайты`
- `Реклама`
- `Трекинг и аналитика`
- `Автоматизация`

These categories do not need separate index pages yet. They can live as labels inside `/blog` until there are enough articles to justify deeper taxonomy.

## Default Article Block Structure

Every commercial-support article should use this base structure.

### 1. Hero

Purpose:
- match search intent
- make the problem instantly recognizable
- show that the article is practical, not theoretical

Include:
- H1
- short lead paragraph
- 2 to 4 bullets with what the reader will understand by the end
- optional author/date/read-time row later, once the blog is live

Do not include:
- large branded slogans
- vague subheads like “guide for success”

### 2. Quick Answer Block

Purpose:
- satisfy impatient readers and AI extractors quickly
- increase passage-level citability

Format:
- 3 to 6 short bullets or 1 short paragraph
- should answer the title question immediately

Example:
- `Если у вас один оффер и трафик из рекламы, чаще нужен лендинг. Если услуг несколько и нужно доверие, SEO и нормальная навигация, чаще нужен полноценный сайт.`

### 3. Problem Context

Purpose:
- show why the question matters in business terms
- frame the cost of choosing the wrong setup

What to include:
- common situation
- why the confusion appears
- what gets lost: leads, trust, budget, clarity, time

### 4. Decision Criteria Or Diagnostic Section

Purpose:
- make the article useful, not just informative

This is usually the strongest section in HaloAgency-style content.

Formats that fit:
- “Когда подходит X”
- “Когда лучше Y”
- “Как понять, где проблема”
- “5 признаков, что вам нужен не новый сайт, а аналитика”

### 5. Main Deep-Dive Sections

Purpose:
- answer the question fully
- build authority through structure and specifics

Recommended format:
- H2 for each major decision area
- H3 only where genuinely useful
- short paragraphs
- checklists or comparison tables where relevant

### 6. Real Example Or Case Block

Purpose:
- turn theory into something credible

Good formats:
- short case insert with 3 fields:
  - задача
  - что исправили
  - что это дало
- screenshot callout
- specific internal link to the closest case study

Each article should include at least one real example or a clear “типичный сценарий”.

### 7. Common Mistakes

Purpose:
- strengthen credibility
- handle objections naturally

Good use:
- “3 ошибки, из-за которых Google Ads кажется слабым каналом”
- “Почему бизнес заказывает сайт, хотя проблема в другом”

### 8. Practical Checklist Or Next-Step Block

Purpose:
- help the reader self-diagnose
- create a natural bridge into service pages

Formats:
- checklist
- mini audit rubric
- “что проверить за 15 минут”

### 9. FAQ

Purpose:
- capture long-tail queries
- improve skimmability
- support FAQ schema later if the content is visible and useful

Use 3 to 6 questions max.

### 10. Final CTA

Purpose:
- give one clear next action

CTA variants:
- `Обсудить задачу`
- `Отправить короткий бриф`

Supporting line should mention the exact context of the article:
- site question
- ads problem
- tracking setup

## Block Variants By Article Type

### Diagnostic Article

Best for:
- ads not working
- lost leads
- weak tracking

Preferred flow:
1. Hero
2. Quick answer
3. Why this happens
4. 5 to 7 causes
5. How to check each cause
6. Real example
7. Checklist
8. FAQ
9. CTA

### Comparison Article

Best for:
- landing page vs website
- Google Ads vs Meta Ads

Preferred flow:
1. Hero
2. Quick answer
3. Side-by-side comparison table
4. When option A fits
5. When option B fits
6. Typical mistakes
7. Real example
8. FAQ
9. CTA

### System Article

Best for:
- tracking
- automation
- connecting site, ads, and CRM

Preferred flow:
1. Hero
2. Quick answer
3. Why the “old simple setup” breaks
4. What a normal modern setup includes
5. Where money/leads are lost without it
6. Practical implementation path
7. Example
8. FAQ
9. CTA

## Recommended Article Length

Priority 1 articles should usually land here:

- comparison article: 1400 to 2200 words
- diagnostic article: 1600 to 2400 words
- system article: 1600 to 2600 words

Do not stretch to hit length.
If the answer is clear in 1400 good words, stop there.

## Internal Linking Rules

Each article should include:

- 1 primary service-page link in the first half
- 1 secondary supporting link in the second half
- 1 case-study link where relevant
- 1 final CTA link at the end

Recommended link distribution:

- early article: service page
- middle article: case study or related service
- end article: contact or growth-plan

## On-Page SEO Rules For Articles

Each article should have:

- one clear primary keyword
- 2 to 5 secondary keyword variations
- one H1 only
- a meta title that matches commercial intent without sounding spammy
- a meta description that promises a practical answer
- a clean slug in transliterated Russian
- article schema once the blog is live

Good titles:
- clear
- practical
- slightly commercial when relevant

Bad titles:
- overdramatic
- over-clever
- vague

## AI Search / Citation Rules

If we want these posts quoted by AI systems, each article should contain:

- one short direct answer near the top
- a few cleanly written diagnostic bullets
- plain definitions without jargon
- one or two memorable lines that can stand alone out of context
- concrete examples, not only claims

## Tone Rules

Write like a practical operator, not a content marketer.

Use:
- short paragraphs
- business consequences
- decision criteria
- concrete examples

Avoid:
- “в современном мире”
- “крайне важно”
- “помогает вывести бизнес на новый уровень”
- “не просто X, а Y”
- overstuffed intros
- obvious AI rhythm

## Default Writing Prompt For Future Articles

Use this brief when writing future blog posts:

`Напиши практическую статью для HaloAgency на русском языке для владельцев малого и среднего бизнеса в Чехии. Тон спокойный, уверенный, без агентского пафоса. Статья должна отвечать на конкретный вопрос, быстро давать прямой ответ, затем разбирать ситуацию по критериям, примерам и типичным ошибкам. В тексте должны быть естественные внутренние ссылки на релевантные услуги, кейсы и /contact. В конце — один понятный CTA.`

## What To Decide Later

These are not blockers for writing briefs, but they matter before publishing:

- who the visible author should be
- whether `/blog` gets category filters at launch
- whether each article gets its own custom OG image
- whether we publish with dates immediately or only after editorial cleanup
