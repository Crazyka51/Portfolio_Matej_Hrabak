"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import ClockComponent from "@/app/components/clock"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"

export default function BlogPost() {
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
            Chytré celoroční cestovní pojištění: Maximální ochrana na každé cestě
          </h1>

          <div className="flex items-center text-gray-400 mb-8">
            <span className="mr-4">Publikováno: 15. května 2025</span>
            <span>Autor: Matěj Hrabák</span>
          </div>

          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image src="/images/travel-insurance.webp" alt="Chytré cestovní pojištění" fill className="object-cover" />
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-semibold mt-8 mb-4">Proč si sjednat celoroční cestovní pojištění?</h2>
            <p>
              Cestování přináší radost, ale i nečekané situace. **Celoroční cestovní pojištění** od Generali Česká
              pojišťovna vám umožní cestovat bez obav po celý rok. Jednou se pojistíte a můžete opakovaně vyjíždět do
              zahraničí až na **90 dní v kuse**.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Jaké situace pojištění pokrývá?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
              {[
                {
                  src: "pracovni_cesty.svg",
                  title: "Pracovní cesty",
                  desc: "Ochrana při služebních cestách doma i v zahraničí.",
                },
                {
                  src: "skola_a_studium.svg",
                  title: "Škola a studium",
                  desc: "Pojištění pro studenty na zahraničních programech.",
                },
                {
                  src: "sportovani_a_souteze.svg",
                  title: "Sportovní soutěže",
                  desc: "Krytí zdravotních výloh při aktivní rekreaci.",
                },
                {
                  src: "vasnive_cestovani-1.svg",
                  title: "Vášnivé cestování",
                  desc: "Flexibilní krytí pro časté cestovatele.",
                },
              ].map(({ src, title, desc }) => (
                <div key={src} className="flex flex-col items-center text-center">
                  <Image src={`/images/${src}`} width={80} height={80} alt={title} />
                  <h3 className="text-lg font-semibold mt-2">{title}</h3>
                  <p className="text-gray-400">{desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Výhody Chytrého cestovního pojištění</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Pojištění platné na celý rok</strong> - bez nutnosti sjednávat nové pojištění před každou
                cestou.
              </li>
              <li>
                <strong>Krytí léčebných výloh až do 100 milionů Kč</strong> - zahrnuje i zásah horské služby.
              </li>
              <li>
                <strong>Pojištění nevydařeného počasí</strong> - kompenzace za dva a více deštivých dnů.
              </li>
              <li>
                <strong>Pojištění zavazadel</strong> - krytí škod způsobených krádeží nebo poškozením.
              </li>
            </ul>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Chytré cestovní pojištění od Generali</h2>
            <p>
              Chytré cestovní pojištění od Generali, který se hodí jak pro vášnivé cestovatele, tak i pro ty, kdo
              hledají jistotu a flexibilitu při každém vyjetí do světa.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Chytré cestovní pojištění od Generali</h2>
            <p>
              Chytré cestovní pojištění od Generali představuje moderní řešení pro všechny, kdo se nechtějí zbytečně
              omezovat a hledají maximální ochranu na každé cestě. Ať již jste vášnivým cestovatelem, profesionálem
              často vyjíždějícím do zahraničí, nebo sportovcem zapojeným do mezinárodních soutěží, tento produkt vám
              umožní vyrazit s klidnou myslí. Jedna pojistná smlouva pokrývá celý rok a nabízí flexibilitu, která
              odpovídá dnešnímu rychlému životnímu stylu. Nechte starosti za sebou a užijte si cestování naplno - s
              vědomím, že jste kryti ve všech situacích, které by vám mohly zkomplikovat zážitky z vašich cest.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Jak vybrat správné pojištění?</h2>
            <p>
              Při výběru cestovního pojištění je vždy dobré nejprve zvážit své vlastní potřeby a typ cestování, který
              běžně podnikáte. Některé příplatky či dodatečná krytí mohou být pro určité situace klíčové. Proto se
              doporučuje věnovat chvíli studiu pojistných podmínek nebo kontaktovat poradce z Generali. Tato investice
              do informovanosti vám může ušetřit nepřeberné množství starostí - a důvěra v kvalitní pojistné krytí se
              vám vrátí v podobě bezstarostných zážitků z cest.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Celoroční ochrana pro každého cestovatele</h2>
            <p>
              Cestování je dnes synonymem pro dobrodružství, poznávání nových kultur a nečekané zážitky. Nicméně, i ta
              nejpečlivěji naplánovaná cesta může být zasažena nečekanými událostmi - od náhlých zdravotních komplikací
              až po nepříznivé počasí či poškození zavazadel. Generali proto přichází s inovativním řešením - chytrým
              cestovním pojištěním, které vám poskytne celoroční ochranu a umožní vyrazit s klidnou myslí.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Hlavní výhody chytrého cestovního pojištění</h2>
            <table className="table-auto border-collapse border border-gray-700 w-full text-left">
              <thead>
                <tr>
                  <th className="border border-gray-600 px-4 py-2">Benefity</th>
                  <th className="border border-gray-600 px-4 py-2">Detail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">Celoroční krytí</td>
                  <td className="border border-gray-600 px-4 py-2">
                    Jediná pojistná smlouva platí po celý rok - nemusíte řešit nové sjednání při každé cestě.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">Flexibilita cestování</td>
                  <td className="border border-gray-600 px-4 py-2">
                    Možnost vycestovat až na 90 nepřetržitých dnů, což je ideální pro dlouhodobé pobyty v zahraničí.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">Komplexní pojištění</td>
                  <td className="border border-gray-600 px-4 py-2">
                    Kryje široké spektrum rizik - od léčebných výloh po pojištění zavazadel a kompenzaci za počasí.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">Finanční úspora</td>
                  <td className="border border-gray-600 px-4 py-2">
                    Výhodné online sjednání nabízí slevy až 20 %, což činí pojištění ještě atraktivnějším.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">Rychlá asistence</td>
                  <td className="border border-gray-600 px-4 py-2">
                    24/7 asistenční služby včetně horské služby zajišťují, že v nouzové situaci nejste nikdy sami.
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Závěr</h2>
            <p>Chytré cestovní pojištění je ideálním řešením pro každého, kdo chce cestovat bez starostí.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
