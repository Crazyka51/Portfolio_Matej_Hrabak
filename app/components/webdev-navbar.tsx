"use client"

import Link from "next/link"
import { Home, FolderKanban, PhoneCall, Newspaper, BotMessageSquare, UnfoldHorizontal, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Clock from "./clock"
import { Icon } from "@iconify/react"


export default function WebDevNavbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

const navItems = [
  
  { path: "/webovy-vyvojar", icon: <BotMessageSquare size={18} />, label: "Domů" },
  { path: "/webovy-vyvojar/o-mne", icon: <Icon icon="lucide-lab:face-alien" width={18} height={18} />, label: "O mně" },
  { path: "/webovy-vyvojar/projekty", icon: <FolderKanban size={18} />, label: "Projekty" },
  { path: "/webovy-vyvojar/kontakt", icon: <PhoneCall size={18} />, label: "Kontakt" },
  { path: "/webovy-vyvojar/blog", icon: <Newspaper size={18} />, label: "Blog" },
]

  return (
    <header className="container mx-auto px-4 py-4 relative">
      <nav className="flex justify-center items-center">
        {/* Desktop Navigation - skryté na mobilu */}
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
                  layoutId="activeWebDevNavIndicator"
                  className="absolute inset-0 bg-blue-900/50 rounded-md -z-10"
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
          className="lg:hidden flex items-center space-x-2 bg-[#111827]/60 px-4 py-2 rounded-full backdrop-blur-sm text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="text-sm">Menu</span>
        </button>

        {/* Clock - vždy viditelné */}
        <div className="absolute right-4 top-4">
          <Clock />
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-x-0 top-20 z-50 mx-4"
          >
            <div className="bg-[#111827]/95 backdrop-blur-md rounded-lg border border-gray-700 shadow-xl overflow-hidden">
              <div className="flex flex-col py-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-6 py-3 transition-colors ${
                      isActive(item.path)
                        ? "bg-blue-900/50 border-l-4 border-blue-500 text-white"
                        : "text-gray-400 hover:bg-gray-700/30 hover:text-gray-300"
                    }`}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className="text-base">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
