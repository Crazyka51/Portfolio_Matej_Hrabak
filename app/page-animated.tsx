"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Shield, Code, Home, User, FolderKanban, FileText, ImageIcon } from "lucide-react"
import CurrentTime from "@/app/components/current-time"

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
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl"
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
            <Link href="/o-mne" className="flex items-center space-x-1 px-2 py-1 hover:text-gray-300 transition-colors">
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

      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-36 h-36 rounded-full border-2 border-gray-700 overflow-hidden mb-8"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-indigo-600/20 rounded-full"
              style={{
                transform: `scale(1.1) translateY(${scrollY * 0.02}px)`,
              }}
            />
            <Image
              src="/placeholder.svg?height=144&width=144"
              alt="Profile"
              width={144}
              height={144}
              className="object-cover relative z-10"
              priority
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-5xl font-bold mb-2"
          >
            Matěj Hrabák
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-xl text-gray-300 mb-8"
          >
            Vyberte si profesní zaměření
          </motion.h2>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
              className="relative z-10 border border-gray-800 rounded-lg p-10 flex flex-col items-center text-center hover:bg-gray-800/20 transition-all hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 bg-[#111827]/50 backdrop-blur-sm"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-6 text-red-500"
              >
                <Shield size={48} />
              </motion.div>
              <h2 className="text-2xl font-semibold mb-4">Pojišťovací poradce</h2>
              <p className="text-gray-400">
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
              className="relative z-10 border border-gray-800 rounded-lg p-10 flex flex-col items-center text-center hover:bg-gray-800/20 transition-all hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 bg-[#111827]/50 backdrop-blur-sm"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-6 text-indigo-500"
              >
                <Code size={48} />
              </motion.div>
              <h2 className="text-2xl font-semibold mb-4">Webový vývojář</h2>
              <p className="text-gray-400">
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
