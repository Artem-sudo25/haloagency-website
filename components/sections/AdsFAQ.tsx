"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HelpCircle, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "С какого рекламного канала лучше начать — Google, Meta или Seznam?",
    answer: (
      <>
        <p className="mb-3">Выбор канала зависит не только от ниши, но и от того, на каком этапе находится ваш бизнес.</p>
        <ul className="space-y-2 mb-3">
          <li className="flex gap-2">
            <span className="text-orange-400">•</span>
            <span><strong className="text-white">Google Ads</strong> чаще всего подходит, когда клиент уже ищет конкретную услугу или решение.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-orange-400">•</span>
            <span><strong className="text-white">Meta Ads</strong> хорошо работает для привлечения внимания и формирования спроса, особенно если услуга не ищется напрямую.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-orange-400">•</span>
            <span><strong className="text-white">Seznam</strong> может быть эффективен для локального бизнеса и определённых категорий в Чехии.</span>
          </li>
        </ul>
        <p>Иногда лучший результат даёт комбинация каналов — мы подскажем, когда это имеет смысл.</p>
      </>
    ),
  },
  {
    question: "С каким бюджетом имеет смысл запускать рекламу в Чехии?",
    answer: (
      <>
        <p className="mb-3">Минимальный бюджет зависит от ниши и конкуренции.</p>
        <p className="mb-3">В большинстве случаев мы рекомендуем начинать с бюджета, который позволяет получить первые данные и понять, работает ли реклама для вашего бизнеса.</p>
        <p>Точные цифры обсуждаем до старта — без сюрпризов.</p>
      </>
    ),
  },
  {
    question: "Когда появятся первые заявки?",
    answer: (
      <>
        <p className="mb-3">В большинстве случаев первые результаты видны в течение первых дней или недель после запуска.</p>
        <p className="mb-3">Но стабильный и предсказуемый результат требует времени на тестирование и улучшение рекламы.</p>
        <p>Мы не «включаем и забываем» — реклама постепенно доводится до рабочей модели.</p>
      </>
    ),
  },
  {
    question: "Что если реклама не даст ожидаемого результата?",
    answer: (
      <>
        <p className="mb-3">Мы не увеличиваем бюджеты вслепую. Если реклама не показывает нужного результата, мы:</p>
        <ul className="space-y-2 mb-3">
          <li className="flex gap-2">
            <span className="text-orange-400">•</span>
            <span>анализируем, где именно проблема</span>
          </li>
          <li className="flex gap-2">
            <span className="text-orange-400">•</span>
            <span>корректируем стратегию или формат рекламы</span>
          </li>
          <li className="flex gap-2">
            <span className="text-orange-400">•</span>
            <span>честно говорим, если текущая модель неэффективна</span>
          </li>
        </ul>
        <p>Наша цель — не тратить ваш бюджет без смысла.</p>
      </>
    ),
  },
  {
    question: "Нужен ли сайт для запуска рекламы?",
    answer: (
      <>
        <p className="mb-3">Да, в большинстве случаев сайт или посадочная страница нужны.</p>
        <p className="mb-3">Если текущий сайт не готов к рекламе, мы заранее скажем об этом и предложим варианты улучшения.</p>
        <p>
          <Link href="/web" className="text-orange-400 hover:text-orange-300 underline underline-offset-4 transition-colors">
            Подробнее о доработке сайтов под рекламу →
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "Вы занимаетесь аналитикой и отслеживанием результатов?",
    answer: (
      <>
        <p className="mb-3">Для рекламы мы используем базовую аналитику, чтобы понимать, что работает, а что нет.</p>
        <p className="mb-3">Если проекту требуется более глубокая аналитика, мы предлагаем отдельное решение.</p>
        <p>
          <Link href="/tracking" className="text-orange-400 hover:text-orange-300 underline underline-offset-4 transition-colors">
            Подробнее об аналитике и трекинге →
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "Можно ли запустить рекламу без долгих контрактов?",
    answer: (
      <>
        <p className="mb-3">Да.</p>
        <p className="mb-3">Минимальный срок сотрудничества — 1 месяц.</p>
        <p>Вы не привязываетесь к долгосрочным договорам и можете принять решение на основе реальных результатов.</p>
      </>
    ),
  },
  {
    question: "Кто будет вести мою рекламу?",
    answer: (
      <>
        <p className="mb-3">Рекламой занимается специалист, который погружается именно в ваш бизнес, а не «менеджер по аккаунтам».</p>
        <p>Вы понимаете, что происходит с рекламой, и можете задать любой вопрос простым языком.</p>
      </>
    ),
  },
  {
    question: "Подходит ли ваша реклама для малого бизнеса?",
    answer: (
      <>
        <p className="mb-3">Да.</p>
        <p className="mb-3">Мы работаем с малым и средним бизнесом в Чехии и понимаем ограничения по бюджету и времени.</p>
        <p>Если реклама на текущем этапе не имеет смысла, мы скажем об этом честно.</p>
      </>
    ),
  },
];

export default function AdsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 relative overflow-hidden bg-[#0A1628]">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <HelpCircle className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-400">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white from-70% to-orange-400">
            Частые вопросы о<br className="hidden md:block" /> рекламе
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
                    ? "bg-white/10 border-orange-500/50"
                    : "bg-transparent border-white/5 hover:bg-white/5 hover:border-white/20"
                    }`}
                >
                  <div className="flex items-start justify-between gap-3 md:gap-4">
                    <span
                      className={`text-base md:text-lg font-medium transition-colors ${openIndex === index ? "text-orange-400" : "text-white group-hover:text-orange-200"
                        }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 mt-1 ${openIndex === index
                        ? "bg-orange-500 border-orange-500 rotate-180"
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

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          Мы объясняем рекламу простым языком и не продаём то, что не принесёт результата.
        </motion.p>
      </div>
    </section>
  );
}

