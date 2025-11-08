"use client"

import type React from "react"
import { Github, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Shield, CheckCircle, ArrowRight, Calendar } from "lucide-react"
import Navbar from "@/app/components/navbar"

export default function SluzbyPage() {
  return (
    <div className="min-h-screen bg-[#050A14] text-white">
      {/* Pozadí s gradientem */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/20 to-transparent"
          style={{ opacity: 0.4 }}
        />
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNzAgMEgwdjYwaDMwVjB6TTI5IDFIMXYyOGgyOFYxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMEgzMHY2MGgzMFYwek01OSAxSDMxdjI4aDI4VjF6IiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjxwYXRoIGQ9Ik0zMCAzMEgwdjMwaDMwVjMwek0yOSAzMUgxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNNjAgMzBIMzB2MzBoMzBWMzB6TTU5IDMxSDMxdjI4aDI4VjMxeiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')]"
          style={{ opacity: 0.2 }}
        />
      </div>

      {/* Navbar */}
      <Navbar />

      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Shield className="text-red-500 mr-2" size={28} />
            <span className="text-red-400 font-medium">Generali Česká pojišťovna</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Komplexní pojištění a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              finanční služby
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Jako pojišťovací poradce Generali České pojišťovny nabízím kompletní portfolio služeb pro jednotlivce,
            rodiny i firmy. Mým cílem je poskytnout vám optimální řešení přesně podle vašich potřeb.
          </p>
        </motion.div>

        {/* Služby - Životní pojištění */}
        <ServiceSection
          title="Životní pojištění"
          description="Životní pojištění je klíčovým nástrojem finanční ochrany vás a vaší rodiny. Nabízí jistotu v případě neočekávaných událostí a pomáhá zajistit finanční stabilitu vašich blízkých."
          image="/images/life-insurance.webp"
          imageAlt="Životní pojištění"
          priority={true}
          delay={0.1}
        >
          <div className="space-y-4">
            <FeatureItem>
              <strong>Pojištění pro případ smrti</strong> - Zajistí finanční prostředky pro vaše blízké v případě vaší
              smrti
            </FeatureItem>
            <FeatureItem>
              <strong>Pojištění vážných nemocí</strong> - Poskytne finanční podporu při diagnostikování závažného
              onemocnění
            </FeatureItem>
            <FeatureItem>
              <strong>Pojištění trvalých následků úrazu</strong> - Finanční kompenzace při trvalém poškození zdraví
            </FeatureItem>
            <FeatureItem>
              <strong>Pojištění pracovní neschopnosti</strong> - Zajistí příjem v době, kdy nemůžete pracovat
            </FeatureItem>
            <FeatureItem>
              <strong>Pojištění invalidity</strong> - Dlouhodobá finanční podpora při invaliditě různých stupňů
            </FeatureItem>
          </div>
        </ServiceSection>

        {/* Služby - Pojištění majetku */}
        <ServiceSection
          title="Pojištění majetku a domácnosti"
          description="Ochraňte svůj domov a majetek před nepředvídatelnými událostmi. Nabízím komplexní pojištění nemovitostí i vybavení domácnosti, které vám poskytne klid a jistotu."
          image="/images/home-insurance.webp"
          imageAlt="Pojištění majetku"
          reverse={true}
          delay={0.2}
        >
          <div className="space-y-4">
            <FeatureItem>
              <strong>Pojištění nemovitosti</strong> - Ochrana stavby před živelními pohromami, vandalismem či krádeží
            </FeatureItem>
            <FeatureItem>
              <strong>Pojištění domácnosti</strong> - Zabezpečení vybavení a osobních věcí v domácnosti
            </FeatureItem>
            <FeatureItem>
              <strong>Asistenční služby</strong> - Pomoc při haváriích, zabouchnutí dveří nebo technických problémech
            </FeatureItem>
            <FeatureItem>
              <strong>Pojištění odpovědnosti v běžném životě</strong> - Ochrana před škodami způsobenými třetím osobám
            </FeatureItem>
            <FeatureItem>
              <strong>Pojištění rekreačních objektů</strong> - Speciální ochrana pro chaty, chalupy a další rekreační
              nemovitosti
            </FeatureItem>
          </div>
        </ServiceSection>

        {/* Služby - Povinné ručení a havarijní pojištění */}
        <ServiceSection
          title="Povinné ručení a havarijní pojištění"
          description="Komplexní řešení pro vaše vozidlo. Nabízím jak zákonné povinné ručení, tak i nadstandardní havarijní pojištění, které vás ochrání před finančními ztrátami."
          image="/images/liability-insurance.webp"
          imageAlt="Povinné ručení"
          delay={0.3}
        >
          <div className="space-y-4">
            <FeatureItem>
              <strong>Povinné ručení</strong> - Zákonná ochrana před škodami způsobenými provozem vozidla třetím osobám
            </FeatureItem>
            <FeatureItem>
              <strong>Havarijní pojištění</strong> - Ochrana vašeho vozidla při havárii, živelní události, krádeži či
              vandalismu
            </FeatureItem>
            <FeatureItem>
              <strong>Pojištění skel</strong> - Speciální krytí pro případ poškození skel vozidla
            </FeatureItem>
            <FeatureItem>
              <strong>Asistenční služby</strong> - Pomoc na cestách při poruše, nehodě nebo jiných problémech
            </FeatureItem>
            <FeatureItem>
              <strong>Úrazové pojištění řidiče a cestujících</strong> - Dodatečná ochrana osob ve vozidle
            </FeatureItem>
          </div>
        </ServiceSection>

        {/* Služby - Cestovní pojištění */}
        <ServiceSection
          title="Cestovní pojištění"
          description="Cestujte s klidem a jistotou. Cestovní pojištění vás ochrání před nečekanými výdaji v zahraničí, ať už jde o léčebné výlohy, ztrátu zavazadel nebo odpovědnost za škodu."
          image="/images/travel-insurance.webp"
          imageAlt="Cestovní pojištění"
          reverse={true}
          delay={0.4}
        >
          <div className="space-y-4">
            <FeatureItem>
              <strong>Léčebné výlohy</strong> - Úhrada nákladů na lékařské ošetření a hospitalizaci v zahraničí
            </FeatureItem>
            <FeatureItem>
              <strong>Úrazové pojištění</strong> - Finanční kompenzace při úrazu během cesty
            </FeatureItem>
            <FeatureItem>
              <strong>Pojištění zavazadel</strong> - Náhrada při ztrátě, poškození nebo krádeži zavazadel
            </FeatureItem>
            <FeatureItem>
              <strong>Pojištění odpovědnosti</strong> - Ochrana před škodami způsobenými třetím osobám během cesty
            </FeatureItem>
            <FeatureItem>
              <strong>Pojištění storna cesty</strong> - Náhrada nákladů při nutnosti zrušit cestu ze závažných důvodů
            </FeatureItem>
          </div>
        </ServiceSection>

        {/* Služby - Investice a spoření */}
        <ServiceSection
          title="Investice a spoření"
          description="Zajistěte si finanční budoucnost díky chytrým investicím a spoření. Nabízím řešení, která vám pomohou zhodnotit vaše prostředky a dosáhnout vašich finančních cílů."
          image="/images/investment-strategy.webp"
          imageAlt="Investice a spoření"
          delay={0.5}
        >
          <div className="space-y-4">
            <FeatureItem>
              <strong>Investiční fondy</strong> - Široká nabídka fondů s různými investičními strategiemi
            </FeatureItem>
            <FeatureItem>
              <strong>Penzijní připojištění</strong> - Výhodné spoření na důchod s příspěvkem od státu
            </FeatureItem>
            <FeatureItem>
              <strong>Pravidelné investování</strong> - Systematické budování majetku pomocí pravidelných vkladů
            </FeatureItem>
            <FeatureItem>
              <strong>Investiční životní pojištění</strong> - Kombinace pojistné ochrany a investiční složky
            </FeatureItem>
            <FeatureItem>
              <strong>Investiční poradenství</strong> - Odborné konzultace a doporučení pro vaše investice
            </FeatureItem>
          </div>
        </ServiceSection>

        {/* Služby - Firemní pojištění */}
        <ServiceSection
          title="Firemní pojištění"
          description="Komplexní ochrana pro vaše podnikání. Nabízím řešení, která pomohou ochránit vaši firmu před různými riziky a zajistí kontinuitu vašeho podnikání."
          image="/images/insurance-contract.webp"
          imageAlt="Firemní pojištění"
          reverse={true}
          delay={0.6}
        >
          <div className="space-y-4">
            <FeatureItem>
              <strong>Pojištění majetku firmy</strong> - Ochrana budov, vybavení a zásob před poškozením či zničením
            </FeatureItem>
            <FeatureItem>
              <strong>Pojištění odpovědnosti podnikatele</strong> - Krytí škod způsobených třetím osobám při podnikání
            </FeatureItem>
            <FeatureItem>
              <strong>Pojištění přerušení provozu</strong> - Náhrada ušlého zisku při nucené odstávce podnikání
            </FeatureItem>
            <FeatureItem>
              <strong>Pojištění vozového parku</strong> - Speciální řešení pro firemní vozidla
            </FeatureItem>
            <FeatureItem>
              <strong>Skupinové životní pojištění</strong> - Benefitní program pro zaměstnance
            </FeatureItem>
          </div>
        </ServiceSection>

        {/* Výhody spolupráce */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-24 max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center mb-12">
            <CheckCircle className="text-red-500 mr-3" size={24} />
            <h2 className="text-3xl font-bold">Proč se mnou spolupracovat</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard
              title="Komplexní služby"
              description="Nabízím kompletní portfolio pojistných a finančních produktů pod jednou střechou."
            />
            <BenefitCard
              title="Individuální přístup"
              description="Každý klient má jiné potřeby a priority. Navrhuji řešení přesně na míru vašim požadavkům."
            />
            <BenefitCard
              title="Dlouhodobá péče"
              description="Jsem tu pro vás nejen při sjednání, ale i při správě smluv a řešení pojistných událostí."
            />
            <BenefitCard
              title="Odborné znalosti"
              description="Kontinuálně se vzdělávám, abych vám mohl nabídnout nejlepší dostupná řešení na trhu."
            />
            <BenefitCard
              title="Transparentnost"
              description="Vždy vám vysvětlím všechny podmínky a možnosti, abyste se mohli rozhodnout informovaně."
            />
            <BenefitCard
              title="Dostupnost"
              description="Jsem vám k dispozici, když mě potřebujete. Rychle reaguji na vaše dotazy a požadavky."
            />
          </div>
        </motion.div>

        {/* CTA sekce */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-red-900/30 to-red-700/20 p-8 md:p-12 rounded-2xl border border-red-900/20 text-center backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Připraveni začít?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Domluvte si nezávaznou konzultaci a společně najdeme nejlepší řešení pro vaše potřeby.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/schuzka"
                className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-red-600/20 hover:shadow-xl text-lg"
              >
                <Calendar className="mr-2" size={18} />
                Domluvit schůzku
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <footer className="container mx-auto px-4 py-8 mt-24 border-t border-gray-800 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">© 2025 / Matěj Hrabák / Powered by Next.js</p>
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://github.com/crazyka51"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="mailto:matejhraba@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Service Section Component
function ServiceSection({
  title,
  description,
  image,
  imageAlt,
  children,
  reverse = false,
  delay = 0,
  priority = false,
}: {
  title: string
  description: string
  image: string
  imageAlt: string
  children: React.ReactNode
  reverse?: boolean
  delay?: number
  priority?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 my-24`}
    >
      <div className="w-full md:w-2/5 relative">
        <div className="relative h-[300px] md:h-full rounded-xl overflow-hidden">
          <Image 
            src={image || "/placeholder.svg"} 
            alt={imageAlt} 
            fill 
            className="object-cover" 
            priority={priority}
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </div>
      <div className="w-full md:w-3/5">
        <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
          {title}
        </h2>
        <p className="text-lg text-gray-300 mb-6">{description}</p>
        {children}
      </div>
    </motion.div>
  )
}

// Feature Item Component
function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start">
      <ArrowRight className="text-red-500 mr-3 mt-1 flex-shrink-0" size={16} />
      <p className="text-gray-200">{children}</p>
    </div>
  )
}

// Benefit Card Component
function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.1)" }}
      className="bg-[#111827]/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 transition-all"
    >
      <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}
