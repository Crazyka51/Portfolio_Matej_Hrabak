"use client"

import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  charDelay?: number
}

export default function AnimatedText({ text, className = "", delay = 0.4, charDelay = 0.1 }: AnimatedTextProps) {
  return (
    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={className}>
      {Array.from(text).map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + index * charDelay }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  )
}
