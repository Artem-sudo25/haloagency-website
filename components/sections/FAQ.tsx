"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HelpCircle, Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Сколько времени занимает разработка сайта?",
    answer:
      "Сроки зависят от сложности проекта. Лендинг мы обычно делаем за 1-2 недели, корпоративный сайт — за 3-4 недели, а сложные сервисы и интернет-магазины — от 1.5 месяцев. Мы всегда фиксируем сроки в договоре и соблюдаем их.",
  },
  {
    question: "Вы работаете по договору?",
    answer:
      "Да, конечно. Мы работаем официально, заключаем договор, в котором прописаны все этапы работ, сроки и стоимость. Предоставляем все необходимые закрывающие документы для бухгалтерии.",
  },
  {
    question: "Нужно ли мне предоставлять тексты и фото?",
    answer:
      "Если у вас есть готовый контент — отлично! Если нет — не проблема. Мы можем взять на себя написание продающих текстов и подбор/создание визуального контента. Это обсуждается на этапе брифинга.",
  },
  {
    question: "Будет ли сайт работать на мобильных устройствах?",
    answer:
      "Абсолютно. Mobile-first — наш стандарт. Мы проектируем интерфейсы так, чтобы они идеально выглядели и работали на любых устройствах: от смартфонов и планшетов до огромных мониторов.",
  },
  {
    question: "Что, если мне не понравится дизайн?",
    answer:
      "Мы работаем итеративно. Сначала утверждаем мудборд и стилистику, затем делаем прототип, и только потом — чистовой дизайн. На каждом этапе мы собираем вашу обратную связь и вносим правки, чтобы результат превзошел ожидания.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Частые вопросы
          </h2>
          <p className="text-slate-400 text-lg">
            Всё, что вы хотели узнать о процессе разработки, но стеснялись
            спросить.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border ${
                  openIndex === index
                    ? "bg-slate-800/50 border-blue-500/30 shadow-lg shadow-blue-500/10"
                    : "bg-slate-900/30 border-white/5 hover:bg-slate-800/30 hover:border-white/10"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`text-lg font-medium transition-colors ${
                      openIndex === index ? "text-blue-400" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      openIndex === index
                        ? "bg-blue-500 border-blue-500 rotate-180"
                        : "bg-white/5 border-white/10 group-hover:border-white/20"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    )}
                  </div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-slate-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
