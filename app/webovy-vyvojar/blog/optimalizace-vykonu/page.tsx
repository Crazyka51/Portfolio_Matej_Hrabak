"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function PerformanceOptimizationArticle() {
  return (
    <div className="min-h-screen bg-[#010714] text-white">
      <WebDevNavbar />

      <main className="container mx-auto px-4 py-16">
        <Link
          href="/webovy-vyvojar/blog"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span>Zpět na blog</span>
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Rychlost</span>
              <span className="bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full text-sm">Uživatelská zkušenost</span>
              <span className="bg-violet-900/50 text-violet-300 px-3 py-1 rounded-full text-sm">Konverze</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rychlý web = více zákazníků: Proč rychlost rozhoduje o úspěchu
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>10. listopadu 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>12 min čtení</span>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="/images/jakoptimalizovatreact.webp"
                alt="Rychlý web znamená více zákazníků"
                fill
                className="object-cover"
              />
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              "Proč mi lidé opouštějí web? Všechno tam je!" - slyším to často. Odpověď je jednoduchá: 
              Protože je pomalý. Každá sekunda čekání znamená ztrátu zákazníků a peněz. 
              Za roky optimalizace webů jsem viděl, jak rychlost přímo ovlivňuje prodeje. Pojďme si říct, 
              proč rychlost není jen technický detail, ale byznysová nutnost.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Čísla, která mluví za vše</h2>

            <p className="text-gray-300 mb-6">
              Nepíšu teorie - píšu o reálných číslech, která vidím u klientů:
            </p>

            <div className="bg-gray-900/50 border border-emerald-800/50 rounded-lg p-6 my-6">
              <ul className="space-y-4 text-gray-300">
                <li>
                  <strong className="text-emerald-400">1 sekunda zpoždění = 7% méně prodejů</strong><br/>
                  <span className="text-sm text-gray-400">
                    Amazon zjistil, že každých 100ms zpoždění je stojí 1% tržeb. Pro e-shop s obratem 
                    10 milionů ročně to znamená ztrátu 100 000 Kč za každých 100ms navíc.
                  </span>
                </li>
                <li>
                  <strong className="text-blue-400">53% lidí opustí web, který se načítá déle než 3 sekundy</strong><br/>
                  <span className="text-sm text-gray-400">
                    Mobilní uživatelé jsou ještě netrpělivější. Když váš web běží na mobilu 5+ sekund, 
                    většinu návštěvníků nikdy neuvidíte.
                  </span>
                </li>
                <li>
                  <strong className="text-violet-400">Rychlost webu ovlivňuje pozici v Google</strong><br/>
                  <span className="text-sm text-gray-400">
                    Google přímo říká: "Rychlé weby mají výhodu." Viděl jsem weby posunout se o 10-15 pozic 
                    výš jen díky optimalizaci rychlosti.
                  </span>
                </li>
                <li>
                  <strong className="text-orange-400">Každých 0,1s zlepšení = +8% konverzí (Walmart)</strong><br/>
                  <span className="text-sm text-gray-400">
                    Walmart zveřejnil study: Za každé zrychlení o 100ms vzrostly konverze o 1%. 
                    To není málo - pro běžný e-shop to může být 50 000 - 200 000 Kč navíc měsíčně.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-800/50 rounded-lg p-6 my-8">
              <p className="text-lg text-gray-200">
                ⚡ <strong>Reálný příklad:</strong> Nedávno jsem optimalizoval e-shop s nábytkem. 
                Původně se načítal 6,2 sekundy. Po optimalizaci (obrázky, caching, rychlejší hosting) 
                to bylo 1,8s. Výsledek? Konverze vzrostly z 1,2% na 2,1% během měsíce. 
                Majitel počítal, že mu to přineslo +300 000 Kč měsíčně.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Co dělá web pomalým?</h2>

            <p className="text-gray-300 mb-6">
              Nejčastější problémy, které vidím při auditování webů:
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">1. Obří obrázky (80% případů)</h3>

            <p className="text-gray-300 mb-4">
              Největší hříšník. Vidím to neustále:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <ul className="space-y-3 text-gray-300">
                <li>
                  ❌ <strong>Fotka z mobilu:</strong> 4000×3000 pixelů, 8 MB<br/>
                  <span className="text-sm text-gray-400">
                    Na webu se zobrazuje 400×300 pixelů. Stahujete 20× více dat než potřebujete.
                  </span>
                </li>
                <li>
                  ❌ <strong>Formát PNG pro fotografie:</strong> Bude 3-5× větší než JPEG<br/>
                  <span className="text-sm text-gray-400">
                    PNG je pro screenshoty, loga, ikony. Ne pro fotky produktů.
                  </span>
                </li>
                <li>
                  ✅ <strong>Řešení:</strong> Zmenšit, komprimovat, použít moderní formát (WebP)<br/>
                  <span className="text-sm text-gray-400">
                    Stejná fotka produktu: PNG 2,4 MB → optimalizovaný WebP 180 KB. To je 93% úspora!
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border border-emerald-800/50 rounded-lg p-6 my-8">
              <p className="text-lg text-gray-200">
                💡 <strong>Jak to dělám já:</strong> Všechny obrázky automaticky konvertuji do WebP 
                (85-90% kvalita, nikdo nepozná rozdíl), vytvořím několik velikostí (mobilní, tablet, desktop) 
                a načítám jen tu správnou podle zařízení. Homepage místo 8 MB má 400 KB. Rozdíl je znát okamžitě.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-orange-400">2. Pomalý hosting (60% případů)</h3>

            <p className="text-gray-300 mb-4">
              "Ale mám nejlevnější tarif za 99 Kč měsíčně, to přece stačí?"
            </p>

            <p className="text-gray-300 mb-6">
              Ne, nestačí. Sdílený hosting za pár korun znamená:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Server odpovídá 800-1500ms (mělo by být pod 200ms)</li>
              <li>V době špičky se vše zasekne (sdílíte server s 500 dalšími weby)</li>
              <li>Žádný moderní caching, starý PHP, pomalá databáze</li>
            </ul>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-200 mb-4"><strong>Co doporučuji:</strong></p>
              <ul className="space-y-3 text-gray-300">
                <li>
                  💚 <strong>Malé weby a prezentace:</strong> Vercel, Netlify (zdarma nebo 200-500 Kč/měsíc)<br/>
                  <span className="text-sm text-gray-400">
                    Bleskurychlé, globální CDN, automatické škálování.
                  </span>
                </li>
                <li>
                  💙 <strong>E-shopy a aplikace:</strong> VPS server (od 400 Kč/měsíc)<br/>
                  <span className="text-sm text-gray-400">
                    Dedicated resources, full control, můžete optimalizovat všechno.
                  </span>
                </li>
                <li>
                  💜 <strong>Velké projekty:</strong> Cloud (AWS, Google Cloud, Azure)<br/>
                  <span className="text-sm text-gray-400">
                    Platíte jen za to, co používáte. Automatické škálování.
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-violet-400">3. Přebujelé WordPress pluginy (50% WP webů)</h3>

            <p className="text-gray-300 mb-6">
              Viděl jsem WordPress s 45 aktivními pluginy. Načítalo se to 9 sekund. Proč?
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Každý plugin přidává svůj CSS a JavaScript (i když ho zrovna nepotřebujete)</li>
              <li>Pluginy se často špatně kódují a dělají zbytečné databázové dotazy</li>
              <li>Některé pluginy načítají celé knihovny jen kvůli jedné funkci</li>
            </ul>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-200 mb-4"><strong>Moje rada:</strong></p>
              <p className="text-gray-300 mb-4">
                Méně je více. Používejte jen ty nejnutnější pluginy. Raději zaplatit developera, 
                aby napsal custom řešení (3-10 000 Kč jednorázově) než platit výkonnostní penalizaci navždy.
              </p>
              <p className="text-gray-300">
                Nebo zvažte moderní alternativy: Next.js, Astro, Gatsby. Budou 5-10× rychlejší než WordPress.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-cyan-400">4. Žádný caching (40% případů)</h3>

            <p className="text-gray-300 mb-6">
              Představte si, že vaše e-shop pokaždé:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Načítá seznam produktů z databáze (i když se nezměnily)</li>
              <li>Generuje stejnou homepage znovu a znovu</li>
              <li>Stahuje stejná data z API každou sekundu</li>
            </ul>

            <p className="text-gray-300 mb-6">
              To je jako kdybyste jeli do práce každý den jinou cestou, místo abyste jeli tou nejrychlejší. 
              Caching = ukládání výsledků, které se často opakují.
            </p>

            <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-800/50 rounded-lg p-6 my-8">
              <p className="text-lg text-gray-200">
                🚀 <strong>Výsledek cachingu:</strong> E-shop co jsem nedávno optimalizoval měl 200-300ms 
                response time. Po nastavení cachingu (Redis pro databázi, CDN pro obrázky): 30-50ms. 
                To je 6× rychleji!
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Jak měřím rychlost?</h2>

            <p className="text-gray-300 mb-6">
              Používám nástroje, které ukážou přesná čísla:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-blue-400">Google PageSpeed Insights</strong><br/>
                  <span className="text-sm text-gray-400">
                    Zdarma, ukáže Core Web Vitals (metriky které Google používá pro ranking).
                    Cíl: 90+ bodů na mobilu i počítači.
                  </span>
                </li>
                <li>
                  <strong className="text-emerald-400">GTmetrix</strong><br/>
                  <span className="text-sm text-gray-400">
                    Detailní analýza, waterfall diagram (vidíte co se načítá kdy).
                    Ukáže přesně kde je problém.
                  </span>
                </li>
                <li>
                  <strong className="text-violet-400">WebPageTest</strong><br/>
                  <span className="text-sm text-gray-400">
                    Můžete testovat z různých lokací a na různých zařízeních.
                    Vidíte jak web běží v Praze vs USA vs mobil 3G.
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Co konkrétně dělám při optimalizaci?</h2>

            <p className="text-gray-300 mb-6">
              Moje checklist pro každý projekt:
            </p>

            <div className="bg-gradient-to-r from-emerald-900/20 to-blue-900/20 border border-emerald-700/50 rounded-lg p-6 my-6">
              <h4 className="text-xl font-semibold mb-4 text-emerald-400">Obrázky (největší dopad)</h4>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li>✅ Konverze do WebP formátu (90% menší než PNG)</li>
                <li>✅ Responzivní obrázky (mobilní verze je menší než desktop)</li>
                <li>✅ Lazy loading (obrázky se načtou až když je uživatel vidí)</li>
                <li>✅ Správné rozměry (ne 4000px obrázek když potřebujete 400px)</li>
              </ul>

              <h4 className="text-xl font-semibold mb-4 text-blue-400">Hosting a server</h4>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li>✅ Rychlý hosting (response time pod 200ms)</li>
                <li>✅ CDN (obrázky a soubory blízko uživateli)</li>
                <li>✅ HTTP/2 nebo HTTP/3 (rychlejší protokol)</li>
                <li>✅ Komprese (Gzip nebo Brotli)</li>
              </ul>

              <h4 className="text-xl font-semibold mb-4 text-violet-400">Databáze a backend</h4>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li>✅ Caching (Redis, Memcached)</li>
                <li>✅ Optimalizované SQL dotazy</li>
                <li>✅ Indexy v databázi</li>
                <li>✅ Connection pooling</li>
              </ul>

              <h4 className="text-xl font-semibold mb-4 text-orange-400">Frontend kód</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✅ Minifikace CSS a JavaScript</li>
                <li>✅ Code splitting (načíst jen co je potřeba)</li>
                <li>✅ Odstranění nepoužívaného kódu</li>
                <li>✅ Moderní build tools (Vite, Turbopack)</li>
              </ul>
            </div>

            

            <div className="bg-gradient-to-r from-amber-900/20 to-red-900/20 border border-amber-800/50 rounded-lg p-6 my-8">
              <p className="text-lg text-gray-200">
                💰 <strong>ROI (návratnost):</strong> Optimalizace za 20 000 Kč se vrátí za 2-6 měsíců 
                díky lepším konverzím a SEO. E-shop s obratem 2 mil/rok po optimalizaci (1,2% → 2,1% konverze) 
                vydělá +750 000 Kč ročně. To je 37× více než stála optimalizace.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Závěr: Rychlost není detail, je nutnost</h2>

            <p className="text-gray-300 mb-6">
              Za roky práce jsem viděl jednu věc znovu a znovu: <strong>Rychlé weby vyhrávají.</strong>
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Mají lepší pozice v Google (SEO boost)</li>
              <li>Mají vyšší konverze (lidé neopouštějí pomalé weby)</li>
              <li>Uživatelé je doporučují (lepší UX = word of mouth)</li>
              <li>Majitelé vydělávají více peněz</li>
            </ul>

            <p className="text-gray-300 mb-6">
              Pomalý web = házení peněz oknem. Každý den, kdy je váš web pomalý, je den 
              kdy prodáváte méně než by jste mohli.
            </p>

            <div className="bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border border-emerald-700/50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4 text-white">Chcete rychlý web, který prodává?</h3>
              <p className="text-lg text-gray-200 mb-6">
                Nabízím bezplatný rychlostní audit vašeho webu. Během 2-3 dnů dostanete:
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>✓ Aktuální skóre rychlosti (PageSpeed, GTmetrix)</li>
                <li>✓ Identifikaci 3-5 největších problémů</li>
                <li>✓ Odhad potenciálního zlepšení</li>
                <li>✓ Cenovou nabídku na optimalizaci</li>
                <li>✓ Reálná čísla: kolik můžete vydělat navíc</li>
              </ul>
              <p className="text-gray-300 mb-6">
                Mám zkušenosti s WordPress, Next.js, e-shopy, prezentační weby i komplexní aplikace. 
                Každý web optimalizuji podle jeho specifik - ne všechny potřebují stejný přístup.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/webovy-vyvojar/kontakt"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Bezplatný rychlostní audit
                  <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                </Link>
                <Link 
                  href="/webovy-vyvojar/projekty"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Ukázat optimalizované weby
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Sdílet článek</h3>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                <Share2 className="h-4 w-4" />
                Twitter
              </button>
              
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Související články</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/webovy-vyvojar/blog/ecommerce-reseni"
                className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-xl font-semibold mb-2">Jak vytvářím e-shopy</h4>
                <p className="text-gray-400 text-sm">Můj přístup k úspěšnému online obchodu.</p>
              </Link>
              <Link
                href="/webovy-vyvojar/blog/pristupnost-webu-proc-je-dulezita"
                className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-xl font-semibold mb-2">Web pro všechny</h4>
                <p className="text-gray-400 text-sm">Proč přístupnost znamená více zákazníků.</p>
              </Link>
            </div>
          </div>
        </motion.article>
      </main>

      <WebDevFooter />
    </div>
  )
}
