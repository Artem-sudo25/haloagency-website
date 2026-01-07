"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ChevronRight, Loader2, Send, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { waitForHaloTrack, getHaloTrackSessionId } from "@/lib/halotrack";

// Form data from JSON structure
const formData = {
  form_meta: {
    title: "Бесплатный дизайн-концепт за 48 часов",
    description:
      "Ответьте на 6 вопросов, и нейросеть (под присмотром арт-директора) соберет для вас персональное демо.",
    estimated_time: "1 минута",
  },
  steps: [
    {
      step: 1,
      variable_name: "business_identity",
      question_text:
        "Давайте знакомиться. Как называется ваш проект и чем занимаетесь?",
      placeholder_text: "Например: HaloAgency, Digital-маркетинг для стартапов",
    },
    {
      step: 2,
      variable_name: "hero_headline",
      question_text:
        "Представьте первый экран сайта. Что там написано крупными буквами?",
      placeholder_text: "Например: Увеличиваем продажи в 2 раза с помощью AI",
    },
    {
      step: 3,
      variable_name: "visual_style",
      question_text: "Стиль и настроение бренда? Опишите 3 прилагательными.",
      placeholder_text: "Например: Минималистичный, дерзкий, футуристичный",
    },
    {
      step: 4,
      variable_name: "color_preference",
      question_text: "Какой цвет будет основным? (Можно просто словами)",
      placeholder_text: "Например: Кислотно-зеленый или глубокий синий",
    },
    {
      step: 5,
      variable_name: "key_features",
      question_text: "Самое главное: какие 3 услуги или фичи нужно выделить?",
      placeholder_text:
        "Например: Быстрая доставка, Гарантия результата, Поддержка 24/7",
    },
    {
      step: 6,
      variable_name: "email",
      question_text: "Куда отправить готовое демо?",
      placeholder_text: "Ваш email (мы не спамим, честно)",
    },
  ],
  cta_text: "Получить демо бесплатно",
};

export default function WebProjectForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [haloSessionId, setHaloSessionId] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const currentQuestion = formData.steps[currentStep];
  const totalSteps = formData.steps.length;

  // Load HaloTrack session ID on mount
  useEffect(() => {
    waitForHaloTrack().then(() => {
      const sessionId = getHaloTrackSessionId();
      setHaloSessionId(sessionId);
    });
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Focus input on step change
  useEffect(() => {
    // Only auto-focus if user has already started interacting with the form
    // This prevents keyboard from opening on page load on mobile
    if (inputRef.current && currentStep > 0) {
      inputRef.current.focus();
    }
  }, [currentStep]);

  // Restore previous answer when navigating back
  // biome-ignore lint/correctness/useExhaustiveDependencies: Restore answer on step change
  useEffect(() => {
    if (answers[currentQuestion.variable_name]) {
      setInputValue(answers[currentQuestion.variable_name]);
    } else {
      setInputValue("");
    }
  }, [currentStep, currentQuestion.variable_name, answers]);

  const submitToN8N = async (finalAnswers: Record<string, string>) => {
    setIsSubmitting(true);
    try {
      // Send to unified lead webhook
      await fetch("/api/webhook/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "web-project",
          ...finalAnswers,
          session_id: haloSessionId,
          source: "web_project_form",
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error("Failed to submit form:", error);
    } finally {
      setIsSubmitting(false);
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setInputValue("");
    setIsCompleted(false);
  };

  const handleNext = () => {
    if (!inputValue.trim()) return;

    const updatedAnswers = {
      ...answers,
      [currentQuestion.variable_name]: inputValue,
    };

    setAnswers(updatedAnswers);

    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      submitToN8N(updatedAnswers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && inputValue.trim()) {
      handleNext();
    }
  };

  const getProgress = () => {
    return ((currentStep + 1) / totalSteps) * 100;
  };

  if (isCompleted) {
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Заявка принята!
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Мы уже начали анализировать ваш проект{" "}
                <span className="text-blue-400 font-bold">
                  {answers.business_identity}
                </span>
                . В течение 48 часов мы подготовим персональное демо и отправим
                его на{" "}
                <span className="text-blue-400 font-bold">{answers.email}</span>
                .
              </p>

              <div className="bg-white/5 rounded-xl p-6 text-left mb-8 border border-white/10">
                <p className="text-slate-400 text-sm mb-2 uppercase tracking-wider font-semibold">
                  Ваш бриф:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li>
                    <span className="text-slate-500">Заголовок:</span>{" "}
                    {answers.hero_headline}
                  </li>
                  <li>
                    <span className="text-slate-500">Стиль:</span>{" "}
                    {answers.visual_style}
                  </li>
                  <li>
                    <span className="text-slate-500">Цвет:</span>{" "}
                    {answers.color_preference}
                  </li>
                  <li>
                    <span className="text-slate-500">Фичи:</span>{" "}
                    {answers.key_features}
                  </li>
                  <li>
                    <span className="text-slate-500">Email:</span>{" "}
                    {answers.email}
                  </li>
                </ul>
              </div>

              <Button
                onClick={handleReset}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl w-full md:w-auto"
              >
                Отлично, жду!
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <div id="project-form">
      <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl min-h-[300px] flex flex-col relative">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 z-20">
          <motion.div
            className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
            initial={{ width: 0 }}
            animate={{ width: `${getProgress()}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="flex-grow flex flex-col justify-center px-4 py-8 md:p-12 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-blue-400 font-mono">
                  Вопрос {currentStep + 1} из {totalSteps}
                </div>
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-sm text-slate-500 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" /> Назад
                  </button>
                )}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-tight">
                {currentQuestion.question_text}
              </h3>

              <div>
                <p className="text-slate-500 text-sm mb-2">
                  {currentQuestion.placeholder_text}
                </p>
                <input
                  // @ts-ignore
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && inputValue.trim()) {
                      e.preventDefault();
                      handleNext();
                    }
                  }}
                  placeholder="Ваш ответ..."
                  className="w-full bg-transparent border-b-2 border-white/20 py-3 text-lg text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!inputValue.trim() || isSubmitting}
                    className={`p-3 rounded-full transition-all duration-300 ${inputValue.trim() && !isSubmitting
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/25"
                      : "bg-slate-800 text-slate-600 cursor-not-allowed"
                      }`}
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : currentStep === totalSteps - 1 ? (
                      <Send className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
