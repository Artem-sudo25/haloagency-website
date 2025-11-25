# HALOAGENCY - CLAUDE CODE BUILD GUIDE

**🚀 Complete build guide optimized for Claude Code autonomous development**

**KEEPS: Modern UI from screenshots + All technical stack**

---

## 🎯 WHAT WE'RE BUILDING

Marketing agency website targeting Russian-speaking SMBs in Czech Republic

**Positioning:**
"Технический маркетинг для бизнеса в Чехии"

**Key Differentiators:**
- Modern websites in 3-7 days (vs 2-4 weeks traditional)
- Server-side tracking 70-85% accuracy (vs 50-60% standard)  
- Transparent pricing (15k/35k+8k/50k+12k)
- AI-powered development
- Data-driven advertising

**Tech Stack:**
```
Frontend: Next.js 15 + React 19 + TypeScript + Tailwind CSS
UI: Shadcn/ui + Framer Motion animations
Forms: React Hook Form + Zod validation
Tracking: GTM + GA4 + Stape.io (server-side) + Consent Mode v2
Email: Resend
Automation: N8N (website analysis lead magnet)
Hosting: Vercel (free tier)
Cost: ~525 CZK/month total
```

**Timeline:** 2-3 days intensive work

---

## 🎨 DESIGN SYSTEM

### Colors
```typescript
// tailwind.config.ts colors
{
  primary: '#667eea',           // Purple-blue gradient start
  'primary-dark': '#764ba2',    // Purple gradient end
  'accent-blue': '#3B82F6',     // Web development
  'accent-orange': '#F97316',   // Advertising  
  'accent-green': '#10B981',    // Analytics
  'bg-dark': '#0A1628',         // Dark sections
  'bg-dark-alt': '#1a2942',     // Alternative dark
  'bg-light': '#F8F9FA',        // Light sections
}
```

### Typography
- Font: Inter (with Cyrillic support)
- H1: 56px → 36px mobile
- H2: 48px → 32px mobile
- Body: 18px → 16px mobile

### Component Patterns

**Glassmorphic Cards:**
```tsx
className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all"
```

**Animated Metrics (Hero):**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="glassmorphic-card"
>
  <CountUp end={145} suffix="%" />
</motion.div>
```

---

## 📄 HOMEPAGE STRUCTURE (6 SECTIONS)

### Section 1: Hero (Full Viewport)

**Layout:** 60/40 split - content left, animated metrics right

**Key Elements:**
- Dark gradient background (`from-[#0A1628] via-[#1a2942] to-[#0A1628]`)
- Eyebrow: "🚀 Digital Agency of the Future"
- H1: "Технический маркетинг для бизнеса в Чехии" (with gradient on last part)
- Subheadline: Mentions 3-7 days, 70-85% tracking
- 2 CTAs: "Посмотреть кейсы ↓" (gradient blue), "Узнать цены →" (outline)
- Trust badges: ⚡ 3-7 дней, 💎 От 15,000 CZK, 📊 70-85% tracking
- Tech stack footer: GOOGLE | META | NEXT.JS | STAPE

**Right Side - 3 Animated Metric Cards:**
1. ПРОДАЖИ: +145% (green accent, trending up icon)
2. КОНВЕРСИИ: +87% (blue accent, trending up icon, offset right)
3. ROI: 3.2x (purple accent, zap icon)

**Animations:**
- Staggered fade-in (Framer Motion)
- CountUp numbers
- Hover: glow effect on cards
- Subtle gradient shift

**Code Structure:**
```tsx
<section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0A1628] via-[#1a2942] to-[#0A1628]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-5 gap-12">
      {/* LEFT - col-span-3 */}
      <div className="lg:col-span-3">
        {/* Eyebrow, H1, Subheadline, CTAs, Trust badges */}
      </div>
      {/* RIGHT - col-span-2 (hidden on mobile) */}
      <div className="lg:col-span-2 hidden lg:block">
        {/* 3 glassmorphic metric cards with animations */}
      </div>
    </div>
  </div>
</section>
```

---

### Section 2: Services

**Background:** Light (#F8F9FA) for contrast

**Layout:** 3 columns (stack mobile)

**Header:**
- Eyebrow: "🔧 Наши услуги"
- H2: "Что мы делаем"
- Subtitle: "Полный цикл digital-маркетинга"

**3 Service Cards:**

**Card 1 - Web Development (Blue #3B82F6):**
- Icon: Code2 in blue circle
- Border-left: 4px blue
- Title: "Разработка сайтов"
- Description: Next.js, 3-7 days, landing to e-commerce
- Price badge: "От 15,000 CZK"
- Link: /web
- Hover: lift -translate-y-2 + shadow

**Card 2 - Advertising (Orange #F97316):**
- Icon: Megaphone in orange circle
- Border-left: 4px orange
- Background: subtle orange gradient
- Title: "Реклама (Ads)"
- Description: Google + Meta with server-side tracking
- Price badge: "От 8,000 CZK/мес"
- Link: /ads

**Card 3 - Analytics (Green #10B981):**
- Icon: BarChart3 in green circle
- Border-left: 4px green
- Title: "Аналитика и трекинг"
- Description: Server-side GTM + Meta CAPI, 70-85% accuracy
- Price badge: "От 8,000 CZK setup"
- Link: /tracking

**Bottom CTA:**
"Нужно комплексное решение? → Готовые пакеты"

---

### Section 3: Projects

**Background:** Dark (#0A1628 or #1a2942)

**Layout:** Bento grid (asymmetric)

**Header:**
- Eyebrow: "💼 Избранные кейсы"
- H2: "Результаты, которыми мы гордимся" (with gradient on last part)
- Button (top right): "Все проекты →"

**Project Cards (Bento Grid):**

**Project 1 - Nejbalonky (Large - 2x2):**
- Badge: "E-commerce" (blue)
- Number watermark: "01" (huge, white/10)
- Title: "Nejbalonky.cz"
- Subtitle: "E-commerce для party supplies с интеграцией 1C"
- Metric: "+140% конверсий" (green badge with TrendingUp icon)
- Description: Server-side tracking восстановил 38% потерянных конверсий
- Tech badges: Next.js, WooCommerce, Stape
- CTA: "Смотреть кейс →"

**Project 2 - ProPradlo (Medium - 1x1):**
- Badge: "Web App" (teal)
- Number: "02"
- Title: "ProPradlo.cz"
- Metric: "Real-time бронирование" (blue badge)

**Project 3 - Segway Tours (Medium - 1x1):**
- Badge: "SEO + Ads" (amber)
- Number: "03"
- Title: "Segway Tours Budapest"
- Metric: "+240% органика" (green badge)

**Gradient Backgrounds on Cards:**
- Card 1: `from-blue-900/50 to-purple-900/50`
- Card 2: `from-teal-900/50 to-cyan-900/50`
- Card 3: `from-amber-900/50 to-orange-900/50`

---

### Section 4: Lead Magnet (Tracking Diagnostic)

**Background:** Dark gradient

**Layout:** 50/50 split

**LEFT SIDE:**
- Icon: AlertTriangle (orange, 64px, in circle with glow)
- Eyebrow: "🔍 Бесплатная проверка"
- H2: "Почему ваши конверсии не отслеживаются?"
- Description: Check GA, GTM, Meta Pixel, etc in 30 seconds
- Benefits list:
  * ✓ Мгновенный анализ (30 секунд)
  * ✓ Детальный отчёт на email
  * ✓ Конкретные рекомендации
  * ✓ Оценка потерянных конверсий

**RIGHT SIDE - Interactive Tool:**

**Status Indicators (glassmorphic card):**
```
✅ Google Tag Manager | "Обнаружен и работает" (green bg, pulsing dot)
❌ Google Analytics 4 | "Не найден" (red bg)
⚠️ Meta Pixel | "Обнаружен, но не работает" (orange bg, pulsing dot)
❌ Server-side tracking | "Не настроен" (red bg)

Accuracy Score Card:
52% | "Вы теряете ~48% конверсий" (orange/red gradient)
```

**Form (below status):**
- Input: URL (placeholder: https://ваш-сайт.com)
- Input: Email (placeholder: ivan@company.cz)
- Checkbox: Consent
- Button: "Проверить трекинг →" (gradient orange to red)
- Small text: "Обычно анализ занимает 30-60 секунд"

**Alternative CTA:**
"Или: [Получить видео-аудит (бесплатно)]"

**Backend (N8N):**
- Connects to N8N webhook
- Fetches website HTML
- Checks for tracking tags
- AI analyzes (Claude API)
- Generates report
- Sends via Resend
- Returns summary

---

### Section 5: Packages

**Background:** Dark (#0A1628)

**Header:**
- Eyebrow: "💎 Тарифы"
- H2: "Пакеты услуг"
- Subtitle: "Выберите подходящий тариф"

**CRITICAL: Tier 2 MUST BE VISUALLY DOMINANT**

**Tier 1 - Start:**
- Title: "Start"
- Price: "от 15,000 Kč" ← CORRECT (not 25k!)
- Description: "Идеально для малого бизнеса"
- Features (5-6 with checkmarks):
  * Landing (до 5 блоков)
  * Адаптивный дизайн
  * Базовая SEO
  * Форма заявки
  * 1 месяц поддержки
- Timeline: "Срок: 3-5 дней"
- Button: "Выбрать тариф" (outline)

**Tier 2 - Business ⭐ DOMINANT:**
- Badge (top): "⭐ ПОПУЛЯРНЫЙ" (gradient blue, elevated)
- Glow effect: `bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl`
- Scale: `md:scale-110 md:-translate-y-8`
- Border: `border-2 border-primary`
- Title: "Business" (larger text)
- Price: "от 35,000 Kč + 8,000 Kč/мес" ← CORRECT (not 55k!)
- Description: "Комплексное решение для роста"
- Social proof box: "80% наших клиентов выбирают это" (green bg)

**Features in 2 sections:**
Setup (35,000 Kč):
  * Многостраничный сайт
  * CMS для управления
  * Расширенная аналитика (GA4 + GTM)
  * Интеграция с CRM
  * 3 месяца поддержки

Ежемесячно (8,000 Kč):
  * Настройка рекламы (Google + Meta)
  * Server-side tracking (Stape.io)
  * Ежемесячная оптимизация
  * Детальные отчёты

- Timeline: "Срок setup: 7-10 дней"
- Promo box: "🎁 Первые 5 клиентов: 25,000 CZK setup" (orange/red gradient)
- Button: "Выбрать тариф →" (gradient, larger, full width)

**Tier 3 - Enterprise:**
- Title: "Enterprise"
- Price: "Индивидуально"
- Description: "Сложные веб-сервисы"
- Features (6-7 with checkmarks):
  * Уникальный дизайн
  * Сложная архитектура
  * Личные кабинеты
  * API интеграции
  * Приоритетная поддержка
  * SLA
- Pricing note: "От 50,000 CZK + 12,000/мес"
- Button: "Обсудить проект" (outline)

**Bottom CTA:**
"Не уверены какой пакет? [Бесплатная консультация - 30 минут]"

---

### Section 6: Contact + Footer

**Background:** Dark gradient

**Layout:** 40/60 split (info/form)

**LEFT (40%):**
- Eyebrow: "✉️ Свяжитесь с нами"
- H2: "Готовы обсудить проект?"
- Description: "Свяжемся в течение рабочего дня"

**Contact Methods (4 cards):**
1. Email: hello@haloagency.cz (Mail icon)
2. Telegram: @haloagency (MessageCircle icon)
3. Phone: +420 123 456 789 (Phone icon)
4. Office: Прага, Чехия (MapPin icon)

**Quick Links:**
- Разработка, Реклама, Аналитика
- Все пакеты, Кейсы

**RIGHT (60%) - Form Card:**
- Inputs: Name, Email (grid 2 cols)
- Service interest buttons (5 options like screenshot):
  [Разработка сайтов] [Реклама (Ads)] [Аналитика и Трекинг]
  [Готовый пакет] [Другое]
- Textarea: "О проекте" (5 rows)
- Button: "Отправить заявку →" (gradient, full width)
- Small text: "Обычно отвечаем в течение 2 часов"
- Alternative: "Или: [Записаться на звонок →]" (Calendly)

**FOOTER:**
- Left: "© 2025 HaloAgency"
- Right: Privacy Policy | Terms of Service

---

## 🔧 TECHNICAL INTEGRATION

### 1. Consent Management (FIRST!)

```tsx
// app/layout.tsx
<Script 
  id="cookieyes" 
  src="https://cdn-cookieyes.com/client_data/YOUR_ID/script.js"
  strategy="beforeInteractive"
/>
```

**Setup:**
1. Sign up: cookieyes.com (FREE)
2. Add domain
3. Configure banner (Russian text)
4. Enable Consent Mode v2
5. Get script URL

**Banner text:**
```
"Мы используем cookies для улучшения сайта и измерения 
эффективности рекламы. Это помогает нам лучше вам служить."

[Принять всё] [Отклонить всё] [Настройки]
```

---

### 2. GTM + GA4

```tsx
<Script 
  id="gtm"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXXXXX');`
  }}
/>
```

**In GTM Dashboard:**
- Add GA4 Configuration tag (Measurement ID: G-XXXXXXXXXX)
- Add Meta Pixel base code
- Configure form submission tracking
- Publish container

---

### 3. Stape.io Server-Side ⭐ CRITICAL

**Why:** Recovers 30-50% lost conversions - YOUR COMPETITIVE EDGE

**Cost:** $20/month (~500 CZK) - WORTH 10-50k CZK/month per client

**Setup:**
1. Sign up: stape.io
2. Create server container
3. Configure subdomain: `sgtm.haloagency.cz`
4. Add DNS CNAME: `sgtm → xxxxx.stape.io`
5. In client GTM: "Send to server container" ✅
6. Server URL: `https://sgtm.haloagency.cz`
7. Configure server tags:
   - GA4 (server-side)
   - Meta CAPI (get access token from Meta Events Manager)
8. Test: Meta Events Manager should show "Server" badge

---

### 4. Resend Email

```bash
npm install resend
```

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { name, email, service, message } = await request.json()
  
  await resend.emails.send({
    from: 'HaloAgency <hello@haloagency.cz>',
    to: email,
    subject: 'Спасибо за вашу заявку!',
    html: `<h2>Здравствуйте, ${name}!</h2>...`
  })
  
  return Response.json({ success: true })
}
```

**Setup:**
1. Sign up: resend.com (FREE tier: 3k emails/month)
2. Add domain
3. Configure DNS (4 records)
4. Verify domain
5. Get API key
6. Add to Vercel: `RESEND_API_KEY=re_xxxxx`

---

### 5. N8N Workflow (Lead Magnet)

**Connects:** Form → API → N8N → AI → Email → User

**Nodes:**
1. Webhook (trigger)
2. Fetch website (HTTP request)
3. Extract tracking tags (Code node)
4. AI analysis (Claude API)
5. Generate HTML report (Code node)
6. Send email (Resend)
7. Respond to webhook

**See:** N8N-WORKFLOW.md for complete implementation

**Cost:** FREE (under 2.5k executions/month)

---

## 📁 PROJECT STRUCTURE

```
haloagency/
├── app/
│   ├── layout.tsx              # GTM + Consent + fonts
│   ├── page.tsx                # Homepage (6 sections)
│   ├── globals.css
│   ├── web/page.tsx
│   ├── ads/page.tsx
│   ├── tracking/page.tsx       # Lead magnet here
│   ├── packages/
│   │   ├── page.tsx
│   │   ├── start/page.tsx
│   │   ├── business/page.tsx
│   │   └── enterprise/page.tsx
│   ├── case-studies/page.tsx
│   └── api/
│       ├── contact/route.ts
│       └── analyze-website/route.ts
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   ├── LeadMagnet.tsx
│   │   ├── Packages.tsx
│   │   └── Contact.tsx
│   ├── ui/                     # Shadcn
│   └── animated/
│       └── CountUp.tsx
├── lib/
│   ├── utils.ts
│   └── validations.ts
└── public/images/
```

---

## 🚀 CLAUDE CODE USAGE

**How to build with Claude Code:**

```bash
# Phase 1: Setup
claude-code "Initialize Next.js 15 project with TypeScript, Tailwind CSS, and App Router. Install Shadcn/ui (button, card, input, textarea, label, badge, checkbox). Install Framer Motion, Lucide React, React Hook Form, Zod. Configure Tailwind with colors from CLAUDE.md. Set up Inter font with Cyrillic support. Create folder structure."

# Phase 2: Hero
claude-code "Build Hero section following CLAUDE.md specifications. Create app/page.tsx with full-viewport hero section. 60/40 split layout. Left side: eyebrow, H1 with gradient, subheadline, 2 CTAs, trust badges. Right side: 3 animated glassmorphic metric cards (ПРОДАЖИ +145%, КОНВЕРСИИ +87%, ROI 3.2x) with CountUp numbers and Framer Motion animations. Dark gradient background. Tech stack footer. Use exact content from CLAUDE.md Section 1."

# Phase 3: Services
claude-code "Build Services section below Hero. Light background. 3 service cards in grid with colored left borders (blue/orange/green). Each card: icon in colored circle, title, description, price badge, 'Подробнее' link. Hover: lift and shadow. Use exact content from CLAUDE.md Section 2."

# Phase 4: Projects
claude-code "Build Projects section. Dark background. Bento grid layout with 3 project cards (Nejbalonky large 2x2, ProPradlo and Segway Tours medium 1x1). Cards have gradient backgrounds, badges, metric badges, tech badges. Use exact content from CLAUDE.md Section 3."

# Phase 5: Lead Magnet
claude-code "Build Lead Magnet section. Dark gradient. 50/50 split. Left: AlertTriangle icon, headline, benefits list. Right: glassmorphic card with 5 status indicators (GTM/GA4/Meta/Server-side/Accuracy), form (URL + email inputs, consent checkbox, submit button), alternative video audit CTA. Use exact content from CLAUDE.md Section 4."

# Phase 6: Packages
claude-code "Build Packages section. Dark background. 3 pricing cards. CRITICAL: Make Tier 2 (Business) visually dominant - 1.1x scale, elevated, glow effect, larger, 'ПОПУЛЯРНЫЙ' badge, social proof, promo badge. Use EXACT pricing: 15k/35k+8k/50k+12k (not screenshot pricing). Features in 2 sections for Tier 2. Use exact content from CLAUDE.md Section 5."

# Phase 7: Contact
claude-code "Build Contact section and Footer. Dark gradient. 40/60 split. Left: contact methods (4 cards with icons), quick links. Right: form with service interest buttons, textarea. Footer with copyright and links. Use exact content from CLAUDE.md Section 6."

# Phase 8: Technical Integration
claude-code "Add CookieYes consent script to app/layout.tsx (beforeInteractive). Add GTM script (afterInteractive). Create API route app/api/contact/route.ts with Resend integration. Set up environment variables structure (.env.local with RESEND_API_KEY, N8N_WEBHOOK_URL, NEXT_PUBLIC_GTM_ID). Follow CLAUDE.md Technical Integration section."

# Phase 9: Service Pages
claude-code "Create /web, /ads, /tracking pages. Each page: hero, content sections, process, pricing, CTA. /tracking page includes lead magnet section (same as homepage). Follow structure in CLAUDE.md."

# Phase 10: Package Pages
claude-code "Create /packages/start, /packages/business, /packages/enterprise detail pages. Each page: hero with price, detailed feature breakdown, process timeline, perfect-for section, FAQ, CTA."

# Phase 11: Polish
claude-code "Add Framer Motion animations throughout (fade in on scroll, staggered children). Optimize all images. Add SEO metadata to all pages. Test responsive at 375px, 768px, 1024px, 1440px. Fix any console errors. Ensure Lighthouse score >85."
```

**Tips:**
- Be specific in prompts
- Reference CLAUDE.md sections
- Include exact content
- Test after each phase
- Commit often

---

## ✅ SUCCESS CHECKLIST

**Before launch:**
- [ ] All 6 homepage sections complete
- [ ] Tier 2 visually dominant (1.1x scale, glow, badge, promo)
- [ ] Correct pricing everywhere (15k/35k/50k)
- [ ] Animated metrics in hero
- [ ] Glassmorphic cards throughout
- [ ] Framer Motion animations
- [ ] Service pages done
- [ ] Package detail pages done
- [ ] CookieYes consent working
- [ ] GTM firing
- [ ] Stape server-side configured ⭐
- [ ] Resend sending emails
- [ ] N8N workflow connected
- [ ] Forms validating
- [ ] Mobile responsive (375px+)
- [ ] Lighthouse >85
- [ ] No console errors
- [ ] All text in Russian

**Deploy:**
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Add env variables
- [ ] Configure domain
- [ ] Test production
- [ ] Monitor errors
- [ ] Launch! 🎉

---

## 💰 COST SUMMARY

**One-time:**
- Development: 20-28 hours your time
- Domain: 300 CZK/year

**Monthly:**
- Vercel: FREE
- Resend: FREE (under 3k)
- CookieYes: FREE (under 100 pages)
- Stape.io: $20/month (~500 CZK) ⭐
- N8N: FREE (under 2.5k)

**Total: ~525 CZK/month**

**ROI:** First client (35k) pays for 5+ years of infrastructure

---

## ⏱️ TIMELINE

**Day 1 (8-10 hours):**
- Setup + Homepage (all 6 sections)

**Day 2 (8-10 hours):**
- Service pages + Package pages + Technical integration

**Day 3 (6-8 hours):**
- Polish + Testing + Deploy

**Total: 22-28 hours over 3 days**

---

## 🎯 CRITICAL REMINDERS

### DO:
- ✅ Keep modern glassmorphic UI
- ✅ Animate hero metrics
- ✅ Make Tier 2 dominant (1.1x, glow)
- ✅ Use correct pricing (15k/35k/50k)
- ✅ Setup Stape.io (your edge!)
- ✅ Install consent FIRST
- ✅ Test mobile thoroughly

### DON'T:
- ❌ Skip Stape setup
- ❌ Skip consent (GDPR!)
- ❌ Use screenshot pricing (25k/55k)
- ❌ Make packages equal size
- ❌ Over-animate (subtle only)
- ❌ Skip mobile testing

---

**🚀 NOW BUILD WITH CLAUDE CODE!**

**Reference files:**
- This file: Design + structure
- TECHNICAL-STACK.md: GTM/Stape/Resend setup
- N8N-WORKFLOW.md: Lead magnet automation

**Start:** `claude-code "Initialize Next.js 15 project..."`

**You got this! 💪**
