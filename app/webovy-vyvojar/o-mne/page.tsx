"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Code, Download, Mail, Github, Linkedin, Twitter, MapPin, GraduationCap, Cpu, Layers } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#010714] text-white">
      <WebDevNavbar />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1"
            >
              <div className="sticky top-24">
                <div className="relative w-48 h-48 mx-auto md:mx-0 rounded-xl overflow-hidden mb-6 border-2 border-blue-500/30">
                  <Image
                    src="/images/avatar_fullHD.png?height=192&width=192&text=MH"
                    alt="Matěj Hrabák"
                    fill
                    className="object-cover"
                  />
                </div>

                <h1 className="text-2xl font-bold mb-2">Matěj Hrabák</h1>
                <p className="text-blue-400 mb-4">Webový vývojář</p>

                <div className="flex items-center mb-4 text-sm text-gray-400">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Praha, Česká republika</span>
                </div>

                <div className="flex space-x-3 mb-6">
                  <a
                    href="https://github.com/crazyka51"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="mailto:matejhrabak@gmail.com"
                    className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                  >
                    <Mail size={18} />
                  </a>
                </div>

                <Link
                  href="/webovy-vyvojar/kontakt"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-center py-2 px-4 rounded-lg transition-colors mb-6"
                >
                  Kontaktovat
                </Link>

                <a
                  href="#"
                  className="flex items-center justify-center w-full bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded-lg transition-colors"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Stáhnout CV
                </a>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2"
            >
              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Code className="mr-3 h-6 w-6 text-blue-400" />
                  <span>O mně</span>
                </h2>
                <div className="text-gray-300 space-y-4">
                  <p>
                    Jsem nadšenec do IT a počítačů, zejména vývoje webových stránek. Již přes 14 let se volnočasově
                    zabývám tvorbou webových stránek pro známé a přátele, od jednoduchých statických prezentací až po
                    komplexnější webové aplikace.
                  </p>
                  <p>
                    V posledních 3 letech jsem se intenzivně zdokonaloval a vzdělával jako samouk v oblasti moderních
                    webových technologií. Mým hlavním zaměřením je vývoj v React a Next.js ekosystému, s důrazem na
                    výkon, přístupnost a uživatelský zážitek. Baví mě řešit složité problémy a vytvářet elegantní,
                    efektivní a udržitelný kód.
                  </p>
                  <p>
                    Kromě vývoje webových stránek pracuji jako pojišťovací poradce, což mi dává jedinečnou perspektivu
                    na potřeby klientů a firem v oblasti online prezentace. Tato kombinace mi umožňuje vytvářet webové
                    stránky, které nejen skvěle vypadají, ale také efektivně plní svůj obchodní účel.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Cpu className="mr-3 h-6 w-6 text-blue-400" />
                  <span>Technické dovednosti</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        HTML5, CSS3, JavaScript (ES6+)
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        React, Next.js
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Tailwind CSS, Styled Components
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Responzivní design
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-semibold mb-4">Backend & Databáze</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Node.js, Express
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        PHP, WordPress
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        MySQL, 
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Firebase, Supabase
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-semibold mb-4">Nástroje & Workflow</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Git, GitHub
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Visual Studio Code
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                         Adobe Photoshop, Davinci Resolve, Shotcut
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Vercel, Netlify
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-semibold mb-4">Ostatní</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        SEO optimalizace
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Webová analytika
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        UX/UI design
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Optimalizace výkonu
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <GraduationCap className="mr-3 h-6 w-6 text-blue-400" />
                  <span>Vzdělání</span>
                </h2>

                <div className="space-y-8">
                  <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-[2px] before:bg-gray-700">
                    <div className="absolute left-[-8px] top-2 h-4 w-4 rounded-full bg-blue-500"></div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">Integrovaná Střední škola Příbram</h3>
                      <span className="text-gray-400 text-sm">2008 - 2012</span>
                    </div>
                    <p className="text-blue-400 mb-3">Obor: Obchodník</p>
                    <p className="text-gray-300">Středoškolské vzdělání zaměřené na obchod a podnikání.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Layers className="mr-3 h-6 w-6 text-blue-400" />
                  <span>Moje projekty</span>
                </h2>

                <div className="space-y-6">
                  <p className="text-gray-300">
                    Za posledních 14 let jsem vytvořil desítky webových stránek a aplikací pro klienty z různých
                    odvětví. Mé projekty zahrnují:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                      <h3 className="font-semibold mb-2">Firemní prezentační weby</h3>
                      <p className="text-gray-400">Moderní responzivní weby pro malé a střední podniky</p>
                    </div>

                    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                      <h3 className="font-semibold mb-2">E-commerce řešení</h3>
                      <p className="text-gray-400">Vlastní e-shopy a integrace platebních bran</p>
                    </div>

                    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                      <h3 className="font-semibold mb-2">Webové aplikace</h3>
                      <p className="text-gray-400">Interaktivní aplikace s pokročilou funkcionalitou</p>
                    </div>

                    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                      <h3 className="font-semibold mb-2">WordPress weby</h3>
                      <p className="text-gray-400">Vlastní WordPress šablony a pluginy</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mt-4">
                    Pro detailnější ukázky mé práce mě neváhejte kontaktovat. Rád vám představím své portfolio a
                    prodiskutuji, jak bych mohl pomoci s vaším projektem.
                  </p>
                </div>
              </section>
            </motion.div>
          </div>
        </div>
      </main>

      <WebDevFooter />
    </div>
  )
}
