"use client"

import { SpeedInsights } from "@vercel/speed-insights/next"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Zap, ZapOff } from "lucide-react"
import dynamic from "next/dynamic"
import { usePerformance } from "./context/performance-context"

// Dynamický import stránky webového vývojáře
const WebDeveloperPage = dynamic(() => import("./webovy-vyvojar/page"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-[#050A14] text-white flex items-center justify-center">
      <div className="animate-pulse">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  )
})

export default function HomePage() {
  const [showPerformanceChoice, setShowPerformanceChoice] = useState(false)
  const { performanceMode, setPerformanceMode, isLoading } = usePerformance()

  useEffect(() => {
    if (isLoading) return
    
    // Kontrola, zda už uživatel vybral preferenci
    if (performanceMode) {
      // Už má vybraný mód, necháme zobrazit obsah
      setShowPerformanceChoice(false)
    } else {
      // Pokud nemá uložený mód, zobraz výběr
      setTimeout(() => setShowPerformanceChoice(true), 100)
    }
  }, [performanceMode, isLoading])

  const handlePerformanceChoice = (mode: "high" | "low") => {
    setPerformanceMode(mode)
    setShowPerformanceChoice(false)
  }

  // Pokud načítáme, zobraz loader
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050A14] text-white flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <SpeedInsights />
      </div>
    )
  }

  // Pokud je performance vybraný, zobraz stránku webového vývojáře
  if (performanceMode) {
    return <WebDeveloperPage />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
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
        <SpeedInsights />
      </div>
    )
  }

  // Zatímco se rozhoduje nebo načítá, zobraz prázdnou stránku
  return (
    <div className="min-h-screen bg-[#050A14] text-white flex items-center justify-center">
      <div className="animate-pulse">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <SpeedInsights />
    </div>
  )
}
