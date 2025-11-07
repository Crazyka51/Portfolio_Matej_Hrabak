"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function TypeScriptTips() {
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
            <span>20. 3. 2025</span>
            <span className="mx-3">•</span>
            <Clock className="mr-2 h-4 w-4" />
            <span>10 min čtení</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            TypeScript: Tipy pro efektivnější typování
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Pokročilé techniky typování v TypeScriptu, které vám pomohou psát bezpečnější a čitelnější kód.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Development</span>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[400px] mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl font-bold mb-4">TS</div>
              <div className="text-2xl text-gray-200">TypeScript Tips & Tricks</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <p className="text-gray-300 leading-relaxed mb-6">
            TypeScript je jako asistent, který vás hlídá při psaní kódu. Místo aby vás  program překvapil chybou až u zákazníka, TypeScript vám řekne "Pozor, tady máš chybu!" ještě než kód spustíte. Podívejme se, jak ho využít naplno.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Co je TypeScript a proč ho používat?</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            JavaScript je jako psaní dopisu bez kontroly pravopisu - napíšete ho rychle, ale můžete udělat překlepy. TypeScript je ta kontrola pravopisu, která vás upozorní na chyby ještě před odesláním.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Praktický příklad:</h3>
            <p className="text-gray-300 mb-3">
              <strong>JavaScript (bez TypeScript):</strong>
            </p>
            <p className="text-gray-400 mb-3 font-mono text-sm">
              let cena = "1000"<br/>
              let sleva = cena * 0.1  // Problém! "1000" je text, ne číslo
            </p>
            <p className="text-gray-300 mb-3">
              <strong>TypeScript vás varuje:</strong>
            </p>
            <p className="text-red-400 font-mono text-sm">
              ❌ Error: Nelze násobit text číslem
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">1. Interface vs Type - Kdy použít co?</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Interface a Type jsou jako dva způsoby, jak popsat tvar objektu. Je to jako když říkáte "Chci auto" vs "Chci červené auto se 4 dveřmi a dieselovým motorem".
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Kdy použít Interface:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Pro popis objektů (uživatel, produkt, objednávka)</li>
              <li>Když potřebujete rozšířit existující typy</li>
              <li>Pro React komponenty</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Kdy použít Type:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Pro kombinace typů ("admin" nebo "user")</li>
              <li>Pro složitější logiku typování</li>
              <li>Pro utility types</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">2. Union Types - Více možností</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Union type říká: "Tady může být A nebo B nebo C". Jako když objednáváte pizzu a můžete si vybrat z několika druhů.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Praktický příklad - Stav objednávky:</h3>
            <p className="text-gray-400 mb-3 font-mono text-sm">
              type StavObjednavky = "nova" | "zpracovava_se" | "odeslana" | "dorucena"
            </p>
            <p className="text-gray-300 mt-3">
              TypeScript teď hlídá, že můžete použít jen tyto 4 stavy. Nemůžete omylem napsat "odeslaná" s háčkem nebo "delivered" anglicky.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">3. Generics - Univerzální typy</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Generics jsou jako šablona na výrobu krabiček. Můžete mít krabičku na boty, na oblečení, na hračky - stejný tvar, jiný obsah.
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Reálný příklad:</h3>
            <p className="text-gray-300 mb-3">
              Máte funkci pro načítání dat z API. Někdy načítáte produkty, jindy uživatele, jindy objednávky. Generics vám umožní použít stejnou funkci pro všechno:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>načtiData&lt;Produkt&gt;() - vrátí produkty</li>
              <li>načtiData&lt;Uživatel&gt;() - vrátí uživatele</li>
              <li>načtiData&lt;Objednávka&gt;() - vrátí objednávky</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">4. Optional Chaining - Bezpečné čtení dat</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Optional chaining (?.je jako "jemné" otevírání dveří. Místo aby jste do nich vrazili, nejdřív zkontrolujete, jestli tam vůbec jsou.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Praktický příklad:</h3>
            <p className="text-gray-300 mb-3">
              <strong>Bez optional chaining (nebezpečné):</strong>
            </p>
            <p className="text-gray-400 mb-3 font-mono text-sm">
              const mesto = uzivatel.adresa.mesto  // ❌ Pokud adresa neexistuje = chyba!
            </p>
            <p className="text-gray-300 mb-3">
              <strong>S optional chaining (bezpečné):</strong>
            </p>
            <p className="text-gray-400 font-mono text-sm">
              const mesto = uzivatel?.adresa?.mesto  // ✓ Pokud neexistuje = undefined, žádná chyba
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">5. Readonly - Ochrana dat</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Readonly je jako uzamčení trezoru. Data můžete číst, ale nemůžete je měnit. Užitečné pro konfiguraci, ceny, konstanty.
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Praktické využití:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Konfigurace:</strong> API klíče, URL endpointy (neměly by se měnit)</li>
              <li><strong>Produkty:</strong> Po načtení z databáze by se neměly měnit</li>
              <li><strong>Historie:</strong> Logy, historie objednávek (neměnné záznamy)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">6. Type Guards - Kontrola typů</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Type guards jsou jako bezpečnostní kontrola na letišti. Zkontrolujete, co to je, než s tím začnete pracovat.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Praktický příklad:</h3>
            <p className="text-gray-300 mb-3">
              Máte funkci, která může vrátit buď uživatele nebo chybu. Než začnete pracovat s uživatelem, zkontrolujete, jestli to opravdu je uživatel:
            </p>
            <p className="text-gray-400 font-mono text-sm mb-2">
              if ("email" in vysledek) {'{'}<br/>
              &nbsp;&nbsp;// Je to uživatel, má email<br/>
              {'}'} else {'{'}<br/>
              &nbsp;&nbsp;// Je to chyba<br/>
              {'}'}
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">7. Utility Types - Hotové šablony</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            TypeScript má předpřipravené utility types - jako šablony v Wordu. Nemusíte všechno psát od nuly.
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Nejužitečnější utility types:</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong>Partial:</strong> Udělá všechny vlastnosti volitelné<br/>
                <span className="text-sm text-gray-400">Užitečné pro formuláře - nemusíte vyplnit všechno najednou</span>
              </li>
              <li>
                <strong>Required:</strong> Udělá všechny vlastnosti povinné<br/>
                <span className="text-sm text-gray-400">Užitečné pro validaci - před odesláním musí být vše vyplněné</span>
              </li>
              <li>
                <strong>Pick:</strong> Vybere jen některé vlastnosti<br/>
                <span className="text-sm text-gray-400">Užitečné pro API - posíláte jen část dat</span>
              </li>
              <li>
                <strong>Omit:</strong> Odstráním některé vlastnosti<br/>
                <span className="text-sm text-gray-400">Užitečné pro odstranění citlivých dat (hesla, tokeny)</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">8. Never Type - "Tohle se nikdy nestane"</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Never type říká: "Tato funkce nikdy neskončí normálně". Užitečné pro funkce, které vždy vyhodí chybu nebo běží donekonečna.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Praktický příklad:</h3>
            <p className="text-gray-300 mb-3">
              Funkce pro zpracování chyby, která vždy vyhodí exception:
            </p>
            <p className="text-gray-400 font-mono text-sm">
              function vyhodChybu(zprava: string): never {'{'}<br/>
              &nbsp;&nbsp;throw new Error(zprava)<br/>
              {'}'}
            </p>
            <p className="text-gray-300 mt-3 text-sm">
              TypeScript teď ví, že po této funkci žádný další kód neběží.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Praktické tipy pro začátečníky</h2>
          
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Začněte jednoduše:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✓ Začněte typováním proměnných (string, number, boolean)</li>
              <li>✓ Pak typujte parametry funkcí</li>
              <li>✓ Nakonec návratové hodnoty funkcí</li>
              <li>✓ Nepoužívejte "any" - to je jako vypnout TypeScript</li>
              <li>✓ Nechte TypeScript odvodit typy, kde to jde</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Časté chyby a jak se jich vyvarovat</h2>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <ul className="space-y-4 text-gray-300">
              <li>
                <strong className="text-red-400">❌ Příliš složité typy:</strong><br/>
                <span className="text-sm">Začátečníci často vytvářejí zbytečně složité typy. Začněte jednoduše.</span>
              </li>
              <li>
                <strong className="text-red-400">❌ Používání "any" všude:</strong><br/>
                <span className="text-sm">"any" vypíná TypeScript. Používejte jen když opravdu nevíte typ.</span>
              </li>
              <li>
                <strong className="text-red-400">❌ Ignorování chyb:</strong><br/>
                <span className="text-sm">Pokud TypeScript hlásí chybu, něco je špatně. Neignorujte to.</span>
              </li>
              <li>
                <strong className="text-green-400">✓ Správný přístup:</strong><br/>
                <span className="text-sm">Typujte postupně, začněte jednoduchými typy, složité přidávejte podle potřeby.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Závěr</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            TypeScript není nepřítel, ale pomocník. Ano, na začátku vás může brzdit, ale časem oceníte, že vám zachrání hodiny debugování. Je to investice, která se vrátí.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Začněte jednoduše, typujte postupně a nechte TypeScript, aby vám pomohl psát lepší kód. Časem to půjde automaticky a nebudete si umět představit vývoj bez něj.
          </p>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Potřebujete pomoc s TypeScriptem?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pomohu vám s migrací JavaScript projektu na TypeScript nebo vás naučím efektivně typovat. Code review, konzultace a praktické tipy přímo na vašem projektu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/webovy-vyvojar/kontakt"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Konzultace TypeScript
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
              <Link
                href="/webovy-vyvojar/projekty"
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                TypeScript projekty
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
