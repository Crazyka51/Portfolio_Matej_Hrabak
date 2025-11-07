"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function TailwindCSS() {
  return (
    <div className="min-h-screen bg-[#010714] text-white">
      <WebDevNavbar />

      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/webovy-vyvojar/blog"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zpět na blog
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center text-sm text-gray-400 mb-4">
            <Calendar className="mr-2 h-4 w-4" />
            <span>5. 3. 2025</span>
            <span className="mx-3">•</span>
            <Clock className="mr-2 h-4 w-4" />
            <span>7 min čtení</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tailwind CSS: Od skeptika k fanouškovi
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Moje cesta s Tailwind CSS a proč jsem změnil názor na utility-first přístup k CSS.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">CSS</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Tailwind</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Frontend</span>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[400px] mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl font-bold mb-4">Tailwind CSS</div>
              <div className="text-2xl text-gray-200">Utility-First Framework</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <h2 className="text-3xl font-bold mt-12 mb-6">První reakce: "To je špatný nápad"</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Když jsem poprvé viděl Tailwind CSS, pomyslel jsem si: "Tohle je přesně to, co jsme se učili NEDĚLAT." 
            Stylování přímo v HTML? Dlouhé řetězce tříd? To přece odporuje všem best practices!
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-300 mb-3">
              <strong>Moje první myšlenka:</strong>
            </p>
            <p className="text-gray-400 font-mono text-sm mb-3">
              &lt;div className="flex items-center justify-center bg-blue-500 text-white p-4 rounded-lg"&gt;
            </p>
            <p className="text-gray-300">
              "To je ošklivé! Proč bych to nedal do normálního CSS?"
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Co mě otravovalo na klasickém CSS</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Než přijdeme k tomu, proč jsem změnil názor, pojďme si říct, co mě frustr ovalo na tradičním psaní CSS:
          </p>

          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-3">
            <li>
              <strong>Vymýšlení jmen tříd:</strong> Jak nazvat tlačítko? btn? button? primary-button? btn-primary? 
              Strávil jsem hodiny přemýšlením nad názvy.
            </li>
            <li>
              <strong>Hledání správného souboru:</strong> Kde jsem definoval ten styl? V buttons.css? V components.css? 
              V main.css?
            </li>
            <li>
              <strong>Strach ze změn:</strong> Když jsem změnil .button, rozbil jsem tím něco jinde? Lépe to netestovat...
            </li>
            <li>
              <strong>Mrtvý kód:</strong> CSS soubory rostly a rostly, ale nikdo nevěděl, co se ještě používá.
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Moment prozření</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Zlom přišel, když jsem musel rychle udělat landing page. Nechtělo se mi vytvářet strukturu CSS souborů, 
            vymýšlet jména tříd, tak jsem řekl: "Dobře, zkusím ten Tailwind."
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Co se stalo:</h3>
            <p className="text-gray-300 mb-3">
              ✓ Landing page hotová za 2 hodiny místo obvyklých 4-5 hodin
            </p>
            <p className="text-gray-300 mb-3">
              ✓ Žádné přemýšlení nad jmény tříd
            </p>
            <p className="text-gray-300 mb-3">
              ✓ Styling vidím přímo v HTML - vidím co dělám
            </p>
            <p className="text-gray-300">
              ✓ Žádný mrtvý CSS kód
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Proč Tailwind funguje</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">1. Vidíte co děláte</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            S Tailwindem vidíte styling přímo u elementu. Nemusíte skákat mezi HTML a CSS soubory. 
            Je to jako mít všechny nástroje přímo u pracovního stolu, místo běhání do skladu.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">2. Konzistence zadarmo</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Tailwind má předpřipravenou škálu barev, velikostí, odstupů. Nemůžete omylem použít 
            #1E40AF místo #1D4ED8 - prostě použijete "blue-700". Celý web má konzistentní design.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Praktický příklad:</h3>
            <p className="text-gray-300 mb-3">
              <strong>Bez Tailwind:</strong>
            </p>
            <p className="text-gray-400 mb-4 text-sm">
              Každý vývojář používá jiné odstupy: margin: 15px, margin: 16px, margin: 18px...
            </p>
            <p className="text-gray-300 mb-3">
              <strong>S Tailwind:</strong>
            </p>
            <p className="text-gray-400 text-sm">
              Všichni používají stejnou škálu: m-4, m-6, m-8 (16px, 24px, 32px)
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">3. Responsive design je snadný</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Tailwind dělá responsive design intuitivní. Místo psaní media queries používáte prefixy:
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-400 font-mono text-sm mb-3">
              &lt;div className="text-base md:text-lg lg:text-xl"&gt;
            </p>
            <p className="text-gray-300 text-sm">
              = Na mobilu normální velikost, na tabletu větší, na desktopu největší
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">4. Žádný mrtvý kód</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Tailwind automaticky odstraní nepoužívané styly. CSS soubor obsahuje jen to, co skutečně 
            používáte. Výsledek? Finální CSS často jen 10-20 KB místo několika set KB.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Co mi na Tailwindu pořád vadí</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Nechci to malovat na růžovo. Tailwind není perfektní a má své nevýhody:
          </p>

          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><strong>Dlouhé řetězce tříd:</strong> Někdy to vypadá opravdu ošklivě v HTML</li>
            <li><strong>Učící křivka:</strong> Musíte se naučit názvy tříd (ale jde to rychle)</li>
            <li><strong>Čitelnost:</strong> Pro někoho je těžší číst než klasické CSS</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Kdy Tailwind NEPOUŽÍVAT</h2>
          
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong>❌ Máte hotový design system:</strong> Pokud používáte Material UI, Bootstrap 
                nebo vlastní design system, Tailwind přidá jen složitost.
              </li>
              <li>
                <strong>❌ Tým Tailwind neovládá:</strong> Pokud vaši kolegové neumí Tailwind a nechtějí 
                se učit, nebojujte s tím.
              </li>
              <li>
                <strong>❌ Velmi specifický design:</strong> Pokud máte mnoho unikátních animací a efektů, 
                klasické CSS může být lepší volba.
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Kdy Tailwind POUŽÍVAT</h2>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong>✓ Nový projekt:</strong> Začínáte od nuly? Tailwind je skvělá volba.
              </li>
              <li>
                <strong>✓ Rychlý vývoj:</strong> Prototypy, MVP, landing pages - Tailwind je rychlý.
              </li>
              <li>
                <strong>✓ Malý tým:</strong> Méně diskuzí o struktuře CSS, jménech tříd apod.
              </li>
              <li>
                <strong>✓ Potřebujete konzistenci:</strong> Tailwind vynucuje konzistentní design.
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Tipy pro začátek</h2>
          
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-3">
            <li>
              <strong>Začněte malým projektem:</strong> Nerefaktorujte celou aplikaci najednou. 
              Zkuste malý projekt nebo komponentu.
            </li>
            <li>
              <strong>Používejte Tailwind CSS IntelliSense:</strong> VS Code plugin, který napovídá 
              třídy. Ušetří hodiny hledání v dokumentaci.
            </li>
            <li>
              <strong>Vytvořte komponenty:</strong> Opakující se styly dejte do komponent, 
              ne kopírujte dlouhé řetězce tříd.
            </li>
            <li>
              <strong>Přizpůsobte si paletu:</strong> V tailwind.config.js si nastavte vlastní 
              barvy, fonty podle vašeho brand.
            </li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-6">Závěr</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Z skeptika jsem se stal fanouškem. Tailwind CSS mi ušetřil stovky hodin. Není to nástroj 
            pro každého a každý projekt, ale když ho použijete správně, je to game changer.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Doporučuji vyzkoušet. Nejhorší co se může stát? Vrátíte se k klasickému CSS s lepším 
            pochopením, proč ho preferujete. V nejlepším případě? Objevíte nový způsob práce, 
            který vás zrychlí.
          </p>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Chcete web v Tailwind CSS?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Vytvořím vám moderní, rychlý a responzivní web využívající Tailwind CSS best practices. 
              Od designu přes implementaci až po optimalizaci výkonu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/webovy-vyvojar/kontakt"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Nezávazná poptávka
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
              <Link
                href="/webovy-vyvojar/projekty"
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                Tailwind projekty
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Sdílet článek:</span>
            <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <Share2 className="h-4 w-4" />
              Sdílet
            </button>
          </div>
        </motion.div>
      </article>

      <WebDevFooter />
    </div>
  )
}
