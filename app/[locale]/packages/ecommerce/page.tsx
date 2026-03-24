import {
  BarChart3,
  Check,
  CreditCard,
  Lock,
  Package,
  ShoppingCart,
  TrendingUp,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.packageEcommerce" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/packages/ecommerce",
    locale,
    openGraphTitle: t("ogTitle"),
  });
}

const setupIcons = [ShoppingCart, CreditCard, BarChart3];
const managementIcons = [TrendingUp, BarChart3, ShoppingCart, Zap];
const linkHrefs = ["/web/ecommerce", "/ads/google-ads", "/tracking"];

export default async function EcommercePackagePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "packageEcommercePage" });
  const tb = await getTranslations({ locale, namespace: "breadcrumbs" });

  const breadcrumbItems = [
    { label: tb("home"), href: "/" },
    { label: tb("packages"), href: "/packages" },
    { label: tb("ecommercePackage"), href: "/packages/ecommerce" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          webPageJsonLd({
            name: t("jsonLdName"),
            description: t("jsonLdDescription"),
            path: "/packages/ecommerce",
            locale,
          }),
        ]}
      />
      <main className="min-h-screen bg-[#F5F5F7] pt-20">
        {/* Dot grid background */}
        <div
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-16 md:py-20 md:py-32 px-4 overflow-hidden">
            <div className="container mx-auto max-w-5xl text-center relative z-10">
              <Breadcrumbs
                items={breadcrumbItems}
                className="flex justify-center"
              />
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
                <ShoppingCart className="w-5 h-5 text-[#FF3366]" />
                <span className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wide">
                  {t("badge")}
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#1A1A1A] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("titlePrefix")} <br />
                <span className="relative inline-block z-10">
                  {t("titleAccent")}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-4 text-[#FF3366] -z-10"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>{t("svgTitle")}</title>
                    <path
                      d="M0 10 Q 50 20 100 10"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-[#1A1A1A]/60 mb-10 max-w-3xl mx-auto leading-relaxed">
                {t("subtitle")}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
                <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-6 shadow-[6px_6px_0px_0px_#1A1A1A]">
                  <p className="text-sm text-[#FF3366] mb-2 uppercase tracking-wide font-bold">
                    {t("oneTimeLabel")}
                  </p>
                  <p
                    className="text-5xl font-extrabold text-[#1A1A1A] mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t("oneTimePrice")}
                  </p>
                  <p className="text-sm font-bold text-[#1A1A1A]">
                    {t("oneTimeDesc")}
                  </p>
                </div>
                <div className="bg-[#B19CD9] border-2 border-[#1A1A1A] rounded-2xl p-6 shadow-[6px_6px_0px_0px_#1A1A1A]">
                  <p className="text-sm text-[#1A1A1A] mb-2 uppercase tracking-wide font-bold">
                    {t("monthlyLabel")}
                  </p>
                  <p
                    className="text-5xl font-extrabold text-[#1A1A1A] mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t("monthlyPrice")}
                  </p>
                  <p className="text-sm font-bold text-[#1A1A1A]">
                    {t("monthlyDesc")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Button
                  size="lg"
                  className="rounded-xl px-10 h-14 text-lg bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                  asChild
                >
                  <Link
                    href="/contact"
                    data-cta-track="true"
                    data-cta-name={t("ctaButton")}
                    data-cta-location="package_ecommerce_hero"
                    data-cta-category="primary"
                  >
                    {t("ctaButton")}
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="pb-12 px-4">
            <div className="container mx-auto max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {linkHrefs.map((href, i) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-2xl border-2 border-[#1A1A1A] bg-white p-5 shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                  >
                    <div className="text-lg font-bold text-[#1A1A1A]">
                      {t(`links.${i}.title`)}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/60">
                      {t(`links.${i}.description`)}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* What's Included - Setup */}
          <section className="py-16 md:py-20">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="text-center mb-16">
                <h2
                  className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("setupTitle")}
                </h2>
                <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
                  {t("setupSubtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {setupIcons.map((Icon, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]"
                  >
                    <div className="w-14 h-14 rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] bg-white flex items-center justify-center mb-6">
                      <Icon className={`w-7 h-7 text-[#1A1A1A]`} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                      {t(`setupSections.${sectionIndex}.title`)}
                    </h3>
                    <ul className="space-y-3">
                      {Array.from({ length: 5 }, (_, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-3 text-[#1A1A1A]/60"
                        >
                          <Check className="w-5 h-5 text-[#FF3366] flex-shrink-0 mt-0.5" />
                          <span>{t(`setupSections.${sectionIndex}.items.${itemIndex}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-6 shadow-[6px_6px_0px_0px_#1A1A1A]">
                  <h4 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-[#FF3366]" />
                    {t("securityTitle")}
                  </h4>
                  <ul className="space-y-2 text-sm text-[#1A1A1A]/60">
                    {Array.from({ length: 5 }, (_, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#FF3366] flex-shrink-0" />
                        {t(`securityItems.${i}`)}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#06D6A0] border-2 border-[#1A1A1A] rounded-2xl p-6 shadow-[6px_6px_0px_0px_#1A1A1A]">
                  <h4 className="text-lg font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                    <Package className="w-5 h-5 text-[#1A1A1A]" />
                    {t("managementProcessTitle")}
                  </h4>
                  <ul className="space-y-2 text-sm text-[#1A1A1A]">
                    {Array.from({ length: 5 }, (_, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 font-medium"
                      >
                        <Check className="w-4 h-4 text-[#1A1A1A] flex-shrink-0" />
                        {t(`managementProcessItems.${i}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Monthly Service */}
          <section className="py-16 md:py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2
                  className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("managementTitle")}
                </h2>
                <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
                  {t("managementSubtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {managementIcons.map((Icon, sectionIndex) => (
                  <div
                    key={sectionIndex}
                    className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-8 transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]"
                  >
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] bg-[#FFD166] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#1A1A1A]" />
                      </div>
                      {t(`managementSections.${sectionIndex}.title`)}
                    </h3>
                    <ul className="space-y-4">
                      {Array.from({ length: 5 }, (_, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-3 text-[#1A1A1A]/60"
                        >
                          <Check className="w-5 h-5 text-[#FF3366] flex-shrink-0 mt-0.5" />
                          <span>{t(`managementSections.${sectionIndex}.items.${itemIndex}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Ideal For */}
          <section className="py-16 md:py-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2
                className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-12 text-center"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("idealForTitle")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array.from({ length: 4 }, (_, i) => (
                  <div
                    key={i}
                    className="bg-white border-2 border-[#1A1A1A] rounded-2xl p-6 transition-all shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]"
                  >
                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                      {t(`idealFor.${i}.title`)}
                    </h3>
                    <p className="text-[#1A1A1A]/60 mb-4">{t(`idealFor.${i}.desc`)}</p>
                    <div className="flex flex-wrap gap-2">
                      {Array.from({ length: 3 }, (_, j) => (
                        <span
                          key={j}
                          className="text-xs px-3 py-1 rounded-md border-2 border-[#1A1A1A] bg-[#FFD166] text-[#1A1A1A] font-bold shadow-[2px_2px_0px_0px_#1A1A1A]"
                        >
                          {t(`idealFor.${i}.examples.${j}`)}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <div className="w-16 h-16 rounded-xl border-2 border-[#1A1A1A] bg-white shadow-[4px_4px_0px_0px_#1A1A1A] flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("ctaTitle")}
              </h2>
              <p className="text-xl text-[#1A1A1A]/60 mb-4">
                {t("ctaDescription")}
              </p>
              <p className="text-lg text-[#FF3366] font-bold mb-10">
                {t("ctaPricing")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-xl px-12 h-16 text-lg bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                  asChild
                >
                  <Link
                    href="/contact"
                    data-cta-track="true"
                    data-cta-name={t("ctaFinalButton")}
                    data-cta-location="package_ecommerce_final_cta"
                    data-cta-category="primary"
                  >
                    {t("ctaFinalButton")}
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
