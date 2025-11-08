"use client"

import type React from "react"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import { motion } from "framer-motion"

/**
 * @component BlogLayout
 * @description Layout component for all blog pages. Provides consistent styling,
 * navigation, and background effects across the blog section.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to render within the layout
 *
 * @example
 * This component is automatically used by Next.js for all pages in the /blog directory.
 * You don't need to explicitly import or use it in your blog pages.
 *
 * @returns {JSX.Element} A consistent layout wrapper for blog content
 */
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050A14] text-white relative">
      {/* Pozadí s gradientem a animovanými prvky */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hlavní gradient */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/20 to-transparent"
          style={{ opacity: 0.4 }}
        />

        {/* Animované kruhy */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-red-600/20 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl"
        />
         
        {/* Mřížka na pozadí */}
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNzAgMEgwdjYwaDMwVjB6TTI5IDFIMXYyOGgyOFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMEgzMHY2MGgzMFYwek01OSAxSDMxdjI4aDI4VjF6IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjxwYXRoIGQ9Ik0zMCAzMEgwdjMwaDMwVjMwek0yOSAzMUgxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMzBIMzB2MzBoMzBWMzB6TTU5IDMxSDMxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')",
            opacity: 0.2
          }}
        />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      {children}

      {/* Footer */}
      <Footer />
    </div>
  )
}
