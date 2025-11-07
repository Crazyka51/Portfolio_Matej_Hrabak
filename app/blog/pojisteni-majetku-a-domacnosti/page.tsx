"use client"

import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ClockComponent from "@/app/components/clock"
import { motion } from "framer-motion";

export default function PojisteniMajetkuPage() {
  return (
    <div className="min-h-screen bg-[#5A0A0A] text-white relative overflow-hidden">
      {/* Animované pozadí */}
      <div className="absolute inset-0 overflow-hidden -z-10">
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
      </div>

      <main className="container mx-auto px-4 py-8 relative">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/blog" className="text-red-500 hover:text-red-400 flex items-center gap-2">
            <ArrowLeft size={20} />
            Zpět na blog
          </Link>
          <ClockComponent />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Jak správně pojistit svůj majetek a domácnost
        </motion.h1>

        <div className="flex items-center text-gray-400 mb-8">
          <span className="mr-4">Publikováno: 15. května 2025</span>
          <span>Autor: Matěj Hrabák</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden"
        >
          <Image src="/images/home-insurance.webp" alt="Pojištění majetku a domácnosti" fill className="object-cover" />
        </motion.div>

        <article className="prose prose-lg prose-invert max-w-none">
          <section>
            <h2 className="text-3xl font-semibold mt-8 mb-4">Úvod do pojištění majetku a domácnosti</h2>
            <p>
              Domov je místem, kde se cítíme bezpečně a kde uchováváme nejen své cennosti, ale i vzpomínky. Pojištění
              majetku a domácnosti představuje způsob, jak ochránit svůj domov a věci v něm před nepředvídatelnými
              událostmi, jako jsou požáry, povodně, krádeže nebo vandalismy. V tomto článku se dozvíte, jak správně nastavit
              pojištění majetku a domácnosti, abyste v případě škody nebyli nepříjemně překvapeni.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mt-8 mb-4">Rozdíl mezi pojištěním nemovitosti a domácnosti</h2>
            <p>
              Mnoho lidí si plete pojištění nemovitosti a pojištění domácnosti nebo si myslí, že jde o totéž. Pojištění
              nemovitosti se vztahuje na samotnou stavbu – dům, byt, chatu, garáž a další stavby na pozemku. Kryje škody
              způsobené například požárem, výbuchem, úderem blesku, vichřicí, krupobitím, povodní nebo zemětřesením.
            </p>
            <p>
              Pojištění domácnosti naproti tomu chrání vybavení a věci uvnitř nemovitosti – nábytek, elektroniku, oblečení,
              sportovní vybavení, šperky a další cennosti. Vztahuje se na škody způsobené stejnými živly jako u pojištění
              nemovitosti, ale také na krádeže, vandalismus nebo rozbití skla.
            </p>
          </section>

          <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
            <Image src="/images/home-damage.webp" alt="Škoda na majetku" fill className="object-cover" />
          </div>

          <section>
            <h2 className="text-3xl font-semibold mt-8 mb-4">Jak správně stanovit pojistnou částku</h2>
            <p>
              Jedním z nejčastějších problémů při pojištění majetku je podpojištění – situace, kdy je pojistná částka nižší
              než skutečná hodnota pojištěného majetku. V takovém případě pojišťovna při likvidaci škody vyplatí pouze
              poměrnou část škody odpovídající poměru pojistné částky k skutečné hodnotě.
            </p>
            <p>
              Pro stanovení správné pojistné částky u nemovitosti je třeba vycházet z tzv. nové ceny, tedy částky, kterou
              byste museli vynaložit na znovupostavení stejné nebo srovnatelné nemovitosti v daném místě a čase. Nezaměňujte
              ji s tržní cenou, která může být výrazně vyšší (zejména ve velkých městech) nebo nižší (v méně atraktivních
              lokalitách).
            </p>
            <p>
              U pojištění domácnosti je stanovení pojistné částky složitější, protože zahrnuje velké množství různých věcí.
              Doporučuje se udělat si inventuru majetku a sečíst hodnotu všech věcí v domácnosti. Nezapomeňte na cennosti,
              elektroniku, nábytek, oblečení, sportovní vybavení a další věci.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mt-8 mb-4">Na co si dát pozor při sjednávání pojištění</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Limity plnění</strong> – Pojišťovny často stanovují limity plnění pro určité typy škod nebo věcí
                (např. elektronika, cennosti, umělecká díla). Ujistěte se, že tyto limity odpovídají hodnotě vašeho majetku.
              </li>
              <li>
                <strong>Výluky z pojištění</strong> – Každá pojistka má výluky, tedy situace, na které se pojištění
                nevztahuje. Typickými výlukami jsou škody způsobené úmyslně, hrubou nedbalostí nebo v souvislosti s trestným
                činem.
              </li>
              <li>
                <strong>Spoluúčast</strong> – Část škody, kterou hradíte sami. Vyšší spoluúčast obvykle znamená nižší
                pojistné, ale v případě škody zaplatíte více ze svého.
              </li>
              <li>
                <strong>Indexace</strong> – Mechanismus, který automaticky upravuje pojistnou částku podle inflace a růstu
                cen stavebních prací a materiálů. Pomáhá předcházet podpojištění.
              </li>
            </ul>
          </section>

          <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
            <Image src="/images/insurance-contract.webp" alt="Pojistná smlouva" fill className="object-cover" />
          </div>

          <section>
            <h2 className="text-3xl font-semibold mt-8 mb-4">Specifika pojištění bytů a rodinných domů</h2>
            <p>
              Pojištění bytu má svá specifika oproti pojištění rodinného domu. U bytu se pojišťuje pouze bytová jednotka,
              nikoliv společné prostory a konstrukce domu (ty by měly být pojištěny v rámci pojištění celého bytového domu,
              které obvykle sjednává SVJ nebo bytové družstvo).
            </p>
            <p>
              U rodinného domu je třeba myslet i na vedlejší stavby na pozemku – garáž, kůlnu, bazén, skleník, plot apod.
              Některé pojišťovny je zahrnují automaticky do pojištění hlavní stavby (do určitého procenta její hodnoty),
              jinde je třeba je pojistit zvlášť.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mt-8 mb-4">Jak postupovat při škodě</h2>
            <p>
              Pokud dojde ke škodě na vašem majetku, je důležité postupovat správně, abyste maximalizovali šanci na plné
              odškodnění:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Zdokumentujte škodu</strong> – Pořiďte fotografie nebo video poškozených věcí a místa škody před
                zahájením úklidu nebo oprav.
              </li>
              <li>
                <strong>Nahlaste škodu pojišťovně</strong> – Co nejdříve kontaktujte svou pojišťovnu a nahlaste škodu.
                Většina pojišťoven umožňuje nahlášení online, telefonicky nebo osobně na pobočce.
              </li>
              <li>
                <strong>Omezte rozsah škody</strong> – Pokud je to možné, proveďte opatření k omezení rozsahu škody (např.
                zakrytí střechy po vichřici, odčerpání vody po povodni).
              </li>
              <li>
                <strong>Uschovejte poškozené věci</strong> – Nevyhazujte poškozené věci, dokud je neprohlédne likvidátor
                pojišťovny nebo dokud vám pojišťovna nedá souhlas k jejich likvidaci.
              </li>
              <li>
                <strong>Připravte doklady</strong> – Shromážděte doklady o pořízení poškozených věcí (faktury, účtenky,
                záruční listy) a případně i fotografie věcí před poškozením.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mt-8 mb-4">Závěr</h2>
            <p>
              Pojištění majetku a domácnosti je důležitou součástí finanční ochrany každé domácnosti. Správně nastavené
              pojištění vám v případě škody pomůže rychle obnovit poškozený majetek a vrátit se k normálnímu životu bez
              výrazných finančních ztrát.
            </p>
            <p>
              Nezapomeňte své pojištění pravidelně aktualizovat, zejména po větších rekonstrukcích, pořízení drahého
              vybavení nebo změně hodnoty nemovitosti. Ideální je revize pojistné smlouvy jednou za dva až tři roky.
            </p>
            <p>
              Pokud si nejste jisti, jak správně nastavit své pojištění, neváhejte se obrátit na pojišťovacího poradce,
              který vám pomůže vybrat nejvhodnější pojištění pro vaše konkrétní potřeby a situaci.
            </p>
          </section>

          <div className="bg-blue-900 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-4">Potřebujete poradit s pojištěním majetku?</h3>
            <p className="mb-4">
              Nabízím nezávislé poradenství v oblasti pojištění majetku a domácnosti. Pomohu vám vybrat nejvhodnější
              pojištění pro vaše konkrétní potřeby a zajistím, abyste nebyli podpojištěni ani přepojištěni.
            </p>
            <Link
              href="/schuzka"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
            >
              Sjednat nezávaznou konzultaci
            </Link>
          </div>

          <section>
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
              <Link href="/blog/penzijni-pripojisteni-a-sporeni-na-duchod" className="block group">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/retirement-savings.webp"
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
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
