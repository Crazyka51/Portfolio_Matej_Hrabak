"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, ArrowLeft } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050A14] text-white relative">
      {/* Pozadí s gradientem a animovanými prvky */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hlavní gradient */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-900/20 to-transparent"
          style={{ opacity: 0.4 }}
        />

        {/* Animované kruhy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl"
        />

       </div>

      <WebDevNavbar />

      <main className="container mx-auto px-4 py-12 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zpět na hlavní stránku
          </Link>

          <div className="flex items-center mb-6">
            <Shield className="text-indigo-500 mr-3" size={32} />
            <h1 className="text-4xl font-bold">Ochrana soukromí</h1>
          </div>

          <p className="text-gray-400 mb-8">Platnost od: 1. ledna 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">1. Úvod</h2>
              <p className="text-gray-300 leading-relaxed">
                Vážíme si Vašeho soukromí a zavazujeme se chránit Vaše osobní údaje. Tato stránka popisuje, jak
                shromažďujeme, používáme a chráníme Vaše informace v souvislosti s poskytováním webových
                a vývojářských služeb.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">2. Správce osobních údajů</h2>
              <div className="bg-[#111827]/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <p className="text-gray-300 mb-2">
                  <strong>Matěj Hrabák</strong>
                </p>
                <p className="text-gray-300 mb-2">Fullstack developer</p>
                <p className="text-gray-300 mb-2">Email: matejhrabak@gmail.com</p>
                <p className="text-gray-300">Telefon: +420 776 084 700</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">3. Jaké údaje sbíráme</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                V rámci poskytování našich služeb můžeme zpracovávat následující kategorie osobních údajů:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>
                    <strong>Identifikační údaje:</strong> jméno, příjmení, firma
                  </span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>
                    <strong>Kontaktní údaje:</strong> email, telefonní číslo
                  </span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>
                    <strong>Projektové údaje:</strong> informace o požadavcích na webový projekt, rozpočtu a preferencích
                  </span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>
                    <strong>Technické údaje:</strong> IP adresa, typ prohlížeče, informace o návštěvě webu
                  </span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">4. Účel zpracování údajů</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Vaše osobní údaje zpracováváme za účelem:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Poskytování webových a vývojářských služeb</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Vývoj webových aplikací a stránek</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Komunikace ohledně projektů</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Plnění zákonných povinností</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Zasílání informací o službách (se souhlasem)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">5. Právní základ zpracování</h2>
              <p className="text-gray-300 leading-relaxed mb-4">Osobní údaje zpracováváme na základě:</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Plnění smlouvy nebo přípravy smlouvy</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Plnění právních povinností správce</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Vašeho souhlasu (pro marketingové účely)</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Oprávněného zájmu správce</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-red-400">6. Sdílení údajů</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Vaše osobní údaje můžeme sdílet s následujícími kategoriemi příjemců:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Generali Česká pojišťovna a.s. a další pojišťovny</span>
                </li>
                <li className="flex">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Zprostředkovatelé a obchodní partneři</span>
                </li>
                <li className="flex">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Poskytovatelé IT služeb</span>
                </li>
                <li className="flex">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Orgány státní správy (v rozsahu stanoveném zákonem)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">7. Doba uložení údajů</h2>
              <p className="text-gray-300 leading-relaxed">
                Osobní údaje uchováváme po dobu trvání smluvního vztahu a následně po dobu stanovenou právními
                předpisy (obvykle 10 let od ukončení smlouvy). Údaje zpracovávané na základě souhlasu uchováváme do
                odvolání souhlasu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">8. Vaše práva</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                V souvislosti se zpracováním osobních údajů máte následující práva:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Právo na přístup k osobním údajům</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Právo na opravu nepřesných údajů</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Právo na výmaz údajů</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Právo na omezení zpracování</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Právo na přenositelnost údajů</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Právo vznést námitku proti zpracování</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Právo odvolat souhlas</span>
                </li>
                <li className="flex">
                  <span className="text-indigo-400 mr-3">•</span>
                  <span>Právo podat stížnost u Úřadu pro ochranu osobních údajů</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">9. Cookies</h2>
              <p className="text-gray-300 leading-relaxed">
                Naše webové stránky používají pouze nezbytné technické cookies pro zajištění základní funkčnosti.
                Nepoužíváme analytické ani marketingové cookies bez Vašeho souhlasu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">10. Kontakt</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Máte-li jakékoli dotazy ohledně zpracování osobních údajů, kontaktujte nás prosím:
              </p>
              <div className="bg-[#111827]/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <p className="text-gray-300 mb-2">Email: matejhrabak@gmail.com</p>
                <p className="text-gray-300">Telefon: +420 776 084 700</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">11. Změny tohoto dokumentu</h2>
              <p className="text-gray-300 leading-relaxed">
                Vyhrazujeme si právo tyto zásady ochrany soukromí aktualizovat. O významných změnách Vás budeme
                informovat prostřednictvím webu nebo emailem.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              Poslední aktualizace: 1. ledna 2025
              <br />V souladu s nařízením GDPR (EU) 2016/679
            </p>
          </div>
        </motion.div>
      </main>

      <WebDevFooter />
    </div>
  )
}
