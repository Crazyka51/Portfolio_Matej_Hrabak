"use client"

import { SpeedInsights } from "@vercel/speed-insights/next"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Code, Zap, ZapOff } from "lucide-react"
import { usePathname } from "next/navigation"

// Lazy load těžkých komponent pouze když jsou potřeba
const InteractiveParticles = dynamic(() => import("./components/interactive-particles"), { 
  ssr: false,
  loading: () => null 
})
const AnimatedText = dynamic(() => import("./components/animated-text"), { 
  ssr: false,
  loading: () => null 
})
const AnimatedSvg = dynamic(() => import("./components/animated-svg"), { 
  ssr: false,
  loading: () => null 
})
const Clock = dynamic(() => import("./components/clock"), { 
  ssr: false,
  loading: () => null 
})
const BackgroundBeams = dynamic(() => import("@/components/ui/background-beams").then(mod => ({ default: mod.BackgroundBeams })), { 
  ssr: false,
  loading: () => null 
})

export default function HomePage() {
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)
  const [showPerformanceChoice, setShowPerformanceChoice] = useState(false)
  const [performanceMode, setPerformanceMode] = useState<"high" | "low" | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsClient(true)
    // Kontrola, zda už uživatel vybral preferenci
    const savedMode = localStorage.getItem("performanceMode") as "high" | "low" | null
    if (savedMode) {
      setPerformanceMode(savedMode)
    } else {
      // Defaultně nastavíme low mode pro rychlejší LCP
      setPerformanceMode("low")
      // Zobrazíme výběr až po načtení stránky
      setTimeout(() => setShowPerformanceChoice(true), 100)
    }
  }, [])

  useEffect(() => {
    if (performanceMode === "high") {
      const handleScroll = () => {
        setScrollY(window.scrollY)
      }
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [performanceMode])

  const handlePerformanceChoice = (mode: "high" | "low") => {
    setPerformanceMode(mode)
    localStorage.setItem("performanceMode", mode)
    setShowPerformanceChoice(false)
  }

  // Obrazovka výběru výkonu
  if (showPerformanceChoice) {
    return (
      <div className="min-h-screen bg-[#050A14] text-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-indigo-500">
              Vítejte
            </h1>
            <p className="text-gray-300 text-lg">Vyberte si preferovaný režim zobrazení</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* S efekty */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePerformanceChoice("high")}
              className="relative group p-8 rounded-lg border border-gray-700 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 hover:border-indigo-500/50 transition-all"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-30 blur transition duration-500" />
              <div className="relative">
                <Zap className="w-12 h-12 mx-auto mb-4 text-indigo-400" />
                <h3 className="text-xl font-semibold mb-2">S efekty</h3>
                <p className="text-gray-400 text-sm">
                  Plné animace a vizuální efekty pro lepší zážitek. Doporučeno pro výkonnější zařízení.
                </p>
              </div>
            </motion.button>

            {/* Bez efektů */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePerformanceChoice("low")}
              className="relative group p-8 rounded-lg border border-gray-700 bg-gradient-to-br from-gray-800/20 to-gray-900/20 hover:border-green-500/50 transition-all"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg opacity-0 group-hover:opacity-30 blur transition duration-500" />
              <div className="relative">
                <ZapOff className="w-12 h-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-xl font-semibold mb-2">Bez efektů</h3>
                <p className="text-gray-400 text-sm">
                  Optimalizovaná verze pro rychlejší načítání. Doporučeno pro slabší zařízení.
                </p>
              </div>
            </motion.button>
          </div>

          <p className="text-gray-500 text-sm text-center mt-8">
            Tuto volbu můžete kdykoli změnit vymazáním cookies prohlížeče.
          </p>
        </motion.div>
      </div>
    )
  }

  // Verze BEZ efektů (optimalizovaná)
  if (performanceMode === "low") {
    return (
      <div className="min-h-screen h-screen bg-[#050A14] text-white relative overflow-hidden flex flex-col">
        <main className="container mx-auto px-2 sm:px-4 flex-1 flex flex-col justify-center overflow-y-auto py-4">
          {/* Profile Section - jednoduchá verze */}
          <div className="flex flex-col items-center mb-2 sm:mb-3 md:mb-4">
            {/* Avatar nahoře */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-gray-700 overflow-hidden mb-2 sm:mb-3">
              <Image 
                src="/avatar.webp" 
                alt="Profile" 
                width={96} 
                height={96} 
                className="object-cover" 
                priority 
                fetchPriority="high"
                sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
              />
            </div>

            {/* Text */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-0.5 sm:mb-1 text-white text-center">
              Matěj Hrabák
            </h1>

            <h2 className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-2 sm:mb-3 text-center px-2">Vyberte si profesní zaměření</h2>
          </div>

          {/* Info sekce - hned pod profilem */}
          <section className="text-center max-w-3xl mx-auto px-2 mb-2 sm:mb-3 md:mb-4">
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 text-gray-200">Profesionální služby na míru</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-2 sm:mb-3">
              Ať už hledáte spolehlivé pojištění nebo moderní webové stránky, nabízím řešení přizpůsobená vašim
              potřebám. Vyberte si profesní zaměření a objevte, jak vám mohu pomoci.
            </p>
            
            {/* Animované tečky */}
            <div className="flex justify-center space-x-2 mb-2 sm:mb-3">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
          </section>

          {/* Service Cards - zmenšené */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 max-w-5xl mx-auto w-full px-2">
            {/* Insurance Advisor Card */}
            <Link
              href="/pojistovaci-poradce"
              className="border border-gray-800 rounded-lg p-2 sm:p-3 md:p-4 lg:p-6 flex flex-col items-center text-center bg-[#111827]/50 hover:border-red-500/30 transition-colors"
            >
              <Shield size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 mb-1 sm:mb-2 md:mb-3 text-red-500" />
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-1.5 md:mb-2">Pojišťovací poradce</h2>
              <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 md:line-clamp-3">
                Zkušený poradce specializující se na transparentní a na míru šitá pojišťovací řešení. Osobní přístup,
                profesionální jednání a důraz na ochranu klientova majetku
              </p>
            </Link>

            {/* Web Developer Card */}
            <Link
              href="/webovy-vyvojar"
              className="border border-gray-800 rounded-lg p-2 sm:p-3 md:p-4 lg:p-6 flex flex-col items-center text-center bg-[#111827]/50 hover:border-indigo-500/30 transition-colors"
            >
              <Code size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 mb-1 sm:mb-2 md:mb-3 text-indigo-500" />
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-1.5 md:mb-2">Webový vývojář</h2>
              <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 md:line-clamp-3">
                Tvůrce moderních a responzivních webových stránek s důrazem na uživatelský zážitek. Specializace na
                vývoj profesionálních webů a aplikací pro jednotlivce i firmy.
              </p>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  // Verze S EFEKTY (původní)

  // Verze S EFEKTY (původní)
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
            <Image src="/avatar.webp" alt="Profile" width={144} height={144} className="object-cover" priority />
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
        
        </motion.div>

        {/* Přidaná sekce s animovaným přechodem - NAD kartami */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-2"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }} // Jemný paralaxový efekt
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 text-gray-200">Profesionální služby na míru</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 sm:mb-6">
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
              className="relative z-10 border border-gray-800 rounded-lg p-10 flex flex-col items-center text-center bg-[#111827]/50 backdrop-blur-sm hover:border-red-500/30 shadow-lg hover:shadow-red-600/10 group-hover:bg-[#111827]/70 transform transition-all duration-300"
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
              className="relative z-10 border border-gray-800 rounded-lg p-10 flex flex-col items-center text-center bg-[#111827]/50 backdrop-blur-sm hover:border-indigo-500/30 shadow-lg hover:shadow-indigo-600/10 group-hover:bg-[#111827]/70 transform transition-all duration-300"
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
      </main>
    </div>
  )
}
