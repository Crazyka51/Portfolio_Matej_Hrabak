"use client"

import Link from "next/link"
import { Home, User, FolderKanban, FileText } from "lucide-react"
import Clock from "./clock"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navItems = [
    { path: "/", icon: <Home size={18} />, label: "Domů" },
    { path: "/o-mne", icon: <User size={18} />, label: "O mně" },
    { path: "/projekty", icon: <FolderKanban size={18} />, label: "Služby" },
    { path: "/blog", icon: <FileText size={18} />, label: "Blog" },
  ]

  return (
    <header className="container mx-auto px-4 py-4">
      <nav className="flex justify-center">
        <div className="flex space-x-4 bg-[#111827]/60 px-6 py-2 rounded-full backdrop-blur-sm">
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
        <div className="absolute right-4 top-4">
          <Clock />
        </div>
      </nav>
    </header>
  )
}
