"use client";

import { Input } from "@/components/ui/input";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { growthPlanSchema, type GrowthPlanData } from "@/lib/validations";
import { waitForHaloTrack, getHaloTrackSessionId, trackFormEvent } from "@/lib/halotrack";

const businessTypes = [
    { value: "service", label: "Сервис / услуги" },
    { value: "ecommerce", label: "Интернет-магазин" },
    { value: "local", label: "Локальный бизнес" },
    { value: "other", label: "Другое" },
];

const goals = [
    { value: "leads", label: "Больше заявок" },
    { value: "sales", label: "Больше продаж" },
    { value: "check-ads", label: "Проверить рекламу" },
    { value: "prepare-growth", label: "Подготовить бизнес к росту" },
];

const triedOptions = [
    { value: "google-ads", label: "Google Ads" },
    { value: "meta-ads", label: "Facebook / Instagram Ads" },
    { value: "seo", label: "SEO" },
    { value: "social", label: "Соцсети" },
    { value: "nothing", label: "Пока ничего" },
];

export default function GrowthPlanMagnet() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [selectedTried, setSelectedTried] = useState<string[]>([]);
    const [haloSessionId, setHaloSessionId] = useState<string>("");
    const [submitError, setSubmitError] = useState("");

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<GrowthPlanData>({
        resolver: zodResolver(growthPlanSchema),
        defaultValues: {
            triedBefore: [],
        },
    });

    // Load HaloTrack session ID on mount
    useEffect(() => {
        waitForHaloTrack().then(() => {
            const sessionId = getHaloTrackSessionId();
            setHaloSessionId(sessionId);
        });
    }, []);

    const toggleTried = (value: string) => {
        setSelectedTried((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };

    const getLeadValue = (businessType: string): number => {
        switch (businessType) {
            case "ecommerce": return 25000;
            case "service": return 15000;
            case "local": return 8000;
            case "other": return 8000;
            default: return 8000;
        }
    };

    const onSubmit = async (data: GrowthPlanData) => {
        setSubmitError("");
        setIsSubmitting(true);

        const formData = {
            ...data,
            triedBefore: selectedTried,
            session_id: haloSessionId,
        };

        const leadValue = getLeadValue(data.businessType);

        try {
            const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact);
            const leadId = crypto.randomUUID();

            const response = await fetch("/api/webhook/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "growth-plan",
                    session_id: haloSessionId,
                    websiteOrProfile: formData.websiteOrProfile,
                    businessType: formData.businessType,
                    mainGoal: formData.mainGoal,
                    mainProblem: formData.mainProblem,
                    contact: formData.contact,
                    email: isEmail ? formData.contact : undefined,
                    phone: formData.phone,
                    contact_method: isEmail ? "email" : "other",
                    triedBefore: selectedTried,
                    value: leadValue,
                    currency: "CZK",
                    lead_id: leadId,
                    source: "growth_plan_form",
                    consent_given: true,
                    timestamp: new Date().toISOString()
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to submit");
            }

            trackFormEvent("growth_plan_submit", {
                business_type: data.businessType,
                goal: data.mainGoal,
                value: leadValue,
            });

            // @ts-ignore
            if (typeof window.fbq === 'function') {
                // @ts-ignore
                window.fbq('track', 'Lead', {
                    content_name: 'growth_plan',
                    currency: 'CZK',
                    value: leadValue,
                }, { eventID: leadId });
            }

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

            setShowSuccess(true);
            reset();
            setSelectedTried([]);
        } catch (error) {
            console.error("Failed to submit:", error);
            setSubmitError("Ошибка отправки. Попробуйте ещё раз.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="growth-plan" className="py-16 md:py-24 px-6 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto">
                <div className="w-full max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-[#B19CD9] border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] relative overflow-hidden">

                    {/* Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4 relative inline-block" style={{ fontFamily: 'var(--font-display)' }}>
                            Бесплатный план{" "}
                            <span className="relative z-10">
                                роста
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FF3366] -z-10" fill="none" preserveAspectRatio="none" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
                                </svg>
                            </span>
                        </h2>
                        <p className="text-[#1A1A1A] font-bold mt-4">
                            Ответьте на несколько коротких вопросов — мы посмотрим вашу ситуацию и предложим конкретные шаги для роста бизнеса.
                        </p>
                    </div>

                    {showSuccess ? (
                        <div className="text-center py-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                                <CheckCircle2 className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                                Спасибо! Заявка отправлена
                            </h3>
                            <p className="text-[#1A1A1A]/60 max-w-md mx-auto">
                                Мы изучим вашу ситуацию и ответим в течение 2 часов с персональным планом роста.
                            </p>
                            <button
                                onClick={() => setShowSuccess(false)}
                                className="mt-6 px-6 py-2.5 rounded-full border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold hover:bg-[#1A1A1A] hover:text-white transition-all"
                            >
                                Отправить ещё
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                            {/* Website + Email row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-[#1A1A1A]/80 ml-4">Сайт или профиль бизнеса</label>
                                    <Input
                                        {...register("websiteOrProfile")}
                                        placeholder="https:// или Instagram"
                                        className="px-6 py-4 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] focus:shadow-[2px_2px_0px_0px_#1A1A1A] focus:translate-x-[2px] focus:translate-y-[2px] h-auto outline-none transition-all text-[#1A1A1A] font-medium"
                                    />
                                    {errors.websiteOrProfile && (
                                        <p className="text-red-500 text-sm ml-4">{errors.websiteOrProfile.message}</p>
                                    )}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-[#1A1A1A]/80 ml-4">Email для ответа</label>
                                    <Input
                                        type="email"
                                        {...register("contact")}
                                        placeholder="your@email.com"
                                        className="px-6 py-4 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] focus:shadow-[2px_2px_0px_0px_#1A1A1A] focus:translate-x-[2px] focus:translate-y-[2px] h-auto outline-none transition-all text-[#1A1A1A] font-medium"
                                    />
                                    {errors.contact && (
                                        <p className="text-red-500 text-sm ml-4">{errors.contact.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Business Type */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[#1A1A1A]/80 ml-4">Тип бизнеса</label>
                                <Controller
                                    name="businessType"
                                    control={control}
                                    render={({ field }) => (
                                        <select
                                            {...field}
                                            className="w-full px-6 py-4 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] focus:shadow-[2px_2px_0px_0px_#1A1A1A] focus:translate-x-[2px] focus:translate-y-[2px] outline-none appearance-none cursor-pointer text-[#1A1A1A] font-medium transition-all"
                                        >
                                            <option value="">Выберите тип</option>
                                            {businessTypes.map((type) => (
                                                <option key={type.value} value={type.value}>{type.label}</option>
                                            ))}
                                        </select>
                                    )}
                                />
                                {errors.businessType && (
                                    <p className="text-red-500 text-sm ml-4">{errors.businessType.message}</p>
                                )}
                            </div>

                            {/* Main Goal */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[#1A1A1A]/80 ml-4">Главная цель</label>
                                <Controller
                                    name="mainGoal"
                                    control={control}
                                    render={({ field }) => (
                                        <select
                                            {...field}
                                            className="w-full px-6 py-4 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] focus:shadow-[2px_2px_0px_0px_#1A1A1A] focus:translate-x-[2px] focus:translate-y-[2px] outline-none appearance-none cursor-pointer text-[#1A1A1A] font-medium transition-all"
                                        >
                                            <option value="">Выберите цель</option>
                                            {goals.map((goal) => (
                                                <option key={goal.value} value={goal.value}>{goal.label}</option>
                                            ))}
                                        </select>
                                    )}
                                />
                                {errors.mainGoal && (
                                    <p className="text-red-500 text-sm ml-4">{errors.mainGoal.message}</p>
                                )}
                            </div>

                            {/* Phone (Optional) */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-[#1A1A1A]/80 ml-4">Телефон (опционально)</label>
                                <Input
                                    type="tel"
                                    {...register("phone")}
                                    placeholder="+420 123 456 789"
                                    className="px-6 py-4 rounded-xl bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] focus:shadow-[2px_2px_0px_0px_#1A1A1A] focus:translate-x-[2px] focus:translate-y-[2px] h-auto outline-none transition-all text-[#1A1A1A] font-medium"
                                />
                            </div>

                            {/* Consent */}
                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    id="consent-growth"
                                    {...register("consent")}
                                    className="mt-1 w-4 h-4 rounded border-[#1A1A1A]/20 text-[#FF3366] focus:ring-[#FF3366] cursor-pointer accent-[#FF3366]"
                                />
                                <label htmlFor="consent-growth" className="text-xs text-[#1A1A1A]/60 cursor-pointer">
                                    Принимаю{" "}
                                    <a href="/privacy" target="_blank" className="text-[#FF3366] hover:underline">
                                        политику конфиденциальности
                                    </a>
                                </label>
                            </div>
                            {errors.consent && (
                                <p className="text-red-500 text-xs ml-4">{errors.consent.message}</p>
                            )}

                            {/* Submit */}
                            <div className="pt-2">
                                {submitError && (
                                    <p className="text-red-500 text-sm text-center mb-3">{submitError}</p>
                                )}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#1A1A1A] text-white border-2 border-[#1A1A1A] px-10 py-5 rounded-2xl text-lg font-bold shadow-[4px_4px_0px_0px_#FFFFFF] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#FFFFFF] active:translate-y-1 active:translate-x-1 active:shadow-[0px_0px_0px_0px_#FFFFFF] transition-all disabled:opacity-70"
                                >
                                    {isSubmitting ? "Отправляем..." : (
                                        <>
                                            Получить план на 30 дней
                                            <ArrowRight className="w-5 h-5 ml-2 inline" />
                                        </>
                                    )}
                                </button>
                                <p className="text-xs text-[#1A1A1A]/40 text-center mt-3">
                                    Мы не передаём данные третьим лицам. Без спама.
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
