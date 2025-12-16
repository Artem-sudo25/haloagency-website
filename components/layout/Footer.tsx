import Link from "next/link";
import { Mail, Smartphone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-ha-bg pt-16 pb-8 border-t border-white/10 text-slate-400">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Left Column - Branding & Contacts */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="text-2xl font-bold text-white block">
                            HaloAgency<span className="text-blue-500">.cz</span>
                        </Link>
                        <p className="max-w-xs text-slate-400">
                            Digital-маркетинг для русскоязычного бизнеса в Праге
                        </p>

                        <div className="space-y-3 pt-2">
                            <a
                                href="mailto:info@haloagency.cz"
                                className="flex items-center gap-3 hover:text-white transition-colors group"
                            >
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-400" />
                                </div>
                                info@haloagency.cz
                            </a>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                    <Smartphone className="w-4 h-4 text-slate-400" />
                                </div>
                                <span>WhatsApp / Telegram</span>
                            </div>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Услуги</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/ads" className="hover:text-blue-400 transition-colors block">
                                    • Meta Ads
                                </Link>
                            </li>
                            <li>
                                <Link href="/ads" className="hover:text-blue-400 transition-colors block">
                                    • Google Ads
                                </Link>
                            </li>
                            <li>
                                <Link href="/web" className="hover:text-blue-400 transition-colors block">
                                    • Веб-разработка
                                </Link>
                            </li>
                            <li>
                                <Link href="/automation" className="hover:text-blue-400 transition-colors block">
                                    • Автоматизация
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Компания</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/#about" className="hover:text-blue-400 transition-colors block">
                                    • О нас
                                </Link>
                            </li>
                            <li>
                                <Link href="/#projects" className="hover:text-blue-400 transition-colors block">
                                    • Кейсы
                                </Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="hover:text-blue-400 transition-colors block">
                                    • Контакты
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <div>© 2024 HaloAgency.cz | Все права защищены</div>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
