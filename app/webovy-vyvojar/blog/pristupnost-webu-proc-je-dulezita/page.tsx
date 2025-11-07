"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function AccessibilityArticle() {
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
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Přístupnost</span>
              <span className="bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full text-sm">Uživatelská zkušenost</span>
              <span className="bg-violet-900/50 text-violet-300 px-3 py-1 rounded-full text-sm">Business</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Web pro všechny = více zákazníků: Proč přístupnost není jen morálka, ale byznys
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>15. ledna 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>8 min čtení</span>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=800&fit=crop"
                alt="Různorodá skupina lidí používající technologie"
                fill
                className="object-cover"
              />
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              "Přístupnost? To je jen pro nevidomé, ne?" Ne. Přístupný web používá snáz KAŽDÝ - 
              senioři, lidé s dočasným zraněním, uživatelé na mobilu, lidé v hlučném prostředí. 
              To je 15-20% populace. Ignorovat je = házet peníze oknem. Pojďme si ukázat proč 
              přístupnost není morální povinnost, ale chytrý byznys.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Čísla, která vás přesvědčí</h2>

            <div className="bg-gray-900/50 border border-emerald-800/50 rounded-lg p-6 my-6">
              <ul className="space-y-4 text-gray-300">
                <li>
                  <strong className="text-emerald-400">15% populace má nějaké zdravotní omezení</strong><br/>
                  <span className="text-sm text-gray-400">
                    V ČR to je 1,5 milionu lidí. Pokud váš web není přístupný, přicházíte o potenciálně 
                    150 000 - 300 000 zákazníků (podle oboru).
                  </span>
                </li>
                <li>
                  <strong className="text-blue-400">71% lidí s omezeními opustí nepřístupný web</strong><br/>
                  <span className="text-sm text-gray-400">
                    Studie Click-Away Pound 2019: Nepřístupné weby ztratily 17,1 miliardy liber ročně 
                    jen ve Velké Británii. To není zanedbatelné číslo.
                  </span>
                </li>
                <li>
                  <strong className="text-violet-400">Přístupný web = lepší pro VŠECHNY</strong><br/>
                  <span className="text-sm text-gray-400">
                    Dobré kontrasty barev, velká tlačítka, jasné popisky - to oceníte i vy. 
                    Zlepšení přístupnosti často zlepší UX pro všechny uživatele o 20-40%.
                  </span>
                </li>
                <li>
                  <strong className="text-orange-400">Google miluje přístupné weby</strong><br/>
                  <span className="text-sm text-gray-400">
                    Sémantické HTML, alternativní texty obrázků, dobré nadpisy - to jsou faktory SEO. 
                    Přístupný web = lepší ranking.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-800/50 rounded-lg p-6 my-8">
              <p className="text-lg text-gray-200">
                💡 <strong>Reálný příklad:</strong> E-shop s elektronikou zlepšil přístupnost 
                (lepší kontrasty, větší tlačítka, popisky formulářů). Během 3 měsíců:
                <br/>• Konverze +1,2 procentního bodu (2,8% → 4,0%)
                <br/>• Snížení opuštěných košíků o 18%
                <br/>• Počet stížností na "nefungující" web -85%
                <br/><strong>ROI:</strong> Investice 45 000 Kč se vrátila za 6 týdnů.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Kdo vlastně potřebuje přístupný web?</h2>

            <p className="text-gray-300 mb-6">
              Mnohem víc lidí, než si myslíte:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <ul className="space-y-4 text-gray-300">
                <li>
                  <strong className="text-blue-400">Starší lidé (65+)</strong><br/>
                  <span className="text-sm text-gray-400">
                    Horší zrak, třesoucí se ruce, pomalejší reakce. Malá tlačítka? Špatný kontrast? 
                    Pro ně nepoužitelné. A přitom mají čas a peníze nakupovat online.
                  </span>
                </li>
                <li>
                  <strong className="text-emerald-400">Lidé s dočasným omezením</strong><br/>
                  <span className="text-sm text-gray-400">
                    Zlomená ruka = ovládání jednou rukou. Oční operace = špatný zrak na týden. 
                    Hlučné prostředí = nemůžete poslouchat video. To může být každý z nás.
                  </span>
                </li>
                <li>
                  <strong className="text-violet-400">Mobilní uživatelé</strong><br/>
                  <span className="text-sm text-gray-400">
                    Malá obrazovka, pomalé připojení, ovládání palcem. Přístupný web je často 
                    i mobile-friendly web. 60-70% návštěvníků je na mobilu!
                  </span>
                </li>
                <li>
                  <strong className="text-orange-400">Lidé ve stresových situacích</strong><br/>
                  <span className="text-sm text-gray-400">
                    Rezervace lékařské konzultace, placení faktury s blížícím se termínem, 
                    nákup dárku na poslední chvíli. Ve stresu potřebujete jasné, jednoduché rozhraní.
                  </span>
                </li>
                <li>
                  <strong className="text-cyan-400">Nezkušení uživatelé</strong><br/>
                  <span className="text-sm text-gray-400">
                    Ne každý je technicky zdatný. Jasné popisky, viditelná tlačítka, logická navigace - 
                    to pomáhá všem, nejen lidem s omezeními.
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Co konkrétně dělám pro přístupnost?</h2>

            <p className="text-gray-300 mb-6">
              Přístupnost není všechno nebo nic. Jsou quick wins, které pomůžou 90% problémů:
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">1. Barevné kontrasty</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-200 mb-4"><strong>Problém:</strong></p>
              <p className="text-gray-300 mb-4">
                Vidíte to často: Světle šedý text na bílém pozadí. Pro mladého člověka s dobrým zrakem 
                to možná jde přečíst. Pro seniora, člověka s barvoslepostí nebo někoho na mobilu 
                na slunci? Neviditelné.
              </p>
              <p className="text-gray-200 mb-4"><strong>Řešení:</strong></p>
              <ul className="space-y-2 text-gray-300">
                <li>✅ Kontrast minimálně 4.5:1 pro běžný text</li>
                <li>✅ Kontrast minimálně 3:1 pro velký text a tlačítka</li>
                <li>✅ Používám nástroje jako Contrast Checker</li>
                <li>✅ Nespoléhám jen na barvu (červená = chyba → ikona + barva)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-emerald-400">2. Velikost klikacích prvků</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-200 mb-4"><strong>Problém:</strong></p>
              <p className="text-gray-300 mb-4">
                Tlačítko 20×20 pixelů na mobilu? Senioři s třesoucími se rukama to netrefí. 
                Ani vy po dvou pivech.
              </p>
              <p className="text-gray-200 mb-4"><strong>Řešení:</strong></p>
              <ul className="space-y-2 text-gray-300">
                <li>✅ Minimální velikost tlačítek: 44×44 pixelů (Apple doporučení)</li>
                <li>✅ Dostatek mezery mezi klikacími prvky (aby se netrefili vedle)</li>
                <li>✅ Větší tlačítka pro důležité akce (Koupit, Odeslat objednávku)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-violet-400">3. Jasné popisky formulářů</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-200 mb-4"><strong>Problém:</strong></p>
              <p className="text-gray-300 mb-4">
                Formulář bez popisků ("Email" jako placeholder text). Jakmile začnete psát, 
                nevíte co máte vyplnit. Screen reader to neumí přečíst vůbec.
              </p>
              <p className="text-gray-200 mb-4"><strong>Řešení:</strong></p>
              <ul className="space-y-2 text-gray-300">
                <li>✅ Každé pole má viditelný popisek (label)</li>
                <li>✅ Chybové hlášky jsou jasné ("Email není validní" ne jen "Chyba")</li>
                <li>✅ Povinná pole jsou označená (nejen hvězdičkou)</li>
                <li>✅ Pomoc je tam, kde ji potřebujete (tooltip u složitých polí)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-orange-400">4. Navigace klávesnicí</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-200 mb-4"><strong>Problém:</strong></p>
              <p className="text-gray-300 mb-4">
                Mnoho webů jde použít jen myší. Zkuste svůj web použít jen klávesnicí (Tab, Enter, šipky). 
                Nefunguje? Problém.
              </p>
              <p className="text-gray-200 mb-4"><strong>Řešení:</strong></p>
              <ul className="space-y-2 text-gray-300">
                <li>✅ Všechny interaktivní prvky jdou ovládat klávesnicí</li>
                <li>✅ Viditelný focus indikátor (víte kde jste)</li>
                <li>✅ Logické pořadí Tab navigace</li>
                <li>✅ Skip links (přeskočit na hlavní obsah)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-cyan-400">5. Alternativní texty obrázků</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-200 mb-4"><strong>Problém:</strong></p>
              <p className="text-gray-300 mb-4">
                Obrázek produktu bez popisu. Screen reader přečte "IMG_4738.webp". Ne moc užitečné.
              </p>
              <p className="text-gray-200 mb-4"><strong>Řešení:</strong></p>
              <ul className="space-y-2 text-gray-300">
                <li>✅ Každý obrázek má popisný alt text</li>
                <li>✅ Popisuji co je na obrázku, ne "obrázek produktu"</li>
                <li>✅ Dekorativní obrázky mají prázdný alt (alt="")</li>
                <li>✅ Bonus: Pomáhá to SEO (Google čte alt texty)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-800/50 rounded-lg p-6 my-8">
              <p className="text-lg text-gray-200">
                🎯 <strong>Quick test:</strong> Zkuste svůj web těmito způsoby:
                <br/>1. Zmenšete písmo na minimum (Ctrl + kolečko myši) - jde to přečíst?
                <br/>2. Použijte jen klávesnici - jde to ovládat?
                <br/>3. Přepněte do šedé škály - je info viditelná bez barev?
                <br/>4. Zapněte screen reader - dává to smysl?
                <br/>Pokud ne - máte problém.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Právní stránka věci</h2>

            <p className="text-gray-300 mb-6">
              V EU máme zákon o přístupnosti (European Accessibility Act). Od června 2025 musí být 
              přístupné:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>E-shopy</li>
              <li>Bankovní služby online</li>
              <li>E-knihy</li>
              <li>Veřejné služby</li>
            </ul>

            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-800/50 rounded-lg p-6 my-8">
              <p className="text-lg text-gray-200">
                ⚖️ <strong>Sankce:</strong> Pokud váš web není přístupný a spadá pod zákon, můžete dostat 
                pokutu až 10 milionů Kč. Ale i kdybyste nedostali pokutu - proč ignorovat 15% potenciálních 
                zákazníků?
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Kolik stojí přístupnost?</h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <ul className="space-y-4 text-gray-300">
                <li>
                  <strong className="text-emerald-400">Nový web s přístupností od začátku: +0 Kč</strong><br/>
                  <span className="text-sm text-gray-400">
                    Když stavím web správně od začátku, přístupnost je zabudovaná. Žádné extra náklady.
                  </span>
                </li>
                <li>
                  <strong className="text-blue-400">Audit přístupnosti: 8 000 - 15 000 Kč</strong><br/>
                  <span className="text-sm text-gray-400">
                    Projdu web, najdu problémy, prioritizuji je. Dostanete seznam co opravit.
                  </span>
                </li>
                <li>
                  <strong className="text-violet-400">Úprava existujícího webu: 20 000 - 60 000 Kč</strong><br/>
                  <span className="text-sm text-gray-400">
                    Záleží na rozsahu problémů. Quick wins (kontrasty, velikosti tlačítek) = 20-30k. 
                    Kompletní refactoring = 40-60k.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border border-emerald-800/50 rounded-lg p-6 my-8">
              <p className="text-lg text-gray-200">
                💰 <strong>ROI:</strong> E-shop s obratem 5 mil/rok zlepší konverze o 1% díky přístupnosti 
                = +50 000 Kč ročně. Investice 30 000 Kč se vrátí za 7 měsíců. A to nepočítám lepší SEO, 
                spokojenější zákazníky a vyhnutí se pokutám.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Závěr: Přístupnost je win-win</h2>

            <p className="text-gray-300 mb-6">
              Za roky práce jsem nikdy neviděl projekt, kde by zlepšení přístupnosti ublížilo. Vždy:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Zlepšilo UX pro VŠECHNY uživatele</li>
              <li>Zvýšilo konverze</li>
              <li>Snížilo počet stížností a supportu</li>
              <li>Zlepšilo SEO</li>
              <li>Otevřelo dveře novým zákazníkům</li>
            </ul>

            <p className="text-gray-300 mb-6">
              <strong>Moje rada:</strong> Nedělejte přístupnost jako "extra" na konci. Stavějte ji 
              od začátku. Je to jako bezpečnostní pásy v autě - dnes by vás nenapadlo je vynechat. 
              Stejně tak přístupnost.
            </p>

            <div className="bg-gradient-to-r from-blue-900/20 to-violet-900/20 border border-blue-700/50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4 text-white">Chcete přístupný web, který nikoho nevylučuje?</h3>
              <p className="text-lg text-gray-200 mb-6">
                Nabízím:
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>✓ Audit přístupnosti vašeho webu (WCAG 2.1 AA standard)</li>
                <li>✓ Prioritizovaný seznam problémů (co řešit první)</li>
                <li>✓ Odhad nákladů na úpravu</li>
                <li>✓ Nebo nový web s přístupností zabudovanou od začátku</li>
              </ul>
              <p className="text-gray-300 mb-6">
                Každý web, který tvořím, testuju na přístupnost. Používám automatické nástroje 
                (axe, Lighthouse) i manuální testování (klávesnice, screen reader, kontrast checker). 
                Přístupnost není bonus - je standard.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/webovy-vyvojar/kontakt"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Audit přístupnosti zdarma
                  <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                </Link>
                <Link 
                  href="/webovy-vyvojar/projekty"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Přístupné weby v portfoliu
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
                href="/webovy-vyvojar/blog/react-nextjs"
                className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-xl font-semibold mb-2">Moderní web, který s vámi poroste</h4>
                <p className="text-gray-400 text-sm">Proč technologie rozhoduje o budoucnosti.</p>
              </Link>
            </div>
          </div>
        </motion.article>
      </main>

      <WebDevFooter />
    </div>
  )
}
