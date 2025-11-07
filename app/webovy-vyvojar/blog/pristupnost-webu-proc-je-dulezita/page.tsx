"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function WebAccessibility() {
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
            <span>15. 1. 2025</span>
            <span className="mx-3">•</span>
            <Clock className="mr-2 h-4 w-4" />
            <span>8 min čtení</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Přístupnost webu: Proč je důležitá a jak ji zlepšit
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Praktický průvodce implementací přístupnosti do vašich webových projektů a proč by měla být prioritou.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Accessibility</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Frontend</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">UX</span>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[400px] mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-green-500 to-teal-600"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl mb-4">♿</div>
              <div className="text-3xl font-bold">Web Accessibility</div>
              <div className="text-xl text-gray-200 mt-2">Web pro všechny</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <h2 className="text-3xl font-bold mt-12 mb-6">Co je přístupnost webu?</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Představte si, že jdete do budovy a je tam jen schody, žádný výtah. Pokud jste na vozíčku, 
            máte smůlu. Přístupnost webu je to samé - zajistit, aby web mohl používat každý, 
            včetně lidí se zdravotním postižením.
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Kdo potřebuje přístupný web?</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Nevidomí:</strong> Používají čtečku obrazovky (screen reader)</li>
              <li><strong>Nedoslýchaví:</strong> Potřebují titulky u videí</li>
              <li><strong>Lidé s motorickým postižením:</strong> Nemohou používat myš, jen klávesnici</li>
              <li><strong>Starší lidé:</strong> Horší zrak, pomalejší reakce</li>
              <li><strong>Dočasné postižení:</strong> Zlomená ruka, oční operace</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Proč řešit přístupnost? (Není to jen o empatii)</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">1. Je to zákon</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            V EU platí směrnice o přístupnosti webů a mobilních aplikací. Veřejný sektor MÁ přístupný 
            web. Od června 2025 i e-shopy a některé soukromé weby. Nehrozí jen pokuta, ale i žaloby.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-400 mb-2">Reálný příklad:</p>
            <p className="text-gray-300 leading-relaxed">
              Domino's Pizza v USA dostala žalobu za nepřístupný web - nevidomý zákazník nemohl 
              objednat pizzu. Soud rozhodl v jeho prospěch. Pokuta? Miliony dolarů + náklady na 
              úpravu webu.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">2. Větší trh = více zákazníků</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Cca 15% populace má nějaké zdravotní postižení. To je každý 6-7 člověk. Nepřístupný web 
            znamená, že těmto lidem říkáte "tady nenakupujte".
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Praktický dopad:</h3>
            <p className="text-gray-300 mb-3">
              E-shop s 10 000 návštěvníků/měsíc:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>15% má nějaké postižení = 1 500 lidí</li>
              <li>Průměrný nákup 1 000 Kč</li>
              <li>Konverze 2%</li>
            </ul>
            <p className="text-green-400 mt-3">
              = Potenciálně 30 000 Kč/měsíc které přicházíte, pokud web není přístupný
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">3. Lepší SEO</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Google "čte" web podobně jako čtečka obrazovky. Přístupný web = lépe strukturovaný web = 
            lepší pozice ve vyhledávání.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">4. Lepší UX pro všechny</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Přístupnost neprospívá jen lidem se postižením. Pomáhá VŠEM:
          </p>

          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Titulky u videí? Užitečné když sedíte ve vlaku bez sluchátek</li>
            <li>Velká tlačítka? Užitečné když máte mobil a velké prsty</li>
            <li>Dobrý kontrast? Užitečné když sedíte venku na slunci</li>
            <li>Klávesnicová navigace? Užitečné pro power usery</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Jak zlepšit přístupnost - Praktické tipy</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">1. Správné HTML tagy (Sémantický HTML)</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Nepoužívejte &lt;div&gt; na všechno. HTML má speciální tagy s významem:
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-red-400 font-semibold mb-2">❌ Špatně:</p>
                <p className="text-gray-400 font-mono text-sm">
                  &lt;div onClick=...&gt;Klikni&lt;/div&gt;
                </p>
              </div>
              <div>
                <p className="text-green-400 font-semibold mb-2">✓ Dobře:</p>
                <p className="text-gray-400 font-mono text-sm">
                  &lt;button&gt;Klikni&lt;/button&gt;
                </p>
              </div>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              Button má vestavěnou podporu klávesnice, focusu, čtečky obrazovky...
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">2. Alt texty u obrázků</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Čtečka obrazovky nemůže "vidět" obrázek. Alt text je popis, co je na obrázku.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <div>
                <p className="text-red-400 font-semibold mb-2">❌ Špatně:</p>
                <p className="text-gray-400 font-mono text-sm mb-2">
                  &lt;img src="img123.jpg" alt="obrázek"&gt;
                </p>
                <p className="text-sm text-gray-400">"Obrázek" nic neříká</p>
              </div>
              <div>
                <p className="text-green-400 font-semibold mb-2">✓ Dobře:</p>
                <p className="text-gray-400 font-mono text-sm mb-2">
                  &lt;img src="img123.jpg" alt="Černý labrador hrající si s míčem na trávníku"&gt;
                </p>
                <p className="text-sm text-gray-400">Popisný, konkrétní text</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">3. Kontrast barev</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Světle šedý text na bílém pozadí vypadá "moderně", ale nikdo to nepřečte. 
            Minimum je kontrast 4.5:1 (pro normální text).
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-400 mb-4">Příklady kontrastů:</p>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded">
                <p className="text-gray-300">❌ Špatně: Kontrast 2.5:1 - Těžko čitelné</p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="text-gray-800">✓ Dobře: Kontrast 12:1 - Perfektně čitelné</p>
              </div>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              Tip: Použijte nástroj WebAIM Contrast Checker pro kontrolu
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">4. Klávesnicová navigace</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Ne každý může používat myš. Web musí fungovat jen s klávesnicí (Tab, Enter, šipky).
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Checklist klávesnicové navigace:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>☐ Dá se Tabem projít všechny interaktivní elementy?</li>
              <li>☐ Je vidět, který element je právě vybraný (focus)?</li>
              <li>☐ Dá se formulář odeslat Enterem?</li>
              <li>☐ Dá se modal zavřít Escape?</li>
              <li>☐ Focus má logické pořadí (ne chaoticky)?</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">5. Popisné linky</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            "Klikněte zde" je nejhorší text pro link. Čtečka obrazovky čte jen text linku, 
            ne okolní text.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <div>
                <p className="text-red-400 font-semibold mb-2">❌ Špatně:</p>
                <p className="text-gray-300 mb-1">Pro více informací o našich službách <span className="text-blue-400">klikněte zde</span>.</p>
                <p className="text-sm text-gray-400">Co je "zde"? Čtečka to neví.</p>
              </div>
              <div>
                <p className="text-green-400 font-semibold mb-2">✓ Dobře:</p>
                <p className="text-gray-300 mb-1">Přečtěte si <span className="text-blue-400">více o našich webových službách</span>.</p>
                <p className="text-sm text-gray-400">Jasné, o co jde.</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">6. Formuláře s labely</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Každé pole musí mít popisek (label), ne jen placeholder. Placeholder zmizí když 
            začnete psát - pak nevíte, co tam máte psát.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <div className="space-y-4">
              <div>
                <p className="text-red-400 font-semibold mb-2">❌ Špatně:</p>
                <p className="text-gray-400 font-mono text-sm">
                  &lt;input placeholder="Jméno"&gt;
                </p>
              </div>
              <div>
                <p className="text-green-400 font-semibold mb-2">✓ Dobře:</p>
                <p className="text-gray-400 font-mono text-sm">
                  &lt;label for="jmeno"&gt;Jméno:&lt;/label&gt;<br/>
                  &lt;input id="jmeno" placeholder="např. Jan Novák"&gt;
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Jak testovat přístupnost</h2>
          
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Jednoduché testy (můžete udělat sami):</h3>
            <ol className="list-decimal list-inside text-gray-300 space-y-3">
              <li>
                <strong>Klávesnicový test:</strong> Odpojte myš, zkuste web ovládat jen klávesnicí
              </li>
              <li>
                <strong>Zoom test:</strong> Zvětšete stránku na 200% - je pořád použitelná?
              </li>
              <li>
                <strong>Kontrastní test:</strong> WebAIM Contrast Checker
              </li>
              <li>
                <strong>Čtečka obrazovky:</strong> NVDA (Windows, zdarma) nebo VoiceOver (Mac, vestavěné)
              </li>
              <li>
                <strong>Automatické nástroje:</strong> Lighthouse (v Chrome DevTools), axe DevTools
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Časté mýty</h2>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-red-400">Mýtus 1:</strong> "Přístupnost je drahá"<br/>
                <span className="text-sm text-gray-400">Realita: Je levnější implementovat od začátku než opravovat později</span>
              </li>
              <li>
                <strong className="text-red-400">Mýtus 2:</strong> "Přístupný web musí být ošklivý"<br/>
                <span className="text-sm text-gray-400">Realita: Apple, Airbnb, GitHub - krásné I přístupné weby</span>
              </li>
              <li>
                <strong className="text-red-400">Mýtus 3:</strong> "Málo lidí to potřebuje"<br/>
                <span className="text-sm text-gray-400">Realita: 15% populace + pomáhá to všem</span>
              </li>
              <li>
                <strong className="text-red-400">Mýtus 4:</strong> "Můj web není pro zdravotně postižené"<br/>
                <span className="text-sm text-gray-400">Realita: Nemůžete vědět kdo váš web navštíví. Plus je to zákon.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Závěr</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Přístupnost není "nice to have", ale povinnost. Nejen ze zákona, ale i morálně. 
            Chceme přece, aby náš web mohl používat každý, ne?
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Dobré zprávy? Většina přístupnosti jsou jednoduché věci - správné HTML tagy, alt texty, 
            labely. Nemusíte být expert, stačí myslet na uživatele.
          </p>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Chcete přístupný web?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Vytvořím vám web splňující standardy přístupnosti (WCAG 2.1 AA). Audit stávajícího webu, 
              návrh úprav nebo implementace přístupného webu od základu. Splňte zákon a získejte více zákazníků.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/webovy-vyvojar/kontakt"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Audit přístupnosti
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
              <Link
                href="/webovy-vyvojar/projekty"
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                Přístupné weby v portfoliu
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
