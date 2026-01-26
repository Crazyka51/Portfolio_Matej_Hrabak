"use client"

import Link from "next/link"
import { Github, Mail } from "lucide-react"
import { motion } from "framer-motion"

/**
 * @component Footer
 * @description Standard footer component used across the website.
 * Displays copyright information and social media links.
 *
 * @example
 * ```tsx
 * import Footer from "@/app/components/footer"
 *
 * export default function Layout({ children }) {
 *   return (
 *     <>
 *       <main>{children}</main>
 *       <Footer />
 *     </>
 *   )
 * }
 * ```
 *
 * @returns {JSX.Element} A responsive footer with copyright information and social links
 */
export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-6 md:py-8 mt-16 md:mt-24 border-t border-gray-800 relative z-10">
      <div className="flex flex-col gap-4 md:gap-6">
        {/* Odkazy na právní dokumenty */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm">
          <Link 
            href="/privacy" 
            className="text-gray-400 hover:text-white transition-colors active:text-gray-300 min-h-[44px] flex items-center"
          >
            Ochrana soukromí
          </Link>
          <span className="text-gray-600 flex items-center">•</span>
          <Link 
            href="/terms" 
            className="text-gray-400 hover:text-white transition-colors active:text-gray-300 min-h-[44px] flex items-center"
          >
            Podmínky použití
          </Link>
        </div>

        {/* Copyright a sociální sítě */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs md:text-sm text-gray-400 text-center sm:text-left">
            © 2026 / Matěj Hrabák / Powered by Next.js
          </p>
          <div className="flex space-x-6 md:space-x-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/crazyka51"
              className="text-gray-400 hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profil"
            >
              <Github size={24} className="md:w-5 md:h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:matejhraba@gmail.com"
              className="text-gray-400 hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Email kontakt"
            >
              <Mail size={24} className="md:w-5 md:h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}
