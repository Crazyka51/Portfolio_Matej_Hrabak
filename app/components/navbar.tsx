"use client"

import Link from "next/link"
import { Home, User, FolderKanban, FileText, UnfoldHorizontal, HouseHeart, IdCard, Menu, X } from "lucide-react"
import Clock from "./clock"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { path: "/", icon: <UnfoldHorizontal size={18} />, label: "Úvodní stránka" },
    { path: "/pojistovaci-poradce", icon: <HouseHeart size={18} />, label: "Domů" },
    { path: "/o-mne", icon: <IdCard size={18} />, label: "O mně" },
    { path: "/nabizene-sluzby", icon: <FolderKanban size={18} />, label: "Služby" },
    { path: "/blog", icon: <FileText size={18} />, label: "Blog" },
    { path: "/schuzka", icon: <FileText size={18} />, label: "Schůzka" },
  ]

  return (
    <header className="container mx-auto px-4 py-4">
      <nav className="flex justify-between items-center lg:justify-center">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-4 bg-[#111827]/60 px-6 py-2 rounded-full backdrop-blur-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`relative flex items-center space-x-1 px-2 py-1 transition-colors ${
                isActive(item.path) ? "text-white" : "text-gray-400 hover:text-gray-300"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
              {isActive(item.path) && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 bg-gray-700/50 rounded-md -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden bg-[#111827]/60 p-2 rounded-full backdrop-blur-sm z-50"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Clock - visible on all screens */}
        <div className="absolute right-4 top-4">
          <Clock />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-20 mx-4 bg-[#111827]/95 backdrop-blur-md rounded-2xl border border-gray-800 shadow-2xl z-40 overflow-hidden"
          >
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-6 py-4 transition-colors ${
                    isActive(item.path)
                      ? "text-white bg-gray-700/50 border-l-4 border-red-500"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/30"
                  }`}
                >
                  {item.icon}
                  <span className="text-base font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
