import Link from "next/link";
import { Mail, Smartphone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-[#F5F5F7] pt-20 pb-10 border-t border-[#1A1A1A]/5">
            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Left Column - Branding & Contacts */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="text-2xl font-extrabold tracking-tighter text-[#1A1A1A] block" style={{ fontFamily: 'var(--font-display)' }}>
                            HALO<span className="text-[#FF3366]">AGENCY</span>
                        </Link>
                        <p className="max-w-xs text-[#1A1A1A]/60">
                            Digital-маркетинг для русскоязычного бизнеса в Праге
                        </p>

                        <div className="space-y-3 pt-2">
                            <a
                                href="mailto:hello@haloagency.cz"
                                className="flex items-center gap-3 hover:text-[#FF3366] transition-colors group text-[#1A1A1A]/80"
                            >
                                <div className="w-8 h-8 rounded-full bg-[#FF3366]/10 flex items-center justify-center group-hover:bg-[#FF3366]/20 transition-colors">
                                    <Mail className="w-4 h-4 text-[#FF3366]" />
                                </div>
                                hello@haloagency.cz
                            </a>
                            <div className="flex items-center gap-3 text-[#1A1A1A]/80">
                                <div className="w-8 h-8 rounded-full bg-[#FF3366]/10 flex items-center justify-center">
                                    <Smartphone className="w-4 h-4 text-[#FF3366]" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex gap-2">
                                        <a href="https://wa.me/420705729502" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3366] transition-colors">WhatsApp</a>
                                        <span>/</span>
                                        <a href="https://t.me/+420705729502" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF3366] transition-colors">Telegram</a>
                                    </div>
                                    <a href="tel:+420705729502" className="text-sm text-[#1A1A1A]/50 hover:text-[#FF3366] transition-colors">
                                        +420 705 729 502
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-[#1A1A1A] font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>Услуги</h3>
                        <ul className="space-y-4 text-[#1A1A1A]/60">
                            <li>
                                <Link href="/ads" className="hover:text-[#FF3366] transition-colors block">
                                    Meta Ads
                                </Link>
                            </li>
                            <li>
                                <Link href="/ads" className="hover:text-[#FF3366] transition-colors block">
                                    Google Ads
                                </Link>
                            </li>
                            <li>
                                <Link href="/web" className="hover:text-[#FF3366] transition-colors block">
                                    Веб-разработка
                                </Link>
                            </li>
                            <li>
                                <Link href="/automation" className="hover:text-[#FF3366] transition-colors block">
                                    Автоматизация
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-[#1A1A1A] font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>Компания</h3>
                        <ul className="space-y-4 text-[#1A1A1A]/60">
                            <li>
                                <Link href="/#about" className="hover:text-[#FF3366] transition-colors block">
                                    О нас
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="hover:text-[#FF3366] transition-colors block">
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-[#1A1A1A]/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#1A1A1A]/50">
                    <div>© 2026 HaloAgency.cz | Все права защищены</div>
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-[#FF3366] transition-colors">
                            Политика конфиденциальности
                        </Link>
                        <Link href="/terms-of-service" className="hover:text-[#FF3366] transition-colors">
                            Условия использования
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
