"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Shield, Code, Home, User, FolderKanban, FileText, ImageIcon } from "lucide-react"

// Lazy load CurrentTime komponenty
const CurrentTime = dynamic(() => import("@/app/components/current-time"), { 
  ssr: false,
  loading: () => <div className="h-6 w-20" />
})

export default function HomePage() {
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
    <div className="min-h-screen h-screen bg-[#050A14] text-white relative overflow-hidden flex flex-col">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1428]/50 to-[#050A14]" />

        {/* Animated circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute top-10 right-0 md:right-10 w-40 h-40 md:w-64 md:h-64 rounded-full bg-red-600/10 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-0 left-0 w-40 h-40 md:w-64 md:h-64 rounded-full bg-indigo-600/10 blur-3xl"
        />

        {/* Grid background */}
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNzAgMEgwdjYwaDMwVjB6TTI5IDFIMXYyOGgyOFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMEgzMHY2MGgzMFYwek01OSAxSDMxdjI4aDI4VjF6IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjxwYXRoIGQ9Ik0zMCAzMEgwdjMwaDMwVjMwek0yOSAzMUgxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMzBIMzB2MzBoMzBWMzB6TTU5IDMxSDMxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')]"
          style={{ opacity: 0.2 }}
        />
      </div>

      {/* Navigation */}
      <header className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 relative z-10 flex-shrink-0">
        <nav className="flex flex-col sm:flex-row justify-center items-center gap-2">
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-4 bg-[#111827]/80 px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full backdrop-blur-sm shadow-lg text-xs sm:text-sm md:text-base">
            <Link href="/" className="flex items-center space-x-0.5 sm:space-x-1 px-1.5 sm:px-2 py-1 hover:text-gray-300 transition-colors whitespace-nowrap">
              <Home size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
              <span>Domů</span>
            </Link>
            <Link href="/o-mne" className="flex items-center space-x-0.5 sm:space-x-1 px-1.5 sm:px-2 py-1 hover:text-gray-300 transition-colors whitespace-nowrap">
              <User size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
              <span>O mně</span>
            </Link>
            <Link
              href="/projekty"
              className="flex items-center space-x-0.5 sm:space-x-1 px-1.5 sm:px-2 py-1 hover:text-gray-300 transition-colors whitespace-nowrap"
            >
              <FolderKanban size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
              <span>Projekty</span>
            </Link>
            <Link href="/blog" className="flex items-center space-x-0.5 sm:space-x-1 px-1.5 sm:px-2 py-1 hover:text-gray-300 transition-colors whitespace-nowrap">
              <FileText size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
              <span>Blog</span>
            </Link>
            <Link
              href="/galerie"
              className="flex items-center space-x-0.5 sm:space-x-1 px-1.5 sm:px-2 py-1 hover:text-gray-300 transition-colors whitespace-nowrap"
            >
              <ImageIcon size={14} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
              <span>Galerie</span>
            </Link>
          </div>
          <div className="hidden sm:block sm:absolute sm:right-2 md:right-4 sm:top-2 md:top-3">
            <CurrentTime />
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-2 sm:px-4 flex-1 relative z-10 flex flex-col justify-center overflow-y-auto py-4">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-2 sm:mb-3 md:mb-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-gray-700 overflow-hidden mb-2 sm:mb-3"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-indigo-600/20 rounded-full"
              style={{
                transform: `scale(1.1) translateY(${scrollY * 0.02}px)`,
              }}
            />
            <Image
              src="/avatar.webp"
              alt="Profile"
              width={96}
              height={96}
              className="object-cover relative z-10"
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-0.5 sm:mb-1 text-center"
          >
            Matěj Hrabák
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-2 sm:mb-3 text-center px-2"
          >
            Vyberte si profesní zaměření
          </motion.h2>
        </motion.div>

        {/* Info sekce - hned pod profilem */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center max-w-3xl mx-auto px-2 mb-2 sm:mb-3 md:mb-4"
        >
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2 text-gray-200">Profesionální služby na míru</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-2 sm:mb-3">
            Ať už hledáte spolehlivé pojištění nebo moderní webové stránky, nabízím řešení přizpůsobená vašim
            potřebám. Vyberte si profesní zaměření a objevte, jak vám mohu pomoci.
          </p>
          
          {/* Animované tečky */}
          <div className="flex justify-center space-x-2 mb-2 sm:mb-3">
            <motion.div
              className="w-2 h-2 rounded-full bg-red-500"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-indigo-500"
              animate={{ scale: [1.3, 1, 1.3] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            />
          </div>
        </motion.section>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 max-w-5xl mx-auto w-full px-2">
          {/* Insurance Advisor Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-red-600/5 rounded-lg transform -rotate-1" />
            <Link
              href="/pojistovaci-poradce"
              className="relative z-10 border border-gray-800 rounded-lg p-2 sm:p-3 md:p-4 lg:p-6 flex flex-col items-center text-center hover:bg-gray-800/20 transition-all hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 bg-[#111827]/50 backdrop-blur-sm"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-1 sm:mb-2 md:mb-3 text-red-500"
              >
                <Shield size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </motion.div>
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-1.5 md:mb-2">Pojišťovací poradce</h2>
              <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 md:line-clamp-3">
                Zkušený poradce specializující se na transparentní a na míru šitá pojišťovací řešení. Osobní přístup,
                profesionální jednání a důraz na ochranu klientova majetku
              </p>
            </Link>
          </motion.div>

          {/* Web Developer Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-indigo-600/5 rounded-lg transform rotate-1" />
            <Link
              href="/webovy-vyvojar"
              className="relative z-10 border border-gray-800 rounded-lg p-2 sm:p-3 md:p-4 lg:p-6 flex flex-col items-center text-center hover:bg-gray-800/20 transition-all hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 bg-[#111827]/50 backdrop-blur-sm"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-1 sm:mb-2 md:mb-3 text-indigo-500"
              >
                <Code size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </motion.div>
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-1 sm:mb-1.5 md:mb-2">Webový vývojář</h2>
              <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 md:line-clamp-3">
                Tvůrce moderních a responzivních webových stránek s důrazem na uživatelský zážitek. Specializace na
                vývoj profesionálních webů a aplikací pro jednotlivce i firmy.
              </p>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
