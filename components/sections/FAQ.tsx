"use client";

import { AnimatePresence, motion } from "framer-motion";
import { HelpCircle, Minus, Plus, ShieldCheck } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Что вы о нас должны знать?",
    answer:
      "Мы работаем системно: выстраиваем связку сайта, рекламы, аналитики и процессов так, чтобы они усиливали друг друга. Это снижает хаос, экономит время и даёт предсказуемый результат.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Просто свяжитесь с нами через форму на сайте, WhatsApp или Telegram. Мы договоримся о бесплатной консультации (30-60 минут), где обсудим ваш бизнес, цели и текущую ситуацию. После этого подготовим предложение с четким планом действий и прогнозом результатов. Если вам подходит — начинаем работу в течение недели.",
  },
  {
    question: "Сколько стоит ваша работа?",
    answer: (
      <>
        Мы работаем по модели Setup + Retainer:
        <br />
        <br />
        <strong className="text-white">Setup (одноразово):</strong> 60,000 - 85,000 Kč (зависит от пакета)
        <br />
        <strong className="text-white">Monthly retainer:</strong> 15,000 - 20,000 Kč/месяц
        <br />
        <br />
        Setup включает разработку/доработку сайта, настройку аналитики, создание рекламных кампаний. Monthly retainer — управление кампаниями, оптимизация, отчетность и поддержка. Первым 5 клиентам предоставляем скидку 20% на setup.
      </>
    ),
  },
  {
    question: "Какие результаты можно ожидать и как быстро?",
    answer: (
      <>
        Реалистичные ожидания:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Первый месяц:</strong> Настройка, тестирование, сбор данных. Первые лиды/продажи появляются на 2-3 неделе.</li>
          <li><strong>Месяц 2-3:</strong> Оптимизация на основе данных. Стабилизация ROAS и CPL.</li>
          <li><strong>Месяц 3+:</strong> Масштабирование profitable каналов. Рост объемов.</li>
        </ul>
        <br />
        Конкретные цифры зависят от ниши, бюджета, качества продукта. Обычно ROAS: 3-5x для e-commerce, CPL: от 500 Kč для B2B услуг.
      </>
    ),
  },
  {
    question: "Кто будет управлять кампаниями и как часто будет отчетность?",
    answer: (
      <>
        Все кампании управляет лично Артем (основатель) или выделенный account manager (в пакете «Масштаб»). Отчетность:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Email-отчеты:</strong> Ежемесячно (пакет «Старт»), еженедельно («Рост», «Масштаб»)</li>
          <li><strong>Video calls:</strong> По запросу («Старт», «Рост») или еженедельно («Масштаб»)</li>
          <li><strong>Доступ к dashboards:</strong> Реальное время (все пакеты)</li>
        </ul>
        <br />
        Вы всегда в курсе, что происходит с вашими кампаниями.
      </>
    ),
  },
  {
    question: "Как вы подходите к стратегии и распределению бюджета между Meta, Google Ads и Sklik?",
    answer:
      "Мы начинаем с анализа вашей аудитории, воронки продаж и конкурентов. Затем тестируем каналы с небольшими бюджетами (20-30% от общего), анализируем данные (CPA, ROAS, качество лидов), перераспределяем бюджет в пользу profitable каналов и масштабируем то, что работает. Обычно: Meta для e-commerce и B2C, Google для поисковых запросов и B2B, Sklik для локального чешского рынка. Но всегда опираемся на данные, а не догадки.",
  },
  {
    question: "Есть ли у вас опыт с e-shop/компаниями с бюджетом 200K+ в месяц?",
    answer:
      "Да. Артем сам владел e-commerce бизнесом (NejBalonky.cz), где управлял рекламными бюджетами, настраивал tracking и оптимизировал конверсии. Знаем все этапы и подводные камни на личном опыте, а не по книгам. Работаем с клиентами, которые инвестируют от 50K до 300K+ в месяц на digital-маркетинг. Понимаем, как масштабировать, сохраняя profitable метрики.",
  },
  {
    question: "Кто готовит контент, креативы и видео для кампаний?",
    answer: (
      <>
        Зависит от пакета:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li><strong>Пакет «Старт»:</strong> Используем существующие материалы клиента + AI-генерация изображений/текстов</li>
          <li><strong>Пакет «Рост»:</strong> AI-генерация + базовый graphic design (Canva)</li>
          <li><strong>Пакет «Масштаб»:</strong> Привлекаем внешних креаторов (дизайнеров, копирайтеров, video-продюсеров) по необходимости</li>
        </ul>
        <br />
        Если у вас уже есть креативная команда — отлично, мы работаем с вашими материалами. Если нет — мы поможем организовать.
      </>
    ),
  },
  {
    question: "Как проходит аудит существующих аккаунтов?",
    answer:
      "Бесплатный аудит включает: анализ структуры кампаний, проверку tracking, аудит сайта (удобство, скорость, UX) и конкурентный анализ. Рекомендации (что улучшить и как). Результат: документ на 5-10 страниц с конкретными действиями. Даже если не начнем сотрудничество — вы получите ценные insights.",
  },
  {
    question: "Как работает разделение компетенций между вашей командой и нашим агентством?",
    answer:
      "Мы НЕ конкурируем с вашей внутренней командой, а дополняем. Мы: Стратегия, настройка, оптимизация рекламы, tracking, аналитика. Вы/ваша команда: Продукт, sales, customer service, общий бренд-менеджмент. Если у вас есть маркетолог — мы работаем вместе, делимся данными и insights. Если нет — берем полный процесс на себя. Гибкость — наше преимущество.",
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
