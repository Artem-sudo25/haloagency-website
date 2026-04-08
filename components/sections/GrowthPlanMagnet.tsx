import { getTranslations } from "next-intl/server";
import ScopedNextIntlProvider from "@/components/i18n/ScopedNextIntlProvider";
import { Link } from "@/i18n/routing";
import GrowthPlanMagnetFormLazy from "./GrowthPlanMagnetFormLazy";

export default async function GrowthPlanMagnet() {
  const t = await getTranslations({ namespace: "growthPlanMagnet" });

  return (
    <section
      id="growth-plan"
      className="relative overflow-hidden px-5 py-12 md:px-6 md:py-24"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 md:gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[8px_8px_0px_0px_#1A1A1A] md:p-10">
          <div className="mb-6 inline-flex rounded-full border-2 border-[#1A1A1A] bg-[#FFD166] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]">
            {t("eyebrow")}
          </div>
          <h2
            className="mb-4 text-3xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-4xl md:mb-5 md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("title")}
            <br />
            {t("titleLine2")}
          </h2>
          <p className="mb-6 text-base font-medium leading-relaxed text-[#1A1A1A]/70 md:mb-8 md:text-lg">
            {t("subtitle")}
          </p>

          <div className="mb-6 space-y-3 md:mb-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-[13px] font-bold text-[#1A1A1A]/75 md:text-sm"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-[#FF3366]" />
                <span>{t(`useCases.${i}`)}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border-2 border-[#1A1A1A] bg-[#F5F5F7] px-4 py-4 shadow-[4px_4px_0px_0px_#1A1A1A] md:px-5 md:py-5">
            <div className="text-base font-bold text-[#1A1A1A]">
              {t("taskClearBox.title")}
            </div>
            <div className="mt-2 text-sm leading-relaxed text-[#1A1A1A]/60">
              {t("taskClearBox.description")}
            </div>
            <Link
              href="/contact"
              className="mt-4 inline-flex text-sm font-bold text-[#FF3366] transition-colors hover:text-[#1A1A1A]"
            >
              {t("taskClearBox.cta")}
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border-2 border-[#1A1A1A] bg-[#B19CD9] p-6 shadow-[8px_8px_0px_0px_#1A1A1A] md:p-12">
          <div className="mb-8 text-center md:mb-10">
            <h3
              className="mb-3 inline-block text-2xl font-extrabold text-[#1A1A1A] md:mb-4 md:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("form.title")}
            </h3>
            <p className="text-sm font-bold text-[#1A1A1A] md:text-base">
              {t("form.subtitle")}
            </p>
          </div>

          <ScopedNextIntlProvider
            namespaces={["common", "growthPlanMagnet", "validation.growthPlan"]}
          >
            <GrowthPlanMagnetFormLazy />
          </ScopedNextIntlProvider>
        </div>
      </div>
    </section>
  );
}
