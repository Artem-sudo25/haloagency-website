"use client";

import { HelpCircle, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { CSSScrollAnimation, CSSStagger, CSSStaggerItem } from "@/components/ui/css-scroll-animation";

export default function AdsFAQ() {
  const t = useTranslations("adsFaq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqAnswers: Record<number, React.ReactNode> = {
    0: (
      <>
        <p className="mb-3">{t("items.0.answer.intro")}</p>
        <ul className="space-y-2 mb-3">
          <li className="flex gap-2">
            <span className="text-[#FF3366] font-extrabold">•</span>
            <span><strong className="text-[#1A1A1A] font-extrabold">Google Ads</strong> {t("items.0.answer.googleAds")}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#FF3366] font-extrabold">•</span>
            <span><strong className="text-[#1A1A1A] font-extrabold">Meta Ads</strong> {t("items.0.answer.metaAds")}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#FF3366] font-extrabold">•</span>
            <span><strong className="text-[#1A1A1A] font-extrabold">Seznam</strong> {t("items.0.answer.seznam")}</span>
          </li>
        </ul>
        <p>{t("items.0.answer.outro")}</p>
      </>
    ),
    1: (
      <>
        <p className="mb-3">{t("items.1.answer.p1")}</p>
        <p className="mb-3">{t("items.1.answer.p2")}</p>
        <p>{t("items.1.answer.p3")}</p>
      </>
    ),
    2: (
      <>
        <p className="mb-3">{t("items.2.answer.p1")}</p>
        <p className="mb-3">{t("items.2.answer.p2")}</p>
        <p>{t("items.2.answer.p3")}</p>
      </>
    ),
    3: (
      <>
        <p className="mb-3">{t("items.3.answer.intro")}</p>
        <ul className="space-y-2 mb-3">
          <li className="flex gap-2">
            <span className="text-[#FF3366] font-extrabold">•</span>
            <span>{t("items.3.answer.point1")}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#FF3366] font-extrabold">•</span>
            <span>{t("items.3.answer.point2")}</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#FF3366] font-extrabold">•</span>
            <span>{t("items.3.answer.point3")}</span>
          </li>
        </ul>
        <p>{t("items.3.answer.outro")}</p>
      </>
    ),
    4: (
      <>
        <p className="mb-3">{t("items.4.answer.p1")}</p>
        <p className="mb-3">{t("items.4.answer.p2")}</p>
        <p>
          <Link href="/web" className="text-[#FF3366] hover:text-[#1A1A1A] underline decoration-2 underline-offset-4 transition-colors font-bold">
            {t("items.4.answer.link")}
          </Link>
        </p>
      </>
    ),
    5: (
      <>
        <p className="mb-3">{t("items.5.answer.p1")}</p>
        <p className="mb-3">{t("items.5.answer.p2")}</p>
        <p>
          <Link href="/tracking" className="text-[#06D6A0] hover:text-[#1A1A1A] underline decoration-2 underline-offset-4 transition-colors font-bold">
            {t("items.5.answer.link")}
          </Link>
        </p>
      </>
    ),
    6: (
      <>
        <p className="mb-3">{t("items.6.answer.p1")}</p>
        <p className="mb-3">{t("items.6.answer.p2")}</p>
        <p>{t("items.6.answer.p3")}</p>
      </>
    ),
    7: (
      <>
        <p className="mb-3">{t("items.7.answer.p1")}</p>
        <p>{t("items.7.answer.p2")}</p>
      </>
    ),
    8: (
      <>
        <p className="mb-3">{t("items.8.answer.p1")}</p>
        <p className="mb-3">{t("items.8.answer.p2")}</p>
        <p>{t("items.8.answer.p3")}</p>
      </>
    ),
  };

  return (
    <section id="faq" className="py-16 md:py-24 px-4 relative overflow-hidden bg-[#F5F5F7] border-y-2 border-[#1A1A1A]">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF3366]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD166]/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#FFD166] border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] mb-6">
            <HelpCircle className="w-5 h-5 text-[#1A1A1A]" />
            <span className="text-sm font-bold text-[#1A1A1A]">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#1A1A1A]" style={{ fontFamily: 'var(--font-display)' }}>
            {t("title")}<br className="hidden md:block" /> {t("titleLine2")}
          </h2>
        </div>

        <CSSStagger className="bg-white border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] rounded-3xl p-6 md:p-8">
          <div className="space-y-4">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <CSSStaggerItem key={i} index={i} className="group">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className={`w-full text-left p-4 md:p-5 rounded-xl transition-all duration-300 border-2 border-[#1A1A1A] ${openIndex === i
                    ? "bg-[#FFD166] shadow-[0px_0px_0px_0px_#1A1A1A] translate-y-[2px] translate-x-[2px]"
                    : "bg-white hover:bg-white shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                    }`}
                >
                  <div className="flex items-start justify-between gap-3 md:gap-4">
                    <span className="text-base md:text-lg font-bold text-[#1A1A1A]">
                      {t(`items.${i}.question`)}
                    </span>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-xl border-2 border-[#1A1A1A] flex items-center justify-center transition-all duration-300 mt-1 shadow-[2px_2px_0px_0px_#1A1A1A] ${openIndex === i
                        ? "bg-[#FF3366] text-white rotate-180"
                        : "bg-white group-hover:bg-[#06D6A0] text-[#1A1A1A]"
                        }`}
                    >
                      {openIndex === i ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                  <div
                    className={`grid transition-all duration-300 ease-out ${openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-4 text-[#1A1A1A]/80 font-medium leading-relaxed text-base border-t-2 border-[#1A1A1A]/10 mt-4">
                        {faqAnswers[i]}
                      </div>
                    </div>
                  </div>
                </button>
              </CSSStaggerItem>
            ))}
          </div>
        </CSSStagger>

        <CSSScrollAnimation delay={0.2} className="text-center text-[#1A1A1A]/60 font-medium text-sm mt-10">
          {t("trustLine")}
        </CSSScrollAnimation>
      </div>
    </section>
  );
}
