"use client"

import { useState, useEffect } from "react"
import { formatCurrentTime } from "@/app/utils/format-time"

interface CurrentTimeProps {
  className?: string
}

export default function CurrentTime({ className = "text-sm text-gray-400" }: CurrentTimeProps) {
  const [time, setTime] = useState<string>(() => formatCurrentTime())

  useEffect(() => {
    // Aktualizace času každou sekundu
    const timer = setInterval(() => {
      setTime(formatCurrentTime())
    }, 1000)

    // Vyčištění intervalu při unmount komponenty
    return () => clearInterval(timer)
  }, [])

  return <div className={className}>{time}</div>
}
