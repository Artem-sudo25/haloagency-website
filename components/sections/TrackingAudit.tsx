"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  websiteAnalysisSchema,
  type WebsiteAnalysisData,
} from "@/lib/validations";
import { CSSScrollAnimation } from "@/components/ui/css-scroll-animation";

export default function TrackingAudit() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisSuccess, setAnalysisSuccess] = useState(false);
  const [analysisError, setAnalysisError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WebsiteAnalysisData>({
    resolver: zodResolver(websiteAnalysisSchema),
  });

  const onSubmit = async (data: WebsiteAnalysisData) => {
    setIsAnalyzing(true);
    setAnalysisError("");
    setAnalysisSuccess(false);

    try {
      const response = await fetch("/api/check-tracking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
    <section className="py-16 md:py-24 px-4 bg-ha-bg border-y border-ha-border-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* AlertTriangle Icon */}
            <CSSScrollAnimation>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-xl" />
                <AlertTriangle className="w-8 h-8 text-orange-500 relative z-10" />
              </div>
            </CSSScrollAnimation>

            <CSSScrollAnimation delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                <span className="text-sm font-medium text-orange-300">
                  🔍 Бесплатная проверка
                </span>
              </div>
            </CSSScrollAnimation>

            <CSSScrollAnimation delay={0.15}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Почему ваши конверсии не отслеживаются?
              </h2>
            </CSSScrollAnimation>

            {/* New explanatory text */}
            <CSSScrollAnimation delay={0.2}>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Большинство сайтов в Чехии теряют данные не потому, что «всё плохо настроено»,
                а потому что браузеры и платформы просто перестали передавать информацию как раньше.
              </p>
            </CSSScrollAnimation>

            <CSSScrollAnimation delay={0.25}>
              <p className="text-slate-400 mb-8 leading-relaxed">
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
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-slate-300">{point}</span>
                  </div>
                ))}
              </div>
            </CSSScrollAnimation>
          </div>

          {/* Right: Status Indicators + Form */}
          <div className="relative">
            <CSSScrollAnimation delay={0.2} animation="fade-left">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 shadow-2xl relative">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 opacity-50 blur-xl" />

                {/* Status Indicators */}
                <div className="space-y-3 relative z-10 mb-6">
                  <div
                    className="flex items-center gap-3 p-3.5 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl border border-green-500/20 animate-fade-in-up"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <div className="relative">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">
                        Google Tag Manager
                      </div>
                      <div className="text-xs text-slate-400">
                        Обнаружен и работает
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-3 p-3.5 bg-gradient-to-r from-red-500/10 to-transparent rounded-xl border border-red-500/20 animate-fade-in-up"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">
                        Google Analytics 4
                      </div>
                      <div className="text-xs text-slate-400">Не найден</div>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-3 p-3.5 bg-gradient-to-r from-orange-500/10 to-transparent rounded-xl border border-orange-500/20 animate-fade-in-up"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <div className="relative">
                      <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <div className="absolute top-0 right-0 w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">
                        Meta Pixel
                      </div>
                      <div className="text-xs text-slate-400">
                        Обнаружен, но не работает
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-3 p-3.5 bg-gradient-to-r from-red-500/10 to-transparent rounded-xl border border-red-500/20 animate-fade-in-up"
                    style={{ animationDelay: "0.6s" }}
                  >
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">
                        Server-side tracking
                      </div>
                      <div className="text-xs text-slate-400">Не настроен</div>
                    </div>
                  </div>

                  {/* Accuracy Score - Large Card */}
                  <div
                    className="p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30 text-center animate-fade-in-up"
                    style={{ animationDelay: "0.7s" }}
                  >
                    <div className="text-6xl font-bold text-white mb-2">52%</div>
                    <div className="text-sm text-green-300 font-medium">
                      Вы теряете ~48% конверсий
                    </div>
                  </div>
                </div>

                {/* Success Message */}
                {analysisSuccess && (
                  <div className="mb-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3 relative z-10 animate-fade-in-up">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <div>
                      <p className="text-green-400 text-sm font-medium">
                        Анализ завершён!
                      </p>
                      <p className="text-green-400/80 text-xs">
                        Детальный отчёт отправлен на ваш email
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {analysisError && (
                  <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl relative z-10 animate-fade-in-up">
                    <p className="text-red-400 text-sm">{analysisError}</p>
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
                      className={`h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500 ${
                        errors.url ? "border-red-500" : ""
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
                      className={`h-12 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-orange-500 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="privacy"
                        {...register("consent")}
                        className={`mt-1 w-4 h-4 rounded border-slate-700 bg-slate-900/50 text-orange-500 focus:ring-orange-500 ${
                          errors.consent ? "border-red-500" : ""
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
                    className="w-full h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isAnalyzing ? "Анализ..." : "Проверить, теряются ли данные →"}
                  </Button>

                  <p className="text-xs text-slate-500 text-center">
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
