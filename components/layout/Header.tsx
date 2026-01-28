"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useContactModalActions } from "@/context/contact-modal-context";

const navLinks = [
    {
        name: "Услуги",
        href: "#",
        dropdown: [
            { name: "Разработка сайтов", href: "/web" },
            { name: "Реклама (Ads)", href: "/ads" },
            { name: "Трекинг и Аналитика", href: "/tracking" },
            { name: "Автоматизация", href: "/automation" },
        ],
    },
    { name: "Пакеты", href: "/packages" },

    { name: "О нас", href: "/#about" },
];

export default function Header() {
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

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${scrolled || mobileMenuOpen
                    ? "bg-ha-bg/80 backdrop-blur-md border-b border-white/5 py-4"
                    : "bg-ha-bg/40 backdrop-blur-sm py-6"
                    }`}
            >
                <div className="w-full px-4 md:px-8 flex items-center justify-between md:max-w-7xl md:mx-auto">
                    {/* Logo */}
                    <Link href="/" className="text-xl sm:text-2xl font-bold text-white tracking-tighter flex-shrink-0">
                        Halo<span className="text-blue-500">Agency</span>
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
                                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1"
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
                                                <div className="bg-ha-card-dark border border-ha-border-dark rounded-xl shadow-xl overflow-hidden">
                                                    {link.dropdown.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
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
                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border border-blue-500/20 shadow-lg shadow-blue-500/20 rounded-full px-6"
                        >
                            Связаться
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        type="button"
                        className="md:hidden text-white p-2 flex-shrink-0 bg-slate-900/90 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-slate-800/90 active:bg-slate-700/90 transition-colors shadow-lg"
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

            {/* Mobile Menu - Dropdown panel */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 top-[72px] z-[9997] bg-black/60 backdrop-blur-sm md:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="fixed left-4 right-4 top-[80px] z-[9998] bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6 md:hidden"
                        >
                            <nav className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <div key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-lg font-semibold text-white block py-2"
                                            onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.dropdown && (
                                            <div className="pl-4 flex flex-col gap-1 border-l border-white/10 ml-2">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="text-base text-slate-400 hover:text-white transition-colors block py-1.5"
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
                                    className="w-full mt-4 rounded-full bg-ha-primary text-white"
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
                )}
            </AnimatePresence>
        </>
    );
}
