"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import ClockComponent from "@/app/components/clock"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"

export default function CestovniPojisteniPage() {
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

          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cestovní pojištění: Jak se správně pojistit na cesty</h1>

          <div className="flex items-center text-gray-400 mb-8">
            <span className="mr-4">Publikováno: 28. května 2025</span>
            <span>Autor: Matěj Hrabák</span>
          </div>

          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image src="/images/travel-insurance.webp" alt="Cestovní pojištění" fill className="object-cover" />
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-semibold mt-8 mb-4">Proč je cestovní pojištění nezbytné?</h2>
            <p>
              Cestování přináší nezapomenutelné zážitky, ale také rizika. Ať už jde o ztrátu zavazadel, zrušení letu,
              nebo - což je nejzávažnější - zdravotní komplikace v zahraničí, cestovní pojištění vám může ušetřit nejen
              starosti, ale i značné finanční výdaje. V některých zemích mohou náklady na lékařskou péči dosáhnout
              astronomických částek, které by mohly zruinovat váš rodinný rozpočet.
            </p>
            <p>
              Evropský průkaz zdravotního pojištění (EHIC) sice poskytuje základní krytí v zemích EU, ale má významná
              omezení. Kryje pouze nezbytnou zdravotní péči ve státních zařízeních, a to jen do výše, která je hrazena
              místním pojištěncům (což může znamenat spoluúčast). Navíc nekryje repatriaci (převoz zpět do ČR), která
              může stát i několik milionů korun.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Co by mělo zahrnovat kvalitní cestovní pojištění?</h2>
            <p>Dobré cestovní pojištění by mělo zahrnovat několik klíčových složek:</p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">1. Léčebné výlohy</h3>
            <p>
              Toto je nejdůležitější složka cestovního pojištění. Kryje náklady na lékařské ošetření, hospitalizaci,
              léky, a v případě potřeby i převoz do jiného zdravotnického zařízení nebo repatriaci zpět do ČR. Limit
              pojistného plnění by měl být dostatečně vysoký - pro cesty do USA, Kanady nebo Japonska doporučuji
              minimálně 5-10 milionů Kč, pro Evropu alespoň 3-5 milionů Kč.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">2. Úrazové pojištění</h3>
            <p>
              Kryje trvalé následky úrazu nebo úmrtí následkem úrazu. Je důležité zejména pro rizikovější aktivity jako
              lyžování, horolezectví nebo potápění.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">3. Pojištění odpovědnosti za škodu</h3>
            <p>
              Kryje škody, které způsobíte třetím osobám - ať už jde o škody na zdraví nebo na majetku. Představte si,
              že při lyžování srazíte jiného lyžaře, který utrpí vážné zranění. Náklady na jeho léčbu a odškodnění by
              mohly být velmi vysoké.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">4. Pojištění zavazadel</h3>
            <p>
              Kryje ztrátu, krádež nebo poškození vašich zavazadel a osobních věcí. Některé pojišťovny nabízejí i krytí
              pro elektroniku, sportovní vybavení nebo cennosti, ale často s nižšími limity.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">5. Pojištění storna cesty</h3>
            <p>
              Kryje náklady, které vám vzniknou, pokud musíte cestu zrušit z vážných důvodů, jako je nemoc, úraz, úmrtí
              v rodině nebo živelná pohroma v místě bydliště. Toto pojištění je třeba sjednat co nejdříve po zaplacení
              zájezdu nebo letenky.
            </p>

            <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
              <Image
                src="/images/travel-medical-emergency.webp"
                alt="Zdravotní pohotovost v zahraničí"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Jak vybrat správné cestovní pojištění?</h2>
            <p>Při výběru cestovního pojištění zvažte následující faktory:</p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Destinace</h3>
            <p>
              Pojištění se často dělí podle geografických zón (Evropa, svět bez USA a Kanady, svět včetně USA a Kanady).
              Cesty do USA, Kanady, Japonska nebo Austrálie vyžadují vyšší limity pojistného plnění kvůli vysokým
              nákladům na zdravotní péči v těchto zemích.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Délka cesty</h3>
            <p>
              Můžete si sjednat jednorázové pojištění na konkrétní cestu nebo celoroční pojištění pro opakované cesty.
              Celoroční pojištění je výhodnější, pokud cestujete více než 2-3krát ročně, ale obvykle má omezení na délku
              jednoho výjezdu (typicky 30-90 dní).
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Plánované aktivity</h3>
            <p>
              Standardní cestovní pojištění obvykle nekryje rizikové sporty a aktivity. Pokud plánujete lyžování,
              potápění, paragliding nebo jiné adrenalinové aktivity, je třeba sjednat příslušné připojištění.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Zdravotní stav</h3>
            <p>
              Většina pojišťoven vylučuje z krytí léčbu chronických onemocnění, která byla diagnostikována před cestou,
              pokud nedošlo k neočekávanému zhoršení. Pokud máte chronické onemocnění, je důležité tuto skutečnost
              pojišťovně sdělit a případně sjednat speciální připojištění.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Limity pojistného plnění</h3>
            <p>
              Nešetřete na limitech, zejména u léčebných výloh. Náklady na léčbu v zahraničí mohou být velmi vysoké -
              například hospitalizace v USA může stát desítky tisíc dolarů denně.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Časté chyby při sjednávání cestovního pojištění</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Nedostatečné limity pojistného plnění</strong> - Zejména u léčebných výloh může být nízký limit
                fatální. Nešetřete na pojistném na úkor limitů.
              </li>
              <li>
                <strong>Nesprávně uvedené informace</strong> - Zatajení chronického onemocnění nebo plánovaných
                rizikových aktivit může vést k odmítnutí plnění.
              </li>
              <li>
                <strong>Pozdní sjednání pojištění storna</strong> - Pojištění storna je třeba sjednat co nejdříve po
                zaplacení zájezdu nebo letenky, ne až těsně před odjezdem.
              </li>
              <li>
                <strong>Spoléhání se pouze na pojištění k platební kartě</strong> - Pojištění k platebním kartám často
                nabízí nižší limity a omezenější krytí. Vždy si ověřte, co přesně kryje.
              </li>
              <li>
                <strong>Neseznámení se s výlukami</strong> - Každá pojistka má výluky, tedy situace, na které se
                pojištění nevztahuje. Je důležité je znát, abyste nebyli nepříjemně překvapeni.
              </li>
            </ol>

            <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
              <Image
                src="/images/travel-insurance-claim.webp"
                alt="Pojistná událost na cestách"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Co dělat v případě pojistné události v zahraničí?</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Kontaktujte asistenční službu pojišťovny</strong> - Telefonní číslo najdete na kartičce
                pojištěnce nebo v pojistné smlouvě. Asistenční služba vám poradí, jak postupovat, a případně vám
                doporučí vhodné zdravotnické zařízení.
              </li>
              <li>
                <strong>Uschovejte všechny doklady</strong> - Účty za léčbu, léky, dopravu, policejní protokoly v
                případě krádeže apod. Budete je potřebovat při uplatnění nároku na pojistné plnění.
              </li>
              <li>
                <strong>Pořiďte fotodokumentaci</strong> - V případě škody na zavazadlech, úrazu nebo škody způsobené
                třetí osobě pořiďte fotografie jako důkaz.
              </li>
              <li>
                <strong>Nahlaste událost co nejdříve</strong> - Většina pojišťoven vyžaduje nahlášení pojistné události
                do určité doby po návratu (obvykle 30 dní).
              </li>
              <li>
                <strong>Vyplňte formulář pojistné události</strong> - Po návratu vyplňte formulář pojistné události
                (najdete ho na webu pojišťovny) a přiložte všechny relevantní doklady.
              </li>
            </ol>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Specifika cestovního pojištění pro různé typy cest</h2>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Pracovní cesty</h3>
            <p>
              Standardní turistické pojištění obvykle nekryje pracovní cesty nebo je kryje jen v omezené míře. Pro
              pracovní cesty je třeba sjednat speciální pojištění, které kryje i případné pracovní úrazy.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Sportovní aktivity</h3>
            <p>
              Jak již bylo zmíněno, rizikové sporty vyžadují speciální připojištění. Pojišťovny obvykle dělí sporty do
              několika kategorií podle rizikovosti, od běžných rekreačních sportů (které jsou kryty standardním
              pojištěním) až po extrémní sporty (které mohou být nepojistitelné nebo vyžadují speciální pojištění).
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Těhotenství</h3>
            <p>
              Většina pojišťoven kryje komplikace v těhotenství do určitého týdne (obvykle 26.-28. týden). Po tomto
              termínu může být obtížné nebo nemožné sjednat pojištění. Vždy si ověřte podmínky konkrétní pojišťovny.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Senioři</h3>
            <p>
              Některé pojišťovny mají věkové limity pro sjednání pojištění nebo účtují vyšší pojistné pro starší osoby.
              Existují však specializované produkty pro seniory, které nabízejí přiměřené krytí za rozumnou cenu.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Závěr</h2>
            <p>
              Cestovní pojištění je nezbytnou součástí přípravy na každou cestu do zahraničí. I když doufáme, že ho
              nikdy nebudeme potřebovat, v případě nečekané události může ušetřit nejen peníze, ale i starosti a v
              krajním případě i zachránit život. Při výběru pojištění se nesoustřeďte pouze na cenu, ale především na
              rozsah krytí, limity pojistného plnění a podmínky pojištění.
            </p>
            <p>
              Pamatujte, že nejlepší cestovní pojištění je to, které odpovídá vašim konkrétním potřebám a plánům.
              Věnujte proto výběru dostatek času a v případě nejasností se nebojte obrátit na pojišťovacího poradce.
            </p>

            <div className="bg-blue-900 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Potřebujete poradit s výběrem cestovního pojištění?</h3>
              <p className="mb-4">
                Nabízím nezávislé poradenství v oblasti cestovního pojištění. Pomohu vám vybrat nejvhodnější pojištění
                pro vaši konkrétní cestu a zajistím, abyste byli dostatečně chráněni za rozumnou cenu.
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
              <Link href="/blog/jak-spravne-nastavit-zivotni-pojisteni" className="block group">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/life-insurance.webp"
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
              <Link href="/blog/pojisteni-majetku-a-domacnosti" className="block group">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/home-insurance.webp"
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
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
