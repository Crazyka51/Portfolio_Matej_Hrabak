"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import Navbar from "@/app/components/navbar"
import {
  Home,
  User,
  FolderKanban,
  FileText,
  Github,
  Mail,
  Shield,
  TrendingUp,
  CheckCircle,
  Calendar,
  ChevronRight,
} from "lucide-react"
import Clock from "@/app/components/clock"
import ServiceCarousel from "@/app/components/service-carousel"

export default function InsuranceAdvisorPage() {
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

  // Statistiky pro animaci
  const stats = [
    { value: 95, label: "Spokojených klientů", symbol: "%" },
    { value: 3, label: "Roky zkušeností", symbol: "+" },
    { value: 500, label: "Uzavřených smluv", symbol: "+" },
  ]

  return (
    <div className="min-h-screen bg-[#050A14] text-white relative">
      {/* Pozadí s gradientem a animovanými prvky */}
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
      < Navbar />
      
      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section s paralaxovým efektem */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-64 h-80 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-900/20 rounded-lg transform -rotate-3 scale-105" />
            <Image
              src="/avatar.webp"
              alt="Matěj Hrabák"
              width={256}
              height={1000}
              className="object-cover rounded-lg shadow-2xl relative z-10"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
              }}
              priority
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600/20 rounded-full blur-xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <div className="flex items-center mb-4">
              <Shield className="text-red-500 mr-2" size={24} />
              <span className="text-red-400 font-medium">Generali Česká pojišťovna</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Váš poradce a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                celoživotní partner
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Jsem Matěj Hrabák, poradce Generali České pojišťovny, kde pomáhám chránit Vaše zdraví, finance a majetek.
              Společně najdeme nejlepší řešení.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/schuzka"
                className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-red-600/20 hover:shadow-xl"
              >
                <Calendar className="mr-2" size={18} />
                Domluvit schůzku
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Statistiky s animovanými čísly */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#111827]/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 text-center"
            >
              <CountUp
                to={stat.value}
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600"
                suffix={stat.symbol}
              />
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Services Section */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <div className="flex items-center justify-center mb-12">
            <TrendingUp className="text-red-500 mr-3" size={24} />
            <h2 className="text-3xl font-bold">Moje služby</h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <ServiceCarousel />
          </div>
        </motion.div>

        {/* Výhody spolupráce */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center mb-12">
            <CheckCircle className="text-red-500 mr-3" size={24} />
            <h2 className="text-3xl font-bold">Proč se mnou spolupracovat</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              title="Nezávislé poradenství"
              description="Nabízím produkty od různých pojišťoven, vždy vyberu to nejlepší pro vaše potřeby."
              delay={0}
            />
            <BenefitCard
              title="Osobní přístup"
              description="Každý klient je jedinečný, proto ke každému přistupuji individuálně a s respektem."
              delay={0.2}
            />
            <BenefitCard
              title="Dlouhodobá spolupráce"
              description="Jsem tu pro vás nejen při sjednání pojištění, ale i při řešení pojistných událostí."
              delay={0.4}
            />
          </div>
        </motion.div>

        {/* CTA sekce */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-red-900/30 to-red-700/20 p-8 md:p-12 rounded-2xl border border-red-900/20 text-center backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Připraveni začít?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Domluvte si nezávaznou konzultaci a společně najdeme nejlepší řešení pro vaše potřeby.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/schuzka"
                className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-red-600/20 hover:shadow-xl text-lg"
              >
                Domluvit schůzku <ChevronRight className="ml-2" size={18} />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>

      
    </div>
  )
}

// Benefit Card Component
function BenefitCard({ title, description, delay = 0 }: { title: string; description: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-[#111827]/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
    >
      <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

// Animovaný CountUp komponent
function CountUp({ to, className, suffix = "" }: { to: number; className?: string; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = to
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      setCount(Math.floor(start))

      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [to])

  return (
    <div className={className}>
      {count}
      {suffix}
    </div>
  )
}
