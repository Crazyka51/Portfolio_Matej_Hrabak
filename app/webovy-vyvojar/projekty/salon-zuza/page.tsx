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
} from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"
import PageTransition from "@/app/components/page-transition"
import ProjectGallery from "@/app/components/project-gallery"

export default function SalonZuzaProjectPage() {
  // Gallery images
  const galleryImages = [
    {
      src: "/images/salonzuza-project.png",
      alt: "Salon Zuza Homepage",
      caption: "Úvodní stránka s prezentací salonu a klíčovými službami",
    },
    {
      src: "/images/sluzbycenik_salonzuza.jpeg",
      alt: "Salon Zuza Services Page",
      caption: "Stránka s detailním přehledem nabízených služeb a ceníkem",
    },
    {
      src: "/images/booking_salonzuza.jpeg",
      alt: "Salon Zuza Booking System",
      caption: "Rezervační systém umožňující klientům objednat se online",
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
              Kadeřnický Salon Zuza
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">WordPress</span>
              <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm">Elementor</span>
              <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm">Booking System</span>
              <span className="bg-amber-900/50 text-amber-300 px-3 py-1 rounded-full text-sm">UI/UX Design</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center"
            >
              <a
                href="https://salon-zuza.cz"
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
                  <Calendar className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Online rezervace</h3>
                <p className="text-gray-400">
                  Intuitivní rezervační systém umožňující klientům snadno objednat služby online a vybrat preferovaný
                  termín.
                </p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="bg-green-900/30 p-3 rounded-lg inline-block mb-4">
                  <Smartphone className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Responzivní design</h3>
                <p className="text-gray-400">
                  Plně responzivní design zajišťující optimální zobrazení na všech zařízeních od mobilních telefonů po
                  velké monitory.
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
                  Již od prvních kroků svého profesionálního vývoje jsem se rozhodl kombinovat moderní design s
                  funkčností – a právě tento web to dokonale reflektuje. Projekt pro Kadeřnický Salon Zuza mi umožnil
                  vytvořit prezentaci, která nejen vystihuje jedinečnou atmosféru salonu, ale zároveň usnadňuje klientům
                  objednávání služeb díky integrovanému rezervačnímu systému.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Moje role a příspěvek</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-900/30 p-3 rounded-lg mr-4 mt-1">
                      <Paintbrush className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-blue-400">Návrh designu</h4>
                      <p>
                        Prvním krokem bylo vytvoření detailního vizuálního konceptu v Adobe Photoshopu. Tento návrh
                        vycházel z identity salonu a cílem bylo dosáhnout moderního, elegantního a zároveň uživatelsky
                        přívětivého vzhledu.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-900/30 p-3 rounded-lg mr-4 mt-1">
                      <Code className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-purple-400">Implementace pomocí Elementor</h4>
                      <p>
                        Připravený design jsem následně převedl do praxe pomocí systému Elementor, který mi umožnil
                        přesně vystihnout atmosféru návrhu. Důraz byl kladen nejen na estetiku, ale především na logický
                        a intuitivní layout webu, který návštěvníkům poskytuje snadnou orientaci.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-900/30 p-3 rounded-lg mr-4 mt-1">
                      <Calendar className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-green-400">Vytvoření booking systému</h4>
                      <p>
                        Pro zajištění plynulého a efektivního procesu objednávání jsem do webu integroval vlastní
                        rezervační systém. Klienti nyní mohou jednoduše rezervovat termíny přímo prostřednictvím webu,
                        což výrazně zjednodušilo jejich zkušenost a zvýšilo funkčnost celého řešení.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-900/30 p-3 rounded-lg mr-4 mt-1">
                      <Rocket className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-amber-400">Optimalizace a nasazení</h4>
                      <p>
                        Projekt byl završeno úpravami, optimalizací a důkladným testováním, aby bylo zajištěno rychlé
                        načítání a spolehlivý chod webu. Finálním krokem bylo úspěšné nasazení webu do živého prostředí,
                        kde nyní slouží jako efektivní digitální vizitka salonu.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-8 mb-4">Výsledek</h3>
                <p>
                  Výsledkem je moderní a profesionální web, který skvěle reprezentuje image Kadeřnického Salonu Zuza.
                  Web nejenže působí vizuálně atraktivně, ale také poskytuje intuitivní ovládání a praktické řešení pro
                  rezervace, což zvyšuje spokojenost klientů a podporuje celkový růst podnikání.
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
                      WordPress CMS
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                      Elementor Page Builder
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Custom Booking Plugin
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                      Adobe Photoshop
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                      PHP
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-teal-500 rounded-full mr-2"></span>
                      CSS3 / SCSS
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Klíčové funkce</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Responzivní design
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Online rezervační systém
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Ceník služeb
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Kontaktní formulář
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Integrace sociálních sítí
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Doba realizace</h3>
                  <p>6 týdnů</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Rok dokončení</h3>
                  <p>2024</p>
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
                    <p className="text-sm text-gray-400">Osobní webové stránky</p>
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

              <Link href="/webovy-vyvojar/projekty/matejhrabak" className="group">
                <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all h-full">
                  <div className="relative h-40">
                    <Image
                      src="/images/matejhrabak_portfolio.jpeg"
                      alt="Matěj Hrabák Website"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-blue-400 transition-colors">Matěj Hrabák</h3>
                    <p className="text-sm text-gray-400">Osobní portfolio</p>
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
