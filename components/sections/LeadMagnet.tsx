"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertCircle,
  CheckCircle2,
  Layout,
  XCircle,
  AlertTriangle,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  websiteAnalysisSchema,
  type WebsiteAnalysisData,
} from "@/lib/validations";
import { waitForHaloTrack, getHaloTrackSessionId, trackFormEvent, sendLeadToHaloTrack } from "@/lib/halotrack";

export default function LeadMagnet() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisSuccess, setAnalysisSuccess] = useState(false);
  const [analysisError, setAnalysisError] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  // const [auditResult, setAuditResult] = useState<any>(null); // Removed dynamic result state

  // Demo metrics to show before user submits
  const demoMetrics = {
    speedScore: 68,
    mobileScore: 100,
    seo: { hasTitle: false, hasH1: true },
    analytics: { hasGA4: true, hasGTM: false, hasPixel: false },
    conversionLoss: 45,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WebsiteAnalysisData>({
    resolver: zodResolver(websiteAnalysisSchema),
  });

  const onSubmit = async (data: WebsiteAnalysisData) => {
    // Show success immediately
    setIsAnalyzing(true);
    setAnalysisError("");
    setAnalysisSuccess(true);
    setShowSuccessPopup(true);

    // Reset form immediately
    reset();

    // Run audit in background (fire and forget from UI perspective)
    // Run audit in background (fire and forget from UI perspective)
    try {
      const sessionId = getHaloTrackSessionId();
      const leadValue = 2000; // Value for automated audit

      // 1. Send to audit API (which likely should forward to main lead webhook eventually, but existing is fine)
      fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          session_id: sessionId,
          value: leadValue,
          currency: 'CZK'
        }),
      }).catch((err) => console.error("Background audit error:", err));

      // 2. Track Event
      trackFormEvent("audit_submit", {
        url: data.url,
        value: leadValue,
        currency: "CZK"
      });

      // Generate Synced ID for Hybrid Tracking (Pixel + CAPI)
      const leadId = crypto.randomUUID();

      // 3. Facebook Pixel (Browser Side)
      // @ts-ignore
      if (typeof window.fbq === 'function') {
        // @ts-ignore
        window.fbq('track', 'Lead', {
          content_name: 'website_audit',
          currency: 'CZK',
          value: leadValue,
        }, { eventID: leadId }); // <--- Critical: Synced ID
      }

      // 4. Send Lead to HaloTrack (Server Side)
      sendLeadToHaloTrack({
        lead_id: leadId, // <--- Matching ID
        source: "audit_form",
        form_type: "tracking-audit",
        email: data.email,
        name: "",
        phone: data.phone, // Include phone
        message: `Audit for ${data.url}`,
        session_id: sessionId,
        consent_given: true,
        lead_value: leadValue,
        currency: "CZK",
        custom_fields: {
          website: data.url
        }
      });

    } catch (error) {
      console.error("Failed to start audit:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section id="audit" className="py-16 md:py-24 px-4 bg-ha-bg border-y border-ha-border-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* AlertTriangle Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ willChange: "opacity, transform" }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 mb-6 relative"
            >
              <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-xl" />
              <AlertTriangle className="w-8 h-8 text-orange-500 relative z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ willChange: "opacity, transform" }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6"
            >
              <span className="text-sm font-medium text-orange-300">
                🔍 Бесплатная проверка
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              style={{ willChange: "opacity, transform" }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Узнайте, почему ваш сайт теряет клиентов
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              style={{ willChange: "opacity, transform" }}
              className="text-xl text-slate-400 mb-8 leading-relaxed"
            >
              Проверка скорости, мобильной версии, SEO и аналитики за 30 секунд.
            </motion.p>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              style={{ willChange: "opacity, transform" }}
              className="space-y-3 mb-8"
            >
              {[
                "Скорость загрузки и PageSpeed",
                "Мобильная адаптивность",
                "Базовое SEO и видимость",
                "Наличие систем аналитики",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                  </div>
                  <span className="text-slate-300">{point}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Status Indicators + Form */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0.5, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              style={{ willChange: "opacity, transform" }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 shadow-2xl"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 via-red-500/20 to-orange-500/20 opacity-50 blur-xl" />

              {/* Status Indicators */}
              <div className="space-y-3 relative z-10 mb-6">
                {/* Speed */}
                <motion.div
                  initial={{ opacity: 0.4, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.05, duration: 0.25, ease: "easeOut" }}
                  style={{ willChange: "opacity, transform" }}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border ${demoMetrics.speedScore > 60
                    ? "bg-gradient-to-r from-green-500/10 to-transparent border-green-500/20"
                    : "bg-gradient-to-r from-red-500/10 to-transparent border-red-500/20"
                    }`}
                >
                  <div className="relative">
                    {demoMetrics.speedScore > 60 ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">
                      Скорость сайта (PageSpeed)
                    </div>
                    <div className="text-xs text-slate-400">
                      {`${demoMetrics.speedScore}/100 (пример)`}
                    </div>
                  </div>
                </motion.div>

                {/* Mobile */}
                <motion.div
                  initial={{ opacity: 0.4, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.08, duration: 0.25, ease: "easeOut" }}
                  style={{ willChange: "opacity, transform" }}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border ${demoMetrics.mobileScore > 0
                    ? "bg-gradient-to-r from-green-500/10 to-transparent border-green-500/20"
                    : "bg-gradient-to-r from-red-500/10 to-transparent border-red-500/20"
                    }`}
                >
                  <div className="relative">
                    {demoMetrics.mobileScore > 0 ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">
                      Мобильная оптимизация
                    </div>
                    <div className="text-xs text-slate-400">
                      {demoMetrics.mobileScore > 0
                        ? "Оптимизировано (пример)"
                        : "Есть проблемы (пример)"}
                    </div>
                  </div>
                </motion.div>

                {/* SEO */}
                <motion.div
                  initial={{ opacity: 0.4, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.11, duration: 0.25, ease: "easeOut" }}
                  style={{ willChange: "opacity, transform" }}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border ${demoMetrics.seo.hasTitle && demoMetrics.seo.hasH1
                    ? "bg-gradient-to-r from-green-500/10 to-transparent border-green-500/20"
                    : "bg-gradient-to-r from-orange-500/10 to-transparent border-orange-500/20"
                    }`}
                >
                  <div className="relative">
                    {demoMetrics.seo.hasTitle && demoMetrics.seo.hasH1 ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">
                      SEO основы
                    </div>
                    <div className="text-xs text-slate-400">
                      {demoMetrics.seo.hasTitle && demoMetrics.seo.hasH1
                        ? "Базовые теги найдены (пример)"
                        : "Отсутствуют важные теги (пример)"}
                    </div>
                  </div>
                </motion.div>

                {/* Analytics */}
                <motion.div
                  initial={{ opacity: 0.4, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.14, duration: 0.25, ease: "easeOut" }}
                  style={{ willChange: "opacity, transform" }}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border ${demoMetrics.analytics.hasGA4 ||
                    demoMetrics.analytics.hasGTM ||
                    demoMetrics.analytics.hasPixel
                    ? "bg-gradient-to-r from-green-500/10 to-transparent border-green-500/20"
                    : "bg-gradient-to-r from-red-500/10 to-transparent border-red-500/20"
                    }`}
                >
                  <div className="relative">
                    {demoMetrics.analytics.hasGA4 ||
                      demoMetrics.analytics.hasGTM ||
                      demoMetrics.analytics.hasPixel ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">
                      Наличие аналитики
                    </div>
                    <div className="text-xs text-slate-400">
                      {demoMetrics.analytics.hasGA4 ||
                        demoMetrics.analytics.hasGTM ||
                        demoMetrics.analytics.hasPixel
                        ? "Системы найдены (пример)"
                        : "Не найдены (пример)"}
                    </div>
                  </div>
                </motion.div>

                {/* Accuracy Score - Large Card */}
                <motion.div
                  initial={{ opacity: 0.5, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.17, duration: 0.25, ease: "easeOut" }}
                  style={{ willChange: "opacity, transform" }}
                  className="p-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30 text-center"
                >
                  <div className="text-6xl font-bold text-white mb-2">
                    {100 - demoMetrics.conversionLoss}%
                  </div>
                  <div className="text-sm text-orange-300 font-medium">
                    {`Вы можете терять ~${demoMetrics.conversionLoss}% конверсий`}
                  </div>
                  <p className="text-xs text-orange-200/50 mt-2">
                    (пример чужого сайта)
                  </p>
                </motion.div>
              </div>

              {/* Success Message */}
              {analysisSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3 relative z-10"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <div>
                    <p className="text-green-400 text-sm font-medium">
                      Анализ завершён!
                    </p>
                    <p className="text-green-400/80 text-xs">
                      Детальный отчёт отправлен на ваш email
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {analysisError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl relative z-10"
                >
                  <p className="text-red-400 text-sm">{analysisError}</p>
                </motion.div>
              )}

              {/* Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 relative z-10"
              >
                <div>
                  <Input
                    type="url"
                    {...register("url")}
                    placeholder="https://yoursite.com"
                    className={`h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500 ${errors.url ? "border-red-500" : ""
                      }`}
                  />
                  {errors.url && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.url.message}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    {...register("email")}
                    placeholder="ivan@company.cz"
                    className={`h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500 ${errors.email ? "border-red-500" : ""
                      }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    type="tel"
                    {...register("phone")}
                    placeholder="Телефон"
                    className="h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      {...register("consent")}
                      className={`mt-1 w-4 h-4 rounded border-slate-700 bg-slate-900/50 text-orange-500 focus:ring-orange-500 ${errors.consent ? "border-red-500" : ""
                        }`}
                    />
                    <label htmlFor="privacy" className="text-xs text-slate-400">
                      Согласен с политикой конфиденциальности
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.consent.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isAnalyzing}
                  className="w-full h-12 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? "Анализ..." : "Проверить сайт →"}
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  Обычно анализ занимает 30-60 секунд. Детальный отчёт придёт на
                  email.
                </p>
              </form>

              {/* Success Popup */}
              {showSuccessPopup && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm rounded-2xl p-6"
                >
                  <div className="text-center max-w-md">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Анализ запущен!
                    </h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      Спасибо за заявку. Мы начали технический аудит вашего
                      сайта.
                      <br />
                      <br />
                      Подробный PDF-отчет с результатами и рекомендациями будет
                      отправлен на ваш email в течение 5-10 минут.
                      <br />
                      <br />
                      <span className="text-orange-300">
                        ⚠️ Если письма нет во входящих, пожалуйста, проверьте
                        папку «Спам».
                      </span>
                    </p>
                    <Button
                      onClick={() => setShowSuccessPopup(false)}
                      className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 w-full"
                    >
                      Закрыть
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Alternative CTA */}
              <div className="pt-4 border-t border-slate-700 relative z-10">
                <p className="text-sm text-slate-400 text-center mb-3">
                  Планируете новый проект?
                </p>
                <Button
                  variant="outline"
                  className="w-full min-h-11 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white rounded-xl gap-2 px-3 py-2.5 text-sm sm:text-base whitespace-normal break-words"
                >
                  <Layout className="w-4 h-4 flex-shrink-0" />
                  <span className="text-left">
                    <span className="block sm:inline">У меня нет сайта</span>
                    <span className="hidden sm:inline"> → </span>
                    <span className="block sm:inline">получить бесплатный прототип</span>
                  </span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
