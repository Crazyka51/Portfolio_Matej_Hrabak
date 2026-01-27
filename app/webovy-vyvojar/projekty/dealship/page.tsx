"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Code,
  Rocket,
  Smartphone,
  Layout,
  ImageIcon,
  Users,
  Database,
  TrendingUp,
  BarChart3,
  Mail,
  Target,
  Settings,
  CheckCircle2,
  Zap,
} from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"
import PageTransition from "@/app/components/page-transition"
import ProjectGallery from "@/app/components/project-gallery"

export default function DealShipProjectPage() {
  // Gallery images
  const galleryImages = [
    {
      src: "/images/dealship/hero.webp",
      alt: "DealShip Hero sekce",
      caption: "Hlavní hero sekce s gradientovým pozadím a call-to-action tlačítky",
    },
    {
      src: "/images/dealship/landing.webp",
      alt: "Statistiky a metriky",
      caption: "Přehled klíčových metrik - 150+ partnerů, 40% růst, 25+ odvětví, 98% spokojenost",
    },
    {
      src: "/images/dealship/services.webp",
      alt: "Jak vám můžeme pomoci",
      caption: "Přehled všech služeb a funkcí platformy s ikonami",
    },
    {
      src: "/images/dealship/projects.webp",
      alt: "Naše projekty",
      caption: "Case studies a úspěšné projekty s konkrétními výsledky",
    },
    {
      src: "/images/dealship/feedback.webp",
      alt: "Co říkají naši klienti",
      caption: "Testimonials a reference od spokojených zákazníků",
    },
    {
      src: "/images/dealship/FAQ.webp",
      alt: "Často kladené otázky",
      caption: "FAQ sekce s rozbalovacím accordion menu",
    },
    {
      src: "/images/dealship/newslettter.webp",
      alt: "Newsletter a kontakt",
      caption: "Sekce pro přihlášení k newsletteru a kontaktní informace",
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#010714] text-white">
        <WebDevNavbar />

        <main className="container mx-auto px-4 py-16">
          {/* Back Button */}
          <Link
            href="/webovy-vyvojar/projekty"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Zpět na projekty</span>
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              DealShip - B2B Growth Platform
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Next.js 15</span>
              <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
              <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              <span className="bg-amber-900/50 text-amber-300 px-3 py-1 rounded-full text-sm">React 18</span>
              <span className="bg-red-900/50 text-red-300 px-3 py-1 rounded-full text-sm">Framer Motion</span>
              <span className="bg-indigo-900/50 text-indigo-300 px-3 py-1 rounded-full text-sm">Responsive Design</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <a
                href="https://b2bportfolio.vercel.app//"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                <span>Navštívit web</span>
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Project Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <ImageIcon className="mr-3 h-5 w-5 text-blue-400" />
              <span>Ukázky projektu</span>
            </h2>
            <ProjectGallery images={galleryImages} />
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Layout className="mr-3 h-5 w-5 text-blue-400" />
              <span>Klíčové funkce</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="bg-blue-900/30 p-3 rounded-lg inline-block mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">B2B Growth Platform</h3>
                <p className="text-gray-400">
                  Komplexní platforma pro růst B2B firem s důrazem na analýzu trhu, generování leadů a automatizaci obchodních procesů.
                </p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="bg-green-900/30 p-3 rounded-lg inline-block mb-4">
                  <BarChart3 className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pokročilá analytika</h3>
                <p className="text-gray-400">
                  Detailní statistiky a metriky zobrazující 150+ partnerů, 40% růst konverzí, 25+ odvětví a 98% spokojenost klientů.
                </p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="bg-purple-900/30 p-3 rounded-lg inline-block mb-4">
                  <Smartphone className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Moderní design</h3>
                <p className="text-gray-400">
                  Responsivní design s gradientovým schématem modro-fialové barvy, plynulé animace a intuitivní uživatelské rozhraní.
                </p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="bg-amber-900/30 p-3 rounded-lg inline-block mb-4">
                  <Mail className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Marketing</h3>
                <p className="text-gray-400">
                  Integrované nástroje pro email marketing s možností personalizace kampaní a sledování výkonu v reálném čase.
                </p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="bg-red-900/30 p-3 rounded-lg inline-block mb-4">
                  <Target className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lead Generation</h3>
                <p className="text-gray-400">
                  Automatizované generování kvalitních B2B leadů s možností targetování podle odvětví, velikosti firmy a lokace.
                </p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                <div className="bg-indigo-900/30 p-3 rounded-lg inline-block mb-4">
                  <Settings className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">CRM & Automatizace</h3>
                <p className="text-gray-400">
                  Pokročilé CRM funkce s automatizací workflow, správou kontaktů a sledováním obchodních příležitostí.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Project Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-3">Popis projektu</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                <p>
                  DealShip je komplexní B2B platforma zaměřená na podporu růstu firem prostřednictvím pokročilých nástrojů 
                  pro analýzu trhu, generování leadů a automatizaci obchodních procesů. Projekt představuje moderní SaaS 
                  řešení s důrazem na uživatelský zážitek a měřitelné výsledky.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Hlavní cíle a implementace</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-900/30 p-3 rounded-lg mr-4 mt-1">
                      <Layout className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-blue-400">UI/UX Design pro B2B</h4>
                      <p>
                        Navrženo profesionální uživatelské rozhraní s důrazem na přehlednost a efektivitu. 
                        Použití gradientových barev (modrá-fialová) vytváří moderní a důvěryhodný dojem. 
                        Dashboard design s přehlednými metrikami a call-to-action prvky optimalizované pro konverze.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-900/30 p-3 rounded-lg mr-4 mt-1">
                      <Code className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-purple-400">Technická architektura</h4>
                      <p>
                        Implementace pomocí Next.js 15 s App Router pro optimální výkon a SEO. TypeScript zajišťuje 
                        typovou bezpečnost a lepší developer experience. Tailwind CSS poskytuje flexibilní a konzistentní 
                        styling system. Framer Motion je použit pro plynulé animace a přechody mezi sekcemi.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-900/30 p-3 rounded-lg mr-4 mt-1">
                      <BarChart3 className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-green-400">Statistiky a metriky</h4>
                      <p>
                        Hero sekce obsahuje impozantní statistiky: 150+ aktivních partnerů, 40% průměrný růst konverzí, 
                        přítomnost v 25+ odvětvích a 98% spokojenost zákazníků. Tyto metriky jsou prezentovány 
                        s animacemi pro zvýšení vizuálního dopadu a budování důvěry.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-900/30 p-3 rounded-lg mr-4 mt-1">
                      <Zap className="h-6 w-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-amber-400">Funkční moduly</h4>
                      <p>
                        Platforma obsahuje několik klíčových modulů: analýzu trhu pro identifikaci příležitostí, 
                        email marketing s personalizací, lead generation s pokročilým targetováním, CRM systém 
                        pro správu vztahů se zákazníky, a automatizační nástroje pro efektivní workflow.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-900/30 p-3 rounded-lg mr-4 mt-1">
                      <Users className="h-6 w-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-red-400">Case studies a důkazní</h4>
                      <p>
                        Sekce projektů prezentuje úspěšné implementace s konkrétními výsledky. Obsahuje případové 
                        studie jako "Partner program pro B2B marketplace", který vygeneroval 100+ B2B objednávek 
                        měsíčně, a další projekty demonstrující měřitelný dopad platformy na růst klientů.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-8 mb-4">Výzvy a jejich řešení</h3>
                <p>
                  Hlavní výzvou bylo vytvořit platformu, která by byla dostatečně komplexní pro pokročilé B2B potřeby, 
                  ale zároveň intuitivní a snadno použitelná. Řešením byl modulární přístup s postupným onboardingem 
                  a kontextovou nápovědou. Důraz byl kladen na rychlost načítání a responsivitu pro různá zařízení.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Unikátní vlastnosti</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Integrovaná analytika</strong> - Real-time dashboard s přehledem všech klíčových metrik
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Multi-channel approach</strong> - Kombinace email marketingu, sociálních sítí a direct outreach
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <strong>AI-powered insights</strong> - Doporučení založená na datech a machine learning
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Automatizace workflow</strong> - Ušetření času pomocí smart automation
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Testimonials a social proof</strong> - Sekce s referencemi od spokojených klientů
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <strong>FAQ sekce</strong> - Odpovědi na často kladené otázky pro rychlou orientaci
                    </div>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4">Výsledek a dopad</h3>
                <p>
                  DealShip úspěšně demonstruje schopnost vytvořit komplexní B2B SaaS platformu s moderním designem 
                  a robustní funkčností. Projekt slouží jako ukázka práce s pokročilými UI/UX principy, implementace 
                  statistik a metrik, a vytváření důvěryhodného dojmu pro business klienty. Optimalizace pro konverze 
                  je patrná v každém detailu od hero sekce až po call-to-action tlačítka.
                </p>

                <p className="mt-4">
                  Platforma je navržena jako škálovatelné řešení připravené pro integraci s backend API, databázovými 
                  systémy a externími službami. Frontend implementace poskytuje solidní základ pro budoucí rozšíření 
                  o reálnou business logiku a datové operace.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-3">Technické detaily</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Frontend technologie</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Next.js 15 (App Router)
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      React 18
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      TypeScript
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Tailwind CSS
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                      Framer Motion
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Klíčové funkce</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Analýza trhu
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Email marketing
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Lead generation
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      CRM systém
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Workflow automatizace
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                      Case studies
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Design features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                      Gradient color scheme
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                      Plynulé animace
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                      Responzivní layout
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                      Statistické karty
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                      FAQ accordion
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                      Testimonials sekce
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Deployment</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                      Vercel hosting
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                      Automatické deploymenty
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span>
                      Edge optimalizace
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Klíčové metriky</h3>
                  <div className="bg-gray-800/50 p-4 rounded-lg space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Partneři</span>
                        <span className="text-sm font-semibold text-blue-400">150+</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Růst konverzí</span>
                        <span className="text-sm font-semibold text-green-400">40%</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Odvětví</span>
                        <span className="text-sm font-semibold text-purple-400">25+</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Spokojenost</span>
                        <span className="text-sm font-semibold text-amber-400">98%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Doba realizace</h3>
                  <p className="text-gray-400">
                    Projekt vyvinut v průběhu <strong>Q4 2024 - Q1 2025</strong>
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Rok dokončení</h3>
                  <p>2025</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Status</h3>
                  
                </div>
              </div>
            </motion.div>
          </div>

          {/* Template for Sale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-2xl border border-blue-500/30">
              <div className="flex items-start gap-6">
                <div className="bg-blue-900/30 p-4 rounded-lg">
                  <Rocket className="h-8 w-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3">Šablona připravená k prodeji</h2>
                  <p className="text-gray-300 mb-4">
                    Tato kompletní B2B platforma je dostupná jako ready-to-use šablona. Perfektní základ pro 
                    váš SaaS projekt, startup nebo business řešení. Zahrnuje všechny uvedené sekce, responzivní 
                    design, optimalizovaný kód a moderní technologie.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-900/50 p-4 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mb-2" />
                      <h3 className="font-semibold mb-1">Kompletní kód</h3>
                      <p className="text-sm text-gray-400">Next.js 15, TypeScript, Tailwind CSS</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mb-2" />
                      <h3 className="font-semibold mb-1">Dokumentace</h3>
                      <p className="text-sm text-gray-400">Kompletní dokumentace a komentáře</p>
                    </div>
                    <div className="bg-gray-900/50 p-4 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mb-2" />
                      <h3 className="font-semibold mb-1">Podpora</h3>
                      <p className="text-sm text-gray-400">Technická podpora a customizace</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <div>
                      <span className="text-sm text-gray-400">Cena:</span>
                      <span className="text-2xl font-bold text-blue-400 ml-2">Dohodou</span>
                    </div>
                    <Link
                      href="/webovy-vyvojar/kontakt"
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Kontaktujte mě
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Next Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-t border-gray-800 pt-12"
          >
            <h2 className="text-2xl font-bold mb-6">Další projekty</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/webovy-vyvojar/projekty/moje-portfolio" className="group">
                <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all h-full">
                  <div className="relative h-40">
                    <Image
                      src="/images/matejhrabak_portfolio.webp"
                      alt="Matěj Hrabák Portfolio"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-blue-400 transition-colors">Matěj Hrabák</h3>
                    <p className="text-sm text-gray-400">Osobní portfolio</p>
                  </div>
                </div>
              </Link>

              <Link href="/webovy-vyvojar/projekty/strawstav" className="group">
                <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all h-full">
                  <div className="relative h-40">
                    <Image
                      src="/images/strawstav-project.webp"
                      alt="Straw Stav Website"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-blue-400 transition-colors">Straw Stav</h3>
                    <p className="text-sm text-gray-400">Stavební firma</p>
                  </div>
                </div>
              </Link>

              <Link href="/webovy-vyvojar/projekty/pavel-fiser" className="group">
                <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500/30 transition-all h-full">
                  <div className="relative h-40">
                    <Image
                      src="/images/fiserpavel-project.webp"
                      alt="Pavel Fišer Website"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-blue-400 transition-colors">Pavel Fišer</h3>
                    <p className="text-sm text-gray-400">Zastupitel Praha 4</p>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        </main>

        <WebDevFooter />
      </div>
    </PageTransition>
  )
}
