"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Paintbrush,
  Code,
  Rocket,
  Smartphone,
  Layout,
  ImageIcon,
  Users,
  Settings,
  Database,
} from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"
import PageTransition from "@/app/components/page-transition"
import ProjectGallery from "@/app/components/project-gallery"

export default function PortfolioProjectPage() {
  // Gallery images
  const galleryImages = [
    {
      src: "/images/matejhrabak-project.png",
      alt: "Matěj Hrabák Portfolio Homepage",
      caption: "Úvodní stránka s prezentací služeb a portfolia",
    },
    {
      src: "/images/projekty-portfolio.jpeg?height=600&width=800&text=Portfolio+Projects",
      alt: "Portfolio Projects Page",
      caption: "Sekce projektů s interaktivními kartami a galeriemi",
    },
    {
      src: "/images/blog-portfolio.jpeg?height=600&width=800&text=Portfolio+Blog",
      alt: "Portfolio Blog Section",
      caption: "Blogová sekce s články o financích a pojištění",
    },
    {
      src: "/images/mobile-portfolio.jpeg?height=800&width=400&text=Portfolio+Mobile+View",
      alt: "Portfolio Mobile View",
      caption: "Responzivní zobrazení webu na mobilních zařízeních",
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
              Matěj Hrabák - Osobní Portfolio
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Next.js 14</span>
              <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              <span className="bg-amber-900/50 text-amber-300 px-3 py-1 rounded-full text-sm">Framer Motion</span>
              <span className="bg-red-900/50 text-red-300 px-3 py-1 rounded-full text-sm">MDX Blog</span>
              <span className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm">Shadcn UI</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <a
                href="https://matejhrabak.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                <span>Navštívit web</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://github.com/Crazyka51/finalweb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
              >
                <span>GitHub</span>
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
                  <Settings className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dvojí zaměření</h3>
                <p className="text-gray-400">
                  Unikátní kombinace webového vývojáře a finančního poradce s plynulým přepínáním mezi oběma sekcemi.
                </p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="bg-green-900/30 p-3 rounded-lg inline-block mb-4">
                  <Smartphone className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Moderní design</h3>
                <p className="text-gray-400">
                  Pokročilé animace s Framer Motion, interaktivní prvky a plně responzivní design s tmavým motivem.
                </p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="bg-purple-900/30 p-3 rounded-lg inline-block mb-4">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Blog a články</h3>
                <p className="text-gray-400">
                  MDX blog systém s články o financích a pojištění, optimalizovaný pro SEO a sdílení.
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
                  Toto portfolio představuje můj osobní projekt, který kombinuje mé dvě profesní zaměření - 
                  webový vývoj a finanční poradenství. Web slouží jako ukázka mých schopností v obou oblastech 
                  a zároveň jako platforma pro prezentaci mých služeb a sdílení znalostí.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Hlavní cíle a implementace</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-900/30 p-3 rounded-lg mr-4 mt-1">
                      <Paintbrush className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-blue-400">Moderní design a UX</h4>
                      <p>
                        Implementoval jsem moderní, minimalistický design s důrazem na uživatelskou přívětivost. 
                        Použití Framer Motion pro plynulé animace a přechody mezi sekcemi vytváří příjemný 
                        uživatelský zážitek.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-900/30 p-3 rounded-lg mr-4 mt-1">
                      <Code className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-purple-400">Technická implementace</h4>
                      <p>
                        Využití Next.js 14 s App Router pro optimální výkon a SEO, TypeScript pro 
                        typovou bezpečnost, a Tailwind CSS v kombinaci se Shadcn UI pro konzistentní 
                        a moderní vzhled.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-900/30 p-3 rounded-lg mr-4 mt-1">
                      <Database className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-green-400">Blog systém s MDX</h4>
                      <p>
                        Implementace blogového systému pomocí MDX pro tvorbu článků s bohatým obsahem, 
                        včetně automatického generování meta tagů a optimalizace pro vyhledávače.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-900/30 p-3 rounded-lg mr-4 mt-1">
                      <Rocket className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-amber-400">Optimalizace a výkon</h4>
                      <p>
                        Důraz na výkon a optimalizaci, využití Image komponenty Next.js pro optimalizaci 
                        obrázků, implementace lazy loadingu a efektivní code splitting pro rychlé načítání.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-8 mb-4">Výzvy a jejich řešení</h3>
                <p>
                  Největší výzvou bylo vytvořit web, který by efektivně prezentoval obě mé profesní role 
                  a zároveň poskytoval intuitivní navigaci pro návštěvníky hledající konkrétní služby. 
                  Toto jsem vyřešil pomocí jasného rozdělení obsahu a implementací kontextového přepínání 
                  mezi sekcemi.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Výsledek a přínosy</h3>
                <p>
                  Portfolio úspěšně demonstruje mé schopnosti v obou oblastech a slouží jako efektivní 
                  nástroj pro získávání nových klientů. Blog sekce pomáhá budovat důvěryhodnost a 
                  poskytuje hodnotný obsah návštěvníkům. Projekt také slouží jako ukázka mých 
                  technických dovedností v moderním webovém vývoji.
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
                  <h3 className="font-bold text-lg mb-2">Frontend technologie</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Next.js 14 (App Router)
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
                      Shadcn UI
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Blog a obsah</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      MDX pro články
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Next.js MDX Remote
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Automatické meta tagy
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      RSS Feed
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Optimalizace</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                      Next.js Image Optimization
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                      Code Splitting
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                      SEO optimalizace
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                      Lazy Loading
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Deployment</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                      Vercel hosting
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                      Vlastní doména
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                      CI/CD pipeline
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Doba realizace</h3>
                  <p>
                    Vývoj zahájen: <strong>15. 9. 2025</strong>. Projekt byl vyvíjen průběžně a
                    aktuální stav je aktualizován k <strong>6. 11. 2025</strong>.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Rok dokončení</h3>
                  <p>2025 (průběžně, viz datum aktualizace)</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Status</h3>
                  <p className="text-green-400">Production Ready</p>
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
                      src="/images/fiserpavel-project.png"
                      alt="Pavel Fišer Website"
                      fill
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
                      src="/images/salonzuza-project.png"
                      alt="Salon Zuza Website"
                      fill
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

              <Link href="/webovy-vyvojar/projekty/strawstav" className="group">
                <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all h-full">
                  <div className="relative h-40">
                    <Image
                      src="/images/strawstav-project.png"
                      alt="Straw Stav Website"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-blue-400 transition-colors">Straw Stav</h3>
                    <p className="text-sm text-gray-400">Firemní web</p>
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