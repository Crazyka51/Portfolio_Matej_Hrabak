"use client"

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
    <footer className="container mx-auto px-4 py-8 mt-24 border-t border-gray-800 relative z-10">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-400 mb-4 sm:mb-0">© 2025 / Matěj Hrabák / Powered by Next.js</p>
        <div className="flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="https://github.com/crazyka51"
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="mailto:matejhraba@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={20} />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
