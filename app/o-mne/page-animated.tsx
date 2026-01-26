"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home, User, FolderKanban, FileText, ImageIcon, Github, Mail, MapPin, Calendar } from "lucide-react"
import CurrentTime from "@/app/components/current-time"

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#050A14] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1428]/50 to-[#050A14]" />

        {/* Animated circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-red-600/10 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl"
        />

        {/* Grid background */}
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNzAgMEgwdjYwaDMwVjB6TTI5IDFIMXYyOGgyOFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMEgzMHY2MGgzMFYwek01OSAxSDMxdjI4aDI4VjF6IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjxwYXRoIGQ9Ik0zMCAzMEgwdjMwaDMwVjMwek0yOSAzMUgxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMzBIMzB2MzBoMzBWMzB6TTU5IDMxSDMxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')]"
          style={{ opacity: 0.2 }}
        />
      </div>

      {/* Navigation */}
      <header className="container mx-auto px-4 py-4 relative z-10">
        <nav className="flex justify-center">
          <div className="flex space-x-4 bg-[#111827]/80 px-6 py-2 rounded-full backdrop-blur-sm shadow-lg">
            <Link href="/" className="flex items-center space-x-1 px-2 py-1 hover:text-gray-300 transition-colors">
              <Home size={18} />
              <span>Domů</span>
            </Link>
            <Link href="/o-mne" className="flex items-center space-x-1 px-2 py-1 text-white bg-gray-700/50 rounded-md">
              <User size={18} />
              <span>O mně</span>
            </Link>
            <Link
              href="/projekty"
              className="flex items-center space-x-1 px-2 py-1 hover:text-gray-300 transition-colors"
            >
              <FolderKanban size={18} />
              <span>Projekty</span>
            </Link>
            <Link href="/blog" className="flex items-center space-x-1 px-2 py-1 hover:text-gray-300 transition-colors">
              <FileText size={18} />
              <span>Blog</span>
            </Link>
            <Link
              href="/galerie"
              className="flex items-center space-x-1 px-2 py-1 hover:text-gray-300 transition-colors"
            >
              <ImageIcon size={18} />
              <span>Galerie</span>
            </Link>
          </div>
          <div className="absolute right-4 top-4">
            <CurrentTime />
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 relative z-10">
        {/* Sidebar Navigation */}
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-64 flex-shrink-0"
        >
          <nav className="space-y-6 bg-[#111827]/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800">
            <div>
              <a href="#uvod" className="text-white hover:text-gray-300 transition-colors flex items-center space-x-2">
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", repeatDelay: 5 }}
                >
                  →
                </motion.span>
                <span>Úvod</span>
              </a>
            </div>
            <div className="space-y-2">
              <a
                href="#pracovni-zkusenosti"
                className="text-white hover:text-gray-300 transition-colors flex items-center space-x-2"
              >
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", repeatDelay: 7 }}
                >
                  →
                </motion.span>
                <span>Pracovní zkušenosti</span>
              </a>
              <div className="pl-4 space-y-2 text-sm text-gray-400">
                <a href="#generali" className="hover:text-gray-300 transition-colors block">
                  Generali Česká pojišťovna
                </a>
                <a href="#doosan" className="hover:text-gray-300 transition-colors block">
                  Doosan Bobcat EMEA
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <a
                href="#vzdelani"
                className="text-white hover:text-gray-300 transition-colors flex items-center space-x-2"
              >
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", repeatDelay: 9 }}
                >
                  →
                </motion.span>
                <span>Vzdělání a certifikace</span>
              </a>
              <div className="pl-4 space-y-2 text-sm text-gray-400">
                <a href="#pribram" className="hover:text-gray-300 transition-colors block">
                  Integrovaná Střední škola Příbram
                </a>
                <a href="#cnb" className="hover:text-gray-300 transition-colors block">
                  Zkouška o odborné certifikaci u ČNB - IDD VII
                </a>
              </div>
            </div>
          </nav>
        </motion.aside>

        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1"
        >
          {/* Action Button */}
          <div className="mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/schuzka"
                className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-md transition-all shadow-lg hover:shadow-red-600/20"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Domluvit schůzku
              </Link>
            </motion.div>
          </div>

          {/* Profile Section */}
          <section id="uvod" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-5xl font-bold mb-2">Matěj Hrabák</h1>
              <h2 className="text-2xl text-gray-400 mb-6">Pojišťovací poradce a expert</h2>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-sm">
                  <MapPin className="mr-1 h-4 w-4 text-red-400" />
                  <span>Europe/Prague</span>
                </div>

                <div className="flex gap-2">
                  <button className="bg-[#111827] px-3 py-1 rounded-md text-sm">Čeština</button>
                  <button className="bg-[#111827]/50 px-3 py-1 rounded-md text-sm text-gray-400 hover:bg-[#111827] transition-colors">
                    English
                  </button>
                </div>
              </div>

              <div className="flex gap-4 mb-8">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/crazyka51"
                  className="flex items-center gap-2 bg-[#111827] hover:bg-[#1d2739] px-3 py-2 rounded-md transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:matejhrabak@gmail.com"
                  className="flex items-center gap-2 bg-[#111827] hover:bg-[#1d2739] px-3 py-2 rounded-md transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </motion.a>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Je zkušený poradce specializující se na transparentní a na míru šitá pojišťovací řešení. Jeho služby
                zahrnují osobní přístup, profesionální jednání a důraz na ochranu klientova majetku.
              </p>
            </motion.div>
          </section>

          {/* Work Experience */}
          <section id="pracovni-zkusenosti" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-8">Pracovní zkušenosti</h2>

              <div
                id="generali"
                className="mb-12 bg-[#111827]/30 p-6 rounded-lg border border-gray-800 hover:border-red-500/20 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Generali Česká pojišťovna</h3>
                  <span className="text-gray-400">2023 - současnost</span>
                </div>
                <p className="text-red-400 mb-4">Poradce v pojištění a finančních produktů</p>

                <ul className="space-y-6">
                  <li className="flex">
                    <span className="text-red-400 mr-2">•</span>
                    <p className="text-gray-300">
                      Jako poradce v pojištění a finančních produktů v Generali Česká pojišťovna jsem dosáhl významných
                      úspěchů v oblasti klientské spokojenosti a finanční optimalizace. Mým hlavním cílem bylo
                      poskytovat klientům na míru šitá řešení, která odpovídají jejich specifickým potřebám a cílům.
                    </p>
                  </li>
                  <li className="flex">
                    <span className="text-red-400 mr-2">•</span>
                    <p className="text-gray-300">
                      Navrhoval jsem efektivní pojistné plány, které pokryly 80 % pojistných smluv, a pomohl jsem
                      klientům dosáhnout významných úspor. Vždy jsem kladl důraz na osobní přístup a profesionální
                      jednání, což vedlo k dlouhodobým a důvěryhodným vztahům s našimi klienty.
                    </p>
                  </li>
                </ul>
              </div>

              <div
                id="doosan"
                className="mb-12 bg-[#111827]/30 p-6 rounded-lg border border-gray-800 hover:border-red-500/20 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Doosan Bobcat EMEA</h3>
                  <span className="text-gray-400">2018 - 2023</span>
                </div>
                <p className="text-red-400 mb-4">Koordinátor logistiky výrobního závodu</p>

                <ul className="space-y-6">
                  <li className="flex">
                    <span className="text-red-400 mr-2">•</span>
                    <p className="text-gray-300">
                      Jako koordinátor logistiky v Doosan Bobcat EMEA jsem dosáhl významných úspěchů v optimalizaci a
                      řízení dodavatelských řetězců. Vedl jsem tým, který zavedl nové logistické strategie, což vedlo k
                      20% snížení nákladů na přepravu a 15% zrychlení výkládek.
                    </p>
                  </li>
                  <li className="flex">
                    <span className="text-red-400 mr-2">•</span>
                    <p className="text-gray-300">
                      Spolupracoval jsem s různými odděleními a externími partnery na vytvoření efektivního systému
                      správy zásob, který minimalizoval skladové zásoby o 25% a zároveň zvýšil dostupnost produktů. Mým
                      hlavním cílem bylo zajistit plynulost a efektivitu logistických procesů, což přispělo k celkovému
                      růstu a úspěchu společnosti.
                    </p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </section>

          {/* Education */}
          <section id="vzdelani" className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Vzdělání a certifikace</h2>

              <div
                id="pribram"
                className="mb-8 bg-[#111827]/30 p-6 rounded-lg border border-gray-800 hover:border-red-500/20 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Integrovaná Střední škola Příbram</h3>
                  <span className="text-gray-400">2008 - 2012</span>
                </div>
                <p className="text-gray-300">Obor: Obchodník</p>
              </div>

              <div
                id="cnb"
                className="mb-8 bg-[#111827]/30 p-6 rounded-lg border border-gray-800 hover:border-red-500/20 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">Zkouška o odborné certifikaci u ČNB - IDD VII</h3>
                <p className="text-gray-300">
                  Distribuce životního pojištění a distribuce neživotního občanského pojištění (2P + oNŽP)
                </p>
              </div>
            </motion.div>
          </section>
        </motion.main>
      </div>

      <footer className="container mx-auto px-4 py-8 mt-24 border-t border-gray-800 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">© 2025 / Matěj Hrabák / Powered by Next.js</p>
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://github.com/crazyka51"
              className="text-gray-400 hover:text-white transition-colors"
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
    </div>
  )
}
