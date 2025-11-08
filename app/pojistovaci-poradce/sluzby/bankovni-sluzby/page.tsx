import Link from "next/link"
import Image from "next/image"
import { Building2, ArrowRight, Check } from "lucide-react"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"

export default function BankingServicesPage() {
  return (
    <div className="min-h-screen bg-[#050A14] text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-12">
          <Building2 className="text-red-500 h-12 w-12 mr-4" />
          <h1 className="text-4xl font-bold">Bankovní služby</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2940&auto=format&fit=crop"
              alt="Bankovní služby"
              width={600}
              height={400}
              className="rounded-lg object-cover hover:opacity-90 transition-opacity duration-300"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 600px"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjAyMDIwIi8+PC9zdmc+"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Komplexní finanční služby pro jednotlivce i firmy</h2>
            <p className="text-gray-300 mb-6">
              Jako nezávislý finanční poradce vám nabízím širokou škálu bankovních služeb, které vám pomohou efektivně
              spravovat vaše finance. Ať už hledáte nejvýhodnější hypotéku, spotřebitelský úvěr, nebo chcete
              optimalizovat své bankovní účty, jsem připraven vám pomoci.
            </p>
            <p className="text-gray-300 mb-6">
              Díky spolupráci s předními bankovními institucemi na trhu vám mohu nabídnout srovnání různých produktů a
              doporučit ty, které nejlépe odpovídají vašim potřebám a finančním možnostem. Mým cílem je zajistit, abyste
              měli přístup k nejlepším dostupným bankovním službám a ušetřili čas i peníze.
            </p>
            <Link
              href="/schuzka"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md transition-colors"
            >
              Sjednat konzultaci <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Nabízené bankovní služby</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111827]/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">Hypotéky a úvěry</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Hypoteční úvěry</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Spotřebitelské úvěry</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Konsolidace úvěrů</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Refinancování</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#111827]/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">Běžné účty a spoření</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Běžné a spořicí účty</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Termínované vklady</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Stavební spoření</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Dětské účty a spoření</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#111827]/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">Firemní bankovnictví</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Podnikatelské účty</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Podnikatelské úvěry</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Provozní financování</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Platební terminály</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Proč využít mé služby pro bankovní produkty?</h2>
          <p className="text-gray-300 mb-8">
            Jako nezávislý finanční poradce vám nabízím individuální přístup, transparentnost a profesionalitu. Společně
            najdeme řešení, které bude přesně odpovídat vašim potřebám a finančním možnostem.
          </p>
          <Link
            href="/schuzka"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md transition-colors"
          >
            Domluvit nezávaznou konzultaci <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
