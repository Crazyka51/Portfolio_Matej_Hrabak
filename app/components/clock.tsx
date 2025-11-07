"use client"

import { useState, useEffect } from "react"

/**
 * Props for the Clock component
 * @typedef {Object} ClockProps
 * @property {string} [className] - Optional CSS class to apply to the clock
 */
interface ClockProps {
  className?: string
}

/**
 * @component Clock
 * @description A simple clock component that displays the current time and updates every second.
 * The time is formatted according to the Czech locale (24-hour format).
 *
 * @param {ClockProps} props - Component props
 * @param {string} [props.className='text-sm text-gray-400'] - CSS class to apply to the clock
 *
 * @example
 * ```tsx
 * import Clock from "@/app/components/clock"
 *
 * export default function Header() {
 *   return (
 *     <header>
 *       <div className="flex justify-between">
 *         <h1>My Website</h1>
 *         <Clock className="text-white" />
 *       </div>
 *     </header>
 *   )
 * }
 * ```
 *
 * @returns {JSX.Element} A div containing the current time
 */
export default function Clock({ className = "text-sm text-gray-400" }: ClockProps) {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    // Function to format time with leading zeros
    const formatTime = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, "0")
      const minutes = String(now.getMinutes()).padStart(2, "0")
      const seconds = String(now.getSeconds()).padStart(2, "0")
      return `${hours}:${minutes}:${seconds}`
    }

    // Set initial time
    setTime(formatTime())

    // Update time every second
    const interval = setInterval(() => {
      setTime(formatTime())
    }, 1000)

    // Clean up interval on component unmount
    return () => clearInterval(interval)
  }, [])

  return <div className={className}>{time}</div>
}
