import Link from "next/link"
import Image from "next/image"
import { BarChart3, ArrowRight, Check } from "lucide-react"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"

export default function GeneraliInvesticePage() {
  return (
    <div className="min-h-screen bg-[#050A14] text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-12">
          <BarChart3 className="text-red-500 h-12 w-12 mr-4" />
          <h1 className="text-4xl font-bold">Generali Investice</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
              alt="Generali Investice"
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
            <h2 className="text-2xl font-semibold mb-4">Investujte s jistotou a profesionálním přístupem</h2>
            <p className="text-gray-300 mb-6">
              Generali Investice nabízí širokou škálu investičních produktů, které vám pomohou dosáhnout vašich
              finančních cílů. Ať už investujete poprvé nebo jste zkušený investor, nabízíme řešení přizpůsobená vašim
              potřebám a rizikovému profilu.
            </p>
            <p className="text-gray-300 mb-6">
              Jako certifikovaný poradce Generali České pojišťovny vám pomohu vybrat nejvhodnější investiční strategii,
              která bude odpovídat vašim cílům, časovému horizontu a ochotě podstupovat riziko. Společně vytvoříme plán,
              který vám pomůže budovat finanční jistotu pro budoucnost.
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
          <h2 className="text-2xl font-semibold mb-8 text-center">Proč investovat s Generali</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111827]/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">Široká nabídka fondů</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Akciové fondy</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Dluhopisové fondy</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Smíšené fondy</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Fondy peněžního trhu</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#111827]/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">Výhody investování</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Potenciál vyššího zhodnocení</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Ochrana před inflací</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Diverzifikace portfolia</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Dlouhodobé budování majetku</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#111827]/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">Profesionální přístup</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Osobní investiční poradenství</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Pravidelné přehodnocování strategie</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Transparentní informace o poplatcích</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Online přístup k vašemu portfoliu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Začněte investovat s profesionálním poradcem</h2>
          <p className="text-gray-300 mb-8">
            Jako nezávislý pojišťovací poradce vám nabízím individuální přístup, transparentnost a profesionalitu.
            Společně najdeme investiční strategii, která bude přesně odpovídat vašim potřebám a finančním možnostem.
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
