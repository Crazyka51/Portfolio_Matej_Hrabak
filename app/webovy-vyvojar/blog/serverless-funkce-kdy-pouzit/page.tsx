"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function ServerlessFunctions() {
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
            <span>3. 2. 2025</span>
            <span className="mx-3">•</span>
            <Clock className="mr-2 h-4 w-4" />
            <span>9 min čtení</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Serverless funkce: Kdy je použít a kdy ne
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Výhody a nevýhody serverless architektury a kdy je vhodné ji použít ve vašich projektech.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Serverless</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Architecture</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Cloud</span>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[400px] mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-orange-500 to-red-600"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold mb-4">λ Serverless</div>
              <div className="text-2xl text-gray-200">Pay Only For What You Use</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <h2 className="text-3xl font-bold mt-12 mb-6">Co je serverless? (Je tam server nebo ne?)</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Název "serverless" je trochu matoucí - servery tam jsou! Jen je nevidíte a nestaráte se o ně. 
            Je to jako Uber - auto tam je, ale nemusíte ho vlastnit, tankovat, servisovat. Prostě si ho 
            zavoláte když potřebujete.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Tradiční server vs Serverless:</h3>
            <p className="text-gray-300 mb-3">
              <strong>Tradiční server:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
              <li>Platíte 24/7, i když nikdo web nepoužívá</li>
              <li>Musíte se starat o updates, bezpečnost, škálování</li>
              <li>Jako vlastnit auto - musíte se o něj starat</li>
            </ul>
            <p className="text-gray-300 mb-3">
              <strong>Serverless:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Platíte jen za čas běhu funkce (milisekundy)</li>
              <li>O nic se nestaráte - cloud se stará za vás</li>
              <li>Jako Uber - zaplatíte jen za jízdu</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Jak serverless funguje - Prakticky</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Představte si, že máte funkci na zpracování objednávek. S serverlessem to funguje takto:
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <ol className="list-decimal list-inside text-gray-300 space-y-3">
              <li>
                <strong>Zákazník odešle objednávku</strong><br/>
                <span className="text-sm text-gray-400">Klikne na "Objednat"</span>
              </li>
              <li>
                <strong>Cloud "probudí" funkci</strong><br/>
                <span className="text-sm text-gray-400">Funkce běží jen když je potřeba</span>
              </li>
              <li>
                <strong>Funkce zpracuje objednávku</strong><br/>
                <span className="text-sm text-gray-400">Uloží do databáze, pošle email...</span>
              </li>
              <li>
                <strong>Funkce se vypne</strong><br/>
                <span className="text-sm text-gray-400">Nečeká na další objednávku</span>
              </li>
            </ol>
            <p className="text-green-400 mt-4 text-sm">
              Celý proces trval 200ms. Zaplatíte za 200ms běhu funkce = pár centů.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Kdy serverless POUŽÍVAT</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">1. Nepravidelná zátěž</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Pokud váš web nemá stálou návštěvnost, serverless je ideální. Platíte jen když někdo web používá.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Praktický příklad:</h3>
            <p className="text-gray-300 mb-3">
              <strong>Newsletter pro 10 000 odběratelů:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Posíláte 1x týdně</li>
              <li>Běží 5 minut</li>
              <li>Zbytek týdne nic nedělá</li>
            </ul>
            <p className="text-green-400 mt-3 text-sm">
              S serverless: Platíte za 5 minut týdně = 5 Kč/měsíc<br/>
              S tradičním serverem: Platíte 24/7 = 500 Kč/měsíc
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">2. Zpracování událostí</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Když se něco stane (upload obrázku, nová objednávka), spustí se funkce. Perfektní pro:
          </p>

          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Změna velikosti uploadovaných obrázků</li>
            <li>Odesílání emailů po objednávce</li>
            <li>Generování PDF faktur</li>
            <li>Zálohování dat</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4">3. Mikroslužby a API</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Každá funkce dělá jednu věc. Snadné na údržbu, testování a škálování.
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Příklad e-shopu:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Funkce 1: Zpracování objednávek</li>
              <li>Funkce 2: Platby kartou</li>
              <li>Funkce 3: Správa skladových zásob</li>
              <li>Funkce 4: Odesílání emailů</li>
            </ul>
            <p className="text-gray-400 mt-3 text-sm">
              Každá funkce je nezávislá. Když se rozbije platba, objednávky fungují dál.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">4. Prototypy a startupy</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Začínáte? Serverless je perfektní - žádné počáteční investice do serverů, platíte jen co používáte.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Kdy serverless NEPOUŽÍVAT</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">1. Dlouhotrvající úlohy</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Serverless funkce mají časový limit (obvykle 15 minut). Pro delší úlohy není vhodný.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Nevhodné pro serverless:</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Video encoding (může trvat hodiny)</li>
              <li>Hromadné zpracování dat (např. analýza TB dat)</li>
              <li>Dlouhé ML modely (trénování několik hodin)</li>
              <li>WebSocket servery (potřebují běžet non-stop)</li>
            </ul>
            <p className="text-red-400 mt-3 text-sm">
              Pro tyto use casy použijte tradiční server nebo speciální služby (např. AWS Batch)
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">2. Konstantní vysoká zátěž</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Když máte konstantní provoz, tradičněj server může být levnější. Serverless je výhodný 
            pro variabilní zátěž.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Příklad - Streamovací služba:</h3>
            <p className="text-gray-300 mb-3">
              Pokud máte 10 000 současných uživatelů 24/7, tradiční server vyjde levněji.
            </p>
            <p className="text-gray-400 text-sm">
              S serverless: 10 000 požadavků/s × cena za request = drahé<br/>
              S tradičním serverem: Fixní cena 2000 Kč/měsíc = levnější při vysokém provozu
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">3. Potřebujete plnou kontrolu</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Se serverless nemáte přístup k OS, nemůžete instalovat co chcete. Máte omezení:
          </p>

          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Omezená paměť (obvykle max 10 GB)</li>
            <li>Omezený CPU</li>
            <li>Nemůžete ukládat soubory na disk (jen dočasně)</li>
            <li>Studený start (první request trvá déle)</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Náklady - Kdy se vyplatí</h2>
          
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Kalkulace nákladů:</h3>
            <p className="text-gray-300 mb-3">
              <strong>Scénář: Kontaktní formulář</strong>
            </p>
            <ul className="text-gray-300 space-y-3">
              <li>
                10 odeslání formuláře denně = 300/měsíc<br/>
                Každé odeslání trvá 100ms<br/>
                <span className="text-green-400 text-sm">Serverless: ~1 Kč/měsíc</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Tradiční server: 500 Kč/měsíc (i když formulář nikdo nepoužívá)</span>
              </li>
            </ul>

            <p className="text-gray-300 mt-6 mb-3">
              <strong>Scénář: E-shop s 10 000 návštěvníků/den</strong>
            </p>
            <ul className="text-gray-300 space-y-3">
              <li>
                300 000 požadavků/měsíc<br/>
                Průměrně 200ms na request<br/>
                <span className="text-yellow-400 text-sm">Serverless: ~800 Kč/měsíc</span>
              </li>
              <li>
                <span className="text-green-400 text-sm">Tradiční server: 500-800 Kč/měsíc (podobné náklady)</span>
              </li>
            </ul>

            <p className="text-gray-300 mt-6 mb-3">
              <strong>Scénář: Velký e-shop s 100 000 návštěvníků/den</strong>
            </p>
            <ul className="text-gray-300 space-y-3">
              <li>
                3 000 000 požadavků/měsíc<br/>
                <span className="text-red-400 text-sm">Serverless: ~8 000 Kč/měsíc</span>
              </li>
              <li>
                <span className="text-green-400 text-sm">Tradiční server: 2 000-3 000 Kč/měsíc (levnější při vysokém provozu)</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Praktické tipy</h2>
          
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-3">
            <li>
              <strong>Začněte malým:</strong> Jeden endpoint, jedna funkce. Neskoč te do serverless všemi čtyřmi.
            </li>
            <li>
              <strong>Optimalizujte studený start:</strong> Minimalizujte závislosti, používejte lightweight frameworky.
            </li>
            <li>
              <strong>Monitorujte náklady:</strong> Serverless může být drahý když si nedáte pozor na nekonečné smyčky.
            </li>
            <li>
              <strong>Používejte provisioned concurrency:</strong> Pro kritické endpointy (eliminuje studený start).
            </li>
            <li>
              <strong>Logujte vše:</strong> Debugging je složitější, dobré logy jsou klíčové.
            </li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-6">Populární serverless platformy</h2>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong>AWS Lambda:</strong> Nejpoužívanější, největší ekosystém, trochu složitější
              </li>
              <li>
                <strong>Vercel Functions:</strong> Ideální pro Next.js, velmi jednoduché na použití
              </li>
              <li>
                <strong>Netlify Functions:</strong> Dobré pro malé projekty, generous free tier
              </li>
              <li>
                <strong>Azure Functions:</strong> Pokud už používáte Microsoft ekosystém
              </li>
              <li>
                <strong>Google Cloud Functions:</strong> Dobrá integrace s Google službami
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Závěr</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Serverless není řešení na všechno. Je skvělý pro nepravidelnou zátěž, mikroslužby, 
            prototypy. Není vhodný pro dlouhotrvající úlohy, konstantní vysokou zátěž nebo když 
            potřebujete plnou kontrolu.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Klíčová otázka: "Jak často a jak dlouho bude moje funkce běžet?" Pokud občas a krátce - 
            serverless je perfektní. Pokud non-stop a dlouho - tradiční server bude lepší volba.
          </p>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Nevíte jestli serverless je pro vás?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Pomohu vám posoudit vhodnost serverless architektury pro váš projekt. Kalkulace nákladů, 
              návrh architektury a implementace serverless řešení včetně optimalizace výkonu a nákladů.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/webovy-vyvojar/kontakt"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Serverless konzultace
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
              <Link
                href="/webovy-vyvojar/projekty"
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                Serverless projekty
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
