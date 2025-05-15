"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import ClockComponent from "@/app/components/clock"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"

export default function InvesticniStrategiePage() {
  return (
    <div className="min-h-screen bg-[#050A14] text-white relative overflow-hidden">
      <Navbar />

      {/* Animované pozadí */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Hlavní gradient */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/20 to-transparent"
          style={{ opacity: 0.4 }}
        />

        {/* Animované kruhy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-red-600/20 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-red-600/20 blur-3xl"
        />

        {/* Mřížka na pozadí */}
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNzAgMEgzMHY2MGgzMFYwek01OSAxSDMxdjI4aDI4VjF6IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjxwYXRoIGQ9Ik0zMCAzMEgwdjMwaDMwVjMwek0yOSAzMUgxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMzBIMzB2MzBoMzBWMzB6TTU5IDMxSDMxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')]"
          style={{ opacity: 0.2 }}
        />
      </div>

      <main className="container mx-auto px-4 py-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <Link href="/blog" className="text-red-400 hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Zpět na blog
            </Link>
            <ClockComponent />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Investiční strategie pro začátečníky: Jak začít budovat své bohatství
          </h1>

          <div className="flex items-center text-gray-400 mb-8">
            <span className="mr-4">Publikováno: 5. června 2025</span>
            <span>Autor: Matěj Hrabák</span>
          </div>

          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image src="/images/investment-strategy.jpg" alt="Investiční strategie" fill className="object-cover" />
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-semibold mt-8 mb-4">Úvod do investování</h2>
            <p>
              Investování je jedním z nejefektivnějších způsobů, jak budovat bohatství a zajistit si finanční
              nezávislost. Na rozdíl od spoření, kde vaše peníze ztrácejí hodnotu kvůli inflaci, investování umožňuje
              vašim penězům růst a pracovat pro vás. Přesto mnoho lidí s investováním váhá, často kvůli nedostatku
              znalostí, strachu z rizika nebo přesvědčení, že investování je jen pro bohaté.
            </p>
            <p>
              Tento článek je určen pro začátečníky, kteří chtějí začít investovat, ale nejsou si jisti, jak na to.
              Provedeme vás základními principy investování, různými typy investic a praktickými kroky, jak začít
              budovat své investiční portfolio.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Základní principy investování</h2>
            <p>
              Než se pustíme do konkrétních investičních strategií, je důležité pochopit několik základních principů,
              které by měl znát každý investor:
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">1. Začněte co nejdříve</h3>
            <p>
              Díky složenému úročení je čas vaším největším spojencem. Čím dříve začnete investovat, tím více času mají
              vaše investice na růst. Například pokud začnete investovat ve 25 letech místo ve 35, můžete skončit s
              dvojnásobkem peněz ve věku 65 let, i když investujete stejnou částku.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">2. Investujte pravidelně</h3>
            <p>
              Pravidelné investování (např. měsíčně) má několik výhod. Zaprvé, vytváří disciplínu a zvyk. Zadruhé,
              využívá strategii průměrování nákladů (dollar-cost averaging), která snižuje riziko špatného načasování
              trhu. Když investujete pravidelně, někdy nakupujete, když jsou ceny vysoké, a jindy, když jsou nízké, což
              v průměru vede k lepším výsledkům než pokus o načasování trhu.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">3. Diverzifikujte</h3>
            <p>
              "Nedávejte všechna vejce do jednoho košíku" je základní princip investování. Diverzifikace znamená
              rozložení investic mezi různé třídy aktiv (akcie, dluhopisy, nemovitosti), sektory, regiony a časová
              období. Tím snižujete riziko, protože pokles v jedné oblasti může být kompenzován růstem v jiné.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">4. Investujte s dlouhodobým horizontem</h3>
            <p>
              Investování je maraton, ne sprint. Krátkodobé výkyvy na trzích jsou běžné, ale historicky trhy dlouhodobě
              rostou. Pokud investujete s horizontem 10 a více let, máte vysokou pravděpodobnost pozitivního výnosu, i
              když projdete několika krizemi.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">5. Buďte si vědomi poplatků</h3>
            <p>
              Poplatky mohou výrazně snížit vaše výnosy, zejména v dlouhodobém horizontu. Rozdíl mezi fondem s poplatkem
              0,5 % a 2 % ročně může za 30 let znamenat rozdíl desítek procent ve výsledné hodnotě investice.
            </p>

            <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
              <Image src="/images/compound-interest.jpg" alt="Složené úročení" fill className="object-cover" />
            </div>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Typy investic pro začátečníky</h2>
            <p>
              Existuje mnoho způsobů, jak investovat, ale pro začátečníky jsou některé vhodnější než jiné. Zde jsou
              nejběžnější typy investic, které stojí za zvážení:
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">1. Podílové fondy a ETF</h3>
            <p>
              Podílové fondy a ETF (Exchange-Traded Funds) jsou skvělým způsobem, jak začít investovat s relativně malou
              částkou a získat okamžitou diverzifikaci. Tyto fondy shromažďují peníze od mnoha investorů a investují je
              do široké škály aktiv podle své investiční strategie.
            </p>
            <p>
              ETF jsou obchodovány na burze jako akcie a obvykle mají nižší poplatky než aktivně řízené podílové fondy.
              Pro začátečníky jsou vhodné zejména indexové ETF, které jednoduše sledují určitý tržní index, jako je S&P
              500 nebo MSCI World.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">2. Akcie</h3>
            <p>
              Akcie představují podíl na vlastnictví společnosti. Když kupujete akcie, stáváte se částečným vlastníkem
              firmy a máte nárok na část jejích zisků ve formě dividend a na potenciální růst hodnoty akcií.
            </p>
            <p>
              Investování do jednotlivých akcií vyžaduje více znalostí a výzkumu než investování do fondů, ale může
              přinést vyšší výnosy. Pro začátečníky je obvykle lepší začít s ETF a postupně přidávat jednotlivé akcie,
              až získají více zkušeností.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">3. Dluhopisy</h3>
            <p>
              Dluhopisy jsou v podstatě půjčky, které poskytujete vládám nebo firmám. Na oplátku vám slibují vrátit
              půjčenou částku (jistinu) v určitém termínu a mezitím vám platit úroky.
            </p>
            <p>
              Dluhopisy jsou obecně méně rizikové než akcie, ale také nabízejí nižší potenciální výnosy. Jsou důležitou
              součástí diverzifikovaného portfolia, zejména když se blížíte k cíli svého investování nebo když chcete
              snížit celkové riziko portfolia.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">4. Nemovitosti</h3>
            <p>
              Investice do nemovitostí může být přímá (koupě nemovitosti) nebo nepřímá (investice do REIT - Real Estate
              Investment Trusts nebo nemovitostních fondů).
            </p>
            <p>
              Přímé investice do nemovitostí vyžadují značný kapitál a jsou méně likvidní, ale mohou přinést stabilní
              příjem z pronájmu a potenciální zhodnocení. Pro začátečníky jsou často vhodnější REIT nebo nemovitostní
              fondy, které nabízejí diverzifikaci a likviditu s menší počáteční investicí.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">5. Spořicí účty a termínované vklady</h3>
            <p>
              I když nejde o investice v pravém slova smyslu, spořicí účty a termínované vklady jsou bezpečným způsobem,
              jak uchovat hodnotu peněz s minimálním rizikem. Výnosy jsou obvykle nízké, často sotva pokrývají inflaci,
              ale tyto produkty jsou vhodné pro krátkodobé cíle nebo jako bezpečná část vašeho portfolia.
            </p>

            <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
              <Image src="/images/investment-types.jpg" alt="Typy investic" fill className="object-cover" />
            </div>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Jak začít investovat: Praktický průvodce</h2>
            <p>Nyní, když znáte základní principy a typy investic, pojďme se podívat na konkrétní kroky, jak začít:</p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">1. Stanovte si finanční cíle</h3>
            <p>
              Před zahájením investování si ujasněte, proč investujete a jaké jsou vaše finanční cíle. Chcete si
              našetřit na důchod, na koupi domu, na vzdělání dětí nebo na jiný konkrétní cíl? Váš cíl určí váš
              investiční horizont, toleranci k riziku a vhodnou investiční strategii.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">2. Vytvořte si finanční rezervu</h3>
            <p>
              Před zahájením investování byste měli mít vytvořenou finanční rezervu na pokrytí neočekávaných výdajů.
              Doporučuje se mít rezervu ve výši 3-6 měsíčních výdajů na snadno dostupném účtu.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">3. Splaťte drahé dluhy</h3>
            <p>
              Pokud máte dluhy s vysokým úrokem (např. kreditní karty), je obvykle lepší nejprve splatit tyto dluhy, než
              začnete investovat. Úroky, které ušetříte splacením dluhu, jsou garantovaným "výnosem", který je často
              vyšší než potenciální výnos z investic.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">4. Vzdělávejte se</h3>
            <p>
              Investování vyžaduje určité znalosti. Čtěte knihy, sledujte kurzy, poslouchejte podcasty a sledujte
              finanční zprávy. Čím více budete rozumět investování, tím lepší rozhodnutí budete schopni dělat.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">5. Vyberte si brokera nebo investiční platformu</h3>
            <p>
              Pro investování potřebujete brokera nebo investiční platformu. Při výběru zvažte poplatky, dostupné
              investiční produkty, uživatelskou přívětivost, vzdělávací materiály a zákaznickou podporu.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">6. Začněte s malou částkou</h3>
            <p>
              Nemusíte začínat s velkou sumou. Mnoho platforem umožňuje začít investovat již s několika stovkami korun
              měsíčně. Důležitější než částka je pravidelnost a dlouhodobý přístup.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">7. Vytvořte si investiční plán</h3>
            <p>
              Rozhodněte se, kolik budete investovat, jak často a do jakých aktiv. Váš plán by měl odpovídat vašim
              cílům, časovému horizontu a toleranci k riziku.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">8. Pravidelně revidujte své portfolio</h3>
            <p>
              Investování není jednorázová záležitost. Pravidelně (např. jednou ročně) kontrolujte své portfolio a v
              případě potřeby ho upravte. Jak se blížíte k cíli nebo jak se mění vaše životní situace, může být potřeba
              změnit alokaci aktiv.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Investiční strategie pro začátečníky</h2>
            <p>
              Pro začátečníky je obvykle nejvhodnější jednoduchá, pasivní investiční strategie. Zde jsou tři populární
              přístupy:
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">1. Strategie "Kup a drž"</h3>
            <p>
              Tato strategie spočívá v nákupu kvalitních, diverzifikovaných investic a jejich dlouhodobém držení bez
              ohledu na krátkodobé výkyvy trhu. Je to jednoduchá, nízkonákladová strategie, která minimalizuje obchodní
              poplatky a daňové dopady.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">2. Indexové investování</h3>
            <p>
              Místo snahy o překonání trhu (což je těžké i pro profesionály) tato strategie jednoduše sleduje výkonnost
              tržního indexu, jako je S&P 500 nebo MSCI World. Indexové fondy a ETF nabízejí širokou diverzifikaci a
              nízké poplatky.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">3. Strategie "60/40"</h3>
            <p>
              Tato klasická strategie alokuje 60 % portfolia do akcií (pro růst) a 40 % do dluhopisů (pro stabilitu a
              příjem). Je to jednoduchý způsob, jak vytvořit vyvážené portfolio, které může fungovat v různých tržních
              podmínkách.
            </p>

            <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
              <Image src="/images/portfolio-allocation.jpg" alt="Alokace portfolia" fill className="object-cover" />
            </div>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Časté chyby začínajících investorů</h2>
            <p>Při zahájení investování se vyvarujte těchto běžných chyb:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Načasování trhu</strong> – Snaha o předpověď, kdy trh dosáhne vrcholu nebo dna, je téměř nemožná
                i pro profesionály. Místo toho investujte pravidelně bez ohledu na aktuální stav trhu.
              </li>
              <li>
                <strong>Přílišné obchodování</strong> – Časté nákupy a prodeje vedou k vyšším poplatkům a často k horším
                výsledkům. Držte se svého plánu a obchodujte minimálně.
              </li>
              <li>
                <strong>Sledování krátkodobých výkyvů</strong> – Denní sledování hodnoty vašeho portfolia může vést k
                emocionálním rozhodnutím. Zaměřte se na dlouhodobý cíl.
              </li>
              <li>
                <strong>Nedostatečná diverzifikace</strong> – Investování příliš mnoho do jedné společnosti, sektoru
                nebo třídy aktiv zvyšuje riziko.
              </li>
              <li>
                <strong>Ignorování poplatků</strong> – I malé rozdíly v poplatcích mohou mít v dlouhodobém horizontu
                velký dopad na vaše výnosy.
              </li>
              <li>
                <strong>Investování bez plánu</strong> – Náhodné investování bez jasného cíle a strategie obvykle nevede
                k optimálním výsledkům.
              </li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Závěr</h2>
            <p>
              Investování je jedním z nejefektivnějších způsobů, jak budovat bohatství a dosáhnout finančních cílů. I
              když může být zpočátku zastrašující, s trochou vzdělání a disciplíny může každý začít úspěšně investovat.
            </p>
            <p>
              Pamatujte na základní principy: začněte co nejdříve, investujte pravidelně, diverzifikujte, zaměřte se na
              dlouhodobý horizont a buďte si vědomi poplatků. Začněte s jednoduchou strategií, jako je indexové
              investování, a postupně rozšiřujte své znalosti a portfolio.
            </p>
            <p>
              Nejdůležitější je začít. I malá částka investovaná dnes může díky síle složeného úročení v budoucnu
              výrazně narůst. Jak říká staré čínské přísloví: "Nejlepší čas zasadit strom byl před dvaceti lety. Druhý
              nejlepší čas je teď."
            </p>

            <div className="bg-blue-900 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Potřebujete poradit s investiční strategií?</h3>
              <p className="mb-4">
                Nabízím nezávislé finanční poradenství včetně vytvoření individuální investiční strategie. Pomohu vám
                nastavit portfolio odpovídající vašim cílům, časovému horizontu a toleranci k riziku.
              </p>
              <Link
                href="/schuzka"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
              >
                Sjednat nezávaznou konzultaci
              </Link>
            </div>

            <h2 className="text-3xl font-semibold mt-12 mb-6">Související články</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/penzijni-pripojisteni-a-sporeni-na-duchod" className="block group">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/penzijko.jpg"
                    alt="Penzijní připojištění"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
                  Penzijní připojištění a spoření na důchod
                </h3>
                <p className="text-gray-400 mt-2">
                  Jak se finančně zajistit na stáří a využít všechny dostupné státní podpory.
                </p>
              </Link>
              <Link href="/blog/jak-spravne-nastavit-zivotni-pojisteni" className="block group">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/life-insurance.jpg"
                    alt="Životní pojištění"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
                  Jak správně nastavit životní pojištění
                </h3>
                <p className="text-gray-400 mt-2">
                  Průvodce výběrem a nastavením životního pojištění pro maximální ochranu vás a vaší rodiny.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
