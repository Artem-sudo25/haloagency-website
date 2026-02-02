"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rocket, CheckCircle2, ArrowRight, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { growthPlanSchema, type GrowthPlanData } from "@/lib/validations";
import { waitForHaloTrack, getHaloTrackSessionId, trackFormEvent, sendLeadToHaloTrack } from "@/lib/halotrack";

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

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm<GrowthPlanData>({
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
            case "service": return 15000; // High LTV potential
            case "local": return 8000;
            case "other": return 8000;
            default: return 8000;
        }
    };

    const onSubmit = async (data: GrowthPlanData) => {
        // ... (validation code same as before)
        const result = growthPlanSchema.safeParse(data);
        if (!result.success) {
            console.error("Validation failed:", result.error);
            const errorMessages = (result.error as any).errors.map((e: any) => `${e.path.join(".")}: ${e.message}`).join("\n");
            alert("Пожалуйста, заполните все обязательные поля:\n" + errorMessages);
            return;
        }

        setIsSubmitting(true);

        // Add selected checkboxes to data
        const formData = {
            ...data,
            triedBefore: selectedTried,
            session_id: haloSessionId,
        };

        const leadValue = getLeadValue(data.businessType);

        try {
            const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact);

            // Send to unified webhook
            const response = await fetch("/api/webhook/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "growth-plan",
                    session_id: haloSessionId,
                    // Original Keys (Source of Truth for n8n)
                    websiteOrProfile: formData.websiteOrProfile,
                    businessType: formData.businessType,
                    mainGoal: formData.mainGoal,
                    mainProblem: formData.mainProblem,
                    contact: formData.contact,
                    email: isEmail ? formData.contact : undefined,
                    contact_method: isEmail ? "email" : "other",
                    triedBefore: selectedTried,
                    // Metadata
                    value: leadValue,
                    currency: "CZK",
                    source: "growth_plan_form",
                    consent_given: true,
                    timestamp: new Date().toISOString()
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to submit");
            }

            // Track conversion (Event)
            trackFormEvent("growth_plan_submit", {
                business_type: data.businessType,
                goal: data.mainGoal,
                value: leadValue,
                const leadId = crypto.randomUUID();

                // Facebook Browser Pixel - Lead Event
                // @ts-ignore
                if(typeof window.fbq === 'function') {
                // @ts-ignore
                window.fbq('track', 'Lead', {
                    content_name: 'growth_plan',
                    currency: 'CZK',
                    value: leadValue,
                }, { eventID: leadId });
            }

            // Send Lead Direct (Client-Side Attribution)
            sendLeadToHaloTrack({
                lead_id: leadId,
                source: "growth_plan_form",
                form_type: "growth-plan",
                email: data.contact, // Uses normalized contact (email/phone)
                name: "",
                phone: "",
                message: data.mainProblem,
                session_id: haloSessionId,
                consent_given: true,
                lead_value: leadValue,
                currency: "CZK",
                custom_fields: {
                    business_type: data.businessType,
                    goal: data.mainGoal,
                    website: data.websiteOrProfile,
                    tried: data.triedBefore
                }
            });

            setShowSuccess(true);
            reset();
            setSelectedTried([]);
        } catch (error) {
            console.error("Failed to submit:", error);
            // Optionally set error state here if UI supports it
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="growth-plan"
            className="py-16 md:py-24 px-4 bg-ha-bg border-y border-ha-border-dark relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

            <div className="container mx-auto max-w-4xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 mb-6 relative">
                        <div className="absolute inset-0 rounded-full bg-orange-500/30 blur-xl" />
                        <AlertTriangle className="w-8 h-8 text-orange-500 relative z-10" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Бесплатный план роста на 30 дней
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-2">
                        Ответьте на несколько коротких вопросов — мы посмотрим вашу ситуацию
                        и предложим конкретные шаги для роста бизнеса.
                    </p>
                    <p className="text-sm text-slate-500">
                        Займёт 2–3 минуты. Ответим в течение 2 часов.
                    </p>
                </motion.div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm"
                >
                    {showSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-12"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
                                <CheckCircle2 className="w-8 h-8 text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">
                                Спасибо! Заявка отправлена
                            </h3>
                            <p className="text-slate-400 max-w-md mx-auto">
                                Мы изучим вашу ситуацию и ответим в течение 2 часов с
                                персональным планом роста.
                            </p>
                            <Button
                                onClick={() => setShowSuccess(false)}
                                variant="outline"
                                className="mt-6 rounded-full border-white/20 text-white hover:bg-white/10"
                            >
                                Отправить ещё
                            </Button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit, (errors) => alert("Validation Error: " + JSON.stringify(errors)))} className="space-y-6">
                            {/* 1. Website or Profile */}
                            <div>
                                <label className="block text-sm font-medium text-white mb-2">
                                    Сайт или профиль бизнеса
                                </label>
                                <Input
                                    {...register("websiteOrProfile")}
                                    placeholder="https:// или Instagram / Google Business"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-orange-500/50 rounded-xl h-12"
                                />
                                {errors.websiteOrProfile && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {errors.websiteOrProfile.message}
                                    </p>
                                )}
                            </div>

                            {/* 2. Business Type */}
                            <div>
                                <label className="block text-sm font-medium text-white mb-2">
                                    Тип бизнеса
                                </label>
                                <Controller
                                    name="businessType"
                                    control={control}
                                    render={({ field }) => (
                                        <select
                                            {...field}
                                            className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-orange-500/50 focus:outline-none appearance-none cursor-pointer"
                                        >
                                            <option value="" className="bg-slate-900">
                                                Выберите тип
                                            </option>
                                            {businessTypes.map((type) => (
                                                <option
                                                    key={type.value}
                                                    value={type.value}
                                                    className="bg-slate-900"
                                                >
                                                    {type.label}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                />
                                {errors.businessType && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {errors.businessType.message}
                                    </p>
                                )}
                            </div>

                            {/* 3. Main Goal */}
                            <div>
                                <label className="block text-sm font-medium text-white mb-2">
                                    Главная цель
                                </label>
                                <Controller
                                    name="mainGoal"
                                    control={control}
                                    render={({ field }) => (
                                        <select
                                            {...field}
                                            className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-orange-500/50 focus:outline-none appearance-none cursor-pointer"
                                        >
                                            <option value="" className="bg-slate-900">
                                                Выберите цель
                                            </option>
                                            {goals.map((goal) => (
                                                <option
                                                    key={goal.value}
                                                    value={goal.value}
                                                    className="bg-slate-900"
                                                >
                                                    {goal.label}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                />
                                {errors.mainGoal && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {errors.mainGoal.message}
                                    </p>
                                )}
                            </div>

                            {/* 4. What's been tried (multi-select checkboxes) */}
                            <div>
                                <label className="block text-sm font-medium text-white mb-3">
                                    Что уже пробовали?
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {triedOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            type="button"
                                            onClick={() => toggleTried(option.value)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedTried.includes(option.value)
                                                ? "bg-orange-500/20 border-orange-500/50 text-orange-300 border"
                                                : "bg-white/5 border-white/10 text-slate-400 border hover:bg-white/10 hover:text-white"
                                                }`}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* 5. Main Problem */}
                            <div>
                                <label className="block text-sm font-medium text-white mb-2">
                                    Что сейчас больше всего мешает росту?
                                </label>
                                <textarea
                                    {...register("mainProblem")}
                                    placeholder="Мало заявок / реклама не окупается / не понимаю, что работает"
                                    rows={2}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-orange-500/50 focus:outline-none resize-none"
                                />
                                {errors.mainProblem && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {errors.mainProblem.message}
                                    </p>
                                )}
                            </div>

                            {/* 6. Contact */}
                            <div>
                                <label className="block text-sm font-medium text-white mb-2">
                                    Email для ответа
                                </label>
                                <Input
                                    type="email"
                                    {...register("contact")}
                                    placeholder="your@email.com"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-blue-500/50 rounded-xl h-12"
                                />
                                <p className="text-xs text-slate-500 mt-1">
                                    Ответим в течение 2 часов в рабочее время
                                </p>
                                {errors.contact && (
                                    <p className="text-red-400 text-sm mt-1">
                                        {errors.contact.message}
                                    </p>
                                )}
                            </div>

                            {/* Consent */}
                            <div>
                                <div className="flex items-start gap-2 mt-2">
                                    <input
                                        type="checkbox"
                                        id="consent-growth"
                                        {...register("consent")}
                                        className="mt-1 w-4 h-4 rounded bg-white/5 border-white/10 text-orange-500 focus:ring-orange-500 bg-slate-900 cursor-pointer"
                                    />
                                    <label htmlFor="consent-growth" className="text-xs text-slate-400 cursor-pointer">
                                        Согласен с{" "}
                                        <a href="/privacy" target="_blank" className="text-orange-400 hover:text-orange-300 underline">
                                            политикой конфиденциальности
                                        </a>
                                    </label>
                                </div>
                                {errors.consent && (
                                    <p className="text-red-400 text-xs mt-1">
                                        {errors.consent.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-14 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium text-lg shadow-lg shadow-orange-500/25"
                                >
                                    {isSubmitting ? (
                                        "Отправляем..."
                                    ) : (
                                        <>
                                            Получить план на 30 дней
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </>
                                    )}
                                </Button>
                                <p className="text-xs text-slate-500 text-center mt-3">
                                    Мы не передаём данные третьим лицам. Без спама.
                                </p>
                            </div>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
