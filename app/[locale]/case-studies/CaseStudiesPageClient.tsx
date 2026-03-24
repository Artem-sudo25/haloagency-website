"use client";

import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { getCaseStudyCards } from "@/lib/case-study-cards";

export default function CaseStudiesPage() {
  const locale = useLocale() as "ru" | "cs";
  const t = useTranslations("caseStudiesPage");
  const tb = useTranslations("breadcrumbs");
  const caseStudyCards = getCaseStudyCards(locale);

  const breadcrumbItems = [{ label: tb("home"), href: "/" }, { label: tb("caseStudies") }];

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
        <section className="px-4 py-16 md:py-20">
          <div className="container mx-auto max-w-6xl text-center">
            <Breadcrumbs
              items={breadcrumbItems}
              className="flex justify-center"
            />
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl border-2 border-[#1A1A1A] bg-white px-4 py-2 shadow-[4px_4px_0px_0px_#1A1A1A]">
              <Filter className="h-4 w-4 text-[#FF3366]" />
              <span className="text-sm font-bold uppercase tracking-wide text-[#1A1A1A]">
                {t("eyebrow")}
              </span>
            </div>

            <h1
              className="mb-6 text-4xl font-extrabold leading-[0.95] text-[#1A1A1A] sm:text-5xl md:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("title")}
              <br />
              {t("titleLine2")}
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-[#1A1A1A]/60 md:text-xl">
              {t("subtitle")}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <Link
                href="/contact"
                data-cta-track="true"
                data-cta-name={t("cta")}
                data-cta-location="case_studies_hero"
                data-cta-category="primary"
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#1A1A1A] bg-[#FF3366] px-8 py-3 text-sm font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
              >
                {t("cta")}
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 auto-rows-[400px] md:grid-cols-3">
              {caseStudyCards.map((project) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className={`group relative overflow-hidden rounded-2xl border-2 border-[#1A1A1A] bg-white shadow-[6px_6px_0px_0px_#1A1A1A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A] ${
                    project.size === "large" ? "md:col-span-2" : "md:col-span-1"
                  }`}
                >
                  <Link
                    href={project.href}
                    className="absolute inset-0 z-20"
                    aria-label={`${t("openCase")} ${project.name}`}
                  />

                  <div className="absolute inset-0 z-0">
                    <Image
                      src={project.image}
                      alt={`${t("caseAlt")} ${project.name}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/30" />
                  </div>

                  <div className="absolute inset-0 z-10 flex flex-col justify-between p-8">
                    <div className="flex justify-between items-start">
                      <div className="rounded-md border-2 border-[#1A1A1A] bg-[#FFD166] px-3 py-1 text-xs font-bold text-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]">
                        {project.category}
                      </div>
                      <div className="translate-x-4 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#1A1A1A] bg-white shadow-[2px_2px_0px_0px_#1A1A1A]">
                          <span className="text-lg font-bold text-[#1A1A1A]">
                            ↗
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-2 text-3xl font-bold text-[#1A1A1A]">
                        {project.name}
                      </h3>
                      <p className="mb-6 line-clamp-2 text-[#1A1A1A]/60">
                        {project.description}
                      </p>

                      <div className="flex items-end justify-between border-t border-[#1A1A1A]/5 pt-6">
                        <div>
                          <p className="mb-1 text-xs uppercase tracking-wider text-[#1A1A1A]/40">
                            {project.stats.label}
                          </p>
                          <p className="text-2xl font-bold text-[#1A1A1A]">
                            {project.stats.value}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          {project.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border-2 border-[#1A1A1A] bg-[#06D6A0] px-2 py-1 text-xs font-bold text-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:py-24">
          <div className="container mx-auto max-w-4xl text-center">
            <h2
              className="mb-6 text-4xl font-extrabold text-[#1A1A1A] md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("finalTitle")}
            </h2>
            <p className="mb-10 text-xl text-[#1A1A1A]/60">
              {t("finalSubtitle")}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                data-cta-track="true"
                data-cta-name={t("finalCta")}
                data-cta-location="case_studies_final_cta"
                data-cta-category="primary"
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#1A1A1A] bg-[#FF3366] px-10 py-4 text-lg font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
              >
                {t("finalCta")}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
