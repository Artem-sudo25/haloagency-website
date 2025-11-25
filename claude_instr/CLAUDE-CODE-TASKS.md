# CLAUDE CODE TASKS - HALOAGENCY

**Step-by-step task breakdown for building with Claude Code**

---

## PHASE 1: PROJECT SETUP (30 min)

```bash
claude-code "Initialize Next.js 15 project with TypeScript, Tailwind CSS 3.4+, and App Router. Name: haloagency. Install dependencies: shadcn/ui (button, card, input, textarea, label, badge, checkbox), framer-motion, lucide-react, react-hook-form, zod, @hookform/resolvers. Configure Tailwind config with custom colors from CLAUDE-NEW.md (primary #667eea, accent-blue #3B82F6, accent-orange #F97316, accent-green #10B981, bg-dark #0A1628, bg-light #F8F9FA). Set up Inter font with Cyrillic subset in app/layout.tsx. Create folder structure: app/web, app/ads, app/tracking, app/packages, app/case-studies, app/api/contact, app/api/analyze-website, components/sections, components/ui, components/animated, lib."
```

**Verify:**
- [ ] Project created
- [ ] All dependencies installed
- [ ] Tailwind configured with colors
- [ ] Inter font loading
- [ ] Folder structure exists
- [ ] No errors in `npm run dev`

---

## PHASE 2: HOMEPAGE HERO SECTION (1 hour)

```bash
claude-code "Build Hero section in app/page.tsx following CLAUDE-NEW.md Section 1 specifications. Create full-viewport section with dark gradient background (from-[#0A1628] via-[#1a2942] to-[#0A1628]). Use 60/40 grid layout (lg:grid-cols-5, left col-span-3, right col-span-2). Left side: eyebrow '🚀 Digital Agency of the Future', H1 'Технический маркетинг для бизнеса в Чехии' with gradient on last part using bg-gradient-to-r from-primary to-primary-dark with bg-clip-text, subheadline mentioning 3-7 days and 70-85% tracking, two CTAs (gradient blue button 'Посмотреть кейсы ↓', outline button 'Узнать цены →'), trust badges row (⚡ 3-7 дней, 💎 От 15,000 CZK, 📊 70-85% tracking). Right side (hidden on mobile, lg:block): 3 glassmorphic cards with Framer Motion animations - ПРОДАЖИ +145% (green accent), КОНВЕРСИИ +87% (blue accent, offset with ml-12), ROI 3.2x (purple accent). Each card has glassmorphic styling (bg-white/5 backdrop-blur-lg border border-white/10), colored glow (absolute bg blur), staggered fade-in animations, TrendingUp/Zap icons from lucide-react. Create components/animated/CountUp.tsx component using requestAnimationFrame for number animations. Add tech stack footer at bottom (GOOGLE | META | NEXT.JS | STAPE). Use exact Russian content from CLAUDE-NEW.md."
```

**Verify:**
- [ ] Full viewport height
- [ ] Dark gradient background
- [ ] 60/40 split on desktop
- [ ] All text in Russian
- [ ] 2 CTAs styled correctly
- [ ] 3 metric cards visible on desktop
- [ ] Cards hide on mobile
- [ ] CountUp animations work
- [ ] Staggered fade-in works
- [ ] No layout shift

---

## PHASE 3: SERVICES SECTION (45 min)

```bash
claude-code "Build Services section in app/page.tsx below Hero following CLAUDE-NEW.md Section 2. Light background (bg-gray-50). Header: eyebrow '🔧 Наши услуги', H2 'Что мы делаем', subtitle 'Полный цикл digital-маркетинга'. Grid with 3 service cards (md:grid-cols-3 gap-8). Card 1 - Web Development: blue accent (#3B82F6), Code2 icon in blue circle (w-16 h-16 rounded-full bg-blue-100), border-l-4 border-l-blue-500, title 'Разработка сайтов', description about Next.js 3-7 days, price badge 'От 15,000 CZK' in blue-100 bg, link to /web, hover: -translate-y-2 shadow-xl transition-all. Card 2 - Advertising: orange accent (#F97316), Megaphone icon, border-l-4 border-l-orange-500, subtle orange gradient background (bg-gradient-to-br from-orange-50 to-white), price 'От 8,000 CZK/мес', link to /ads. Card 3 - Analytics: green accent (#10B981), BarChart3 icon, border-l-4 border-l-green-500, price 'От 8,000 CZK setup', link to /tracking. Use Shadcn Card, CardHeader, CardContent, CardFooter components. Add Framer Motion whileInView animations with stagger. Bottom text: 'Нужно комплексное решение? → Готовые пакеты' linking to #packages. Use exact content from CLAUDE-NEW.md."
```

**Verify:**
- [ ] Light background
- [ ] 3 cards in grid
- [ ] Colored left borders
- [ ] Icons in circles
- [ ] Hover lift effect
- [ ] Price badges
- [ ] Links functional
- [ ] Animations work
- [ ] Mobile stacks
- [ ] Content matches

---

## PHASE 4: PROJECTS SECTION (45 min)

```bash
claude-code "Build Projects section in app/page.tsx following CLAUDE-NEW.md Section 3. Dark background (bg-gray-900). Header with flex justify-between: left side has eyebrow '💼 Избранные кейсы', H2 'Результаты, которыми мы гордимся' with gradient on 'мы гордимся', right side has 'Все проекты →' link. Bento grid layout (grid md:grid-cols-2 lg:grid-cols-3 gap-6). Project 1 - Nejbalonky: large card (lg:col-span-2 lg:row-span-2), gradient background (bg-gradient-to-br from-blue-900/50 to-purple-900/50), badge 'E-commerce' blue, number watermark '01' (text-6xl font-bold text-white/10), title 'Nejbalonky.cz', subtitle, metric badge '+140% конверсий' green with TrendingUp icon, description, tech badges (Next.js, WooCommerce, Stape), CTA button. Project 2 - ProPradlo: medium card (teal gradient), badge 'Web App', number '02', metric 'Real-time бронирование'. Project 3 - Segway Tours: medium card (amber gradient), badge 'SEO + Ads', number '03', metric '+240% органика'. All cards: glassmorphic styling (bg-gradient border-white/10 hover:border-white/20), Framer Motion scale animation on view. Use exact content from CLAUDE-NEW.md."
```

**Verify:**
- [ ] Dark background
- [ ] Bento grid layout
- [ ] Project 1 is large (2x2)
- [ ] Gradient backgrounds
- [ ] Number watermarks
- [ ] Metric badges
- [ ] Tech badges
- [ ] Hover effects
- [ ] Mobile stacks
- [ ] Content accurate

---

## PHASE 5: LEAD MAGNET SECTION (1.5 hours)

```bash
claude-code "Build Lead Magnet section in app/page.tsx following CLAUDE-NEW.md Section 4. Dark gradient background (bg-gradient-to-br from-[#0A1628] to-[#1a2942]). 50/50 split (grid lg:grid-cols-2 gap-12). Left side: AlertTriangle icon in orange circle (w-16 h-16 rounded-full bg-orange-500/20), eyebrow '🔍 Бесплатная проверка', H2 'Почему ваши конверсии не отслеживаются?', description paragraph, benefits list (4 items with CheckCircle2 icons, staggered Framer Motion animations). Right side: 2 glassmorphic cards. Card 1 - Status Indicators: 5 status items - GTM (green, CheckCircle icon, 'Обнаружен и работает', pulsing green dot animate-pulse), GA4 (red, XCircle icon, 'Не найден'), Meta Pixel (orange, AlertCircle icon, 'Обнаружен, но не работает', pulsing dot), Server-side (red, XCircle, 'Не настроен'), Accuracy Score (large card with gradient bg orange to red, '52%' huge number, 'Вы теряете ~48% конверсий'). Card 2 - Form: URL input, Email input, consent checkbox with label linking to /privacy, submit button (bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105), small text about timing. Below: Alternative CTA button 'Получить видео-аудит (бесплатно)' with Video icon. Use Shadcn Input, Label, Checkbox, Button components. All glassmorphic cards use bg-white/5 backdrop-blur-lg border border-white/10. Use exact content from CLAUDE-NEW.md."
```

**Verify:**
- [ ] 50/50 split
- [ ] Status indicators show
- [ ] Pulsing dots animate
- [ ] Accuracy score prominent
- [ ] Form inputs styled
- [ ] Checkbox with link
- [ ] Submit button gradient
- [ ] Alternative CTA
- [ ] Mobile stacks
- [ ] All text Russian

---

## PHASE 6: PACKAGES SECTION (1.5 hours)

```bash
claude-code "Build Packages section in app/page.tsx following CLAUDE-NEW.md Section 5. Dark background (bg-[#0A1628]). Header centered: eyebrow '💎 Тарифы', H2 'Пакеты услуг', subtitle. Grid md:grid-cols-3 gap-8 items-center. CRITICAL: Tier 2 must be visually dominant. Tier 1 - Start: normal card (bg-white/5 border-white/10), title 'Start', price 'от 15,000 Kč' (EXACT, not 25k!), description, 5 features with Check icons, timeline, outline button 'Выбрать тариф' linking to /packages/start. Tier 2 - Business: DOMINANT card with these special features: absolute badge at top '⭐ ПОПУЛЯРНЫЙ' (bg-gradient primary elevated z-10), glow effect (absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl -z-10), scale and lift (md:scale-110 md:-translate-y-8), border-2 border-primary, shadow-2xl shadow-primary/20, title 'Business' larger, price 'от 35,000 Kč + 8,000 Kč/мес' (EXACT, not 55k!), social proof box (p-3 rounded-lg bg-green-500/20 border border-green-500/30, '80% наших клиентов выбирают это'), features in 2 sections (Setup 35k: 5 features, Ежемесячно 8k: 4 features), timeline, promo box (p-4 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20, '🎁 Первые 5 клиентов: 25,000 CZK setup'), larger gradient button full width linking to /packages/business. Tier 3 - Enterprise: normal card, title 'Enterprise', price 'Индивидуально', 6 features, pricing note 'От 50,000 CZK + 12,000/мес', outline button linking to /packages/enterprise. Bottom CTA: 'Не уверены какой пакет? [Бесплатная консультация - 30 минут]'. Use Shadcn Card components. Framer Motion animations with delays. Use EXACT content and pricing from CLAUDE-NEW.md."
```

**Verify:**
- [ ] Tier 2 is 1.1x larger
- [ ] Tier 2 elevated (-translate-y-8)
- [ ] Glow effect visible
- [ ] Popular badge shows
- [ ] Social proof box
- [ ] Promo box with gift icon
- [ ] CORRECT pricing (15k/35k+8k/50k+12k)
- [ ] Two feature sections on Tier 2
- [ ] Larger button on Tier 2
- [ ] Other tiers normal size
- [ ] Mobile: Tier 2 still prominent

---

## PHASE 7: CONTACT & FOOTER (45 min)

```bash
claude-code "Build Contact section and Footer in app/page.tsx following CLAUDE-NEW.md Section 6. Dark gradient background. Grid lg:grid-cols-5 gap-12. Left side (lg:col-span-2): eyebrow '✉️ Свяжитесь с нами', H2 'Готовы обсудить проект?', description. 4 contact method cards (flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10): Email (Mail icon, hello@haloagency.cz), Telegram (MessageCircle icon, @haloagency), Phone (Phone icon, +420 123 456 789), Office (MapPin icon, Прага, Чехия). Each has icon in colored circle (w-12 h-12 rounded-full bg-primary/20 group-hover:scale-110). Quick links section: 2 column grid with service and package links. Right side (lg:col-span-3): Form card (bg-white/5 border-white/10). Form with: Name and Email inputs in grid (md:grid-cols-2), Service interest section with 5 button options (Разработка сайтов, Реклама (Ads), Аналитика и Трекинг, Готовый пакет, Другое) as outline buttons, Message textarea (5 rows), Submit button (w-full gradient), small text 'Обычно отвечаем в течение 2 часов'. Below form: 'Или' text, alternative CTA button with Calendar icon 'Записаться на звонок →'. Footer: flex justify-between, left '© 2025 HaloAgency', right links (Privacy Policy, Terms of Service). Use Shadcn components. Use exact content from CLAUDE-NEW.md."
```

**Verify:**
- [ ] 40/60 split
- [ ] 4 contact cards
- [ ] Icons scale on hover
- [ ] Quick links
- [ ] Form fields correct
- [ ] Service buttons styled
- [ ] Textarea proper size
- [ ] Submit button full width
- [ ] Alternative CTA
- [ ] Footer displays
- [ ] Mobile stacks

---

## PHASE 8: TECHNICAL INTEGRATION (2-3 hours)

### Task 8.1: Consent Management (30 min)
```bash
claude-code "Add Google Consent Mode v2 to app/layout.tsx. Import Script from next/script. Before GTM, add CookieYes script with id='cookieyes', src='https://cdn-cookieyes.com/client_data/YOUR_ID/script.js' (placeholder for now), strategy='beforeInteractive'. Add comment explaining to replace YOUR_ID with actual CookieYes ID after signup. Create .env.local file with placeholder environment variables: RESEND_API_KEY=, N8N_WEBHOOK_URL=, NEXT_PUBLIC_GTM_ID=, NEXT_PUBLIC_GA_ID=. Add .env.local to .gitignore."
```

### Task 8.2: GTM Setup (30 min)
```bash
claude-code "Add GTM to app/layout.tsx after CookieYes. Import Script. Add GTM head script with id='gtm', strategy='afterInteractive', dangerouslySetInnerHTML with GTM code using GTM-XXXXXXX placeholder. In body, add noscript iframe for GTM. Export gtag function for consent updates. Add comments explaining to replace GTM-XXXXXXX with actual GTM ID."
```

### Task 8.3: Contact Form API (45 min)
```bash
claude-code "Create app/api/contact/route.ts. Import Resend from 'resend', NextResponse from 'next/server'. Export async POST function that: 1) parses request.json() to get name, email, service, message, 2) validates with Zod schema (create in lib/validations.ts), 3) sends email to user with Resend (subject 'Спасибо за вашу заявку!', Russian HTML template with name), 4) sends email to artem@haloagency.cz with form details, 5) returns NextResponse.json({success: true, message: 'Спасибо! Мы свяжемся в течение 2 часов.'}), 6) catches errors and returns 500 with error message. Use process.env.RESEND_API_KEY. Add proper TypeScript types."
```

### Task 8.4: Form Handling (30 min)
```bash
claude-code "Update Contact section form in app/page.tsx to handle submission. Use React Hook Form with Zod validation. Import useForm, zodResolver. Create form schema matching API validation. Add onSubmit handler that: 1) POSTs to /api/contact, 2) shows loading state during submit (button disabled, text 'Отправляем...'), 3) on success shows success message and resets form, 4) on error shows error message. Use Shadcn Form components. Add proper error messages in Russian."
```

### Task 8.5: Lead Magnet API Placeholder (15 min)
```bash
claude-code "Create app/api/analyze-website/route.ts. Export async POST function that: 1) parses URL and email from request body, 2) validates with Zod, 3) for now returns mock response {success: true, summary: {accuracy: 52, loss: 48, aiSummary: 'Placeholder'}, message: 'Функционал в разработке'}, 4) adds TODO comment to integrate N8N webhook later. Will connect to N8N in Phase 10."
```

**Verify:**
- [ ] CookieYes script added
- [ ] GTM script added
- [ ] Contact API route created
- [ ] Email sending logic complete
- [ ] Form uses React Hook Form
- [ ] Validation works
- [ ] Success/error messages
- [ ] Loading state works
- [ ] Lead magnet API placeholder exists

---

## PHASE 9: SERVICE PAGES (2-3 hours)

### Task 9.1: Web Development Page (1 hour)
```bash
claude-code "Create app/web/page.tsx. Build service page with: Hero section (title 'Разработка сайтов', subtitle about Next.js approach, CTA buttons), 'Что мы создаём' section (3 cards: Landing pages 3-5 дней 15k, Corporate sites 1 неделя 25k, E-commerce 2-3 недели 50k+), Tech stack section (showcasing Next.js, Tailwind, why modern matters), Process timeline section (4 steps: Brief + wireframes, Design + approval, Development, Testing + deploy), Final CTA linking to packages. Use similar styling as homepage (light/dark alternating sections, cards with colored accents). Content should emphasize speed, modern tech, SEO-ready. All text in Russian."
```

### Task 9.2: Advertising Page (1 hour)
```bash
claude-code "Create app/ads/page.tsx. Build service page with: Hero (title 'Реклама', subtitle about Google + Meta with proper tracking), 'Что мы делаем' section (Google Ads setup + management, Meta campaigns, Server-side tracking, Monthly optimization), 'Почему server-side важен' section (explain 40% conversion loss, before/after comparison, visual accuracy chart), Pricing section (Setup 8k, Monthly 8-12k, Min ad budget 15k), Process section (4 steps with timeline), CTA to Lead Machine package. Use orange accent color throughout. Content emphasizes data-driven optimization, server-side tracking advantage."
```

### Task 9.3: Analytics/Tracking Page (1 hour)
```bash
claude-code "Create app/tracking/page.tsx. Build service page with: Hero (title 'Аналитика и трекинг', subtitle about 70-85% accuracy), 'Проблема' section (iOS 14.5+ blocks, ad blockers, 50-60% standard accuracy, visual chart), 'Решение' section (Server-side GTM, Meta CAPI, Google Enhanced Conversions, 70-85% recovery), EMBED LEAD MAGNET COMPONENT HERE (same as homepage section), 'Что входит' section (GTM setup, Server container Stape, Meta CAPI integration, Testing), Pricing section (Setup 8k, Monthly 1.5k Stape hosting, Included in packages), Process section (4 days: Audit, Configure, Test, Training), CTA to packages. Use green accent. This is where lead magnet lives permanently."
```

**Verify:**
- [ ] All 3 pages created
- [ ] Consistent styling
- [ ] All content Russian
- [ ] Pricing visible
- [ ] Process explained
- [ ] CTAs prominent
- [ ] Lead magnet embedded in /tracking
- [ ] Mobile responsive

---

## PHASE 10: PACKAGE PAGES (2 hours)

```bash
claude-code "Create app/packages/page.tsx (overview), app/packages/start/page.tsx, app/packages/business/page.tsx, app/packages/enterprise/page.tsx. Each detail page structure: Hero (package name, price, one-liner), 'Что входит' section (expanded feature breakdown with descriptions), Timeline section (week-by-week breakdown with milestones), 'Идеально для' section (industry examples, business size, use cases), ROI section (value calculation, comparison to alternatives), FAQ section (5-6 common questions), CTA ('Выбрать этот пакет' or 'Бесплатная консультация'). Overview page: same as homepage packages section but with more details and comparison table. Use same pricing: Start 15k, Business 35k+8k/мес, Enterprise 50k+12k/мес. Business page should be most detailed (it's primary conversion target). All text Russian."
```

**Verify:**
- [ ] 4 pages created
- [ ] Detailed features
- [ ] Timeline visualized
- [ ] ROI explained
- [ ] FAQ helpful
- [ ] CTAs clear
- [ ] Business page most detailed
- [ ] Pricing consistent

---

## PHASE 11: POLISH & OPTIMIZATION (2-3 hours)

### Task 11.1: Animations (30 min)
```bash
claude-code "Add Framer Motion animations throughout site. For all major sections: wrap in motion.div with initial={{opacity: 0, y: 20}}, whileInView={{opacity: 1, y: 0}}, viewport={{once: true}}, transition={{duration: 0.5}}. For grids of cards: add staggerChildren with delay increments. For buttons: add whileHover={{scale: 1.05}}, whileTap={{scale: 0.95}}. Keep animations subtle - don't overdo it. Test that animations don't cause layout shift."
```

### Task 11.2: SEO Metadata (30 min)
```bash
claude-code "Add SEO metadata to all pages. In each page.tsx, export metadata object with title, description, keywords, openGraph (title, description, url, images). Homepage title: 'HaloAgency - Технический маркетинг для бизнеса в Чехии', description: 'Современные сайты за 3-7 дней, server-side tracking 70-85%, реклама на данных. Быстро, прозрачно, измеримо.' Service pages: specific to service. Package pages: include pricing. Add sitemap.xml and robots.txt to public folder."
```

### Task 11.3: Responsive Testing (1 hour)
```bash
# Manual testing
# Test at: 375px (iPhone SE), 414px (iPhone Pro), 768px (iPad), 1024px (iPad Pro), 1440px (Desktop)
# Check: No horizontal scroll, Text readable, Buttons touch-friendly (44px+), Images don't overflow, Forms usable, Navigation works, Hero metrics hide on mobile, Packages stack properly
```

### Task 11.4: Performance (30 min)
```bash
claude-code "Optimize performance. Add loading='lazy' to all images below fold. Ensure all images in next/image component with proper width/height. Add global CSS for glassmorphic-card utility class (@apply bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl). Check bundle size with npm run build. Target: Lighthouse Performance >90, Accessibility >95, Best Practices >95, SEO >90."
```

### Task 11.5: Final Polish (30 min)
```bash
claude-code "Final polish: Check all links work, Fix any console errors, Ensure all text is Russian (no lorem ipsum), Verify pricing consistent (15k/35k/50k) everywhere, Test forms validate properly, Check mobile nav works, Add error boundaries, Add 404 page, Test in Chrome/Safari/Firefox."
```

**Verify:**
- [ ] Animations smooth
- [ ] No layout shift
- [ ] All metadata added
- [ ] Sitemap exists
- [ ] Mobile tested (all breakpoints)
- [ ] No horizontal scroll
- [ ] Lighthouse >85 all categories
- [ ] All links work
- [ ] No console errors
- [ ] Forms validate
- [ ] Cross-browser tested

---

## PHASE 12: DEPLOY (30 min)

```bash
# 1. Commit and push
git add .
git commit -m "Complete HaloAgency website"
git push origin main

# 2. Deploy to Vercel
vercel

# 3. Add environment variables in Vercel dashboard:
RESEND_API_KEY=re_xxxxx
N8N_WEBHOOK_URL=https://your-n8n.app.n8n.cloud/webhook/website-analysis
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# 4. Configure custom domain
# 5. Test production site
# 6. Monitor for errors
```

**Verify:**
- [ ] Deployed successfully
- [ ] Env variables added
- [ ] Domain configured
- [ ] HTTPS working
- [ ] All pages load
- [ ] Forms submit
- [ ] GTM fires (once configured)
- [ ] No production errors

---

## POST-LAUNCH (Week 1)

### Setup External Services:

**CookieYes (30 min):**
1. Sign up: cookieyes.com
2. Add domain
3. Configure banner (Russian text)
4. Enable Consent Mode v2
5. Get script URL
6. Replace placeholder in layout.tsx
7. Redeploy

**GTM + GA4 (1 hour):**
1. Create GTM container
2. Create GA4 property
3. Configure tags in GTM
4. Get IDs
5. Add to Vercel env vars
6. Redeploy
7. Test tracking

**Stape.io (1 hour):**
1. Sign up ($20/month)
2. Create server container
3. Configure sgtm.haloagency.cz
4. Add DNS CNAME
5. Configure client GTM to send to server
6. Configure server tags (GA4, Meta CAPI)
7. Test server events

**Resend (30 min):**
1. Sign up (free)
2. Add domain
3. Configure DNS (4 records)
4. Verify domain
5. Get API key
6. Add to Vercel
7. Test email sending

**N8N Workflow (2 hours):**
1. Sign up: n8n.cloud
2. Create "Website Analysis" workflow
3. Build 8-node workflow (see N8N-WORKFLOW.md)
4. Test workflow
5. Get webhook URL
6. Add to Vercel
7. Update app/api/analyze-website/route.ts to call webhook
8. Test end-to-end

---

## SUCCESS METRICS

**Technical (Week 1):**
- [ ] Lighthouse score >85
- [ ] Uptime 99%+
- [ ] Forms working
- [ ] Tracking 70-85% accuracy (after Stape setup)
- [ ] Email delivery >95%
- [ ] N8N workflow executes

**Business (Month 1):**
- Target: 500+ visitors
- Lead magnet: 5-10% usage (25-50 analyses)
- Contact forms: 10-20 submissions
- Qualified leads: 5-10
- Clients closed: 2-5

---

## TIMELINE SUMMARY

**Day 1 (8-10 hours):**
- Phases 1-7: Setup + All homepage sections

**Day 2 (8-10 hours):**
- Phases 8-10: Technical integration + Service pages + Package pages

**Day 3 (6-8 hours):**
- Phases 11-12: Polish + Deploy

**Week 1 (5-6 hours):**
- Setup external services (CookieYes, GTM, Stape, Resend, N8N)

**Total: 27-34 hours**

---

## TROUBLESHOOTING

**Build fails:**
- Check error message
- Show to Claude Code: `claude-code "Fix this error: [paste error]"`
- Usually: missing dependency or syntax error

**Animations jerky:**
- Reduce motion on mobile
- Use `prefers-reduced-motion` media query
- Simplify animations

**Lighthouse score low:**
- Compress images more
- Remove unused code
- Check bundle size: `npm run build`

**Forms not working:**
- Check API route logs
- Verify Resend API key
- Test locally first
- Check CORS if needed

**Tracking not firing:**
- Verify consent accepted
- Check GTM preview mode
- Ensure GTM ID correct
- Wait 5-10 minutes for propagation

---

**🚀 YOU GOT THIS!**

Work sequentially through phases. Test after each phase. Commit often. Reference CLAUDE-NEW.md for specs.

**Start:** Phase 1 → Phase 2 → ... → Phase 12 → Launch! 🎉
