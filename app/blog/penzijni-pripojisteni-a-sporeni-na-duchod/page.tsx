"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Clock from "@/app/components/clock"
import { Home, User, FolderKanban, FileText, Github, Mail } from "lucide-react"

export default function PenzijniPripojisteniPage() {
  return (
    <div className="min-h-screen bg-[#050A14] text-white relative">
      {/* Animované pozadí */}
      <div className="absolute inset-0 overflow-hidden">
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
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl"
        />

        {/* Mřížka na pozadí */}
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNzAgMEgwdjYwaDMwVjB6TTI5IDFIMXYyOGgyOFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMEgzMHY2MGgzMFYwek01OSAxSDMxdjI4aDI4VjF6IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjxwYXRoIGQ9Ik0zMCAzMEgwdjMwaDMwVjMwek0yOSAzMUgxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMzBIMzB2MzBoMzBWMzB6TTU5IDMxSDMxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')]"
          style={{ opacity: 0.2 }}
        />
      </div>

      

      <main className="container mx-auto px-4 py-8 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Penzijní připojištění a spoření na důchod</h1>

          <div className="flex items-center text-gray-400 mb-8">
            <span className="mr-4">Publikováno: 22. května 2025</span>
            <span>Autor: Matěj Hrabák</span>
          </div>

          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/pension-planningv2.webp"
              alt="Penzijní připojištění a spoření na důchod"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <h2 className="text-3xl font-semibold mt-8 mb-4">Proč myslet na důchod už dnes?</h2>
            <p>
              Demografické trendy jsou neúprosné - populace stárne, porodnost klesá a podíl ekonomicky aktivních lidí se
              snižuje. To vše vytváří tlak na důchodový systém, který v současné podobě nebude schopen v budoucnu
              zajistit důstojné stáří pro všechny. Státní důchod bude pravděpodobně stačit pouze na pokrytí základních
              životních potřeb, a to ještě za předpokladu, že se věk odchodu do důchodu bude dále zvyšovat.
            </p>
            <p>
              Pokud nechcete ve stáří výrazně snížit svůj životní standard nebo být závislí na podpoře rodiny, je
              nezbytné začít s přípravou na důchod co nejdříve. Čím dříve začnete, tím méně peněz budete muset měsíčně
              odkládat a tím více vám pomůže síla složeného úročení.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Tři pilíře důchodového systému</h2>
            <p>Český důchodový systém je založen na třech pilířích:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>První pilíř</strong> - Státní důchodové pojištění, do kterého povinně přispívají všichni
                zaměstnanci a OSVČ. Z tohoto pilíře jsou vypláceny současné důchody.
              </li>
              <li>
                <strong>Druhý pilíř</strong> - V České republice byl zrušen v roce 2016.
              </li>
              <li>
                <strong>Třetí pilíř</strong> - Dobrovolné doplňkové penzijní spoření (dříve penzijní připojištění),
                které je podporováno státem formou státních příspěvků a daňových úlev.
              </li>
            </ol>
            <p>
              Kromě těchto pilířů je samozřejmě možné spořit na důchod i jinými způsoby - investicemi do akcií,
              dluhopisů, nemovitostí, podílových fondů nebo životního pojištění.
            </p>

            <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
              <Image src="/images/pension-planning.webp" alt="Plánování důchodu" fill className="object-cover" />
            </div>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Doplňkové penzijní spoření (třetí pilíř)</h2>
            <p>
              Doplňkové penzijní spoření (DPS) je nejrozšířenějším způsobem spoření na důchod v České republice. Jeho
              hlavní výhodou je státní podpora ve formě státních příspěvků a daňových úlev.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Státní příspěvky</h3>
            <p>Stát přispívá na DPS měsíčně podle výše vašeho příspěvku:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Při vkladu 300 Kč měsíčně získáte státní příspěvek 90 Kč</li>
              <li>Při vkladu 400 Kč měsíčně získáte státní příspěvek 110 Kč</li>
              <li>Při vkladu 500 Kč měsíčně získáte státní příspěvek 130 Kč</li>
              <li>Při vkladu 600 Kč měsíčně získáte státní příspěvek 150 Kč</li>
              <li>Při vkladu 700 Kč měsíčně získáte státní příspěvek 170 Kč</li>
              <li>Při vkladu 800 Kč měsíčně získáte státní příspěvek 190 Kč</li>
              <li>Při vkladu 900 Kč měsíčně získáte státní příspěvek 210 Kč</li>
              <li>Při vkladu 1 000 Kč a více měsíčně získáte maximální státní příspěvek 230 Kč</li>
            </ul>
            <p>
              Z hlediska efektivity je nejvýhodnější přispívat alespoň 1 000 Kč měsíčně, kdy získáte maximální státní
              příspěvek 230 Kč, což představuje zhodnocení 23 % ročně jen díky státnímu příspěvku.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Daňové úlevy</h3>
            <p>
              Kromě státních příspěvků můžete získat i daňovou úlevu. Od základu daně z příjmů si můžete odečíst součet
              částí měsíčních příspěvků, které v jednotlivých měsících zdaňovacího období přesáhly výši, od které náleží
              maximální státní příspěvek (tedy 1 000 Kč). Maximálně si můžete odečíst 24 000 Kč ročně, což odpovídá
              měsíčnímu příspěvku 3 000 Kč (1 000 Kč pro maximální státní příspěvek + 2 000 Kč pro maximální daňový
              odpočet).
            </p>
            <p>Při 15% sazbě daně z příjmů tak můžete ušetřit až 3 600 Kč ročně na daních.</p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Příspěvek zaměstnavatele</h3>
            <p>
              Mnoho zaměstnavatelů přispívá svým zaměstnancům na penzijní spoření jako formu zaměstnaneckého benefitu.
              Příspěvek zaměstnavatele je pro zaměstnance osvobozen od daně z příjmů a odvodů na sociální a zdravotní
              pojištění až do výše 50 000 Kč ročně (v součtu s příspěvkem na životní pojištění). Pro zaměstnavatele je
              příspěvek daňově uznatelným nákladem bez omezení výše.
            </p>
            <p>
              Pokud váš zaměstnavatel nabízí tento benefit, určitě ho využijte - jde o velmi výhodnou formu spoření na
              důchod.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Investiční strategie v DPS</h3>
            <p>
              V rámci DPS si můžete vybrat z několika investičních strategií podle svého vztahu k riziku a investičního
              horizontu:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Konzervativní strategie</strong> - Nízké riziko, nízký potenciální výnos. Vhodná pro
                konzervativní investory nebo pro osoby blízko důchodového věku.
              </li>
              <li>
                <strong>Vyvážená strategie</strong> - Střední riziko, střední potenciální výnos. Vhodná pro většinu
                účastníků.
              </li>
              <li>
                <strong>Dynamická strategie</strong> - Vyšší riziko, vyšší potenciální výnos. Vhodná pro mladší
                účastníky s dlouhým investičním horizontem.
              </li>
            </ul>
            <p>
              Obecně platí, že čím delší je váš investiční horizont (doba do důchodu), tím rizikovější strategii si
              můžete dovolit, protože máte dostatek času překonat případné krátkodobé poklesy na trzích.
            </p>

            <div className="relative w-full h-[300px] my-8 rounded-lg overflow-hidden">
              <Image src="/images/investment-strategy.webp" alt="Investiční strategie" fill className="object-cover" />
            </div>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Alternativní způsoby spoření na důchod</h2>
            <p>Kromě DPS existuje řada dalších způsobů, jak se finančně zajistit na stáří:</p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Investice do podílových fondů</h3>
            <p>
              Podílové fondy nabízejí vyšší potenciální výnos než DPS, ale bez státní podpory. Jsou flexibilnější -
              peníze můžete vybrat kdykoliv bez sankcí. Vhodné jsou zejména akciové a smíšené fondy s dlouhodobým
              investičním horizontem.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Investice do nemovitostí</h3>
            <p>
              Nemovitosti představují tradiční způsob zajištění na stáří. Můžete investovat přímo do nemovitostí (byt,
              dům) a pronajímat je, nebo nepřímo prostřednictvím nemovitostních fondů. Výhodou je ochrana před inflací a
              potenciál růstu hodnoty, nevýhodou je nízká likvidita a vysoká vstupní investice.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Investiční životní pojištění</h3>
            <p>
              Kombinuje pojistnou ochranu a investiční složku. Z daňového hlediska je podobné DPS - můžete si odečíst od
              základu daně až 24 000 Kč ročně. Nevýhodou jsou vyšší poplatky než u přímých investic.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3">Vlastní podnikání</h3>
            <p>
              Vybudování vlastního podnikání, které bude generovat pasivní příjem i ve stáří nebo které můžete prodat,
              je další možností zajištění na důchod. Je to však nejrizikovější a nejnáročnější cesta.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Kolik byste měli spořit na důchod?</h2>
            <p>
              Obecné pravidlo říká, že byste měli na důchod spořit 10-15 % svého hrubého příjmu. Přesnější výpočet
              závisí na mnoha faktorech:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Váš současný věk a plánovaný věk odchodu do důchodu</li>
              <li>Očekávaná délka života ve důchodu</li>
              <li>Požadovaná výše příjmu v důchodu (obvykle 70-80 % předchozího příjmu)</li>
              <li>Očekávaná výše státního důchodu</li>
              <li>Očekávané zhodnocení investic</li>
              <li>Očekávaná inflace</li>
            </ul>
            <p>
              Pro přesnější výpočet doporučuji použít některou z online kalkulaček nebo se poradit s finančním poradcem.
            </p>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Praktické tipy pro spoření na důchod</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Začněte co nejdříve</strong> - Díky složenému úročení je každý rok, o který začnete dříve, velmi
                cenný.
              </li>
              <li>
                <strong>Buďte konzistentní</strong> - Pravidelné měsíční investice jsou efektivnější než nepravidelné
                větší vklady.
              </li>
              <li>
                <strong>Diverzifikujte</strong> - Nespoléhejte pouze na jeden způsob spoření. Kombinujte DPS s dalšími
                investicemi.
              </li>
              <li>
                <strong>Využijte všechny dostupné podpory</strong> - Státní příspěvky, daňové úlevy, příspěvky
                zaměstnavatele.
              </li>
              <li>
                <strong>Přizpůsobte investiční strategii svému věku</strong> - S blížícím se důchodem snižujte riziko
                svého portfolia.
              </li>
              <li>
                <strong>Pravidelně revidujte svůj plán</strong> - Alespoň jednou ročně zkontrolujte, zda jste na dobré
                cestě k dosažení svých cílů.
              </li>
            </ol>

            <h2 className="text-3xl font-semibold mt-8 mb-4">Závěr</h2>
            <p>
              Spoření na důchod je dlouhodobý proces, který vyžaduje disciplínu a trpělivost. Čím dříve začnete, tím
              snazší bude dosáhnout finančně zajištěného stáří. Doplňkové penzijní spoření představuje díky státní
              podpoře velmi efektivní způsob spoření, ale nemělo by být jediným pilířem vaší důchodové strategie.
            </p>
            <p>
              Investujte pravidelně, diverzifikujte své portfolio a přizpůsobujte svou investiční strategii měnícím se
              životním okolnostem. A pamatujte - nejhorší strategií je nemít žádnou strategii a spoléhat se pouze na
              státní důchod.
            </p>
          </div>
        </div>
      </main>

      
    </div>
  )
}
