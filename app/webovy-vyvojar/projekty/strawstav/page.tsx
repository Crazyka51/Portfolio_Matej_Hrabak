"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ExternalLink,
  Hammer,
  Building2,
  Code,
  Rocket,
  Smartphone,
  Layout,
  ImageIcon,
  Leaf,
  Users,
  CheckCircle2,
} from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"
import PageTransition from "@/app/components/page-transition"
import ProjectGallery from "@/app/components/project-gallery"

export default function StrawstavProjectPage() {
  // Gallery images
  const galleryImages = [
    {
      src: "/images/strawstav-project.webp",
      alt: "Strawstav Homepage",
      caption: "Úvodní stránka s prezentací stavební firmy a hlavních služeb",
    },
   
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#010714] text-white">
        <WebDevNavbar />

        <main className="container mx-auto px-4 py-16">
          {/* Back Button */}
          <Link
            href="/webovy-vyvojar/projekty"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Zpět na projekty</span>
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              STRAWSTAV S.R.O.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Next.js 14</span>
              <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              <span className="bg-amber-900/50 text-amber-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="bg-red-900/50 text-red-300 px-3 py-1 rounded-full text-sm">Framer Motion</span>
              <span className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm">Responsive Design</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center"
            >
              <a
                href="https://strawstav.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                <span>Navštívit web</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Project Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <ImageIcon className="mr-3 h-5 w-5 text-blue-400" />
              <span>Ukázky projektu</span>
            </h2>
            <ProjectGallery images={galleryImages} />
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Layout className="mr-3 h-5 w-5 text-blue-400" />
              <span>Klíčové funkce</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="bg-blue-900/30 p-3 rounded-lg inline-block mb-4">
                  <Building2 className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Prezentace služeb</h3>
                <p className="text-gray-400">
                  Přehledná prezentace pěti hlavních služeb - stavební činnost, úklid bytových domů, správa nemovitostí, 
                  údržba zeleně a zemní práce.
                </p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="bg-green-900/30 p-3 rounded-lg inline-block mb-4">
                  <ImageIcon className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Galerie projektů</h3>
                <p className="text-gray-400">
                  Interaktivní galerie realizovaných projektů s filtrováním podle kategorií - fasády, odvětrání, 
                  rekonstrukce, zemní práce.
                </p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="bg-purple-900/30 p-3 rounded-lg inline-block mb-4">
                  <Smartphone className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Responzivní design</h3>
                <p className="text-gray-400">
                  Plně responzivní design optimalizovaný pro všechna zařízení s moderním UI/UX přístupem a 
                  profesionálním vzhledem.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Project Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-3">Popis projektu</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p>
                  Webové stránky pro stavební společnost STRAWSTAV S.R.O. představují komplexní prezentaci firmy 
                  poskytující širokou škálu stavebních a správních služeb. Projekt byl navržen s důrazem na 
                  profesionální vzhled, přehlednost a snadnou orientaci pro potenciální klienty.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Moje role a příspěvek</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-900/30 p-3 rounded-lg mr-4 mt-1">
                      <Layout className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-blue-400">UI/UX Design</h4>
                      <p>
                        Navržen moderní, profesionální design s důrazem na prezentaci stavebních služeb. Color scheme 
                        kombinující červenou, modrou a bílou vytváří důvěryhodný a energický dojem odpovídající 
                        stavebnímu oboru.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-900/30 p-3 rounded-lg mr-4 mt-1">
                      <Code className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-purple-400">Frontend implementace</h4>
                      <p>
                        Kompletní implementace pomocí Next.js 14 s App Router, React pro interaktivní komponenty, 
                        TypeScript pro typovou bezpečnost a Tailwind CSS pro moderní styling. Důraz na performance 
                        a SEO optimalizaci.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-900/30 p-3 rounded-lg mr-4 mt-1">
                      <ImageIcon className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-green-400">Galerie a projekty</h4>
                      <p>
                        Vytvořena interaktivní galerie realizovaných projektů s filtrováním podle kategorií 
                        (fasády, odvětrání, rekonstrukce, zemní práce). Implementováno porovnání "před a po" 
                        s interactive sliderem pro lepší prezentaci výsledků práce.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-900/30 p-3 rounded-lg mr-4 mt-1">
                      <Rocket className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-amber-400">Funkce a integrace</h4>
                      <p>
                        Implementován kontaktní formulář, integrace s OpenStreetMap pro zobrazení sídla firmy, 
                        newsletter systém, sekce s referencemi klientů, FAQ sekce a blog s odbornými články. 
                        Vše s důrazem na konverzi návštěvníků.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-8 mb-4">Klíčové sekce webu</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Úvodní sekce</strong> - Hero sekce s představením firmy a hlavními statistikami 
                      (5+ dokončených projektů, 5 let zkušeností, kvalifikovaní pracovníci)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Služby</strong> - Detailní přehled pěti hlavních služeb s popisem a vizualizací
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Proces spolupráce</strong> - Krok za krokem průvodce spoluprací (Návrh → Projekt → Realizace → Předání)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Portfolio projektů</strong> - Galerie realizací s filtrováním a detaily jednotlivých projektů
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Reference</strong> - Hodnocení spokojených klientů s jejich fotografiemi a projekty
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Blog</strong> - Odborné články o trendech ve stavebnictví a praktické rady
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <strong>FAQ</strong> - Často kladené otázky s odpověďmi na nejčastější dotazy klientů
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Kontakt</strong> - Kontaktní formulář, telefon, email a mapa sídla firmy
                    </div>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4">Výsledek</h3>
                <p>
                  Výsledkem je moderní, profesionální webová prezentace stavební společnosti, která efektivně 
                  komunikuje nabízené služby a buduje důvěru u potenciálních klientů. Web je optimalizován pro 
                  vyhledávače, plně responzivní a poskytuje vynikající uživatelský zážitek na všech zařízeních. 
                  Projekt demonstruje schopnost vytvořit komplexní firemní web s pokročilými funkcemi a moderním 
                  designem.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-3">Technické detaily</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Použité technologie</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Next.js 14
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      React 18
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      TypeScript
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Tailwind CSS
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Framer Motion
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Lucide Icons
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Klíčové funkce</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Responzivní design
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Interaktivní galerie projektů
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Filtrovatelné portfolio
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Před/Po slider
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Kontaktní formulář
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Newsletter systém
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Blog sekce
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      FAQ akordeon
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      OpenStreetMap integrace
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      SEO optimalizace
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Služby prezentované na webu</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Hammer className="w-4 h-4 text-amber-500 mr-2" />
                      Stavební činnost
                    </li>
                    <li className="flex items-center">
                      <Building2 className="w-4 h-4 text-blue-500 mr-2" />
                      Úklid bytových domů
                    </li>
                    <li className="flex items-center">
                      <Users className="w-4 h-4 text-purple-500 mr-2" />
                      Správa nemovitostí
                    </li>
                    <li className="flex items-center">
                      <Leaf className="w-4 h-4 text-green-500 mr-2" />
                      Údržba zeleně
                    </li>
                    <li className="flex items-center">
                      <Hammer className="w-4 h-4 text-red-500 mr-2" />
                      Zemní práce
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Doba realizace</h3>
                  <p>8 týdnů</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Rok dokončení</h3>
                  <p>2025</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Status</h3>
                  <p className="text-green-400">Aktivní produkční web</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Next Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="border-t border-gray-800 pt-12"
          >
            <h2 className="text-2xl font-bold mb-6">Další projekty</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/webovy-vyvojar/projekty/pavel-fiser" className="group">
                <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all h-full">
                  <div className="relative h-40">
                    <Image
                      src="/images/fiserpavel-project.webp"
                      alt="Pavel Fišer Website"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-blue-400 transition-colors">Pavel Fišer</h3>
                    <p className="text-sm text-gray-400">Zastupitel Praha 4</p>
                  </div>
                </div>
              </Link>

              <Link href="/webovy-vyvojar/projekty/salon-zuza" className="group">
                <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all h-full">
                  <div className="relative h-40">
                    <Image
                      src="/images/salonzuza-project.webp"
                      alt="Salon Zuza Website"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-blue-400 transition-colors">Salon Zuza</h3>
                    <p className="text-sm text-gray-400">Kadeřnický salon</p>
                  </div>
                </div>
              </Link>

              <Link href="/webovy-vyvojar/projekty/moje-portfolio" className="group">
                <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all h-full">
                  <div className="relative h-40">
                    <Image
                      src="/images/matejhrabak_portfolio.webp"
                      alt="Matěj Hrabák Portfolio"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-blue-400 transition-colors">Moje Portfolio</h3>
                    <p className="text-sm text-gray-400">Osobní webové stránky</p>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        </main>

        <WebDevFooter />
      </div>
    </PageTransition>
  )
}
