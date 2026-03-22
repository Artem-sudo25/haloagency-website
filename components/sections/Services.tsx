"use client";

import { ArrowRight, BarChart3, Code2, Cog, Megaphone } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code2,
    cardBg: "bg-[#FFD166]",
    title: "Разработка сайтов",
    description:
      "Лендинги, сайты для бизнеса и интернет-магазины под конкретную задачу.",
    href: "/web",
    quickLinks: [
      { label: "Лендинги", href: "/web/landing-pages" },
      { label: "Сайты для бизнеса", href: "/web/business-websites" },
      { label: "Интернет-магазины", href: "/web/ecommerce" },
    ],
    offset: false,
  },
  {
    icon: Megaphone,
    cardBg: "bg-[#06D6A0]",
    title: "Онлайн-реклама",
    description:
      "Google Ads и Meta Ads, когда нужен управляемый поток заявок, звонков и продаж.",
    href: "/ads",
    quickLinks: [
      { label: "Google Ads", href: "/ads/google-ads" },
      { label: "Meta Ads", href: "/ads/meta-ads" },
      { label: "Все по рекламе", href: "/ads" },
    ],
    offset: true,
  },
  {
    icon: BarChart3,
    cardBg: "bg-[#B19CD9]",
    title: "Аналитика и данные",
    description:
      "GA4, GTM, HaloTrack и настройка данных, чтобы видеть реальные заявки, продажи и слабые места в воронке.",
    href: "/tracking",
    quickLinks: [
      { label: "HaloTrack", href: "/tracking" },
      { label: "Пакет Leads", href: "/packages/leads" },
      { label: "Кейсы", href: "/case-studies" },
    ],
    offset: false,
  },
  {
    icon: Cog,
    cardBg: "bg-[#FFD166]",
    title: "Автоматизация процессов",
    description:
      "CRM, сообщения и повторяющиеся процессы без ручной путаницы и потерь по пути.",
    href: "/automation",
    quickLinks: [
      { label: "Автоматизация", href: "/automation" },
      { label: "Аналитика", href: "/tracking" },
      { label: "Контакт", href: "/contact" },
    ],
    offset: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-5 py-12 md:px-6 md:py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 text-center md:gap-4">
          <h2
            className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            С чего можно начать
          </h2>
          <p className="mt-2 max-w-xl text-base text-[#1A1A1A]/70 md:mt-4 md:text-lg">
            Если задача уже понятна, открывайте нужное направление. Если нет,
            отправьте короткий бриф, и мы подскажем самый разумный первый шаг.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.href}
                className={`relative flex flex-col gap-4 overflow-hidden rounded-2xl border-2 border-[#1A1A1A] p-5 shadow-[6px_6px_0px_0px_#1A1A1A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A] sm:p-6 md:gap-6 md:rounded-xl md:p-8 ${service.cardBg} ${service.offset ? "mt-0 lg:mt-8" : ""}`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1A1A1A] bg-white text-[#1A1A1A] md:h-14 md:w-14`}
                >
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3
                  className="text-xl font-bold text-[#1A1A1A] md:text-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>
                <p className="flex-grow text-[13px] font-medium leading-relaxed text-[#1A1A1A] md:text-sm">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.quickLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`rounded-full border-2 border-[#1A1A1A] bg-white/80 px-3 py-1 text-xs font-bold text-[#1A1A1A] hover:bg-white ${index === 2 ? "hidden sm:inline-flex" : "inline-flex"}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between border-t-2 border-[#1A1A1A]/20 pt-3 text-sm font-bold text-[#1A1A1A] md:mt-4 md:pt-4">
                  <Link href={service.href} className="hover:underline">
                    Подробнее
                  </Link>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
