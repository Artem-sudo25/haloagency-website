"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, CheckCircle2, MessageCircle } from "lucide-react";
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
    { value: "web", label: "Разработка сайтов" },
    { value: "ads", label: "Реклама (Ads)" },
    { value: "tracking", label: "Аналитика и Трекинг" },
    { value: "package", label: "Готовый пакет" },
    { value: "other", label: "Другое" },
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
    <section id="contact" className="py-16 md:py-24 px-6" aria-labelledby="contact-heading">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">

          {/* Left Column: Contact Info */}
          <div>
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Готовы обсудить проект?
            </h2>
            <p className="text-lg text-[#1A1A1A]/70 mb-10 max-w-md">
              Оставьте заявку, и мы свяжемся с вами в течение рабочего дня.
            </p>

            <div className="flex flex-col gap-6">
              <a href="mailto:hello@haloagency.cz" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#FF3366]/10 flex items-center justify-center text-[#FF3366]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#1A1A1A]/40 uppercase tracking-wider font-bold">Email</div>
                  <span className="font-medium group-hover:text-[#FF3366] transition-colors">hello@haloagency.cz</span>
                </div>
              </a>
              <a href="tel:+420705729502" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#FF3366]/10 flex items-center justify-center text-[#FF3366]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#1A1A1A]/40 uppercase tracking-wider font-bold">Телефон</div>
                  <span className="font-medium group-hover:text-[#FF3366] transition-colors">+420 705 729 502</span>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF3366]/10 flex items-center justify-center text-[#FF3366]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#1A1A1A]/40 uppercase tracking-wider font-bold">Офис</div>
                  <span className="font-medium">Прага, Чехия</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FF3366]/10 flex items-center justify-center text-[#FF3366]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#1A1A1A]/40 uppercase tracking-wider font-bold">Мессенджеры</div>
                  <div className="flex items-center gap-3 mt-0.5">
                    <a href="https://wa.me/420705729502" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-[#FF3366] transition-colors">WhatsApp</a>
                    <span className="text-[#1A1A1A]/30">·</span>
                    <a href="https://t.me/+420705729502" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-[#FF3366] transition-colors">Telegram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-[#FFD166] p-8 md:p-12 rounded-3xl border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A]">
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  Заявка отправлена!
                </h3>
                <p className="text-[#1A1A1A]/60">Мы свяжемся с вами в течение 2 рабочих часов.</p>
              </div>
            ) : (
              <>
                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-600 text-sm">{submitError}</p>
                  </div>
                )}

                <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-bold text-[#1A1A1A]/80 ml-4">
                        Имя <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Иван Иванов"
                        className={`px-6 py-4 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] focus:shadow-[2px_2px_0px_0px_#1A1A1A] focus:translate-[2px] h-auto outline-none transition-all text-[#1A1A1A] font-medium ${errors.name ? "border-red-500 shadow-[4px_4px_0px_0px_#ef4444]" : ""}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs ml-4">{errors.name.message}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-bold text-[#1A1A1A]/80 ml-4">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="ivan@company.com"
                        className={`px-6 py-4 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] focus:shadow-[2px_2px_0px_0px_#1A1A1A] focus:translate-[2px] h-auto outline-none transition-all text-[#1A1A1A] font-medium ${errors.email ? "border-red-500 shadow-[4px_4px_0px_0px_#ef4444]" : ""}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs ml-4">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-bold text-[#1A1A1A]/80 ml-4">
                      Телефон <span className="text-[#1A1A1A]/40 text-xs font-normal">(опционально)</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      placeholder="+420 123 456 789"
                      className="px-6 py-4 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] focus:shadow-[2px_2px_0px_0px_#1A1A1A] focus:translate-[2px] h-auto outline-none transition-all text-[#1A1A1A] font-medium"
                    />
                  </div>

                  {/* Service Selector */}
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-[#1A1A1A]/80 ml-4">Интересующая услуга</label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => (
                        <button
                          key={service.value}
                          type="button"
                          onClick={() => setSelectedService(service.value)}
                          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all border-2 border-[#1A1A1A] ${selectedService === service.value
                            ? "bg-[#1A1A1A] text-white shadow-[2px_2px_0px_0px_#FF3366] translate-y-[2px] translate-x-[2px]"
                            : "bg-white text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-[5px_5px_0px_0px_#1A1A1A]"
                            }`}
                        >
                          {service.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-bold text-[#1A1A1A]/80 ml-4">
                      О проекте <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Расскажите немного о вашей задаче..."
                      className={`min-h-[120px] px-6 py-4 rounded-2xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] focus:shadow-[2px_2px_0px_0px_#1A1A1A] focus:translate-[2px] w-full outline-none transition-all resize-none text-[#1A1A1A] font-medium ${errors.message ? "border-red-500 shadow-[4px_4px_0px_0px_#ef4444]" : ""}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs ml-4">{errors.message.message}</p>}
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="consent-contact"
                      {...register("consent")}
                      className="mt-1 w-4 h-4 rounded border-[#1A1A1A]/20 text-[#FF3366] focus:ring-[#FF3366] cursor-pointer accent-[#FF3366]"
                    />
                    <label htmlFor="consent-contact" className="text-xs text-[#1A1A1A]/60 cursor-pointer">
                      Принимаю{" "}
                      <a href="/privacy" target="_blank" className="text-[#FF3366] hover:underline">
                        политику конфиденциальности
                      </a>
                    </label>
                  </div>
                  {errors.consent && <p className="text-red-500 text-xs ml-4">{errors.consent.message}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1A1A1A] text-white border-2 border-[#1A1A1A] px-10 py-5 rounded-2xl text-lg font-bold shadow-[4px_4px_0px_0px_#FFFFFF] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#FFFFFF] active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_0px_#FFFFFF] transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  </button>

                  <p className="text-xs text-[#1A1A1A]/40 text-center">
                    Обычно отвечаем в течение 2 часов в рабочее время
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
