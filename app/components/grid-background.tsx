"use client"

import { useEffect, useRef } from "react"

interface GridBackgroundProps {
  color?: string
  opacity?: number
  size?: number
}

export default function GridBackground({ color = "#FFFFFF", opacity = 0.05, size = 60 }: GridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window
      const { devicePixelRatio = 1 } = window

      canvas.width = innerWidth * devicePixelRatio
      canvas.height = innerHeight * devicePixelRatio

      canvas.style.width = `${innerWidth}px`
      canvas.style.height = `${innerHeight}px`

      ctx.scale(devicePixelRatio, devicePixelRatio)

      drawGrid()
    }

    const drawGrid = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = color
      ctx.globalAlpha = opacity
      ctx.lineWidth = 1

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += size) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += size) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    // Initial setup
    resizeCanvas()

    // Handle window resize
    window.addEventListener("resize", resizeCanvas)

    // Handle scroll to extend the grid if needed
    const handleScroll = () => {
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
      )

      if (docHeight > canvas.height / (window.devicePixelRatio || 1)) {
        canvas.height = docHeight * (window.devicePixelRatio || 1)
        canvas.style.height = `${docHeight}px`
        drawGrid()
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Check document height on load
    handleScroll()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [color, opacity, size])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />
}
