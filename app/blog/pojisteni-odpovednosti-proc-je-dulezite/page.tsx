"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import ClockComponent from "@/app/components/clock"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"

export default function PojisteniOdpovednostiPage() {
  return (
    <div className="min-h-screen bg-[#050A14] text-white relative overflow-hidden">
      

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
            
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Pojištění odpovědnosti: Proč je důležité a jak ho správně nastavit
          </h1>

          <div className="flex items-center text-gray-400 mb-8">
            <span className="mr-4">Publikováno: 12. června 2025</span>
            <span>Autor: Matěj Hrabák</span>
          </div>

          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image src="/images/liability-insurance.jpg" alt="Pojištění odpovědnosti" fill className="object-cover" />
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-semibold mt-8 mb-4">Co je pojištění odpovědnosti a proč ho potřebujete?</h2>
            <p>
              Pojištění odpovědnosti patří mezi nejdůležitější, ale často přehlížené typy pojištění. Na rozdíl od
              pojištění majetku, které chrání vaše vlastní věci, pojištění odpovědnosti vás chrání před finančními
              následky škod, které způsobíte někomu jinému – ať už na zdraví, majetku nebo finančních zájmech.
            </p>
            <p>
              V dnešním světě, kde soudní spory a náhrady škod mohou dosahovat milionových částek, může být absence
              pojištění odpovědnosti finančně devastující. Stačí malá nepozornost, nešťastná náhoda nebo chyba v úsudku,
              a můžete čelit nárokům, které daleko přesahují vaše finanční možnosti.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Typy pojištění odpovědnosti</h2>
            <p>Existuje několik typů pojištění odpovědnosti, které by měl každý zvážit podle své životní situace:</p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">1. Pojištění odpovědnosti z běžného občanského života</h3>
            <p>
              Toto pojištění, někdy nazývané také "pojištění odpovědnosti v běžném životě" nebo "občanka", kryje škody,
              které způsobíte v běžném životě – například když nechtěně rozbijete sousedovo okno míčem, váš pes pokouše
              kolemjdoucího, nebo způsobíte nehodu na kole.
            </p>
            <p>
              Toto pojištění je základním typem pojištění odpovědnosti, které by měl mít každý. Je relativně levné
              (řádově stokoruny ročně) a může vás ochránit před finančními následky běžných nehod.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">2. Pojištění odpovědnosti z vlastnictví nemovitosti</h3>
            <p>
              Pokud vlastníte nemovitost, toto pojištění vás chrání před škodami, které mohou vzniknout v souvislosti s
              vaší nemovitostí – například když ze střechy spadne sníh a poškodí zaparkované auto, nebo když někdo
              uklouzne na neuklizeném chodníku před vaším domem.
            </p>
            <p>
              Toto pojištění je často součástí pojištění nemovitosti, ale může být sjednáno i samostatně. Je důležité
              zejména pro vlastníky domů, bytů nebo rekreačních objektů.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">3. Pojištění profesní odpovědnosti</h3>
            <p>
              Toto pojištění je určeno pro profesionály, kteří poskytují odborné služby – lékaře, právníky, účetní,
              architekty, IT specialisty a další. Kryje škody, které mohou vzniknout v důsledku chyby nebo opomenutí při
              výkonu profese.
            </p>
            <p>
              Pro některé profese je toto pojištění povinné ze zákona, pro jiné je dobrovolné, ale vysoce doporučované.
              Náklady na soudní spory a náhrady škod v profesních záležitostech mohou být extrémně vysoké.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">
              4. Pojištění odpovědnosti zaměstnance za škodu způsobenou zaměstnavateli
            </h3>
            <p>
              Toto pojištění kryje škody, které způsobíte svému zaměstnavateli při výkonu práce – například když
              rozbijete firemní notebook, způsobíte dopravní nehodu služebním autem, nebo uděláte chybu, která vede k
              finanční ztrátě.
            </p>
            <p>
              Podle zákoníku práce může zaměstnavatel po zaměstnanci požadovat náhradu škody až do výše 4,5násobku
              průměrného měsíčního výdělku. Toto pojištění je proto důležité zejména pro zaměstnance, kteří pracují s
              drahým vybavením, řídí služební vozidla nebo mají přístup k finančním prostředkům.
            </p>

            <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
              <Image
                src="/images/liability-claim.jpg"
                alt="Pojistná událost odpovědnosti"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Co kryje pojištění odpovědnosti?</h2>
            <p>Pojištění odpovědnosti obvykle kryje tři typy škod:</p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">1. Škody na zdraví</h3>
            <p>
              Pokud způsobíte někomu zranění nebo smrt, pojištění odpovědnosti může krýt náklady na léčbu, rehabilitaci,
              ušlý výdělek, bolestné, ztížení společenského uplatnění a v případě smrti i náhradu pro pozůstalé.
            </p>
            <p>
              Tyto náklady mohou být velmi vysoké, zejména pokud jde o vážné zranění s dlouhodobými následky. Například
              trvalé následky po úrazu mohou vést k náhradám v řádu milionů korun.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">2. Škody na majetku</h3>
            <p>
              Pokud poškodíte nebo zničíte cizí majetek, pojištění odpovědnosti může krýt náklady na opravu nebo
              náhradu. To zahrnuje jak hmotný majetek (např. auto, elektroniku, nábytek), tak i nehmotný majetek (např.
              data, software).
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">3. Finanční škody</h3>
            <p>
              Některá pojištění odpovědnosti kryjí i čistě finanční škody, které vzniknou bez souvislosti se škodou na
              zdraví nebo majetku – například ušlý zisk, náklady na právní zastoupení nebo soudní výlohy.
            </p>
            <p>
              Toto krytí je obzvláště důležité u profesního pojištění odpovědnosti, kde chyba může vést k významným
              finančním ztrátám klienta.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Jak vybrat správné pojištění odpovědnosti?</h2>
            <p>Při výběru pojištění odpovědnosti zvažte následující faktory:</p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">1. Limit pojistného plnění</h3>
            <p>
              Limit pojistného plnění je maximální částka, kterou pojišťovna vyplatí v případě pojistné události. Měl by
              být dostatečně vysoký, aby pokryl potenciální škody, které byste mohli způsobit.
            </p>
            <p>
              Pro pojištění odpovědnosti z běžného občanského života se doporučuje limit alespoň 5-10 milionů Kč, pro
              profesní odpovědnost může být potřeba i vyšší limit v závislosti na povaze vaší práce.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">2. Rozsah krytí</h3>
            <p>
              Zkontrolujte, jaké typy škod a situací pojištění kryje. Některá pojištění mohou mít omezení nebo výluky
              pro určité typy škod nebo situace.
            </p>
            <p>
              Například některá pojištění odpovědnosti z běžného života nekryjí škody způsobené při sportu nebo při
              používání motorových vozidel (ty jsou kryty povinným ručením).
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">3. Územní platnost</h3>
            <p>
              Zkontrolujte, kde všude pojištění platí. Některá pojištění jsou omezena na Českou republiku, jiná platí v
              celé Evropě nebo dokonce celosvětově.
            </p>
            <p>Pokud často cestujete do zahraničí, je důležité mít pojištění s odpovídající územní platností.</p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">4. Spoluúčast</h3>
            <p>
              Spoluúčast je částka, kterou hradíte sami v případě pojistné události. Vyšší spoluúčast obvykle znamená
              nižší pojistné, ale v případě škody zaplatíte více ze svého.
            </p>
            <p>
              Pro pojištění odpovědnosti se doporučuje nízká nebo žádná spoluúčast, protože i malé škody mohou vést k
              soudním sporům a dalším nákladům.
            </p>

            <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
              <Image
                src="/images/insurance-contract-signing.jpg"
                alt="Podpis pojistné smlouvy"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Časté mýty o pojištění odpovědnosti</h2>
            <p>Kolem pojištění odpovědnosti existuje několik mýtů, které mohou vést k nedostatečné ochraně:</p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Mýtus 1: "Jsem opatrný, nic se mi nestane."</h3>
            <p>
              I ti nejopatrnější lidé mohou způsobit nehodu. Stačí chvilka nepozornosti, špatné počasí nebo technická
              závada, a můžete čelit nárokům na náhradu škody.
            </p>
            <p>
              Pojištění odpovědnosti není jen pro neopatrné lidi – je to finanční ochrana pro všechny pro případ, že se
              něco pokazí.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Mýtus 2: "Nemám majetek, takže nemám co ztratit."</h3>
            <p>
              I když nemáte významný majetek, můžete být stále odpovědní za škody, které způsobíte. V případě soudního
              sporu může být nařízeno zabavení části vašeho budoucího příjmu nebo majetku, který získáte v budoucnu.
            </p>
            <p>Pojištění odpovědnosti chrání nejen váš současný majetek, ale i vaši budoucí finanční stabilitu.</p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Mýtus 3: "Mám pojištění domácnosti, to stačí."</h3>
            <p>
              Pojištění domácnosti kryje škody na vašem vlastním majetku, ne škody, které způsobíte jiným. Některé
              pojistky domácnosti sice zahrnují i základní pojištění odpovědnosti, ale často s nízkými limity.
            </p>
            <p>
              Je důležité zkontrolovat, zda a v jakém rozsahu vaše pojištění domácnosti zahrnuje pojištění odpovědnosti,
              a případně si sjednat samostatné pojištění odpovědnosti s dostatečným limitem.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Reálné příklady z praxe</h2>
            <p>Pojištění odpovědnosti může být užitečné v mnoha situacích. Zde jsou některé reálné příklady z praxe:</p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Příklad 1: Škoda při sportu</h3>
            <p>
              Pan Novák při lyžování nechtěně srazil jiného lyžaře, který utrpěl zlomeninu nohy a poškození lyžařského
              vybavení. Náklady na léčbu, rehabilitaci, bolestné a náhradu poškozeného vybavení přesáhly 500 000 Kč.
              Díky pojištění odpovědnosti z běžného života s limitem 10 milionů Kč byly tyto náklady kryty pojišťovnou.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Příklad 2: Škoda způsobená dítětem</h3>
            <p>
              Desetiletý syn paní Svobodové při hře s míčem rozbil sousedovo okno a poškodil drahý televizor, který stál
              pod oknem. Celková škoda činila 45 000 Kč. Pojištění odpovědnosti z běžného života, které měla paní
              Svobodová sjednané, krylo i škody způsobené jejími dětmi, takže pojišťovna uhradila celou částku.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Příklad 3: Profesní pochybení</h3>
            <p>
              Účetní pan Černý udělal chybu v daňovém přiznání svého klienta, což vedlo k doměření daně, penále a úrokům
              z prodlení v celkové výši 120 000 Kč. Díky pojištění profesní odpovědnosti byly tyto náklady kryty
              pojišťovnou.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Závěr</h2>
            <p>
              Pojištění odpovědnosti je důležitou součástí finanční ochrany každého člověka. I když doufáme, že ho nikdy
              nebudeme potřebovat, v případě nečekané události může ochránit náš majetek a finanční stabilitu.
            </p>
            <p>
              Při výběru pojištění odpovědnosti je důležité zvážit svou životní situaci, potenciální rizika a možné
              finanční dopady. Investice do kvalitního pojištění odpovědnosti s dostatečným limitem je malou cenou za
              klid a jistotu, že v případě nehody nebudete čelit finančním problémům.
            </p>
            <p>
              Nezapomeňte, že pojištění odpovědnosti není jen o ochraně vašeho majetku – je to také o odpovědnosti vůči
              ostatním a zajištění, že v případě, že způsobíte škodu, bude poškozený adekvátně odškodněn.
            </p>

            <div className="bg-blue-900 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Potřebujete poradit s pojištěním odpovědnosti?</h3>
              <p className="mb-4">
                Nabízím nezávislé poradenství v oblasti pojištění odpovědnosti. Pomohu vám vybrat nejvhodnější pojištění
                pro vaši konkrétní situaci a zajistím, abyste byli dostatečně chráněni za rozumnou cenu.
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
              <Link href="/blog/pojisteni-majetku-a-domacnosti" className="block group">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/home-insurance.jpg"
                    alt="Pojištění majetku a domácnosti"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
                  Jak správně pojistit svůj majetek a domácnost
                </h3>
                <p className="text-gray-400 mt-2">
                  Komplexní průvodce pojištěním nemovitosti a domácnosti pro maximální ochranu vašeho majetku.
                </p>
              </Link>
              <Link href="/blog/cestovni-pojisteni-jak-se-spravne-pojistit-na-cesty" className="block group">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/travel-insurance.jpg"
                    alt="Cestovní pojištění"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
                  Cestovní pojištění: Jak se správně pojistit na cesty
                </h3>
                <p className="text-gray-400 mt-2">
                  Průvodce výběrem správného cestovního pojištění pro bezstarostné cestování.
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
