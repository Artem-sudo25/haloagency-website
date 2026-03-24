"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function HomeFinalCta() {
  const t = useTranslations("homeFinalCta");

  return (
    <section className="px-5 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[8px_8px_0px_0px_#1A1A1A] md:p-10">
          <div className="flex flex-col gap-4 md:gap-5">
            <div className="inline-flex w-fit rounded-full border-2 border-[#1A1A1A] bg-[#FFD166] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
              {t("eyebrow")}
            </div>
            <h2
              className="text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("title")}
            </h2>
            <p className="max-w-2xl text-base font-medium leading-relaxed text-[#1A1A1A]/70 md:text-lg">
              {t("subtitle")}
            </p>
            <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                data-cta-track="true"
                data-cta-name={t("cta")}
                data-cta-location="home_final_cta"
                data-cta-category="primary"
                className="rounded-2xl border-2 border-[#1A1A1A] bg-[#FF3366] px-6 py-3 text-sm font-bold text-white shadow-[4px_4px_0px_0px_#1A1A1A] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#1A1A1A] md:px-8 md:py-4 md:text-base"
              >
                {t("cta")}
              </Link>
              <Link
                href="/packages"
                data-cta-track="true"
                data-cta-name={t("secondaryCta")}
                data-cta-location="home_final_cta"
                data-cta-category="secondary"
                className="text-base font-bold text-[#1A1A1A] transition-colors hover:text-[#FF3366]"
              >
                {t("secondaryCta")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
