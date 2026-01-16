"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContactModal } from "@/context/contact-modal-context";
import { waitForHaloTrack, getHaloTrackSessionId, trackFormEvent, sendLeadToHaloTrack } from "@/lib/halotrack";

export function ContactModal() {
    const { isOpen, close, prefilledData } = useContactModal();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [selectedService, setSelectedService] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
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

    const services = [
        { value: "web", label: "Разработка сайтов", color: "from-blue-500 to-blue-600" },
        { value: "ads", label: "Реклама (Ads)", color: "from-orange-500 to-red-500" },
        { value: "tracking", label: "Аналитика", color: "from-green-500 to-emerald-500" },
        { value: "package", label: "Пакет", color: "from-purple-500 to-pink-500" },
        { value: "other", label: "Другое", color: "from-slate-500 to-slate-600" },
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
            const isEmail = contact.includes("@");

            const response = await fetch("/api/webhook/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "contact",
                    // Unified Schema (Growth Plan compatible)
                    businessType: "Not specified",
                    mainGoal: selectedService, // Use Service as Goal
                    mainProblem: message,      // Use Message as Problem
                    websiteOrProfile: "Not specified",
                    contact: contact,

                    // Original context
                    name,
                    email: isEmail ? contact : undefined,
                    telegram: !isEmail ? contact : undefined,
                    contact_info: contact,
                    service: selectedService,
                    message,
                    session_id: haloSessionId,
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
                has_telegram: !isEmail
            });

            // Send Lead Direct (Client-Side)
            sendLeadToHaloTrack({
                lead_id: crypto.randomUUID(),
                source: "popup_modal",
                form_type: "contact",
                email: isEmail ? contact : "",
                name: name,
                phone: !isEmail ? contact : "", // Telegram usually mapped here or as custom
                message: message,
                session_id: haloSessionId,
                consent_given: true,
                lead_value: 0,
                currency: "CZK",
                custom_fields: {
                    service: selectedService,
                    telegram: !isEmail ? contact : undefined,
                    preferred_method: isEmail ? "email" : "telegram"
                }
            });

            // Reset after showing success
            setTimeout(() => {
                close();
                setTimeout(() => {
                    setIsSuccess(false);
                    setSelectedService("");
                    setMessage("");
                    setName("");
                    setContact("");
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
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-ha-card-dark border border-ha-border-dark w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden pointer-events-auto relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={close}
                                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/10 z-10"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="p-8">
                                {isSuccess ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center">
                                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-8 h-8 text-green-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Заявка отправлена!</h3>
                                        <p className="text-slate-400">Мы свяжемся с вами в течение 24 часов.</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-8">
                                            <h2 className="text-2xl font-bold text-white mb-2">Обсудить проект</h2>
                                            <p className="text-slate-400">
                                                Оставьте заявку, и мы предложим лучшее решение для вашего бизнеса.
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-300">Имя</label>
                                                <Input
                                                    required
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    placeholder="Иван Иванов"
                                                    className="bg-slate-900/50 border-slate-700 focus:border-blue-500"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-300">Email или Telegram</label>
                                                <Input
                                                    required
                                                    value={contact}
                                                    onChange={(e) => setContact(e.target.value)}
                                                    placeholder="@username или email@example.com"
                                                    className="bg-slate-900/50 border-slate-700 focus:border-blue-500"
                                                />
                                            </div>

                                            {/* Service Selector */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-slate-300">Интересующая услуга</label>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {services.map((service) => (
                                                        <button
                                                            key={service.value}
                                                            type="button"
                                                            onClick={() => setSelectedService(service.value)}
                                                            className={`relative p-2.5 rounded-lg border transition-all duration-300 ${selectedService === service.value
                                                                ? 'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/20'
                                                                : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                                                                }`}
                                                        >
                                                            {selectedService === service.value && (
                                                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 rounded-lg`} />
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
                                                <label className="text-sm font-medium text-slate-300">О проекте</label>
                                                <Textarea
                                                    placeholder="Кратко о вашей задаче..."
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    className="bg-slate-900/50 border-slate-700 focus:border-blue-500 min-h-[100px] resize-none"
                                                />
                                            </div>

                                            {/* Consent */}
                                            <div>
                                                <div className="flex items-start gap-2 mt-4">
                                                    <input
                                                        type="checkbox"
                                                        id="consent-modal"
                                                        checked={consent}
                                                        onChange={(e) => setConsent(e.target.checked)}
                                                        className="mt-1 w-4 h-4 rounded bg-slate-900/50 border-slate-700 text-blue-500 focus:ring-blue-500 cursor-pointer"
                                                    />
                                                    <label htmlFor="consent-modal" className="text-sm text-slate-400 cursor-pointer">
                                                        Согласен с{" "}
                                                        <a href="/privacy" target="_blank" className="text-blue-400 hover:text-blue-300 underline">
                                                            политикой конфиденциальности
                                                        </a>
                                                    </label>
                                                </div>
                                                {error && (
                                                    <p className="text-red-400 text-xs mt-2 text-center">{error}</p>
                                                )}
                                            </div>

                                            <Button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-12 text-lg font-medium rounded-xl mt-4"
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
