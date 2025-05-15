"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * Props for the BackgroundBeams component
 * @typedef {Object} BackgroundBeamsProps
 * @property {string} [className] - Optional CSS class to apply to the component
 */
interface BackgroundBeamsProps {
  className?: string
}

/**
 * @component BackgroundBeams
 * @description A decorative background component that creates a red-themed animated
 * background with gradient overlays, animated circles, and a grid pattern.
 *
 * @param {BackgroundBeamsProps} props - Component props
 * @param {string} [props.className] - Optional CSS class to apply to the component
 *
 * @example
 * ```tsx
 * import { BackgroundBeams } from "@/app/components/background-beams"
 *
 * export default function Page() {
 *   return (
 *     <div className="relative min-h-screen">
 *       <BackgroundBeams className="absolute inset-0 -z-10" />
 *       <div className="relative z-10">
 *         <h1>Content goes here</h1>
 *       </div>
 *     </div>
 *   )
 * }
 * ```
 *
 * @returns {JSX.Element} An animated background with red-themed gradients and effects
 */
export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      {/* Red gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-[#050A14] z-0"></div>

      {/* Animated circles */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNzAgMEgzMHY2MGgzMFYwek01OSAxSDMxdjI4aDI4VjF6IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjxwYXRoIGQ9Ik0zMCAzMEgwdjMwaDMwVjMwek0yOSAzMUgxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMzBIMzB2MzBoMzBWMzB6TTU5IDMxSDMxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')`,
        }}
      />
    </div>
  )
}
