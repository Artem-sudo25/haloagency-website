import { Link } from "@/i18n/routing";
import {
  BulletList,
  NoteCard,
  SectionHeading,
  SubHeading,
} from "@/app/[locale]/blog/_components/article-primitives";

type ArticleLocale = "ru" | "cs";

export function NormalTrackingForSmallBusinessArticle({
  locale = "ru",
}: {
  locale?: ArticleLocale;
}) {
  if (locale === "cs") {
    return (
      <>
        <p>
          Většina malých firem nepotřebuje BigQuery, vlastní data warehouse ani
          tři analytiky v týmu. Rozhodně ale nepotřebuje rozbité události,
          neúplné poptávky a reklamu, která se učí z křivých dat. Normální
          tracking pro malý byznys není složitost pro složitost. Je to pečlivě
          poskládaný základ, který ukazuje, odkud přišla poptávka a co se s ní
          dělo dál.
        </p>

        <SectionHeading>Proč se z trackingu tak rychle stává nesrozumitelné téma</SectionHeading>
        <p>Protože trh rád všechno komplikuje.</p>
        <p>
          Firmám se vypráví o data layeru, server containeru, event architecture,
          atribučních modelech a pipelines.
        </p>
        <p>
          Méně často ale někdo vysvětlí to hlavní: co má majitel firmy na konci
          skutečně vidět a jaká rozhodnutí mu to umožní dělat.
        </p>
        <p>Malý byznys většinou nepotřebuje analytiku „jako korporát“. Potřebuje:</p>
        <BulletList
          items={[
            "vidět reálné poptávky",
            "chápat, která reklama přináší výsledek",
            "neztrácet zbytečně část signálů po cestě",
            "nerozhodovat se naslepo",
          ]}
        />
        <p>Když tohle funguje, tracking už plní svou roli.</p>

        <SectionHeading>Co vlastně znamená normální tracking</SectionHeading>
        <p>
          Normální tracking je stav, kdy firma umí odpovědět na pár jednoduchých
          otázek:
        </p>
        <BulletList
          items={[
            "odkud přišla poptávka",
            "která stránka nebo formulář zafungovaly",
            "které kanály skutečně přinášejí poptávky",
            "co Google Ads a Meta vidí jako konverzi",
            "kolik dat se ztrácí a proč",
          ]}
        />
        <p>
          Pokud tyhle odpovědi nemáte, nemáte analytiku. Máte jen sadu skriptů,
          které sice někde visí, ale nedávají pevnou oporu pro rozhodování.
        </p>

        <SectionHeading>Z čeho se skládá funkční základ</SectionHeading>
        <p>Pro většinu menších projektů tohle úplně stačí.</p>

        <SubHeading>1. GA4 jako základní vrstva</SubHeading>
        <p>
          GA4 nemá být jen odškrtnutá položka. Má to být místo, kde se sbírají
          hlavní události a chování uživatelů.
        </p>
        <BulletList
          items={[
            "struktura událostí musí být srozumitelná",
            "klíčové akce se musí počítat stabilně",
            "data se musí po spuštění ověřit, ne jen „někam poslat“",
          ]}
        />

        <SubHeading>2. GTM jako řiditelná vrstva</SubHeading>
        <p>
          Přes GTM se pohodlně spravuje logika událostí bez chaotických zásahů do
          webu pokaždé, když se něco změní. Samotný GTM ale nic neřeší. Jen
          pomáhá události udržet přehledné a ověřitelné.
        </p>

        <SubHeading>3. Klíčové obchodní události</SubHeading>
        <p>Ne všechno. Ne desítky eventů jen proto, aby report vypadal bohatě.</p>
        <p>Pro malou firmu bývají opravdu důležité hlavně:</p>
        <BulletList
          items={[
            "odeslání formuláře",
            "telefonát",
            "klik na klíčové CTA",
            "rezervace",
            "nákup",
            "kroky, které ovlivňují reklamu a prodej",
          ]}
        />

        <SubHeading>4. Napojení na reklamní účty</SubHeading>
        <p>
          Pokud běží reklama, Google Ads a Meta musí dostávat kvalitní signály.
          Jinak se optimalizují podle neúplných nebo zkreslených dat.
        </p>

        <SubHeading>5. Ověření, ne jen instalace</SubHeading>
        <p>
          Velmi častý problém: někdo analytiku nastaví, ale nikdo už neověří,
          jestli události přicházejí, neduplikují se, dávají stejná čísla jako
          skutečné poptávky a předávají správné parametry.
        </p>
        <p>Bez finální verifikace není žádné nastavení opravdu hotové.</p>

        <SectionHeading>Kde malý byznys nejčastěji ztrácí data</SectionHeading>
        <p>
          Problém bývá málokdy jeden. Častěji jde o několik menších ztrát, které
          se ve výsledku nasčítají do velké díry v datech.
        </p>

        <SubHeading>Omezení cookies a iOS</SubHeading>
        <p>
          Část uživatelských událostí už dnes prostě neprojde tak stabilně jako
          dřív. Není to výjimka, ale běžná realita.
        </p>

        <SubHeading>Blokátory</SubHeading>
        <p>
          Pokud se firma spoléhá jen na měření v prohlížeči, část signálů
          nevyhnutelně zmizí.
        </p>

        <SubHeading>Špatně poskládané formuláře</SubHeading>
        <p>
          Někdy se poptávka odešle, ale analytika ji nepozná jako konverzi. Jindy
          je to naopak: event se započítá, ale formulář ve skutečnosti nikam
          nedorazí.
        </p>

        <SubHeading>Rozpojení mezi webem a reklamou</SubHeading>
        <p>
          Poptávky existují, ale v Google Ads nebo Meta se odrážejí slabě. Kampaně
          se pak učí ne z nejlepších signálů, ale z toho, co vůbec stihnou
          „uvidět“.
        </p>

        <SectionHeading>Kdy má server-side tracking opravdu smysl</SectionHeading>
        <p>
          Server-side tracking není potřeba všem jen proto, že to zní moderně.
        </p>
        <p>Výrazně pomáhá hlavně tehdy, když:</p>
        <BulletList
          items={[
            "už běží reklama",
            "poptávky jsou důležité a drahé",
            "část dat se prokazatelně ztrácí",
            "Meta nebo Google dostávají slabý signál",
            "chcete čistší obrázek bez zbytečné technické přestavby",
          ]}
        />
        <p>
          Přesně tak je to postavené i na stránce{" "}
          <Link
            href="/tracking"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            trackingu HaloAgency
          </Link>
          : ne jako komplikovaná analytická architektura, ale jako praktické
          nastavení pro poptávky, nákupy a reklamní rozhodování.
        </p>

        <SectionHeading>Co malé firmy nejčastěji dělají špatně</SectionHeading>
        <SubHeading>1. Počítají kliky místo poptávek</SubHeading>
        <p>
          Kliků může být hodně. Pokud ale nevidíte skutečné poptávky, samo o sobě
          vám to nic zásadního neřekne.
        </p>

        <SubHeading>2. Myslí si, že GA4 vše vyřeší samo</SubHeading>
        <p>
          GA4 je užitečný nástroj. Když jsou ale události rozbité, samotná
          platforma vás nezachrání.
        </p>

        <SubHeading>3. Nesrovnávají analytiku s reálnými poptávkami</SubHeading>
        <p>
          Pokud CRM, formuláře, e-mail a analytika ukazují rozdílná čísla, problém
          už existuje. Otázkou je jen rozsah.
        </p>

        <SubHeading>4. Spouštějí reklamu dřív, než ověří základ</SubHeading>
        <p>
          Peníze pak začnou odtékat dřív, než je systém schopný výsledek správně
          změřit.
        </p>

        <SectionHeading>Jak vypadá funkční minimum</SectionHeading>
        <p>
          Když odříznete zbytečnou složitost, rozumný základ pro malý byznys bývá
          většinou tento:
        </p>
        <ol className="list-decimal space-y-2 pl-6 text-[17px] font-medium leading-relaxed text-[#1A1A1A]/80">
          <li>jasně definované cíle byznysu</li>
          <li>nastavené klíčové události</li>
          <li>GA4</li>
          <li>GTM</li>
          <li>napojení na Google Ads a Meta</li>
          <li>ověření formulářů a přenosu konverzí</li>
          <li>server-side tracking tam, kde je opravdu opodstatněný</li>
        </ol>
        <p>
          To už většinou stačí na výrazně jistější rozhodování o reklamě a webu.
        </p>

        <SectionHeading>A kde je v tom automatizace</SectionHeading>
        <p>Tracking a automatizace nejsou totéž, ale spolu fungují výrazně lépe.</p>
        <p>Když jsou data poskládaná správně, můžete pak:</p>
        <BulletList
          items={[
            "rychleji předávat poptávky",
            "stavět notifikace",
            "napojit formuláře na CRM",
            "omezit ruční chaos",
          ]}
        />
        <p>
          Tracking odpovídá na otázku „co se stalo“, zatímco{" "}
          <Link
            href="/automation"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            automatizace
          </Link>{" "}
          pomáhá zajistit, aby se po události nic neztratilo.
        </p>

        <SectionHeading>Minimum, které má smysl zkontrolovat hned teď</SectionHeading>
        <BulletList
          items={[
            "Jsou nastavené klíčové události, ne jen zobrazení stránek?",
            "Odcházejí poptávky do GA4 i do reklamních účtů?",
            "Vidíte, která stránka nebo formulář přivedly poptávku?",
            "Souhlasí analytika s reálnými kontakty?",
            "Chápete, která data se ztrácejí a proč?",
          ]}
        />
        <p>
          Pokud je u poloviny bodů odpověď „nevím jistě“, firma už má důvod řešit
          tracking teď, ne někdy později.
        </p>

        <SectionHeading>Časté otázky</SectionHeading>
        <div className="space-y-5">
          {[
            {
              q: "Hodí se server-side tracking i pro malou firmu?",
              a: "Ano, pokud běží reklama a nechcete zbytečně přicházet o data. Není to jen pro velké projekty.",
            },
            {
              q: "Má to smysl i bez reklamy?",
              a: "Někdy ano, ale nejčastěji se problém nejvíc ukáže právě ve chvíli, kdy běží aktivní reklamní kampaně.",
            },
            {
              q: "Stačí mi jen GA4?",
              a: "Může stačit, ale záleží, jak přesná data potřebujete. V mnoha případech už samotné GA4 nestačí.",
            },
            {
              q: "Je zavedení dlouhé a složité?",
              a: "Nemusí být. Pokud je úloha správně postavená, nemusí se z toho stát několikaměsíční technický projekt.",
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
        <NoteCard label="Shrnutí">
          <p>
            Normální tracking pro malý byznys není těžký stack pro efekt. Je to
            srozumitelný systém, v němž web, formuláře, analytika a reklamní účty
            spolupracují dost dobře na to, abyste viděli reálné poptávky a
            nerozhodovali se v mlze.
          </p>
          <p>
            Zkráceně: byznys nepotřebuje „pokročilý stack“. Potřebuje systém,
            kterému se dá věřit.
          </p>
        </NoteCard>
      </>
    );
  }

  return (
    <>
      <p>
        Большинству малых бизнесов не нужен BigQuery, кастомный data warehouse и
        три аналитика в штате. Но им точно не стоит жить с поломанными
        событиями, неполными лидами и рекламой, которая учится на кривых данных.
        Нормальный трекинг для малого бизнеса — это не сложность ради сложности.
        Это аккуратно собранная база, которая показывает, откуда пришла заявка и
        что с ней было дальше.
      </p>

      <SectionHeading>
        Почему тема трекинга так быстро становится непонятной
      </SectionHeading>
      <p>Потому что рынок любит усложнять.</p>
      <p>
        Бизнесу рассказывают про data layers, server containers, event
        architecture, attribution models и pipelines.
      </p>
      <p>
        Но редко объясняют главное: что именно владелец должен увидеть в итоге и
        какие решения это позволит принимать.
      </p>
      <p>
        Малому бизнесу обычно не нужна аналитика “как у корпорации”. Ему нужно:
      </p>
      <BulletList
        items={[
          "видеть реальные заявки",
          "понимать, какая реклама приводит результат",
          "не терять часть сигналов по дороге",
          "не принимать решения вслепую",
        ]}
      />
      <p>Если это работает, трекинг уже делает свою работу.</p>

      <SectionHeading>Что вообще значит нормальный трекинг</SectionHeading>
      <p>
        Нормальный трекинг — это когда бизнес может ответить на простые вопросы:
      </p>
      <BulletList
        items={[
          "откуда пришла заявка",
          "какая страница или форма сработала",
          "какие каналы реально приносят лиды",
          "что видит Google Ads и Meta как конверсию",
          "сколько данных вы теряете и почему",
        ]}
      />
      <p>
        Если этих ответов нет, у бизнеса не аналитика. У него набор скриптов,
        которые вроде стоят, но не дают опоры для решений.
      </p>

      <SectionHeading>Из чего состоит нормальная база</SectionHeading>
      <p>Для большинства проектов этого достаточно.</p>

      <SubHeading>1. GA4 как базовый слой</SubHeading>
      <p>
        GA4 нужен не как галочка, а как место, где собираются основные события и
        поведение пользователей.
      </p>
      <BulletList
        items={[
          "структура событий должна быть понятной",
          "ключевые действия должны считаться стабильно",
          "данные должны быть проверены после запуска, а не только «вроде отправлены»",
        ]}
      />

      <SubHeading>2. GTM как управляемый слой</SubHeading>
      <p>
        Через GTM удобно собирать и менять логику событий без хаотичных правок
        сайта каждый раз. Но сам по себе GTM ничего не решает. Он просто
        помогает сделать события управляемыми и проверяемыми.
      </p>

      <SubHeading>3. Ключевые бизнес-события</SubHeading>
      <p>Не всё подряд. Не десятки событий ради красоты в отчётах.</p>
      <p>Обычно для малого бизнеса реально важны:</p>
      <BulletList
        items={[
          "отправка формы",
          "звонок",
          "клик по ключевому CTA",
          "запись",
          "покупка",
          "шаги, которые влияют на рекламу и продажи",
        ]}
      />

      <SubHeading>4. Связка с рекламными кабинетами</SubHeading>
      <p>
        Если идёт реклама, Google Ads и Meta должны получать нормальные сигналы.
        Иначе системы оптимизируются по неполной или искажённой информации.
      </p>

      <SubHeading>5. Проверка, а не только установка</SubHeading>
      <p>
        Очень частая проблема: кто-то настроил аналитику, но никто не проверил,
        приходят ли события, дублируются ли они, совпадают ли числа с реальными
        заявками и передаются ли правильные параметры.
      </p>
      <p>
        Без финальной верификации никакая настройка не выглядит законченной.
      </p>

      <SectionHeading>Где малый бизнес чаще всего теряет данные</SectionHeading>
      <p>
        Проблема редко одна. Чаще это несколько небольших потерь, которые вместе
        дают большую дыру в аналитике.
      </p>

      <SubHeading>Ограничения cookies и iOS</SubHeading>
      <p>
        Часть пользовательских событий просто не доходит так стабильно, как
        раньше. Это уже не редкость, а обычная реальность.
      </p>

      <SubHeading>Блокировщики</SubHeading>
      <p>
        Если бизнес ориентируется только на browser-side передачу событий, часть
        сигналов неизбежно пропадает.
      </p>

      <SubHeading>Криво собранные формы</SubHeading>
      <p>
        Иногда заявка отправляется, но аналитика не понимает это как конверсию.
        Иногда наоборот: событие считается, а форма реально не дошла.
      </p>

      <SubHeading>Разрыв между сайтом и рекламой</SubHeading>
      <p>
        Заявки есть, но в Google Ads или Meta они отражаются плохо. В итоге
        кампании учатся не на лучших сигналах, а на том, что им удалось увидеть.
      </p>

      <SectionHeading>
        Когда server-side трекинг действительно нужен
      </SectionHeading>
      <p>
        Server-side трекинг не нужен всем подряд только потому, что это звучит
        современно.
      </p>
      <p>Он особенно полезен, когда:</p>
      <BulletList
        items={[
          "у вас уже идёт реклама",
          "лиды реально важны и дороги",
          "часть данных теряется",
          "Meta или Google получают слабый сигнал",
          "вы хотите более чистую картину без излишнего усложнения",
        ]}
      />
      <p>
        Именно так это и собрано на странице{" "}
        <Link
          href="/tracking"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          трекинга HaloAgency
        </Link>
        : не как сложная аналитическая архитектура, а как практичная настройка
        под заявки, покупки и рекламные решения.
      </p>

      <SectionHeading>
        Что малый бизнес чаще всего делает неправильно
      </SectionHeading>
      <SubHeading>1. Считает клики, а не заявки</SubHeading>
      <p>
        Кликов может быть много. Но если не видно реальные обращения, это мало
        что даёт.
      </p>

      <SubHeading>2. Думает, что GA4 сам всё решит</SubHeading>
      <p>
        GA4 полезен. Но если события настроены криво, сама платформа вас не
        спасёт.
      </p>

      <SubHeading>3. Не сверяет аналитику с реальными заявками</SubHeading>
      <p>
        Если CRM, почта, формы и аналитика показывают разные числа, проблема уже
        есть. Вопрос только в масштабе.
      </p>

      <SubHeading>4. Включает рекламу до проверки базы</SubHeading>
      <p>
        В итоге деньги начинают уходить раньше, чем система готова корректно
        считать результат.
      </p>

      <SectionHeading>Как выглядит рабочий минимум</SectionHeading>
      <p>
        Если убрать лишнюю сложность, хороший базовый набор для малого бизнеса
        обычно такой:
      </p>
      <ol className="list-decimal space-y-2 pl-6 text-[17px] font-medium leading-relaxed text-[#1A1A1A]/80">
        <li>понятные цели бизнеса</li>
        <li>настроенные ключевые события</li>
        <li>GA4</li>
        <li>GTM</li>
        <li>связка с Google Ads и Meta</li>
        <li>проверка формы и передачи конверсий</li>
        <li>server-side трекинг там, где это реально оправдано</li>
      </ol>
      <p>Этого уже достаточно, чтобы принимать решения намного увереннее.</p>

      <SectionHeading>А где здесь автоматизация</SectionHeading>
      <p>
        Трекинг и автоматизация не одно и то же, но вместе они работают заметно
        лучше.
      </p>
      <p>Когда данные собраны нормально, дальше можно:</p>
      <BulletList
        items={[
          "быстрее передавать лиды",
          "строить уведомления",
          "связывать формы с CRM",
          "уменьшать ручной хаос",
        ]}
      />
      <p>
        Трекинг отвечает на вопрос “что произошло”, а{" "}
        <Link
          href="/automation"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          автоматизация
        </Link>{" "}
        помогает сделать так, чтобы после события ничего не потерялось.
      </p>

      <SectionHeading>
        Минимум, который стоит проверить уже сейчас
      </SectionHeading>
      <BulletList
        items={[
          "Настроены ли ключевые события, а не только просмотры страниц",
          "Передаются ли заявки в GA4 и рекламные кабинеты",
          "Видите ли вы, какая форма или страница дала лид",
          "Совпадают ли цифры аналитики с реальными обращениями",
          "Понимаете ли вы, какие данные теряются и почему",
        ]}
      />
      <p>
        Если хотя бы на половину пунктов ответ “не уверен”, у бизнеса уже есть
        повод заняться этим сейчас, а не потом.
      </p>

      <SectionHeading>Частые вопросы</SectionHeading>
      <div className="space-y-5">
        {[
          {
            q: "Подходит ли server-side трекинг малому бизнесу?",
            a: "Да, если у вас есть реклама и вы хотите меньше терять данные. Это не только для крупных проектов.",
          },
          {
            q: "Нужно ли это без рекламы?",
            a: "Иногда да, но чаще острее всего проблема проявляется именно при активных рекламных кампаниях.",
          },
          {
            q: "Можно ли обойтись только GA4?",
            a: "Можно, но вопрос в том, хватит ли вам точности. Во многих случаях этого уже мало.",
          },
          {
            q: "Это долго и сложно внедрять?",
            a: "Не обязательно. Если задача поставлена нормально, это не должно превращаться в многомесячный технический проект.",
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
      <NoteCard label="Итог">
        <p>
          Нормальный трекинг для малого бизнеса — это не тяжёлый стек ради
          впечатления. Это понятная система, где сайт, формы, аналитика и
          рекламные кабинеты связаны между собой достаточно хорошо, чтобы вы
          видели реальные заявки и не принимали решения в тумане.
        </p>
        <p>
          Если коротко: бизнесу не нужен “продвинутый стек”. Бизнесу нужна
          система, которой можно верить.
        </p>
      </NoteCard>
    </>
  );
}
