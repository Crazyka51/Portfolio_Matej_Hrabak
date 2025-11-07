"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react"

export type ToastType = "success" | "error" | "info" | "warning"

interface ToastProps {
  message: string
  type: ToastType
  duration?: number
  onClose: () => void
}

export default function Toast({ message, type, duration = 5000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300) // Allow exit animation to complete
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-400" />
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-400" />
      case "info":
        return <Info className="h-5 w-5 text-blue-400" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-400" />
    }
  }

  const getBgColor = () => {
    switch (type) {
      case "success":
        return "bg-green-900/20 border-green-500/30"
      case "error":
        return "bg-red-900/20 border-red-500/30"
      case "info":
        return "bg-blue-900/20 border-blue-500/30"
      case "warning":
        return "bg-yellow-900/20 border-yellow-500/30"
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-4 right-4 z-50 flex items-center p-4 rounded-lg shadow-lg border ${getBgColor()} backdrop-blur-sm max-w-md`}
        >
          <div className="flex-shrink-0 mr-3">{getIcon()}</div>
          <div className="flex-1 mr-2">
            <p className="text-white">{message}</p>
          </div>
          <button
            onClick={() => {
              setIsVisible(false)
              setTimeout(onClose, 300)
            }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
