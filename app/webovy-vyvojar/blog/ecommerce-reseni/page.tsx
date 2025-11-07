"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function EcommerceArticle() {
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
              <span className="bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full text-sm">E-commerce</span>
              <span className="bg-violet-900/50 text-violet-300 px-3 py-1 rounded-full text-sm">Payments</span>
              <span className="bg-amber-900/50 text-amber-300 px-3 py-1 rounded-full text-sm">Business</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Jak vytvářím e-shopy: Můj přístup k úspěšnému online obchodu
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>9. listopadu 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>15 min čtení</span>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder.svg"
                alt="E-commerce Development"
                fill
                className="object-cover"
              />
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
             Navrhuji a realizuji plně funkční e-shopy – od kompaktních rodinných řešení po rozsáhlé projekty s komplexní strukturou. Každý projekt přinesl nové výzvy a zkušenosti, díky nimž jsem si osvojil osvědčené principy, které skutečně fungují. Pojďme se podívat, jak k tvorbě e-shopů přistupuji a na čem podle mě záleží nejvíc.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">1. Začínám vždy konzultací: Co vlastně potřebujete?</h2>

            <p className="text-gray-300 mb-6">
              První schůzka je nejdůležitější. Neptám se "Chcete e-shop?", ale "Co chcete prodávat a komu?". 
              Rozdíl je zásadní. E-shop na ručně vyráběné šperky potřebuje něco úplně jiného než velkoobchod 
              s autodíly.
            </p>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold mb-3">Otázky, které vždy položím:</h4>
              <ul className="space-y-2 text-gray-300">
                <li>📦 <strong>Kolik produktů?</strong> 50 nebo 5000? Mění to přístup k databázi a vyhledávání</li>
                <li>👥 <strong>Jaká je cílová skupina?</strong> Mladí techies nebo starší generace? Design se musí přizpůsobit</li>
                <li>💰 <strong>Jaký rozpočet?</strong> Někdy stačí hotové řešení, jindy musím stavět na míru</li>
                <li>🚚 <strong>Jak expedujete?</strong> Česká pošta, Zásilkovna, vlastní rozvoz? Každé má jinou integraci</li>
                <li>📊 <strong>Potřebujete propojení se skladem?</strong> Tohle ovlivní 50% architektury</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">2. Volba technologie: Nejsem dogmatik</h2>

            <p className="text-gray-300 mb-6">
              Nemám jednu "oblíbenou" platformu. Pro každý projekt vybírám to nejlepší řešení. 
              Je to jako s nářadím - kladivem vrtačku nenahradíte.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-emerald-400">Pro menší projekty (do 500 produktů)</h3>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-300 mb-4">
                <strong>Když použiju hotové řešení:</strong>
              </p>
              <p className="text-gray-300 mb-3">
                Pro začínající obchod, který potřebuje být online co nejrychleji a nemá speciální požadavky, 
                doporučuji cloudovou platformu. Klient má e-shop za týden, platby fungují okamžitě, doprava taky.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>✓ Spuštění do 2 týdnů</li>
                <li>✓ Náklady: 30 000 - 80 000 Kč (design + nastavení)</li>
                <li>✓ Provoz: 800-2000 Kč/měsíc</li>
                <li>❌ Omezení: Závislost na platformě, design z šablon</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-emerald-400">Pro střední projekty (500-5000 produktů)</h3>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-300 mb-4">
                <strong>Moje volba: Vlastní řešení s moderními technologiemi</strong>
              </p>
              <p className="text-gray-300 mb-3">
                Tady stavím na míru. Používám Next.js, React a moderní databáze. Klient dostane přesně to, co potřebuje.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>✓ 100% kontrola nad designem i funkcemi</li>
                <li>✓ Výkon optimalizovaný na váš obchod</li>
                <li>✓ Snadné přidání speciálních funkcí (konfigurátor, B2B sekce...)</li>
                <li>✓ Vlastníte kompletní kód a data</li>
                <li>❌ Vyšší počáteční investice: 150 000 - 400 000 Kč</li>
                <li>❌ Delší vývoj: 2-3 měsíce</li>
              </ul>
              
              <p className="text-sm text-blue-400">
                💡 Nejčastěji volba pro obchody, které chtějí růst a potřebují flexibilitu
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">3. Produktový katalog: Základ je dobrá struktura</h2>

            <p className="text-gray-300 mb-6">
              Jednou jsem přebíral e-shop, který měl produkty chaoticky uložené. Výsledek? Zákazník hledal 
              "modré tričko velikost L" a dostal i červené velikost S. Databáze je jako knihovna - když nemáte 
              systém, najít co hledáte je loterie.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">Jak strukturuji produkty</h3>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-300 mb-4">
                <strong>Každý produkt musí mít:</strong>
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">📷 Kvalitní fotografie (minimálně 4-6)</strong><br/>
                  <span className="text-sm text-gray-400">
                    Učím klienty: "Zákazník nemůže sáhnout na produkt. Fotky jsou všechno." Doporučuji profesionální 
                    foťáka nebo alespoň dobré světlo. Rozmazaná fotka z mobilu = ztracený prodej.
                  </span>
                </li>
                <li>
                  <strong className="text-white">📝 Popis co prodává, ne popisuje</strong><br/>
                  <span className="text-sm text-gray-400">
                    Špatně: "Tričko 100% bavlna, gramáž 180g"<br/>
                    Dobře: "Bavlněné tričko, které vás nenechá zpocené ani v srpnovém vedru. Střih, který sedne 
                    každému - ověřeno na 200+ zákaznících."
                  </span>
                </li>
                <li>
                  <strong className="text-white">🏷️ SKU kód a správné varianty</strong><br/>
                  <span className="text-sm text-gray-400">
                    Tričko červené M = jiné SKU než tričko modré M. Jinak se vám sklady pomíchají a expedujete 
                    špatně. Už jsem to viděl mockrát.
                  </span>
                </li>
                <li>
                  <strong className="text-white">⭐ Prostor pro recenze</strong><br/>
                  <span className="text-sm text-gray-400">
                    Produkt bez recenzí prodává o 30-40% hůř. Vždy implementuji systém hodnocení a aktivně 
                    prosím zákazníky o feedback (mailem týden po dodání).
                  </span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">Varianty produktů - častá bolest</h3>
            
            <p className="text-gray-300 mb-4">
              Tričko má 4 velikosti × 5 barev = 20 kombinací. E-shop musí vědět, které jsou skladem. Zdá se to 
              jednoduché, ale viděl jsem desítky obchodů, kde tohle nefungovalo.
            </p>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
              <p className="text-gray-300 mb-3">
                <strong>Moje řešení:</strong> Každá kombinace = vlastní záznam ve skladu. Když zákazník vybere 
                "modrá + L", e-shop okamžitě ví, jestli je skladem. Žádné "omlouváme se, tato kombinace není dostupná" 
                až u pokladny.
              </p>
              <p className="text-sm text-gray-400">
                Navíc: Šedě zobrazím vyprodané varianty, aby zákazník viděl "taky máme červenou, ale je vyprodaná" - 
                často počká než si koupí jinde.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">4. Nákupní košík: Kde se rozhoduje o prodeji</h2>

            <p className="text-gray-300 mb-6">
              Statistiky říkají, že 70% košíků se opustí. SEDMDESÁT PROCENT! To je jak kdybyste měli obchod, 
              kde 7 z 10 zákazníků odejde s plným košíkem u pokladny. Tak proč to děláme online?
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <h4 className="text-lg font-semibold mb-3">Jak snižuji opuštěné košíky:</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">💾 Košík musí přežít vše</strong><br/>
                  <span className="text-sm text-gray-400">
                    Zákazník zavře prohlížeč? Košík čeká. Vypne počítač? Košík čeká. Otevře web na mobilu? 
                    Košík tam je! Ukládám to do prohlížeče (localStorage) + do účtu pokud je přihlášený.
                  </span>
                </li>
                <li>
                  <strong className="text-white">⚡ Být bleskový</strong><br/>
                  <span className="text-sm text-gray-400">
                    Kliknutí na "Přidat do košíku" = okamžitá reakce. Žádné načítání. Animace + číslo v košíku 
                    se změní za 0.2 sekundy. Zákazník musí cítit, že to funguje.
                  </span>
                </li>
                <li>
                  <strong className="text-white">� Upozornit na doprav zdarma</strong><br/>
                  <span className="text-sm text-gray-400">
                    "Přidej ještě za 120 Kč a máš dopravu zdarma!" - Zvyšuje průměrnou objednávku o 15-20%. 
                    Vždy to implementuji.
                  </span>
                </li>
                <li>
                  <strong className="text-white">� Email na opuštěný košík</strong><br/>
                  <span className="text-sm text-gray-400">
                    24 hodin po opuštění: "Zapomněli jste něco v košíku? Tady je 5% sleva když dokončíte nákup dnes." 
                    Zachrání 10-15% ztracených objednávek.
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">5. Platby: Nikdy nestavím vlastní platební systém</h2>

            <p className="text-gray-300 mb-6">
              První dotaz klientů: "Můžeme si udělat platby sami?" Odpověď: "NE!" Viděl jsem pokusy a vždycky to 
              dopadlo špatně. Banky vyžadují certifikace, bezpečnost je noční můra, zodpovědnost obrovská.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-violet-400">Moje oblíbené platební brány</h3>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <p className="text-gray-300 mb-4">
                <strong>Pro české e-shopy nejčastěji používám:</strong>
              </p>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <strong className="text-white">GoPay nebo ComGate</strong><br/>
                  <span className="text-sm text-gray-400">
                    České brány, skvělá podpora v češtině, znají lokální specifika. Platba kartou, převodem, 
                    Google Pay, Apple Pay - všechno hned. Poplatek cca 2% z tržby. Instalace za odpoledne.
                  </span>
                </li>
                <li>
                  <strong className="text-white">Stripe (pro mezinárodní obchody)</strong><br/>
                  <span className="text-sm text-gray-400">
                    Nejlepší developer experience. Pokud prodáváte do zahraničí, nemá konkurenci. 
                    Miluji jejich dokumentaci - implementace za pár hodin.
                  </span>
                </li>
              </ul>
              
              <p className="text-gray-300 mt-6 mb-3">
                <strong>Jaké platební metody vždycky nabízím:</strong>
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✓ Platba kartou (nejpoužívanější - 60% zákazníků)</li>
                <li>✓ Rychlý bankovní převod přes bránu (15% zákazníků)</li>
                <li>✓ Google Pay / Apple Pay (mladší generace to miluje)</li>
                <li>✓ Dobírka - bohužel nutnost v ČR (20% zákazníků ji chce)</li>
                <li>✓ Klasický bankovní převod (pro B2B a starší zákazníky)</li>
              </ul>
            </div>

            <div className="bg-emerald-900/20 border border-emerald-800/50 rounded-lg p-6 mb-6">
              <p className="text-lg text-gray-200">
                💡 <strong>Tip z praxe:</strong> Dobírka stojí peníze! 20-30% balíků se vrátí (zákazník není doma, 
                rozmyslí si to...). Vždy účtuji příplatek 50 Kč za dobírku. Klienti to chápou a mnozí raději 
                zaplatí kartou.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">6. Automatizace: Ať e-shop pracuje i když spíte</h2>

            <p className="text-gray-300 mb-6">
              Nejlepší e-shopy jsou ty, které nevyžadují neustálou péči. Zákazník objedná v 2 ráno? 
              E-shop vše zařídí sám. Tohle nastavuji u každého projektu.
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <h4 className="text-lg font-semibold mb-4">Co automatizuji vždy:</h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">Potvrzení objednávky (okamžitě)</strong><br/>
                  <span className="text-sm text-gray-400">
                    Za 30 sekund po objednání dostane zákazník email: "Přijali jsme vaši objednávku #12345, 
                    zabalíme a odešleme do 24 hodin." + PDF faktury. Automaticky.
                  </span>
                </li>
                <li>
                  <strong className="text-white">Snížení stavu skladu</strong><br/>
                  <span className="text-sm text-gray-400">
                    Jakmile zákazník zaplatí, e-shop automaticky sníží počet kusů. Žádné přeprodání!
                  </span>
                </li>
                <li>
                  <strong className="text-white">Informace o odeslání</strong><br/>
                  <span className="text-sm text-gray-400">
                    Když klient označí "odesláno" a zadá tracking číslo, e-shop pošle email zákazníkovi: 
                    "Balík je na cestě! Sledovat: [odkaz]"
                  </span>
                </li>
                <li>
                  <strong className="text-white">Prosba o recenzi (7 dní po doručení)</strong><br/>
                  <span className="text-sm text-gray-400">
                    "Jste spokojení? Napište recenzi a získejte 10% slevu na příští nákup!" Recenze zvýší 
                    prodeje o 30-40%!
                  </span>
                </li>
                <li>
                  <strong className="text-white">Email na opuštěný košík (24 hodin)</strong><br/>
                  <span className="text-sm text-gray-400">
                    "Zapomněli jste něco v košíku?" + 5-10% sleva. Zachrání 10-15% ztracených objednávek.
                  </span>
                </li>
              </ol>
            </div>

            <p className="text-sm text-blue-400 mb-6">
              💡 <strong>Realita:</strong> Tyto automatické emaily generují 15-20% všech prodejů! Bez nich byste 
              přišli o tisíce korun měsíčně.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">7. Správa skladu: Nedopustím přeprodání</h2>

            <p className="text-gray-300 mb-6">
              Nejhorší co se může stát: Zákazník objedná, zaplatí, a vy zjistíte že zboží není skladem. 
              Viděl jsem obchody, které tohle řešily každý den. Moje e-shopy to MAJĺ vyřešené.
            </p>

            <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 my-6">
              <h4 className="text-lg font-semibold mb-3 text-red-400">Jak zajistím, aby se to nestalo:</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">Rezervace při přidání do košíku</strong><br/>
                  <span className="text-sm text-gray-400">
                    Máte poslední kus? Když ho zákazník přidá do košíku, e-shop ho rezervuje na 15 minut. 
                    Druhý zákazník vidí "Vyprodáno" nebo "V košíku jiného zákazníka".
                  </span>
                </li>
                <li>
                  <strong className="text-white">Okamžité snížení skladu po platbě</strong><br/>
                  <span className="text-sm text-gray-400">
                    Platba proběhla? Stav skladu se sníží automaticky. Nemůže se stát, že prodáte 2× to samé.
                  </span>
                </li>
                <li>
                  <strong className="text-white">Upozornění při nízkém stavu</strong><br/>
                  <span className="text-sm text-gray-400">
                    Zbývají poslední 3 kusy? Email klientovi: "Pozor, produkt XY se vyprodává!" 
                    Stihne objednat dřív než přijde dotaz "kdy bude".
                  </span>
                </li>
                <li>
                  <strong className="text-white">Možnost předobjednávky</strong><br/>
                  <span className="text-sm text-gray-400">
                    Produkt vyprodaný? Nabídněte "Předobjednat - expedice 15.12." Neztrácíte prodej, 
                    jen ho posouváte.
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">8. SEO: Aby vás zákazníci našli na Googlu</h2>

            <p className="text-gray-300 mb-6">
              Nejlepší e-shop je k ničemu, pokud ho nikdo nenajde. 90% zákazníků začíná na Googlu. 
              SEO není "bonus", je to nutnost. A ne, nestačí zaplatit za reklamy - organické výsledky 
              přivedou 70% zákazníků.
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Jak dělám SEO pro e-shopy:</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">📝 Unikátní popisy - VŽDY!</strong><br/>
                  <span className="text-sm text-gray-400">
                    Klient chce zkopírovat popisy od výrobce? Říkám NE. Google to pozná a sesadí vás dolů. 
                    Píšu vlastní texty pro každý produkt. Ano, je to práce, ale funguje to.
                  </span>
                </li>
                <li>
                  <strong className="text-white">📷 Optimalizované obrázky</strong><br/>
                  <span className="text-sm text-gray-400">
                    Každý obrázek přejmenuji: "IMG_1234.webp" → "modre-damske-tricko-bavlna.webp". 
                    Přidám alt text. Google obrázky jsou ZLATÝ důl - přivedou 20-30% návštěvníků!
                  </span>
                </li>
                <li>
                  <strong className="text-white">⚡ Rychlost načítání</strong><br/>
                  <span className="text-sm text-gray-400">
                    Web co se načítá 5 sekund? Google vás sesadí, zákazník odejde. Cíl: pod 2 sekundy. 
                    Optimalizuji obrázky (WebP formát), používám lazy loading, minimalizuji JavaScript.
                  </span>
                </li>
                <li>
                  <strong className="text-white">⭐ Structured data pro hvězdičky</strong><br/>
                  <span className="text-sm text-gray-400">
                    Vidět produkt ve vyhledávání s hvězdičkami ⭐⭐⭐⭐⭐ = +35% kliknutí! Vždycky implementuji 
                    schema.org markup. Google pak zobrazuje hodnocení, cenu, dostupnost.
                  </span>
                </li>
                <li>
                  <strong className="text-white">🔗 Interní odkazy</strong><br/>
                  <span className="text-sm text-gray-400">
                    "Související produkty", "Zákazníci také kupují" - nejenže zvyšuje prodeje, 
                    pomáhá to i Googlu pochopit strukturu obchodu.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-sm text-emerald-400 mb-6">
              ✅ <strong>Výsledek:</strong> Moje e-shopy se obvykle dostanou na první stránku Googlu za 3-6 měsíců. 
              Organická návštěvnost tvoří 60-70% všech zákazníků.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">9. Analytics: Měřím všechno</h2>

            <p className="text-gray-300 mb-6">
              "Jak poznám, že e-shop funguje?" ptají se klienti. Odpověď: Podívejte se na čísla. 
              Bez měření jen hádáte. S čísly víte přesně, co funguje a co ne.
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <h4 className="text-lg font-semibold mb-4">Čísla, která sleduji každý týden:</h4>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <strong className="text-white">📊 Conversion rate (míra konverze)</strong><br/>
                  <span className="text-sm text-gray-400">
                    Ze 100 návštěvníků, kolik nakoupí? Průměr: 1-3%. Pod 1% = problém. Nad 3% = skvělé! 
                    Sleduji to denně a hledám co zlepšit.
                  </span>
                </li>
                <li>
                  <strong className="text-white">💰 Average Order Value (průměrná objednávka)</strong><br/>
                  <span className="text-sm text-gray-400">
                    Kolik průměrně utratí zákazník? Cíl: Zvýšit! Jak? "Doprava zdarma nad 1000 Kč", 
                    "Kup 3, zaplať za 2", doporučené produkty...
                  </span>
                </li>
                <li>
                  <strong className="text-white">🛒 Abandoned carts (opuštěné košíky)</strong><br/>
                  <span className="text-sm text-gray-400">
                    Průměr: 70%! Ano, 7 z 10 lidí přidá do košíku a nekoupí. Cíl: Snížit pod 65%. 
                    Jak? Reminder emaily, zjednodušit checkout, nabídnout více platebních metod.
                  </span>
                </li>
                <li>
                  <strong className="text-white">🔄 Returning customers (vracející se zákazníci)</strong><br/>
                  <span className="text-sm text-gray-400">
                    Kolik % zákazníků se vrátí? Pod 20% = problém s kvalitou/cenou. Nad 40% = skvělé! 
                    Věrní zákazníci jsou 5× levnější než nový.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-gray-300 mb-6">
              Klientům posílám report každý měsíc: "Tento měsíc jste měli 1234 návštěvníků, 45 objednávek (3.6% konverze), 
              průměrná objednávka 1850 Kč, celkový obrat 83 000 Kč." Vidí přesně, jak e-shop funguje.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">10. Bezpečnost: Nešetřím na tom</h2>

            <p className="text-gray-300 mb-6">
              Hacknout e-shop = ztratit všechno. Databázi zákazníků, důvěru, peníze, pověst. Viděl jsem to mockrát. 
              Proto bezpečnost řeším OD ZAČÁTKU, ne až když je problém.
            </p>

            <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 my-6">
              <h4 className="text-xl font-semibold mb-3 text-red-400">Bezpečnostní opatření, která VŽDY implementuji:</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">🔒 HTTPS certifikát</strong><br/>
                  <span className="text-sm text-gray-400">
                    POVINNOST! Bez toho Google označí web "Nezabezpečený" a nikdo u vás nenakoupí. 
                    Let's Encrypt dává certifikáty zdarma, instaluji to automaticky.
                  </span>
                </li>
                <li>
                  <strong className="text-white">💳 NIKDY neukládám čísla karet!</strong><br/>
                  <span className="text-sm text-gray-400">
                    Platební brána (GoPay, Stripe...) to řeší za vás. Kdyby někdo hacknul váš e-shop 
                    a ukradl čísla karet? Pokuta v milionech + žaloby. Není to vaše starost!
                  </span>
                </li>
                <li>
                  <strong className="text-white">🛡️ Ochrana proti útokům</strong><br/>
                  <span className="text-sm text-gray-400">
                    Limit pokusů o přihlášení (3× špatné heslo = 15 min pauza), CAPTCHA na formulářích, 
                    firewall na serveru. Roboti to vzdají.
                  </span>
                </li>
                <li>
                  <strong className="text-white">📋 GDPR compliance</strong><br/>
                  <span className="text-sm text-gray-400">
                    Souhlas se zpracováním údajů, možnost smazání účtu, informace co s daty děláte. 
                    Pokuta za porušení? Až 20 milionů €! Mám připravené šablony, implementuji automaticky.
                  </span>
                </li>
                <li>
                  <strong className="text-white">💾 Automatické zálohy</strong><br/>
                  <span className="text-sm text-gray-400">
                    Každý den automatická záloha databáze + souborů. Server shoří? Za 2 hodiny je e-shop 
                    zpátky. Testuju obnovu každé 3 měsíce - záloha co nejde obnovit je k ničemu!
                  </span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Závěr: Moje filozofie tvorby e-shopů</h2>

            <p className="text-gray-300 mb-6">
              Za roky jsem vytvořil desítky e-shopů a naučil se pár věcí:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-6">
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong>1. Začít jednoduše, pak škálovat</strong><br/>
                  <span className="text-sm text-gray-400">
                    Nejčastější chyba? Chtít všechno hned. E-shop s 50 funkcemi, který nikdy nevyjde. 
                    Radši MVP za měsíc, pak přidávat funkce podle zpětné vazby zákazníků.
                  </span>
                </li>
                <li>
                  <strong>2. Bezpečnost od začátku, ne dodatečně</strong><br/>
                  <span className="text-sm text-gray-400">
                    Dělat bezpečnost "později" = předělávat půlku e-shopu. Dělám to správně od prvního dne.
                  </span>
                </li>
                <li>
                  <strong>3. Nestavět to, co už někdo vyřešil</strong><br/>
                  <span className="text-sm text-gray-400">
                    Platební systém? Použít bránu. Doprava? Integrovat Zásilkovnu. SEO? Structured data. 
                    Zbytečně nevynalézat kolo.
                  </span>
                </li>
                <li>
                  <strong>4. Měřit, učit se, zlepšovat</strong><br/>
                  <span className="text-sm text-gray-400">
                    E-shop není "hotový" nikdy. Je to živý organismus. Každý týden se dívám na čísla 
                    a hledám co zlepšit.
                  </span>
                </li>
                <li>
                  <strong>5. Zaměřit se na zákazníka, ne na technologie</strong><br/>
                  <span className="text-sm text-gray-400">
                    Zákazníka nezajímá, jestli používáte React nebo Vue. Zajímá ho: "Rychle jsem našel 
                    co chci? Šlo to snadno zaplatit? Dorazilo to včas?" To je to podstatné.
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-violet-900/20 border border-emerald-800/50 rounded-lg p-6 mt-8 mb-8">
              <p className="text-lg text-gray-200">
                💡 <strong>Zlaté pravidlo:</strong> Nikdy nebudujte vlastní platební systém. Použijte ověřenou 
                platební bránu (Stripe, PayPal, GoPay, ComGate...). Ušetříte 6 měsíců vývoje, získáte zabezpečení 
                zdarma a vyhnete se problémům s bankami. Vlastní řešení má smysl jen pro banky a velké korporace.
              </p>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-violet-900/20 border border-emerald-700/50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4 text-white">Chcete vytvořit e-shop, který prodává?</h3>
              <p className="text-lg text-gray-200 mb-6">
                Pomůžu vám postavit e-shop přesně podle vašich potřeb. Začneme konzultací - zjistím, co přesně 
                potřebujete a navrhnu nejlepší řešení. Ať už je to rychlé řešení za pár týdnů nebo kompletní 
                e-shop na míru, vždy dostanete systém který:
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li>✓ Je zabezpečený od prvního dne (HTTPS, GDPR, automatické zálohy)</li>
                <li>✓ Funguje rychle a spolehlivě (optimalizace výkonu, SEO)</li>
                <li>✓ Nepřeprodá zboží co není skladem (chytrá správa skladu)</li>
                <li>✓ Automatizuje rutinní úkoly (emaily, faktury, tracking)</li>
                <li>✓ Měří úspěšnost a dává vám jasná čísla</li>
              </ul>
              <p className="text-gray-300 mb-6">
                Mám zkušenosti s platebními branami (GoPay, Stripe, ComGate), dopravci (Zásilkovna, PPL, DPD), 
                propojením se skladovými systémy a vším, co moderní e-shop potřebuje.
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
                  Ukázat e-shopy v portfoliu
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
                href="/webovy-vyvojar/blog/backend-development"
                className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-xl font-semibold mb-2">Backend Development</h4>
                <p className="text-gray-400 text-sm">Kompletní průvodce backend technologiemi a architekturou.</p>
              </Link>
              <Link
                href="/webovy-vyvojar/blog/optimalizace-vykonu"
                className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-xl font-semibold mb-2">Optimalizace výkonu</h4>
                <p className="text-gray-400 text-sm">Jak zajistit rychlý e-commerce pro maximální konverze.</p>
              </Link>
            </div>
          </div>
        </motion.article>
      </main>

      <WebDevFooter />
    </div>
  )
}
