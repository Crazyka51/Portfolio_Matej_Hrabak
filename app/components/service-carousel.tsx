"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Shield,
  TrendingUp,
  Umbrella,
  Home,
  Heart,
  Briefcase,
  Plane,
  CreditCard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

/**
 * @component ServiceCarousel
 * @description A rotating carousel that displays insurance services with icons.
 * Features automatic rotation, manual navigation, and hover pause functionality.
 * The carousel creates a wheel-like effect with smooth transitions.
 *
 * @example
 * ```tsx
 * import ServiceCarousel from "@/app/components/service-carousel"
 *
 * export default function ServicesSection() {
 *   return (
 *     <section>
 *       <h2>Our Services</h2>
 *       <ServiceCarousel />
 *     </section>
 *   )
 * }
 * ```
 *
 * @returns {JSX.Element} A responsive service carousel with navigation controls
 */
export default function ServiceCarousel() {
  /**
   * Current position index in the carousel
   * This is a floating point number to allow for smooth animation
   */
  const [currentIndex, setCurrentIndex] = useState(0)

  /**
   * Whether the carousel rotation is paused (e.g., on hover)
   */
  const [isPaused, setIsPaused] = useState(false)

  /**
   * Speed of rotation - very gentle for smooth effect
   * Lower values create slower, more subtle rotation
   */
  const rotationSpeed = 0.01

  /**
   * Reference to the carousel container element
   */
  const carouselRef = useRef<HTMLDivElement>(null)

  /**
   * Service items to display in the carousel
   * Each service has an icon and title
   */
  const services = [
    { icon: <Shield className="text-red-500" size={24} />, title: "Pojištění vozidel" },
    { icon: <TrendingUp className="text-red-500" size={24} />, title: "Investice a spoření" },
    { icon: <Umbrella className="text-red-500" size={24} />, title: "Pojištění majetku" },
    { icon: <Home className="text-red-500" size={24} />, title: "Pojištění domácnosti" },
    { icon: <Heart className="text-red-500" size={24} />, title: "Životní pojištění" },
    { icon: <Briefcase className="text-red-500" size={24} />, title: "Pojištění podnikatelů" },
    { icon: <Plane className="text-red-500" size={24} />, title: "Cestovní pojištění" },
    { icon: <CreditCard className="text-red-500" size={24} />, title: "Pojištění plateb" },
  ]

  // Create a circular array for continuous rotation
  const extendedServices = [...services, ...services, ...services]

  // Set up automatic rotation
  useEffect(() => {
    if (isPaused) return

    // Use a smaller interval for smoother animation
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + rotationSpeed) % services.length)
    }, 50)

    return () => clearInterval(timer)
  }, [services.length, isPaused, rotationSpeed])

  /**
   * Handle click on previous button
   * Moves the carousel backward by one item
   */
  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1
      return newIndex < 0 ? services.length - Math.abs(newIndex % services.length) : newIndex
    })
  }

  /**
   * Handle click on next button
   * Moves the carousel forward by one item
   */
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  /**
   * Creates a URL-friendly slug from a text string
   * @param {string} text - The text to convert to a slug
   * @returns {string} A URL-friendly slug
   */
  const createSlug = (text: string): string => {
    let slug = text.toLowerCase()
    slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    slug = slug.replace(/\s+/g, "-")
    slug = slug.replace(/[^a-z0-9-]/g, "")
    return slug
  }

  // Zvýraznění rotujících služeb přidáním většího kontrastu a animace
  return (
    <div
      className="relative py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={carouselRef}
    >
      <div className="overflow-hidden mx-auto">
        <motion.div
          className="flex justify-center"
          style={{
            x: `-${currentIndex * 33.33}%`,
            transition: "transform 0.5s ease",
          }}
        >
          {extendedServices.map((service, index) => {
            // Vypočítání pozice v kolečku
            const position = (index - currentIndex) % extendedServices.length

            return (
              <motion.div
                key={`${service.title}-${index}`}
                className="w-[calc(33.33%-1rem)] mx-2 flex-shrink-0"
                style={{
                  opacity: position >= 0 && position < 3 ? 1 : 3, // Snížení opacity pro méně viditelné prvky
                  scale: position >= 0 && position < 3 ? 1.2 : 1, // Zvýšení měřítka pro zvýraznění
                  filter: position >= 0 && position < 3 ? "brightness(2)" : "brightness(1)", // Zvýšení jasu
                  transition: "all 0.5s ease",
                }}
              >
                <Link
                  href={`/sluzby/${createSlug(service.title)}`}
                  className="flex flex-col items-center p-6 bg-[#111827]/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-red-500/30 transition-all shadow-lg hover:shadow-red-600/10"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-red-900/20 rounded-full mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-medium text-center text-white">{service.title}</h3>
                  <div className="mt-4 text-red-500">
                    <ChevronRight size={18} />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Navigační šipky */}
      <button
        onClick={handlePrev}
        className="absolute left0 top-1/2 -translate-y-1/2 -translate-x-6 bg-red-600/80 hover:bg-red-700 text-white rounded-full p-2 shadow-lg z-10 transition-all hover:scale-110"
        aria-label="Předchozí služba"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-red-600/80 hover:bg-red-700 text-white rounded-full p-2 shadow-lg z-10 transition-all hover:scale-110"
        aria-label="Další služba"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}
