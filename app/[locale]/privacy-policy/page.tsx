import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { legalEntity } from "@/lib/legal";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.privacyPolicy" });
  return buildMetadata({
    title: t("title"),
    description: t("description"),
    path: "/privacy-policy",
    locale,
  });
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isCzech = locale === "cs";
  const registrationNote = isCzech
    ? "Zapsáno v živnostenském rejstříku (OSVČ)."
    : legalEntity.registrationNote;
  const copy = isCzech
    ? {
        backHome: "Zpět na hlavní stránku",
        badge: "Právní informace",
        title: "Zásady ochrany osobních údajů",
        updatedAt: "Poslední aktualizace: 23. ledna 2026",
        introductionTitle: "1. Úvod",
        introductionBody:
          "My, HaloAgency.cz, se snažíme chránit vaše soukromí. Tyto Zásady ochrany osobních údajů vysvětlují, jak shromažďujeme, používáme, zpřístupňujeme a chráníme vaše osobní údaje v souladu s GDPR a právními předpisy České republiky, zejména zákonem č. 110/2019 Sb., o zpracování osobních údajů.",
        controllerTitle: "2. Správce údajů",
        controllerIntro: "Správcem vašich osobních údajů je:",
        nameLabel: "Název",
        addressLabel: "Sídlo",
        contactDetailsLabel: "Kontaktní údaje",
        phoneLabel: "Telefon",
        collectedTitle: "3. Jaké údaje shromažďujeme",
        collectedIntro:
          "Můžeme shromažďovat a zpracovávat následující typy údajů:",
        collectedList: [
          {
            label: "Identifikační údaje",
            text: "Jméno, příjmení a název společnosti.",
          },
          {
            label: "Kontaktní údaje",
            text: "E-mailová adresa a telefonní číslo.",
          },
          {
            label: "Údaje o službách",
            text: "Informace o vašem projektu, marketingových cílech a rozpočtu, které nám poskytnete přes formuláře na webu nebo při komunikaci.",
          },
          {
            label: "Technické údaje",
            text: "IP adresa, typ prohlížeče a údaje o návštěvě webu prostřednictvím cookies a analytických nástrojů.",
          },
        ],
        purposesTitle: "4. Účely zpracování údajů",
        purposesIntro:
          "Vaše osobní údaje zpracováváme pro tyto účely:",
        purposesList: [
          "Poskytování našich služeb, například tvorby webů, správy reklamy nebo analytiky.",
          "Komunikace s vámi ohledně vašeho projektu.",
          "Fakturace a vedení účetnictví v rámci plnění právních povinností.",
          "Marketingové účely, tedy zasílání novinek a nabídek, pokud jste k tomu dali souhlas nebo jde o náš oprávněný zájem.",
        ],
        legalBasisTitle: "5. Právní základy zpracování",
        legalBasisList: [
          "Plnění smlouvy nebo kroky před uzavřením smlouvy, například odpověď na vaši poptávku.",
          "Oprávněný zájem, například analytika webu a ochrana našich práv.",
          "Právní povinnost, například daňová evidence.",
          "Souhlas, například pro vybrané marketingové aktivity nebo cookies.",
        ],
        sharingTitle: "6. Předávání údajů třetím stranám",
        sharingBody:
          "Vaše údaje neprodáváme. Můžeme je předávat důvěryhodným třetím stranám, které nám pomáhají provozovat podnikání, například účetním, hostingovým poskytovatelům nebo nástrojům pro e-mailing. Tyto subjekty jsou rovněž povinny dodržovat GDPR. Údaje můžeme předat i orgánům veřejné moci, pokud to vyžaduje zákon České republiky.",
        rightsTitle: "7. Vaše práva",
        rightsIntro: "Podle GDPR máte právo:",
        rightsList: [
          "Požádat o přístup ke svým osobním údajům.",
          "Požadovat opravu nepřesných údajů.",
          "Požadovat výmaz údajů, pokud pro jejich další uchování neexistuje zákonný důvod.",
          "Omezit zpracování údajů.",
          "Vznést námitku proti zpracování.",
          "Na přenositelnost údajů.",
          "Kdykoli odvolat souhlas.",
        ],
        rightsOutroStart:
          "Pro uplatnění svých práv nás kontaktujte na adrese ",
        rightsOutroEnd:
          ". Máte také právo podat stížnost u Úřadu pro ochranu osobních údajů.",
        cookiesTitle: "8. Soubory cookie",
        cookiesBody:
          "Náš web používá soubory cookie ke zlepšení fungování webu a analýze návštěvnosti. Nastavení cookies můžete spravovat ve svém prohlížeči.",
        changesTitle: "9. Změny těchto zásad",
        changesBody:
          "Vyhrazujeme si právo tyto zásady aktualizovat. Aktuální verze je vždy dostupná na této stránce.",
      }
    : {
        backHome: "На главную",
        badge: "Юридическая информация",
        title: "Политика конфиденциальности",
        updatedAt: "Дата последнего обновления: 23 января 2026",
        introductionTitle: "1. Введение",
        introductionBody:
          "Мы, HaloAgency.cz, стремимся защищать вашу конфиденциальность. Данная Политика конфиденциальности объясняет, как мы собираем, используем, раскрываем и защищаем ваши персональные данные в соответствии с GDPR и законодательством Чешской Республики, в частности Законом № 110/2019 Sb., об обработке персональных данных.",
        controllerTitle: "2. Контроллер данных",
        controllerIntro: "Контроллером ваших персональных данных является:",
        nameLabel: "Наименование",
        addressLabel: "Юридический адрес",
        contactDetailsLabel: "Контактные данные",
        phoneLabel: "Телефон",
        collectedTitle: "3. Какие данные мы собираем",
        collectedIntro:
          "Мы можем собирать и обрабатывать следующие типы данных:",
        collectedList: [
          {
            label: "Идентификационные данные",
            text: "Имя, фамилия и название компании.",
          },
          {
            label: "Контактные данные",
            text: "Адрес электронной почты и номер телефона.",
          },
          {
            label: "Данные об услугах",
            text: "Информацию о вашем проекте, маркетинговых целях и бюджете, которую вы предоставляете нам через формы на сайте или при общении.",
          },
          {
            label: "Технические данные",
            text: "IP-адрес, тип браузера и данные о посещении сайта через cookie и аналитические инструменты.",
          },
        ],
        purposesTitle: "4. Цели обработки данных",
        purposesIntro:
          "Мы обрабатываем ваши персональные данные для следующих целей:",
        purposesList: [
          "Предоставление наших услуг, например веб-разработки, настройки рекламы или аналитики.",
          "Коммуникация с вами по вопросам вашего проекта.",
          "Выставление счетов и ведение бухгалтерского учета в рамках юридических обязательств.",
          "Маркетинговые цели, включая отправку новостей и предложений, если вы дали согласие или это соответствует нашему законному интересу.",
        ],
        legalBasisTitle: "5. Основы обработки данных",
        legalBasisList: [
          "Исполнение договора или преддоговорные меры, например ответ на ваш запрос.",
          "Законные интересы, например аналитика сайта и защита наших прав.",
          "Юридические обязательства, например налоговая отчетность.",
          "Согласие, например для отдельных видов маркетинга или cookies.",
        ],
        sharingTitle: "6. Передача данных третьим лицам",
        sharingBody:
          "Мы не продаем ваши данные. Мы можем передавать их надежным третьим сторонам, которые помогают нам управлять бизнесом, например бухгалтерам, хостинг-провайдерам или сервисам email-рассылок. Эти стороны также обязаны соблюдать GDPR. Кроме того, мы можем передавать данные государственным органам, если этого требует закон Чешской Республики.",
        rightsTitle: "7. Ваши права",
        rightsIntro: "В соответствии с GDPR вы имеете право:",
        rightsList: [
          "Запросить доступ к вашим персональным данным.",
          "Требовать исправления неточных данных.",
          "Требовать удаления данных, если для их хранения нет законных оснований.",
          "Ограничить обработку данных.",
          "Возражать против обработки.",
          "На переносимость данных.",
          "Отозвать согласие в любое время.",
        ],
        rightsOutroStart: "Для реализации своих прав свяжитесь с нами по адресу ",
        rightsOutroEnd:
          ". Вы также имеете право подать жалобу в Управление по защите персональных данных Чешской Республики (Úřad pro ochranu osobních údajů).",
        cookiesTitle: "8. Файлы cookie",
        cookiesBody:
          "Наш сайт использует файлы cookie для улучшения работы сайта и анализа трафика. Вы можете управлять настройками cookie через ваш браузер.",
        changesTitle: "9. Изменения в Политике",
        changesBody:
          "Мы оставляем за собой право обновлять данную Политику. Актуальная версия всегда доступна на этой странице.",
      };
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
          {copy.backHome}
        </Link>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#06D6A0] border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] mb-6">
          <span className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wide">
            {copy.badge}
          </span>
        </div>

        <h1
          className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {copy.title}
        </h1>

        <div className="prose prose-lg max-w-none text-[#1A1A1A]/80 font-medium bg-white border-2 border-[#1A1A1A] rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_#1A1A1A]">
          <p className="text-sm text-[#1A1A1A]/40 mb-8">{copy.updatedAt}</p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.introductionTitle}
          </h2>
          <p>{copy.introductionBody}</p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.controllerTitle}
          </h2>
          <p>
            {copy.controllerIntro}
            <br />
            {copy.nameLabel}: <strong>{legalEntity.businessName}</strong>
            <br />
            IČO: <strong>{legalEntity.ico}</strong>
            <br />
            {copy.addressLabel}: <strong>{legalEntity.address}</strong>
            <br />
            {registrationNote}
            <br />
            <br />
            {copy.contactDetailsLabel}:
            <br />
            Email:{" "}
            <a href={`mailto:${legalEntity.email}`} className="text-[#FF3366]">
              {legalEntity.email}
            </a>
            <br />
            {copy.phoneLabel}: {legalEntity.phone}
          </p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.collectedTitle}
          </h2>
          <p>{copy.collectedIntro}</p>
          <ul className="list-disc pl-6 space-y-2">
            {copy.collectedList.map((item) => (
              <li key={item.label}>
                <strong>{item.label}:</strong> {item.text}
              </li>
            ))}
          </ul>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.purposesTitle}
          </h2>
          <p>{copy.purposesIntro}</p>
          <ul className="list-disc pl-6 space-y-2">
            {copy.purposesList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.legalBasisTitle}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {copy.legalBasisList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.sharingTitle}
          </h2>
          <p>{copy.sharingBody}</p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.rightsTitle}
          </h2>
          <p>{copy.rightsIntro}</p>
          <ul className="list-disc pl-6 space-y-2">
            {copy.rightsList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            {copy.rightsOutroStart}
            <a href={`mailto:${legalEntity.email}`} className="text-[#FF3366]">
              {legalEntity.email}
            </a>
            {copy.rightsOutroEnd}
          </p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.cookiesTitle}
          </h2>
          <p>{copy.cookiesBody}</p>

          <h2
            className="text-[#1A1A1A] font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {copy.changesTitle}
          </h2>
          <p>{copy.changesBody}</p>
        </div>
      </div>
    </main>
  );
}
