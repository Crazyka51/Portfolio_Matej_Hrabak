import type React from "react"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import { BackgroundBeams } from "@/app/components/background-beams"

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
      {/* Background effects */}
      <BackgroundBeams className="absolute inset-0 -z-10" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 relative z-10">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
