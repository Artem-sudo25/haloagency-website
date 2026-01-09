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
  contactMethod: string;
  contact: string;
};

const initialFormData: FormData = {
  business: "",
  businessLink: "",
  goal: "",
  hadAds: "",
  budget: "",
  hasWebsite: "",
  contactMethod: "",
  contact: "",
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

  const canProceedStep1 = formData.business && formData.goal && formData.hadAds;
  const canSubmit = formData.budget && formData.hasWebsite && formData.contactMethod && formData.contact && consent;

  const handleSubmit = async () => {
    if (!canSubmit) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/webhook/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "ads-lead",
          session_id: haloSessionId,
          ...formData,
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
        has_website: formData.hasWebsite
      });

      // 2. Client-Side Send Lead (Attribution) - Matches Propradlo
      sendLeadToHaloTrack({
        lead_id: crypto.randomUUID(),
        source: "ads_lead_form",
        form_type: "ads-lead",
        email: formData.contact, // Fallback if no specific email field
        name: "", // Not collected
        phone: "", // Not collected
        message: "",
        session_id: haloSessionId,
        consent_given: true,
        lead_value: 0,
        currency: "CZK",
        custom_fields: {
          business: formData.business,
          budget: formData.budget,
          has_website: formData.hasWebsite,
          goal: formData.goal
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
        px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
        ${selected
          ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
          : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
        }
      `}
    >
      {name}
    </button>
  );

  if (isSuccess) {
    return (
      <section className="py-24 bg-ha-bg relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-2xl px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-900/50 border border-orange-500/30"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Заявка отправлена!
            </h3>
            <p className="text-slate-400">
              Мы свяжемся с вами в течение 1–2 рабочих часов и подготовим план запуска рекламы.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-ha-bg relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

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
            className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500/30 to-orange-600/20 border border-orange-500/30 flex items-center justify-center"
          >
            <Megaphone className="w-8 h-8 text-orange-400" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Не уверены, с какого канала начать?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto">
            Мы подготовим короткий план запуска рекламы под ваш бизнес и бюджет — <span className="text-orange-400 font-medium">бесплатно</span>.
          </p>
        </motion.div>

        {/* Progress */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
          <div className="flex items-center justify-center gap-4">
            <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${step === 1
              ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
              : "bg-orange-500/20 text-orange-400"
              }`}>
              {step > 1 ? <Check className="w-4 h-4" /> : <span>1</span>}
              <span className="hidden sm:inline">Бизнес и задача</span>
            </div>
            <div className="w-12 h-px bg-white/20" />
            <div className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${step === 2
              ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
              : "bg-white/10 text-slate-400"
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
          className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-900/50 border border-white/10"
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
                  <label className="block text-white font-medium mb-3">
                    Чем занимается ваш бизнес?
                  </label>
                  <input
                    type="text"
                    value={formData.business}
                    onChange={(e) => updateField("business", e.target.value)}
                    placeholder="Например: ремонт квартир, доставка еды, стоматология..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  />
                </div>

                {/* Question 1b - Link */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Ссылка на сайт или соцсети
                    <span className="text-slate-500 font-normal ml-2 text-sm">(необязательно)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.businessLink}
                    onChange={(e) => updateField("businessLink", e.target.value)}
                    placeholder="Сайт, Instagram, Facebook или Google Maps"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  />
                </div>

                {/* Question 2 */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    Что вы хотите получить от рекламы?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["Заявки", "Звонки", "Продажи", "Пока не уверен(а)"].map((option) => (
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
                  <label className="block text-white font-medium mb-3">
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
                  className={`w-full h-12 rounded-xl font-medium transition-all ${canProceedStep1
                    ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30"
                    : "bg-white/10 text-slate-400 cursor-not-allowed"
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
                  className="flex items-center gap-1 text-sm text-slate-400 hover:text-white transition-colors mb-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Назад
                </button>

                {/* Question 4 */}
                <div>
                  <label className="block text-white font-medium mb-3">
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
                  <label className="block text-white font-medium mb-3">
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
                  <label className="block text-white font-medium mb-3">
                    Как удобнее связаться?
                  </label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["WhatsApp", "Telegram", "Email"].map((option) => (
                      <RadioOption
                        key={option}
                        name={option}
                        value={option}
                        selected={formData.contactMethod === option}
                        onChange={() => updateField("contactMethod", option)}
                      />
                    ))}
                  </div>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) => updateField("contact", e.target.value)}
                    placeholder={
                      formData.contactMethod === "Email"
                        ? "your@email.com"
                        : formData.contactMethod === "WhatsApp"
                          ? "+420..."
                          : "@username или +420..."
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3 mt-4 mb-4">
                  <input
                    type="checkbox"
                    id="consent-ads"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 text-orange-500 border-slate-600 rounded focus:ring-orange-500 bg-slate-800"
                  />
                  <label htmlFor="consent-ads" className="text-sm text-slate-400">
                    Согласен с{" "}
                    <a href="/privacy" target="_blank" className="text-orange-400 hover:text-orange-300 underline">
                      политикой конфиденциальности
                    </a>
                  </label>
                </div>

                {/* Error */}
                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  disabled={!canSubmit || isSubmitting}
                  className={`w-full h-14 rounded-xl font-medium text-lg transition-all ${canSubmit && !isSubmitting
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl shadow-orange-500/30"
                    : "bg-white/10 text-slate-400 cursor-not-allowed"
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
                <p className="text-center text-slate-500 text-xs">
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

