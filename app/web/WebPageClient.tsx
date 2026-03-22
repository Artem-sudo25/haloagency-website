"use client";

import {
  ArrowRight,
  Check,
  Code2,
  Globe,
  Layout,
  Rocket,
  ShoppingCart,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import WebProcess from "@/components/sections/WebProcess";
import { Button } from "@/components/ui/button";

const siteTypeCards = [
  {
    title: "Лендинг",
    icon: Rocket,
    accent: "bg-[#FFD166]",
    href: "/web/landing-pages",
    cta: "Подробнее о лендинге",
    summary:
      "Для запуска оффера, рекламного трафика и одной понятной цели: заявка, звонок или бронь.",
    bullets: [
      "быстрый старт и короткие сроки",
      "сильный первый экран и понятный CTA",
      "подходит для рекламы и теста спроса",
    ],
  },
  {
    title: "Сайт для бизнеса",
    icon: Layout,
    accent: "bg-[#06D6A0]",
    href: "/web/business-websites",
    cta: "Подробнее о сайте для бизнеса",
    summary:
      "Для компаний, которым нужны доверие, понятная структура услуг и основа под SEO и продажи.",
    bullets: [
      "страницы услуг, кейсы, о компании",
      "лучше работает для поиска, рекомендаций и брендового трафика",
      "помогает спокойно объяснить, почему стоит обратиться",
    ],
  },
  {
    title: "Интернет-магазин",
    icon: ShoppingCart,
    accent: "bg-[#B19CD9]",
    href: "/web/ecommerce",
    cta: "Подробнее об интернет-магазине",
    summary:
      "Для каталога, онлайн-оплаты, аналитики продаж и дальнейшего масштабирования через рекламу.",
    bullets: [
      "каталог, корзина, оплата и логистика",
      "важна аналитика заказов, а не только трафика",
      "подходит, если нужен рост через рекламу и повторные продажи",
    ],
  },
];

const fitCards = [
  {
    title: "Сайт работает лучше, когда",
    accent: "bg-white",
    items: [
      "понятно, кто придёт на страницу и что должен сделать дальше",
      "есть структура под услуги, кейсы, доверие и следующий шаг",
      "сайт нормально читается и работает на мобильных",
      "формы и аналитика заложены сразу, а не прикручиваются потом",
    ],
  },
  {
    title: "Что чаще всего ломает результат сайта",
    accent: "bg-[#1A1A1A]",
    dark: true,
    items: [
      "в одну страницу пытаются уместить все услуги и все сценарии сразу",
      "непонятно, какой трафик придёт и что человек увидит первым",
      "форма не встроена в реальную обработку обращений",
      "структура не выдерживает рост через контент, рекламу или новые услуги",
    ],
  },
];

const supportCards = [
  {
    title: "Реклама и каналы трафика",
    text: "Страница должна соответствовать источнику трафика. Иначе даже хорошая реклама упрётся в слабую посадку.",
  },
  {
    title: "Аналитика и заявки",
    text: "Формы, события и источники должны считаться так, чтобы было видно, какие страницы реально приносят заявки и продажи.",
  },
];

const proofCards = [
  {
    title: "Nejbalonky.cz",
    result: "Интернет-магазин + реклама + аналитика",
    text: "Магазин с аналитикой, рекламой, интеграциями и структурой, рассчитанной на рост.",
    href: "/case-studies/nejablonky",
    tags: ["Интернет-магазин", "Структура", "Аналитика"],
  },
  {
    title: "ProPradlo.cz",
    result: "Сайт + поток заявок",
    text: "Конверсионный сайт, локальная видимость, автоматизация заявок и готовность к рекламе.",
    href: "/case-studies/propradlo",
    tags: ["Лендинг", "Автоматизация", "Google Ads"],
  },
  {
    title: "DoggyStyle",
    result: "Сайт + запись + CRM",
    text: "Сайт для локального бизнеса с логикой записи и связкой с внутренними процессами.",
    href: "/case-studies/doggy-salon",
    tags: ["Сайт", "CRM", "Запись"],
  },
];

const pricingNotes = [
  { label: "Лендинг", price: "от 10,000 Kč", href: "/web/landing-pages" },
  {
    label: "Сайт для бизнеса",
    price: "от 15,000 Kč",
    href: "/web/business-websites",
  },
  {
    label: "Интернет-магазин",
    price: "от 35,000 Kč",
    href: "/web/ecommerce",
  },
];

const breadcrumbItems = [{ label: "Главная", href: "/" }, { label: "Сайты" }];

export default function WebPageClient() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] pt-20">
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10">
        <section className="relative px-4 py-10 md:py-28">
          <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Breadcrumbs items={breadcrumbItems} />
              <div className="mb-8 inline-flex items-center gap-2 rounded-xl border-2 border-[#1A1A1A] bg-white px-4 py-2 shadow-[4px_4px_0px_0px_#1A1A1A]">
                <Code2 className="h-4 w-4 text-[#FF3366]" />
                <span className="text-sm font-bold uppercase tracking-wide text-[#1A1A1A]">
                  Сайты для бизнеса
                </span>
              </div>

              <h1
                className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-[#1A1A1A] md:text-7xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Сайт как система,
                <br />
                <span className="relative inline-block">
                  а не просто дизайн
                  <svg
                    className="absolute -bottom-2 left-0 -z-10 h-4 w-full text-[#FF3366]"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 10 Q 50 20 100 10"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                  </svg>
                </span>
              </h1>

              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-[#1A1A1A]/65">
                Здесь можно быстро понять, какой формат сайта подойдёт именно
                вашей задаче: лендинг, сайт для бизнеса или интернет-магазин.
                Смотрим не только на внешний вид, но и на то, как сайт будет
                приводить обращения, поддерживать рекламу и нормально работать
                на мобильных.
              </p>

              <div className="flex">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-xl border-2 border-[#1A1A1A] bg-[#FF3366] px-8 font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-[#FF3366] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                >
                  <Link
                    href="/contact"
                    data-cta-track="true"
                    data-cta-name="Обсудить сайт"
                    data-cta-location="web_hero"
                    data-cta-category="primary"
                  >
                    Обсудить сайт
                  </Link>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-[#1A1A1A]/55">
                <Link
                  href="#site-types"
                  className="transition-colors hover:text-[#FF3366]"
                >
                  Типы сайтов
                </Link>
                <Link
                  href="#fit"
                  className="transition-colors hover:text-[#FF3366]"
                >
                  Когда сайт работает лучше
                </Link>
                <Link
                  href="#proof"
                  className="transition-colors hover:text-[#FF3366]"
                >
                  Кейсы
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A]">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      icon: Rocket,
                      label: "Лендинг",
                      text: "для оффера и рекламного запуска",
                      href: "/web/landing-pages",
                    },
                    {
                      icon: Globe,
                      label: "Сайт для бизнеса",
                      text: "для услуг, доверия и поиска",
                      href: "/web/business-websites",
                    },
                    {
                      icon: ShoppingCart,
                      label: "Интернет-магазин",
                      text: "для каталога, оплаты и онлайн-заказов",
                      href: "/web/ecommerce",
                    },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group rounded-2xl border-2 border-[#1A1A1A] bg-[#F5F5F7] p-5 shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                    >
                      <item.icon className="mb-3 h-6 w-6 text-[#FF3366]" />
                      <div className="text-sm font-bold text-[#1A1A1A]">
                        {item.label}
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/60">
                        {item.text}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border-2 border-[#1A1A1A] bg-[#1A1A1A] p-8 text-white shadow-[8px_8px_0px_0px_#118AB2]">
                <div className="flex items-start gap-4">
                  <Sparkles className="mt-1 h-6 w-6 flex-shrink-0 text-[#FFD166]" />
                  <div>
                    <h2
                      className="text-2xl font-extrabold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Как выбрать формат
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-white/75">
                      Сначала понимаем задачу бизнеса. Потом решаем, нужен ли
                      один продающий экран, полноценный сайт услуг или
                      интернет-магазин. И уже после этого обсуждаем объём, сроки
                      и запуск.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="site-types" className="px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2
                className="mb-4 text-4xl font-extrabold text-[#1A1A1A] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Какой тип сайта нужен бизнесу
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#1A1A1A]/60">
                У бизнеса редко сразу нужен "весь интернет". Обычно сначала надо
                понять, решаем мы задачу рекламного запуска, доверия к услугам
                или онлайн-продаж.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {siteTypeCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  data-cta-track="true"
                  data-cta-name={card.title}
                  data-cta-location="web_site_types"
                  data-cta-category="routing"
                  className="group flex h-full flex-col rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]"
                >
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#1A1A1A] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] ${card.accent}`}
                  >
                    <card.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-[#1A1A1A]">
                    {card.title}
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-[#1A1A1A]/60">
                    {card.summary}
                  </p>
                  <ul className="mb-8 space-y-3">
                    {card.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF3366]" />
                        <span className="leading-relaxed text-[#1A1A1A]/75">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#1A1A1A] transition-colors group-hover:text-[#FF3366]">
                    {card.cta}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="fit" className="px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2
                className="mb-4 text-4xl font-extrabold text-[#1A1A1A] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Когда сайт действительно работает
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#1A1A1A]/60">
                Сайт не должен существовать отдельно от функции страницы,
                источника трафика и следующего шага. Иначе он превращается в
                красивую, но слабую витрину.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {fitCards.map((card) => (
                <div
                  key={card.title}
                  className={`rounded-3xl border-2 border-[#1A1A1A] p-8 shadow-[8px_8px_0px_0px_#1A1A1A] ${
                    card.dark
                      ? "bg-[#1A1A1A] text-white"
                      : `${card.accent} text-[#1A1A1A]`
                  }`}
                >
                  <h3
                    className="mb-6 text-2xl font-extrabold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {card.title}
                  </h3>
                  <ul className="space-y-4">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                            card.dark ? "text-[#FFD166]" : "text-[#FF3366]"
                          }`}
                        />
                        <span
                          className={`text-sm leading-relaxed ${
                            card.dark ? "text-white/75" : "text-[#1A1A1A]/70"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2
                className="mb-4 text-4xl font-extrabold text-[#1A1A1A] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Что ещё влияет на результат сайта
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#1A1A1A]/60">
                Сам по себе сайт не решает всё. Важно, откуда приходит человек,
                как он оставляет заявку и видите ли вы, какие страницы реально
                работают, а какие просто занимают место.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {supportCards.map((card) => (
                <div
                  key={card.title}
                  className="flex h-full flex-col rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A]"
                >
                  <h3 className="mb-3 text-2xl font-bold text-[#1A1A1A]">
                    {card.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#1A1A1A]/60">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <WebProcess />

        <section id="proof" className="px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2
                className="mb-4 text-4xl font-extrabold text-[#1A1A1A] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Кейсы, где сайт был частью роста
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#1A1A1A]/60">
                Хороший сайт не живёт отдельно. Он работает вместе с рекламой,
                аналитикой, формами, CRM и реальным процессом обработки заявок.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {proofCards.map((card) => (
                <div key={card.title}>
                  <Link
                    href={card.href}
                    className="group flex h-full flex-col rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]"
                  >
                    <div className="mb-4 inline-flex w-fit rounded-full border-2 border-[#1A1A1A] bg-[#FFD166] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
                      {card.result}
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-[#1A1A1A]">
                      {card.title}
                    </h3>
                    <p className="mb-6 text-base leading-relaxed text-[#1A1A1A]/60">
                      {card.text}
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border-2 border-[#1A1A1A] bg-[#06D6A0] px-2 py-1 text-xs font-bold text-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#1A1A1A] transition-colors group-hover:text-[#FF3366]">
                      Открыть кейс
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-5xl">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A]">
                <div className="mb-5 inline-flex items-center gap-2 rounded-xl border-2 border-[#1A1A1A] bg-[#FFD166] px-4 py-2 shadow-[4px_4px_0px_0px_#1A1A1A]">
                  <TrendingUp className="h-4 w-4 text-[#1A1A1A]" />
                  <span className="text-sm font-bold uppercase tracking-wide text-[#1A1A1A]">
                    Ориентиры по стоимости
                  </span>
                </div>
                <h2
                  className="mb-4 text-3xl font-extrabold text-[#1A1A1A] md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  По бюджету лучше сразу понимать формат сайта
                </h2>
                <ul className="space-y-4">
                  {pricingNotes.map((note) => (
                    <li key={note.label}>
                      <Link
                        href={note.href}
                        className="group/price flex items-center justify-between rounded-xl border-2 border-[#1A1A1A]/10 bg-[#F5F5F7] px-5 py-4 transition-all hover:border-[#1A1A1A] hover:shadow-[4px_4px_0px_0px_#1A1A1A]"
                      >
                        <span className="flex items-center gap-3">
                          <ArrowRight className="h-4 w-4 text-[#FF3366] transition-transform group-hover/price:translate-x-1" />
                          <span className="text-base font-bold text-[#1A1A1A]">
                            {note.label}
                          </span>
                        </span>
                        <span className="text-base font-extrabold text-[#1A1A1A]">
                          {note.price}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-[#1A1A1A]/45">
                  Точная стоимость зависит от объёма задачи. Ориентиры помогают
                  понять порядок цифр до обсуждения.
                </p>
              </div>

              <div className="rounded-3xl border-2 border-[#1A1A1A] bg-[#1A1A1A] p-8 text-white shadow-[8px_8px_0px_0px_#118AB2]">
                <div className="mb-5 inline-flex items-center gap-2 rounded-xl border-2 border-white/15 bg-white/10 px-4 py-2">
                  <Globe className="h-4 w-4 text-[#FFD166]" />
                  <span className="text-sm font-bold uppercase tracking-wide text-white">
                    Следующий шаг
                  </span>
                </div>
                <h2
                  className="mb-4 text-3xl font-extrabold md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Обсудим, какой сайт нужен именно вам
                </h2>
                <p className="mb-8 text-base leading-relaxed text-white/75">
                  Если нужно быстро запустить оффер, делаем лендинг. Если нужно
                  показать услуги и повысить доверие, делаем сайт для бизнеса.
                  Если нужно продавать онлайн, проектируем интернет-магазин и
                  сразу закладываем аналитику продаж.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-xl border-2 border-[#1A1A1A] bg-[#FF3366] px-8 font-bold text-white shadow-[4px_4px_0px_0px_#FFFFFF] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-[#FF3366] hover:shadow-[6px_6px_0px_0px_#FFFFFF]"
                >
                  <Link
                    href="/contact"
                    data-cta-track="true"
                    data-cta-name="Перейти к обсуждению"
                    data-cta-location="web_final_cta"
                    data-cta-category="primary"
                  >
                    Перейти к обсуждению
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
