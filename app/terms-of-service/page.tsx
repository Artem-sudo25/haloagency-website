"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { legalEntity } from "@/lib/legal";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] pt-24 pb-20 px-4">
      {/* Dot grid background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#1A1A1A] font-bold hover:text-[#FF3366] mb-8 transition-colors underline decoration-2 underline-offset-4"
        >
          <ArrowLeft className="w-4 h-4" />
          На главную
        </Link>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFD166] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
          <span className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wide">
            Юридическая информация
          </span>
        </div>

        <h1
          className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Условия использования (Terms of Service)
        </h1>

        <div className="prose prose-lg max-w-none text-[#1A1A1A]/80 font-medium bg-white border-2 border-[#1A1A1A] rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_#1A1A1A]">
          <p className="text-sm text-[#1A1A1A]/40 mb-8">
            Дата вступления в силу: 23 января 2026
          </p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            1. Общие положения
          </h2>
          <p>
            Данные Условия использования (далее «Условия») регулируют
            предоставление услуг маркетингового агентства{" "}
            <strong>{legalEntity.brandName}</strong> (далее «Агентство», «Мы»).
          </p>
          <p>
            <strong>Сведения о поставщике услуг:</strong>
            <br />
            Наименование: <strong>{legalEntity.businessName}</strong>
            <br />
            IČO: <strong>{legalEntity.ico}</strong>
            <br />
            Юридический адрес: <strong>{legalEntity.address}</strong>
            <br />
            {legalEntity.registrationNote}
          </p>
          <p>
            Используя наш сайт или заказывая наши услуги, вы (далее «Клиент»)
            соглашаетесь с настоящими Условиями. Взаимоотношения сторон
            регулируются законодательством Чешской Республики (в частности,
            Гражданским кодексом № 89/2012 Sb.).
          </p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            2. Описание услуг
          </h2>
          <p>
            Агентство предоставляет услуги в области цифрового маркетинга,
            включая, но не ограничиваясь: настройка контекстной и
            таргетированной рекламы (Google Ads, Meta Ads), веб-разработка,
            настройка веб-аналитики, автоматизация бизнес-процессов. Конкретный
            объем услуг определяется в индивидуальном предложении или договоре.
          </p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            3. Обязательства Клиента
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Клиент обязуется своевременно предоставлять всю необходимую
              информацию, доступы и материалы для выполнения работ.
            </li>
            <li>
              Клиент гарантирует, что владеет всеми необходимыми правами на
              предоставленные материалы (изображения, тексты) и что они не
              нарушают права третьих лиц.
            </li>
            <li>
              Клиент несет ответственность за своевременную оплату рекламных
              бюджетов непосредственно рекламным платформам (Google, Meta и
              др.).
            </li>
          </ul>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            4. Оплата услуг
          </h2>
          <p>
            Стоимость услуг указывается в Коммерческом предложении или
            счете-фактуре. Если не оговорено иное, услуги оплачиваются на основе
            100% предоплаты или согласно этапам, указанным в договоре. Все цены
            указаны без учета НДС (если применимо).
          </p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            5. Ограничение ответственности и Гарантии
          </h2>
          <p>
            <strong>Важно:</strong> Маркетинговые услуги по своей природе
            зависят от третьих сторон (алгоритмы рекламных платформ, поведение
            пользователей, действия конкурентов, изменения в законодательстве).
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Отсутствие гарантий результата:</strong> Агентство
              прикладывает все профессиональные усилия для достижения целей
              Клиента, однако мы <u>не гарантируем</u> получение конкретных
              коммерческих показателей, таких как определенное количество
              продаж, лидов, уровень ROAS или прибыли. Все прогнозы являются
              оценочными.
            </li>
            <li>
              <strong>Блокировки аккаунтов:</strong> Агентство не несет
              ответственности за блокировку рекламных аккаунтов или страниц
              Клиента со стороны третьих платформ (Facebook, Google и т.д.),
              если это произошло не по прямой вине или халатности Агентства.
            </li>
            <li>
              <strong>Ограничение убытков:</strong> Ответственность Агентства за
              любой ущерб, возникший в связи с предоставлением услуг,
              ограничивается суммой вознаграждения, фактически выплаченного
              Клиентом за соответствующий этап услуг. Агентство не несет
              ответственности за упущенную выгоду.
            </li>
          </ul>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            6. Конфиденциальность
          </h2>
          <p>
            Обе стороны обязуются сохранять конфиденциальность коммерческой
            информации, полученной в ходе сотрудничества.
          </p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            7. Расторжение сотрудничества
          </h2>
          <p>
            Любая из сторон может прекратить сотрудничество, уведомив другую
            сторону за 30 дней (если иное не указано в отдельном договоре).
            Фактически оказанные на момент расторжения услуги подлежат полной
            оплате.
          </p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            8. Применимое право и разрешение споров
          </h2>
          <p>
            Все споры решаются путем переговоров. В случае невозможности
            достижения согласия, споры подлежат рассмотрению в компетентном суде
            Чешской Республики по месту нахождения Агентства.
          </p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            9. Контактная информация
          </h2>
          <p>
            По всем вопросам, касающимся данных Условий, пожалуйста, обращайтесь
            по адресу{" "}
            <a href={`mailto:${legalEntity.email}`} className="text-[#FF3366]">
              {legalEntity.email}
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
