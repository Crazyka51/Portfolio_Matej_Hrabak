import { Github, Mail } from "lucide-react"

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
    <footer className="container mx-auto px-4 py-8 mt-24 border-t border-gray-800">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-gray-400 mb-4 sm:mb-0">© 2025 / Matěj Hrabák </p>
        <div className="flex space-x-4">
          <a href="https://github.com/Crazyka51" className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="mailto:matejhrabak@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
