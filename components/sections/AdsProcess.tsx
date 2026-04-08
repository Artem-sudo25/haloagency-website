import { Zap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { CSSScrollAnimation } from "@/components/ui/css-scroll-animation";

export default async function AdsProcess() {
  const t = await getTranslations({ namespace: "adsProcess" });

  return (
    <section className="py-16 md:py-24 bg-white border-y-2 border-[#1A1A1A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[400px] bg-[#FFD166]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[300px] bg-[#FF3366]/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-3xl px-4 relative z-10">
        <CSSScrollAnimation className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFD166] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
            <Zap className="w-5 h-5 text-[#1A1A1A]" />
            <span className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">
              {t("eyebrow")}
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("title")}
          </h2>
          <p className="text-[#1A1A1A]/80 font-medium text-lg md:text-xl max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </CSSScrollAnimation>

        <div className="relative">
          <div className="absolute left-6 top-8 bottom-8 w-1 bg-[#1A1A1A] hidden md:block" />

          <div className="space-y-4">
            {[0, 1, 2, 3, 4].map((i, index) => (
              <div key={i} className="group relative">
                <div className="relative flex gap-5 rounded-3xl border-2 border-[#1A1A1A] bg-white p-5 shadow-[6px_6px_0px_0px_#1A1A1A] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#1A1A1A] md:p-6">
                  <div className="relative flex-shrink-0">
                    <div
                      className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#1A1A1A] bg-[#06D6A0] text-xl font-extrabold text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] transition-transform duration-300 group-hover:scale-110"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {i + 1}
                    </div>
                    {index < 4 && (
                      <div className="absolute left-1/2 top-full z-20 mt-4 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#1A1A1A] bg-white shadow-[2px_2px_0px_0px_#1A1A1A] md:block" />
                    )}
                  </div>

                  <div className="relative z-10 min-w-0 flex-1">
                    <h3
                      className="mb-3 text-2xl font-bold text-[#1A1A1A]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {t(`steps.${i}.title`)}
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-[#1A1A1A]/80 md:text-lg">
                      {t(`steps.${i}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CSSScrollAnimation
          delay={0.3}
          className="text-center font-bold text-lg text-[#1A1A1A]/80 mt-12 bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] p-4 rounded-2xl mx-auto max-w-2xl"
        >
          {t("trustLine")}
        </CSSScrollAnimation>
      </div>
    </section>
  );
}
