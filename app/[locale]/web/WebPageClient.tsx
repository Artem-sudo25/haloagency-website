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
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import WebProcess from "@/components/sections/WebProcess";
import { Button } from "@/components/ui/button";

const siteTypeIcons = [Rocket, Layout, ShoppingCart];
const siteTypeAccents = ["bg-[#FFD166]", "bg-[#06D6A0]", "bg-[#B19CD9]"];
const siteTypeHrefs = ["/web/landing-pages", "/web/business-websites", "/web/ecommerce"] as const;

const quickLinkIcons = [Rocket, Globe, ShoppingCart];
const quickLinkHrefs = ["/web/landing-pages", "/web/business-websites", "/web/ecommerce"] as const;

const proofTitles = ["Nejbalonky.cz", "ProPradlo.cz", "DoggyStyle"];
const proofHrefs = ["/case-studies/nejablonky", "/case-studies/propradlo", "/case-studies/doggy-salon"] as const;

export default function WebPageClient() {
  const t = useTranslations("webPage");
  const tb = useTranslations("breadcrumbs");

  const breadcrumbItems = [{ label: tb("home"), href: "/" }, { label: tb("web") }];

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
                  {t("badge")}
                </span>
              </div>

              <h1
                className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-[#1A1A1A] md:text-7xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("title")}
                <br />
                <span className="relative inline-block">
                  {t("titleLine2")}
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
                {t("subtitle")}
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
                    data-cta-name={t("heroCta")}
                    data-cta-location="web_hero"
                    data-cta-category="primary"
                  >
                    {t("heroCta")}
                  </Link>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-[#1A1A1A]/55">
                <Link href="#site-types" className="transition-colors hover:text-[#FF3366]">
                  {t("anchorTypes")}
                </Link>
                <Link href="#fit" className="transition-colors hover:text-[#FF3366]">
                  {t("anchorFit")}
                </Link>
                <Link href="#proof" className="transition-colors hover:text-[#FF3366]">
                  {t("anchorProof")}
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A]">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[0, 1, 2].map((i) => {
                    const Icon = quickLinkIcons[i];
                    return (
                      <Link
                        key={i}
                        href={quickLinkHrefs[i]}
                        className="group rounded-2xl border-2 border-[#1A1A1A] bg-[#F5F5F7] p-5 shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                      >
                        <Icon className="mb-3 h-6 w-6 text-[#FF3366]" />
                        <div className="text-sm font-bold text-[#1A1A1A]">
                          {t(`quickLinks.${i}.label`)}
                        </div>
                        <div className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/60">
                          {t(`quickLinks.${i}.text`)}
                        </div>
                      </Link>
                    );
                  })}
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
                      {t("howToChoose")}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-white/75">
                      {t("howToChooseText")}
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
                {t("siteTypes.title")}
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#1A1A1A]/60">
                {t("siteTypes.subtitle")}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[0, 1, 2].map((i) => {
                const Icon = siteTypeIcons[i];
                return (
                  <Link
                    key={i}
                    href={siteTypeHrefs[i]}
                    data-cta-track="true"
                    data-cta-name={t(`siteTypes.${i}.title`)}
                    data-cta-location="web_site_types"
                    data-cta-category="routing"
                    className="group flex h-full flex-col rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]"
                  >
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#1A1A1A] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] ${siteTypeAccents[i]}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-[#1A1A1A]">
                      {t(`siteTypes.${i}.title`)}
                    </h3>
                    <p className="mb-6 text-base leading-relaxed text-[#1A1A1A]/60">
                      {t(`siteTypes.${i}.summary`)}
                    </p>
                    <ul className="mb-8 space-y-3">
                      {[0, 1, 2].map((j) => (
                        <li key={j} className="flex items-start gap-3 text-sm">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF3366]" />
                          <span className="leading-relaxed text-[#1A1A1A]/75">
                            {t(`siteTypes.${i}.bullets.${j}`)}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#1A1A1A] transition-colors group-hover:text-[#FF3366]">
                      {t(`siteTypes.${i}.cta`)}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                );
              })}
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
                {t("fit.title")}
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#1A1A1A]/60">
                {t("fit.subtitle")}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A] text-[#1A1A1A]">
                <h3
                  className="mb-6 text-2xl font-extrabold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("fit.works.title")}
                </h3>
                <ul className="space-y-4">
                  {[0, 1, 2, 3].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF3366]" />
                      <span className="text-sm leading-relaxed text-[#1A1A1A]/70">
                        {t(`fit.works.${i}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border-2 border-[#1A1A1A] bg-[#1A1A1A] p-8 shadow-[8px_8px_0px_0px_#1A1A1A] text-white">
                <h3
                  className="mb-6 text-2xl font-extrabold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("fit.breaks.title")}
                </h3>
                <ul className="space-y-4">
                  {[0, 1, 2, 3].map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFD166]" />
                      <span className="text-sm leading-relaxed text-white/75">
                        {t(`fit.breaks.${i}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
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
                {t("support.title")}
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#1A1A1A]/60">
                {t("support.subtitle")}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="flex h-full flex-col rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A]"
                >
                  <h3 className="mb-3 text-2xl font-bold text-[#1A1A1A]">
                    {t(`support.${i}.title`)}
                  </h3>
                  <p className="text-base leading-relaxed text-[#1A1A1A]/60">
                    {t(`support.${i}.text`)}
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
                {t("proof.title")}
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#1A1A1A]/60">
                {t("proof.subtitle")}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <div key={i}>
                  <Link
                    href={proofHrefs[i]}
                    className="group flex h-full flex-col rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]"
                  >
                    <div className="mb-4 inline-flex w-fit rounded-full border-2 border-[#1A1A1A] bg-[#FFD166] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
                      {t(`proof.${i}.result`)}
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-[#1A1A1A]">
                      {proofTitles[i]}
                    </h3>
                    <p className="mb-6 text-base leading-relaxed text-[#1A1A1A]/60">
                      {t(`proof.${i}.text`)}
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {[0, 1, 2].map((j) => (
                        <span
                          key={j}
                          className="rounded-md border-2 border-[#1A1A1A] bg-[#06D6A0] px-2 py-1 text-xs font-bold text-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]"
                        >
                          {t(`proof.${i}.tags.${j}`)}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#1A1A1A] transition-colors group-hover:text-[#FF3366]">
                      {t("proof.openCase")}
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
                    {t("pricing.badge")}
                  </span>
                </div>
                <h2
                  className="mb-4 text-3xl font-extrabold text-[#1A1A1A] md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("pricing.title")}
                </h2>
                <ul className="space-y-4">
                  {[0, 1, 2].map((i) => (
                    <li key={i}>
                      <Link
                        href={siteTypeHrefs[i]}
                        className="group/price flex items-center justify-between rounded-xl border-2 border-[#1A1A1A]/10 bg-[#F5F5F7] px-5 py-4 transition-all hover:border-[#1A1A1A] hover:shadow-[4px_4px_0px_0px_#1A1A1A]"
                      >
                        <span className="flex items-center gap-3">
                          <ArrowRight className="h-4 w-4 text-[#FF3366] transition-transform group-hover/price:translate-x-1" />
                          <span className="text-base font-bold text-[#1A1A1A]">
                            {t(`pricing.${i}.label`)}
                          </span>
                        </span>
                        <span className="text-base font-extrabold text-[#1A1A1A]">
                          {t(`pricing.${i}.price`)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-[#1A1A1A]/45">
                  {t("pricing.note")}
                </p>
              </div>

              <div className="rounded-3xl border-2 border-[#1A1A1A] bg-[#1A1A1A] p-8 text-white shadow-[8px_8px_0px_0px_#118AB2]">
                <div className="mb-5 inline-flex items-center gap-2 rounded-xl border-2 border-white/15 bg-white/10 px-4 py-2">
                  <Globe className="h-4 w-4 text-[#FFD166]" />
                  <span className="text-sm font-bold uppercase tracking-wide text-white">
                    {t("finalCta.badge")}
                  </span>
                </div>
                <h2
                  className="mb-4 text-3xl font-extrabold md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("finalCta.title")}
                </h2>
                <p className="mb-8 text-base leading-relaxed text-white/75">
                  {t("finalCta.text")}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-xl border-2 border-[#1A1A1A] bg-[#FF3366] px-8 font-bold text-white shadow-[4px_4px_0px_0px_#FFFFFF] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-[#FF3366] hover:shadow-[6px_6px_0px_0px_#FFFFFF]"
                >
                  <Link
                    href="/contact"
                    data-cta-track="true"
                    data-cta-name={t("finalCta.cta")}
                    data-cta-location="web_final_cta"
                    data-cta-category="primary"
                  >
                    {t("finalCta.cta")}
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
