"use client"

import Link from "next/link"
import { Home, FolderKanban, PhoneCall, Newspaper, BotMessageSquare } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import Clock from "./clock"
import { Icon } from "@iconify/react"


export default function WebDevNavbar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

const navItems = [
  { path: "/", icon: <Home size={18} />, label: "Úvodní stránka" },
  { path: "/webovy-vyvojar", icon: <BotMessageSquare size={18} />, label: "Domů - Vývojář" },
  { path: "/webovy-vyvojar/o-mne", icon: <Icon icon="lucide-lab:face-alien" width={18} height={18} />, label: "O mně" },
  { path: "/webovy-vyvojar/projekty", icon: <FolderKanban size={18} />, label: "Projekty" },
  { path: "/webovy-vyvojar/kontakt", icon: <PhoneCall size={18} />, label: "Kontakt" },
  { path: "/webovy-vyvojar/blog", icon: <Newspaper size={18} />, label: "Blog" },
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
        <div className="absolute right-4 top-4">
          <Clock />
        </div>
      </nav>
    </header>
  )
}
