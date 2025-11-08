import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Code } from "lucide-react"

export default function WebDevFooter() {
  return (
    <footer className="bg-[#050A14] border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Code className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-lg">Matěj Hrabák</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Webový vývojář se specializací na moderní technologie a frameworky. Tvořím responzivní a výkonné webové
              aplikace s důrazem na uživatelský zážitek.
            </p>
            <div className="flex space-x-4">
             <a
                href="https://github.com/Crazyka51"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
               >
                <Github size={20} />
              </a>
              <a href="mailto:matejhrabak@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/webovy-vyvojar" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Domů
                </Link>
              </li>
              <li>
                <Link href="/webovy-vyvojar/o-mne" className="text-gray-400 hover:text-blue-400 transition-colors">
                  O mně
                </Link>
              </li>
              <li>
                <Link href="/webovy-vyvojar/projekty" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Projekty
                </Link>
              </li>
              <li>
                <Link href="/webovy-vyvojar/blog" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/webovy-vyvojar/kontakt" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Služby</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/webovy-vyvojar#frontend" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link href="/webovy-vyvojar#backend" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Backend Development
                </Link>
              </li>
              <li>
                <Link href="/webovy-vyvojar#react" className="text-gray-400 hover:text-blue-400 transition-colors">
                  React & Next.js
                </Link>
              </li>
              <li>
                <Link href="/webovy-vyvojar#ecommerce" className="text-gray-400 hover:text-blue-400 transition-colors">
                  E-commerce řešení
                </Link>
              </li>
              <li>
                <Link
                  href="/webovy-vyvojar#optimization"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Optimalizace výkonu
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">© 2025 / Matěj Hrabák / Powered by Next.js</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
              Ochrana soukromí
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
              Podmínky použití
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
