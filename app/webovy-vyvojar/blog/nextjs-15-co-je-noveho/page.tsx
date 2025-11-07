"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function NextJS15WhatsNew() {
  return (
    <div className="min-h-screen bg-[#010714] text-white">
      <WebDevNavbar />

      <article className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/webovy-vyvojar/blog"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zpět na blog
        </Link>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center text-sm text-gray-400 mb-4">
            <Calendar className="mr-2 h-4 w-4" />
            <span>2. 4. 2025</span>
            <span className="mx-3">•</span>
            <Clock className="mr-2 h-4 w-4" />
            <span>6 min čtení</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Next.js 15: Co je nového a proč byste měli upgradovat
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Přehled nových funkcí a vylepšení v Next.js 15 a jak je můžete využít ve svých projektech.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Next.js</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Frontend</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[400px] mb-12 rounded-xl overflow-hidden"
        >
          <Image
            src="/images/next15.webp"
            alt="Next.js 15 novinky"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <p className="text-gray-300 leading-relaxed mb-6">
            Next.js 15 přináší řadu vylepšení, která dělají vývoj webů ještě rychlejší a příjemnější. 
            Pojďme se podívat na ty nejzajímavější novinky - vysvětlené jednoduše, bez zbytečného 
            technického žargonu.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Co je Next.js a proč je důležitý?</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Next.js je framework (můžete si to představit jako stavebnici) pro tvorbu moderních webů. 
            Je oblíbený, protože z vás dělá lepšího vývojáře - automaticky se stará o spoustu věcí, 
            které byste jinak museli řešit ručně.
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Používají ho třeba:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Netflix - pro rychlé načítání filmů</li>
              <li>Twitch - pro streamování videa</li>
              <li>TikTok - pro rychlé pročítání videí</li>
              <li>Nike - pro online obchod</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Rychlejší kompilace - Turbopack</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Představte si, že vyvíjíte web a po každé změně musíte čekat 10 sekund, než uvidíte výsledek. 
            Frustrující, že? Turbopack v Next.js 15 je jako Porsche místo Škody Fabia - změny vidíte 
            téměř okamžitě.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Praktický dopad:</h3>
            <p className="text-gray-300 mb-2">
              <strong>Před Turbopack:</strong> Změníte barvu tlačítka → čekáte 8 sekund → vidíte výsledek
            </p>
            <p className="text-gray-300">
              <strong>S Turbopack:</strong> Změníte barvu tlačítka → čekáte 0.5 sekundy → vidíte výsledek
            </p>
            <p className="text-gray-400 mt-3 text-sm">
              = 16× rychlejší vývoj = více času na kreativitu, méně na čekání
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Lepší caching - Rychlejší stránky zadarmo</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Caching je jako chytrá lednice. Místo toho, abyste pokaždé šli do obchodu pro mléko, 
            máte ho doma v lednici připravené. Web funguje stejně - často používaná data si "pamatuje" 
            a nemusí je stále znovu načítat.
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Praktický příklad:</h3>
            <p className="text-gray-300 mb-3">
              <strong>E-shop s oblečením:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Seznam kategorií se načte jednou a pak se "pamatuje" (nikdy se nemění)</li>
              <li>Produkty se aktualizují jen když se změní skladem</li>
              <li>Ceny se kontrolují v reálném čase (mění se často)</li>
            </ul>
            <p className="text-gray-400 mt-3 text-sm">
              Výsledek: Stránka se načítá 3× rychleji a šetří náklady na server
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Partial Prerendering - Nejlepší z obou světů</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Tohle je chytrá novinka. Představte si noviny - některé části jsou vytištěné předem 
            (hlavička, logo, menu), ale aktuální zprávy se tisknou až když víte, co se děje. 
            Partial Prerendering dělá to samé s webem.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Praktický příklad - Blog:</h3>
            <p className="text-gray-300 mb-3">
              <strong>Co je připravené předem (statické):</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-3 space-y-1">
              <li>Článek (nemění se)</li>
              <li>Menu (stejné pro všechny)</li>
              <li>Patička (stejná všude)</li>
            </ul>
            <p className="text-gray-300 mb-3">
              <strong>Co se načte při návštěvě (dynamické):</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Komentáře (každý uživatel vidí jiné)</li>
              <li>Doporučené články (přizpůsobené uživateli)</li>
            </ul>
            <p className="text-gray-400 mt-3 text-sm">
              = Rychlost statického webu + flexibilita dynamického webu
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Server Actions - Jednoduché formuláře</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Vytvoření kontaktního formuláře bylo dříve jako stavění domu - potřebovali jste architekt, 
            zedníky, elektrikáře. Server Actions jsou jako modulární dům - většina je připravená, 
            jen to složíte dohromady.
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Co to znamená v praxi:</h3>
            <p className="text-gray-300 mb-3">
              <strong>Dříve:</strong> Vytvoření registračního formuláře = 2-3 hodiny práce
            </p>
            <p className="text-gray-300">
              <strong>S Server Actions:</strong> Vytvoření registračního formuláře = 15-30 minut
            </p>
            <p className="text-gray-400 mt-3 text-sm">
              Méně kódu = méně chyb = rychlejší vývoj
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">5. Lepší Error Handling - Popisnější chyby</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Když se něco pokazí, chcete vědět CO a KDE. Next.js 15 vám to řekne jasně, místo 
            kryptických hlášek. Je to jako když vám auto řekne "Máte prázdnou nádrž" místo 
            "Systémová chyba E7493X".
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Praktický příklad:</h3>
            <p className="text-gray-300 mb-2">
              <strong>Stará verze:</strong> "Error: Cannot read property 'map' of undefined"
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Next.js 15:</strong> "Data z API ještě nejsou načtená. Zkontrolujte loading state 
              v souboru ProductList.tsx na řádku 42"
            </p>
            <p className="text-gray-400 mt-3 text-sm">
              = Chyby opravíte za minuty místo hodin
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">6. Vylepšené obrázky - Automatická optimalizace</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Next.js 15 je ještě chytřejší v práci s obrázky. Automaticky:
          </p>

          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><strong>Zmenší obrázky:</strong> Mobil dostane menší verzi než desktop</li>
            <li><strong>Změní formát:</strong> Použije moderní formáty (WebP, AVIF) pro rychlejší načítání</li>
            <li><strong>Lazy loading:</strong> Načte obrázek až když ho uživatel uvidí</li>
            <li><strong>Placeholder:</strong> Zobrazí rozmazanou verzi než se načte celý obrázek</li>
          </ul>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-400 mb-2">Praktický dopad:</p>
            <p className="text-gray-300 leading-relaxed">
              Fotogalerie s 50 obrázky se načte za 2 sekundy místo 15. Uživatel nepozná rozdíl 
              v kvalitě, ale web je mnohem rychlejší.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Proč byste měli upgradovat?</h2>
          
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Hlavní důvody:</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span><strong>Rychlejší vývoj:</strong> Turbopack vám ušetří hodiny čekání</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span><strong>Rychlejší web:</strong> Lepší caching a optimalizace obrázků</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span><strong>Méně chyb:</strong> Lepší error handling vám ukáže přesně kde je problém</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span><strong>Jednodušší kód:</strong> Server Actions zjednodušují práci s formuláři</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span><strong>Lepší SEO:</strong> Rychlejší web = vyšší pozice ve vyhledávání</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Je upgrade složitý?</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Ve většině případů je upgrade poměrně jednoduchý. Next.js tým se snaží, aby upgrade 
            byl co nejhladší. Obvykle stačí:
          </p>

          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-2">
            <li>Aktualizovat závislosti (1 příkaz)</li>
            <li>Spustit automatickou migraci (1 příkaz)</li>
            <li>Otestovat, že vše funguje</li>
          </ol>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-400 mb-2">Tip:</p>
            <p className="text-gray-300 leading-relaxed">
              Než upgradujete produkční web, vyzkoušejte to nejdřív na kopii. Lepší být opatrný 
              než řešit problémy na živém webu.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Závěr</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Next.js 15 není revolucí, ale evolucí - dělá všechno trochu lepší, rychlejší a 
            jednodušší. Pokud máte projekt na Next.js 14 nebo starší verzi, upgrade rozhodně 
            stojí za zvážení.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Rychlejší vývoj znamená nižší náklady. Rychlejší web znamená spokojenější uživatele 
            a lepší konverze. Je to win-win situace.
          </p>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Chcete využít Next.js 15 ve vašem projektu?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pomohu vám s upgradem existujícího projektu nebo vytvořím nový web na Next.js 15 
              od základu. Využijeme všechny novinky pro maximální výkon a jednoduchost údržby.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/webovy-vyvojar/kontakt"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Konzultace zdarma
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
              <Link
                href="/webovy-vyvojar/projekty"
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                Projekty v Next.js
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Share Section */}
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
