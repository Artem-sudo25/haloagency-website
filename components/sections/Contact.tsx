"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { waitForHaloTrack, getHaloTrackSessionId } from "@/lib/halotrack";

export default function Contact() {
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [haloSessionId, setHaloSessionId] = useState<string>("");

  useEffect(() => {
    waitForHaloTrack().then(() => {
      setHaloSessionId(getHaloTrackSessionId());
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const services = [
    { value: "web", label: "Разработка сайтов", color: "from-blue-500 to-blue-600" },
    { value: "ads", label: "Реклама (Ads)", color: "from-orange-500 to-red-500" },
    { value: "tracking", label: "Аналитика и Трекинг", color: "from-green-500 to-emerald-500" },
    { value: "package", label: "Готовый пакет", color: "from-purple-500 to-pink-500" },
    { value: "other", label: "Другое", color: "from-slate-500 to-slate-600" },
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const response = await fetch("/api/webhook/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Webhook-Secret": process.env.NEXT_PUBLIC_HALOTRACK_WEBHOOK_SECRET || "",
        },
        body: JSON.stringify({
          type: "contact",
          ...data,
          service: selectedService || undefined,
          session_id: haloSessionId,
          source: "contact_form",
          consent_given: true,
          timestamp: new Date().toISOString(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Ошибка отправки формы");
      }

      setSubmitSuccess(true);
      reset();
      setSelectedService("");

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Произошла ошибка. Попробуйте позже или напишите нам в Telegram."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-ha-bg py-16 md:py-20 pb-10 border-t border-ha-border-dark relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-20">

          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 md:mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-gray-300">Свяжитесь с нами</span>
            </div>

            <h2 id="contact-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white">
              Готовы обсудить проект?
            </h2>
            <p className="text-base md:text-lg text-slate-400 mb-8 md:mb-10 max-w-md">
              Оставьте заявку, и мы свяжемся с вами в течение рабочего дня, чтобы обсудить детали.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Email</div>
                  <a href="mailto:hello@haloagency.cz" className="text-white hover:text-blue-400 transition-colors">
                    hello@haloagency.cz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center text-green-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Телефон</div>
                  <a href="tel:+420705729502" className="text-white hover:text-green-400 transition-colors">
                    +420 705 729 502
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-slate-500 mb-1">Офис</div>
                  <span className="text-white">
                    Прага, Чехия
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Enhanced Form with Gradient */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-50" />

            <div className="relative bg-ha-card-dark/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              {/* Success Message - Full Card */}
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Заявка отправлена!
                  </h3>
                  <p className="text-slate-400">
                    Мы свяжемся с вами в течение 2 рабочих часов.
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Error Message */}
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl"
                    >
                      <p className="text-red-400 text-sm">{submitError}</p>
                    </motion.div>
                  )}

                  <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-300">
                          Имя <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          {...register("name")}
                          placeholder="Иван Иванов"
                          className={`bg-slate-900/50 border-slate-700 text-white focus:border-blue-500 transition-colors ${errors.name ? "border-red-500" : ""
                            }`}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-300">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          placeholder="ivan@company.com"
                          className={`bg-slate-900/50 border-slate-700 text-white focus:border-blue-500 transition-colors ${errors.email ? "border-red-500" : ""
                            }`}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                        )}
                      </div>
                      <div className="space-y-2 col-span-1 sm:col-span-2">
                        <label htmlFor="phone" className="text-sm font-medium text-slate-300">
                          Телефон <span className="text-slate-500 text-xs font-normal">(опционально)</span>
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          placeholder="+420 123 456 789"
                          className="bg-slate-900/50 border-slate-700 text-white focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service Selector - MOVED HERE */}
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-slate-300">Интересующая услуга</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {services.map((service) => (
                          <button
                            key={service.value}
                            type="button"
                            onClick={() => setSelectedService(service.value)}
                            className={`relative p-3 rounded-xl border transition-all duration-300 ${selectedService === service.value
                              ? 'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/20'
                              : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                              }`}
                          >
                            {selectedService === service.value && (
                              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 rounded-xl`} />
                            )}
                            <span className={`relative text-xs font-medium ${selectedService === service.value ? 'text-white' : 'text-slate-400'
                              }`}>
                              {service.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-300">
                        О проекте <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="Расскажите немного о вашей задаче..."
                        className={`min-h-[120px] bg-slate-900/50 border-slate-700 text-white focus:border-blue-500 transition-colors resize-none ${errors.message ? "border-red-500" : ""
                          }`}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          id="consent-contact"
                          {...register("consent")}
                          className="mt-1 w-4 h-4 rounded bg-slate-900/50 border-slate-700 text-blue-500 focus:ring-blue-500 cursor-pointer"
                        />
                        <label htmlFor="consent-contact" className="text-sm text-slate-400 cursor-pointer">
                          Согласен с{" "}
                          <a href="/privacy" target="_blank" className="text-blue-400 hover:text-blue-300 underline">
                            политикой конфиденциальности
                          </a>
                        </label>
                      </div>
                      {errors.consent && (
                        <p className="text-red-400 text-xs mt-1">{errors.consent.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Отправка..." : "Отправить заявку"}
                    </Button>

                    <p className="text-xs text-slate-500 text-center">
                      Обычно отвечаем в течение 2 часов в рабочее время
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
