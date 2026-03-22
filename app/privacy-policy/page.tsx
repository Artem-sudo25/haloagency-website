"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { legalEntity } from "@/lib/legal";

export default function PrivacyPolicyPage() {
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

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#06D6A0] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
          <span className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wide">
            Юридическая информация
          </span>
        </div>

        <h1
          className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Политика конфиденциальности
        </h1>

        <div className="prose prose-lg max-w-none text-[#1A1A1A]/80 font-medium bg-white border-2 border-[#1A1A1A] rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_#1A1A1A]">
          <p className="text-sm text-[#1A1A1A]/40 mb-8">
            Дата последнего обновления: 23 января 2026
          </p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            1. Введение
          </h2>
          <p>
            Мы, {legalEntity.brandName}, стремимся защищать вашу
            конфиденциальность. Данная Политика конфиденциальности (далее
            «Политика») объясняет, как мы собираем, используем, раскрываем и
            защищаем ваши персональные данные в соответствии с Общим регламентом
            по защите данных (GDPR) и законодательством Чешской Республики (в
            частности, Закон № 110/2019 Sb., об обработке персональных данных).
          </p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            2. Контроллер данных
          </h2>
          <p>
            Контроллером ваших персональных данных является:
            <br />
            Наименование: <strong>{legalEntity.businessName}</strong>
            <br />
            IČO: <strong>{legalEntity.ico}</strong>
            <br />
            Юридический адрес: <strong>{legalEntity.address}</strong>
            <br />
            {legalEntity.registrationNote}
            <br />
            <br />
            Контактные данные:
            <br />
            Email:{" "}
            <a href={`mailto:${legalEntity.email}`} className="text-[#FF3366]">
              {legalEntity.email}
            </a>
            <br />
            Телефон: {legalEntity.phone}
          </p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            3. Какие данные мы собираем
          </h2>
          <p>Мы можем собирать и обрабатывать следующие типы данных:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Идентификационные данные:</strong> Имя, фамилия, название
              компании.
            </li>
            <li>
              <strong>Контактные данные:</strong> Адрес электронной почты, номер
              телефона.
            </li>
            <li>
              <strong>Данные об услугах:</strong> Информацию о вашем проекте,
              маркетинговых целях и бюджете, которую вы предоставляете нам через
              формы на сайте или при общении.
            </li>
            <li>
              <strong>Технические данные:</strong> IP-адрес, тип браузера,
              данные о посещении сайта (через файлы cookie и аналитические
              инструменты).
            </li>
          </ul>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            4. Цели обработки данных
          </h2>
          <p>Мы обрабатываем ваши персональные данные для следующих целей:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Предоставление наших услуг (веб-разработка, настройка рекламы,
              аналитика и др.).
            </li>
            <li>Коммуникация с вами по вопросам вашего проекта.</li>
            <li>
              Выставление счетов и ведение бухгалтерского учета (соблюдение
              юридических обязательств).
            </li>
            <li>
              Маркетинговые цели (отправка новостей и предложений), если вы дали
              на это согласие или если это наш законный интерес как поставщика
              услуг.
            </li>
          </ul>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            5. Основы обработки данных
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Исполнение договора или преддоговорные меры (ответ на ваш запрос).
            </li>
            <li>Законные интересы (аналитика сайта, защита прав).</li>
            <li>Юридические обязательства (налоговая отчетность).</li>
            <li>Согласие (для определенных видов маркетинга или cookies).</li>
          </ul>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            6. Передача данных третьим лицам
          </h2>
          <p>
            Мы не продаем ваши данные. Мы можем передавать данные надежным
            третьим сторонам, которые помогают нам управлять бизнесом
            (бухгалтеры, хостинг-провайдеры, сервисы email-рассылок), которые
            также обязаны соблюдать GDPR. Также мы можем передавать данные
            государственным органам, если этого требует закон Чешской
            Республики.
          </p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            7. Ваши права
          </h2>
          <p>В соответствии с GDPR вы имеете право:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Запросить доступ к вашим персональным данным.</li>
            <li>Требовать исправления неточных данных.</li>
            <li>
              Требовать удаления данных («право быть забытым»), если нет
              законных оснований для их хранения.
            </li>
            <li>Ограничить обработку данных.</li>
            <li>Возражать против обработки.</li>
            <li>На переносимость данных.</li>
            <li>Отозвать согласие в любое время.</li>
          </ul>
          <p>
            Для реализации прав свяжитесь с нами по адресу{" "}
            <a href={`mailto:${legalEntity.email}`} className="text-[#FF3366]">
              {legalEntity.email}
            </a>
            . Вы также имеете право подать жалобу в Управление по защите
            персональных данных Чешской Республики (Úřad pro ochranu osobních
            údajů).
          </p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            8. Файлы Cookie
          </h2>
          <p>
            Наш сайт использует файлы cookie для улучшения работы сайта и
            анализа трафика. Вы можете управлять настройками cookie через ваш
            браузер.
          </p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            9. Изменения в Политике
          </h2>
          <p>
            Мы оставляем за собой право обновлять данную Политику. Актуальная
            версия всегда доступна на этой странице.
          </p>
        </div>
      </div>
    </main>
  );
}
