"use client"

import { motion } from "framer-motion"

interface LoadingSpinnerProps {
  size?: number
  color?: string
  thickness?: number
}

export default function LoadingSpinner({ size = 40, color = "text-blue-500", thickness = 4 }: LoadingSpinnerProps) {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className={`rounded-full border-t-transparent ${color} border-solid`}
        style={{
          width: size,
          height: size,
          borderWidth: thickness,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}
