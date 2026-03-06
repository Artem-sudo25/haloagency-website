"use client";

import { Minus, Plus, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { CSSScrollAnimation, CSSStagger, CSSStaggerItem } from "@/components/ui/css-scroll-animation";

const faqs = [
  {
    question: "Какие сайты вы разрабатываете?",
    answer: (
      <>
        <p className="mb-3">
          Мы создаём современные лендинги и многостраничные сайты, ориентированные на привлечение клиентов и рост бизнеса.
        </p>
        <p className="mb-2">Чаще всего с нами работают:</p>
        <ul className="list-disc list-inside mb-3 space-y-1 text-[#1A1A1A]/80">
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
        <ul className="list-disc list-inside mb-3 space-y-1 text-[#1A1A1A]/80">
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
        <ul className="list-disc list-inside mb-3 space-y-1 text-[#1A1A1A]/80">
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
        <ul className="list-disc list-inside mb-3 space-y-1 text-[#1A1A1A]/80">
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
        <ul className="list-disc list-inside mb-3 space-y-1 text-[#1A1A1A]/80">
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
        <ul className="list-disc list-inside mb-3 space-y-1 text-[#1A1A1A]/80">
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
        <ul className="list-disc list-inside mb-3 space-y-1 text-[#1A1A1A]/80">
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
        <ul className="list-disc list-inside mb-3 space-y-1 text-[#1A1A1A]/80">
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
    <section id="faq" className="py-16 md:py-24 px-4 relative overflow-hidden bg-[#F5F5F7] border-y-2 border-[#1A1A1A]">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#118AB2]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#06D6A0]/10 rounded-full blur-[100px]" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-[#06D6A0] border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] mb-6">
            <ShieldCheck className="w-5 h-5 text-[#1A1A1A]" />
            <span className="text-sm font-bold text-[#1A1A1A]">Частые вопросы</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#1A1A1A]" style={{ fontFamily: 'var(--font-display)' }}>
            Вопросы о<br className="hidden md:block" /> веб-разработке
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
                    ? "bg-[#06D6A0] shadow-[0px_0px_0px_0px_#1A1A1A] translate-y-[2px] translate-x-[2px]"
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
                        : "bg-white group-hover:bg-[#FFD166] text-[#1A1A1A]"
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
      </div>
    </section>
  );
}

