"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Settings } from "lucide-react";
import { Button } from "./button";
import {
  hasConsented,
  acceptAllCookies,
  saveConsentPreferences,
} from "@/lib/consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    if (!hasConsented()) {
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    saveConsentPreferences(preferences);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="cookie-banner"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-[9000] px-4 sm:px-6"
      >
        <div className="max-w-2xl mx-auto">
          {!showSettings ? (
            <div className="relative bg-white/90 backdrop-blur-xl border border-[#1A1A1A]/5 rounded-2xl shadow-lg overflow-hidden">
              <div className="p-5 sm:p-7">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center">
                  <div className="hidden sm:block flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#FF3366]/10 flex items-center justify-center">
                      <Cookie className="w-6 h-6 text-[#FF3366]" />
                    </div>
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <p className="text-[15px] text-[#1A1A1A]/80 leading-relaxed">
                      Мы используем cookies для работы сайта и улучшения вашего опыта.
                    </p>
                  </div>
                  <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto">
                    <Button
                      onClick={handleAcceptAll}
                      className="bg-[#FF3366] hover:bg-[#FF3366]/90 text-white px-6 py-2.5 text-sm font-bold rounded-full shadow-sm flex-1 sm:flex-none"
                    >
                      Принять все
                    </Button>
                    <Button
                      onClick={() => setShowSettings(true)}
                      variant="outline"
                      className="border-[#1A1A1A]/10 text-[#1A1A1A]/80 hover:bg-gray-50 px-6 py-2.5 text-sm font-medium rounded-full flex-1 sm:flex-none"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Настроить
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative bg-white/90 backdrop-blur-xl border border-[#1A1A1A]/5 rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Настройки cookies
                </h3>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  {/* Necessary */}
                  <div className="flex items-start justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gray-50 border border-[#1A1A1A]/5">
                    <div className="flex-grow min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#1A1A1A] mb-1">Необходимые cookies</h4>
                      <p className="text-[10px] sm:text-xs text-[#1A1A1A]/60">Требуются для базовой работы сайта.</p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-10 sm:w-12 h-5 sm:h-6 bg-green-100 rounded-full flex items-center px-1">
                        <div className="w-3 sm:w-4 h-3 sm:h-4 bg-green-500 rounded-full ml-auto" />
                      </div>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-start justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gray-50 border border-[#1A1A1A]/5">
                    <div className="flex-grow min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#1A1A1A] mb-1">Аналитические cookies</h4>
                      <p className="text-[10px] sm:text-xs text-[#1A1A1A]/60">Помогают понять, как вы используете сайт.</p>
                    </div>
                    <button
                      onClick={() => setPreferences((prev) => ({ ...prev, analytics: !prev.analytics }))}
                      className="flex-shrink-0"
                      aria-label="Toggle analytics cookies"
                    >
                      <div className={`w-10 sm:w-12 h-5 sm:h-6 rounded-full flex items-center px-1 transition-colors ${preferences.analytics ? "bg-[#FF3366]/20" : "bg-gray-200"}`}>
                        <div className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full transition-all ${preferences.analytics ? "bg-[#FF3366] ml-auto" : "bg-gray-400"}`} />
                      </div>
                    </button>
                  </div>

                  {/* Marketing */}
                  <div className="flex items-start justify-between gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gray-50 border border-[#1A1A1A]/5">
                    <div className="flex-grow min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-[#1A1A1A] mb-1">Маркетинговые cookies</h4>
                      <p className="text-[10px] sm:text-xs text-[#1A1A1A]/60">Используются для таргетированной рекламы.</p>
                    </div>
                    <button
                      onClick={() => setPreferences((prev) => ({ ...prev, marketing: !prev.marketing }))}
                      className="flex-shrink-0"
                      aria-label="Toggle marketing cookies"
                    >
                      <div className={`w-10 sm:w-12 h-5 sm:h-6 rounded-full flex items-center px-1 transition-colors ${preferences.marketing ? "bg-[#FF3366]/20" : "bg-gray-200"}`}>
                        <div className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full transition-all ${preferences.marketing ? "bg-[#FF3366] ml-auto" : "bg-gray-400"}`} />
                      </div>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button
                    onClick={handleSavePreferences}
                    className="bg-[#FF3366] hover:bg-[#FF3366]/90 text-white px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-full flex-1"
                  >
                    Сохранить настройки
                  </Button>
                  <Button
                    onClick={() => setShowSettings(false)}
                    variant="outline"
                    className="border-[#1A1A1A]/10 text-[#1A1A1A]/80 hover:bg-gray-50 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-full"
                  >
                    Назад
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
