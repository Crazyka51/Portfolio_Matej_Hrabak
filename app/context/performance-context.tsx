"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type PerformanceMode = "high" | "low" | null

interface PerformanceContextType {
  performanceMode: PerformanceMode
  setPerformanceMode: (mode: "high" | "low") => void
  isLoading: boolean
}

const PerformanceContext = createContext<PerformanceContextType | undefined>(undefined)

export function PerformanceProvider({ children }: { children: ReactNode }) {
  const [performanceMode, setPerformanceModeState] = useState<PerformanceMode>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Načti uložené nastavení z localStorage
    const savedMode = localStorage.getItem("performanceMode") as "high" | "low" | null
    setPerformanceModeState(savedMode)
    setIsLoading(false)
  }, [])

  const setPerformanceMode = (mode: "high" | "low") => {
    localStorage.setItem("performanceMode", mode)
    setPerformanceModeState(mode)
  }

  return (
    <PerformanceContext.Provider value={{ performanceMode, setPerformanceMode, isLoading }}>
      {children}
    </PerformanceContext.Provider>
  )
}

export function usePerformance() {
  const context = useContext(PerformanceContext)
  if (context === undefined) {
    throw new Error("usePerformance must be used within a PerformanceProvider")
  }
  return context
}
