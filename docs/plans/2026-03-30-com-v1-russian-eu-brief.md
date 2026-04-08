# HaloAgency .com V1 Brief For Russian-Speaking SMBs In Europe

Date: 2026-03-30

Related sources:

- [Product Marketing Context](/Users/artemhorvatsky/Documents/dev/haloagency-website/.agents/product-marketing-context.md)
- [Website Restructure PRD](/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/plans/2026-03-20-website-restructure-prd.md)
- [Website Content Migration Matrix](/Users/artemhorvatsky/Documents/dev/haloagency-website/docs/plans/2026-03-20-website-content-migration-matrix.md)
- [Current Russian Messaging](/Users/artemhorvatsky/Documents/dev/haloagency-website/messages/ru.json)
- [Case Study Cards](/Users/artemhorvatsky/Documents/dev/haloagency-website/lib/case-study-cards.ts)
- [Locale Routing](/Users/artemhorvatsky/Documents/dev/haloagency-website/i18n/routing.ts)

## 1. Purpose

This brief defines the lean V1 version of a `.com` website for HaloAgency focused on Russian-speaking SMB owners and practical marketing leads operating in the European Union.

The goal is not to clone the current Czech-market website on another domain.

The goal is to launch a simpler site that:

- keeps the strongest HaloAgency differentiator: website + ads + tracking + automation as one system
- removes most Czech-only framing from the primary message
- keeps the proof honest by using the current portfolio as existing operating proof, not fake pan-EU proof
- creates a tight structure that can support ads, referrals, direct traffic, and early outbound without needing a large SEO tree on day one

## 2. Strategic Decision

The `.com` V1 should be a validation site first, not a full content or SEO system.

That means:

1. fewer pages
2. one main CTA
3. one clear audience
4. one core promise
5. proof used carefully and truthfully

Working positioning:

> HaloAgency helps Russian-speaking SMBs in Europe connect website, ads, tracking, and automation into one working lead and sales system.

Important framing rule:

- target `Russian-speaking businesses operating in the EU`
- do not frame the site around serving businesses established in Russia
- do not pretend all EU countries are one market
- do frame HaloAgency as a Russian-speaking operator who can localize execution for the market where the client actually sells

## 3. V1 Audience

### Primary audience

- founders and owners of small and medium-sized businesses in Europe
- Russian-speaking operators who prefer strategy and communication in Russian
- businesses that already sell locally or regionally inside the EU
- companies that need more leads, sales, bookings, or cleaner attribution

### Best-fit scenarios

- local service businesses that need a stronger site and better lead flow
- SMBs already spending on Google Ads or Meta Ads but unsure what really works
- service businesses that lose leads because forms, tracking, CRM, or follow-up are weak
- e-commerce projects that need store + ads + analytics as one system

### Anti-persona

- enterprises with long procurement cycles
- clients looking for a cheap brochure site only
- businesses established in Russia or requiring sanction-risk workarounds
- clients who want branding theatre without commercial accountability

## 4. V1 Offer Architecture

The V1 site should not try to sell every service as a separate deep funnel.

It should sell three entry points plus one system narrative:

1. Websites
2. Ads
3. Tracking + Automation
4. System / How it works

This is enough for a first release because the current differentiator is the combined system, not a long list of micro-services.

## 5. V1 Information Architecture

Recommended structure:

```text
.com root
├── /ru/                         Primary Russian homepage
├── /ru/system                   How website, ads, tracking, and automation work together
├── /ru/websites                 Landing pages, business websites, e-commerce
├── /ru/ads                      Google Ads, Meta Ads, channel fit, launch logic
├── /ru/tracking-automation      Tracking, CRM, attribution, lead flow, automation
├── /ru/cases                    Proof index
├── /ru/about                    Founder, principles, operating model
├── /ru/contact                  Main conversion page
└── /ru/lp/*                     Optional paid pages, noindex, no full nav
```

### Not included in V1

- package detail pages
- full blog system
- country-specific SEO pages
- deep split pages like `/ru/google-ads` and `/ru/meta-ads`
- Czech-local channels such as Seznam in the main nav

### Expansion only after proof

Only add country pages after there is one of the following:

- real demand from that market
- active paid traffic into that market
- proof relevant to that market
- enough message variation that a separate page is justified

Possible later expansion:

```text
/ru/markets/czechia
/ru/markets/germany
/ru/markets/spain
/ru/google-ads
/ru/meta-ads
/ru/landing-pages
/ru/business-websites
/ru/ecommerce
```

## 6. Page Roles

| Route | Role | Primary CTA | Notes |
| --- | --- | --- | --- |
| `/ru/` | Position + route + trust | Обсудить задачу | Main entry point |
| `/ru/system` | Explain the integrated approach | Получить план | This is the differentiator page |
| `/ru/websites` | Sell the website direction | Обсудить сайт | Covers landing page, business website, e-commerce at overview level |
| `/ru/ads` | Sell the ads direction | Обсудить рекламу | Explain Google vs Meta vs readiness |
| `/ru/tracking-automation` | Sell tracking and process cleanup | Получить разбор | Combines attribution and ops logic |
| `/ru/cases` | Prove outcomes | Обсудить похожую задачу | Show current portfolio clearly |
| `/ru/about` | Build trust in operator model | Обсудить задачу | Founder-led credibility |
| `/ru/contact` | Convert ready visitors | Отправить вводные | Single main form destination |

## 7. Homepage Wireframe

### Section 1. Hero

Job:

- say who the site is for
- say what outcome HaloAgency helps create
- establish the system angle immediately

Content:

- eyebrow with audience
- headline with business result
- subheadline with scope
- primary CTA
- secondary CTA to cases

### Section 2. Quick proof strip

Job:

- reduce first-screen skepticism fast

Content:

- 3 to 4 short proof items drawn from current cases
- current portfolio disclaimer in small text if needed

Suggested proof items:

- `ROAS 5.6 в e-commerce`
- `стоимость лида ↓ 40%`
- `онлайн-брони +240%`
- `онлайн-записи +180%`

### Section 3. “С чего начать” router

Job:

- help the visitor self-select

Cards:

1. `Нужен сайт`
2. `Нужны заявки из рекламы`
3. `Нужно понять, где теряются лиды`

Each card should answer:

- when this route fits
- what HaloAgency actually does
- what next step looks like

### Section 4. System section

Job:

- explain why HaloAgency is not “just another contractor”

Structure:

1. Сайт
2. Трафик
3. Аналитика
4. Обработка заявки

Key message:

If one of these blocks is weak, the whole acquisition system underperforms.

### Section 5. Cases preview

Job:

- show breadth across business types

Recommended cards:

- Nejbalonky
- ProPradlo
- CatCafe

Why these:

- together they show e-commerce, service business, and booking/operations logic

### Section 6. Fit / Not fit

Job:

- qualify the lead
- reduce wrong-fit inquiries

Left column:

- works well if you need measurable growth, cleaner lead flow, or a stronger commercial website

Right column:

- not a fit if you want the cheapest possible site, brand-only work, or no interest in data and follow-up

### Section 7. Process

Job:

- make the first step feel manageable

Steps:

1. You send context
2. HaloAgency reviews site / ads / tracking / process
3. You get the first reasonable step
4. Work starts only after scope is clear

### Section 8. Founder / trust block

Job:

- make the model feel credible and direct

Required points:

- founder-led communication
- practical Russian-speaking communication
- AI used as an accelerator, not as the product
- focus on business result, not agency theatre

### Section 9. FAQ

Job:

- remove common friction

Suggested questions:

- Вы работаете только с Чехией?
- Можно ли вести проект полностью онлайн?
- Можно ли начать с одного направления, а не со всей системы?
- Работаете ли вы с Google Ads и Meta Ads под локальные рынки?
- Что если у меня уже есть сайт и реклама?

### Section 10. Final CTA

Job:

- convert visitors who already understand the offer

Keep it simple:

- short form
- one promise
- one expected response time

## 8. Russian Homepage Copy Outline

This is not final polished copy. It is the V1 working draft for structure and message hierarchy.

### Hero

**Eyebrow**

`Для русскоязычных владельцев SMB в Европе`

**Headline**

`Сайт, реклама и аналитика, которые работают как одна система заявок и продаж`

**Subheadline**

`Помогаем малому и среднему бизнесу в Европе навести порядок в сайте, рекламе, tracking и обработке лидов. Общение и стратегия — на русском. Исполнение — под рынок, где вы реально продаёте.`

**Primary CTA**

`Обсудить задачу`

**Secondary CTA**

`Посмотреть кейсы`

**Trust note**

`Без агентского шума, лишних подрядчиков и разрозненных решений.`

### Proof strip

`ROAS 5.6 в e-commerce`

`Стоимость лида ↓ 40%`

`Брони онлайн +240%`

`Записи онлайн +180%`

Small note:

`Текущий портфель кейсов в основном собран на проектах в Чехии и соседних рынках, но подход строится не вокруг одной страны, а вокруг внятной коммерческой системы.`

### Router section

**Title**

`С чего можно начать`

**Subtitle**

`Необязательно заказывать “всё сразу”. Важно понять, какой первый шаг реально мешает росту именно сейчас.`

**Card 1**

`Нужен сайт`

`Если текущая страница не объясняет оффер, не вызывает доверия и не доводит до заявки.`

**Card 2**

`Нужны заявки из рекламы`

`Если спрос уже есть, но реклама идёт в слабую страницу, без понятной аналитики и нормальной обработки лида.`

**Card 3**

`Нужно понять, где теряются лиды`

`Если сайт, CRM, реклама и формы существуют отдельно друг от друга, а цифрам трудно доверять.`

### System section

**Title**

`Почему у малого бизнеса редко ломается только реклама или только сайт`

**Body**

`Обычно проблема в связке. Человек кликает по объявлению, попадает на слабую страницу, оставляет заявку в неудобной форме, а потом эта заявка теряется в мессенджерах или вообще не попадает в аналитику. Поэтому мы смотрим не на один канал, а на весь путь до продажи.`

**Four pillars**

- `Сайт объясняет оффер и доводит до действия`
- `Реклама приводит правильный трафик`
- `Tracking показывает реальные заявки и продажи`
- `Автоматизация и CRM не дают лидам потеряться`

### Cases section

**Title**

`Кейсы, где система дала результат`

**Subtitle**

`Здесь важен не “красивый дизайн”, а то, как сайт, реклама, данные и процессы начинают работать вместе.`

### Fit section

**Title**

`Кому это обычно подходит`

**Fits**

- `владельцам SMB, которым нужны заявки, брони или продажи, а не просто новый визуал`
- `бизнесам, где уже есть спрос, но система работает кусками`
- `командам, которым удобнее обсуждать стратегию и решения на русском`

**Not fit**

- `если нужен самый дешёвый сайт без коммерческой логики`
- `если важен только визуальный ребрендинг`
- `если нет готовности считать заявки, продажи и стоимость лида`

### Process section

**Title**

`Как выглядит первый шаг`

**Step 1**

`Вы присылаете сайт, рекламу или короткое описание ситуации.`

**Step 2**

`Мы смотрим, где именно ломается путь до заявки: страница, канал, tracking или обработка.`

**Step 3**

`Предлагаем первый разумный шаг, а не максимальный чек.`

### Founder block

**Title**

`Нормальная коммуникация и прямой контакт с тем, кто отвечает за результат`

**Body**

`Проект не уходит в длинную цепочку менеджеров. Вы общаетесь напрямую с человеком, который смотрит на сайт, рекламу, аналитику и принимает решения по следующему шагу. AI используем там, где он ускоряет анализ, производство и оптимизацию, но не подменяет мышление и ответственность.`

### Final CTA

**Title**

`Если неясно, с чего начать, это нормальная стартовая точка`

**Body**

`Оставьте вводные: сайт, текущую рекламу, страну, в которой вы продаёте, и короткое описание задачи. Мы посмотрим, какой первый шаг сейчас даст больше пользы: сайт, реклама, tracking или разбор всей связки.`

**CTA**

`Отправить вводные`

## 9. Content Reuse Plan

### Reuse with light editing

- system positioning from the current homepage and about blocks
- Russian customer language from the current homepage, service pages, and context doc
- process logic from the current homepage process section
- case-study proof from current cases
- direct and calm founder voice

### Adapt heavily

- any page copy that says `в Чехии`, `в Праге`, `по Чехии`
- ads copy that assumes Seznam or Czech-only market logic
- all metadata and SEO phrasing built around Czech search intent
- footer and legal identity that currently signal only haloagency.cz

### Park for later

- package pages
- long blog structure
- Czech-only LP variants
- localized market pages
- detailed subservice splits

## 10. Implementation Rules

1. Use explicit locale paths on `.com`: `/ru/`, later `/cs/`, `/en/`.
2. Keep Russian as the main launch language, but not as the invisible default URL.
3. Keep `haloagency.cz` as the Czech-local site until the `.com` offer proves itself.
4. Do not claim pan-EU local expertise in every country on day one.
5. Use current cases as real operating proof and label them honestly.
6. Keep one primary CTA across homepage and core pages.
7. Create paid LPs only when there is a real traffic source that needs message match.

## 11. Recommended Next Build Steps

1. Approve this V1 structure and homepage direction.
2. Convert this brief into a route-by-route content spec.
3. Decide whether `.com` is a new codebase shell or a branch of the current Next app.
4. Build the V1 homepage and contact flow first.
5. Add service overview pages second.
6. Add cases and about before any blog or package work.
