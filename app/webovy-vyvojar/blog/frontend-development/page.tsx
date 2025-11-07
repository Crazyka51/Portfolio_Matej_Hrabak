"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function FrontendDevelopmentArticle() {
  return (
    <div className="min-h-screen bg-[#010714] text-white">
      <WebDevNavbar />

      <main className="container mx-auto px-4 py-16">
        {/* Back Button */}
        <Link
          href="/webovy-vyvojar/blog"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span>Zpět na blog</span>
        </Link>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Frontend</span>
              <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm">Development</span>
              <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm">Best Practices</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Moderní Frontend Development: Kompletní průvodce pro rok 2025
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>7. listopadu 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>15 min čtení</span>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder.svg"
                alt="Frontend Development"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Frontend development prošel v posledních letech dramatickou transformací. Od jednoduchých statických
              stránek jsme se dostali k vysoce interaktivním aplikacím, které soupeří s nativními řešeními. V tomto
              článku prozkoumáme klíčové technologie, nástroje a best practices, které definují moderní frontend
              development.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">1. Základní pilíře moderního Frontendu</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">HTML5 & Sémantika</h3>
            <p className="text-gray-300 mb-4">
              HTML5 není jen o nových tagách – je to základ přístupného a SEO-optimalizovaného webu. Správné použití
              sémantických elementů jako <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>,{" "}
              <code>&lt;nav&gt;</code> a <code>&lt;aside&gt;</code> zlepšuje nejen čitelnost kódu, ale i přístupnost
              pro screen readery a vyhledávače.
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-green-400">{`<!-- Špatně -->
<div class="header">
  <div class="nav">...</div>
</div>

<!-- Dobře -->
<header>
  <nav>...</nav>
</header>`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">CSS3 & Moderní Layouty</h3>
            <p className="text-gray-300 mb-4">
              CSS Grid a Flexbox revolucionizovaly způsob, jakým vytváříme layouty. Již nejsou potřeba hacky s floaty
              nebo clearfixy. CSS Grid je ideální pro dvourozměrné layouty, zatímco Flexbox exceluje v
              jednorozměrných uspořádáních.
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>CSS Grid pro komplexní page layouts</li>
              <li>Flexbox pro komponenty a jednodušší struktury</li>
              <li>CSS Custom Properties (CSS proměnné) pro theming</li>
              <li>CSS Container Queries pro responzivní komponenty</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">JavaScript & TypeScript</h3>
            <p className="text-gray-300 mb-4">
              Modern JavaScript (ES6+) přinesl revoluci v psaní kódu. Arrow functions, destructuring, async/await,
              modules – to vše významně zlepšilo čitelnost a maintainability kódu. TypeScript pak přidává typovou
              bezpečnost, která odhaluje chyby již během vývoje.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">2. Moderní Frameworky a Knihovny</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">React</h3>
            <p className="text-gray-300 mb-4">
              React zůstává nejpopulárnějším frontend frameworkem. Jeho komponentový přístup, virtuální DOM a bohatý
              ekosystém z něj dělají výbornou volbu pro projekty všech velikostí. React Hooks změnily způsob, jakým
              píšeme komponenty, a Server Components otevírají nové možnosti optimalizace.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">Next.js</h3>
            <p className="text-gray-300 mb-4">
              Next.js rozšiřuje React o server-side rendering, static site generation a další pokročilé funkce. Je
              ideální pro produkční aplikace, které vyžadují optimální výkon a SEO. Next.js 15 přinesl App Router,
              který zjednodušuje routing a datové načítání.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">Vue.js & Svelte</h3>
            <p className="text-gray-300 mb-4">
              Vue.js nabízí skvělou rovnováhu mezi jednoduchostí a výkonem. Jeho reaktivní systém je intuitivní a
              dokumentace patří k nejlepším. Svelte jde ještě dál a kompiluje komponenty do vysoce optimalizovaného
              vanilla JavaScriptu.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">3. Build Tools a Vývojové Prostředí</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-green-400">Vite</h3>
            <p className="text-gray-300 mb-4">
              Vite přinesl revoluci v rychlosti vývoje. Díky nativním ES modulům a esbuild je build proces řádově
              rychlejší než u tradičních bundlerů. Hot Module Replacement (HMR) je téměř okamžité.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-green-400">ESLint & Prettier</h3>
            <p className="text-gray-300 mb-4">
              Konzistentní kód je klíčový pro týmovou spolupráci. ESLint odhaluje potenciální chyby a problémy v kódu,
              zatímco Prettier zajišťuje jednotné formátování. Kombinace obou nástrojů je standard v moderním
              vývoji.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">4. Styling Solutions</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Tailwind CSS</h3>
            <p className="text-gray-300 mb-4">
              Utility-first přístup Tailwindu může zpočátku působit nezvykle, ale výrazně zrychluje vývoj. Namísto
              psaní vlastního CSS používáte předpřipravené utility třídy. Výsledkem je konzistentní design a menší
              CSS bundle.
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-blue-400">{`<button className="bg-blue-500 hover:bg-blue-700 text-white 
  font-bold py-2 px-4 rounded transition-colors duration-200">
  Klikni
</button>`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">CSS-in-JS</h3>
            <p className="text-gray-300 mb-4">
              Styled-components a Emotion umožňují psát CSS přímo v JavaScriptu. To přináší výhody jako automatic
              critical CSS, dynamické styly založené na props a lepší developer experience díky type safety v
              TypeScriptu.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">5. State Management</h2>

            <p className="text-gray-300 mb-4">
              Správa stavu je jeden z nejkomplikovanějších aspektů frontend developmentu. Pro menší projekty často
              stačí React Context nebo lokální state. Pro větší aplikace zvažte:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>
                <strong className="text-white">Zustand</strong> - Minimalistické a výkonné řešení
              </li>
              <li>
                <strong className="text-white">Redux Toolkit</strong> - Zjednodušená verze Reduxu
              </li>
              <li>
                <strong className="text-white">Jotai</strong> - Atomický přístup ke state managementu
              </li>
              <li>
                <strong className="text-white">TanStack Query</strong> - Specializováno na server state
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">6. Testing</h2>

            <p className="text-gray-300 mb-4">Kvalitní testy jsou investice do budoucnosti projektu:</p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>
                <strong className="text-white">Vitest</strong> - Rychlý unit testing framework
              </li>
              <li>
                <strong className="text-white">Testing Library</strong> - Testování user behavior
              </li>
              <li>
                <strong className="text-white">Playwright</strong> - E2E testování napříč prohlížeči
              </li>
              <li>
                <strong className="text-white">Storybook</strong> - Izolovaný vývoj a testování komponent
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">7. Performance Optimization</h2>

            <p className="text-gray-300 mb-4">Výkon je klíčový pro uživatelskou zkušenost:</p>

            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 my-6">
              <h4 className="text-xl font-semibold mb-3 text-blue-400">Core Web Vitals</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>LCP (Largest Contentful Paint)</strong> - měřte rychlost načtení hlavního obsahu
                </li>
                <li>
                  <strong>FID (First Input Delay)</strong> - interaktivita stránky
                </li>
                <li>
                  <strong>CLS (Cumulative Layout Shift)</strong> - stabilita layoutu
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-green-400">Optimalizační techniky</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Code splitting a lazy loading komponent</li>
              <li>Image optimization (WebP, AVIF, responsive images)</li>
              <li>Prefetching a preloading kritických zdrojů</li>
              <li>Tree shaking pro odstranění nepoužívaného kódu</li>
              <li>Memoizace a optimalizace re-renderů</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">8. Accessibility (A11y)</h2>

            <p className="text-gray-300 mb-4">
              Přístupnost není optional – je to povinnost. Web musí být použitelný pro všechny, včetně lidí se
              zdravotním postižením:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Správné používání ARIA atributů</li>
              <li>Klávesnicová navigace pro všechny interaktivní elementy</li>
              <li>Dostatečný kontrast barev (WCAG 2.1 AA minimum)</li>
              <li>Popisné alt texty pro obrázky</li>
              <li>Focus indicators pro navigaci klávesnicí</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">9. Best Practices 2025</h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <ol className="list-decimal list-inside text-gray-300 space-y-3">
                <li>
                  <strong className="text-white">Progressive Enhancement</strong> - Základní funkcionalita bez
                  JavaScriptu
                </li>
                <li>
                  <strong className="text-white">Mobile First</strong> - Navrhujte primárně pro mobily
                </li>
                <li>
                  <strong className="text-white">Semantic HTML</strong> - Používejte správné HTML elementy
                </li>
                <li>
                  <strong className="text-white">Component Composition</strong> - Malé, znovupoužitelné komponenty
                </li>
                <li>
                  <strong className="text-white">Error Boundaries</strong> - Graceful degradation při chybách
                </li>
                <li>
                  <strong className="text-white">Security</strong> - XSS protection, CSP headers, HTTPS
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">10. Budoucnost Frontend Developmentu</h2>

            <p className="text-gray-300 mb-4">
              Frontend development neustále evoluje. Sledujte tyto trendy:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>
                <strong className="text-white">Server Components</strong> - Lepší výkon a SEO
              </li>
              <li>
                <strong className="text-white">Edge Computing</strong> - Globálně distribuované aplikace
              </li>
              <li>
                <strong className="text-white">WebAssembly</strong> - Near-native výkon v prohlížeči
              </li>
              <li>
                <strong className="text-white">AI-assisted Development</strong> - GitHub Copilot a podobné nástroje
              </li>
              <li>
                <strong className="text-white">Web Components</strong> - Framework-agnostic komponenty
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Závěr</h2>

            <p className="text-gray-300 mb-4">
              Moderní frontend development je komplexní disciplína vyžadující znalost mnoha technologií a nástrojů.
              Klíčem k úspěchu je kontinuální učení a experimentování s novými přístupy. Nezapomeňte však, že
              technologie jsou jen nástroje – vždy se soustřeďte na uživatelskou zkušenost a business hodnotu.
            </p>

            <p className="text-gray-300 mb-4">
              Začněte s pevnými základy (HTML, CSS, JavaScript), osvojte si jeden moderní framework a postupně
              rozšiřujte své dovednosti. Frontend development je cesta, ne cíl – užívejte si ji!
            </p>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-lg p-6 mt-8 mb-8">
              <p className="text-lg text-gray-200">
                💡 <strong>Pro tip:</strong> Nejlepší způsob, jak se naučit frontend development, je budovat
                projekty. Začněte s jednoduchými úkoly a postupně zvyšujte komplexitu. Každý projekt vás posune o
                krok dál.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-700/50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4 text-white">Potřebujete moderní frontend pro váš projekt?</h3>
              <p className="text-lg text-gray-200 mb-6">
                Specializuji se na vytváření rychlých, responzivních a uživatelsky přívětivých webových aplikací 
                s využitím nejnovějších technologií jako React, Next.js a TypeScript. Ať už potřebujete nový web 
                od základu, nebo optimalizovat existující řešení, rád vám pomohu dosáhnout vašich cílů.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/webovy-vyvojar/kontakt"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Nezávazná konzultace
                  <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                </Link>
                <Link 
                  href="/webovy-vyvojar/projekty"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Zobrazit portfolio
                </Link>
              </div>
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Sdílet článek</h3>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                <Share2 className="h-4 w-4" />
                Twitter
              </button>
              <button className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg transition-colors">
                <Share2 className="h-4 w-4" />
                LinkedIn
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Související články</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/webovy-vyvojar/blog/react-nextjs"
                className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-xl font-semibold mb-2">React & Next.js: Kompletní průvodce</h4>
                <p className="text-gray-400 text-sm">
                  Detailní pohled na React a Next.js včetně best practices a pokročilých technik.
                </p>
              </Link>
              <Link
                href="/webovy-vyvojar/blog/optimalizace-vykonu"
                className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-xl font-semibold mb-2">Optimalizace výkonu webových aplikací</h4>
                <p className="text-gray-400 text-sm">
                  Praktické tipy a techniky pro dosažení maximálního výkonu vašich webových aplikací.
                </p>
              </Link>
            </div>
          </div>
        </motion.article>
      </main>

      <WebDevFooter />
    </div>
  )
}
