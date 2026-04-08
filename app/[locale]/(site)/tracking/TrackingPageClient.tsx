"use client";
import {
  Apple,
  ArrowRight,
  Ban,
  BarChart3,
  Check,
  CircleX,
  Cookie,
  Globe,
  Lock,
  Server,
  Target,
  TrendingDown,
  Users,
  Zap,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { getCaseStudyCards } from "@/lib/case-study-cards";

const problemCardConfig = [
  { icon: Apple, bg: "bg-[#FFD166]" },
  { icon: Ban, bg: "bg-[#06D6A0]" },
  { icon: Cookie, bg: "bg-[#B19CD9]" },
  { icon: CircleX, bg: "bg-white" },
];

const solutionCardConfig = [
  { icon: Globe },
  { icon: Server },
  { icon: Target },
];

const targetAudienceConfig = [
  { icon: BarChart3 },
  { icon: TrendingDown },
  { icon: Zap },
  { icon: Users },
];

const routeCardConfig = [
  { href: "/ads/google-ads", icon: Target },
  { href: "/ads/meta-ads", icon: Users },
  { href: "/packages/leads", icon: Zap },
];

const statBgColors = ["bg-[#06D6A0]", "bg-[#FFD166]", "bg-[#B19CD9]"];

const FAQ_COUNT = 8;

export default function TrackingPage() {
  const locale = useLocale() as "ru" | "cs";
  const t = useTranslations("trackingPage");
  const tb = useTranslations("breadcrumbs");
  const tf = useTranslations("trackingFaq");
  const trackingProofCards = getCaseStudyCards(locale).filter((caseStudy) =>
    caseStudy.focusAreas.includes("Tracking"),
  );

  const breadcrumbItems = [
    { label: tb("home"), href: "/" },
    { label: tb("tracking") },
  ];

  return (
    <main className="min-h-screen bg-[#F5F5F7] pt-20 overflow-hidden">
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
        <section className="relative py-6 md:py-32 px-4">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <Breadcrumbs items={breadcrumbItems} />
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-8">
                  <BarChart3 className="w-4 h-4 text-[#FF3366]" />
                  <span className="text-sm font-bold text-[#1A1A1A] tracking-wide uppercase">
                    {t("hero.badge")}
                  </span>
                </div>

                <h1
                  className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#1A1A1A] mb-6 leading-tight tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("hero.titleLine1")} <br />
                  <span className="relative inline-block z-10">
                    {t("hero.titleAccent")}
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-4 text-[#FF3366] -z-10"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>{t("hero.accentTitle")}</title>
                      <path
                        d="M0 10 Q 50 20 100 10"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="4"
                      />
                    </svg>
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-[#1A1A1A]/60 mb-4 max-w-xl leading-relaxed">
                  {t("hero.subtitle")}
                </p>

                <p className="text-sm md:text-base text-[#1A1A1A]/40 mb-10 max-w-xl font-medium">
                  {t("hero.subtitle2")}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl px-8 bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all h-12"
                  >
                    <Link
                      href="/contact"
                      data-cta-track="true"
                      data-cta-name={t("hero.heroCta")}
                      data-cta-location="tracking_hero"
                      data-cta-category="primary"
                    >
                      {t("hero.heroCta")}
                    </Link>
                  </Button>
                  <Link
                    href="#problem"
                    className="text-[#1A1A1A]/60 font-medium hover:text-[#FF3366] transition-colors text-base"
                  >
                    {t("hero.heroSecondary")}
                  </Link>
                </div>

                <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#1A1A1A]/40 hover:text-[#FF3366] p-0 h-auto font-normal hover:bg-transparent"
                    asChild
                  >
                    <Link href="#target-audience">
                      {t("hero.quickLinks.forWhom")}
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#1A1A1A]/40 hover:text-[#FF3366] p-0 h-auto font-normal hover:bg-transparent"
                    asChild
                  >
                    <Link href="#pricing">{t("hero.quickLinks.pricing")}</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#1A1A1A]/40 hover:text-[#FF3366] p-0 h-auto font-normal hover:bg-transparent"
                    asChild
                  >
                    <Link href="#faq">{t("hero.quickLinks.faq")}</Link>
                  </Button>
                </div>
              </div>

              {/* Hero Graphic: Data Stream Visualization */}
              <div className="relative hidden lg:block h-[400px]">
                <div className="absolute inset-0 bg-[#E0E7FF] rounded-3xl border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(#1A1A1A 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                      opacity: 0.1,
                    }}
                  />

                  <div className="absolute top-1/2 left-12 -translate-y-1/2 w-24 h-24 bg-white rounded-xl border-2 border-[#1A1A1A] flex flex-col items-center justify-center z-10 shadow-[4px_4px_0px_0px_#1A1A1A]">
                    <Globe className="w-8 h-8 text-[#1A1A1A]/60 mb-2" />
                    <span className="text-xs font-bold text-[#1A1A1A]">
                      {t("heroGraphic.browser")}
                    </span>
                  </div>

                  <div className="absolute top-1/2 right-12 -translate-y-1/2 w-24 h-24 bg-[#FF3366] rounded-xl border-2 border-[#1A1A1A] flex flex-col items-center justify-center z-10 shadow-[4px_4px_0px_0px_#1A1A1A]">
                    <Server className="w-8 h-8 text-white mb-2" />
                    <span className="text-xs font-bold text-white">
                      {t("heroGraphic.server")}
                    </span>
                  </div>

                  <div className="absolute top-1/2 left-36 right-36 h-0.5 bg-[#1A1A1A]/10 -translate-y-1/2">
                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF3366] rounded-full shadow-[0_0_10px_rgba(255,51,102,0.6)] animate-[moveParticle_2s_linear_infinite]" />
                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF3366] rounded-full shadow-[0_0_10px_rgba(255,51,102,0.6)] animate-[moveParticle_2s_linear_infinite_0.6s]" />
                    <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF3366] rounded-full shadow-[0_0_10px_rgba(255,51,102,0.6)] animate-[moveParticle_2s_linear_infinite_1.2s]" />
                  </div>

                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full bg-red-50 border border-red-200 flex items-center justify-center animate-pulse">
                      <Lock className="w-5 h-5 text-red-400" />
                    </div>
                  </div>

                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs text-[#1A1A1A] font-bold bg-[#FFD166] px-3 py-1 rounded-md border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
                    {t("heroGraphic.bypassLabel")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Analytics No Longer Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="relative p-8 md:p-10 rounded-3xl bg-[#FFD166] border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl border-2 border-[#1A1A1A] bg-white flex items-center justify-center shadow-[2px_2px_0px_0px_#1A1A1A]">
                  <TrendingDown className="w-7 h-7 text-[#1A1A1A]" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
                    {t("whySection.title")}
                  </h2>
                  <div className="space-y-2 text-[#1A1A1A]/60 leading-relaxed">
                    <p>{t("whySection.text")}</p>
                    <p className="text-[#FF3366] font-medium">
                      {t("whySection.solution")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem - Cards */}
        <section id="problem" className="py-16 md:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-8">
              <h2
                className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("problem.title")}
              </h2>
              <p className="text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
                {t("problem.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problemCardConfig.map((item, i) => (
                <div
                  key={t(`problem.cards.${i}.title`)}
                  className={`group p-6 rounded-2xl ${item.bg} border-2 border-[#1A1A1A] transition-all duration-300 shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[10px_10px_0px_0px_#1A1A1A]`}
                >
                  <div className="w-12 h-12 rounded-xl border-2 border-[#1A1A1A] bg-white shadow-[2px_2px_0px_0px_#1A1A1A] flex items-center justify-center mb-4 group-hover:-translate-y-[2px] group-hover:-translate-x-[2px] group-hover:shadow-[4px_4px_0px_0px_#1A1A1A] transition-all">
                    <item.icon className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                    {t(`problem.cards.${i}.title`)}
                  </h3>
                  <p className="text-sm text-[#1A1A1A]/60">
                    {t(`problem.cards.${i}.desc`)}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[#1A1A1A]/40 text-base max-w-2xl mx-auto text-center mt-10">
              {t("problem.note")}
            </p>
          </div>
        </section>

        {/* HaloTrack Solution */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("solution.title")}
              </h2>
              <p className="text-xl text-[#1A1A1A]/60 max-w-2xl mx-auto">
                {t("solution.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solutionCardConfig.map((item, i) => (
                <div
                  key={t(`solution.cards.${i}.title`)}
                  className="group p-6 rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all duration-300 shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]"
                >
                  <div className="w-12 h-12 rounded-xl border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] flex items-center justify-center mb-4 bg-white group-hover:-translate-y-[2px] group-hover:-translate-x-[2px] group-hover:shadow-[4px_4px_0px_0px_#1A1A1A] transition-all">
                    <item.icon className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">
                    {t(`solution.cards.${i}.title`)}
                  </h3>
                  <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">
                    {t(`solution.cards.${i}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Server-side Tracking Explanation */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="rounded-3xl border-2 border-[#1A1A1A] bg-[#B19CD9] shadow-[8px_8px_0px_0px_#1A1A1A] p-8 md:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] mb-4">
                    <Server className="w-4 h-4 text-[#1A1A1A]" />
                    <span className="text-sm font-bold text-[#1A1A1A]">
                      {t("serverSide.badge")}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
                    {t("serverSide.title")}
                  </h2>
                </div>
              </div>
              <div className="space-y-4 text-[#1A1A1A]/60 leading-relaxed">
                <p>{t("serverSide.p1")}</p>
                <p>{t("serverSide.p2")}</p>
                <p className="text-[#1A1A1A]/80 font-medium">
                  {t("serverSide.p3")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2
              className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-12"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("results.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {statBgColors.map((bg, i) => (
                <div
                  key={t(`results.stats.${i}.label`)}
                  className={`p-8 rounded-2xl ${bg} border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] transition-all hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[10px_10px_0px_0px_#1A1A1A]`}
                >
                  <p
                    className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {t(`results.stats.${i}.value`)}
                  </p>
                  <p className="text-[#1A1A1A] font-bold">
                    {t(`results.stats.${i}.label`)}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#1A1A1A]/40 max-w-xl mx-auto mt-10">
              {t("results.note")}
            </p>
          </div>
        </section>

        {/* Who needs this */}
        <section id="target-audience" className="py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("targetAudience.title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {targetAudienceConfig.map((item, i) => (
                <div
                  key={t(`targetAudience.items.${i}`)}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] flex items-center justify-center text-[#1A1A1A] flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-[#1A1A1A]/70">
                    {t(`targetAudience.items.${i}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("routes.sectionTitle")}
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-[#1A1A1A]/60">
                {t("routes.sectionSubtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A]">
                <div className="mb-6">
                  <div className="text-sm font-bold uppercase tracking-wide text-[#FF3366]">
                    {t("routes.nextBadge")}
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-[#1A1A1A]">
                    {t("routes.nextTitle")}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {routeCardConfig.map((card, i) => (
                    <Link
                      key={card.href}
                      href={card.href}
                      className="group rounded-2xl border-2 border-[#1A1A1A] bg-[#F5F5F7] p-5 shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#1A1A1A] bg-white shadow-[2px_2px_0px_0px_#1A1A1A]">
                        <card.icon className="h-5 w-5 text-[#1A1A1A]" />
                      </div>
                      <div className="text-lg font-bold text-[#1A1A1A]">
                        {t(`routeCards.${i}.title`)}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-[#1A1A1A]/65">
                        {t(`routeCards.${i}.text`)}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#FF3366]">
                        {t("routes.viewLink")}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border-2 border-[#1A1A1A] bg-[#FFD166] p-8 shadow-[8px_8px_0px_0px_#1A1A1A]">
                <div className="text-sm font-bold uppercase tracking-wide text-[#1A1A1A]">
                  {t("routes.caseBadge")}
                </div>
                <h3 className="mt-3 text-2xl font-bold text-[#1A1A1A]">
                  {t("routes.caseTitle")}
                </h3>
                <div className="mt-6 space-y-4">
                  {trackingProofCards.map((caseStudy) => (
                    <Link
                      key={caseStudy.href}
                      href={caseStudy.href}
                      className="group block rounded-2xl border-2 border-[#1A1A1A] bg-white p-5 shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-lg font-bold text-[#1A1A1A]">
                            {caseStudy.name}
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/65">
                            {caseStudy.description}
                          </p>
                        </div>
                        <div className="shrink-0 rounded-xl border-2 border-[#1A1A1A] bg-[#06D6A0] px-3 py-2 text-right shadow-[2px_2px_0px_0px_#1A1A1A]">
                          <div className="text-xs text-[#1A1A1A]/70">
                            {caseStudy.stats.label}
                          </div>
                          <div className="text-sm font-bold text-[#1A1A1A]">
                            {caseStudy.stats.value}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#FF3366]">
                        {t("routes.openCase")}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white border-2 border-[#1A1A1A] rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_#1A1A1A] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <BarChart3 className="w-64 h-64 text-[#1A1A1A]" />
              </div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                    {t("pricing.title")}
                  </h3>
                  <p className="text-[#1A1A1A]/60 mb-6">
                    {t("pricing.subtitle")}
                  </p>
                  <div className="text-4xl font-extrabold text-[#1A1A1A] mb-2">
                    {t("pricing.price")}
                  </div>
                  <p className="text-sm text-[#1A1A1A]/40 mb-6">
                    {t("pricing.priceNote")}
                  </p>
                  <p className="text-sm text-[#1A1A1A]/60 leading-relaxed">
                    {t("pricing.priceDesc")}
                  </p>
                </div>
                <div className="space-y-4">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={t(`pricing.features.${i}`)}
                      className="flex items-center gap-3 text-[#1A1A1A]/70"
                    >
                      <Check className="w-5 h-5 text-[#FF3366]" />
                      <span>{t(`pricing.features.${i}`)}</span>
                    </div>
                  ))}
                  <p className="text-xs text-[#1A1A1A]/40 pt-4 border-t border-[#1A1A1A]/5">
                    {t("pricing.packageNote")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("faq.title")}
              </h2>
            </div>

            <div className="space-y-4">
              {Array.from({ length: FAQ_COUNT }, (_, i) => (
                <details
                  key={tf(`items.${i}.question`)}
                  className="group rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all overflow-hidden shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none border-b-2 border-transparent group-open:border-[#1A1A1A]">
                    <span className="text-[#1A1A1A] font-bold pr-4">
                      {tf(`items.${i}.question`)}
                    </span>
                    <span className="text-[#1A1A1A] group-open:rotate-45 transition-transform text-xl font-extrabold">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-[#1A1A1A]/60 leading-relaxed">
                      {tf(`items.${i}.answer`)}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2
              className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("cta.title")}
            </h2>
            <p className="text-xl text-[#1A1A1A]/60 mb-10">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-xl px-10 h-14 text-lg bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
              >
                <Link
                  href="/contact"
                  data-cta-track="true"
                  data-cta-name={t("cta.ctaButton")}
                  data-cta-location="tracking_final_cta"
                  data-cta-category="primary"
                >
                  {t("cta.ctaButton")}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
