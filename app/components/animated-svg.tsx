"use client"

import { motion } from "framer-motion"

interface AnimatedSvgProps {
  className?: string
  color?: string
  width?: number
  height?: number
}

export default function AnimatedSvg({ className = "", color = "#fff", width = 100, height = 100 }: AnimatedSvgProps) {
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animovaný kruh */}
      <motion.circle
        cx="50"
        cy="50"
        r="30"
        stroke={color}
        strokeWidth="2"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Animované čáry */}
      <motion.path
        d="M20,50 L80,50"
        stroke={color}
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <motion.path
        d="M50,20 L50,80"
        stroke={color}
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />

      {/* Animované body */}
      <motion.circle
        cx="50"
        cy="50"
        r="5"
        fill={color}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      />
    </motion.svg>
  )
}
