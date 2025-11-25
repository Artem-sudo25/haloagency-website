"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings } from "lucide-react";
import { Button } from "./button";
import {
  hasConsented,
  acceptAllCookies,
  rejectAllCookies,
  saveConsentPreferences,
  getConsentPreferences,
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
    // Check if user has already consented
    if (!hasConsented()) {
      // Show banner after 1 second delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    rejectAllCookies();
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    saveConsentPreferences(preferences);
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="max-w-7xl mx-auto">
          {/* Main Banner */}
          {!showSettings ? (
            <div className="relative bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-[2px]">
                      <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center">
                        <Cookie className="w-6 h-6 text-blue-400" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-white mb-2">
                      Мы используем cookies
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Мы используем необходимые cookies для работы сайта, а также
                      аналитические и маркетинговые cookies для улучшения вашего опыта.
                      Вы можете выбрать, какие cookies разрешить.
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:flex-shrink-0">
                    <Button
                      onClick={handleAcceptAll}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 text-sm font-medium rounded-lg shadow-lg shadow-blue-500/25"
                    >
                      Принять все
                    </Button>
                    <Button
                      onClick={() => setShowSettings(true)}
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-6 py-2.5 text-sm font-medium rounded-lg"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Настроить
                    </Button>
                    <Button
                      onClick={handleRejectAll}
                      variant="ghost"
                      className="text-slate-400 hover:text-white hover:bg-slate-800 px-6 py-2.5 text-sm font-medium rounded-lg"
                    >
                      Отклонить
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Settings Panel */
            <div className="relative bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Настройки cookies
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/30">
                    <div className="flex-grow">
                      <h4 className="text-sm font-semibold text-white mb-1">
                        Необходимые cookies
                      </h4>
                      <p className="text-xs text-slate-400">
                        Требуются для базовой работы сайта. Не могут быть отключены.
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-6 bg-green-500/20 rounded-full flex items-center px-1">
                        <div className="w-4 h-4 bg-green-500 rounded-full ml-auto" />
                      </div>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/30">
                    <div className="flex-grow">
                      <h4 className="text-sm font-semibold text-white mb-1">
                        Аналитические cookies
                      </h4>
                      <p className="text-xs text-slate-400">
                        Помогают понять, как посетители используют сайт (Google Analytics).
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setPreferences((prev) => ({
                          ...prev,
                          analytics: !prev.analytics,
                        }))
                      }
                      className="flex-shrink-0"
                      aria-label="Toggle analytics cookies"
                    >
                      <div
                        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                          preferences.analytics
                            ? "bg-blue-500/20"
                            : "bg-slate-700"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full transition-all ${
                            preferences.analytics
                              ? "bg-blue-500 ml-auto"
                              : "bg-slate-500"
                          }`}
                        />
                      </div>
                    </button>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/30">
                    <div className="flex-grow">
                      <h4 className="text-sm font-semibold text-white mb-1">
                        Маркетинговые cookies
                      </h4>
                      <p className="text-xs text-slate-400">
                        Используются для таргетированной рекламы (Google Ads, Meta Pixel).
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setPreferences((prev) => ({
                          ...prev,
                          marketing: !prev.marketing,
                        }))
                      }
                      className="flex-shrink-0"
                      aria-label="Toggle marketing cookies"
                    >
                      <div
                        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                          preferences.marketing
                            ? "bg-blue-500/20"
                            : "bg-slate-700"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full transition-all ${
                            preferences.marketing
                              ? "bg-blue-500 ml-auto"
                              : "bg-slate-500"
                          }`}
                        />
                      </div>
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleSavePreferences}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 text-sm font-medium rounded-lg shadow-lg shadow-blue-500/25 flex-1"
                  >
                    Сохранить настройки
                  </Button>
                  <Button
                    onClick={() => setShowSettings(false)}
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-6 py-2.5 text-sm font-medium rounded-lg"
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
