"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function DesignArticle() {
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
              <span className="bg-violet-900/50 text-violet-300 px-3 py-1 rounded-full text-sm">Design</span>
              <span className="bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full text-sm">UX/UI</span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Konverze</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Design webu, který prodává: Proč vzhled rozhoduje o penězích v kapse
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>6. listopadu 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>11 min čtení</span>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop"
                alt="UX/UI design - wireframes a mockupy"
                fill
                className="object-cover"
              />
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              "Udělej mi hezký web" - slyším to často. A pak přijde otázka: "Kolik to bude stát?" 
              Když řeknu cenu, reakce je: "Proč? Vždyť to je jen pár stránek!" 
              Jenže design není o tom, jak to vypadá. Je o tom, jak to FUNGUJE. Dobrý design prodává. 
              Špatný design? Stojí vás zákazníky. Pojďme si ukázat proč a jak to dělám.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">První dojem rozhoduje (za 0,05 sekundy)</h2>

            <div className="bg-gray-900/50 border border-violet-800/50 rounded-lg p-6 my-6">
              <ul className="space-y-4 text-gray-300">
                <li>
                  <strong className="text-violet-400">94% prvního dojmu je o designu</strong><br/>
                  <span className="text-sm text-gray-400">
                    Ne o obsahu. Ne o ceně. O tom, jak web vypadá. Studie ukazuje, že návštěvník 
                    rozhodne za 50 milisekund, jestli mu váš web "sedí" nebo ne.
                  </span>
                </li>
                <li>
                  <strong className="text-emerald-400">75% lidí souudí důvěryhodnost firmy podle designu webu</strong><br/>
                  <span className="text-sm text-gray-400">
                    Zastaralý web = zastaralá firma. Neprofesionální web = neprofesionální služby. 
                    Možná je to nespravedlivé, ale je to realita.
                  </span>
                </li>
                <li>
                  <strong className="text-blue-400">38% lidí opustí web, pokud je layout nepříjemný</strong><br/>
                  <span className="text-sm text-gray-400">
                    Nepřehledné menu, chaotické rozmístění, špatně čitelné texty. 
                    Návštěvník neřeší proč - prostě odejde ke konkurenci.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-800/50 rounded-lg p-6 my-8">
              <p className="text-lg text-gray-200">
                ⚡ <strong>Reálný příklad:</strong> E-shop s nábytkem měl 2,1% konverzní poměr. 
                Redesign (lepší fotky produktů, přehlednější košík, výraznější CTA tlačítka): 
                3,8% konverze. To je +80% prodejů! Investice 120 000 Kč se vrátila za 4 měsíce.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Co dělá design "dobrý"?</h2>

            <p className="text-gray-300 mb-6">
              Není to o tom, jak moc je web "hezký". Je to o tom, jak dobře plní svůj účel:
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">1. Jasná hierarchie - vím co je důležité</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-200 mb-4"><strong>Špatně:</strong></p>
              <p className="text-gray-300 mb-4 text-sm">
                Všechno má stejnou velikost. Nadpisy, text, tlačítka - všechno stejné. 
                Návštěvník neví kam se dívat první. Přečte první větu a odejde.
              </p>
              <p className="text-gray-200 mb-4"><strong>Dobře:</strong></p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✅ Hlavní nadpis je největší (jasně vidím o čem web je)</li>
                <li>✅ Důležité informace vyniknou (tučné, barevné, větší)</li>
                <li>✅ Tlačítka jsou výrazná (vím co mám kliknout)</li>
                <li>✅ Méně důležité věci jsou menší nebo šedé</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-emerald-400">2. Bílý prostor - nechávám věci dýchat</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-200 mb-4"><strong>Špatně:</strong></p>
              <p className="text-gray-300 mb-4 text-sm">
                Všechno narvaný vedle sebe. Text, obrázky, tlačítka. Žádné mezery. 
                Vypadá to jako bazarová inzerce.
              </p>
              <p className="text-gray-200 mb-4"><strong>Dobře:</strong></p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✅ Mezi sekcemi je prostor (oko si odpočine)</li>
                <li>✅ Kolem textu je "vzduch" (čte se líp)</li>
                <li>✅ Prvky jsou logicky seskupené</li>
                <li>✅ Premium feeling = více prostoru</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border border-amber-800/50 rounded-lg p-6 my-8">
              <p className="text-lg text-gray-200">
                💡 <strong>Zajímavost:</strong> Luxusní značky (Apple, Tesla, Rolex) používají HODNĚ 
                bílého prostoru. Levné e-shopy cpou všechno vedle sebe. Proč? Prostor = exkluzivita. 
                Chaos = levnost. Zákazníci to podvědomě vnímají.
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-violet-400">3. Konzistence - není to loterie</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-200 mb-4"><strong>Špatně:</strong></p>
              <p className="text-gray-300 mb-4 text-sm">
                Každá stránka vypadá jinak. Různá tlačítka, různé barvy, jiné fonty. 
                Návštěvník se musí učit web používat znovu na každé stránce.
              </p>
              <p className="text-gray-200 mb-4"><strong>Dobře:</strong></p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✅ Stejný styl napříč celým webem</li>
                <li>✅ Tlačítka vypadají stejně (vím že jsou to tlačítka)</li>
                <li>✅ Barvy mají význam (zelená = potvrdit, červená = smazat)</li>
                <li>✅ Navigace je vždy na stejném místě</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-orange-400">4. Mobilní first - 70% lidí je na mobilu</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-200 mb-4"><strong>Špatně:</strong></p>
              <p className="text-gray-300 mb-4 text-sm">
                Web vypadá super na počítači. Na mobilu? Text mikroskopický, tlačítka malá, 
                musíte zoomovat. 70% návštěvníků odejde okamžitě.
              </p>
              <p className="text-gray-200 mb-4"><strong>Dobře:</strong></p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✅ Navrhuji pro mobil PRVNÍ, pak desktop</li>
                <li>✅ Tlačítka dost velká na tlustý palec</li>
                <li>✅ Text čitelný bez zoomování (min 16px)</li>
                <li>✅ Formuláře jednoduché vyplnit na mobilu</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-cyan-400">5. Clear CTA - vím co mám udělat</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-200 mb-4"><strong>Špatně:</strong></p>
              <p className="text-gray-300 mb-4 text-sm">
                5 tlačítek vedle sebe. "Více info", "Zjistit víc", "Kontakt", "Ceník", "Demo". 
                Který kliknout? Návštěvník to neví, tak neklikne žádný.
              </p>
              <p className="text-gray-200 mb-4"><strong>Dobře:</strong></p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✅ Jedno hlavní tlačítko (primární akce)</li>
                <li>✅ Jasný text ("Objednat nyní" ne "Kliknout sem")</li>
                <li>✅ Výrazná barva (kontrastuje s okolím)</li>
                <li>✅ Na správném místě (kde to návštěvník očekává)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Můj designový proces</h2>

            <p className="text-gray-300 mb-6">
              Design není "udělám to hezké". Je to systematický proces:
            </p>

            <div className="bg-gradient-to-r from-blue-900/20 to-violet-900/20 border border-blue-700/50 rounded-lg p-6 my-6">
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Krok 1: Výzkum (2-3 dny)</h4>
              <ul className="space-y-2 text-gray-300 text-sm mb-6">
                <li>• Kdo je cílová skupina? (věk, tech know-how, očekávání)</li>
                <li>• Co je hlavní cíl webu? (prodej, kontakt, registrace?)</li>
                <li>• Jak vypadá konkurence? (co dělají dobře/špatně)</li>
                <li>• Jaké máte obsahové materiály? (texty, fotky, videa)</li>
              </ul>

              <h4 className="text-xl font-semibold mb-4 text-emerald-400">Krok 2: Wireframes (1-2 dny)</h4>
              <ul className="space-y-2 text-gray-300 text-sm mb-6">
                <li>• Jednoduchý náčrt struktury (černobílý, bez detailů)</li>
                <li>• Kde bude co? Jak to bude fungovat?</li>
                <li>• Rychlé iterace (zkouším různé varianty)</li>
                <li>• Schválení od klienta před pokračováním</li>
              </ul>

              <h4 className="text-xl font-semibold mb-4 text-violet-400">Krok 3: Vizuální design (3-5 dní)</h4>
              <ul className="space-y-2 text-gray-300 text-sm mb-6">
                <li>• Barvy (podle brand identity)</li>
                <li>• Typografie (čitelné fonty, správné velikosti)</li>
                <li>• Ikony a ilustrace</li>
                <li>• Mockupy (jak bude web vypadat hotový)</li>
              </ul>

              <h4 className="text-xl font-semibold mb-4 text-orange-400">Krok 4: Prototyp (1-2 dny)</h4>
              <ul className="space-y-2 text-gray-300 text-sm mb-6">
                <li>• Interaktivní mockup (můžete si proklikat)</li>
                <li>• Testování flow (rezervace, nákup, registrace)</li>
                <li>• Zjištění problémů PŘED vývojem</li>
                <li>• Finální schválení</li>
              </ul>

              <h4 className="text-xl font-semibold mb-4 text-cyan-400">Krok 5: Vývoj (podle rozsahu)</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Převod designu do kódu</li>
                <li>• Responzivita (mobil, tablet, desktop)</li>
                <li>• Animace a mikrointerakce</li>
                <li>• Optimalizace rychlosti</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border border-emerald-800/50 rounded-lg p-6 my-8">
              <p className="text-lg text-gray-200">
                🎯 <strong>Proč tohle dělám:</strong> Vidím to často - klient chce "rovnou začít programovat". 
                Po týdnu práce: "To by mělo být jinak." Předělávka 50% práce. Kdyby byl wireframe/mockup, 
                zjistili bychom to za 2 hodiny, ne 2 týdny.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Časté chyby (a jak se jim vyhnout)</h2>

            <div className="bg-gray-900/50 border border-red-800/50 rounded-lg p-6 my-6">
              <ul className="space-y-4 text-gray-300">
                <li>
                  <strong className="text-red-400">❌ Příliš mnoho barev</strong><br/>
                  <span className="text-sm text-gray-400">
                    Červená, modrá, zelená, oranžová, fialová... vypadá to jako dětská omalovánka. 
                    <br/>✅ Řešení: Max 3 barvy (primární, sekundární, akcent).
                  </span>
                </li>
                <li>
                  <strong className="text-red-400">❌ Příliš mnoho fontů</strong><br/>
                  <span className="text-sm text-gray-400">
                    Každá sekce jiný font. Vypadá to chaoticky a načítá se to pomalu.
                    <br/>✅ Řešení: Max 2 fonty (jeden pro nadpisy, jeden pro text).
                  </span>
                </li>
                <li>
                  <strong className="text-red-400">❌ Špatné fotky</strong><br/>
                  <span className="text-sm text-gray-400">
                    Stock fotky z 2005, pixelované, špatně oréznuté. Nebo horší - žádné fotky.
                    <br/>✅ Řešení: Profesionální fotografie nebo kvalitní moderní stock (Unsplash).
                  </span>
                </li>
                <li>
                  <strong className="text-red-400">❌ Automatické přehrávání videa/hudby</strong><br/>
                  <span className="text-sm text-gray-400">
                    Návštěvník otevře web v kanceláři. Spustí se hlasité video. Okamžitě zavře.
                    <br/>✅ Řešení: Video jen na kliknutí. NIKDY automatické audio.
                  </span>
                </li>
                <li>
                  <strong className="text-red-400">❌ Animace všeho co se hne</strong><br/>
                  <span className="text-sm text-gray-400">
                    Text vjíždí zleva, obrázky rotují, tlačítka blikají. Návštěvník z toho má epilepsii.
                    <br/>✅ Řešení: Jemné, účelné animace. Méně je více.
                  </span>
                </li>
              </ul>
            </div>

           

            <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-800/50 rounded-lg p-6 my-8">
              <p className="text-lg text-gray-200">
                💰 <strong>Je to drahé?</strong> Záleží jak se na to díváte. Špatný design = ztracené prodeje každý den. 
                E-shop s 1000 návštěvníky měsíčně, konverze 2%. Dobrý redesign zvýší na 3,5%. 
                To je +15 prodejů měsíčně. Při průměrném košíku 2000 Kč = +30 000 Kč měsíčně. 
                Investice 80 000 Kč se vrátí za 2,5 měsíce.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Závěr: Design není náklad, je investice</h2>

            <p className="text-gray-300 mb-6">
              Za roky práce jsem viděl stovky webů. Ty úspěšné mají společné:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Investovaly do designu na začátku (ne dodatečně)</li>
              <li>Design řešil problémy uživatelů (ne jen "vypadal hezky")</li>
              <li>Testovaly a iterovaly (neudělaly jeden design a hotovo)</li>
              <li>Měřily výsledky (konverze, bounce rate, čas na stránce)</li>
            </ul>

            <p className="text-gray-300 mb-6">
              <strong>Moje rada:</strong> Nešetřete na designu. Levný design = levný dojem = levní zákazníci (nebo žádní). 
              Dobrý design = důvěryhodnost = vyšší konverze = více peněz.
            </p>

            <div className="bg-gradient-to-r from-violet-900/20 to-blue-900/20 border border-violet-700/50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4 text-white">Chcete design, který skutečně prodává?</h3>
              <p className="text-lg text-gray-200 mb-6">
                Nabízím:
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>✓ UX audit vašeho webu (kde ztrácíte zákazníky)</li>
                <li>✓ Wireframe + mockup návrh (vidíte výsledek PŘED vývojem)</li>
                <li>✓ A/B testování designů (data, ne dojmy)</li>
                <li>✓ Kompletní implementace včetně responzivity</li>
              </ul>
              <p className="text-gray-300 mb-6">
                Moje filozofie: Design není o tom, jak to vypadá. Je o tom, jak to funguje. 
                Každé rozhodnutí má důvod - proč tato barva, proč toto tlačítko tady, 
                proč tento font. Žádné "protože se mi to líbí". Vše je založeno na datech a best practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/webovy-vyvojar/kontakt"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Bezplatný UX audit
                  <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                </Link>
                <Link 
                  href="/webovy-vyvojar/projekty"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Portfolio designů
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
                href="/webovy-vyvojar/blog/pristupnost-webu-proc-je-dulezita"
                className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-xl font-semibold mb-2">Web pro všechny = více zákazníků</h4>
                <p className="text-gray-400 text-sm">Proč přístupnost znamená více prodejů.</p>
              </Link>
            </div>
          </div>
        </motion.article>
      </main>

      <WebDevFooter />
    </div>
  )
}
