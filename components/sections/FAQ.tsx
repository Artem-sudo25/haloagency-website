"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HelpCircle, Minus, Plus, ShieldCheck } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Вы больше про сайты, рекламу или автоматизацию?",
    answer:
      "Мы работаем с системой целиком. В зависимости от задачи фокус может быть на сайте, рекламе или процессах, но всё выстраивается как единое решение, а не отдельные разрозненные действия.",
  },
  {
    question: "Можно ли начать с одного направления и расширяться позже?",
    answer:
      "Да. Многие клиенты начинают с базового решения и переходят к более комплексному формату по мере роста бизнеса и задач",
  },
  {
    question: "Подойдёт ли ваш подход малому бизнесу?",
    answer: 
    "Да. Мы работаем с малым и средним бизнесом и выстраиваем решения, которые масштабируются — от простого старта до систем с автоматизацией и AI.",
  },
  {
    question: "Сколько участия требуется от меня как от владельца бизнеса?",
    answer:
    "Минимум. Мы берём на себя координацию и операционную часть, чтобы вы могли сосредоточиться на развитии бизнеса, а не на управлении подрядчиками.",
  },
  {
    question: "Как вы принимаете решения и понимаете, что делать дальше?",
    answer: 
    "Решения принимаются на основе данных, текущих целей бизнеса и результатов предыдущих шагов. Мы регулярно анализируем ситуацию и предлагаем следующий логичный шаг.",
  },
  {
    question: "Можно ли работать с вами, если у меня уже есть сайт или реклама?",
    answer:
      "Да. Мы часто подключаемся к существующим проектам, улучшаем текущие решения и выстраиваем систему вокруг того, что уже работае",
  },
  {
    question: "Работаете ли вы с бизнесом в Чехии и ориентируетесь на местный рынок?",
    answer:
      "Да. Мы работаем с бизнесом в Чехии и учитываем особенности локального рынка, конкуренции и поведения клиентов.",
  },
  {
    question: "Как понять, какой пакет мне подойдёт?",
    answer: 
    "На старте мы смотрим на цели бизнеса, текущую ситуацию и ресурсы, после чего рекомендуем оптимальный формат работы без переплаты за лишнее.",
  },
  {
    question: "Что если результат не оправдает ожиданий?",
    answer:
      "Мы работаем прозрачно: все данные, аккаунты и доступы остаются у вас. Вы видите, что делается и какие результаты это даёт. Если по ходу работы становится понятно, что формат не подходит, вы не остаетесь «привязаны» к агентству и сохраняете всю историю и настройки.",
  },
  {
    question: "Как начать работу и как с вами связаться?",
    answer:
      "Оставьте заявку через форму на сайте или напишите нам в Telegram или WhatsApp. Мы свяжемся с вами в течение 2 часов в рабочее время и подскажем следующий шаг.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 relative overflow-hidden bg-[#0A1628]">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Как мы работаем</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-purple-400">
            Частые вопросы о<br className="hidden md:block" /> работе с нами
          </h2>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full text-left p-4 md:p-5 rounded-xl transition-all duration-300 border ${openIndex === index
                    ? "bg-white/10 border-blue-500/50"
                    : "bg-transparent border-white/5 hover:bg-white/5 hover:border-white/20"
                    }`}
                >
                  <div className="flex items-start justify-between gap-3 md:gap-4">
                    <span
                      className={`text-base md:text-lg font-medium transition-colors ${openIndex === index ? "text-blue-400" : "text-white group-hover:text-blue-200"
                        }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 mt-1 ${openIndex === index
                        ? "bg-blue-500 border-blue-500 rotate-180"
                        : "bg-white/5 border-white/10 group-hover:border-white/30"
                        }`}
                    >
                      {openIndex === index ? (
                        <Minus className="w-3 h-3 text-white" />
                      ) : (
                        <Plus className="w-3 h-3 text-slate-400 group-hover:text-white" />
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
                        <div className="pt-4 text-slate-300 leading-relaxed text-base border-t border-white/5 mt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
