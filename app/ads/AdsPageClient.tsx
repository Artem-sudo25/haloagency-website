"use client";

import {
  ArrowRight,
  BarChart3,
  Check,
  ExternalLink,
  Layers,
  Megaphone,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import AdsProcess from "@/components/sections/AdsProcess";
import { Button } from "@/components/ui/button";

const channelCards = [
  {
    name: "Google Ads",
    icon: Search,
    accent: "bg-[#06D6A0]",
    href: "/ads/google-ads",
    cta: "Подробнее о Google Ads",
    summary: "Подходит, когда человек уже ищет ваш продукт или услугу.",
    bullets: [
      "есть спрос в поиске и понятный запрос",
      "нужны заявки из поиска и карт",
      "важно видеть окупаемость по запросам",
    ],
  },
  {
    name: "Meta Ads",
    icon: Users,
    accent: "bg-[#FFD166]",
    href: "/ads/meta-ads",
    cta: "Подробнее о Meta Ads",
    summary:
      "Подходит, когда спрос нужно сформировать через оффер, креатив и воронку.",
    bullets: [
      "локальный бизнес, услуги и продукты с понятным оффером",
      "охват из Instagram и Facebook",
      "тестирование офферов, креативов и аудиторий",
    ],
  },
  {
    name: "Seznam Sklik",
    icon: Layers,
    accent: "bg-[#B19CD9]",
    href: "/contact",
    cta: "Обсудить Seznam",
    summary:
      "Дополнительный канал для чешскоязычного рынка и локального спроса.",
    bullets: [
      "локальная аудитория в Чехии",
      "добавочный охват к Google Ads",
      "подключаем, когда это оправдано нишей",
    ],
  },
];

const fitCards = [
  {
    title: "Реклама обычно окупается, когда",
    accent: "bg-white",
    items: [
      "у бизнеса есть понятный оффер и нормальная маржа",
      "вы готовы считать заявки, продажи и стоимость лида",
      "страница уже может принять трафик без провала по конверсии",
      "есть кто-то, кто быстро обрабатывает обращения",
    ],
  },
  {
    title: "Что чаще всего тормозит запуск рекламы",
    accent: "bg-[#1A1A1A]",
    dark: true,
    items: [
      "оффер слабый или человек не понимает, почему должен оставить заявку",
      "не настроена аналитика и непонятно, откуда приходят обращения",
      "страница долго грузится или плохо работает на мобильных",
      "после формы заявки обрабатываются медленно или теряются",
    ],
  },
];

const supportCards = [
  {
    title: "Трекинг и аналитика",
    text: "Нужны, чтобы оценивать рекламу по заявкам и продажам, а не по кликам.",
    href: "/tracking",
  },
  {
    title: "Сайт и посадочные страницы",
    text: "Если трафик ведется на слабую страницу, рекламный бюджет просто сгорает.",
    href: "/web",
  },
  {
    title: "Кейсы и примеры",
    text: "Показывают, как связка рекламы, сайта и аналитики работает в реальных проектах.",
    href: "/case-studies",
  },
];

const pricingHighlight = {
  label: "Ведение рекламы",
  price: "от 8,000 Kč / мес",
  note: "за один канал",
};

const pricingNotes = [
  "Рекламный бюджет оплачивается отдельно и планируется под задачу бизнеса.",
  "Финальный объём работ подтверждаем после короткой диагностики.",
];

const breadcrumbItems = [{ label: "Главная", href: "/" }, { label: "Реклама" }];

export default function AdsPageClient() {
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
                <Megaphone className="h-4 w-4 text-[#FF3366]" />
                <span className="text-sm font-bold uppercase tracking-wide text-[#1A1A1A]">
                  Google Ads и Meta Ads
                </span>
              </div>

              <h1
                className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-[#1A1A1A] md:text-7xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Реклама для бизнеса,
                <br />
                <span className="relative inline-block">
                  когда нужен результат
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
                Если неясно, с чего начать, здесь можно быстро понять, что
                подойдёт вашему бизнесу: Google Ads, Meta Ads или связка
                каналов. Смотрим, где уже есть спрос, готова ли страница и можно
                ли нормально считать заявки.
              </p>

              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl border-2 border-[#1A1A1A] bg-[#FF3366] px-8 font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-[#FF3366] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
              >
                <Link
                  href="/contact"
                  data-cta-track="true"
                  data-cta-name="Обсудить рекламу"
                  data-cta-location="ads_hero"
                  data-cta-category="primary"
                >
                  Обсудить рекламу
                </Link>
              </Button>

            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A]">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      icon: Search,
                      label: "Google Ads",
                      text: "забираем готовый спрос",
                      href: "/ads/google-ads",
                    },
                    {
                      icon: Users,
                      label: "Meta Ads",
                      text: "разогреваем спрос и тестируем офферы",
                      href: "/ads/meta-ads",
                    },
                    {
                      icon: Layers,
                      label: "Seznam Sklik",
                      text: "добавочный охват в Чехии",
                      href: null,
                    },
                  ].map((item) => {
                    const content = (
                      <>
                        <item.icon className="mb-3 h-6 w-6 text-[#FF3366]" />
                        <div className="text-sm font-bold text-[#1A1A1A]">
                          {item.label}
                        </div>
                        <div className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/60">
                          {item.text}
                        </div>
                        {item.href && (
                          <ArrowRight className="mt-3 h-4 w-4 text-[#1A1A1A]/40 transition-colors group-hover:text-[#FF3366]" />
                        )}
                      </>
                    );

                    return item.href ? (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="group rounded-2xl border-2 border-[#1A1A1A] bg-[#F5F5F7] p-5 shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div
                        key={item.label}
                        className="rounded-2xl border-2 border-[#1A1A1A] bg-[#F5F5F7] p-5 shadow-[4px_4px_0px_0px_#1A1A1A]"
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl border-2 border-[#1A1A1A] bg-[#1A1A1A] p-8 text-white shadow-[8px_8px_0px_0px_#FF3366]">
                <div className="flex items-start gap-4">
                  <Sparkles className="mt-1 h-6 w-6 flex-shrink-0 text-[#FFD166]" />
                  <div>
                    <h2
                      className="text-2xl font-extrabold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      С чего обычно начинаем
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-white/75">
                      Сначала понимаем, откуда должен прийти клиент. Потом
                      смотрим на страницу, оффер и аналитику. И только после
                      этого решаем, какой канал запускать и с каким бюджетом.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="channels" className="px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2
                className="mb-4 text-4xl font-extrabold text-[#1A1A1A] md:text-5xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Какой рекламный канал нужен бизнесу
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#1A1A1A]/60">
                Не всегда нужно запускать всё сразу. Обычно достаточно понять,
                где уже есть готовый спрос, а где его нужно сформировать через
                оффер, креатив и страницу.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {channelCards.map((channel) => (
                <Link
                  key={channel.name}
                  href={channel.href}
                  data-cta-track="true"
                  data-cta-name={channel.name}
                  data-cta-location="ads_channels"
                  data-cta-category="routing"
                  className="group flex h-full flex-col rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]"
                >
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#1A1A1A] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] ${channel.accent}`}
                  >
                    <channel.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-[#1A1A1A]">
                    {channel.name}
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-[#1A1A1A]/60">
                    {channel.summary}
                  </p>
                  <ul className="mb-8 space-y-3">
                    {channel.bullets.map((bullet) => (
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
                    {channel.cta}
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
                Когда реклама сработает лучше
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#1A1A1A]/60">
                Реклама работает не в любых условиях. Вот что помогает получить
                результат, а что чаще всего мешает.
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
                Что поддерживает рекламный результат
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#1A1A1A]/60">
                Хорошая реклама редко держится только на кабинете. Ей нужны
                нормальная страница, понятная аналитика и примеры работ, чтобы
                решение выглядело убедительно, а не на словах.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {supportCards.map((card) => (
                <div
                  key={card.title}
                  className="flex h-full flex-col rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A]"
                >
                  <h3 className="mb-3 text-2xl font-bold text-[#1A1A1A]">
                    {card.title}
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-[#1A1A1A]/60">
                    {card.text}
                  </p>
                  <Link
                    href={card.href}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#FF3366] transition-colors hover:text-[#FF3366]/80"
                  >
                    Перейти
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <AdsProcess />

        <section className="px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-5xl">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A]">
                <div className="mb-5 inline-flex items-center gap-2 rounded-xl border-2 border-[#1A1A1A] bg-[#FFD166] px-4 py-2 shadow-[4px_4px_0px_0px_#1A1A1A]">
                  <TrendingUp className="h-4 w-4 text-[#1A1A1A]" />
                  <span className="text-sm font-bold uppercase tracking-wide text-[#1A1A1A]">
                    Ориентир по стоимости
                  </span>
                </div>
                <div className="mb-1 text-base font-bold text-[#1A1A1A]/60">
                  {pricingHighlight.label}
                </div>
                <div
                  className="mb-1 text-4xl font-extrabold text-[#1A1A1A] md:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pricingHighlight.price}
                </div>
                <div className="mb-6 text-sm font-bold text-[#1A1A1A]/45">
                  {pricingHighlight.note}
                </div>
                <ul className="space-y-3 border-t-2 border-dashed border-[#1A1A1A]/10 pt-5">
                  {pricingNotes.map((note) => (
                    <li key={note} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF3366]" />
                      <span className="text-sm leading-relaxed text-[#1A1A1A]/55">
                        {note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border-2 border-[#1A1A1A] bg-[#1A1A1A] p-8 text-white shadow-[8px_8px_0px_0px_#FF3366]">
                <div className="mb-5 inline-flex items-center gap-2 rounded-xl border-2 border-white/15 bg-white/10 px-4 py-2">
                  <Zap className="h-4 w-4 text-[#FFD166]" />
                  <span className="text-sm font-bold uppercase tracking-wide text-white">
                    Следующий шаг
                  </span>
                </div>
                <h2
                  className="mb-4 text-3xl font-extrabold md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Обсудим, какой канал действительно нужен
                </h2>
                <p className="mb-8 text-base leading-relaxed text-white/75">
                  Если уже есть спрос, смотрим Google Ads. Если спрос нужно
                  разогревать, смотрим Meta Ads. Если не хватает данных,
                  начинаем с подготовки трекинга и страницы.
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
                    data-cta-location="ads_final_cta"
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
