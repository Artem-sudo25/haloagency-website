"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactModalActions } from "@/context/contact-modal-context";

type HeaderMode = "default" | "lp";
type TrafficSource = "meta" | "google" | "other";

interface HeaderProps {
    mode?: HeaderMode;
    trafficSource?: TrafficSource;
}

const navLinks = [
    {
        name: "Услуги",
        href: "/#services",
        dropdown: [
            { name: "Разработка сайтов", href: "/web" },
            { name: "Реклама (Ads)", href: "/ads" },
            { name: "Трекинг и аналитика", href: "/tracking" },
            { name: "Автоматизация", href: "/automation" },
        ],
    },
    { name: "Кейсы", href: "/#projects" },
    { name: "Пакеты", href: "/packages" },
    { name: "О нас", href: "/#about" },
];

export default function Header({ mode = "default", trafficSource = "other" }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const { open: openContactModal } = useContactModalActions();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (mode === "lp") {
        const sourceLabel =
            trafficSource === "meta"
                ? "Meta Ads"
                : trafficSource === "google"
                    ? "Google Ads"
                    : null;

        const ctaLabel =
            trafficSource === "google"
                ? "Получить план запуска"
                : "Записаться бесплатно";

        return (
            <header className="fixed left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:right-auto md:w-[calc(100%-3rem)] md:max-w-6xl z-[9999] top-3 bg-white/80 backdrop-blur-xl shadow-sm py-3 rounded-2xl border border-[#1A1A1A]/5">
                <div className="w-full px-5 md:px-8 flex items-center justify-between gap-3">
                    <Link href="/" className="flex-shrink-0 relative flex items-center">
                        <span className="text-2xl font-extrabold tracking-tighter text-[#1A1A1A]" style={{ fontFamily: 'var(--font-display)' }}>
                            HALO<span className="text-[#FF3366]">AGENCY</span>
                        </span>
                    </Link>

                    <div className="flex items-center gap-2">
                        {sourceLabel && (
                            <span className="hidden md:inline-flex text-xs font-medium text-[#FF3366] bg-[#FF3366]/10 border border-[#FF3366]/20 rounded-full px-3 py-1">
                                {sourceLabel}
                            </span>
                        )}
                        <Button asChild className="rounded-full bg-[#FF3366] hover:bg-[#FF3366]/90 text-white px-4 md:px-6 h-10 text-sm font-bold">
                            <Link href="#audit-form">{ctaLabel}</Link>
                        </Button>
                    </div>
                </div>
            </header>
        );
    }

    return (
        <>
            <header
                className={`fixed left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:right-auto md:w-[calc(100%-3rem)] md:max-w-6xl z-[9999] transition-all duration-300 rounded-2xl border-2 ${scrolled || mobileMenuOpen
                    ? "top-3 bg-white border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] py-3"
                    : "top-4 bg-white/90 backdrop-blur-lg shadow-[4px_4px_0px_0px_#1A1A1A] border-[#1A1A1A] py-4"
                    }`}
            >
                <div className="w-full px-5 md:px-8 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 relative flex items-center">
                        <span className="text-2xl font-extrabold tracking-tighter text-[#1A1A1A]" style={{ fontFamily: 'var(--font-display)' }}>
                            HALO<span className="text-[#FF3366]">AGENCY</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className="text-sm font-semibold text-[#1A1A1A]/80 hover:text-[#FF3366] transition-colors flex items-center gap-1"
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                                </Link>

                                {/* Dropdown */}
                                {link.dropdown && (
                                    <AnimatePresence>
                                        {activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-56"
                                            >
                                                <div className="bg-white border-2 border-[#1A1A1A] rounded-xl shadow-[4px_4px_0px_0px_#1A1A1A] overflow-hidden">
                                                    {link.dropdown.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="block px-4 py-3 text-sm font-bold text-[#1A1A1A] hover:bg-[#FFD166] transition-colors"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button
                            onClick={() => openContactModal()}
                            className="bg-white hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border-2 border-[#1A1A1A] font-bold rounded-xl px-6 shadow-[2px_2px_0px_0px_#1A1A1A] hover:-translate-y-[1px] hover:-translate-x-[1px] hover:shadow-[4px_4px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                        >
                            Связаться
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        type="button"
                        className="md:hidden text-[#1A1A1A] p-2 flex-shrink-0 bg-white rounded-lg border-2 border-[#1A1A1A] hover:bg-[#FFD166] transition-all shadow-[2px_2px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {
                    mobileMenuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 top-0 z-[9997] bg-black/20 backdrop-blur-sm md:hidden"
                                onClick={() => setMobileMenuOpen(false)}
                            />
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="fixed left-4 right-4 top-[84px] z-[9998] bg-white border-2 border-[#1A1A1A] rounded-2xl shadow-[6px_6px_0px_0px_#1A1A1A] p-6 md:hidden"
                            >
                                <nav className="flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        <div key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-lg font-bold text-[#1A1A1A] block py-2"
                                                onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                            {link.dropdown && (
                                                <div className="pl-4 flex flex-col gap-1 border-l-2 border-[#FF3366]/20 ml-2">
                                                    {link.dropdown.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="text-base text-[#1A1A1A]/60 hover:text-[#FF3366] transition-colors block py-1.5"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <Button
                                        size="lg"
                                        className="w-full mt-4 rounded-xl bg-white text-[#1A1A1A] hover:text-white hover:bg-[#1A1A1A] border-2 border-[#1A1A1A] font-bold shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] active:translate-y-[1px] active:translate-x-[1px] active:shadow-[0px_0px_0px_0px_#1A1A1A] transition-all"
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            openContactModal();
                                        }}
                                    >
                                        Связаться с нами
                                    </Button>
                                </nav>
                            </motion.div>
                        </>
                    )
                }
            </AnimatePresence>
        </>
    );
}
