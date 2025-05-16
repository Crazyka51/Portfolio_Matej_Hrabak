"use client"

import { SpeedInsights } from "@vercel/speed-insights/next"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Code } from "lucide-react"
import InteractiveParticles from "./components/interactive-particles"
import AnimatedText from "./components/animated-text"
import AnimatedSvg from "./components/animated-svg"
import Clock from "./components/clock"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { usePathname } from "next/navigation"

export default function HomePage() {
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

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
    <div className="min-h-screen bg-[#050A14] text-white relative">
      {/* BackgroundBeams pouze na hlavní stránce */}
      {isClient && pathname === "/" && <BackgroundBeams className="opacity-20" />}

      {/* Interaktivní pozadí s částicemi */}
      <InteractiveParticles />

      {/* Místo navigace jen jednoduchý časový údaj */}
      <header className="container mx-auto px-4 py-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute right-4 top-4"
        >
          
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Profile Section s paralaxovým efektem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-36 h-36 rounded-full border-2 border-gray-700 overflow-hidden mb-8 group"
            style={{
              transform: `translateY(${scrollY * -0.05}px)`, // Opačný směr než sekce pro zvýraznění paralaxu
            }}
          >
            <Image src="/avatar.png" alt="Profile" width={144} height={144} className="object-cover" priority />
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-indigo-500/20"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            {/* Přidaný efekt záře při najetí myší */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-indigo-500/0 to-purple-500/0 opacity-0 group-hover:opacity-60 transition-opacity duration-700 z-10"></div>
          </motion.div>

          {/* Animovaný text s efektem psacího stroje */}
          <AnimatedText
            text="Matěj Hrabák"
            className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-indigo-500"
          />

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-xl text-gray-300 mb-8"
          >
            Vyberte si profesní zaměření
          </motion.h2>

          {/* Animované SVG ilustrace */}
          <div className="flex justify-center space-x-12 mb-8 relative z-10">
            <AnimatedSvg color="#ff4d4d" width={60} height={60} />
            <AnimatedSvg color="#4d79ff" width={60} height={60} />
          </div>
        </motion.div>

        {/* Service Cards s animovanými přechody */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }} // Paralaxový efekt
        >
          {/* Insurance Advisor Card s 3D efektem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{
              scale: 1.03,
              y: -5,
              rotateY: 5,
              rotateX: 2,
            }}
            className="relative group perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-red-900/20 rounded-lg transform rotate-1 group-hover:from-red-600/20 group-hover:to-red-900/30 transition-all duration-500" />

            {/* Přidané světelné efekty */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-lg opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500 group-hover:duration-200" />

            <Link
              href="/pojistovaci-poradce"
              className="relative z-10 border border-gray-800 rounded-lg p-10 flex flex-col items-center text-center bg-[#111827]/50 backdrop-blur-sm hover:border-red-500/30 transition-all shadow-lg hover:shadow-red-600/10 group-hover:bg-[#111827]/70 transform transition-all duration-300"
            >
              <motion.div
                className="mb-6 text-red-500"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 10, 0] }}
              >
                <Shield size={48} />
              </motion.div>
              <h2 className="text-2xl font-semibold mb-4">Pojišťovací poradce</h2>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Zkušený poradce specializující se na transparentní a na míru šitá pojišťovací řešení. Osobní přístup,
                profesionální jednání a důraz na ochranu klientova majetku
              </p>

              {/* Přidaný indikátor akce */}
              <motion.div
                className="mt-6 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ y: 5 }}
                animate={{ y: [5, 0, 5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Klikněte pro více informací
              </motion.div>
            </Link>
          </motion.div>

          {/* Web Developer Card s 3D efektem */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{
              scale: 1.03,
              y: -5,
              rotateY: -5,
              rotateX: 2,
            }}
            className="relative group perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-indigo-900/20 rounded-lg transform -rotate-1 group-hover:from-indigo-600/20 group-hover:to-indigo-900/30 transition-all duration-500" />

            {/* Přidané světelné efekty */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500 group-hover:duration-200" />

            <Link
              href="/webovy-vyvojar"
              className="relative z-10 border border-gray-800 rounded-lg p-10 flex flex-col items-center text-center bg-[#111827]/50 backdrop-blur-sm hover:border-indigo-500/30 transition-all shadow-lg hover:shadow-indigo-600/10 group-hover:bg-[#111827]/70 transform transition-all duration-300"
            >
              <motion.div
                className="mb-6 text-indigo-500"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
              >
                <Code size={48} />
              </motion.div>
              <h2 className="text-2xl font-semibold mb-4">Webový vývojář</h2>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                Tvůrce moderních a responzivních webových stránek s důrazem na uživatelský zážitek. Specializace na
                vývoj profesionálních webů a aplikací pro jednotlivce i firmy.
              </p>

              {/* Přidaný indikátor akce */}
              <motion.div
                className="mt-6 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ y: 5 }}
                animate={{ y: [5, 0, 5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Klikněte pro více informací
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Přidaná sekce s animovaným přechodem */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-24 text-center max-w-3xl mx-auto"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }} // Jemný paralaxový efekt
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Profesionální služby na míru</h2>
          <p className="text-gray-400 mb-8">
            Ať už hledáte spolehlivé pojištění nebo moderní webové stránky, nabízím řešení přizpůsobená vašim potřebám.
            Vyberte si profesní zaměření a objevte, jak vám mohu pomoci.
          </p>

          <div className="flex justify-center space-x-4">
            <motion.div
              className="w-3 h-3 rounded-full bg-red-500"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-indigo-500"
              animate={{ scale: [1.5, 1, 1.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-green-500"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            />
          </div>
        </motion.section>
      </main>
    </div>
  )
}
