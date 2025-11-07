"use client"
import { useEffect, useRef } from "react"

/**
 * Props for the AnimatedBackground component
 * @typedef {Object} AnimatedBackgroundProps
 * @property {'insurance' | 'webdev' | 'landing'} [variant='insurance'] - The theme variant to use
 * @property {'low' | 'medium' | 'high'} [intensity='medium'] - The intensity of the animation
 */
interface AnimatedBackgroundProps {
  variant?: "insurance" | "webdev" | "landing"
  intensity?: "low" | "medium" | "high"
}

/**
 * @component AnimatedBackground
 * @description A canvas-based animated background with floating particles.
 * Different variants and intensities can be configured for different sections of the website.
 *
 * @param {AnimatedBackgroundProps} props - Component props
 * @param {'insurance' | 'webdev' | 'landing'} [props.variant='insurance'] - The theme variant to use
 * @param {'low' | 'medium' | 'high'} [props.intensity='medium'] - The intensity of the animation
 *
 * @example
 * ```tsx
 * import AnimatedBackground from "@/app/components/animated-background"
 *
 * export default function Page() {
 *   return (
 *     <div className="min-h-screen">
 *       <AnimatedBackground variant="insurance" intensity="medium" />
 *       <div className="relative z-10">
 *         <h1>Content goes here</h1>
 *       </div>
 *     </div>
 *   )
 * }
 * ```
 *
 * @returns {JSX.Element} A full-screen canvas with animated particles
 */
export default function AnimatedBackground({ variant = "insurance", intensity = "medium" }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Configuration based on variant
  const config = {
    insurance: {
      colors: ["#1a365d", "#2a4365", "#2c5282", "#2b6cb0"],
      particleCount: intensity === "low" ? 30 : intensity === "medium" ? 50 : 70,
      speed: intensity === "low" ? 0.2 : intensity === "medium" ? 0.3 : 0.4,
      size: intensity === "low" ? 100 : intensity === "medium" ? 150 : 200,
      blur: intensity === "low" ? 80 : intensity === "medium" ? 100 : 120,
    },
    webdev: {
      colors: ["#1a202c", "#2d3748", "#4a5568", "#718096"],
      particleCount: intensity === "low" ? 30 : intensity === "medium" ? 50 : 70,
      speed: intensity === "low" ? 0.2 : intensity === "medium" ? 0.3 : 0.4,
      size: intensity === "low" ? 100 : intensity === "medium" ? 150 : 200,
      blur: intensity === "low" ? 80 : intensity === "medium" ? 100 : 120,
    },
    landing: {
      colors: ["#1a202c", "#2d3748", "#1a365d", "#2a4365"],
      particleCount: intensity === "low" ? 40 : intensity === "medium" ? 60 : 80,
      speed: intensity === "low" ? 0.25 : intensity === "medium" ? 0.35 : 0.45,
      size: intensity === "low" ? 120 : intensity === "medium" ? 170 : 220,
      blur: intensity === "low" ? 90 : intensity === "medium" ? 110 : 130,
    },
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set full window dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create particles
    const selectedConfig = config[variant]
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    for (let i = 0; i < selectedConfig.particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * selectedConfig.size + 50,
        speedX: (Math.random() - 0.5) * selectedConfig.speed,
        speedY: (Math.random() - 0.5) * selectedConfig.speed,
        color: selectedConfig.colors[Math.floor(Math.random() * selectedConfig.colors.length)],
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size)
        gradient.addColorStop(0, particle.color + "40") // 25% opacity
        gradient.addColorStop(1, particle.color + "00") // 0% opacity

        ctx.fillStyle = gradient
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Move particles
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [variant, intensity])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" style={{ filter: `blur(${config[variant].blur}px)` }} />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  )
}
