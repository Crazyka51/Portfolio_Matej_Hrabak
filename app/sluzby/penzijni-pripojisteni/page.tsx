import Link from "next/link"
import Image from "next/image"
import { Home, User, FolderKanban, FileText, ImageIcon, Users, ArrowRight, Check } from "lucide-react"

export default function PensionInsurancePage() {
  return (
    <div className="min-h-screen bg-[#050A14] text-white">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-4">
        <nav className="flex justify-center">
          <div className="flex space-x-4 bg-[#111827]/60 px-6 py-2 rounded-full backdrop-blur-sm">
            <Link href="/" className="flex items-center space-x-1 px-2 py-1 hover:text-gray-300 transition-colors">
              <Home size={18} />
              <span>Domů</span>
            </Link>
            <Link href="/o-mne" className="flex items-center space-x-1 px-2 py-1 hover:text-gray-300 transition-colors">
              <User size={18} />
              <span>O mně</span>
            </Link>
            <Link
              href="/projekty"
              className="flex items-center space-x-1 px-2 py-1 hover:text-gray-300 transition-colors"
            >
              <FolderKanban size={18} />
              <span>Projekty</span>
            </Link>
            <Link href="/blog" className="flex items-center space-x-1 px-2 py-1 hover:text-gray-300 transition-colors">
              <FileText size={18} />
              <span>Blog</span>
            </Link>
            <Link
              href="/galerie"
              className="flex items-center space-x-1 px-2 py-1 hover:text-gray-300 transition-colors"
            >
              <ImageIcon size={18} />
              <span>Galerie</span>
            </Link>
          </div>
          <div className="absolute right-4 top-4 text-sm text-gray-400">
            {new Date().toLocaleTimeString("cs-CZ", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            })}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-12">
          <Users className="text-red-500 h-12 w-12 mr-4" />
          <h1 className="text-4xl font-bold">Penzijní připojištění</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <div>
            <Image
              src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=2487&auto=format&fit=crop"
              alt="Penzijní připojištění"
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
            <h2 className="text-2xl font-semibold mb-4">Zajistěte si finanční jistotu na důchod</h2>
            <p className="text-gray-300 mb-6">
              Penzijní připojištění je jedním z nejefektivnějších způsobů, jak se zajistit na důchod. Díky státním
              příspěvkům a daňovým úlevám je to výhodná forma spoření, která vám pomůže udržet životní standard i v
              důchodovém věku.
            </p>
            <p className="text-gray-300 mb-6">
              Jako nezávislý pojišťovací poradce vám pomohu vybrat nejvhodnější penzijní fond a nastavit optimální výši
              příspěvků. Vysvětlím vám všechny výhody a možnosti, které penzijní připojištění nabízí, a pomůžu vám
              vytvořit dlouhodobý plán, který bude odpovídat vašim finančním možnostem a cílům.
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
          <h2 className="text-2xl font-semibold mb-8 text-center">Výhody penzijního připojištění</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#111827]/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">Státní podpora</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Státní příspěvky až 230 Kč měsíčně</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Daňové úlevy až 3 600 Kč ročně</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Příspěvky od zaměstnavatele</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Osvobození od daně z příjmu</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#111827]/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">Flexibilita</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Možnost změny výše příspěvků</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Přerušení placení</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Možnost předčasného výběru</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Různé strategie spoření</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#111827]/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">Bezpečnost</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Státní dohled nad penzijními fondy</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Konzervativní investiční strategie</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Garance nezáporného zhodnocení</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>Transparentní podmínky</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Začněte myslet na svou budoucnost již dnes</h2>
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

      <footer className="container mx-auto px-4 py-8 mt-24 border-t border-gray-800">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">© 2025 / Matěj Hrabák / Build by UI</p>
          <div className="flex space-x-4">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a href="mailto:info@example.com" className="text-gray-400 hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
