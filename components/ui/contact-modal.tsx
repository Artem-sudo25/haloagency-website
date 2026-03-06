"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactModalState, useContactModalActions } from "@/context/contact-modal-context";
import { waitForHaloTrack, getHaloTrackSessionId, trackFormEvent, sendLeadToHaloTrack } from "@/lib/halotrack";

export function ContactModal() {
    const { isOpen, prefilledData } = useContactModalState();
    const { close } = useContactModalActions();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [selectedService, setSelectedService] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [phone, setPhone] = useState("");
    const [haloSessionId, setHaloSessionId] = useState<string>("");
    const [consent, setConsent] = useState(false);
    const [error, setError] = useState("");

    // Load HaloTrack session ID on mount
    useEffect(() => {
        waitForHaloTrack().then(() => {
            setHaloSessionId(getHaloTrackSessionId());
        });
    }, []);

    // Set prefilled data when modal opens
    useEffect(() => {
        if (isOpen && prefilledData) {
            if (prefilledData.service) {
                setSelectedService(prefilledData.service);
            }
            if (prefilledData.message) {
                setMessage(prefilledData.message);
            }
        }
    }, [isOpen, prefilledData]);

    // Check if this is a package flow (hide service selector)
    const isPackageFlow = prefilledData?.package_name;

    const services = [
        { value: "web", label: "Разработка сайтов", color: "bg-[#A2D2FF]" },
        { value: "ads", label: "Реклама (Ads)", color: "bg-[#FFD166]" },
        { value: "tracking", label: "Аналитика", color: "bg-[#06D6A0]" },
        { value: "package", label: "Пакет", color: "bg-[#B19CD9]" },
        { value: "other", label: "Другое", color: "bg-[#F5F5F7]" },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!consent) {
            setError("Необходимо согласие с политикой конфиденциальности");
            return;
        }

        setIsLoading(true);
        setError("");

        try {
            const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);

            if (!isEmail) {
                setError("Введите корректный email");
                setIsLoading(false);
                return;
            }

            const leadValue = prefilledData?.value || 8000; // Default min 8000 as requested
            const leadCurrency = prefilledData?.currency || "CZK";
            const leadId = crypto.randomUUID(); // Generate ID upfront

            // Facebook Browser Pixel - Lead Event
            // @ts-ignore
            if (typeof window.fbq === 'function') {
                // @ts-ignore
                window.fbq('track', 'Lead', {
                    content_name: 'contact_modal',
                    currency: leadCurrency,
                    value: leadValue,
                }, { eventID: leadId });
            }

            // Google Ads Enhanced Conversions - Data Layer Push
            // @ts-ignore
            window.dataLayer = window.dataLayer || [];
            // @ts-ignore
            window.dataLayer.push({
                'event': 'generate_lead_v2',
                'eventID': leadId, // Deduplication ID
                'user_data': {
                    'email_address': contact,
                    'phone_number': phone
                }
            });

            const response = await fetch("/api/webhook/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Webhook-Secret": process.env.NEXT_PUBLIC_HALOTRACK_WEBHOOK_SECRET || "",
                },
                body: JSON.stringify({
                    type: "contact",
                    // Unified Schema (Growth Plan compatible)
                    businessType: "Not specified",
                    mainGoal: selectedService, // Use Service as Goal
                    mainProblem: message,      // Use Message as Problem
                    websiteOrProfile: "Not specified",
                    contact: contact,
                    email: contact,
                    phone: phone, // Optional phone
                    contact_method: "email",

                    // Original context
                    name,
                    contact_info: contact,
                    service: selectedService,
                    package_name: prefilledData?.package_name, // NEW: Package name if selected
                    message,

                    // Tracking
                    value: leadValue,
                    currency: leadCurrency,
                    session_id: haloSessionId,
                    lead_id: leadId, // <--- Pass generated ID for matching
                    consent_given: true,
                    timestamp: new Date().toISOString(),
                }),
            });

            const data = await response.json().catch(() => null);

            if (!response.ok) {
                console.error("Submission failed:", data);
                throw new Error(data?.error || "Ошибка сервера");
            }

            setIsLoading(false);
            setIsSuccess(true);

            // Track conversion (Event)
            trackFormEvent("contact_form_submit", {
                service: selectedService,
                has_email: isEmail,
                has_telegram: !isEmail,
                value: leadValue,
            });





            // Send Lead Direct (Client-Side) - REMOVED to avoid duplication
            // The server-side webhook now forwards the lead to HaloTrack with the SAME leadId
            // which enables deduplication with the CAPI event forwarded by HaloTrack.


            // Reset after showing success
            setTimeout(() => {
                close();
                setTimeout(() => {
                    setIsSuccess(false);
                    setSelectedService("");
                    setMessage("");
                    setName("");
                    setContact("");
                    setPhone("");
                    setConsent(false);
                }, 300);
            }, 2000);
        } catch (err) {
            console.error(err);
            setIsLoading(false);
            setError(err instanceof Error ? err.message : "Произошла ошибка при отправке");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={close}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000]"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-[10001] p-4 sm:p-6 flex justify-center items-start sm:items-center overflow-y-auto pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-white border-2 border-[#1A1A1A] w-full max-w-lg rounded-3xl shadow-[8px_8px_0px_0px_#1A1A1A] pointer-events-auto relative my-8 sm:my-auto shrink-0"
                        >
                            {/* Close Button */}
                            <button
                                onClick={close}
                                className="absolute top-4 right-4 p-2 text-[#1A1A1A]/40 hover:text-[#FF3366] transition-all duration-300 rounded-full hover:bg-[#FF3366]/10 z-10 hover:rotate-90"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-8">
                                {isSuccess ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center">
                                        <div className="w-16 h-16 bg-[#06D6A0]/20 border-2 border-[#1A1A1A] rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_#1A1A1A]">
                                            <CheckCircle2 className="w-8 h-8 text-[#06D6A0]" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: 'var(--font-display)' }}>Заявка отправлена!</h3>
                                        <p className="text-[#1A1A1A]/60 font-medium">Мы свяжемся с вами в течение 24 часов.</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-8">
                                            <h2 className="text-3xl font-extrabold text-[#1A1A1A] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                                {isPackageFlow ? `Пакет "${prefilledData.package_name}"` : "Обсудить проект"}
                                            </h2>
                                            <p className="text-[#1A1A1A]/60 font-medium">
                                                {isPackageFlow
                                                    ? "Оставьте контакты, и мы свяжемся с вами для уточнения деталей."
                                                    : "Оставьте заявку, и мы предложим лучшее решение для вашего бизнеса."
                                                }
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#1A1A1A]">Имя</label>
                                                <input
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="Иван Иванов"
                                                    className="w-full rounded-xl bg-white border-2 border-[#1A1A1A] px-4 py-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:shadow-[4px_4px_0px_0px_#FF3366] focus:-translate-y-[1px] focus:-translate-x-[1px] transition-all"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#1A1A1A]">Email</label>
                                                <input
                                                    required
                                                    type="email"
                                                    value={contact}
                                                    onChange={(e) => setContact(e.target.value)}
                                                    placeholder="email@example.com"
                                                    className="w-full rounded-xl bg-white border-2 border-[#1A1A1A] px-4 py-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:shadow-[4px_4px_0px_0px_#FF3366] focus:-translate-y-[1px] focus:-translate-x-[1px] transition-all"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#1A1A1A]">Телефон <span className="text-[#1A1A1A]/40 font-normal">(необязательно)</span></label>
                                                <input
                                                    type="tel"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    placeholder="+420 123 456 789"
                                                    className="w-full rounded-xl bg-white border-2 border-[#1A1A1A] px-4 py-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:shadow-[4px_4px_0px_0px_#FF3366] focus:-translate-y-[1px] focus:-translate-x-[1px] transition-all"
                                                />
                                            </div>

                                            {/* Service Selector - Hidden for package flow */}
                                            {!isPackageFlow && (
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-[#1A1A1A]">Интересующая услуга</label>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {services.map((service) => (
                                                            <button
                                                                key={service.value}
                                                                type="button"
                                                                onClick={() => setSelectedService(service.value)}
                                                                className={`relative p-2.5 rounded-xl border-2 transition-all duration-300 font-bold text-xs ${selectedService === service.value
                                                                    ? `border-[#1A1A1A] ${service.color} text-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] -translate-y-[2px] -translate-x-[2px]`
                                                                    : 'border-[#1A1A1A] bg-white text-[#1A1A1A]/60 hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[4px_4px_0px_0px_#1A1A1A] hover:text-[#1A1A1A]'
                                                                    }`}
                                                            >
                                                                {service.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-[#1A1A1A]">О проекте</label>
                                                <textarea
                                                    placeholder="Кратко о вашей задаче..."
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    rows={3}
                                                    className="w-full rounded-xl bg-white border-2 border-[#1A1A1A] px-4 py-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:shadow-[4px_4px_0px_0px_#FF3366] focus:-translate-y-[1px] focus:-translate-x-[1px] transition-all resize-none"
                                                />
                                            </div>

                                            {/* Consent */}
                                            <div>
                                                <div className="flex items-start gap-3 mt-4">
                                                    <input
                                                        type="checkbox"
                                                        id="consent-modal"
                                                        checked={consent}
                                                        onChange={(e) => setConsent(e.target.checked)}
                                                        className="mt-1 h-4 w-4 rounded border-[#1A1A1A]/10 bg-[#F5F5F7] accent-[#FF3366] cursor-pointer"
                                                    />
                                                    <label htmlFor="consent-modal" className="text-sm text-[#1A1A1A]/60 cursor-pointer font-medium">
                                                        Согласен с{" "}
                                                        <a href="/privacy-policy" target="_blank" className="text-[#FF3366] hover:text-[#FF3366]/80 underline underline-offset-4 font-bold">
                                                            политикой конфиденциальности
                                                        </a>
                                                    </label>
                                                </div>
                                                {error && (
                                                    <p className="text-red-500 font-bold text-xs mt-2 text-center">{error}</p>
                                                )}
                                            </div>

                                            <Button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full rounded-xl h-12 bg-[#FF3366] hover:bg-[#FF3366] text-white font-bold border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all mt-4 text-base"
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                        Отправка...
                                                    </>
                                                ) : (
                                                    "Отправить заявку"
                                                )}
                                            </Button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
