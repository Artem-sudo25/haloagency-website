# UI v2 Theme — Full Site Restyle Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Restyle every section, service page, modal, and layout component on the `ui-v2-theme` branch to match the warm-cream / brutal-card / hot-pink + electric-blue visual language of `/lp/v2`.

**Architecture:** Token-first (globals.css already done). Each file gets a full markup rewrite. All business logic, form handlers, PostHog/HaloTrack events, Zod schemas, routing, and Russian text content stay untouched — only className strings change.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS v4, Framer Motion, Plus Jakarta Sans font, shadcn/ui primitives.

---

## Reference: LP v2 Visual Patterns

Before touching any file, internalize these reusable patterns from `app/lp/v2/LPV2Client.tsx`. Every restyled component must use these.

**Backgrounds:**
```
Section bg:     bg-[#F8F4EF]   (or bg-ha-bg — same token)
Soft bg:        bg-[#FDF9F5]
Card bg:        bg-white
```

**Brutal Card:**
```
rounded-xl border-2 border-[#1A1F28] bg-white shadow-[4px_4px_0px_0px_rgba(26,31,40,0.1)]
```

**Buttons — primary (hot pink brutal):**
```
bg-[#F43F5E] text-white font-bold rounded-lg
shadow-[4px_4px_0px_0px_rgba(26,31,40,0.1)]
hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all
```
(The Button component in ui-v2-theme already implements this — just use `<Button>` or `<Button variant="default">`)

**Button — outline (dark border brutal):**
```
border border-[#1A1F28] bg-white text-[#1A1F28]
shadow-[2px_2px_0px_0px_rgba(26,31,40,0.08)]
hover:bg-[#F8F4EF] transition-all
```
(Use `<Button variant="outline">`)

**Typography:**
```
H1/eyebrow hero:  text-4xl sm:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-[#1A1F28]
H2 section:       text-2xl font-extrabold tracking-tight text-[#1A1F28]
H3 card:          text-lg font-bold text-[#1A1F28]
Body:             text-[#4C5A67] or text-[#64707C]
Small muted:      text-sm text-[#64707C]
```

**Badges:**
```
Blue:   bg-[#EFF6FF] border border-[#BFDBFE] text-[#3B82F6] rounded px-2 py-1 text-xs font-bold uppercase tracking-wider
Pink:   bg-[#FFF1F2] border border-[#FECDD3] text-[#F43F5E] rounded px-2 py-1 text-xs font-bold uppercase tracking-wider
Dark:   bg-[#F8F4EF] border border-[#E8DDD2] text-[#1A1F28] rounded px-3 py-1 text-xs font-medium
```

**Left-border accent quote:**
```
border-l-4 border-[#3B82F6] pl-6 text-xl leading-relaxed text-[#4C5A67]
```

**Background blur orbs (subtle):**
```
<div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-[#F43F5E]/5 blur-3xl pointer-events-none" />
<div className="absolute bottom-0 left-10 h-64 w-64 rounded-full bg-[#3B82F6]/5 blur-3xl pointer-events-none" />
```

**Section container:**
```
<section className="relative py-16 sm:py-24 overflow-hidden bg-[#F8F4EF]">
  <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
```

**Section heading pattern:**
```jsx
<div className="flex items-center gap-4 mb-10">
  <h2 className="text-2xl font-extrabold tracking-tight text-[#1A1F28] whitespace-nowrap">
    Заголовок <span className="text-[#F43F5E]">раздела</span>
  </h2>
  <div className="h-px flex-1 bg-[#E8DDD2]" />
</div>
```

**Form field:**
```
h-11 w-full rounded-lg border border-[#DDD4C8] bg-white px-3.5 text-sm text-[#1A1F28]
outline-none placeholder:text-[#A0AAB4]
focus:border-[#F43F5E] focus:ring-1 focus:ring-[#F43F5E]/30 transition-colors
```

**Form label:**
```
block text-sm font-medium text-[#3D4852] mb-1.5
```

**Horizontal rule / section divider:**
```jsx
<div className="h-px flex-1 bg-[#E8DDD2]" />
```

**SectionDivider (used in page.tsx between sections):**
```jsx
const SectionDivider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#F43F5E]/25 to-transparent border-t border-[#E8DDD2]" />
);
```

---

## IMPORTANT: What NOT to change in any task

- Function signatures, props, state variables
- `useEffect`, `useState`, `useForm` logic
- Form submit handlers (`handleSubmit`, API calls)
- PostHog, HaloTrack, fbq event calls
- Zod schemas (`@/lib/validations`)
- All Russian text strings
- Import statements (unless removing dead SpotlightHero import)
- `href`, `src`, routing
- Framer Motion animation logic (only change colors inside motion divs)

---

## Task 1: UI Primitives — Input, Textarea

**Files:**
- Modify: `components/ui/input.tsx`
- Modify: `components/ui/textarea.tsx`

**Step 1: Update Input**

Replace the entire className string in `components/ui/input.tsx`:

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "h-11 w-full rounded-lg border border-[#DDD4C8] bg-white px-3.5 text-sm text-[#1A1F28] outline-none placeholder:text-[#A0AAB4] transition-colors focus:border-[#F43F5E] focus:ring-1 focus:ring-[#F43F5E]/30 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"
export { Input }
```

**Step 2: Update Textarea**

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[100px] w-full rounded-lg border border-[#DDD4C8] bg-white px-3.5 py-3 text-sm text-[#1A1F28] outline-none placeholder:text-[#A0AAB4] transition-colors focus:border-[#F43F5E] focus:ring-1 focus:ring-[#F43F5E]/30 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"
export { Textarea }
```

**Step 3: Commit**
```bash
git add components/ui/input.tsx components/ui/textarea.tsx
git commit -m "feat(theme/v2): update Input and Textarea to LP v2 field style"
```

---

## Task 2: Hero Section

**Files:**
- Modify: `components/sections/Hero.tsx` (259 lines)

**What to keep:** `openContactModal` call, CountUp component usage, Button imports, Link imports, Framer Motion.

**What to remove:** `SpotlightHero` import and usage (it's a dark spotlight effect — replace with blur orbs).

**Rewrite `components/sections/Hero.tsx`:**

```tsx
"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useContactModalActions } from "@/context/contact-modal-context";
import { CountUp } from "@/components/animated/CountUp";

const stats = [
  { value: 42, suffix: "%", label: "снижение CPL", prefix: "−" },
  { value: 3.1, suffix: "x", label: "средний ROAS" },
  { value: 20, suffix: "%", label: "восстановленных данных", prefix: "+" },
];

export default function Hero() {
  const { open: openContactModal } = useContactModalActions();

  return (
    <section className="relative pt-32 pb-16 md:pb-24 px-4 bg-[#F8F4EF] overflow-hidden">
      {/* Background blur orbs */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 h-[500px] w-[500px] rounded-full bg-[#F43F5E]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#3B82F6]/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: Headline + trust */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 pt-4"
          >
            <div className="inline-flex items-center rounded bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#3B82F6]">
              Маркетинговое агентство · Прага
            </div>

            <h1 className="text-4xl sm:text-[3.25rem] font-extrabold leading-[1.1] tracking-tight text-[#1A1F28]">
              Весь маркетинг{" "}
              <span className="relative inline-block">
                <span className="relative z-10">под одной крышей</span>
                <span className="absolute -bottom-1.5 left-0 h-3 w-full bg-[#F43F5E]/20 -rotate-1 rounded" />
              </span>
            </h1>

            <p className="max-w-xl text-xl leading-relaxed text-[#4C5A67] border-l-4 border-[#3B82F6] pl-6">
              От сайта и аналитики до онлайн рекламы и автоматизации процессов — один партнёр, одна ответственность.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border-2 border-[#1A1F28] bg-white p-4 shadow-[4px_4px_0px_0px_rgba(26,31,40,0.1)]">
                  <div className="text-2xl font-black text-[#F43F5E]">
                    {s.prefix}<CountUp end={s.value} decimals={s.value % 1 !== 0 ? 1 : 0} />{s.suffix}
                  </div>
                  <div className="text-xs text-[#64707C] mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" onClick={() => openContactModal()} className="px-8">
                Связаться <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#projects">Посмотреть кейсы</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative mt-4 lg:mt-0"
          >
            <div className="absolute top-4 left-4 h-full w-full bg-[#F43F5E] rounded-xl -z-10" />
            <div className="rounded-xl border-2 border-[#1A1F28] bg-white p-8 relative z-10">
              <div className="inline-flex items-center rounded bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#3B82F6] mb-4">
                Бесплатная консультация
              </div>
              <h2 className="text-2xl font-black text-[#1A1F28] tracking-tight mb-2">
                Обсудим ваш проект
              </h2>
              <p className="text-sm text-[#64707C] mb-6">
                Разберём задачу и предложим конкретный план — без воды и обязательств.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Анализ текущей ситуации",
                  "Конкретный план действий",
                  "Прогноз результатов",
                  "Без давления и обязательств",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#1A1F28]">
                    <span className="w-5 h-5 rounded-full bg-[#F43F5E]/10 border border-[#F43F5E]/20 flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[#F43F5E]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="w-full" onClick={() => openContactModal()}>
                Записаться бесплатно <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <p className="text-center text-xs text-[#8A9BAA] mt-3">
                Ответим в течение 2 часов в рабочее время
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**
```bash
git add components/sections/Hero.tsx
git commit -m "feat(theme/v2): restyle Hero section — cream bg, brutal card, hot pink CTA"
```

---

## Task 3: Services Section

**Files:**
- Modify: `components/sections/Services.tsx` (171 lines)

**Rewrite `components/sections/Services.tsx`:**

```tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Code2, Cog, Megaphone } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    title: "Разработка сайтов",
    description: "Современные сайты за 3-7 дней. От лендинга до интернет-магазина — адаптированы для мобильных устройств и поисковых систем.",
    price: "От 8,000 CZK",
    link: "/web",
    accentColor: "#3B82F6",
    badgeText: "Web",
  },
  {
    icon: Megaphone,
    title: "Онлайн Реклама",
    description: "Google и Meta Ads для стабильного потока заявок и продаж. Запуск, ведение и оптимизация с фокусом на рост бизнеса.",
    price: "От 10,000 CZK/мес",
    link: "/ads",
    accentColor: "#F43F5E",
    badgeText: "Ads",
  },
  {
    icon: BarChart3,
    title: "Аналитика и трекинг",
    description: "Точный учёт заявок и продаж даже при блокировке cookies. Вы видите на 20–40% больше реальных данных.",
    price: "От 8,000 CZK",
    link: "/tracking",
    accentColor: "#10B981",
    badgeText: "Analytics",
  },
  {
    icon: Cog,
    title: "Автоматизация",
    description: "Make, n8n и Python-скрипты для ваших бизнес-процессов. Заявки, уведомления, отчёты — без ручного труда.",
    price: "От 5,000 CZK",
    link: "/automation",
    accentColor: "#8B5CF6",
    badgeText: "Auto",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24 bg-[#F8F4EF] overflow-hidden">
      <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-[#3B82F6]/4 blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#1A1F28] whitespace-nowrap">
            Что мы <span className="text-[#F43F5E]">делаем</span>
          </h2>
          <div className="h-px flex-1 bg-[#E8DDD2]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={service.link}
                  className="group block h-full rounded-xl border-2 border-[#1A1F28] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(26,31,40,0.1)] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${service.accentColor}15`, border: `1.5px solid ${service.accentColor}30` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: service.accentColor }} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8A9BAA]">
                      {service.badgeText}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1F28] mb-2 group-hover:text-[#F43F5E] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#64707C] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#1A1F28]">{service.price}</span>
                    <ArrowRight className="w-4 h-4 text-[#64707C] group-hover:text-[#F43F5E] group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Commit**
```bash
git add components/sections/Services.tsx
git commit -m "feat(theme/v2): restyle Services section — brutal cards, light accent icons"
```

---

## Task 4: About Section

**Files:**
- Modify: `components/sections/About.tsx` (84 lines)

**What to keep:** `Image` component with `src="/artem_about_portrait_final.jpg"`, all text content.

**What to change:** Dark `bg-[#0B1A30]` → cream bg, white text → dark text, blue glows → subtle warm orbs, bordered image frame style.

**Rewrite `components/sections/About.tsx`:**

```tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-[#F8F4EF] overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#1A1F28] whitespace-nowrap">
            О <span className="text-[#F43F5E]">нас</span>
          </h2>
          <div className="h-px flex-1 bg-[#E8DDD2]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Brutal offset frame */}
            <div className="absolute top-4 left-4 h-full w-full bg-[#F43F5E] rounded-2xl -z-10" />
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#1A1F28] aspect-[4/5] max-w-md mx-auto md:max-w-none">
              <Image
                src="/artem_about_portrait_final.jpg"
                alt="Artem - Founder HaloAgency"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#E8DDD2]">
                <span className="text-sm font-bold text-[#1A1F28]">
                  haloagency<span className="text-[#F43F5E]">.cz</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text Column — keep all existing text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* IMPORTANT: Keep all existing text/JSX from the current About.tsx text column here.
                Only change: bg colors (dark → cream), text colors (white/slate → dark/muted),
                border colors, and card backgrounds. */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

> **Note for implementer:** Read the current `components/sections/About.tsx` text column content in full before rewriting. Preserve all existing paragraphs, stat blocks, bullet points — only restyle the wrapper classNames. The image column above is a complete replacement. For the text column, replace all dark color classes:
> - `text-white` → `text-[#1A1F28]`
> - `text-slate-300/400` → `text-[#64707C]`
> - `bg-white/5` → `bg-white`
> - `border-white/10` → `border-[#E8DDD2]`
> - `bg-blue-500/10` → `bg-[#EFF6FF]`

**Step 2: Commit**
```bash
git add components/sections/About.tsx
git commit -m "feat(theme/v2): restyle About section — cream bg, brutal photo frame, dark text"
```

---

## Task 5: Projects Section

**Files:**
- Modify: `components/sections/Projects.tsx` (144 lines)

**What to keep:** All `projects` data array, `href` links, image `src` values, `stats` labels, `description` text.

**What to change:** Dark card backgrounds → white brutal cards, translucent colored badges → LP v2 badge style, dark text → dark on cream.

**Rewrite `components/sections/Projects.tsx`:**

```tsx
"use client";

import { TrendingUp, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Keep the projects data array EXACTLY as-is from current file
const projects = [
  // ... (copy from existing file unchanged)
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-24 bg-[#FDF9F5] overflow-hidden">
      <div className="absolute top-0 right-0 h-[350px] w-[350px] rounded-full bg-[#F43F5E]/4 blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#1A1F28] whitespace-nowrap">
            Кейсы <span className="text-[#F43F5E]">клиентов</span>
          </h2>
          <div className="h-px flex-1 bg-[#E8DDD2]" />
          <span className="text-xs font-medium text-[#8A9BAA] whitespace-nowrap">
            {projects.length} проекта
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={project.span}
            >
              <Link
                href={project.href}
                className="group flex flex-col h-full rounded-xl border-2 border-[#1A1F28] bg-white shadow-[4px_4px_0px_0px_rgba(26,31,40,0.1)] overflow-hidden transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden bg-[#F0E6DB]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Stats badge */}
                  <div className="absolute top-3 right-3 bg-white border border-[#1A1F28] rounded px-2 py-1 text-xs font-bold text-[#1A1F28] shadow-[2px_2px_0px_0px_rgba(26,31,40,0.1)]">
                    {project.stats}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center rounded bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 text-xs font-bold text-[#3B82F6]">
                      {project.category}
                    </span>
                    <span className="text-xs font-bold text-[#8A9BAA]">{project.number}</span>
                  </div>
                  <h3 className="font-bold text-[#1A1F28] mb-1 group-hover:text-[#F43F5E] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#64707C] mb-1 font-medium">{project.subtitle}</p>
                  <p className="text-sm text-[#64707C] leading-relaxed flex-1">{project.description}</p>
                  <div className="flex items-center gap-1 mt-4 text-xs font-bold text-[#F43F5E]">
                    Подробнее <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

> **Note for implementer:** Copy the `projects` array exactly from the current `components/sections/Projects.tsx` — do not modify any data.

**Step 2: Commit**
```bash
git add components/sections/Projects.tsx
git commit -m "feat(theme/v2): restyle Projects section — brutal card grid, LP v2 badges"
```

---

## Task 6: Packages Section

**Files:**
- Modify: `components/sections/Packages.tsx` (283 lines)

**What to keep:** `packages` data array, `openContactModal` calls, all price/feature text, the `useContactModalActions` hook.

**Pattern for highlighted package:** Pink border instead of default dark border + pink offset shadow:
```
border-[#F43F5E] shadow-[4px_4px_0px_0px_rgba(244,63,94,0.25)]
```

**Full rewrite guidance:**

Read current `Packages.tsx` in full. Keep the `packages` data array. Replace the card rendering with:
- Section container: cream bg
- Section heading: standard LP v2 heading pattern
- Each package: brutal card with `border-2 border-[#1A1F28]`; highlighted package gets `border-[#F43F5E]` + pink offset shadow
- Highlighted badge: `bg-[#FFF1F2] border border-[#FECDD3] text-[#F43F5E]`
- Feature list: `✓` checkmark in `text-[#F43F5E]`, text in `text-[#1A1F28]`
- CTA button: `<Button className="w-full">` (pink by default), non-highlighted uses `variant="outline"`
- Price: `text-3xl font-black text-[#1A1F28]`

**Step 2: Commit**
```bash
git add components/sections/Packages.tsx
git commit -m "feat(theme/v2): restyle Packages section — brutal cards, pink highlight tier"
```

---

## Task 7: FAQ Section

**Files:**
- Modify: `components/sections/FAQ.tsx` (156 lines)

**What to keep:** All `defaultFaqs` data, `FAQItem`/`FAQProps` types, accordion open/close logic, `ShieldCheck` guarantee footer (if present).

**Rewrite guidance:** Read current FAQ.tsx in full. Keep the accordion state logic. Replace visual markup:
- Section: cream bg, LP v2 heading pattern
- Each item: bottom border `border-b border-[#E8DDD2]`
- Question row: `py-5 flex items-center justify-between cursor-pointer text-[#1A1F28] font-semibold`
- Open question: `text-[#F43F5E]`
- Plus/minus icon: `w-5 h-5 text-[#F43F5E]`
- Answer text: `text-[#64707C] text-sm leading-relaxed pb-5`
- Guarantee footer (if present): white brutal card with `✓` checkmarks in pink

**Step 2: Commit**
```bash
git add components/sections/FAQ.tsx
git commit -m "feat(theme/v2): restyle FAQ section — cream bg, pink open state, brutal card footer"
```

---

## Task 8: Process Section

**Files:**
- Modify: `components/sections/Process.tsx` (199 lines)

**What to keep:** `steps` array with all content, `openContactModal` call, Button import.

**Rewrite guidance:** Read current Process.tsx in full. Keep `steps` array. Replace visual markup:
- Section: cream bg
- Section heading: LP v2 pattern
- Each step: white brutal card (`border-2 border-[#1A1F28] shadow-[4px_4px_0px_0px_rgba(26,31,40,0.1)]`)
- Step number: large `font-black text-[#F43F5E]` (e.g. "01", "02")
- Icon: in a light badge `bg-[#EFF6FF]`
- Timeline label: blue badge `bg-[#EFF6FF] border border-[#BFDBFE] text-[#3B82F6]`
- Result label: small `border-l-2 border-[#F43F5E] pl-3 text-sm text-[#64707C]`
- Connector between steps: `h-px bg-[#E8DDD2]` or `w-px bg-[#E8DDD2]` between cards
- Bottom CTA: pink brutal Button

**Step 2: Commit**
```bash
git add components/sections/Process.tsx
git commit -m "feat(theme/v2): restyle Process section — numbered brutal cards, pink accents"
```

---

## Task 9: GrowthPlanMagnet Section

**Files:**
- Modify: `components/sections/GrowthPlanMagnet.tsx` (456 lines)

**What to keep:** ALL form logic — `useForm`, `zodResolver`, `growthPlanSchema`, `handleSubmit`, all HaloTrack calls, `selectedTried` state, `businessTypes`/`goals`/`triedOptions` data arrays, success/error states.

**Rewrite guidance:** Read current GrowthPlanMagnet.tsx in full. Replace only visual markup:
- Section: `bg-[#FDF9F5]`
- Section heading: LP v2 pattern
- Form wrapper: white brutal card
- Multi-select chip buttons (businessType, goals, tried): light style; selected state = `bg-[#F43F5E] text-white border-[#F43F5E]`; unselected = `bg-white border-[#DDD4C8] text-[#1A1F28] hover:border-[#F43F5E]/50`
- Input fields: LP v2 field style (use `<Input>` component — already updated in Task 1)
- Labels: `block text-sm font-medium text-[#3D4852] mb-1.5`
- Submit button: `<Button className="w-full h-12">`
- Success state: `rounded-lg border-2 border-[#22C55E] bg-[#F0FDF4] p-4 text-sm font-medium text-[#166534]`
- Error state: `rounded-lg border-2 border-[#EF4444] bg-[#FEF2F2] p-4 text-sm font-medium text-[#991B1B]`

**Step 2: Commit**
```bash
git add components/sections/GrowthPlanMagnet.tsx
git commit -m "feat(theme/v2): restyle GrowthPlanMagnet — brutal card form, LP v2 chip selectors"
```

---

## Task 10: Contact Section

**Files:**
- Modify: `components/sections/Contact.tsx` (329 lines)

**What to keep:** ALL form logic — `useForm`, `zodResolver`, `contactFormSchema`, `handleSubmit`, HaloTrack calls, `selectedService` state, `services` data, success/error states.

**Rewrite guidance:** Read current Contact.tsx in full. Replace only visual markup:
- Section: cream bg
- Section heading: LP v2 pattern
- Two-column layout: form left, contact info right (or stack on mobile)
- Form card: white brutal card `border-2 border-[#1A1F28] shadow-[4px_4px_0px_0px_rgba(26,31,40,0.1)] p-8`
- Service selector chips: same pattern as GrowthPlanMagnet chips above
- Input/textarea: LP v2 field style via `<Input>` / `<Textarea>` components
- Submit button: `<Button className="w-full h-12">`
- Contact info column: white brutal card with email/phone/WhatsApp/Telegram links, icon in `bg-[#EFF6FF]` circles

**Step 2: Commit**
```bash
git add components/sections/Contact.tsx
git commit -m "feat(theme/v2): restyle Contact section — brutal card form, light contact info"
```

---

## Task 11: Contact Modal

**Files:**
- Modify: `components/ui/contact-modal.tsx` (356 lines)

**What to keep:** ALL logic — `isOpen`/`close` from context, `handleSubmit`, HaloTrack/fbq calls, `selectedService` state, `services` data, `isPackageFlow` logic, form fields.

**Rewrite guidance:** Read current contact-modal.tsx in full. Replace only visual markup:
- Modal backdrop: `fixed inset-0 bg-[#1A1F28]/40 backdrop-blur-sm z-50`
- Modal panel: `bg-white rounded-2xl border-2 border-[#1A1F28] shadow-[8px_8px_0px_0px_rgba(26,31,40,0.1)] p-6 sm:p-8 w-full max-w-lg mx-4`
- Close button: `text-[#64707C] hover:text-[#1A1F28]`
- Service chips: same chip pattern (selected = pink fill, unselected = white + dark border)
- Input/textarea: LP v2 field style via updated `<Input>` / `<Textarea>` components
- Consent checkbox: `accent-[#F43F5E]`
- Submit button: `<Button className="w-full h-12">`
- Success state: green bordered box

**Step 2: Commit**
```bash
git add components/ui/contact-modal.tsx
git commit -m "feat(theme/v2): restyle ContactModal — brutal card panel, LP v2 field style"
```

---

## Task 12: Ads Page

**Files:**
- Modify: `app/ads/AdsPageClient.tsx` (726 lines)

**What to keep:** ALL data arrays (`adsPackages`, etc.), all `openContactModal` calls, `AdsProcess`/`AdsLeadMagnet`/`AdsFAQ` sub-components, imports for icons and logic.

**What to remove:** `SpotlightHero` import and usage — replace with blur orbs.

**Rewrite guidance:** Read current AdsPageClient.tsx in full. This file has multiple sections inline. For each:

1. **Hero section:** Cream bg + blur orbs, dark text, pink badge, bold headline, outline + pink buttons, no SpotlightHero
2. **Stats strip:** 3-4 brutal stat cards in a row (`border-2 border-[#1A1F28] bg-white shadow-[4px_4px_0px_0px_rgba(26,31,40,0.1)]`)
3. **Package cards:** same brutal card pattern as homepage Packages section
4. **Any feature/benefit grids:** white brutal cards
5. **SectionDivider:** update to `via-[#F43F5E]/25 border-t border-[#E8DDD2]`

**Step 2: Commit**
```bash
git add app/ads/AdsPageClient.tsx
git commit -m "feat(theme/v2): restyle Ads page — cream bg, brutal cards, remove SpotlightHero"
```

---

## Task 13: Web Page

**Files:**
- Modify: `app/web/WebPageClient.tsx` (683 lines)
- Also check sub-section files: `components/sections/WebFAQ.tsx`, `WebGuarantees.tsx`, `WebProcess.tsx`, `WebProjectForm.tsx`, `WebSocialProof.tsx`

**What to keep:** `webPackages` data, `openModal` function with package name/price logic, all imports.

**What to remove:** `SpotlightHero` import and usage, dark `SectionDivider`.

**Rewrite guidance:** Same pattern as Ads page. Cream bg throughout, brutal cards for packages/features, LP v2 section headings, pink/blue badges.

For the sub-section files (`WebFAQ`, `WebGuarantees`, `WebProcess`, `WebProjectForm`, `WebSocialProof`): read each, restyle to cream bg + brutal cards. Keep all form logic in `WebProjectForm`.

**Step 2: Commit**
```bash
git add app/web/WebPageClient.tsx components/sections/Web*.tsx
git commit -m "feat(theme/v2): restyle Web page and sub-sections"
```

---

## Task 14: Tracking Page

**Files:**
- Modify: `app/tracking/page.tsx` (589 lines)
- Check: `components/sections/TrackingAudit.tsx`

**What to keep:** All content, `openContactModal` calls, `CSSScrollAnimation` usage.

**What to remove:** `SpotlightHero`, green gradient badge (replace with blue badge).

**Rewrite guidance:** Same pattern. Cream bg, brutal cards, LP v2 headings. The tracking page currently uses green as its accent — keep green for the "server-side tracking" stat highlights where appropriate, but normalize the hero and section headings to the standard pink/blue palette.

**Step 2: Commit**
```bash
git add app/tracking/page.tsx components/sections/TrackingAudit.tsx
git commit -m "feat(theme/v2): restyle Tracking page — cream bg, brutal cards"
```

---

## Task 15: Automation Page

**Files:**
- Modify: `app/automation/page.tsx` (864 lines)

**What to keep:** ALL data (`techStack`, `commonAutomations`), `FAQ` sub-component usage, `openContactModal` calls, Python icon SVG.

**What to remove:** `SpotlightHero`, dark `SectionDivider`.

**Rewrite guidance:** Same pattern. This is the largest page file. Work through it section by section:
1. Hero — cream, blur orbs, dark text, pink badge, bold headline
2. Tech stack cards — brutal white cards
3. Automations list — each item as a white brutal card or clean list row with `border-l-2 border-[#F43F5E]`
4. Any pricing/CTA sections — brutal card + pink button

**Step 3: Commit**
```bash
git add app/automation/page.tsx
git commit -m "feat(theme/v2): restyle Automation page — cream bg, brutal cards"
```

---

## Task 16: Header & Footer Polish

**Files:**
- Modify: `components/layout/Header.tsx`
- Modify: `components/layout/Footer.tsx`

These are already largely done in `ui-v2-theme`. Verify and clean up:

**Header checks:**
- Mobile menu backdrop and panel use cream bg — ✓ already done
- CTA button uses `<Button>` component — ✓ already done
- Nav link hover color: `hover:text-[#1A1F28]` and active state `text-[#F43F5E]` for current page
- Ensure `lp` mode header also uses updated `<Button>` variant

**Footer checks:**
- `bg-ha-bg` (cream) — ✓ already done
- Pink/blue gradient accent lines — ✓ already done
- Link hover: `hover:text-[#F43F5E]`
- Copyright text: `text-[#64707C]`

Fix any remaining issues found during review.

**Step 2: Commit**
```bash
git add components/layout/Header.tsx components/layout/Footer.tsx
git commit -m "feat(theme/v2): polish Header and Footer — verify LP v2 consistency"
```

---

## Task 17: Final Verification

**Steps:**

1. Start dev server:
```bash
npm run dev
```

2. Check each page visually:
   - `/` — homepage all sections
   - `/ads` — ads page
   - `/web` — web page
   - `/tracking` — tracking page
   - `/automation` — automation page
   - `/lp/v2` — reference page (should look consistent with the rest)

3. Open contact modal on homepage — verify LP v2 field style

4. Check mobile (375px width) — no horizontal scroll, touch targets ≥44px

5. Run lint:
```bash
npm run lint
```

6. Fix any lint errors found.

7. Final commit:
```bash
git add -A
git commit -m "feat(theme/v2): complete full-site restyle to LP v2 visual language"
```

---

## Parallelization Notes

Tasks 2–5 (Hero, Services, About, Projects) can be executed in parallel — no shared state.
Tasks 6–10 (Packages, FAQ, Process, GrowthPlanMagnet, Contact) can be executed in parallel.
Tasks 11–15 (Modal, service pages) can be executed in parallel.
Task 16 (Header/Footer) should be last among layout tasks.
Task 17 (verification) must be last.
