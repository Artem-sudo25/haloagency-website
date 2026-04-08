"use client";

import { ArrowLeft, CheckCircle2, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

interface StatProps {
  label: string;
  value: string;
  subtext?: string;
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  tags: string[];
  mainStats: StatProps[];
  challenge: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    technologies: string[];
    features: string[];
  };
  results: {
    title: string;
    description: string;
    stats: StatProps[];
  };
  visualColorClass: string;
  heroImage: string;
  heroImageAlt?: string;
  analyticsImageAlt?: string;
  mobileImageAlt?: string;
  path: string;
  cta?: {
    title?: string;
    text?: string;
  };
  imageContext?: {
    title: string;
    description: string;
    items?: string[];
  };
  relatedRoutes?: Array<{
    title: string;
    text: string;
    href: string;
  }>;
}

export default function CaseStudyLayout({
  title,
  subtitle,
  tags,
  mainStats,
  challenge,
  solution,
  results,
  visualColorClass,
  heroImage,
  heroImageAlt,
  path,
  analyticsImage,
  analyticsImageAlt,
  mobileImage,
  mobileImageAlt,
  imageContext,
  relatedRoutes,
  cta,
}: CaseStudyLayoutProps & { analyticsImage?: string; mobileImage?: string }) {
  const t = useTranslations("caseStudyLayout");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const breadcrumbItems = [
    { label: t("breadcrumbHome"), href: "/" },
    { label: t("breadcrumbCaseStudies"), href: "/case-studies" },
    { label: title, href: path },
  ];

  // Map visualColorClass to a neo-brutalist accent color background
  const getAccentBg = (colorClass: string) => {
    if (colorClass.includes("blue")) return "bg-[#118AB2]";
    if (colorClass.includes("teal")) return "bg-[#06D6A0]";
    if (colorClass.includes("amber")) return "bg-[#FFD166]";
    return "bg-[#FF3366]";
  };
  const accentBg = getAccentBg(visualColorClass);

  return (
    <main className="min-h-screen bg-[#F5F5F7] pt-20 overflow-hidden">
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbItems),
          articleJsonLd({
            headline: title,
            description: subtitle,
            path,
            keywords: tags,
            imagePath: heroImage,
          }),
        ]}
      />
      {/* 1. Hero Section */}
      <section className="relative py-16 md:py-20 md:py-32 px-4 border-b-2 border-[#1A1A1A] overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[#1A1A1A] font-bold hover:text-[#FF3366] mb-8 transition-colors underline decoration-2 underline-offset-4"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("backToCaseStudies")}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-md border-2 border-[#1A1A1A] bg-white text-[#1A1A1A] font-bold shadow-[2px_2px_0px_0px_#1A1A1A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#1A1A1A] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {title}
              </h1>
              <p className="text-xl text-[#1A1A1A]/80 font-medium max-w-xl leading-relaxed mb-8">
                {subtitle}
              </p>

              <div className="grid grid-cols-2 gap-6 border-t-2 border-[#1A1A1A] pt-8">
                {mainStats.slice(0, 2).map((stat) => (
                  <div key={`${stat.label}-${stat.value}`}>
                    <div
                      className="text-4xl font-extrabold mb-1 text-[#1A1A1A]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#1A1A1A]/60 uppercase tracking-wider font-bold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Column */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] bg-white aspect-[4/3] group">
                <Image
                  src={heroImage}
                  alt={heroImageAlt ?? t("screenshotAlt", { title })}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative Elements */}
              <div
                className={`absolute -bottom-6 -right-6 w-24 h-24 ${accentBg} rounded-2xl border-2 border-[#1A1A1A] -z-10 shadow-[4px_4px_0px_0px_#1A1A1A]`}
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#B19CD9] rounded-full border-2 border-[#1A1A1A] -z-10 shadow-[4px_4px_0px_0px_#1A1A1A]" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Challenge Section */}
      <section className="py-16 md:py-24 px-4 bg-white border-b-2 border-[#1A1A1A]">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FF3366] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                {t("problemBadge")}
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {challenge.title}
            </h2>
            <p className="text-lg text-[#1A1A1A]/80 font-medium leading-relaxed mb-8">
              {challenge.description}
            </p>
          </div>
          <div className="bg-[#FFD166] border-2 border-[#1A1A1A] rounded-3xl p-8 shadow-[8px_8px_0px_0px_#1A1A1A]">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
              {t("keyChallenges")}
            </h3>
            <ul className="space-y-4">
              {challenge.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 items-start text-[#1A1A1A] font-medium"
                >
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1A1A1A] flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Solution Section */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden bg-[#F5F5F7]">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${accentBg} border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6`}
            >
              <span
                className={`text-sm font-bold ${accentBg === "bg-[#118AB2]" ? "text-white" : "text-[#1A1A1A]"} uppercase tracking-wider`}
              >
                {t("solutionBadge")}
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6 max-w-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {solution.title}
            </h2>
            <p className="text-lg text-[#1A1A1A]/80 font-medium leading-relaxed max-w-3xl">
              {solution.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Tech Stack */}
            <div className="bg-white border-2 border-[#1A1A1A] rounded-3xl p-8 shadow-[6px_6px_0px_0px_#1A1A1A]">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-2">
                {t("technologies")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {solution.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-4 py-2 rounded-md border-2 border-[#1A1A1A] bg-[#F5F5F7] text-[#1A1A1A] font-bold shadow-[2px_2px_0px_0px_#1A1A1A]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features / Steps */}
            <div className="bg-white border-2 border-[#1A1A1A] rounded-3xl p-8 shadow-[6px_6px_0px_0px_#1A1A1A]">
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
                {t("whatWeDid")}
              </h3>
              <ul className="space-y-4">
                {solution.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 items-start text-[#1A1A1A] font-medium"
                  >
                    <CheckCircle2 className={`w-6 h-6 mt-0.5 text-[#06D6A0]`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Analytics/Ads Images or Placeholder */}
          {(mobileImage || analyticsImage) && (
            <div className="relative w-full rounded-3xl overflow-hidden bg-white border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] group">
              {mobileImage ? (
                <div className="p-8 md:p-12">
                  <div
                    className={`flex flex-col lg:flex-row gap-12 items-center justify-center relative z-10 ${imageContext ? "lg:justify-between" : ""}`}
                  >
                    <button
                      type="button"
                      onClick={() => setIsLightboxOpen(true)}
                      aria-label={t("openFullSize")}
                      className="relative flex-shrink-0 cursor-zoom-in group/image max-w-[280px] md:max-w-xs lg:max-w-md w-full text-left"
                    >
                      <div className="relative rounded-2xl overflow-hidden border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] bg-white transition-transform duration-500 group-hover/image:-translate-y-1 group-hover/image:-translate-x-1 group-hover/image:shadow-[6px_6px_0px_0px_#1A1A1A]">
                        <Image
                          src={mobileImage}
                          alt={
                            mobileImageAlt ?? t("mobileScreenAlt", { title })
                          }
                          width={720}
                          height={1440}
                          sizes="(min-width: 1024px) 24rem, (min-width: 768px) 20rem, 100vw"
                          className="h-auto w-full rounded-xl border-2 border-[#1A1A1A] block"
                        />
                        <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover/image:bg-[#1A1A1A]/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover/image:opacity-100">
                          <div className="bg-white border-2 border-[#1A1A1A] p-3 rounded-xl text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] transform translate-y-4 group-hover/image:translate-y-0 transition-transform duration-300">
                            <Maximize2 className="w-6 h-6" />
                          </div>
                        </div>
                      </div>
                    </button>

                    {imageContext && (
                      <div className="bg-[#B19CD9] border-2 border-[#1A1A1A] p-8 rounded-3xl max-w-lg relative overflow-hidden shadow-[6px_6px_0px_0px_#1A1A1A]">
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                          {imageContext.title}
                        </h3>
                        <p className="text-[#1A1A1A] font-medium leading-relaxed mb-6">
                          {imageContext.description}
                        </p>
                        {imageContext.items && (
                          <ul className="space-y-3">
                            {imageContext.items.map((item) => (
                              <li
                                key={item}
                                className="flex gap-3 items-start text-sm text-[#1A1A1A] font-bold"
                              >
                                <div
                                  className={`mt-1.5 w-2 h-2 rounded-full bg-[#1A1A1A] flex-shrink-0`}
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Lightbox Modal */}
                  {isLightboxOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                      <button
                        type="button"
                        onClick={() => setIsLightboxOpen(false)}
                        className="absolute inset-0 bg-[#1A1A1A]/90 backdrop-blur-sm"
                        aria-label={t("closeFullscreen")}
                      />

                      <div className="relative z-10 max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl border-2 border-white shadow-2xl">
                        <button
                          type="button"
                          onClick={() => setIsLightboxOpen(false)}
                          className="absolute top-4 right-4 z-20 rounded-xl border-2 border-[#1A1A1A] bg-white p-2 text-[#1A1A1A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#1A1A1A]"
                        >
                          <X className="w-5 h-5" />
                        </button>
                        <Image
                          src={mobileImage}
                          alt={
                            mobileImageAlt ?? t("mobileScreenAlt", { title })
                          }
                          width={1080}
                          height={2160}
                          sizes="90vw"
                          className="max-h-[90vh] w-auto rounded-xl bg-white object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ) : analyticsImage ? (
                <div className="p-4 md:p-8 lg:p-12 relative">
                  {/* Browser Window Container */}
                  <div className="relative rounded-2xl overflow-hidden border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] bg-white">
                    {/* Browser Header/Chrome */}
                    <div className="h-10 bg-[#F5F5F7] border-b-2 border-[#1A1A1A] flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full border-2 border-[#1A1A1A] bg-red-400" />
                      <div className="w-3 h-3 rounded-full border-2 border-[#1A1A1A] bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full border-2 border-[#1A1A1A] bg-green-400" />
                    </div>

                    {/* Image */}
                    <div className="relative bg-white border-t-0 p-4">
                      <Image
                        src={analyticsImage}
                        alt={
                          analyticsImageAlt ??
                          t("analyticsScreenAlt", { title })
                        }
                        width={1440}
                        height={900}
                        sizes="(min-width: 1024px) 72rem, 100vw"
                        className="h-auto w-full rounded-xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] block"
                      />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </section>

      {/* 4. Results Section */}
      <section className="py-16 md:py-24 px-4 bg-white border-y-2 border-[#1A1A1A]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#06D6A0] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
                <span className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">
                  {t("resultBadge")}
                </span>
              </div>
              <h2
                className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {results.title}
              </h2>
              <p className="text-lg text-[#1A1A1A]/80 font-medium leading-relaxed mb-8">
                {results.description}
              </p>
            </div>

            {/* Result Cards */}
            <div className="grid grid-cols-1 gap-4">
              {results.stats.map((stat) => (
                <div
                  key={`${stat.label}-${stat.value}`}
                  className={`bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] p-6 rounded-2xl flex items-center ${stat.label ? "justify-between" : "justify-start"}`}
                >
                  {stat.label && (
                    <span className="text-[#1A1A1A]/80 font-bold">
                      {stat.label}
                    </span>
                  )}
                  <span
                    className={`${stat.label ? "text-4xl text-right" : "text-xl text-left"} font-extrabold text-[#1A1A1A]`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      {relatedRoutes && relatedRoutes.length > 0 && (
        <section className="py-16 md:py-24 px-4 bg-[#F5F5F7] border-b-2 border-[#1A1A1A]">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("similarTaskTitle")}
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-[#1A1A1A]/70 leading-relaxed">
                {t("similarTaskDescription")}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedRoutes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="group flex h-full flex-col rounded-3xl border-2 border-[#1A1A1A] bg-white p-8 shadow-[8px_8px_0px_0px_#1A1A1A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A]"
                >
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                    {route.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1A1A1A]/60 mb-6">
                    {route.text}
                  </p>
                  <span className="mt-auto text-sm font-bold text-[#FF3366]">
                    {t("relatedRouteCta")}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {cta?.title || t("finalCtaTitle")}
          </h2>
          <p className="text-xl text-[#1A1A1A]/80 font-medium mb-10 max-w-2xl mx-auto">
            {cta?.text || t("finalCtaText")}
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
                data-cta-name={t("primaryCtaLabel")}
                data-cta-location="case_study_detail_final_cta"
                data-cta-category="primary"
              >
                {t("primaryCtaLabel")}
              </Link>
            </Button>
            <Button
              asChild
              className="rounded-xl px-10 h-14 text-lg bg-white hover:bg-white text-[#1A1A1A] font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
            >
              <Link
                href="/packages"
                data-cta-track="true"
                data-cta-name={t("secondaryCtaLabel")}
                data-cta-location="case_study_detail_final_cta"
                data-cta-category="secondary"
              >
                {t("secondaryCtaLabel")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
