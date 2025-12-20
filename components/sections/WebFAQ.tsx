"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShieldCheck } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Какие сайты вы разрабатываете?",
    answer: (
      <>
        <p className="mb-3">
          Мы создаём современные лендинги и многостраничные сайты, ориентированные на привлечение клиентов и рост бизнеса.
        </p>
        <p className="mb-2">Чаще всего с нами работают:</p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-slate-400">
          <li>сервисные компании,</li>
          <li>локальный бизнес в Чехии,</li>
          <li>проекты, которым важны скорость, SEO и готовность к рекламе.</li>
        </ul>
        <p>При необходимости также реализуем более сложные решения — формат всегда подбирается под задачу.</p>
      </>
    ),
  },
  {
    question: "На каких технологиях вы работаете?",
    answer: (
      <>
        <p className="mb-2">Мы используем современные web-технологии, включая Next.js, которые позволяют:</p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-slate-400">
          <li>добиться высокой скорости загрузки,</li>
          <li>улучшить видимость в Google,</li>
          <li>обеспечить стабильную работу под рекламным трафиком.</li>
        </ul>
        <p>Технические решения подбираются так, чтобы сайт был актуален не только сейчас, но и в будущем.</p>
      </>
    ),
  },
  {
    question: "Будет ли у сайта админка или возможность редактировать контент?",
    answer: (
      <>
        <p className="mb-2">Варианты управления сайтом подбираются индивидуально.</p>
        <p className="mb-2">В зависимости от задачи:</p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-slate-400">
          <li>можно реализовать удобную админку для самостоятельного редактирования,</li>
          <li>либо взять обновления и доработки на себя.</li>
        </ul>
        <p>Мы всегда предлагаем оптимальный вариант, чтобы сайт был удобным и не создавал лишних сложностей.</p>
      </>
    ),
  },
  {
    question: "Что если мне понадобятся изменения после запуска сайта?",
    answer: (
      <>
        <p className="mb-2">Это нормально — бизнес развивается.</p>
        <p className="mb-2">Вы можете:</p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-slate-400">
          <li>вносить изменения самостоятельно (если выбран соответствующий формат),</li>
          <li>или заказывать доработки у нас по мере необходимости.</li>
        </ul>
        <p>Все изменения обсуждаются заранее — вы всегда понимаете объём и стоимость работ.</p>
      </>
    ),
  },
  {
    question: "Что если у меня нет технического задания?",
    answer: (
      <>
        <p className="mb-2">Большинство клиентов приходят без готового ТЗ — и это абсолютно нормально.</p>
        <p className="mb-2">Мы помогаем:</p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-slate-400">
          <li>определить цель сайта,</li>
          <li>предложить структуру,</li>
          <li>выбрать формат, который лучше всего подойдёт бизнесу.</li>
        </ul>
        <p>Вам не нужно разбираться в технических деталях — мы проведём вас по всему процессу.</p>
      </>
    ),
  },
  {
    question: "Подойдёт ли сайт для Google Ads и Meta Ads?",
    answer: (
      <>
        <p className="mb-2">Да. Все сайты проектируются с учётом:</p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-slate-400">
          <li>рекламного трафика,</li>
          <li>структуры посадочных страниц,</li>
          <li>скорости и удобства для пользователей.</li>
        </ul>
        <p>Это особенно важно для бизнеса в Чехии, где реклама требует качественной подготовки сайта.</p>
      </>
    ),
  },
  {
    question: "Сколько времени занимает разработка сайта?",
    answer: (
      <>
        <p className="mb-2">Сроки зависят от формата и сложности проекта.</p>
        <p className="mb-2">В среднем:</p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-slate-400">
          <li>лендинг — от 1 до 2 недель,</li>
          <li>многостраничный сайт — до 3 недель.</li>
        </ul>
        <p>Мы заранее обсуждаем сроки и придерживаемся согласованного плана.</p>
      </>
    ),
  },
  {
    question: "Что если я не буду доволен результатом?",
    answer: (
      <>
        <p className="mb-2">Работа строится поэтапно и прозрачно.</p>
        <p className="mb-2">Вы:</p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-slate-400">
          <li>видите структуру и ключевые решения заранее,</li>
          <li>участвуете в согласовании,</li>
          <li>понимаете, как сайт будет работать на бизнес.</li>
        </ul>
        <p>Это позволяет избежать сюрпризов и получить именно тот результат, который вам нужен.</p>
      </>
    ),
  },
  {
    question: "С кем я буду общаться во время проекта?",
    answer: (
      <>
        <p className="mb-2">Вы общаетесь напрямую с человеком, который ведёт проект и отвечает за результат.</p>
        <p>Без лишних посредников и потери информации. Связь — Telegram, WhatsApp или email, как удобнее.</p>
      </>
    ),
  },
];

export default function WebFAQ() {
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
            <span className="text-sm font-medium text-blue-400">Частые вопросы</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-purple-400">
            Вопросы о<br className="hidden md:block" /> веб-разработке
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
                  className={`w-full text-left p-5 rounded-xl transition-all duration-300 border ${openIndex === index
                    ? "bg-white/10 border-blue-500/50"
                    : "bg-transparent border-white/5 hover:bg-white/5 hover:border-white/20"
                    }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`text-lg font-medium transition-colors pr-8 ${openIndex === index ? "text-blue-400" : "text-white group-hover:text-blue-200"
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

