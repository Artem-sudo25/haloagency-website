import { Link } from "@/i18n/routing";
import {
  BulletList,
  NoteCard,
  SectionHeading,
  SubHeading,
} from "@/app/[locale]/blog/_components/article-primitives";

type ArticleLocale = "ru" | "cs";

export function LendingVsSiteArticle({
  locale = "ru",
}: {
  locale?: ArticleLocale;
}) {
  if (locale === "cs") {
    return (
      <>
        <p>
          Pokud má byznys jednu nabídku a většina návštěvnosti jde z reklamy,
          častěji dává smysl landing page. Pokud máte více služeb a hrají roli
          důvěra, vyhledávání a normální navigace, častěji potřebujete
          plnohodnotný web. Chyba vzniká ve chvíli, kdy se formát nevolí podle
          úlohy, ale podle dojmu: „landing page je rychlejší“, „větší web působí
          seriózněji“. Výsledkem pak bývá buď stránka, která je těsná už za pár
          měsíců, nebo zbytečně drahá struktura, kterou firma zatím nepotřebuje.
        </p>

        <SectionHeading>Proč je tahle otázka vůbec důležitá</SectionHeading>
        <p>
          Pro malé a střední firmy web skoro nikdy není „jen web“. Buď má rychle
          proměňovat reklamní návštěvnost v poptávky, nebo v klidu vysvětlit
          byznys, služby a důvody, proč se obrátit právě na vás. Někdy obojí, ale
          ne vždy ve stejném formátu.
        </p>
        <p>
          Zmatek začíná ve chvíli, kdy se debata stočí k vkusu. Jeden dodavatel
          řekne: „Začněte landing page, bude to rychlejší.“ Druhý tlačí hned
          velký web „do budoucna“. Obojí může být správně. Záleží jen na tom,
          jaký úkol má web řešit právě teď.
        </p>
        <p>
          Nejčastější chyba je jednoduchá: firma nevybírá roli webu, ale představu
          v hlavě.
        </p>

        <SectionHeading>Landing page a plnohodnotný web: jaký je rozdíl</SectionHeading>
        <p>Ne designové srovnání, ale praktické rozhodnutí.</p>

        <div className="overflow-x-auto rounded-3xl border-2 border-[#1A1A1A] bg-[#F5F5F7] shadow-[5px_5px_0px_0px_#1A1A1A]">
          <table className="min-w-full text-left text-sm font-medium text-[#1A1A1A]">
            <thead className="border-b-2 border-[#1A1A1A] bg-white">
              <tr>
                <th className="px-5 py-4 font-extrabold">Kritérium</th>
                <th className="px-5 py-4 font-extrabold">Landing page</th>
                <th className="px-5 py-4 font-extrabold">Plnohodnotný web</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Nabídka", "Jedna", "Více"],
                [
                  "Cíl",
                  "Jedna hlavní akce",
                  "Vysvětlit byznys a dovést ke kontaktu v různých scénářích",
                ],
                [
                  "Návštěvnost",
                  "Nejčastěji reklama",
                  "Vyhledávání, značka, doporučení i reklama",
                ],
                ["Navigace", "Minimální", "Plnohodnotná"],
                ["SEO", "Omezeně", "Výrazně silnější"],
                ["Důvěra", "Rychle a cíleně", "Do hloubky a ve větším rozsahu"],
                [
                  "Rozšiřování",
                  "Omezené",
                  "Snadnější přidávání služeb a nových stránek",
                ],
              ].map(([label, landing, website]) => (
                <tr
                  key={label}
                  className="border-b border-[#1A1A1A]/10 last:border-b-0"
                >
                  <td className="px-5 py-4 font-bold">{label}</td>
                  <td className="px-5 py-4">{landing}</td>
                  <td className="px-5 py-4">{website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Landing page funguje nejlépe tehdy, když jí nic nebrání dělat jednu
          jasnou práci. Plnohodnotný web je silný tam, kde se byznys už do jedné
          stránky nevejde.
        </p>

        <SectionHeading>Kdy se landing page hodí nejlépe</SectionHeading>
        <p>
          Landing page nedává smysl proto, že je „moderní“ nebo „krátká“. Dává
          smysl ve chvíli, kdy má firma úzký a dobře čitelný úkol.
        </p>

        <SubHeading>1. Máte jednu nabídku</SubHeading>
        <BulletList
          items={[
            "jednu službu",
            "jednu speciální nabídku",
            "jednu akci",
            "jeden hlavní typ rezervace nebo poptávky",
          ]}
        />
        <p>
          Pokud má člověk pochopit nabídku během 30 až 60 sekund a přejít k
          jednomu dalšímu kroku, landing page často funguje lépe. Neroztahuje
          pozornost do stran.
        </p>

        <SubHeading>2. Hlavní návštěvnost jde z reklamy</SubHeading>
        <p>
          Když člověk klikne na Google Ads nebo Meta Ads, obvykle nepotřebuje
          velkou navigaci a pět vedlejších sekcí. Potřebuje vidět přesně to, co
          reklama slíbila.
        </p>
        <BulletList
          items={["jedna nabídka", "jedno CTA", "jedna logika krok za krokem"]}
        />
        <p>
          Právě proto stránka ze sekce{" "}
          <Link
            href="/web/landing-pages"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            landing pages
          </Link>{" "}
          často porazí „univerzální web“, pokud je úkolem rychle a srozumitelně
          převést reklamní poptávku do formuláře nebo hovoru.
        </p>

        <SubHeading>3. Chcete rychle ověřit poptávku</SubHeading>
        <p>Někdy firma na startu velký web prostě nepotřebuje. Nejdřív potřebuje zjistit:</p>
        <BulletList
          items={[
            "jestli lidé vůbec nechávají poptávky",
            "která nabídka funguje nejlépe",
            "jak lidé reagují na cenu a způsob podání",
          ]}
        />
        <p>
          Landing page je na to výborná. Spustí se rychleji a jednodušeji se na ní
          testuje.
        </p>

        <SubHeading>4. Zákazník má jednu hlavní akci</SubHeading>
        <BulletList
          items={[
            "odeslat poptávku",
            "rezervovat termín",
            "zavolat",
            "objednat konzultaci",
          ]}
        />
        <p>
          Pokud je cesta ke kontaktu jedna a jasná, nemá smysl ji schovávat mezi
          desítku obrazovek a sekcí.
        </p>

        <SectionHeading>Kdy je plnohodnotný web lepší než landing page</SectionHeading>
        <p>
          Pokud má byznys více služeb, několik vstupních scénářů nebo delší
          rozhodování, jedna stránka začne velmi rychle ztrácet sílu.
        </p>

        <SubHeading>1. Máte více služeb</SubHeading>
        <p>
          Servisní firmy se často snaží prodávat vše z jedné stránky. V praxi z
          toho bývá směs:
        </p>
        <BulletList
          items={[
            "nahoře jedna služba",
            "dole další tři",
            "mezi tím blok o firmě",
            "pak reference a ještě jedno CTA",
          ]}
        />
        <p>
          Výsledek je jednoduchý: člověk neví, kam se dostal a co má udělat dál.
          Pokud je služeb více, obvykle potřebujete normální strukturu: samostatné
          stránky, samostatné argumenty a samostatné vstupy pro různé dotazy. To
          už je teritorium{" "}
          <Link
            href="/web/business-websites"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            firemního webu
          </Link>
          , ne jedné prodejní stránky.
        </p>

        <SubHeading>2. Před poptávkou je důležitá důvěra</SubHeading>
        <p>
          Ne každý klient se rozhoduje rychle. V mnoha oborech si člověk nejdřív
          potřebuje ujasnit:
        </p>
        <BulletList
          items={[
            "kdo jste",
            "jaké služby poskytujete",
            "jestli máte reference",
            "jak pracujete",
            "jestli se vám dá věřit",
          ]}
        />
        <p>
          Landing page umí část důvěry dodat, ale plnohodnotný web to zvládá
          klidněji a přesvědčivěji.
        </p>

        <SubHeading>3. Potřebujete vyhledávání, ne jen reklamu</SubHeading>
        <p>Pokud je pro firmu důležitá SEO vrstva, plnohodnotný web je skoro vždy silnější.</p>
        <BulletList
          items={[
            "můžete mít samostatné stránky služeb",
            "dotazy se dají rozdělit výrazně smysluplněji",
            "lépe se staví interní prolinkování",
            "web se snáz rozšiřuje bez kompletní předělávky",
          ]}
        />
        <p>
          Landing page se optimalizovat dá. Čekat od ní ale stejný efekt jako od
          dobře poskládaného vícestránkového webu nedává smysl.
        </p>

        <SubHeading>4. Stavíte základ na delší dobu</SubHeading>
        <p>Pokud víte, že se během 3 až 6 měsíců objeví:</p>
        <BulletList
          items={[
            "nové služby",
            "reference",
            "články",
            "samostatné reklamní směry",
          ]}
        />
        <p>
          Je lepší hned postavit strukturu, která to unese. Jinak se levný start
          velmi rychle změní v drahou předělávku.
        </p>

        <SectionHeading>Kde firmy nejčastěji chybují</SectionHeading>
        <SubHeading>Chyba 1. Vícestránkový web pro jednu reklamní nabídku</SubHeading>
        <p>
          Člověk klikne na reklamu, přijde na web a neví, co má dělat dál. V
          hlavičce je pět odkazů, uprostřed tři služby a dole obecný formulář.
          Konverze neklesá proto, že by byl web špatný, ale proto, že není
          postavený na tenhle úkol.
        </p>

        <SubHeading>Chyba 2. Pět služeb na jedné landing page</SubHeading>
        <p>
          To je opačný extrém. Firmě připadá, že je to jednodušší. Ve skutečnosti
          každá služba dostane málo prostoru a stránka začne působit jako
          kompromis.
        </p>

        <SubHeading>Chyba 3. Očekávání SEO od stránky bez struktury</SubHeading>
        <p>
          Pokud máte jednu stránku a na ní všechno najednou, vyhledávač se nemá
          čeho chytit. To neznamená, že je landing page k ničemu. Jen má jinou
          práci.
        </p>

        <SubHeading>Chyba 4. Volba podle ceny místo podle úkolu</SubHeading>
        <p>Tohle bývá nejdražší chyba, protože se pak platí ještě jednou.</p>

        <SectionHeading>Reálný scénář: kdy už jedna stránka nestačí</SectionHeading>
        <NoteCard label="Příklad">
          <p>
            Na referenci{" "}
            <Link
              href="/case-studies/propradlo"
              className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
            >
              ProPradlo
            </Link>{" "}
            je dobře vidět, že výsledek nepřináší jen design, ale poskládaná
            struktura: když má firma jasné podání, srozumitelné stránky a logiku,
            kam návštěvnost posílat dál.
          </p>
          <p>
            Kdyby se v takové situaci všechno tlačilo do jedné landing page,
            stránka by se rychle přetížila. Pro krátký reklamní scénář to ještě
            někdy projde. Pro firmu, která potřebuje důvěru, šíři nabídky a prostor
            pro růst, už ne.
          </p>
        </NoteCard>

        <SectionHeading>Jak poznat, co potřebujete právě vy</SectionHeading>
        <p>Projděte si pár jednoduchých otázek.</p>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_0px_#1A1A1A]">
            <div className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#1A1A1A]/55">
              Spíš landing page
            </div>
            <div className="mt-4">
              <BulletList
                items={[
                  "máte jednu nabídku",
                  "vedete návštěvnost z reklamy",
                  "potřebujete rychlý start",
                  "hlavní cíl je jedna poptávka, rezervace nebo telefonát",
                  "chcete si nejdřív ověřit poptávku",
                ]}
              />
            </div>
          </div>
          <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_0px_#1A1A1A]">
            <div className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#1A1A1A]/55">
              Spíš plnohodnotný web
            </div>
            <div className="mt-4">
              <BulletList
                items={[
                  "služeb je více",
                  "člověk vybírá a porovnává",
                  "důležité jsou reference, stránky služeb a důvěra",
                  "potřebujete SEO vrstvu",
                  "web má být základ, ne dočasné řešení",
                ]}
              />
            </div>
          </div>
        </div>

        <p>
          Pokud vám z toho vychází něco mezi, není nutné násilně tlačit jeden
          formát. Někdy je správná cesta začít landing page pro jednu nabídku a
          pak ji dorůst do webu. Jindy naopak postavit web, ale reklamu posílat
          na samostatnou silnou stránku.
        </p>

        <SectionHeading>Co je v reálu levnější</SectionHeading>
        <p>
          Na začátku je landing page skoro vždy levnější. Jenže nejde jen o
          startovní cenu. Důležité je také:
        </p>
        <BulletList
          items={[
            "jak snadno půjde stránku rozšiřovat",
            "jestli se nebude vše za půl roku předělávat",
            "jestli zvolený formát podporuje reklamu, vyhledávání i důvěru",
          ]}
        />
        <p>
          Když zvolíte správný formát hned na začátku, šetříte peníze, čas i počet
          budoucích předělávek.
        </p>

        <SectionHeading>Časté otázky</SectionHeading>
        <div className="space-y-5">
          {[
            {
              q: "Dá se začít landing page a později ji rozšířit do webu?",
              a: "Ano. A často je to úplně normální cesta, zvlášť když je nejdřív potřeba rychle ověřit jednu konkrétní nabídku.",
            },
            {
              q: "Dá se reklama posílat na vícestránkový web?",
              a: "Ano. Jen většinou ne na homepage, ale na konkrétní stránku složenou přesně pro danou nabídku a daný dotaz.",
            },
            {
              q: "Hodí se landing page pro SEO?",
              a: "Částečně ano. Pokud ale potřebujete systematický organický růst, plnohodnotný web bývá téměř vždy silnější.",
            },
            {
              q: "Co je lepší pro servisní firmu v Česku?",
              a: "Pokud máte více služeb a klient se nerozhoduje okamžitě, častěji dává smysl plnohodnotný web. Pokud spouštíte jednu konkrétní službu do reklamy, často vyhraje landing page.",
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
          Nejde o to, co je lepší obecně. Jde o to, jakou práci má web odvést.
        </p>
        <p>
          Landing page je silná ve chvíli, kdy potřebujete jednu nabídku, jednu
          cestu a rychlý start. Plnohodnotný web je správná volba tam, kde začíná
          hrát roli důvěra, struktura, SEO a prostor pro růst. Chyba začíná ve
          chvíli, kdy se formát vybírá podle dojmu, ne podle role.
        </p>
      </>
    );
  }

  return (
    <>
      <p>
        Если у бизнеса один оффер и трафик идёт из рекламы, чаще нужен лендинг.
        Если услуг несколько, важны доверие, поиск и нормальная навигация, чаще
        нужен полноценный сайт. Ошибка в том, что формат сайта часто выбирают не
        по задаче, а по впечатлению: “лендинг быстрее”, “большой сайт солиднее”.
        В итоге бизнес либо получает страницу, которой тесно уже через пару
        месяцев, либо переплачивает за структуру, которая ему пока не нужна.
      </p>

      <SectionHeading>Почему этот вопрос вообще важен</SectionHeading>
      <p>
        Для малого и среднего бизнеса сайт почти никогда не бывает “просто
        сайтом”. Он либо должен быстро превращать рекламный трафик в заявки,
        либо спокойно объяснять бизнес, услуги и причины доверять вам. Иногда и
        то и другое, но не всегда в одном формате.
      </p>
      <p>
        Путаница начинается там, где разговор сводится к вкусу. Один подрядчик
        говорит: “Начните с лендинга, так быстрее”. Другой убеждает сразу делать
        большой сайт “на вырост”. Оба совета могут быть правильными. Вопрос
        только в том, какая у вас задача сейчас.
      </p>
      <p>
        Самая частая ошибка простая: бизнес выбирает не роль сайта, а картинку у
        себя в голове.
      </p>

      <SectionHeading>Лендинг и полноценный сайт: в чём разница</SectionHeading>
      <p>Ниже не дизайнерское сравнение, а практическое.</p>

      <div className="overflow-x-auto rounded-3xl border-2 border-[#1A1A1A] bg-[#F5F5F7] shadow-[5px_5px_0px_0px_#1A1A1A]">
        <table className="min-w-full text-left text-sm font-medium text-[#1A1A1A]">
          <thead className="border-b-2 border-[#1A1A1A] bg-white">
            <tr>
              <th className="px-5 py-4 font-extrabold">Критерий</th>
              <th className="px-5 py-4 font-extrabold">Лендинг</th>
              <th className="px-5 py-4 font-extrabold">Полноценный сайт</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Оффер", "Один", "Несколько"],
              [
                "Цель",
                "Одно главное действие",
                "Объяснить бизнес и довести до контакта по разным сценариям",
              ],
              ["Трафик", "Чаще реклама", "Поиск, бренд, рекомендации, реклама"],
              ["Навигация", "Минимальная", "Полноценная"],
              ["SEO", "Ограниченно", "Гораздо сильнее"],
              ["Доверие", "Быстрое, точечное", "Глубже и шире"],
              [
                "Масштабирование",
                "Ограничено",
                "Проще добавлять услуги и страницы",
              ],
            ].map(([label, landing, website]) => (
              <tr
                key={label}
                className="border-b border-[#1A1A1A]/10 last:border-b-0"
              >
                <td className="px-5 py-4 font-bold">{label}</td>
                <td className="px-5 py-4">{landing}</td>
                <td className="px-5 py-4">{website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Лендинг хорош тогда, когда ему не мешают делать одну работу. Полноценный
        сайт хорош тогда, когда бизнесу уже тесно в формате одной страницы.
      </p>

      <SectionHeading>Когда лендинг подходит лучше всего</SectionHeading>
      <p>
        Лендинг нужен не потому, что он “модный” или “короткий”. Он нужен, когда
        задача у бизнеса узкая и понятная.
      </p>

      <SubHeading>1. У вас один оффер</SubHeading>
      <BulletList
        items={[
          "одна услуга",
          "одно специальное предложение",
          "одна акция",
          "один формат записи или заявки",
        ]}
      />
      <p>
        Если человек должен понять предложение за 30-60 секунд и перейти к
        одному следующему шагу, лендинг обычно работает лучше. Он не распыляет
        внимание.
      </p>

      <SubHeading>2. Основной трафик идёт из рекламы</SubHeading>
      <p>
        Если человек кликает по объявлению Google Ads или Meta Ads, ему обычно
        не нужна большая навигация и пять соседних разделов. Ему нужно увидеть
        ровно то, что обещала реклама.
      </p>
      <BulletList
        items={["один оффер", "один CTA", "одна логика экрана за экраном"]}
      />
      <p>
        Именно поэтому страница из раздела{" "}
        <Link
          href="/web/landing-pages"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          лендингов
        </Link>{" "}
        часто оказывается сильнее “универсального сайта”, если задача стоит
        быстро и понятно конвертировать рекламный спрос.
      </p>

      <SubHeading>3. Вы хотите быстро проверить спрос</SubHeading>
      <p>
        Иногда бизнесу не нужен большой сайт на старте. Сначала нужно проверить:
      </p>
      <BulletList
        items={[
          "будут ли оставлять заявки",
          "какой оффер откликается лучше",
          "как люди реагируют на цену и подачу",
        ]}
      />
      <p>
        Для этого лендинг подходит отлично. Он быстрее в запуске и проще в
        тестировании.
      </p>

      <SubHeading>4. У клиента одно главное действие</SubHeading>
      <BulletList
        items={[
          "оставить заявку",
          "записаться",
          "позвонить",
          "заказать консультацию",
        ]}
      />
      <p>
        Если путь до контакта один и понятный, нет смысла прятать его среди
        десятка экранов и разделов.
      </p>

      <SectionHeading>Когда полноценный сайт лучше лендинга</SectionHeading>
      <p>
        Если у бизнеса несколько услуг, несколько сценариев входа или более
        длинное принятие решения, одна страница быстро начинает проигрывать.
      </p>

      <SubHeading>1. У вас несколько услуг</SubHeading>
      <p>
        Сервисный бизнес часто пытается продавать всё с одного лендинга. На
        практике получается смесь:
      </p>
      <BulletList
        items={[
          "одна услуга наверху",
          "внизу ещё три",
          "потом блок о компании",
          "потом отзывы и ещё один CTA",
        ]}
      />
      <p>
        В итоге человек не понимает, куда он попал и что ему делать дальше. Если
        услуг несколько, обычно нужна нормальная структура: отдельные страницы,
        отдельные аргументы и отдельные входы под разные запросы. Это уже
        территория{" "}
        <Link
          href="/web/business-websites"
          className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
        >
          сайта для бизнеса
        </Link>
        , а не одной посадочной страницы.
      </p>

      <SubHeading>2. Вам важно доверие до заявки</SubHeading>
      <p>
        Не все клиенты принимают решение быстро. Во многих нишах человек хочет
        сначала понять:
      </p>
      <BulletList
        items={[
          "кто вы",
          "какие услуги оказываете",
          "есть ли кейсы",
          "как вы работаете",
          "можно ли вам доверять",
        ]}
      />
      <p>
        Лендинг может дать часть этого доверия, но полноценный сайт делает это
        спокойнее и убедительнее.
      </p>

      <SubHeading>3. Вам нужен поиск, а не только реклама</SubHeading>
      <p>Если бизнесу важен SEO-слой, полноценный сайт почти всегда сильнее.</p>
      <BulletList
        items={[
          "можно делать отдельные страницы под услуги",
          "можно нормальнее распределять запросы",
          "проще выстраивать внутренние ссылки",
          "легче расширять сайт без полной переделки",
        ]}
      />
      <p>
        Лендинг можно оптимизировать. Но ждать от него того же результата, что и
        от хорошо собранного многостраничного сайта, не стоит.
      </p>

      <SubHeading>4. Вы строите основу надолго</SubHeading>
      <p>Если вы понимаете, что через 3-6 месяцев добавятся:</p>
      <BulletList
        items={[
          "новые услуги",
          "кейсы",
          "статьи",
          "отдельные рекламные направления",
        ]}
      />
      <p>
        Лучше сразу собрать структуру, которая это выдержит. Иначе дешёвый старт
        быстро превращается в дорогую переделку.
      </p>

      <SectionHeading>Где бизнес чаще всего ошибается</SectionHeading>
      <SubHeading>
        Ошибка 1. Делают многостраничный сайт под один рекламный оффер
      </SubHeading>
      <p>
        Человек кликает по рекламе, попадает на сайт и не понимает, что делать
        дальше. В шапке пять пунктов, в середине три разные услуги, внизу общая
        контактная форма. Конверсия падает не потому, что сайт плохой, а потому
        что он не под эту задачу.
      </p>

      <SubHeading>
        Ошибка 2. Пытаются продавать 5 услуг с одного лендинга
      </SubHeading>
      <p>
        Это обратная крайность. Бизнесу кажется, что так проще. На деле каждая
        услуга получает слишком мало внимания, и страница начинает выглядеть как
        компромисс.
      </p>

      <SubHeading>Ошибка 3. Ждут SEO от сайта без структуры</SubHeading>
      <p>
        Если у вас одна страница и на ней всё сразу, поиску просто не за что
        зацепиться. Это не значит, что лендинг бесполезен. Это значит, что у
        него другая работа.
      </p>

      <SubHeading>Ошибка 4. Выбирают по цене, а не по задаче</SubHeading>
      <p>Это самая дорогая ошибка. Потому что потом платят ещё раз.</p>

      <SectionHeading>
        Реальный сценарий: когда одной страницы уже мало
      </SectionHeading>
      <NoteCard label="Кейс">
        <p>
          На кейсе{" "}
          <Link
            href="/case-studies/propradlo"
            className="font-bold text-[#FF3366] underline decoration-2 underline-offset-4"
          >
            ProPradlo
          </Link>{" "}
          хорошо видно, что результат появляется не только от дизайна, а от
          собранной структуры: когда у бизнеса есть ясная подача, понятные
          страницы и логика, куда вести трафик дальше.
        </p>
        <p>
          Если бы в такой ситуации всё пытались уместить в один лендинг,
          страница быстро стала бы перегруженной. Для короткого рекламного
          сценария это ещё может сработать. Для бизнеса, которому нужно доверие,
          ассортимент и рост, уже нет.
        </p>
      </NoteCard>

      <SectionHeading>Как понять, что нужно именно вам</SectionHeading>
      <p>Пройдитесь по этим вопросам.</p>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_0px_#1A1A1A]">
          <div className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#1A1A1A]/55">
            Скорее нужен лендинг
          </div>
          <div className="mt-4">
            <BulletList
              items={[
                "у вас один оффер",
                "вы ведёте трафик из рекламы",
                "нужен быстрый запуск",
                "главная цель — одна заявка, запись или звонок",
                "вы хотите сначала проверить спрос",
              ]}
            />
          </div>
        </div>
        <div className="rounded-3xl border-2 border-[#1A1A1A] bg-white p-6 shadow-[5px_5px_0px_0px_#1A1A1A]">
          <div className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#1A1A1A]/55">
            Скорее нужен полноценный сайт
          </div>
          <div className="mt-4">
            <BulletList
              items={[
                "услуг несколько",
                "человек выбирает и сравнивает",
                "важны кейсы, страницы услуг и доверие",
                "нужен SEO-слой",
                "сайт должен быть основой, а не временным решением",
              ]}
            />
          </div>
        </div>
      </div>

      <p>
        Если по списку выходит что-то среднее, не надо насильно выбирать один
        формат из теории. Иногда нормальный путь — начать с лендинга под один
        оффер, а потом дорастить это до сайта. Иногда наоборот: делать сайт, но
        под рекламу вести трафик на отдельную сильную страницу.
      </p>

      <SectionHeading>Что дешевле в реальности</SectionHeading>
      <p>
        На старте лендинг почти всегда дешевле. Но в реальности важна не только
        стартовая цена. Важно ещё:
      </p>
      <BulletList
        items={[
          "будет ли страницу легко масштабировать",
          "придётся ли всё переделывать через полгода",
          "поддерживает ли формат рекламу, поиск и доверие",
        ]}
      />
      <p>
        Если выбрать правильный формат с первого раза, вы экономите деньги,
        время и количество переделок.
      </p>

      <SectionHeading>Частые вопросы</SectionHeading>
      <div className="space-y-5">
        {[
          {
            q: "Можно ли начать с лендинга, а потом вырасти в сайт?",
            a: "Да. И это часто нормальный путь. Особенно если сначала нужно быстро проверить один оффер.",
          },
          {
            q: "Можно ли вести рекламу на многостраничный сайт?",
            a: "Да. Но чаще всего не на главную, а на конкретную страницу, собранную под этот оффер и этот запрос.",
          },
          {
            q: "Подходит ли лендинг для SEO?",
            a: "Частично. Но если вам нужен системный органический рост, полноценный сайт обычно сильнее.",
          },
          {
            q: "Что лучше для сервисного бизнеса в Чехии?",
            a: "Если услуг несколько и решение принимается не мгновенно, чаще лучше полноценный сайт. Если запускается одна конкретная услуга под рекламу, часто лучше лендинг.",
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
        Вопрос не в том, что лучше вообще. Вопрос в том, какую работу должен
        делать сайт.
      </p>
      <p>
        Лендинг хорош, когда нужен один оффер, один путь и быстрый запуск.
        Полноценный сайт нужен, когда бизнесу уже важны доверие, структура,
        поиск и запас для роста. Ошибка начинается в тот момент, когда формат
        выбирают не по роли, а по впечатлению.
      </p>
    </>
  );
}
