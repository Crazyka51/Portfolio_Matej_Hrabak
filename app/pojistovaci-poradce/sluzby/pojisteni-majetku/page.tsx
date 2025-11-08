import Link from "next/link"
import Image from "next/image"
import { Shield, ArrowRight, Check } from "lucide-react"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"

export default function PropertyInsurancePage() {
  return (
    <div className="min-h-screen bg-[#050A14] text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-12">
          <Shield className="text-red-500 h-12 w-12 mr-4" />
          <h1 className="text-4xl font-bold">Pojištění majetku</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
              alt="Pojištění majetku"
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
            <h2 className="text-2xl font-semibold mb-4">Ochraňte svůj majetek před nepředvídatelnými událostmi</h2>
            <p className="text-gray-300 mb-6">
              Pojištění majetku je klíčovým nástrojem pro ochranu vašeho domova, bytu nebo jiných nemovitostí před
              různými riziky, jako jsou požáry, povodně, krádeže nebo vandalismus. Nabízím komplexní řešení pojištění
              majetku, které je přizpůsobeno vašim konkrétním potřebám a hodnotě vašeho majetku.
            </p>
            <p className="text-gray-300 mb-6">
              Jako nezávislý pojišťovací poradce vám pomohu najít nejvýhodnější pojištění s optimálním poměrem ceny a
              rozsahu krytí. Díky spolupráci s předními pojišťovnami na trhu vám mohu nabídnout širokou škálu produktů a
              zajistit, že budete mít vždy to nejlepší možné pojištění.
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
          <h2 className="text-2xl font-semibold mb-8 text-center">Co pojištění majetku pokrývá</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111827]/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">Nemovitost</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Rodinné domy a byty</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Rekreační objekty</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Garáže a vedlejší stavby</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Bytové a nebytové jednotky</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#111827]/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">Domácnost</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Vybavení a nábytek</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Elektronika a spotřebiče</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Cennosti a umělecké předměty</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Sportovní vybavení</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#111827]/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">Rizika</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Požár, výbuch, úder blesku</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Vichřice, krupobití, povodeň</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Krádež, loupež, vandalismus</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Odpovědnost za škodu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Proč si sjednat pojištění majetku se mnou?</h2>
          <p className="text-gray-300 mb-8">
            Jako nezávislý pojišťovací poradce vám nabízím individuální přístup, transparentnost a profesionalitu.
            Společně najdeme řešení, které bude přesně odpovídat vašim potřebám a finančním možnostem.
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
