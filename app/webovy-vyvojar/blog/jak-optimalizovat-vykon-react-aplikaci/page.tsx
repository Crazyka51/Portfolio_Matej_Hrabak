"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function ReactPerformanceOptimization() {
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
            <span>15. 4. 2025</span>
            <span className="mx-3">•</span>
            <Clock className="mr-2 h-4 w-4" />
            <span>8 min čtení</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Jak optimalizovat výkon React aplikací
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Praktické tipy a triky pro zlepšení výkonu vašich React aplikací, od memoizace až po lazy loading komponent.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Performance</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Frontend</span>
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
            src="/images/reactaplikace.png"
            alt="React Performance Optimization"
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
            Pomaly načítající se webové stránky jsou frustující. Pokud vaše React aplikace reaguje pomalu, uživatelé 
            jednoduše odejdou ke konkurenci. V tomto článku se podíváme na praktické způsoby, jak zrychlit vaše 
            React aplikace - bez nutnosti být programátorský expert.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Proč je rychlost tak důležitá?</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Představte si, že vstoupíte do obchodu a prodavač vás nechá čekat 5 sekund, než vás obslouží. 
            Pravděpodobně odejdete, že? Na webu je to stejné. Statistiky ukazují, že:
          </p>

          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>53% uživatelů opustí stránku, která se načítá déle než 3 sekundy</li>
            <li>Každá sekunda zpoždění snižuje konverze až o 7%</li>
            <li>Rychlé weby se lépe umisťují ve vyhledávačích (Google rychlost přímo hodnotí)</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. React.memo - Šetříme zbytečnou práci</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Představte si, že máte seznam 100 produktů. Když změníte jméno v nákupním košíku, nemusí se 
            překreslovat všech 100 produktů - stačí aktualizovat košík. React.memo je jako chytrý asistent, 
            který pozná: "Tohle se nezměnilo, nemusím to překreslovat."
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-400 mb-2">Praktický příklad:</p>
            <p className="text-gray-300 leading-relaxed">
              Když máte seznam komentářů pod článkem a někdo přidá nový komentář, díky React.memo 
              se překreslí jen nový komentář, ne celý seznam. Stránka reaguje okamžitě.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Lazy Loading - Načítej až když je potřeba</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Lazy loading je jako Netflix - nenačítá celý film najednou, ale postupně jen to, co zrovna 
            sledujete. U webu to znamená: načti nejdřív to, co uživatel vidí, zbytek až když to bude potřeba.
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Praktické využití:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Fotogalerie:</strong> Načítej obrázky až když uživatel scrolluje dolů</li>
              <li><strong>Modální okna:</strong> Načti je až když uživatel klikne na tlačítko</li>
              <li><strong>Administrace:</strong> Statistiky načti až když uživatel otevře danou sekci</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Optimalizace obrázků - Největší zloděj rychlosti</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Obrázky často tvoří 50-70% velikosti celé stránky. Představte si, že místo posílání fotky 
            z mobilu (5 MB) pošlete optimalizovanou verzi (200 KB) - stránka se načte 25× rychleji!
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Jednoduché tipy:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Používejte moderní formáty jako WebP (o 30% menší než JPEG)</li>
              <li>Responsive obrázky - mobil nepotřebuje 4K rozlišení</li>
              <li>Lazy loading obrázků - načti až když se objeví na obrazovce</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Virtualizace seznamů - Zobraz jen to, co je vidět</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Když máte seznam 10 000 produktů, proč vykreslovat všechny najednou? Virtualizace zobrazí 
            jen těch 20-30, které uživatel vidí na obrazovce. Jako když v obchodě vystavíte jen část 
            zboží, zbytek je ve skladu.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-400 mb-2">Praktický dopad:</p>
            <p className="text-gray-300 leading-relaxed">
              Seznam 10 000 produktů se místo 5 sekund načte za 0.3 sekundy. Uživatel ani nepozná, 
              že tam je 10 000 položek - prostě scrolluje hladce.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">5. Debouncing - Počkej než uživatel dopíše</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Když uživatel píše do vyhledávání, nemusíte hledat po každém písmenu. Debouncing počká, 
            až uživatel přestane psát (třeba 300ms), a teprve pak začne hledat. Je to jako počkat, 
            až váš přítel dopovídá větu, než začnete odpovídat.
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Před debouncing:</h3>
            <p className="text-gray-300 mb-3">
              Uživatel napíše "React" → 5 dotazů na server (R, Re, Rea, Reac, React)
            </p>
            <h3 className="text-xl font-semibold mb-3">Po debouncing:</h3>
            <p className="text-gray-300">
              Uživatel napíše "React" → 1 dotaz na server (React) - 5× rychlejší!
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">6. Code Splitting - Rozděl a panuj</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Code splitting je jako když si v restauraci objednáte pouze to, co chcete sníst právě teď, 
            ne celé menu najednou. Načítáte jen kód potřebný pro aktuální stránku.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Praktický příklad:</h3>
            <p className="text-gray-300 mb-3">
              <strong>Bez code splitting:</strong> Uživatel navštíví homepage → načte 2 MB kódu (včetně 
              administrace, statistik, všech stránek)
            </p>
            <p className="text-gray-300">
              <strong>S code splitting:</strong> Uživatel navštíví homepage → načte 200 KB kódu (jen homepage) 
              - 10× rychlejší start!
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Měření výkonu - Jak poznat, že je to lepší?</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Nemá smysl optimalizovat "od oka". Používejte nástroje jako:
          </p>

          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li><strong>Google PageSpeed Insights:</strong> Zadarmo, ukáže vám skóre 0-100 a konkrétní problémy</li>
            <li><strong>Chrome DevTools:</strong> Vestavěné v prohlížeči, ukáže co trvá nejdéle</li>
            <li><strong>React DevTools Profiler:</strong> Specializovaný nástroj pro React aplikace</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Praktická checklist optimalizace</h2>
          
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">✅ Základní optimalizace (udělej první):</h3>
            <ul className="space-y-2 text-gray-300">
              <li>☐ Optimalizuj obrázky (WebP formát, správné velikosti)</li>
              <li>☐ Zapni lazy loading pro obrázky</li>
              <li>☐ Použij React.memo pro velké seznamy</li>
              <li>☐ Implementuj debouncing pro vyhledávání</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 mt-6">🚀 Pokročilá optimalizace:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>☐ Code splitting pro různé stránky</li>
              <li>☐ Virtualizace pro dlouhé seznamy (1000+ položek)</li>
              <li>☐ Service Worker pro offline funkčnost</li>
              <li>☐ Přednahrávání (prefetch) často používaných stránek</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Závěr</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Optimalizace výkonu React aplikací není rocket science. Začněte s nízkými ovoce - optimalizujte 
            obrázky, přidejte lazy loading, použijte React.memo. Každá sekunda, kterou ušetříte, znamená 
            více spokojených uživatelů a lepší konverze.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Pamatujte: rychlý web není jen technická záležitost, je to součást uživatelské zkušenosti. 
            Stejně jako byste nečekali v restauraci 10 minut na menu, neměli by vaši uživatelé čekat 
            na načtení stránky.
          </p>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Vaše React aplikace je pomalá?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pomohu vám identifikovat úzká hrdla a optimalizovat výkon vaší aplikace. Měření výkonu, 
              analýza problémů a implementace řešení - komplexní služba výkonnostní optimalizace.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/webovy-vyvojar/kontakt"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Nezávazná konzultace
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
              <Link
                href="/webovy-vyvojar/projekty"
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                Ukázky optimalizovaných projektů
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
