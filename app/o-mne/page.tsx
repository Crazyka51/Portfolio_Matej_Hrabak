"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Home, User, FolderKanban, FileText, ImageIcon, ArrowRight, Calendar, MapPin, Github, Mail } from "lucide-react"
import Clock from "@/app/components/clock"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import { usePerformance } from "@/app/context/performance-context"


export default function AboutPage() {
  const { performanceMode } = usePerformance()
  
  return (
    <div className="min-h-screen bg-[#050A14] text-white overflow-hidden">
      {/* Animované pozadí */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hlavní gradient */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/20 to-transparent"
          style={{ opacity: 0.4 }}
        />

        {/* Animované kruhy */}
        <motion.div
          initial={performanceMode === "high" ? { opacity: 0, scale: 0.8 } : false}
          animate={performanceMode === "high" ? { opacity: 0.15, scale: 1 } : {}}
          transition={performanceMode === "high" ? { duration: 3, repeat: Infinity, repeatType: "reverse" } : { duration: 0 }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-red-600/20 blur-3xl"
        />

        <motion.div
          initial={performanceMode === "high" ? { opacity: 0, scale: 0.8 } : false}
          animate={performanceMode === "high" ? { opacity: 0.1, scale: 1 } : {}}
          transition={performanceMode === "high" ? { duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 } : { duration: 0 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl"
        />

        {/* Mřížka na pozadí */}
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNzAgMEgwdjYwaDMwVjB6TTI5IDFIMXYyOGgyOFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMEgzMHY2MGgzMFYwek01OSAxSDMxdjI4aDI4VjF6IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjxwYXRoIGQ9Ik0zMCAzMEgwdjMwaDMwVjMwek0yOSAzMUgxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMzBIMzB2MzBoMzBWMzB6TTU5IDMxSDMxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')",
            opacity: 0.2
          }}
        />
      </div>

      <Navbar />

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 relative z-10">
        {/* Sidebar Navigation */}
        <motion.aside
          initial={performanceMode === "high" ? { opacity: 0, x: -30 } : false}
          animate={performanceMode === "high" ? { opacity: 1, x: 0 } : {}}
          transition={performanceMode === "high" ? { duration: 0.6 } : { duration: 0 }}
          className="w-full md:w-64 flex-shrink-0"
        >
          <div className="sticky top-24">
            <div className="relative w-48 h-48 mx-auto md:mx-0 rounded-xl overflow-hidden mb-6 border-2 border-red-500/30">
              <motion.div
                initial={performanceMode === "high" ? { opacity: 0, scale: 0.8 } : false}
                animate={performanceMode === "high" ? { opacity: 1, scale: 1 } : {}}
                transition={performanceMode === "high" ? { duration: 0.6, delay: 0.2 } : { duration: 0 }}
                className="relative w-full h-full"
              >
                <Image
                  src="/avatar.webp"
                  alt="Matěj Hrabák"
                  fill
                  sizes="(max-width: 768px) 192px, 192px"
                  className="object-cover"
                  priority
                />
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600/20 rounded-full blur-xl" />
            </div>

            <motion.div
              initial={performanceMode === "high" ? { opacity: 0, y: 20 } : false}
              animate={performanceMode === "high" ? { opacity: 1, y: 0 } : {}}
              transition={performanceMode === "high" ? { duration: 0.6, delay: 0.3 } : { duration: 0 }}
            >
              <h1 className="text-2xl font-bold mb-2">Matěj Hrabák</h1>
              <p className="text-red-400 mb-4">Pojišťovací poradce</p>

              <div className="flex items-center mb-4 text-sm text-gray-400">
                <MapPin className="mr-2 h-4 w-4" />
                <span>Praha, Česká republika</span>
              </div>

              <div className="flex space-x-3 mb-6">
                <motion.a
                  whileHover={performanceMode === "high" ? { scale: 1.1, rotate: 5 } : {}}
                  whileTap={performanceMode === "high" ? { scale: 0.95 } : {}}
                  href="https://github.com/crazyka51"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  whileHover={performanceMode === "high" ? { scale: 1.1, rotate: 5 } : {}}
                  whileTap={performanceMode === "high" ? { scale: 0.95 } : {}}
                  href="mailto:matejhrabak@gmail.com"
                  className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                >
                  <Mail size={18} />
                </motion.a>
              </div>

              <motion.div
                whileHover={performanceMode === "high" ? { scale: 1.05 } : {}}
                whileTap={performanceMode === "high" ? { scale: 0.95 } : {}}
              >
                <Link
                  href="/schuzka"
                  className="block w-full bg-red-600 hover:bg-red-700 text-center py-2 px-4 rounded-lg transition-colors mb-6"
                >
                  <Calendar className="inline-block mr-2 h-4 w-4" />
                  Domluvit schůzku
                </Link>
              </motion.div>
            </motion.div>

            <motion.nav
              initial={performanceMode === "high" ? { opacity: 0, y: 20 } : false}
              animate={performanceMode === "high" ? { opacity: 1, y: 0 } : {}}
              transition={performanceMode === "high" ? { duration: 0.6, delay: 0.4 } : { duration: 0 }}
              className="space-y-6 bg-[#111827]/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800 mt-8"
            >
              <div>
                <a
                  href="#uvod"
                  className="text-white hover:text-gray-300 transition-colors flex items-center space-x-2"
                >
                  <motion.span
                    animate={performanceMode === "high" ? { x: [0, 5, 0] } : {}}
                    transition={performanceMode === "high" ? { duration: 1, repeat: Infinity, repeatType: "loop", repeatDelay: 5 } : { duration: 0 }}
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
                    animate={performanceMode === "high" ? { x: [0, 5, 0] } : {}}
                    transition={performanceMode === "high" ? { duration: 1, repeat: Infinity, repeatType: "loop", repeatDelay: 7 } : { duration: 0 }}
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
                    animate={performanceMode === "high" ? { x: [0, 5, 0] } : {}}
                    transition={performanceMode === "high" ? { duration: 1, repeat: Infinity, repeatType: "loop", repeatDelay: 9 } : { duration: 0 }}
                  >
                    →
                  </motion.span>
                  <span>Vzdělání a certifikace</span>
                </a>
              </div>
            </motion.nav>
          </div>
        </motion.aside>

        {/* Main Content */}
        <motion.main
          initial={performanceMode === "high" ? { opacity: 0, y: 30 } : false}
          animate={performanceMode === "high" ? { opacity: 1, y: 0 } : {}}
          transition={performanceMode === "high" ? { duration: 0.6, delay: 0.3 } : { duration: 0 }}
          className="flex-1"
        >
          {/* Profile Section */}
          <section id="uvod" className="mb-16">
            <motion.div
              initial={performanceMode === "high" ? { opacity: 0, y: 20 } : false}
              animate={performanceMode === "high" ? { opacity: 1, y: 0 } : {}}
              transition={performanceMode === "high" ? { duration: 0.6, delay: 0.4 } : { duration: 0 }}
            >
              <h1 className="text-5xl font-bold mb-2">Matěj Hrabák</h1>
              <h2 className="text-2xl text-gray-400 mb-6">Pojišťovací poradce a expert</h2>

             

              <div className="flex gap-4 mb-8">
                <motion.a
                  whileHover={performanceMode === "high" ? { scale: 1.05 } : {}}
                  whileTap={performanceMode === "high" ? { scale: 0.95 } : {}}
                  href="https://github.com/crazyka51"
                  className="flex items-center gap-2 bg-[#111827] hover:bg-[#1d2739] px-3 py-2 rounded-md transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  whileHover={performanceMode === "high" ? { scale: 1.05 } : {}}
                  whileTap={performanceMode === "high" ? { scale: 0.95 } : {}}
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
              initial={performanceMode === "high" ? { opacity: 0, y: 20 } : false}
              animate={performanceMode === "high" ? { opacity: 1, y: 0 } : {}}
              transition={performanceMode === "high" ? { duration: 0.6, delay: 0.5 } : { duration: 0 }}
            >
              <h2 className="text-3xl font-bold mb-8">Pracovní zkušenosti</h2>

              <motion.div
                whileHover={performanceMode === "high" ? { scale: 1.02, borderColor: "rgba(239, 68, 68, 0.3)" } : {}}
                transition={performanceMode === "high" ? { duration: 0.2 } : { duration: 0 }}
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
              </motion.div>

              <motion.div
                whileHover={performanceMode === "high" ? { scale: 1.02, borderColor: "rgba(239, 68, 68, 0.3)" } : {}}
                transition={performanceMode === "high" ? { duration: 0.2 } : { duration: 0 }}
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
              </motion.div>
            </motion.div>
          </section>

          {/* Education */}
          <section id="vzdelani" className="mb-16">
            <motion.div
              initial={performanceMode === "high" ? { opacity: 0, y: 20 } : false}
              animate={performanceMode === "high" ? { opacity: 1, y: 0 } : {}}
              transition={performanceMode === "high" ? { duration: 0.6, delay: 0.6 } : { duration: 0 }}
            >
              <h2 className="text-3xl font-bold mb-8">Vzdělání a certifikace</h2>

              <motion.div
                whileHover={performanceMode === "high" ? { scale: 1.02, borderColor: "rgba(239, 68, 68, 0.3)" } : {}}
                transition={performanceMode === "high" ? { duration: 0.2 } : { duration: 0 }}
                id="pribram"
                className="mb-8 bg-[#111827]/30 p-6 rounded-lg border border-gray-800 hover:border-red-500/20 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Integrovaná Střední škola Příbram</h3>
                  <span className="text-gray-400">2008 - 2012</span>
                </div>
                <p className="text-gray-300">Obor: Obchodník</p>
              </motion.div>

              <motion.div
                whileHover={performanceMode === "high" ? { scale: 1.02, borderColor: "rgba(239, 68, 68, 0.3)" } : {}}
                transition={performanceMode === "high" ? { duration: 0.2 } : { duration: 0 }}
                id="cnb"
                className="mb-8 bg-[#111827]/30 p-6 rounded-lg border border-gray-800 hover:border-red-500/20 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">Zkouška o odborné certifikaci u ČNB - IDD VII</h3>
                <p className="text-gray-300">
                  Distribuce životního pojištění a distribuce neživotního občanského pojištění (2P + oNŽP)
                </p>
              </motion.div>
            </motion.div>
          </section>

          {/* CTA Section */}
          <motion.section
            initial={performanceMode === "high" ? { opacity: 0, y: 20 } : false}
            animate={performanceMode === "high" ? { opacity: 1, y: 0 } : {}}
            transition={performanceMode === "high" ? { duration: 0.6, delay: 0.7 } : { duration: 0 }}
            className="mb-16"
          >
            <motion.div
              whileHover={performanceMode === "high" ? { scale: 1.02 } : {}}
              transition={performanceMode === "high" ? { duration: 0.2 } : { duration: 0 }}
              className="bg-gradient-to-r from-red-900/30 to-red-700/20 p-8 rounded-xl border border-red-500/20 text-center"
            >
              <h2 className="text-2xl font-bold mb-4">Pojďme společně najít řešení pro vaše potřeby</h2>
              <p className="text-gray-300 mb-6">
                Ať už hledáte životní pojištění, investiční příležitosti nebo finanční plánování, jsem tu, abych vám
                pomohl najít to nejlepší řešení.
              </p>
              <motion.div
                whileHover={performanceMode === "high" ? { scale: 1.05 } : {}}
                whileTap={performanceMode === "high" ? { scale: 0.95 } : {}}
              >
                <Link
                  href="/schuzka"
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md transition-colors"
                >
                  Domluvit nezávaznou konzultaci <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.section>
        </motion.main>
      </div>

      <Footer />
    </div>
  )
}
