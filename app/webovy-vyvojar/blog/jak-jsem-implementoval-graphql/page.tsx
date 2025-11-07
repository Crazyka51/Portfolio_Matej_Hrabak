"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function GraphQLImplementation() {
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
            <span>18. 2. 2025</span>
            <span className="mx-3">•</span>
            <Clock className="mr-2 h-4 w-4" />
            <span>12 min čtení</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Jak jsem implementoval GraphQL do existující aplikace
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Praktický průvodce implementací GraphQL do existující REST API aplikace a výhody, které to přineslo.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">GraphQL</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">API</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Backend</span>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[400px] mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl font-bold mb-4">GraphQL</div>
              <div className="text-2xl text-gray-200">Query Language for APIs</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <h2 className="text-3xl font-bold mt-12 mb-6">Problém s REST API</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Představte si, že jdete do restaurace a objednáte si "menu 1". Dostanete polévku, hlavní jídlo, 
            dezert, nápoj - všechno najednou, i když jste měli hlad jen na hlavní jídlo. S REST API je to stejné.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Typický problém s REST:</h3>
            <p className="text-gray-300 mb-3">
              Potřebujete zobrazit jméno uživatele a počet jeho objednávek:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>GET /api/users/123 → dostanete 50 vlastností (email, adresa, telefon...), potřebujete jen jméno</li>
              <li>GET /api/users/123/orders → další request pro objednávky</li>
            </ul>
            <p className="text-red-400 mt-3 text-sm">
              = 2 requesty, stovky nepotřebných dat, pomalá aplikace
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">GraphQL: Objednejte si přesně co chcete</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            GraphQL je jako když v restauraci řeknete: "Dám si jen pečivo a kávu, dezert ne ho." 
            Dostanete přesně to, co jste si objednali. S GraphQL si řeknete, jaká data chcete, 
            a dostanete JEN ta data.
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Stejný případ s GraphQL:</h3>
            <p className="text-gray-300 mb-3">
              Jeden request, přesně ta data co potřebujete:
            </p>
            <p className="text-gray-400 font-mono text-sm mb-2">
              query {'{'}<br/>
              &nbsp;&nbsp;user(id: 123) {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;jmeno<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;pocetObjednavek<br/>
              &nbsp;&nbsp;{'}'}<br/>
              {'}'}
            </p>
            <p className="text-green-400 mt-3 text-sm">
              = 1 request, jen potřebná data, rychlá aplikace
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Proč jsem se rozhodl pro GraphQL</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Měl jsem e-shop s REST API. Mobilní aplikace byla pomalá - načítání produktů trvalo 3-4 sekundy. 
            Proč? Protože:
          </p>

          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Seznam produktů: GET /api/products (vrátil 20 produktů s 30 vlastnostmi každý)</li>
            <li>Pro každý produkt: GET /api/products/ID/reviews (počet recenzí)</li>
            <li>Pro každý produkt: GET /api/products/ID/stock (skladová dostupnost)</li>
          </ul>

          <p className="text-gray-300 leading-relaxed mb-6">
            = 41 HTTP requestů pro zobrazení 20 produktů! 🤦‍♂️
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Implementace krok za krokem</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Krok 1: Nepřepisujte celé API najednou</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Největší chyba by bylo vypnout REST API a přepsat všechno na GraphQL. Místo toho jsem šel postupně:
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Můj postup:</h3>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li>Nechal jsem REST API běžet dál</li>
              <li>Přidal jsem GraphQL server (paralelně s REST)</li>
              <li>GraphQL server používal stejnou databázi a logiku</li>
              <li>Postupně jsem přepisoval frontendy na GraphQL</li>
              <li>Po roce jsem vypnul REST API</li>
            </ol>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Krok 2: Definujte schema</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Schema je jako menu v restauraci - popis všeho, co můžete objednat. U mě to vypadalo takto:
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-400 mb-2">Příklad schema pro produkt:</p>
            <p className="text-gray-400 font-mono text-sm">
              type Produkt {'{'}<br/>
              &nbsp;&nbsp;id: ID!<br/>
              &nbsp;&nbsp;nazev: String!<br/>
              &nbsp;&nbsp;cena: Float!<br/>
              &nbsp;&nbsp;skladem: Boolean!<br/>
              &nbsp;&nbsp;recenze: [Recenze!]!<br/>
              &nbsp;&nbsp;pocetRecenzi: Int!<br/>
              {'}'}
            </p>
            <p className="text-gray-300 mt-3 text-sm">
              = Přesná definice, co produkt obsahuje. TypeScript pro API!
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Krok 3: Vytvořte resolvery</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Resolver je funkce, která řekne "jak načíst tato data". U mě většinou jen zavolala existující 
            REST endpointy nebo databázové query.
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <p className="text-gray-300 mb-3">
              <strong>Důležité:</strong> Nepřepisoval jsem celou business logiku! Resolvery jen volaly 
              existující funkce. Například:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Pro produkty: zavolal jsem ProductService.getAll()</li>
              <li>Pro recenze: zavolal jsem ReviewService.getByProductId()</li>
              <li>Pro skladem: zavolal jsem InventoryService.checkStock()</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Co se zlepšilo</h2>
          
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Měřitelná zlepšení:</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong>⚡ Rychlost:</strong> Načítání produktů z 3.5s na 0.8s (4× rychlejší)<br/>
                <span className="text-sm text-gray-400">41 requestů → 1 request</span>
              </li>
              <li>
                <strong>📱 Mobilní data:</strong> Ušetřeno 70% přenesených dat<br/>
                <span className="text-sm text-gray-400">Mobilní uživatelé s omezeným datovým plánem to ocenili</span>
              </li>
              <li>
                <strong>🎯 Přesnost:</strong> Frontend dostává přesně ta data, co potřebuje<br/>
                <span className="text-sm text-gray-400">Žádné nadbyteční data</span>
              </li>
              <li>
                <strong>🚀 Vývoj:</strong> Nové featury rychleji<br/>
                <span className="text-sm text-gray-400">Frontend vývojáři si sami definují, jaká data potřebují</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Problémy a řešení</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Problém 1: N+1 Query Problem</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Největší překvapení. GraphQL vyřešil problémy s REST, ale přinesl nový - N+1 problém.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Co se dělo:</h3>
            <p className="text-gray-300 mb-3">
              Při načítání 20 produktů s recenzemi:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li>1 query pro načtení 20 produktů</li>
              <li>20 queries pro načtení recenzí každého produktu</li>
            </ol>
            <p className="text-red-400 mt-3 text-sm">
              = 21 databázových dotazů místo 1! Databáze se zadýchala.
            </p>
            <p className="text-green-400 mt-3 text-sm">
              <strong>Řešení:</strong> DataLoader - inteligentní batch načítání. Místo 20 dotazů jeden dotaz 
              pro všechny recenze najednou.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Problém 2: Složité queries mohou zabít server</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            S GraphQL může uživatel (nebo útočník) napsat velmi složitý query, který zatíží server.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Řešení:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Query complexity limit - omezit složitost dotazu</li>
              <li>Depth limit - maximální úroveň vnořování (např. max 5 úrovní)</li>
              <li>Rate limiting - max X dotazů za minutu</li>
              <li>Persisted queries - povolit jen předpřipravené dotazy</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Kdy GraphQL POUŽÍVAT</h2>
          
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong>✓ Mobilní aplikace:</strong> Ušetříte data, zrychlíte načítání
              </li>
              <li>
                <strong>✓ Složitá data:</strong> Produkty s kategoriemi, tagy, recenzemi, variantami...
              </li>
              <li>
                <strong>✓ Více frontendů:</strong> Web, mobil, desktop - každý si bere co potřebuje
              </li>
              <li>
                <strong>✓ Rychlý vývoj:</strong> Frontend nemusí čekat na backend s novým endpointem
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Kdy GraphQL NEPOUŽÍVAT</h2>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong>❌ Jednoduché CRUD API:</strong> Pro jednoduchý blog stačí REST
              </li>
              <li>
                <strong>❌ File upload:</strong> REST je pro upload souborů lepší
              </li>
              <li>
                <strong>❌ Tým GraphQL nezná:</strong> Učící křivka není triviální
              </li>
              <li>
                <strong>❌ Legacy systémy:</strong> Pokud nemůžete změnit backend, REST wrapper může být lepší
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Praktické tipy</h2>
          
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-3">
            <li>
              <strong>Začněte malým:</strong> Jeden use case (třeba produkty), ne celé API najednou
            </li>
            <li>
              <strong>Používejte Apollo Client:</strong> Automatické caching, optimistic updates zadarmo
            </li>
            <li>
              <strong>Dokumentujte schema:</strong> Popisky u každého pole - budoucí vy vám poděkuje
            </li>
            <li>
              <strong>Monitorujte výkon:</strong> Apollo Studio ukazuje pomalé queries
            </li>
            <li>
              <strong>Verzování není nutné:</strong> GraphQL je evolučné - přidávejte pole, nestará odstraňujte
            </li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-6">Závěr</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Migrace na GraphQL mi zabrala 3 měsíce, ale vyplatilo se to. Aplikace je rychlejší, 
            frontend vývojáři spokojenější, mobilní uživatelé ušetří data. Ne každý projekt GraphQL 
            potřebuje, ale když ano, je to game changer.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Klíč k úspěchu? Jít postupně, neuspěchat to a dobře naplánovat. GraphQL není stříbrná kulka, 
            ale pro správný use case je to skvělý nástroj.
          </p>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Uvažujete o GraphQL?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pomohu vám posoudit, zda je GraphQL pro váš projekt vhodný. Návrh architektury, 
              implementace, migrace z REST nebo školení týmu - komplexní služby GraphQL konzultací.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/webovy-vyvojar/kontakt"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                GraphQL konzultace
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
              <Link
                href="/webovy-vyvojar/projekty"
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                GraphQL projekty
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
