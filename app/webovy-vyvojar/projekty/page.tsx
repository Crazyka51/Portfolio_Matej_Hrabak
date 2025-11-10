"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"
import PageTransition from "@/app/components/page-transition"


export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#010714] text-white">
        <WebDevNavbar />

        <main className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Moje projekty</h1>
            <p className="text-xl text-gray-300">
              Přehled webových projektů, které jsem vytvořil pro klienty a přátele během své 14leté praxe. Od
              jednoduchých prezentačních webů až po komplexnější řešení s vlastním redakčním systémem.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </main>

        <WebDevFooter />
      </div>
    </PageTransition>
  )
}

function FilterButton({
  children,
  active,
  onClick,
}: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative px-4 py-2 rounded-lg transition-colors ${
        active ? "text-white" : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
      }`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="activeFilterIndicator"
          className="absolute inset-0 bg-blue-600 rounded-lg -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all group"
    >
      {/* Image Section */}
      {project.detailUrl ? (
        <Link href={project.detailUrl}>
          <div className="relative h-48">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
          </div>
        </Link>
      ) : (
        <div className="relative h-48">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <span className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs">{project.category}</span>
          <span className="mx-2">•</span>
          <span>{project.year}</span>
        </div>
        
        {project.detailUrl ? (
          <Link href={project.detailUrl}>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
          </Link>
        ) : (
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        )}
        
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, i: number) => (
              <span key={i} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="GitHub repozitář"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="Navštívit web"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Aktualizované projekty
const allProjects = [
  {
    title: "Salon Zuza",
    description: "Webové stránky pro kadeřnický salon s online rezervačním systémem a galerií prací.",
    image: "/images/salonzuza-project.webp",
    category: "Firemní",
    year: "2024/2025",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: null,
    live: "https://salonzuza.cz",
    detailUrl: "/webovy-vyvojar/projekty/salon-zuza",
  },
  {
    title: "Pavel Fišer - zastupitel MČ Praha 4",
    description: "Osobní webové stránky pro zastupitele MČ Praha 4 s prezentací aktivit a kontaktními informacemi.",
    image: "/images/fiserpavel-project.webp",
    category: "Osobní",
    year: "2025",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Crazyka51/pavelfweb",
    live: "https://fiserpavel.cz",
    detailUrl: "/webovy-vyvojar/projekty/pavel-fiser",
  },
  {
    title: "Straw Stav s.r.o.",
    description: "Firemní prezentace pro stavební společnost specializující se na ekologické stavby ze slámy.",
    image: "/images/strawstav-project.webp",
    category: "Firemní",
    year: "2025",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: null,
    live: "https://strawstav.cz",
    detailUrl: "/webovy-vyvojar/projekty/strawstav",
  },
  {
    title: "Matěj Hrabák",
    description: "Osobní web s dvojím zaměřením - pojišťovací poradce a webový vývojář s vlastním redakčním systémem.",
    image: "/images/matejhrabak_portfolio.webp",
    category: "Osobní",
    year: "2025",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Crazyka51/finalweb",
    live: "https://matejhrabak.cz",
    detailUrl: "/webovy-vyvojar/projekty/moje-portfolio",
  },
  
]