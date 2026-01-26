"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { FileText, ArrowLeft } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#050A14] text-white relative">
      {/* Pozadí s gradientem a animovanými prvky */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hlavní gradient */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-900/20 to-transparent"
          style={{ opacity: 0.4 }}
        />

        {/* Animované kruhy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl"
        />

        {/* Mřížka na pozadí */}
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNzAgMEgwdjYwaDMwVjB6TTI5IDFIMXYyOGgyOFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMEgzMHY2MGgzMFYwek01OSAxSDMxdjI4aDI4VjF6IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjxwYXRoIGQ9Ik0zMCAzMEgwdjMwaDMwVjMwek0yOSAzMUgxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMzBIMzB2MzBoMzBWMzB6TTU5IDMxSDMxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')",
            opacity: 0.2,
          }}
        />
      </div>

      <WebDevNavbar />

      <main className="container mx-auto px-4 py-12 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zpět na hlavní stránku
          </Link>

          <div className="flex items-center mb-6">
            <FileText className="text-indigo-500 mr-3" size={32} />
            <h1 className="text-4xl font-bold">Podmínky použití</h1>
          </div>

          <p className="text-gray-400 mb-8">Platnost od: 1. ledna 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">1. Úvodní ustanovení</h2>
              <p className="text-gray-300 leading-relaxed">
                Tyto podmínky použití upravují pravidla používání webových stránek a služeb poskytovaných Matějem
                Hrabákem v oblasti webového vývoje. Používáním těchto webových stránek souhlasíte s těmito
                podmínkami.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">2. Poskytované služby</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Prostřednictvím těchto stránek poskytujeme:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Vývoj webových stránek a aplikací</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Konzultace a poradenství v oblasti webových technologií</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Prezentaci portfolia a referencí</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Možnost objednání zakázkového vývoje</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Blogové články a technické tipy</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">3. Práva a povinnosti uživatele</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Jako uživatel se zavazujete:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Poskytovat pravdivé a aktuální informace při kontaktu</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Nepoužívat stránky k nezákonným účelům</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Respektovat autorská práva a práva duševního vlastnictví</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Nešířit škodlivý software nebo spam</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Používat stránky v souladu s platnými zákony České republiky</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">4. Autorská práva a duševní vlastnictví</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Veškerý obsah těchto webových stránek, včetně textů, grafiky, log, fotografií, kódu a designu, je chráněn
                autorskými právy a jinými právy duševního vlastnictví a je majetkem Matěje Hrabáka.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Bez předchozího písemného souhlasu není dovoleno obsah kopírovat, distribuovat, upravovat nebo jinak
                využívat pro komerční účely. To platí zejména pro zdrojový kód, design a grafické prvky.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">5. Vyloučení odpovědnosti</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Informace na těchto stránkách jsou poskytovány v dobré víře, nicméně:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Neposkytujeme záruku za úplnost a aktuálnost všech technických informací</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Informace mají obecný informativní a prezentační charakter</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Prezentované projekty mohou být zobrazeny ve zkrácené podobě</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Neneseme odpovědnost za rozhodnutí učiněná výhradně na základě těchto informací</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Neručíme za obsah a dostupnost externích odkazů</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">6. Zakázkový vývoj</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                V případě zakázkového vývoje je vztah mezi klientem a vývojářem řízen samostatnou smlouvou, která specifikuje:
              </p>
              <div className="bg-[#111827]/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 space-y-2">
                <p className="text-gray-300">
                  <strong>Rozsah práce:</strong> Detailní popis funkcí a specifikací projektu
                </p>
                <p className="text-gray-300">
                  <strong>Časový harmonogram:</strong> Termíny dodání jednotlivých fází projektu
                </p>
                <p className="text-gray-300">
                  <strong>Cena a platební podmínky:</strong> Celková cena, zálohy a platební kalendář
                </p>
                <p className="text-gray-300">
                  <strong>Autorská práva:</strong> Převod autorských práv po úplném uhrazení ceny díla
                </p>
                <p className="text-gray-300">
                  <strong>Záruční podmínky:</strong> Poskytování záručního servisu a údržby
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">7. Ceny a platební podmínky</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Ceny za služby webového vývoje jsou stanoveny individuálně na základě:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Rozsahu a složitosti projektu</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Počtu hodin vývoje a konzultací</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Použitých technologií a nástrojů</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Požadavků na podporu a údržbu</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                Konkrétní cena a platební podmínky jsou vždy uvedeny v cenové nabídce nebo smlouvě o dílo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">8. Reklamace a stížnosti</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                V případě nespokojenos ti s našimi službami máte právo podat reklamaci nebo stížnost:
              </p>
              <div className="bg-[#111827]/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <p className="text-gray-300 mb-2">
                  <strong>Email:</strong> matejhrabak@gmail.com
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Telefon:</strong> +420 776 084 700
                </p>
                <p className="text-gray-300 mb-4">
                  <strong>Lhůta pro vyřízení:</strong> 30 dnů od doručení
                </p>
                <p className="text-gray-300 text-sm">
                  Pokud nejste spokojeni s vyřízením reklamace, můžete se obrátit na soud či jinak řešit spor v souladu
                  s platnými právními předpisy České republiky.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">9. Ochrana osobních údajů</h2>
              <p className="text-gray-300 leading-relaxed">
                Zpracování osobních údajů se řídí naším dokumentem{" "}
                <Link href="/privacy" className="text-indigo-400 hover:text-indigo-300 underline">
                  Ochrana soukromí
                </Link>
                , který je v souladu s nařízením GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">10. Odkazy na třetí strany</h2>
              <p className="text-gray-300 leading-relaxed">
                Naše stránky mohou obsahovat odkazy na webové stránky třetích stran, portfoliové projekty nebo externí nástroje.
                Za obsah, bezpečnost a dostupnost těchto stránek neneseme odpovědnost. Doporučujeme seznámit se s jejich
                podmínkami použití a zásadami ochrany soukromí.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">11. Dostupnost služeb</h2>
              <p className="text-gray-300 leading-relaxed">
                Snažíme se zajišťovat nepřetržitou dostupnost našich webových stránek, nicméně si vyhrazujeme právo na
                dočasné přerušení provozu z důvodu údržby, aktualizace, zálohování nebo jiných technických důvodů bez
                předchozího upozornění.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">12. Změny podmínek</h2>
              <p className="text-gray-300 leading-relaxed">
                Vyhrazujeme si právo tyto podmínky kdykoli změnit. Změny budou zveřejněny na těchto stránkách a
                nabývají účinnosti okamžikem zveřejnění. Doporučujeme tyto podmínky pravidelně kontrolovat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">13. Řešení sporů</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Případné spory vyplývající z používání těchto stránek nebo poskytovaných služeb budou řešeny:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Primárně smírnou cestou</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Případně prostřednictvím soudů České republiky</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>V souladu s právním řádem České republiky</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">14. Kontaktní informace</h2>
              <div className="bg-[#111827]/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <p className="text-gray-300 mb-2">
                  <strong>Matěj Hrabák</strong>
                </p>
                <p className="text-gray-300 mb-2">Fullstack developer</p>
                <p className="text-gray-300 mb-2">Email: matejhrabak@gmail.com</p>
                <p className="text-gray-300 mb-2">Telefon: +420 776 084 700</p>
                <p className="text-gray-300">Web: www.matejhrabak.eu</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">15. Závěrečná ustanovení</h2>
              <p className="text-gray-300 leading-relaxed">
                Tyto podmínky nabývají účinnosti dnem 1. ledna 2025. Používáním těchto webových stránek vyjadřujete
                souhlas s těmito podmínkami. Pokud s nimi nesouhlasíte, prosíme, nepoužívejte naše služby.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              Poslední aktualizace: 1. ledna 2025
              <br />V souladu se zákonem č. 89/2012 Sb., občanský zákoník a zákonem č. 121/2000 Sb., autorským zákonem
            </p>
          </div>
        </motion.div>
      </main>

      <WebDevFooter />
    </div>
  )
}
