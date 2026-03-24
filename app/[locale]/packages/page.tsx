import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import Packages from "@/components/sections/Packages";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  buildMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.packages" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/packages",
    locale,
    openGraphTitle: t("ogTitle"),
    openGraphDescription: t("ogDescription"),
  });
}

export default async function PackagesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "packagesOverview" });
  const tb = await getTranslations({ locale, namespace: "breadcrumbs" });

  const breadcrumbItems = [
    { label: tb("home"), href: "/" },
    { label: tb("packages"), href: "/packages" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          collectionPageJsonLd({
            name: t("jsonLdName"),
            description: t("jsonLdDescription"),
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
                  {t("badge")}
                </span>
              </div>
              <h1
                className="text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-5xl md:text-7xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("titleLine1")}
                <br />
                {t("titleLine2")}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#1A1A1A]/70 md:text-lg">
                {t("description")}
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  data-cta-track="true"
                  data-cta-name={t("ctaButton")}
                  data-cta-location="packages_hero"
                  data-cta-category="primary"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-[#1A1A1A] bg-[#FF3366] px-8 py-3 text-sm font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                >
                  {t("ctaButton")}
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
