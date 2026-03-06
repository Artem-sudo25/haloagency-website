"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  websiteAnalysisSchema,
  type WebsiteAnalysisData,
} from "@/lib/validations";
import { CSSScrollAnimation } from "@/components/ui/css-scroll-animation";
import { waitForHaloTrack, getHaloTrackSessionId } from "@/lib/halotrack";

export default function TrackingAudit() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisSuccess, setAnalysisSuccess] = useState(false);
  const [analysisError, setAnalysisError] = useState("");
  const [haloSessionId, setHaloSessionId] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WebsiteAnalysisData>({
    resolver: zodResolver(websiteAnalysisSchema),
  });

  // Load HaloTrack session ID on mount
  useEffect(() => {
    waitForHaloTrack().then(() => {
      const sessionId = getHaloTrackSessionId();
      setHaloSessionId(sessionId);
    });
  }, []);

  const onSubmit = async (data: WebsiteAnalysisData) => {
    setIsAnalyzing(true);
    setAnalysisError("");
    setAnalysisSuccess(false);

    try {
      const response = await fetch("/api/webhook/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "tracking-audit",
          ...data,
          session_id: haloSessionId,
          source: "tracking_audit_form",
          consent_given: true,
          timestamp: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Ошибка анализа");
      }

      setAnalysisSuccess(true);
      reset();

      // Hide success message after 7 seconds
      setTimeout(() => {
        setAnalysisSuccess(false);
      }, 7000);
    } catch (error) {
      setAnalysisError(
        error instanceof Error
          ? error.message
          : "Произошла ошибка при анализе. Попробуйте позже.",
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-[#F5F5F7] border-y-2 border-[#1A1A1A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#06D6A0]/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF3366]/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* AlertTriangle Icon */}
            <CSSScrollAnimation>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#FFD166] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
                <AlertTriangle className="w-8 h-8 text-[#1A1A1A]" />
              </div>
            </CSSScrollAnimation>

            <CSSScrollAnimation delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
                <span className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">
                  🔍 Бесплатная проверка
                </span>
              </div>
            </CSSScrollAnimation>

            <CSSScrollAnimation delay={0.15}>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#1A1A1A] mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Почему ваши конверсии не отслеживаются?
              </h2>
            </CSSScrollAnimation>

            {/* New explanatory text */}
            <CSSScrollAnimation delay={0.2}>
              <p className="text-[#1A1A1A]/80 font-medium text-lg mb-6 leading-relaxed">
                Большинство сайтов в Чехии теряют данные не потому, что «всё плохо настроено»,
                а потому что браузеры и платформы просто перестали передавать информацию как раньше.
              </p>
            </CSSScrollAnimation>

            <CSSScrollAnimation delay={0.25}>
              <p className="text-[#1A1A1A]/80 font-medium text-lg mb-8 leading-relaxed">
                Проверим ваш сайт на наличие Google Analytics, GTM, Meta Pixel и
                других инструментов трекинга. Узнайте, что работает, а что нет —
                за 30 секунд.
              </p>
            </CSSScrollAnimation>

            {/* Key Points */}
            <CSSScrollAnimation delay={0.3}>
              <div className="space-y-3 mb-8">
                {[
                  "Мгновенный анализ (30 секунд)",
                  "Детальный отчёт на email",
                  "Конкретные рекомендации",
                  "Оценка потерянных конверсий",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-md bg-[#06D6A0] border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-[#1A1A1A] font-bold" />
                    </div>
                    <span className="text-lg font-bold text-[#1A1A1A]">{point}</span>
                  </div>
                ))}
              </div>
            </CSSScrollAnimation>
          </div>

          {/* Right: Status Indicators + Form */}
          <div className="relative">
            <CSSScrollAnimation delay={0.2} animation="fade-left">
              <div className="bg-white border-2 border-[#1A1A1A] rounded-3xl p-8 shadow-[8px_8px_0px_0px_#1A1A1A] relative">
                {/* Status Indicators */}
                <div className="space-y-3 relative z-10 mb-6">
                  <div
                    className="flex items-center gap-4 p-4 bg-[#F5F5F7] rounded-2xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] animate-fade-in-up"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <div className="relative">
                      <CheckCircle2 className="w-6 h-6 text-[#06D6A0] flex-shrink-0" />
                      <div className="absolute top-0 right-0 w-2 h-2 bg-[#06D6A0] rounded-full animate-pulse border border-[#1A1A1A]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-base font-bold text-[#1A1A1A]">
                        Google Tag Manager
                      </div>
                      <div className="text-sm font-medium text-[#1A1A1A]/70">
                        Обнаружен и работает
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-4 p-4 bg-[#FF3366]/5 rounded-2xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] animate-fade-in-up"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <XCircle className="w-6 h-6 text-[#FF3366] flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-base font-bold text-[#1A1A1A]">
                        Google Analytics 4
                      </div>
                      <div className="text-sm font-medium text-[#1A1A1A]/70">Не найден</div>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-4 p-4 bg-[#FFD166]/20 rounded-2xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] animate-fade-in-up"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="relative">
                      <AlertCircle className="w-6 h-6 text-[#FFD166] fill-[#1A1A1A] flex-shrink-0" />
                      <div className="absolute top-0 right-0 w-2 h-2 bg-[#FFD166] rounded-full animate-pulse border border-[#1A1A1A]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-base font-bold text-[#1A1A1A]">
                        Meta Pixel
                      </div>
                      <div className="text-sm font-medium text-[#1A1A1A]/70">
                        Обнаружен, но не работает
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-4 p-4 bg-[#FF3366]/5 rounded-2xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] animate-fade-in-up"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <XCircle className="w-6 h-6 text-[#FF3366] flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-base font-bold text-[#1A1A1A]">
                        Server-side tracking
                      </div>
                      <div className="text-sm font-medium text-[#1A1A1A]/70">Не настроен</div>
                    </div>
                  </div>

                  {/* Accuracy Score - Large Card */}
                  <div
                    className="p-8 bg-white rounded-2xl border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#FF3366] text-center animate-fade-in-up"
                    style={{ animationDelay: "0.7s" }}
                  >
                    <div className="text-6xl font-extrabold text-[#1A1A1A] mb-2" style={{ fontFamily: 'var(--font-display)' }}>52%</div>
                    <div className="text-base text-[#1A1A1A] font-bold">
                      Вы теряете ~48% конверсий
                    </div>
                  </div>
                </div>

                {/* Success Message */}
                {analysisSuccess && (
                  <div className="mb-6 p-5 bg-[#06D6A0]/20 border-2 border-[#1A1A1A] rounded-2xl flex items-center gap-4 relative z-10 animate-fade-in-up shadow-[4px_4px_0px_0px_#1A1A1A]">
                    <CheckCircle2 className="w-6 h-6 text-[#06D6A0] fill-[#1A1A1A] flex-shrink-0" />
                    <div>
                      <p className="text-[#1A1A1A] text-base font-bold">
                        Анализ завершён!
                      </p>
                      <p className="text-[#1A1A1A]/80 font-medium text-sm">
                        Детальный отчёт отправлен на ваш email
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {analysisError && (
                  <div className="mb-6 p-5 bg-[#FF3366]/10 border-2 border-[#1A1A1A] rounded-2xl relative z-10 animate-fade-in-up shadow-[4px_4px_0px_0px_#1A1A1A]">
                    <p className="text-[#1A1A1A] font-bold text-base">{analysisError}</p>
                  </div>
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
                      className={`h-14 font-medium text-base rounded-xl border-2 bg-white text-[#1A1A1A] placeholder:text-[#1A1A1A]/50 focus-visible:ring-0 focus-visible:border-[#FF3366] transition-colors shadow-[4px_4px_0px_0px_#1A1A1A] ${errors.url ? "border-[#FF3366]" : "border-[#1A1A1A]"
                        }`}
                    />
                    {errors.url && (
                      <p className="text-[#FF3366] font-bold text-xs mt-2">
                        {errors.url.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Input
                      type="email"
                      {...register("email")}
                      placeholder="ivan@company.cz"
                      className={`h-14 font-medium text-base rounded-xl border-2 bg-white text-[#1A1A1A] placeholder:text-[#1A1A1A]/50 focus-visible:ring-0 focus-visible:border-[#FF3366] transition-colors shadow-[4px_4px_0px_0px_#1A1A1A] ${errors.email ? "border-[#FF3366]" : "border-[#1A1A1A]"
                        }`}
                    />
                    {errors.email && (
                      <p className="text-[#FF3366] font-bold text-xs mt-2">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="flex items-start gap-3 mt-4">
                      <input
                        type="checkbox"
                        id="privacy"
                        {...register("consent")}
                        className={`mt-1 w-5 h-5 rounded border-2 bg-white text-[#FF3366] focus:ring-[#FF3366] focus:ring-offset-0 ${errors.consent ? "border-[#FF3366]" : "border-[#1A1A1A]"
                          }`}
                      />
                      <label htmlFor="privacy" className="text-sm font-bold text-[#1A1A1A]">
                        Согласен с политикой конфиденциальности
                      </label>
                    </div>
                    {errors.consent && (
                      <p className="text-[#FF3366] font-bold text-xs mt-2">
                        {errors.consent.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isAnalyzing}
                    className="w-full rounded-xl px-10 h-14 text-lg bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isAnalyzing ? "Анализ..." : "Проверить, теряются ли данные →"}
                  </Button>

                  <p className="text-sm font-medium text-[#1A1A1A]/60 text-center mt-4">
                    Обычно анализ занимает 30-60 секунд. Детальный отчёт придёт на
                    email.
                  </p>
                </form>
              </div>
            </CSSScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
