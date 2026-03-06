"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2, Megaphone, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waitForHaloTrack, getHaloTrackSessionId, trackFormEvent, sendLeadToHaloTrack } from "@/lib/halotrack";

type FormData = {
  business: string;
  businessLink: string;
  goal: string;
  hadAds: string;
  budget: string;
  hasWebsite: string;
  contact: string;
  phone: string;
};

const initialFormData: FormData = {
  business: "",
  businessLink: "",
  goal: "",
  hadAds: "",
  budget: "",
  hasWebsite: "",
  contact: "",
  phone: "",
};

export default function AdsLeadMagnet() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [haloSessionId, setHaloSessionId] = useState<string>("");
  const [consent, setConsent] = useState(false);

  // Load HaloTrack session ID on mount
  useEffect(() => {
    waitForHaloTrack().then(() => {
      const sessionId = getHaloTrackSessionId();
      setHaloSessionId(sessionId);
    });
  }, []);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const canProceedStep1 = formData.business && formData.goal && formData.hadAds;
  const canSubmit =
    formData.budget &&
    formData.hasWebsite &&
    formData.contact &&
    isValidEmail(formData.contact) &&
    consent;

  const getLeadValue = (budget: string): number => {
    if (budget.includes("30 000+")) return 30000;
    if (budget.includes("10–30")) return 15000;
    if (budget.includes("до 10")) return 8000;
    return 8000; // "Пока не знаю" or default min
  };

  const handleSubmit = async () => {
    if (!canSubmit) return;

    setIsSubmitting(true);
    setError(null);

    const leadValue = getLeadValue(formData.budget);
    const leadId = crypto.randomUUID();

    try {
      if (!isValidEmail(formData.contact)) {
        throw new Error("Введите корректный email");
      }

      const response = await fetch("/api/webhook/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Webhook-Secret": process.env.NEXT_PUBLIC_HALOTRACK_WEBHOOK_SECRET || "",
        },
        body: JSON.stringify({
          type: "ads-lead",
          session_id: haloSessionId,
          // Mapped to Growth Plan Schema (for unified n8n flow)
          websiteOrProfile: formData.businessLink || formData.hasWebsite,
          businessType: formData.business,
          mainGoal: formData.goal,
          mainProblem: `Budget: ${formData.budget}, Had Ads: ${formData.hadAds}`,
          contact: formData.contact,
          phone: formData.phone, // Include phone
          email: formData.contact,
          contact_method: "email",

          // Original Data (kept for context)
          budget: formData.budget,
          had_ads: formData.hadAds,

          // Tracking
          value: leadValue,
          currency: "CZK",
          lead_id: leadId,
          source: "ads_lead_form",
          consent_given: true,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Error ${response.status}`);
      }

      setIsSuccess(true);

      // 1. Client-Side Track Event (Conversion)
      trackFormEvent("ads_lead_submit", {
        business: formData.business,
        budget: formData.budget,
        has_website: formData.hasWebsite,
        value: leadValue,
      });


      // Facebook Browser Pixel - Lead Event
      // @ts-ignore
      if (typeof window.fbq === 'function') {
        // @ts-ignore
        window.fbq('track', 'Lead', {
          content_name: 'ads_magnet',
          currency: 'CZK',
          value: leadValue,
        }, { eventID: leadId });
      }

      // Google Ads Enhanced Conversions
      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      // @ts-ignore
      window.dataLayer.push({
        'event': 'generate_lead_v2',
        'eventID': leadId,
        'user_data': {
          'email_address': formData.contact,
        }
      });

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Произошла ошибка. Попробуйте ещё раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const RadioOption = ({
    name,
    value,
    selected,
    onChange
  }: {
    name: string;
    value: string;
    selected: boolean;
    onChange: () => void;
  }) => (
    <button
      type="button"
      onClick={onChange}
      className={`
        px-4 py-2.5 rounded-xl font-bold transition-all duration-200 border-2 border-[#1A1A1A]
        ${selected
          ? "bg-[#FF3366] text-white shadow-[4px_4px_0px_0px_#1A1A1A]"
          : "bg-white text-[#1A1A1A] hover:bg-[#1A1A1A]/5 shadow-[2px_2px_0px_0px_#1A1A1A] hover:shadow-[4px_4px_0px_0px_#1A1A1A]"
        }
      `}
    >
      {name}
    </button>
  );

  if (isSuccess) {
    return (
      <section className="py-16 md:py-24 bg-[#F5F5F7] border-y-2 border-[#1A1A1A] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF3366]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD166]/10 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-2xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 rounded-3xl bg-white border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A]"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#06D6A0] border-2 border-[#1A1A1A] flex items-center justify-center shadow-[4px_4px_0px_0px_#1A1A1A]">
              <Check className="w-8 h-8 text-[#1A1A1A] font-bold" />
            </div>
            <h3 className="text-3xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Заявка отправлена!
            </h3>
            <p className="text-[#1A1A1A]/80 font-medium text-lg">
              Мы свяжемся с вами в течение 1–2 рабочих часов и подготовим план запуска рекламы.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-[#F5F5F7] border-y-2 border-[#1A1A1A] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF3366]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD166]/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-2xl px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#FFD166] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] items-center justify-center"
          >
            <Megaphone className="w-8 h-8 text-[#1A1A1A]" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Не уверены, с какого канала начать?
          </h2>
          <p className="text-[#1A1A1A]/80 font-medium text-xl max-w-xl mx-auto">
            Мы подготовим короткий план запуска рекламы под ваш бизнес и бюджет — <span className="text-[#FF3366] font-extrabold underline decoration-2 underline-offset-4">бесплатно</span>.
          </p>
        </motion.div>

        {/* Progress */}
        <div className="p-4 rounded-3xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all border-2 border-[#1A1A1A] ${step === 1
              ? "bg-[#FF3366] text-white shadow-[4px_4px_0px_0px_#1A1A1A]"
              : "bg-white text-[#1A1A1A]"
              }`}>
              {step > 1 ? <Check className="w-5 h-5 font-bold" /> : <span>1</span>}
              <span className="hidden sm:inline">Бизнес и задача</span>
            </div>
            <div className="w-8 h-1 bg-[#1A1A1A] rounded-full opacity-20" />
            <div className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all border-2 border-[#1A1A1A] ${step === 2
              ? "bg-[#06D6A0] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A]"
              : "bg-white text-[#1A1A1A]/50"
              }`}>
              <span>2</span>
              <span className="hidden sm:inline">Контакт</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl bg-white border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A]"
        >
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                {/* Question 1 */}
                <div>
                  <label className="block text-[#1A1A1A] font-extrabold text-xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Чем занимается ваш бизнес?
                  </label>
                  <input
                    type="text"
                    value={formData.business}
                    onChange={(e) => updateField("business", e.target.value)}
                    placeholder="Например: ремонт квартир, доставка еды, стоматология..."
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#FF3366] transition-all shadow-[4px_4px_0px_0px_#1A1A1A]"
                  />
                </div>

                {/* Question 1b - Link */}
                <div>
                  <label className="block text-[#1A1A1A] font-extrabold text-xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Ссылка на сайт или соцсети
                    <span className="text-[#1A1A1A]/50 font-medium ml-2 text-sm">(необязательно)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.businessLink}
                    onChange={(e) => updateField("businessLink", e.target.value)}
                    placeholder="Сайт, Instagram, Facebook или Google Maps"
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#FF3366] transition-all shadow-[4px_4px_0px_0px_#1A1A1A]"
                  />
                </div>

                {/* Question 2 */}
                <div>
                  <label className="block text-[#1A1A1A] font-extrabold text-xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Что вы хотите получить от рекламы?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Заявки", "Звонки", "Продажи", "Визиты в заведение", "Пока не уверен(а)"].map((option) => (
                      <RadioOption
                        key={option}
                        name={option}
                        value={option}
                        selected={formData.goal === option}
                        onChange={() => updateField("goal", option)}
                      />
                    ))}
                  </div>
                </div>

                {/* Question 3 */}
                <div>
                  <label className="block text-[#1A1A1A] font-extrabold text-xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Реклама уже запускалась?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Да", "Нет", "Запускали давно"].map((option) => (
                      <RadioOption
                        key={option}
                        name={option}
                        value={option}
                        selected={formData.hadAds === option}
                        onChange={() => updateField("hadAds", option)}
                      />
                    ))}
                  </div>
                </div>

                {/* Next Button */}
                <Button
                  onClick={() => setStep(2)}
                  disabled={!canProceedStep1}
                  className={`w-full h-14 rounded-xl font-bold transition-all text-lg border-2 border-[#1A1A1A] ${canProceedStep1
                    ? "bg-[#06D6A0] hover:bg-[#06D6A0] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A]"
                    : "bg-white text-[#1A1A1A]/40 cursor-not-allowed"
                    }`}
                >
                  Далее
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                {/* Back button */}
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 text-sm font-bold text-[#1A1A1A]/60 hover:text-[#FF3366] transition-colors mb-4"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Назад
                </button>

                {/* Question 4 */}
                <div>
                  <label className="block text-[#1A1A1A] font-extrabold text-xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Примерный рекламный бюджет в месяц?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["до 10 000 Kč", "10–30 000 Kč", "30 000+ Kč", "Пока не знаю"].map((option) => (
                      <RadioOption
                        key={option}
                        name={option}
                        value={option}
                        selected={formData.budget === option}
                        onChange={() => updateField("budget", option)}
                      />
                    ))}
                  </div>
                </div>

                {/* Question 5 */}
                <div>
                  <label className="block text-[#1A1A1A] font-extrabold text-xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Сайт есть?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Да", "Нет", "Нужно доработать"].map((option) => (
                      <RadioOption
                        key={option}
                        name={option}
                        value={option}
                        selected={formData.hasWebsite === option}
                        onChange={() => updateField("hasWebsite", option)}
                      />
                    ))}
                  </div>
                </div>

                {/* Question 6 */}
                <div>
                  <label className="block text-[#1A1A1A] font-extrabold text-xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Email для связи
                  </label>
                  <input
                    type="email"
                    value={formData.contact}
                    onChange={(e) => updateField("contact", e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#FF3366] transition-all shadow-[4px_4px_0px_0px_#1A1A1A]"
                  />
                </div>

                {/* Phone (Optional) */}
                <div>
                  <label className="block text-[#1A1A1A] font-extrabold text-xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Телефон
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="+420 123 456 789"
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] font-medium placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#FF3366] transition-all shadow-[4px_4px_0px_0px_#1A1A1A]"
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3 mt-6 mb-6">
                  <input
                    type="checkbox"
                    id="consent-ads"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-5 h-5 text-[#FF3366] border-2 border-[#1A1A1A] rounded bg-white focus:ring-[#FF3366] focus:ring-offset-0"
                  />
                  <label htmlFor="consent-ads" className="text-sm font-bold text-[#1A1A1A]">
                    Согласен с{" "}
                    <a href="/privacy-policy" target="_blank" className="text-[#FF3366] hover:text-[#1A1A1A] underline decoration-2 underline-offset-4">
                      политикой конфиденциальности
                    </a>
                  </label>
                </div>

                {/* Error */}
                {error && (
                  <p className="text-[#FF3366] font-bold text-sm text-center bg-[#FF3366]/10 py-3 rounded-xl border-2 border-[#1A1A1A]">{error}</p>
                )}

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  disabled={!canSubmit || isSubmitting}
                  className={`w-full h-16 rounded-xl font-bold text-lg transition-all border-2 border-[#1A1A1A] ${canSubmit && !isSubmitting
                    ? "bg-[#06D6A0] hover:bg-[#06D6A0] text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A]"
                    : "bg-white text-[#1A1A1A]/40 cursor-not-allowed"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Отправляем...
                    </>
                  ) : (
                    <>
                      Получить план запуска рекламы
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                {/* Note */}
                <p className="text-center font-bold text-[#1A1A1A]/60 text-xs mt-6">
                  Мы свяжемся с вами в течение 1–2 рабочих часов и уточним детали, если потребуется.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

