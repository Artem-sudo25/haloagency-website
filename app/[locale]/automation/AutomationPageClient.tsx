"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  CheckCircle2,
  Cpu,
  Database,
  Mail,
  MessageSquare,
  Sparkles,
  Target,
  Workflow,
  XCircle,
  Zap,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";
import { useEffect } from "react";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { Button } from "@/components/ui/button";

// Custom Python Icon
function CodePython(props: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>Python</title>
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
      <path d="M10 8h4v8" />
    </svg>
  );
}

// Static config arrays (non-translatable data)
const techStackConfig = [
  { name: "Make / n8n", icon: Workflow, bg: "bg-[#FFD166]" },
  { name: "OpenAI API", icon: Bot, bg: "bg-[#06D6A0]" },
  { name: "Python", icon: CodePython, bg: "bg-[#B19CD9]" },
  { name: "Airtable", icon: Database, bg: "bg-[#A2D2FF]" },
];

const servicesConfig = [
  {
    id: "chatbots",
    icon: <Bot className="w-6 h-6 text-[#1A1A1A]" />,
    bg: "bg-[#A2D2FF]",
    iconBg: "bg-white",
    includedCount: 5,
  },
  {
    id: "crm",
    icon: <Database className="w-6 h-6 text-white" />,
    bg: "bg-[#FF3366]",
    iconBg: "bg-[#1A1A1A]",
    textColor: "text-white",
    includedCount: 5,
  },
  {
    id: "parsing",
    icon: <Zap className="w-6 h-6 text-[#1A1A1A]" />,
    bg: "bg-[#FFD166]",
    iconBg: "bg-white",
    includedCount: 5,
  },
];

const routeCardsConfig = [
  { href: "/tracking" as const, icon: Target },
  { href: "/web/business-websites" as const, icon: Workflow },
  { href: "/contact" as const, icon: Mail },
];

const heroNodesConfig = [
  { icon: MessageSquare },
  { icon: Database },
  { icon: Bot },
  { icon: Mail },
];

export default function AutomationPage() {
  const t = useTranslations("automationPage");
  const tb = useTranslations("breadcrumbs");
  const tf = useTranslations("automationFaq");

  const breadcrumbItems = [
    { label: tb("home"), href: "/" },
    { label: tb("automation") },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

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
        {/* 1. Hero Section */}
        <section className="relative py-6 md:py-32 px-4">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <Breadcrumbs items={breadcrumbItems} />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-8"
                >
                  <Cpu className="w-4 h-4 text-[#FF3366]" />
                  <span className="text-sm font-bold text-[#1A1A1A] tracking-wide uppercase">
                    {t("hero.badge")}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#1A1A1A] mb-6 leading-tight tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("hero.titleLine1")} <br />
                  <span className="relative inline-block z-10">
                    {t("hero.titleLine2")}
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-4 text-[#FF3366] -z-10"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>{t("hero.titleAccent")}</title>
                      <path
                        d="M0 10 Q 50 20 100 10"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="4"
                      />
                    </svg>
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg md:text-xl text-[#1A1A1A]/60 mb-10 max-w-xl leading-relaxed"
                >
                  {t("hero.subtitle")}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                >
                  <Button
                    asChild
                    size="lg"
                    className="rounded-xl px-8 bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all h-12"
                  >
                    <Link
                      href="/contact"
                      data-cta-track="true"
                      data-cta-name={t("hero.heroCta")}
                      data-cta-location="automation_hero"
                      data-cta-category="primary"
                    >
                      {t("hero.heroCta")}
                    </Link>
                  </Button>
                  <Link
                    href="#services"
                    className="text-[#1A1A1A]/60 font-medium hover:text-[#FF3366] transition-colors text-base"
                  >
                    {t("hero.heroSecondary")}
                  </Link>
                </motion.div>
              </div>

              {/* Hero Graphic: Automation Workflow UI */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative bg-white border-2 border-[#1A1A1A] rounded-3xl shadow-[8px_8px_0px_0px_#1A1A1A] p-6 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1A1A1A]/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FF3366]/10 flex items-center justify-center">
                        <Workflow className="w-5 h-5 text-[#FF3366]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#1A1A1A]">
                          {t("heroGraphic.workflowTitle")}
                        </div>
                        <div className="text-xs text-[#1A1A1A]/40">
                          {t("heroGraphic.workflowStatus")}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-green-600 font-medium">
                        {t("heroGraphic.activeLabel")}
                      </span>
                    </div>
                  </div>

                  {/* Workflow Nodes */}
                  <div className="relative space-y-4">
                    <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-[#1A1A1A]/10" />

                    {heroNodesConfig.map((node, i) => (
                      <motion.div
                        key={t(`heroGraphic.nodes.${i}.title`)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.2 }}
                        className="relative z-10 flex items-center gap-4 p-3 rounded-xl bg-[#F5F5F7] border-2 border-[#1A1A1A] hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-[4px_4px_0px_0px_#1A1A1A] transition-all"
                      >
                        <div className="w-14 h-14 rounded-full bg-[#FF3366]/10 flex items-center justify-center shrink-0">
                          <node.icon className="w-6 h-6 text-[#FF3366]" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-[#1A1A1A]">
                              {t(`heroGraphic.nodes.${i}.title`)}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1A1A1A]/5 text-[#1A1A1A]/40 font-mono">
                              {100 + i * 50}ms
                            </span>
                          </div>
                          <span className="text-xs text-[#1A1A1A]/40 block">
                            {t(`heroGraphic.nodes.${i}.sub`)}
                          </span>
                        </div>
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                          className="w-2 h-2 rounded-full bg-green-500/50"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Automation Stats */}
                  <div className="mt-6 pt-4 border-t border-[#1A1A1A]/5 grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-xl bg-[#F5F5F7]">
                      <div className="text-xs text-[#1A1A1A]/40 mb-1">
                        {t("heroGraphic.timeSaving")}
                      </div>
                      <div className="text-lg font-bold text-[#1A1A1A]">
                        42h{" "}
                        <span className="text-xs font-normal text-[#1A1A1A]/40">
                          {t("heroGraphic.timeSavingUnit")}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F5F5F7]">
                      <div className="text-xs text-[#1A1A1A]/40 mb-1">
                        {t("heroGraphic.moneySaving")}
                      </div>
                      <div className="text-lg font-bold text-[#1A1A1A]">
                        $2,400{" "}
                        <span className="text-xs font-normal text-[#1A1A1A]/40">
                          {t("heroGraphic.moneySavingUnit")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 1.5 Intro */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("intro.title")}
                <br />
                {t("intro.titleLine2")}
              </h2>
              <p className="text-[#1A1A1A]/60 text-lg max-w-3xl mx-auto">
                {t("intro.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="rounded-2xl bg-white border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] p-6 hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[10px_10px_0px_0px_#1A1A1A] transition-all">
                <div className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A] mb-4 bg-red-100 border-2 border-[#1A1A1A] px-3 py-2 rounded-xl w-fit shadow-[2px_2px_0px_0px_#1A1A1A]">
                  <XCircle className="w-4 h-4 text-red-600" />
                  {t("introCards.whatHappens.badge")}
                </div>
                <ul className="space-y-3 text-sm text-[#1A1A1A]/70 font-medium tracking-tight">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full border border-[#1A1A1A] bg-red-400 shrink-0" />
                      <span>{t(`introCards.whatHappens.${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-[#06D6A0] border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] p-6 hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[10px_10px_0px_0px_#1A1A1A] transition-all">
                <div className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A] mb-4 bg-white border-2 border-[#1A1A1A] px-3 py-2 rounded-xl w-fit shadow-[2px_2px_0px_0px_#1A1A1A]">
                  <CheckCircle2 className="w-4 h-4 text-[#06D6A0]" />
                  {t("introCards.whatAutomationDoes.badge")}
                </div>
                <ul className="space-y-3 text-sm text-[#1A1A1A]/80 font-bold tracking-tight">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full border border-[#1A1A1A] bg-white shrink-0" />
                      <span>{t(`introCards.whatAutomationDoes.${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-[#FFD166] border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] p-6 hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[10px_10px_0px_0px_#1A1A1A] transition-all">
                <div className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A] mb-4 bg-white border-2 border-[#1A1A1A] px-3 py-2 rounded-xl w-fit shadow-[2px_2px_0px_0px_#1A1A1A]">
                  <Target className="w-4 h-4 text-amber-500" />
                  {t("introCards.businessBenefit.badge")}
                </div>
                <ul className="space-y-3 text-sm text-[#1A1A1A]/80 font-bold tracking-tight">
                  {[0, 1, 2].map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full border border-[#1A1A1A] bg-white shrink-0" />
                      <span>{t(`introCards.businessBenefit.${i}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-8 border-2 border-[#1A1A1A] bg-white text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white h-12 font-bold shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                asChild
              >
                <Link href="#services">{t("introCtaLabel")}</Link>
              </Button>
              <p className="text-xs text-[#1A1A1A]/40 text-center max-w-2xl">
                {t("introNote")}
              </p>
            </div>
          </div>
        </section>

        {/* 2. Tech Stack */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("techSection.title")}
              </h2>
              <p className="text-[#1A1A1A]/60 text-lg max-w-3xl mx-auto">
                {t("techSection.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {techStackConfig.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`group relative p-6 rounded-2xl ${tech.bg} border-2 border-[#1A1A1A] transition-all duration-300 overflow-hidden shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[10px_10px_0px_0px_#1A1A1A]`}
                >
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full border-2 border-[#1A1A1A] bg-white flex items-center justify-center mb-4 text-[#1A1A1A] group-hover:scale-110 transition-transform duration-300">
                      <tech.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-[#1A1A1A]/60 font-medium">
                      {t(`techStack.${i}.label`)}
                    </p>
                    <p className="text-xs text-[#1A1A1A]/40 mt-2 leading-relaxed">
                      {t(`techStack.${i}.helper`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Services */}
        <section id="services" className="py-16 md:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("services.title")}
              </h2>
              <p className="text-[#1A1A1A]/60 text-lg max-w-2xl mx-auto">
                {t("services.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {servicesConfig.map((service, si) => (
                <div
                  key={service.id}
                  className={`group p-8 rounded-3xl ${service.bg} border-2 border-[#1A1A1A] transition-all duration-300 flex flex-col shadow-[8px_8px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[12px_12px_0px_0px_#1A1A1A]`}
                >
                  <div
                    className={`mb-6 inline-flex p-3 rounded-full border-2 border-[#1A1A1A] ${service.iconBg} group-hover:scale-110 transition-transform duration-300 w-fit`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`text-2xl font-bold ${service.textColor || "text-[#1A1A1A]"} mb-3`}
                  >
                    {t(`services.${si}.title`)}
                  </h3>
                  <p
                    className={`${service.textColor ? "text-white/80" : "text-[#1A1A1A]/70"} mb-4 flex-grow`}
                  >
                    {t(`services.${si}.description`)}
                  </p>

                  <div className="mb-6">
                    <div
                      className={`text-sm font-bold ${service.textColor || "text-[#1A1A1A]"} mb-3`}
                    >
                      {t("services.includedLabel")}
                    </div>
                    <ul
                      className={`space-y-2 text-sm ${service.textColor ? "text-white/80" : "text-[#1A1A1A]/70"}`}
                    >
                      {Array.from({ length: service.includedCount }).map((_, li) => (
                        <li key={li} className="flex gap-2">
                          <Check
                            className={`w-4 h-4 ${service.textColor ? "text-white" : "text-[#FF3366]"} mt-0.5 shrink-0`}
                          />
                          <span className="leading-relaxed">
                            {t(`services.${si}.included.${li}`)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`pt-6 border-t ${service.textColor ? "border-white/20" : "border-[#1A1A1A]/20"} mt-auto`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-lg font-bold ${service.textColor || "text-[#1A1A1A]"}`}
                      >
                        {t(`services.${si}.price`)}
                      </span>
                      <span
                        className={`text-sm ${service.textColor ? "text-white/60" : "text-[#1A1A1A]/60"}`}
                      >
                        {t(`services.${si}.time`)}
                      </span>
                    </div>
                    <Button
                      asChild
                      className="w-full justify-between rounded-xl border-2 border-[#1A1A1A] bg-white text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all px-4 font-bold shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[0px_0px_0px_0px_#1A1A1A]"
                    >
                      <Link href="/contact">
                        {t("services.orderButton")} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
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

            <div className="mx-auto max-w-4xl">
              <div className="rounded-3xl border-2 border-[#1A1A1A] bg-[#A2D2FF] p-8 shadow-[8px_8px_0px_0px_#1A1A1A]">
                <div className="text-sm font-bold uppercase tracking-wide text-[#1A1A1A]">
                  {t("routes.nextBadge")}
                </div>
                <h3 className="mt-3 text-2xl font-bold text-[#1A1A1A]">
                  {t("routes.nextTitle")}
                </h3>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {routeCardsConfig.map((card, i) => (
                    <Link
                      key={card.href}
                      href={card.href}
                      className="group block rounded-2xl border-2 border-[#1A1A1A] bg-white p-5 shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-[#1A1A1A] bg-[#F5F5F7] shadow-[2px_2px_0px_0px_#1A1A1A]">
                          <card.icon className="h-5 w-5 text-[#1A1A1A]" />
                        </div>
                        <div>
                          <div className="text-lg font-bold text-[#1A1A1A]">
                            {t(`routes.routeCards.${i}.title`)}
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/65">
                            {t(`routes.routeCards.${i}.text`)}
                          </p>
                          <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#FF3366]">
                            {t("routes.viewLink")}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Lead Magnet: Plan */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("leadMagnet.title")}
              </h2>
              <p className="text-[#1A1A1A]/60 text-lg max-w-3xl mx-auto">
                {t("leadMagnet.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Examples */}
              <div className="rounded-3xl bg-white border-2 border-[#1A1A1A] p-8 shadow-[8px_8px_0px_0px_#1A1A1A]">
                <div className="text-sm font-bold text-[#1A1A1A] mb-5">
                  {t("leadMagnet.examplesTitle")}
                </div>
                <div className="flex flex-wrap gap-3">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="group rounded-full border border-[#1A1A1A]/5 bg-[#F5F5F7] px-4 py-2 hover:border-[#FF3366]/30 hover:bg-[#FF3366]/5 transition-colors"
                      title={t(`leadMagnet.commonAutomations.${i}.note`)}
                    >
                      <span className="text-sm text-[#1A1A1A]/70">
                        {t(`leadMagnet.commonAutomations.${i}.text`)}
                      </span>
                      <span className="ml-2 text-xs text-[#1A1A1A]/40 group-hover:text-[#FF3366] transition-colors">
                        • {t(`leadMagnet.commonAutomations.${i}.note`)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-sm text-[#1A1A1A]/40 leading-relaxed">
                  {t("leadMagnet.examplesNote")}
                </div>
              </div>

              {/* Contact Route Card */}
              <div className="rounded-3xl bg-[#B19CD9] border-2 border-[#1A1A1A] p-8 shadow-[8px_8px_0px_0px_#1A1A1A]">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#FF3366]/10 flex items-center justify-center text-[#FF3366]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#1A1A1A]">
                      {t("leadMagnet.contactTitle")}
                    </div>
                    <div className="text-sm text-[#1A1A1A]/40">
                      {t("leadMagnet.contactSubtitle")}
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <p className="text-sm leading-relaxed text-[#1A1A1A]/75">
                    {t("leadMagnet.contactDesc")}
                  </p>

                  <div className="rounded-2xl border-2 border-[#1A1A1A] bg-white p-5 shadow-[4px_4px_0px_0px_#1A1A1A]">
                    <div className="text-sm font-bold text-[#1A1A1A]">
                      {t("leadMagnet.contactItemsTitle")}
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-[#1A1A1A]/70">
                      {[0, 1, 2].map((i) => (
                        <li key={i} className="flex gap-3">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FF3366]" />
                          <span>{t(`leadMagnet.contactItems.${i}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/tracking"
                    className="block rounded-2xl border-2 border-[#1A1A1A] bg-white px-4 py-4 text-center text-sm font-bold text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                  >
                    {t("leadMagnet.checkTrackingFirst")}
                  </Link>

                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-xl h-12 bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                  >
                    <Link href="/contact">
                      {t("leadMagnet.goToDiscussion")}{" "}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>

                  <div className="text-xs text-[#1A1A1A]/40 text-center">
                    {t("leadMagnet.contactNote")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. FAQ */}
        <section className="py-16 md:py-20 px-4">
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
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <details
                  key={i}
                  className="group rounded-2xl bg-white border-2 border-[#1A1A1A] transition-all overflow-hidden shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none border-b-2 border-transparent group-open:border-[#1A1A1A]">
                    <span className="text-[#1A1A1A] font-bold pr-4">
                      {tf(`${i}.question`)}
                    </span>
                    <span className="text-[#1A1A1A] group-open:rotate-45 transition-transform text-xl font-extrabold">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-[#1A1A1A]/60 leading-relaxed">
                      {tf(`${i}.answer`)}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA */}
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
                  data-cta-location="automation_final_cta"
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
