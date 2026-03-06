"use client";

import { HelpCircle, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CSSScrollAnimation, CSSStagger, CSSStaggerItem } from "@/components/ui/css-scroll-animation";

const faqs = [
  {
    question: "С какого рекламного канала лучше начать — Google, Meta или Seznam?",
    answer: (
      <>
        <p className="mb-3">Выбор канала зависит не только от ниши, но и от того, на каком этапе находится ваш бизнес.</p>
        <ul className="space-y-2 mb-3">
          <li className="flex gap-2">
            <span className="text-[#FF3366] font-extrabold">•</span>
            <span><strong className="text-[#1A1A1A] font-extrabold">Google Ads</strong> чаще всего подходит, когда клиент уже ищет конкретную услугу или решение.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#FF3366] font-extrabold">•</span>
            <span><strong className="text-[#1A1A1A] font-extrabold">Meta Ads</strong> хорошо работает для привлечения внимания и формирования спроса, особенно если услуга не ищется напрямую.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#FF3366] font-extrabold">•</span>
            <span><strong className="text-[#1A1A1A] font-extrabold">Seznam</strong> может быть эффективен для локального бизнеса и определённых категорий в Чехии.</span>
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
            <span className="text-[#FF3366] font-extrabold">•</span>
            <span>анализируем, где именно проблема</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#FF3366] font-extrabold">•</span>
            <span>корректируем стратегию или формат рекламы</span>
          </li>
          <li className="flex gap-2">
            <span className="text-[#FF3366] font-extrabold">•</span>
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
          <Link href="/web" className="text-[#FF3366] hover:text-[#1A1A1A] underline decoration-2 underline-offset-4 transition-colors font-bold">
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
          <Link href="/tracking" className="text-[#06D6A0] hover:text-[#1A1A1A] underline decoration-2 underline-offset-4 transition-colors font-bold">
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
    <section id="faq" className="py-16 md:py-24 px-4 relative overflow-hidden bg-[#F5F5F7] border-y-2 border-[#1A1A1A]">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF3366]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD166]/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#FFD166] border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] mb-6">
            <HelpCircle className="w-5 h-5 text-[#1A1A1A]" />
            <span className="text-sm font-bold text-[#1A1A1A]">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#1A1A1A]" style={{ fontFamily: 'var(--font-display)' }}>
            Частые вопросы о<br className="hidden md:block" /> рекламе
          </h2>
        </div>

        <CSSStagger className="bg-white border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] rounded-3xl p-6 md:p-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <CSSStaggerItem key={index} index={index} className="group">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full text-left p-4 md:p-5 rounded-xl transition-all duration-300 border-2 border-[#1A1A1A] ${openIndex === index
                    ? "bg-[#FFD166] shadow-[0px_0px_0px_0px_#1A1A1A] translate-y-[2px] translate-x-[2px]"
                    : "bg-white hover:bg-white shadow-[4px_4px_0px_0px_#1A1A1A] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
                    }`}
                >
                  <div className="flex items-start justify-between gap-3 md:gap-4">
                    <span
                      className={`text-base md:text-lg font-bold transition-colors ${openIndex === index ? "text-[#1A1A1A]" : "text-[#1A1A1A]"}`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-xl border-2 border-[#1A1A1A] flex items-center justify-center transition-all duration-300 mt-1 shadow-[2px_2px_0px_0px_#1A1A1A] ${openIndex === index
                        ? "bg-[#FF3366] text-white rotate-180"
                        : "bg-white group-hover:bg-[#06D6A0] text-[#1A1A1A]"
                        }`}
                    >
                      {openIndex === index ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                  {/* CSS-based accordion */}
                  <div
                    className={`grid transition-all duration-300 ease-out ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-4 text-[#1A1A1A]/80 font-medium leading-relaxed text-base border-t-2 border-[#1A1A1A]/10 mt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </button>
              </CSSStaggerItem>
            ))}
          </div>
        </CSSStagger>

        {/* Trust line */}
        <CSSScrollAnimation delay={0.2} className="text-center text-[#1A1A1A]/60 font-medium text-sm mt-10">
          Мы объясняем рекламу простым языком и не продаём то, что не принесёт результата.
        </CSSScrollAnimation>
      </div>
    </section>
  );
}

