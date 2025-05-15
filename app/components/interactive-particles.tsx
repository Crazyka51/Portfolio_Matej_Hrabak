"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
}

export default function InteractiveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)

  // Konfigurace částic
  const config = {
    particleCount: 100,
    baseSize: 2,
    sizeVariation: 1,
    speed: 0.5,
    colors: ["#ff4d4d", "#4d79ff", "#4dffa6", "#ffff4d"],
    interactionRadius: 100,
    interactionStrength: 0.05,
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Nastavení plného rozměru okna
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Vytvoření částic
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < config.particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: config.baseSize + Math.random() * config.sizeVariation,
          speedX: (Math.random() - 0.5) * config.speed,
          speedY: (Math.random() - 0.5) * config.speed,
          color: config.colors[Math.floor(Math.random() * config.colors.length)],
          opacity: 0.1 + Math.random() * 0.3,
        })
      }
    }

    initParticles()

    // Sledování pohybu myši
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const handleMouseEnter = () => setIsMouseInCanvas(true)
    const handleMouseLeave = () => setIsMouseInCanvas(false)

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseenter", handleMouseEnter)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    // Animační smyčka
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Vykreslení a aktualizace částic
      particlesRef.current.forEach((particle) => {
        // Interakce s myší
        if (isMouseInCanvas) {
          const dx = mousePosition.x - particle.x
          const dy = mousePosition.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < config.interactionRadius) {
            const force = (config.interactionRadius - distance) / config.interactionRadius
            particle.speedX += (dx / distance) * force * config.interactionStrength
            particle.speedY += (dy / distance) * force * config.interactionStrength
          }
        }

        // Omezení maximální rychlosti
        const maxSpeed = 2
        const currentSpeed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY)
        if (currentSpeed > maxSpeed) {
          particle.speedX = (particle.speedX / currentSpeed) * maxSpeed
          particle.speedY = (particle.speedY / currentSpeed) * maxSpeed
        }

        // Pohyb částic
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Tlumení rychlosti
        particle.speedX *= 0.99
        particle.speedY *= 0.99

        // Odraz od okrajů
        if (particle.x < 0) {
          particle.x = 0
          particle.speedX *= -1
        } else if (particle.x > canvas.width) {
          particle.x = canvas.width
          particle.speedX *= -1
        }

        if (particle.y < 0) {
          particle.y = 0
          particle.speedY *= -1
        } else if (particle.y > canvas.height) {
          particle.y = canvas.height
          particle.speedY *= -1
        }

        // Vykreslení částice
        ctx.beginPath()
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseenter", handleMouseEnter)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-[#050A14]/80" />
    </div>
  )
}
