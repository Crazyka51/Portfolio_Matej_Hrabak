import Link from "next/link"
import Image from "next/image"
import { Heart, ArrowRight, Check } from "lucide-react"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"

export default function PetInsurancePage() {
  return (
    <div className="min-h-screen bg-[#050A14] text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-12">
          <Heart className="text-red-500 h-12 w-12 mr-4" />
          <h1 className="text-4xl font-bold">Pojištění mazlíčků</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=2486&auto=format&fit=crop"
              alt="Pojištění mazlíčků"
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
            <h2 className="text-2xl font-semibold mb-4">Komplexní ochrana pro vaše čtyřnohé přátele</h2>
            <p className="text-gray-300 mb-6">
              Pojištění mazlíčků poskytuje finanční ochranu v případě nemoci nebo úrazu vašeho domácího mazlíčka.
              Veterinární péče může být nákladná, a proto je dobré být připraven na nečekané výdaje spojené se zdravím
              vašeho zvířecího společníka.
            </p>
            <p className="text-gray-300 mb-6">
              Jako nezávislý pojišťovací poradce vám pomohu najít nejvhodnější pojištění pro vašeho mazlíčka, které
              pokryje náklady na veterinární péči, léky a další služby spojené s léčbou. Díky spolupráci s předními
              pojišťovnami na trhu vám mohu nabídnout širokou škálu produktů a zajistit, že budete mít vždy to nejlepší
              možné pojištění.
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
          <h2 className="text-2xl font-semibold mb-8 text-center">Co pojištění mazlíčků pokrývá</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111827]/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">Základní krytí</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Veterinární ošetření</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Léky předepsané veterinářem</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Diagnostické vyšetření</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Hospitalizace</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#111827]/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">Rozšířené krytí</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Chirurgické zákroky</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Preventivní prohlídky</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Očkování</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Odčervení a odblešení</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#111827]/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">Nadstandardní krytí</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Fyzioterapie a rehabilitace</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Alternativní léčba</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Odpovědnost za škodu způsobenou mazlíčkem</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Náklady na hledání ztraceného zvířete</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Proč si sjednat pojištění mazlíčků se mnou?</h2>
          <p className="text-gray-300 mb-8">
            Jako nezávislý pojišťovací poradce vám nabízím individuální přístup, transparentnost a profesionalitu.
            Společně najdeme řešení, které bude přesně odpovídat potřebám vašeho mazlíčka a vašim finančním možnostem.
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
