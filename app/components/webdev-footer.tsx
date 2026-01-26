"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Code } from "lucide-react"
import { motion } from "framer-motion"

export default function WebDevFooter() {
  return (
    <footer className="bg-[#050A14] border-t border-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-3 md:mb-4">
              <Code className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
              <span className="font-bold text-base md:text-lg">Matěj Hrabák</span>
            </Link>
            <p className="text-gray-400 mb-4 md:mb-6 max-w-md text-sm md:text-base">
              Webový vývojář se specializací na moderní technologie a frameworky. Tvořím responzivní a výkonné webové
              aplikace s důrazem na uživatelský zážitek.
            </p>
            <div className="flex space-x-6 md:space-x-4">
             <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Crazyka51"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="GitHub profil"
               >
                <Github size={24} className="md:w-5 md:h-5" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:matejhrabak@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Email kontakt"
              >
                <Mail size={24} className="md:w-5 md:h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/webovy-vyvojar" className="text-gray-400 hover:text-blue-400 transition-colors text-sm md:text-base min-h-[44px] flex items-center">
                  Domů
                </Link>
              </li>
              <li>
                <Link href="/webovy-vyvojar/o-mne" className="text-gray-400 hover:text-blue-400 transition-colors text-sm md:text-base min-h-[44px] flex items-center">
                  O mně
                </Link>
              </li>
              <li>
                <Link href="/webovy-vyvojar/projekty" className="text-gray-400 hover:text-blue-400 transition-colors text-sm md:text-base min-h-[44px] flex items-center">
                  Projekty
                </Link>
              </li>
              <li>
                <Link href="/webovy-vyvojar/blog" className="text-gray-400 hover:text-blue-400 transition-colors text-sm md:text-base min-h-[44px] flex items-center">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/webovy-vyvojar/kontakt" className="text-gray-400 hover:text-blue-400 transition-colors text-sm md:text-base min-h-[44px] flex items-center">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog Articles */}
          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Z blogu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/webovy-vyvojar/blog/nextjs-15-co-je-noveho" className="text-gray-400 hover:text-blue-400 transition-colors text-sm md:text-base min-h-[44px] flex items-center">
                  Next.js 15 - Co je nového
                </Link>
              </li>
              <li>
                <Link href="/webovy-vyvojar/blog/jak-optimalizovat-vykon-react-aplikaci" className="text-gray-400 hover:text-blue-400 transition-colors text-sm md:text-base min-h-[44px] flex items-center">
                  Optimalizace React aplikací
                </Link>
              </li>
              <li>
                <Link href="/webovy-vyvojar/blog/typescript-tipy-pro-efektivnejsi-typovani" className="text-gray-400 hover:text-blue-400 transition-colors text-sm md:text-base min-h-[44px] flex items-center">
                  TypeScript tipy
                </Link>
              </li>
              <li>
                <Link href="/webovy-vyvojar/blog/tailwind-css-od-skeptika-k-fanouskovi" className="text-gray-400 hover:text-blue-400 transition-colors text-sm md:text-base min-h-[44px] flex items-center">
                  Tailwind CSS
                </Link>
              </li>
              <li>
                <Link
                  href="/webovy-vyvojar/blog/pristupnost-webu-proc-je-dulezita"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm md:text-base min-h-[44px] flex items-center"
                >
                  Přístupnost webu
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-gray-400 text-center md:text-left">© 2026 / Matěj Hrabák / Powered by Next.js</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/privacy" className="text-xs md:text-sm text-gray-400 hover:text-blue-400 transition-colors min-h-[44px] flex items-center">
              Ochrana soukromí
            </Link>
            <Link href="/terms" className="text-xs md:text-sm text-gray-400 hover:text-blue-400 transition-colors min-h-[44px] flex items-center">
              Podmínky použití
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
