"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function ModernWebArticle() {
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
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Moderní technologie</span>
              <span className="bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full text-sm">Škálovatelnost</span>
              <span className="bg-violet-900/50 text-violet-300 px-3 py-1 rounded-full text-sm">Budoucnost</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Moderní web, který s vámi poroste: Proč technologie rozhoduje o budoucnosti
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>8. listopadu 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>10 min čtení</span>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop"
                alt="Moderní webové technologie - laptop s kódem"
                fill
                className="object-cover"
              />
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              "Můžu k webu přidat XY?" - "Ne, to původní systém neumožňuje." Tohle je věta, kterou nechci 
              nikdy slyšet od developera. Proto stavím weby na moderních technologiích, které vás neomezují. 
              Když váš byznys poroste, web poroste s ním. Pojďme si říct proč technologie není jen technický 
              detail, ale rozhoduje o tom, kam až se dostanete.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Problém starých řešení</h2>

            <p className="text-gray-300 mb-6">
              Viděl jsem to mockrát. Firma začne s jednoduchým webem. Po roce chtějí:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Přidat e-shop</li>
              <li>Propojit se skladovým systémem</li>
              <li>Udělat mobilní aplikaci</li>
              <li>Automatizovat marketing</li>
            </ul>

            <p className="text-gray-300 mb-6">
              A pak přijde tvrdá pravda: <strong>"To s vaším současným systémem nejde."</strong>
            </p>

            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-800/50 rounded-lg p-6 my-8">
              <p className="text-lg text-gray-200">
                ⚠️ <strong>Reálný příklad:</strong> Klient měl web postavený na starém WordPressu. 
                Po 3 letech chtěl přidat vlastní kalkulačku, rezervační systém a propojení s účetnictvím. 
                Programátor řekl: "Musíme to celé předělat, jinak to nejde." Náklady: 250 000 Kč. 
                Kdyby to bylo postavené správně od začátku, stálo by to 30 000 Kč navíc.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Co dělá technologii "moderní"?</h2>

            <p className="text-gray-300 mb-6">
              Ne každý nový framework je automaticky lepší. Moderní = řeší problémy, které starší řešení nezvládají:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <ul className="space-y-4 text-gray-300">
                <li>
                  <strong className="text-emerald-400">1. Škálovatelnost - poroste s vámi</strong><br/>
                  <span className="text-sm text-gray-400">
                    Dnes máte 100 návštěvníků denně, za rok 10 000. Moderní web to zvládne bez předělávání. 
                    Starý se sesype nebo bude nepoužitelně pomalý.
                  </span>
                </li>
                <li>
                  <strong className="text-blue-400">2. Flexibilita - přidáte cokoliv</strong><br/>
                  <span className="text-sm text-gray-400">
                    Chcete rezervační systém? Chatbota? Propojení s CRM? API pro mobilní app? 
                    Moderní technologie umožňuje přidávat funkce bez přestavby celého webu.
                  </span>
                </li>
                <li>
                  <strong className="text-violet-400">3. Rychlost - lepší než konkurence</strong><br/>
                  <span className="text-sm text-gray-400">
                    Moderní frameworky jsou optimalizované pro rychlost. Váš web se načte rychleji než konkurence = 
                    více zákazníků, lepší SEO.
                  </span>
                </li>
                <li>
                  <strong className="text-orange-400">4. Bezpečnost - neustálé aktualizace</strong><br/>
                  <span className="text-sm text-gray-400">
                    Staré technologie přestávají být podporované. Žádné bezpečnostní záplaty = hackeři mají otevřené dveře. 
                    Moderní technologie jsou aktivně udržované.
                  </span>
                </li>
                <li>
                  <strong className="text-cyan-400">5. Náklady na údržbu - levnější dlouhodobě</strong><br/>
                  <span className="text-sm text-gray-400">
                    Ano, moderní web stojí víc na začátku (o 20-40%). Ale ušetříte na údržbě, přidávání funkcí 
                    a v budoucnu nemusíte vše předělávat. ROI je do 2-3 let.
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Jaké technologie používám?</h2>

            <p className="text-gray-300 mb-6">
              Nejsem dogmatik. Volím podle typu projektu. Ale mám své oblíbence pro různé situace:
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">Pro prezentační weby a blogy: Next.js</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-200 mb-4"><strong>Proč Next.js?</strong></p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li>✅ Bleskurychlý (Static Generation - web se generuje předem)</li>
                <li>✅ Skvělé SEO (Google vidí obsah okamžitě)</li>
                <li>✅ Snadné přidávání funkcí (blog, formuláře, API)</li>
                <li>✅ Automatické optimalizace obrázků a rychlosti</li>
                <li>✅ Hosting zdarma nebo za pár korun (Vercel, Netlify)</li>
              </ul>
              <p className="text-sm text-gray-400">
                <strong>Kdy použít:</strong> Firemní prezentace, portfolia, blogy, landing pages. 
                Když potřebujete rychlý web s dobrým SEO.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-emerald-400">Pro e-shopy: Next.js + Headless CMS</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-200 mb-4"><strong>Proč headless přístup?</strong></p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li>✅ Frontend a backend odděleně (snadná údržba)</li>
                <li>✅ Můžete změnit jeden bez ovlivnění druhého</li>
                <li>✅ Později přidáte mobilní app se stejným backendem</li>
                <li>✅ Rychlejší než tradiční e-shopy (WordPress + WooCommerce)</li>
              </ul>
              <p className="text-sm text-gray-400">
                <strong>Kdy použít:</strong> E-shopy od středních po velké. Když plánujete růst a chcete flexibilitu.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-violet-400">Pro webové aplikace: Next.js + PostgreSQL</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-200 mb-4"><strong>Proč tento stack?</strong></p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li>✅ Zvládne velké množství dat (miliony záznamů)</li>
                <li>✅ Pokročilé databázové funkce (full-text search, JSON data)</li>
                <li>✅ Open-source (žádné licenční poplatky)</li>
                <li>✅ Použitelné pro rezervační systémy, SaaS, dashboardy</li>
              </ul>
              <p className="text-sm text-gray-400">
                <strong>Kdy použít:</strong> CRM systémy, rezervační systémy, administrace, dashboardy, interní aplikace.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-orange-400">Pro velmi jednoduché weby: Astro</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-200 mb-4"><strong>Proč Astro?</strong></p>
              <ul className="space-y-2 text-gray-300 mb-4">
                <li>✅ Nejrychlejší možné načítání (žádný JavaScript pokud není potřeba)</li>
                <li>✅ Perfektní pro statický obsah</li>
                <li>✅ Extrémně jednoduché (snadná údržba)</li>
                <li>✅ Nízké náklady na hosting</li>
              </ul>
              <p className="text-sm text-gray-400">
                <strong>Kdy použít:</strong> Jednoduché prezentační weby (vizitka, portfolio), 
                kdy nepotřebujete interaktivitu.
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border border-amber-800/50 rounded-lg p-6 my-8">
              <p className="text-lg text-gray-200">
                💡 <strong>A co WordPress?</strong> WordPress není špatný. Pro některé projekty je dobrá volba 
                (obsáhlé blogy, kdy klient chce sám přidávat články). Ale pro e-shopy a aplikace preferuji 
                moderní technologie - jsou rychlejší, bezpečnější a flexibilnější. WordPress používám, 
                když klient specificky chce (nebo má již existující WP web).
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Reálné příklady: Před vs. Po</h2>

            <div className="bg-gray-900/50 border border-emerald-800/50 rounded-lg p-6 my-6">
              <h4 className="text-xl font-semibold mb-4 text-emerald-400">Příklad 1: E-shop s oblečením</h4>
              
              <p className="text-gray-200 mb-2"><strong>PŘED (WooCommerce):</strong></p>
              <ul className="space-y-1 text-gray-300 mb-4 text-sm">
                <li>• Načítání: 4,8 sekundy</li>
                <li>• Při 50+ současných uživatelích se web zasekával</li>
                <li>• Přidání nové funkce: 2-4 týdny práce</li>
                <li>• Hosting: 800 Kč/měsíc (VPS kvůli výkonu)</li>
              </ul>

              <p className="text-gray-200 mb-2"><strong>PO (Next.js + Shopify API):</strong></p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Načítání: 1,2 sekundy</li>
                <li>• Zvládne tisíce současných uživatelů</li>
                <li>• Přidání funkce: 3-5 dní práce</li>
                <li>• Hosting: 200 Kč/měsíc (Vercel)</li>
                <li>• <strong className="text-emerald-400">Konverze +1,8 procentního bodu (z 2,1% na 3,9%)</strong></li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-blue-800/50 rounded-lg p-6 my-6">
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Příklad 2: Rezervační systém pro salony</h4>
              
              <p className="text-gray-200 mb-2"><strong>PŘED (Custom PHP):</strong></p>
              <ul className="space-y-1 text-gray-300 mb-4 text-sm">
                <li>• Každá změna vyžadovala programátora (1500-3000 Kč/hod)</li>
                <li>• Mobilní verze nefungovala správně</li>
                <li>• Žádné notifikace, vše manuálně</li>
                <li>• Časté bugy po aktualizacích</li>
              </ul>

              <p className="text-gray-200 mb-2"><strong>PO (Next.js + PostgreSQL):</strong></p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Majitel může měnit ceny, služby, otevírací dobu sám</li>
                <li>• Responzivní - funguje perfektně na mobilu</li>
                <li>• Automatické SMS/email připomínky</li>
                <li>• Stabilní, žádné bugy</li>
                <li>• <strong className="text-blue-400">Ušetřili 80 000 Kč ročně na programátorských hodinách</strong></li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Kolik to stojí?</h2>

            <p className="text-gray-300 mb-6">
              Ceny se liší podle složitosti. Ale dám vám orientační rozpětí:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <ul className="space-y-4 text-gray-300">
                <li>
                  <strong className="text-emerald-400">Prezentační web (Next.js): 30 000 - 80 000 Kč</strong><br/>
                  <span className="text-sm text-gray-400">
                    5-15 stránek, kontaktní formulář, blog, SEO optimalizace. 
                    Hosting 0-300 Kč/měsíc. Dodací lhůta: 2-4 týdny.
                  </span>
                </li>
                <li>
                  <strong className="text-blue-400">E-shop (headless): 80 000 - 250 000 Kč</strong><br/>
                  <span className="text-sm text-gray-400">
                    Produkt management, košík, platby, objednávky, správa skladu. 
                    Hosting 500-1500 Kč/měsíc. Dodací lhůta: 6-12 týdnů.
                  </span>
                </li>
                <li>
                  <strong className="text-violet-400">Webová aplikace (Next.js + DB): 150 000 - 500 000 Kč</strong><br/>
                  <span className="text-sm text-gray-400">
                    Rezervační systémy, CRM, dashboardy, SaaS produkty. 
                    Hosting 800-3000 Kč/měsíc. Dodací lhůta: 10-20 týdnů.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-800/50 rounded-lg p-6 my-8">
              <p className="text-lg text-gray-200">
                💰 <strong>Proč je to dražší než WordPress?</strong> Na začátku ano, o 30-50%. Ale dlouhodobě 
                ušetříte: nižší hosting, rychlejší přidávání funkcí (= méně hodin programátora), 
                lepší výkon = vyšší konverze. ROI je typicky 18-36 měsíců.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Závěr: Technologie jsou investice, ne náklad</h2>

            <p className="text-gray-300 mb-6">
              Za roky jsem viděl desítky projektů. Ty, které šetřily na technologii na začátku, 
              zaplatily 2-3× víc v dlouhodobém horizontu. Ty, které investovaly do moderního řešení, 
              měly:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Nižší náklady na údržbu</li>
              <li>Rychlejší přidávání funkcí (= reagovali na trh rychleji)</li>
              <li>Lepší výkon (= více zákazníků, vyšší konverze)</li>
              <li>Nemusely předělávat web po 2-3 letech</li>
            </ul>

            <p className="text-gray-300 mb-6">
              <strong>Moje rada:</strong> Nešetřete na technologii. Ušetřete na designu (ten můžete 
              vylepšit později), na marketingu (ten spustíte až bude web perfektní), ale ne na základech. 
              Špatná technologie = dům postavený na písku.
            </p>

            <div className="bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border border-emerald-700/50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4 text-white">Chcete moderní web, který poroste s vámi?</h3>
              <p className="text-lg text-gray-200 mb-6">
                Nabízím bezplatnou konzultaci, kde zjistíme:
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>✓ Co přesně potřebujete (nejen dnes, ale za rok nebo dva)</li>
                <li>✓ Jaká technologie je pro vás nejvhodnější</li>
                <li>✓ Realistický odhad ceny a času</li>
                <li>✓ Plán implementace krok po kroku</li>
                <li>✓ Jak se vyhnout nejčastějším chybám</li>
              </ul>
              <p className="text-gray-300 mb-6">
                Stavím weby na Next.js, React, Astro a moderních technologiích. Specializuji se na 
                rychlé, škálovatelné řešení, která vás neomezují. Každý projekt začíná pečlivou analýzou - 
                ne každý projekt potřebuje nejdražší řešení, ale každý potřebuje to správné.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/webovy-vyvojar/kontakt"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Bezplatná konzultace
                  <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                </Link>
                <Link 
                  href="/webovy-vyvojar/projekty"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Ukázat realizované projekty
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
                href="/webovy-vyvojar/blog/optimalizace-vykonu"
                className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-xl font-semibold mb-2">Rychlý web = více zákazníků</h4>
                <p className="text-gray-400 text-sm">Proč rychlost webu rozhoduje o úspěchu.</p>
              </Link>
              <Link
                href="/webovy-vyvojar/blog/ecommerce-reseni"
                className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-xl font-semibold mb-2">Jak vytvářím e-shopy</h4>
                <p className="text-gray-400 text-sm">Můj přístup k úspěšnému online obchodu.</p>
              </Link>
            </div>
          </div>
        </motion.article>
      </main>

      <WebDevFooter />
    </div>
  )
}
