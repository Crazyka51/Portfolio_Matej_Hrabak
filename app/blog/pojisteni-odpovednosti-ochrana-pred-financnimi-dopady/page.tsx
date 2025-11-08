"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import { Home, User, FolderKanban, FileText, Github, Mail } from "lucide-react";
import Clock from "@/app/components/clock";

export default function PojisteniOdpovednostiochranaPage() {
  return (
    <div className="min-h-screen bg-[#050A14] text-white relative">
      {/* Animované pozadí */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hlavní gradient */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/20 to-transparent"
          style={{ opacity: 0.4 }}
        />

        {/* Animované kruhy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-red-600/20 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl"
        />

        {/* Mřížka na pozadí */}
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNzAgMEgwdjYwaDMwVjB6TTI5IDFIMXYyOGgyOFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMEgzMHY2MGgzMFYwek01OSAxSDMxdjI4aDI4VjF6IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjxwYXRoIGQ9Ik0zMCAzMEgwdjMwaDMwVjMwek0yOSAzMUgxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMzBIMzB2MzBoMzBWMzB6TTU5IDMxSDMxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')]"
          style={{ opacity: 0.2 }}
        />
      </div>

      

      <main className="container mx-auto px-4 py-8 relative">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-red-400 hover:underline flex items-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Zpět na blog
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Pojištění odpovědnosti: Ochrana před finančními dopady nehod
          </motion.h1>

          <div className="flex items-center text-gray-400 mb-8">
            <span className="mr-4">Publikováno: 18. června 2025</span>
            <span>Autor: Matěj Hrabák</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden"
          >
            <Image src="/images/liability-insurance.webp" alt="Pojištění odpovědnosti" fill className="object-cover" />
          </motion.div>

          <article className="prose prose-lg prose-invert max-w-none">
            <section>
              <h2 className="text-3xl font-semibold mt-8 mb-4">Úvod</h2>
              <p>
                Stačí chvilka nepozornosti a škoda je na světě. Ať už jde o poškození cizího majetku, újmu na zdraví nebo
                neúmyslné způsobení finanční škody, následky mohou být velmi nákladné. Pojištění odpovědnosti vám pomůže
                zmírnit finanční dopady těchto situací a zajistí, že nebudete muset hradit vysoké částky z vlastních
                prostředků.
              </p>
              <p>
                V tomto článku se podíváme na klíčové výhody pojištění odpovědnosti, jeho praktické využití a důvody, proč
                byste měli zvážit jeho sjednání.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mt-8 mb-4">Co kryje pojištění odpovědnosti?</h2>
              <p>
                Pojištění odpovědnosti je navrženo tak, aby pokrylo škody, které neúmyslně způsobíte třetí straně. Může se
                jednat o:
              </p>
              <ul>
                <li>Škody na majetku – například pokud omylem poškodíte sousedův plot, rozbijete okno nebo způsobíte škodu na pronajatém bytě.</li>
                <li>Újmu na zdraví – pokud například při sportovní aktivitě nešťastně srazíte jiného člověka a způsobíte mu zranění.</li>
                <li>Následné finanční škody – například pokud vaše dítě při hře poškodí školní vybavení nebo pokud váš domácí mazlíček způsobí dopravní nehodu.</li>
              </ul>
              <p>
                Pojištění odpovědnosti vám pomůže pokrýt náklady na opravu, léčbu nebo právní zastoupení v případě soudního sporu.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold mt-8 mb-4">Proč je pojištění odpovědnosti důležité?</h2>
              <p>
                Na první pohled se může zdát, že pojištění odpovědnosti není nezbytné, ale je důležité si uvědomit, že
                náklady spojené s náhradou škod mohou být značné. Bez pojištění byste museli tyto výdaje pokrýt z
                vlastních prostředků, což může znamenat značnou finanční zátěž.
              </p>
              <p>
                Dalším důvodem pro sjednání tohoto pojištění je fakt, že mnoho lidí si ani neuvědomuje, jak snadno může k
                podobným situacím dojít. Život je plný nečekaných událostí a rizik, a proto je rozumné na ně být
                připraven.
              </p>
            </section>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-24 border-t border-gray-800 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">© 2025 / Matěj Hrabák / Powered by Next.js</p>
          <div className="flex space-x-4">
            <motion.a
              href="https://github.com/Crazyka51"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="mailto:matej.hrabak@generaliceska.cz"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  )
}
