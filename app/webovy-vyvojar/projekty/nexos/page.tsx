"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  ShoppingCart,
  CreditCard,
  Package,
  Users,
  BarChart3,
  Lock,
} from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"
import PageTransition from "@/app/components/page-transition"
import ProjectGallery from "@/app/components/project-gallery"

export default function NexosProjectPage() {
  const galleryImages = [
    {
      src: "/images/nexos/project_eshop_nexos.webp",
      alt: "Nexos E-commerce - Hero sekce",
      title: "Hero sekce",
    },
    
  ]

  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-blue-400" />,
      title: "Nákupní košík",
      description: "Pokročilý košík s možností úprav množství, variant produktů a výpočtem celkové ceny včetně DPH.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-400" />,
      title: "Platební brána",
      description: "Integrace s populárními platebními metodami včetně karet, PayPal a dalších online plateb.",
    },
    {
      icon: <Package className="w-8 h-8 text-purple-400" />,
      title: "Správa produktů",
      description: "Komplexní systém pro správu produktů, kategorií, variant, skladu a cen s admin panelem.",
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      title: "Uživatelské účty",
      description: "Registrace, přihlášení, správa objednávek a přehled historie nákupů pro zákazníky.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      title: "Analytika",
      description: "Detailní přehled prodejů, návštěvnosti a chování zákazníků pro optimalizaci obchodu.",
    },
    {
      icon: <Lock className="w-8 h-8 text-red-400" />,
      title: "Zabezpečení",
      description: "Šifrování citlivých dat, GDPR compliance a bezpečné platební procesy.",
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#010714] text-white">
        <WebDevNavbar />

        <main className="container mx-auto px-4 py-12">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/webovy-vyvojar/projekty"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zpět na projekty
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Nexos E-commerce</h1>
                <p className="text-xl text-gray-300 max-w-3xl">
                  Vyvíjená moderní e-commerce šablona s pokročilými funkcemi pro online prodej, nákupním košíkem,
                  platební bránou a kompletním admin panelem pro správu obchodu.
                </p>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://nexos-eshop.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Navštívit web
                </a>
              </div>
            </div>

            {/* Project Meta */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <div>
                <span className="font-semibold text-white">Rok:</span> 2025
              </div>
              <div>
                <span className="font-semibold text-white">Kategorie:</span> E-commerce šablona
              </div>
              <div>
                <span className="font-semibold text-white">Status:</span>{" "}
                <span className="text-yellow-400">Ve vývoji</span>
              </div>
            </div>
          </motion.div>

          {/* Project Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <ProjectGallery images={galleryImages} />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-6">O projektu</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    <strong className="text-white">Nexos</strong> je komplexní e-commerce šablona, která vzniká s
                    cílem poskytnout moderní a výkonné řešení pro online prodej. Projekt je stále ve vývoji a
                    pravidelně přibývají nové funkce a vylepšení.
                  </p>
                  <p>
                    Šablona je navržena s důrazem na uživatelský zážitek, rychlost načítání a snadnou správu
                    obsahu. Využívá nejmodernější webové technologie a best practices pro vytvoření profesionálního
                    e-shopu.
                  </p>
                  <p>
                    Hlavními cíli projektu jsou intuitivní nákupní proces, responzivní design pro všechna zařízení,
                    SEO optimalizace a bezpečné platební procesy. Nexos je ideální volbou pro malé až střední
                    e-commerce projekty.
                  </p>
                </div>
              </motion.section>

              {/* Features Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-6">Klíčové funkce</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-blue-500/30 transition-all"
                    >
                      <div className="mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Development Process */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Průběh vývoje</h2>
                <div className="space-y-6">
                  <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-semibold mb-3 text-blue-400">Fáze 1: Základní struktura ✅</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        Návrh designu a uživatelského rozhraní
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        Implementace hlavních stránek (domů, produkty, kontakt)
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        Responsivní layout pro všechna zařízení
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                      Fáze 2: E-commerce funkce 🚧
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        Nákupní košík a správa objednávek
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        Integrace platební brány
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-400 mr-2">•</span>
                        Uživatelské účty a autentizace
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 opacity-60">
                    <h3 className="text-xl font-semibold mb-3 text-gray-400">Fáze 3: Pokročilé funkce 📋</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-gray-500 mr-2">•</span>
                        Admin panel pro správu obchodu
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-500 mr-2">•</span>
                        Analytika a reporty
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-500 mr-2">•</span>
                        Pokročilé SEO optimalizace
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="sticky top-24 space-y-6"
              >
                {/* Technologies */}
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-4">Použité technologie</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Stripe API"].map(
                      (tech) => (
                        <span key={tech} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Links */}
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-4">Odkazy</h3>
                  <div className="space-y-3">
                    <a
                      href="https://nexos-eshop.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Živá verze
                    </a>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-500/30">
                  <div className="flex items-center text-yellow-400 mb-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="font-semibold">Probíhá vývoj</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Tento projekt je stále ve vývoji. Nové funkce jsou přidávány průběžně.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-lg border border-blue-500/30 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Zajímá vás tento projekt?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Pokud hledáte podobné řešení pro váš e-commerce projekt, neváhejte mě kontaktovat.
            </p>
            <Link
              href="/webovy-vyvojar/kontakt"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Kontaktovat
            </Link>
          </motion.section>
        </main>

        <WebDevFooter />
      </div>
    </PageTransition>
  )
}
