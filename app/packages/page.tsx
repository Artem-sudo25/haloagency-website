import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import Packages from "@/components/sections/Packages";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/seo";

const breadcrumbItems = [
  { label: "Главная", href: "/" },
  { label: "Пакеты", href: "/packages" },
];

export const metadata: Metadata = {
  title: "Пакеты HaloAgency | Сайты, реклама и интернет-магазины",
  description:
    "Пакеты HaloAgency для бизнеса в Чехии: стартовый сайт, система заявок, интернет-магазин и кастомные проекты. Помогают быстро понять формат работ и ориентир по бюджету.",
  openGraph: {
    title: "Пакеты HaloAgency",
    description:
      "Ориентиры по стоимости и форматам работы: сайты, реклама, аналитика и интернет-магазины для бизнеса в Чехии.",
  },
};

export default function PackagesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          collectionPageJsonLd({
            name: "Пакеты HaloAgency",
            description:
              "Пакеты HaloAgency для бизнеса в Чехии: стартовый сайт, система заявок, интернет-магазин и кастомные проекты. Помогают быстро понять формат работ и ориентир по бюджету.",
            path: "/packages",
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
          <section className="px-6 py-12 md:py-20">
            <div className="mx-auto max-w-[1200px] text-center">
              <Breadcrumbs
                items={breadcrumbItems}
                className="flex justify-center"
              />
              <div className="mb-6 inline-flex items-center gap-2 rounded-xl border-2 border-[#1A1A1A] bg-white px-4 py-2 shadow-[4px_4px_0px_0px_#1A1A1A]">
                <span className="text-sm font-bold uppercase tracking-wide text-[#1A1A1A]">
                  Пакеты и ориентиры
                </span>
              </div>
              <h1
                className="text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-5xl md:text-7xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Пакеты и ориентиры
                <br />
                для следующего шага
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#1A1A1A]/70 md:text-lg">
                Пакет дешевле, чем те же услуги по отдельности. Сайт, реклама,
                аналитика и ведение уже собраны в одну связку с понятной ценой.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  data-cta-track="true"
                  data-cta-name="Обсудить задачу"
                  data-cta-location="packages_hero"
                  data-cta-category="primary"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-[#1A1A1A] bg-[#FF3366] px-8 py-3 text-sm font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                >
                  Обсудить задачу
                </Link>
              </div>
            </div>
          </section>

          <Packages />
        </div>
      </main>
    </>
  );
}
