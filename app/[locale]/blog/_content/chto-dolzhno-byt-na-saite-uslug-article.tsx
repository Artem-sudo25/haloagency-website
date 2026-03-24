import { Link } from "@/i18n/routing";
import {
  BulletList,
  NoteCard,
  SectionHeading,
  SubHeading,
} from "@/app/[locale]/blog/_components/article-primitives";

type ArticleLocale = "ru" | "cs";

export function WhatServiceWebsiteNeedsArticle({
  locale = "ru",
}: {
  locale?: ArticleLocale;
}) {
  if (locale === "cs") {
    return (
      <>
        <p>
          Web služeb může vypadat čistě, stát rozumné peníze a přesto přivádět
          málo poptávek. Je to běžná situace. Problém nebývá v tom, že „chodí
          špatní lidé“, ale v tom, že samotná stránka nepomáhá člověku rychle
          pochopit nabídku, získat důvěru a udělat další krok.
        </p>
        <p>
          Dobrý web pro firmu poskytující služby nefunguje jako brožura ani jako sada hezkých
          obrazovek. Vysvětluje, komu služba sedí, proč se obrátit právě na vás a
          jak vás kontaktovat bez zbytečného váhání.
        </p>

        <SectionHeading>Krátká odpověď</SectionHeading>
        <BulletList
          items={[
            "Web služeb musí rychle vysvětlit nabídku, vzbudit důvěru a dovést člověka ke kontaktu.",
            "Pokud není jasné, co děláte, pro koho to je a proč vám lze věřit, web bude ztrácet i při dobré návštěvnosti.",
            "Nejdůležitější není dekor, ale struktura, stránky služeb, důkazy, formulář a jasný další krok.",
          ]}
        />

        <SectionHeading>Proč web služeb často nepřivádí poptávky</SectionHeading>
        <p>
          U firem poskytujících služby bývá cesta k rozhodnutí skoro vždy delší než u
          jednoduchého produktového nákupu. Člověk službu nekoupí během pár
          sekund. Nejdřív si potřebuje ujasnit, jestli mu vůbec sedí, jestli se
          vám dá věřit a co bude následovat po první poptávce.
        </p>
        <p>
          Většina slabých webů neodpovídá právě na tyhle otázky, ale spíš na
          interní logiku firmy. Najdete tam obecné „o nás“, ale slabě rozpracované
          služby. Hezké bloky, ale málo důvodů, proč si vybrat právě vás. Web pak
          vypadá slušně, ale funguje jen jako vizitka.
        </p>

        <SectionHeading>Jaké stránky bývají skoro vždy potřeba</SectionHeading>
        <p>
          Základ pro většinu firem poskytujících služby je překvapivě jednoduchý. Nejde o
          počet stránek, ale o to, zda každá dělá svou práci.
        </p>
        <BulletList
          items={[
            "homepage, která rychle vysvětlí, s čím pomáháte",
            "samostatné stránky hlavních služeb",
            "reference nebo ukázky práce",
            "kontaktní stránka s přehledným formulářem",
            "stránka nebo blok, který vysvětluje, kdo za projektem stojí",
          ]}
        />
        <p>
          Když se celá tahle logika sesype do jednoho dlouhého scrollu, začne web
          trpět typickou nemocí: „všechno tam je“, ale zákazník pořád nemá jasný
          scénář.
        </p>

        <SectionHeading>Co na webu služeb nesmí chybět</SectionHeading>

        <SubHeading>1. Jasná úvodní obrazovka</SubHeading>
        <p>Během pár sekund musí být jasné tři věci:</p>
        <BulletList
          items={[
            "co nabízíte",
            "komu je to určené",
            "co má člověk udělat dál",
          ]}
        />
        <p>
          Pokud je nahoře hezký headline, ale nedá se z něj pochopit služba ani
          situace zákazníka, web ztrácí sílu hned na začátku.
        </p>

        <SubHeading>2. Samostatné stránky služeb</SubHeading>
        <p>
          Jedna z nejčastějších chyb u firem poskytujících služby je snaha vysvětlit všechno
          na jedné stránce. Výsledkem bývá dlouhá landing page, na které není
          pořádně rozvinutá ani jedna služba.
        </p>
        <BulletList
          items={[
            "každá hlavní služba by měla mít vlastní stránku",
            "každá stránka potřebuje vlastní logiku argumentů",
            "každá stránka by měla mít vlastní FAQ a vlastní CTA",
          ]}
        />
        <p>
          Proto dobře poskládaný{" "}
          <Link
            href="/web/business-websites"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            firemní web
          </Link>{" "}
          skoro vždy vyhraje nad jednou přetíženou stránkou, pokud má firma více
          směrů nebo typů služeb.
        </p>

        <SubHeading>3. Bloky důvěry</SubHeading>
        <p>
          Člověk nepotřebuje jen pochopit službu. Potřebuje taky snížit riziko.
          Důvěra na webu služeb nevzniká obecným textem, ale konkrétními
          důkazy.
        </p>
        <BulletList
          items={[
            "reference",
            "reálné recenze",
            "srozumitelný proces spolupráce",
            "ukázky práce",
            "fotka týmu nebo odpovědné osoby",
          ]}
        />
        <p>
          Na referenci{" "}
          <Link
            href="/case-studies/doggy-salon"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            Doggy Salon
          </Link>{" "}
          je dobře vidět, jak u firem poskytujících služby nefunguje abstraktní branding,
          ale kombinace jasně podané služby, správné struktury a srozumitelného
          dalšího kroku.
        </p>

        <SubHeading>4. Jasná cesta ke kontaktu</SubHeading>
        <p>
          Návštěvník nemá hádat, kam kliknout. Dobrý web služeb obvykle potřebuje:
        </p>
        <BulletList
          items={[
            "jedno hlavní CTA na klíčových stránkách",
            "přehledný formulář",
            "kontaktní stránku bez zbytečného šumu",
            "opakování CTA tam, kde už je člověk připravený napsat",
          ]}
        />

        <SubHeading>5. Odpovědi na běžné námitky</SubHeading>
        <p>
          Poptávku často nebrzdí nedostatek zájmu, ale jedna jednoduchá pochybnost,
          na kterou web neodpověděl.
        </p>
        <BulletList
          items={[
            "kolik to zhruba stojí",
            "jak dlouho to trvá",
            "co je v tom zahrnuto",
            "jestli si musí klient všechno chystat sám",
            "jestli se dá začít v menším rozsahu",
          ]}
        />
        <p>
          FAQ tu není kvůli designu. Pro web služeb je to normální součást
          prodeje.
        </p>

        <SubHeading>6. Struktura, která unese růst</SubHeading>
        <p>
          Web služeb málokdy zůstává navždy stejný. Postupně přibývají nové
          služby, reference, články i samostatné vstupy pro reklamu. Pokud je
          struktura chaotická, jakýkoli růst se mění v předělávku.
        </p>
        <p>
          Web proto nemá být jen „hotový“, ale postavený jako pracovní základ pro
          růst, SEO a reklamu.
        </p>

        <SectionHeading>Kde se nejčastěji ztrácejí poptávky</SectionHeading>

        <SubHeading>Není jasné, co vlastně nabízíte</SubHeading>
        <p>
          Pokud člověk během pár sekund nepochopí, jaký problém řešíte, nemá
          důvod číst dál.
        </p>

        <SubHeading>Všechny služby jsou hozené na jednu hromadu</SubHeading>
        <p>
          Když má firma více směrů, potřebují alespoň základní samostatnou logiku.
          Jinak web působí jako seznam, ne jako srozumitelná nabídka.
        </p>

        <SubHeading>Chybí konkrétní důkazy</SubHeading>
        <p>
          Bez referencí, recenzí, ukázek a čitelného procesu web nesnižuje riziko
          a nepřesvědčuje.
        </p>

        <SubHeading>Chybí jasné CTA</SubHeading>
        <p>
          Když člověk neví, co má udělat dál, jednoduše odejde porovnávat jiné
          varianty.
        </p>

        <SubHeading>Web není připravený na návštěvnost</SubHeading>
        <p>
          Firmám často připadá, že jim chybí více návštěvnosti. Ve skutečnosti ale
          někdy nejdřív potřebují udělat web, na který má smysl tu návštěvnost
          vůbec posílat.
        </p>

        <SectionHeading>Typický scénář, kdy web nedotaženě funguje</SectionHeading>
        <NoteCard label="Scénář">
          <p>
            Firma má homepage, na níž jen stručně vypisuje služby, dole je jeden
            formulář a zbytek je postavený na tom, že se v tom návštěvník nějak
            zorientuje sám.
          </p>
          <p>
            Jenže člověk nemusí skládat logiku za vás. Pokud na webu nevidí svůj
            scénář, nepochopí, proč vám věřit, a nenajde jednoduchý další krok,
            odejde dál. V tu chvíli má firma často pocit, že problém je v
            návštěvnosti. Přitom nejdřív chybí dobrý základ.
          </p>
        </NoteCard>

        <SectionHeading>Co zkontrolovat za 15 minut</SectionHeading>
        <p>
          Pokud chcete rychle zjistit, jestli web dělá svou práci, projděte si tenhle
          krátký checklist.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_0px_#1A1A1A]">
            <div className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#1A1A1A]/55">
              Základní kontrola
            </div>
            <div className="mt-4">
              <BulletList
                items={[
                  "Je během 5 sekund jasné, co děláte a pro koho?",
                  "Existují samostatné stránky pro hlavní služby?",
                  "Je na webu aspoň jeden silný důkaz důvěry?",
                ]}
              />
            </div>
          </div>
          <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_0px_#1A1A1A]">
            <div className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#1A1A1A]/55">
              Připravenost na poptávky
            </div>
            <div className="mt-4">
              <BulletList
                items={[
                  "Je jasné, kam kliknout, když je člověk připravený napsat?",
                  "Jsou na webu odpovědi na časté otázky?",
                  "Šlo by bez ostychu poslat na web reklamní návštěvnost?",
                ]}
              />
            </div>
          </div>
        </div>
        <p>
          Pokud je u poloviny otázek odpověď spíš „ne úplně“, web si už o úpravy
          říká.
        </p>

        <SectionHeading>Časté otázky</SectionHeading>
        <div className="space-y-5">
          {[
            {
              q: "Stačí jedna stránka, když je služeb víc?",
              a: "Většinou ne. Pokud je směrů několik a zákazník přichází různými scénáři, jedna stránka začne velmi rychle spíš plést než pomáhat.",
            },
            {
              q: "Dá se začít jen základní verzí webu?",
              a: "Ano. Ale i základní verze musí být postavená správně: s jasnou strukturou, normálním CTA a možností dalšího růstu.",
            },
            {
              q: "Co je důležitější: texty nebo design?",
              a: "Obojí. Jenže slabá logika začne web brzdit dřív než slabší vizuál. Když skřípe struktura a význam, design to nezachrání.",
            },
            {
              q: "Dá se takový web později použít i pro reklamu?",
              a: "Ano, pokud je poskládaný jako pracovní systém, ne jen jako vitrína. V ideálním případě má být připravený jak na poptávky, tak na reklamu i analytiku.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_0px_#1A1A1A]"
            >
              <div className="text-xl font-extrabold leading-tight text-[#1A1A1A]">
                {item.q}
              </div>
              <p className="mt-3">{item.a}</p>
            </div>
          ))}
        </div>

        <SectionHeading>Závěr</SectionHeading>
        <p>
          Dobrý web služeb dělá tři věci: rychle vysvětluje nabídku, vytváří
          důvěru a vede k poptávce. Pokud jen existuje, ale nepomáhá člověku
          rozhodnout se, neplní svou roli.
        </p>
        <p>
          Jestli chcete postavit ne brožuru, ale funkční základ pro firmu
          poskytující služby, podívejte se, jak přistupujeme k{" "}
          <Link
            href="/web/business-websites"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            firemním webům
          </Link>{" "}
          a k{" "}
          <Link
            href="/packages/site"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            balíčku Start
          </Link>
          . A pokud už web máte a potřebujete zjistit, co přesně brzdí poptávky,
          je nejrychlejší{" "}
          <Link
            href="/contact"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            probrat zadání
          </Link>
          .
        </p>
      </>
    );
  }

  return (
    <>
      <p>
        Сайт услуг может выглядеть аккуратно, стоить нормальных денег и всё
        равно давать мало заявок. Это обычная история. Дело не в том, что
        посетители “не те”, а в том, что сама страница не помогает человеку
        быстро понять предложение, почувствовать доверие и сделать следующий
        шаг.
      </p>
      <p>
        Для сервисного бизнеса хороший сайт работает не как брошюра и не как
        набор красивых экранов. Он объясняет, кому подходит услуга, почему к вам
        стоит обратиться и как написать без лишних сомнений.
      </p>

      <SectionHeading>Короткий ответ</SectionHeading>
      <BulletList
        items={[
          "Сайт услуг должен быстро объяснять предложение, вызывать доверие и вести к контакту.",
          "Если непонятно, что вы делаете, для кого это и почему вам можно доверять, сайт будет проигрывать даже при хорошем трафике.",
          "Самые важные элементы здесь не декор, а структура, страницы услуг, доказательства, форма и ясный следующий шаг.",
        ]}
      />

      <SectionHeading>
        Почему сайт услуг часто не приводит заявки
      </SectionHeading>
      <p>
        У сервисного бизнеса путь до решения почти всегда длиннее, чем у
        простого товарного оффера. Человек не покупает услугу за пару секунд.
        Сначала он пытается понять, подходит ли вы ему вообще, можно ли вам
        доверять и что будет после первой заявки.
      </p>
      <p>
        Большинство слабых сайтов отвечают не на эти вопросы, а на внутреннюю
        логику бизнеса. На них есть общий рассказ “о компании”, но слабо
        раскрыты сами услуги. Есть красивые блоки, но не хватает причин выбрать
        именно вас. Поэтому сайт выглядит прилично, а работает как визитка.
      </p>

      <SectionHeading>Какой набор страниц нужен почти всегда</SectionHeading>
      <p>
        Для большинства сервисных бизнесов база довольно простая. Не в
        количестве страниц дело, а в том, выполняют ли они свою работу.
      </p>
      <BulletList
        items={[
          "главная, которая быстро объясняет, чем вы полезны",
          "отдельные страницы ключевых услуг",
          "кейсы или примеры работ",
          "контактная страница с понятной формой",
          "страница или блок, который отвечает на вопрос, кто за проектом стоит",
        ]}
      />
      <p>
        Когда вся эта логика сваливается в один длинный экран, у сайта
        начинается обычная болезнь: вроде бы “всё есть”, а нормального сценария
        для клиента нет.
      </p>

      <SectionHeading>
        Что обязательно должно быть на сайте услуг
      </SectionHeading>

      <SubHeading>1. Внятный первый экран</SubHeading>
      <p>За несколько секунд человек должен понять три вещи:</p>
      <BulletList
        items={["что вы предлагаете", "кому это подходит", "что делать дальше"]}
      />
      <p>
        Если наверху страницы красивый заголовок, но по нему нельзя понять
        услугу и сценарий клиента, сайт сразу начинает терять силу.
      </p>

      <SubHeading>2. Отдельные страницы услуг</SubHeading>
      <p>
        Одна из самых частых ошибок сервисного бизнеса — рассказать обо всём на
        одной странице. В итоге получается длинный лендинг, где ни одна услуга
        не раскрыта нормально.
      </p>
      <BulletList
        items={[
          "у каждой ключевой услуги должна быть своя страница",
          "у каждой страницы должна быть своя логика аргументов",
          "у каждой страницы должны быть свои FAQ и свой CTA",
        ]}
      />
      <p>
        Поэтому нормально собранный{" "}
        <Link
          href="/web/business-websites"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          сайт для бизнеса
        </Link>{" "}
        почти всегда выигрывает у одной перегруженной страницы, если направлений
        работы несколько.
      </p>

      <SubHeading>3. Блоки доверия</SubHeading>
      <p>
        Человеку нужно не только понять услугу, но и снизить риск. Доверие на
        сервисном сайте строится не общими словами, а конкретикой.
      </p>
      <BulletList
        items={[
          "кейсы",
          "реальные отзывы",
          "понятный процесс",
          "примеры работ",
          "фото команды или ответственного человека",
        ]}
      />
      <p>
        На{" "}
        <Link
          href="/case-studies/doggy-salon"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          кейсе Doggy Salon
        </Link>{" "}
        хорошо видно, как для сервисного бизнеса работает не абстрактный
        брендинг, а связка ясной подачи услуги, нормальной структуры и понятного
        следующего шага.
      </p>

      <SubHeading>4. Понятный путь до контакта</SubHeading>
      <p>
        Человек не должен гадать, куда ему нажать. На хорошем сайте услуг обычно
        нужны:
      </p>
      <BulletList
        items={[
          "один основной CTA на ключевых страницах",
          "понятная форма",
          "контактная страница без лишнего шума",
          "повтор CTA там, где человек уже дочитал и готов написать",
        ]}
      />

      <SubHeading>5. Ответы на типичные возражения</SubHeading>
      <p>
        Часто заявку тормозит не отсутствие интереса, а одно простое сомнение,
        на которое сайт не ответил.
      </p>
      <BulletList
        items={[
          "сколько это примерно стоит",
          "как долго это делается",
          "что входит",
          "нужно ли всё готовить самому",
          "можно ли начать с малого",
        ]}
      />
      <p>
        FAQ здесь нужен не для галочки. Для сервисного сайта это часть продажи.
      </p>

      <SubHeading>6. Структура, которая выдерживает рост</SubHeading>
      <p>
        Сайт услуг редко остаётся одинаковым навсегда. Потом появляются новые
        услуги, кейсы, статьи и отдельные входы под рекламу. Если структура
        собрана хаотично, любое развитие превращается в переделку.
      </p>
      <p>
        Поэтому сайт должен быть не просто “готов”, а собран как рабочая база
        под рост, SEO и рекламу.
      </p>

      <SectionHeading>Где чаще всего теряются заявки</SectionHeading>

      <SubHeading>Непонятно, в чём суть предложения</SubHeading>
      <p>
        Если человек не может быстро понять, какую задачу вы решаете, дальше он
        читать не обязан.
      </p>

      <SubHeading>Все услуги сложены в одну кучу</SubHeading>
      <p>
        Когда у бизнеса несколько направлений, им нужна хотя бы минимально
        отдельная логика. Иначе сайт начинает выглядеть как список, а не как
        понятное предложение.
      </p>

      <SubHeading>Нет конкретных доказательств</SubHeading>
      <p>
        Без кейсов, отзывов, примеров и понятного процесса сайт не снимает риск.
      </p>

      <SubHeading>Нет ясного CTA</SubHeading>
      <p>
        Если человек не понимает, что делать дальше, он просто уходит сравнивать
        дальше.
      </p>

      <SubHeading>Сайт не готов к трафику</SubHeading>
      <p>
        Очень часто бизнес думает, что ему не хватает трафика, хотя сначала
        нужно сделать так, чтобы существующий трафик вообще было куда приводить.
      </p>

      <SectionHeading>
        Типичный сценарий, где сайт недорабатывает
      </SectionHeading>
      <NoteCard label="Сценарий">
        <p>
          У бизнеса есть главная страница, на ней коротко перечислены услуги, в
          конце стоит форма и дальше весь расчёт на то, что человек сам
          разберётся.
        </p>
        <p>
          Но человек не обязан собирать логику за вас. Если он не увидел свой
          сценарий, не понял, почему вам можно доверять, и не нашёл простой
          следующий шаг, он просто идёт дальше. В этот момент бизнесу часто
          кажется, что проблема в трафике. Хотя на деле сначала надо собрать
          нормальную основу.
        </p>
      </NoteCard>

      <SectionHeading>Что проверить за 15 минут</SectionHeading>
      <p>
        Если хотите быстро понять, тянет ли сайт свою работу, пройдитесь по
        этому короткому списку.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_0px_#1A1A1A]">
          <div className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#1A1A1A]/55">
            Базовая проверка
          </div>
          <div className="mt-4">
            <BulletList
              items={[
                "За 5 секунд понятно, что вы делаете и для кого?",
                "Есть ли отдельные страницы под ключевые услуги?",
                "Есть ли хотя бы один сильный блок доверия?",
              ]}
            />
          </div>
        </div>
        <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_0px_#1A1A1A]">
          <div className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#1A1A1A]/55">
            Готовность к заявкам
          </div>
          <div className="mt-4">
            <BulletList
              items={[
                "Понятно ли, куда нажать, если человек готов написать?",
                "Есть ли ответы на частые вопросы?",
                "Можно ли без стыда вести на сайт рекламный трафик?",
              ]}
            />
          </div>
        </div>
      </div>
      <p>
        Если на половину вопросов ответ скорее “не совсем”, сайт уже просит
        доработки.
      </p>

      <SectionHeading>Частые вопросы</SectionHeading>
      <div className="space-y-5">
        {[
          {
            q: "Достаточно ли одной страницы, если услуг несколько?",
            a: "Чаще нет. Если направлений несколько и у клиента разные сценарии входа, одна страница почти всегда начинает путать.",
          },
          {
            q: "Можно ли сначала сделать только базовую версию?",
            a: "Да. Но даже базовый сайт должен быть собран правильно: с ясной структурой, нормальным CTA и возможностью роста.",
          },
          {
            q: "Что важнее: тексты или дизайн?",
            a: "Оба слоя важны, но слабую логику сайт теряет раньше, чем слабый визуал. Если структура и смысл хромают, дизайн не спасает.",
          },
          {
            q: "Можно ли потом использовать такой сайт под рекламу?",
            a: "Да, если он собран как рабочая система, а не как витрина. В идеале сайт должен быть готов и к заявкам, и к рекламе, и к нормальной аналитике.",
          },
        ].map((item) => (
          <div
            key={item.q}
            className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_0px_#1A1A1A]"
          >
            <div className="text-xl font-extrabold leading-tight text-[#1A1A1A]">
              {item.q}
            </div>
            <p className="mt-3">{item.a}</p>
          </div>
        ))}
      </div>

      <SectionHeading>Вывод</SectionHeading>
      <p>
        Хороший сайт услуг делает три вещи: быстро объясняет предложение,
        вызывает доверие и ведёт к заявке. Если он просто существует, но не
        помогает человеку принять решение, свою работу он не выполняет.
      </p>
      <p>
        Если хотите собрать не брошюру, а рабочую основу для сервисного бизнеса,
        посмотрите, как мы подходим к{" "}
        <Link
          href="/web/business-websites"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          сайтам для бизнеса
        </Link>{" "}
        и{" "}
        <Link
          href="/packages/site"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          пакету Site
        </Link>
        . А если уже есть сайт и нужно понять, что именно мешает заявкам, проще
        сразу{" "}
        <Link
          href="/contact"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          обсудить задачу
        </Link>
        .
      </p>
    </>
  );
}
