"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Code, Database, Layout, Terminal, Github, ExternalLink, ChevronRight } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"
import Clock from "@/app/components/clock"

/**
 * Web Developer Page Component
 *
 * @returns {JSX.Element} The rendered web developer page
 * @description Displays the main page for the web developer section of the website
 */
export default function WebDeveloperPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const parallaxOffset = scrollY * 0.2

  return (
    <div className="min-h-screen bg-[#050A14] text-white relative">
      <WebDevNavbar />

      <main>
        {/* Hero Section with Parallax Effect */}
        <section className="relative h-[80vh] overflow-hidden flex items-center">
          <div
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: `url('/images/web-developer-hero.webp')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `translateY(${parallaxOffset}px)`,
            }}
          />

          <div className="absolute right-4 top-4 text-sm text-gray-400">
           
          </div>

          <div className="container mx-auto px-4 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Webový vývojář se zaměřením na moderní technologie
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Specializuji se na vývoj responzivních webových aplikací s důrazem na uživatelský zážitek a výkon.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center bg-amber-100/10 text-amber-200 px-4 py-2 rounded-full"
                >
                  <Layout className="mr-2 h-5 w-5" />
                  <span>Frontend Development</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center bg-purple-100/10 text-purple-200 px-4 py-2 rounded-full"
                >
                  <Database className="mr-2 h-5 w-5" />
                  <span>Backend Development</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center bg-blue-100/10 text-blue-200 px-4 py-2 rounded-full"
                >
                  <Code className="mr-2 h-5 w-5" />
                  <span>React & Next.js</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Animated code snippet */}
          <div className="hidden lg:block absolute right-10 bottom-20 z-10">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-900/80 p-4 rounded-lg border border-gray-700 backdrop-blur-sm"
            >
              <pre className="text-sm text-green-400 font-mono">
                <TypewriterEffect
                  text={`function Developer() {\n  const skills = [\n    'React',\n    'Next.js',\n    'TypeScript',\n    'Node.js'\n  ];\n\n  return (\n    <Coder skills={skills} />\n  );\n}`}
                />
              </pre>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-gradient-to-b from-[#010714] to-[#0a1428]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-12 flex items-center">
                <Terminal className="mr-3 h-6 w-6 text-blue-400" />
                <span>Moje projekty</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/webovy-vyvojar/projekty"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Zobrazit všechny projekty</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-[#0a1428]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-12 flex items-center">
                <Code className="mr-3 h-6 w-6 text-blue-400" />
                <span>Technologie</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 flex items-center"
                >
                  <div className="w-10 h-10 mr-3 flex items-center justify-center">{tech.icon}</div>
                  <div>
                    <h3 className="font-medium">{tech.name}</h3>
                    <div className="mt-1 bg-gray-700 h-1.5 rounded-full w-full">
                      <div className="h-full rounded-full bg-blue-500" style={{ width: `${tech.level}%` }}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-b from-[#0a1428] to-[#010714]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-12 flex items-center">
                <Layout className="mr-3 h-6 w-6 text-blue-400" />
                <span>Služby</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors"
                >
                  <div className="text-blue-400 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#010714]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 md:p-12 rounded-2xl border border-blue-500/20 text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Začněme společně</h2>
              <p className="text-xl text-gray-300 mb-8">
                Pojďme společně vytvořit něco úžasného. Kontaktujte mě a probereme vaše požadavky.
              </p>
              <Link
                href="/webovy-vyvojar/kontakt"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition-colors text-lg"
              >
                Kontaktujte mě
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <WebDevFooter />
    </div>
  )
}

// TypewriterEffect Component
function TypewriterEffect({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setDisplayedText(text.substring(0, index))
      index++
      if (index > text.length) {
        clearInterval(timer)
      }
    }, 40)

    return () => clearInterval(timer)
  }, [text])

  return <>{displayedText}</>
}

// Project Card Component
function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all group"
    >
      <div className="relative h-48">
        <Link href={project.detailUrl || "#"}>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        </Link>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <span className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded text-xs">{project.category}</span>
          <span className="mx-2">•</span>
          <span>{project.year}</span>
        </div>
        <Link href={project.detailUrl || "#"}>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
        </Link>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
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
                title="View project on GitHub"
              >
                <Github size={18} />
              </a>
            )}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              title="View live project"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Sample Data
const projects = [
  {
    title: "Salon Zuza",
    description: "Moderní webové stránky pro kadeřnický salon s rezervačním systémem a prezentací služeb.",
    image: "/images/salonzuza-project.webp",
    category: "Profesionální portfolio kadeřnického salónu",
    year: "2023",
    technologies: ["PHP", "HTML", "CSS"],
    github: "",
    live: "https://salon-zuza.cz",
    detailUrl: "/webovy-vyvojar/projekty/salon-zuza",
  },
  {
    title: "Pavel Fišer",
    description: "Osobní webové stránky pro zastupitele MČ Praha 4 s prezentací aktivit a kontaktními informacemi.",
    image: "/images/fiserpavel-project.webp",
    category: "Profesionální portfolio",
    year: "2025",
    technologies: ["NextJS", "Node", "CSS" , "TypeScript" , "Tailwind CSS"],
    github: "",
    live: "https://fiserpavel.cz",
    detailUrl: "/webovy-vyvojar/projekty/pavel-fiser",
  },
  {
    title: "Straw Stav",
    description: "Firemní web pro stavební společnost s prezentací služeb, referencí a kontaktním formulářem.",
    image: "/images/strawstav-project.webp",
    category: "Firemní porfolio",
    year: "2025",
    technologies: ["NextJS", "Node", "CSS" , "TypeScript" , "Tailwind CSS"],
    github: "",
    live: "https://strawstav.cz",
    detailUrl: "/webovy-vyvojar/projekty/straw-stav",
  },
  {
    title: "Matěj Hrabák",
    description: "Osobní portfolio a blog s prezentací služeb pojišťovacího poradce a webového vývojáře.",
    image: "/images/matejhrabak_portfolio.webp",
    category: "Portfolio",
    year: "2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "",
    live: "https://matejhrabak.cz",
    detailUrl: "/webovy-vyvojar/projekty/moje-portfolio",
  },
]

const technologies = [
  {
    name: "React",
    level: 95,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-400"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="4"></circle>
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
      </svg>
    ),
  },
  {
    name: "Next.js",
    level: 90,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    level: 95,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-500"
      >
        <path d="M16.5 9.4l-9-5.19"></path>
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
  },
  {
    name: "Node.js",
    level: 95,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-green-500"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    level: 90,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-cyan-400"
      >
        <path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z"></path>
        <line x1="16" y1="8" x2="2" y2="22"></line>
        <line x1="17.5" y1="15" x2="9" y2="15"></line>
      </svg>
    ),
  },
  {
    name: "WordPress",
    level: 95,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-400"
      >
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
        <path d="M12 2a10 10 0 0 1 10 10"></path>
        <path d="M12 2v10l4 4"></path>
        <path d="M12 2v10l-4 4"></path>
      </svg>
    ),
  },
  {
    name: "PHP",
    level: 75,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-purple-400"
      >
        <path d="M14 10v4"></path>
        <path d="M10 10v4"></path>
        <path d="M8 10v4"></path>
        <path d="M6 10v4"></path>
        <path d="M18 10v4"></path>
        <path d="M4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z"></path>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    level: 85,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-blue-600"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
  },
]

const services = [
  {
    title: "Vývoj webových aplikací",
    description: "Tvorba moderních, responzivních a výkonných webových aplikací s využitím nejnovějších technologií.",
    icon: <Code size={36} />,
  },
  {
    title: "Frontend Development",
    description: "Implementace uživatelských rozhraní s důrazem na uživatelský zážitek, přístupnost a optimální výkon.",
    icon: <Layout size={36} />,
  },
  {
    title: "Backend Development",
    description: "Vývoj robustních API a serverových řešení s využitím Node.js, Express a dalších technologií.",
    icon: <Database size={36} />,
  },
  {
    title: "WordPress řešení",
    description: "Implementace a úpravy WordPress webů, vývoj vlastních šablon a pluginů pro specifické potřeby.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
        <path d="M12 2a10 10 0 0 1 10 10"></path>
        <path d="M12 2v10l4 4"></path>
        <path d="M12 2v10l-4 4"></path>
      </svg>
    ),
  },
  {
    title: "Optimalizace výkonu",
    description: "Analýza a optimalizace webových stránek pro rychlejší načítání a lepší uživatelský zážitek.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
  {
    title: "Konzultace a školení",
    description: "Odborné konzultace a školení v oblasti moderních webových technologií a používání umělé inteligence.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      </svg>
    ),
  },
]
