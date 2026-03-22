import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import GrowthPlanMagnet from "@/components/sections/GrowthPlanMagnet";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/seo";

const breadcrumbItems = [
  { label: "Главная", href: "/" },
  { label: "Короткий разбор", href: "/growth-plan" },
];

export const metadata: Metadata = {
  title: "Короткий разбор ситуации | HaloAgency",
  description:
    "Если пока неясно, с чего начать, отправьте короткий бриф. Поможем понять, что мешает росту и какой шаг стоит сделать первым.",
  openGraph: {
    title: "Короткий разбор ситуации — HaloAgency",
    description:
      "Короткий разбор сайта, рекламы, аналитики или автоматизации для бизнеса в Чехии. Помогаем понять, с чего лучше начать.",
  },
};

export default function GrowthPlanPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          webPageJsonLd({
            name: "Короткий разбор ситуации",
            description:
              "Если пока неясно, с чего начать, отправьте короткий бриф. Поможем понять, что мешает росту и какой шаг стоит сделать первым.",
            path: "/growth-plan",
          }),
        ]}
      />
      <main className="min-h-screen bg-[#F5F5F7] pt-20">
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10">
          <section className="px-6 py-12 md:py-24">
            <div className="mx-auto max-w-[1200px]">
              <div className="max-w-3xl">
                <Breadcrumbs items={breadcrumbItems} />
                <div className="mb-6 inline-flex items-center gap-2 rounded-xl border-2 border-[#1A1A1A] bg-white px-4 py-2 shadow-[4px_4px_0px_0px_#1A1A1A]">
                  <span className="text-sm font-bold uppercase tracking-wide text-[#1A1A1A]">
                    Когда нужен взгляд со стороны
                  </span>
                </div>
                <h1
                  className="text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-5xl md:text-7xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Короткий разбор
                  <br />
                  перед стартом
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#1A1A1A]/70 md:text-lg">
                  Если пока неясно, что именно тормозит заявки и продажи,
                  отправьте вводные. Мы посмотрим на сайт, рекламу, аналитику и
                  процессы и подскажем, с чего разумнее начать.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#growth-plan"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-[#1A1A1A] bg-[#FF3366] px-8 py-3 text-sm font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                  >
                    Заполнить короткий бриф
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm font-bold text-[#1A1A1A] transition-colors hover:text-[#FF3366]"
                  >
                    Если задача уже ясна, перейти к обсуждению →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <GrowthPlanMagnet />
        </div>
      </main>
    </>
  );
}
