"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function PerformanceOptimizationArticle() {
  return (
    <div className="min-h-screen bg-[#010714] text-white">
      <WebDevNavbar />

      <main className="container mx-auto px-4 py-16">
        <Link
          href="/webovy-vyvojar/blog"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span>Zpět na blog</span>
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-red-900/50 text-red-300 px-3 py-1 rounded-full text-sm">Performance</span>
              <span className="bg-yellow-900/50 text-yellow-300 px-3 py-1 rounded-full text-sm">Optimization</span>
              <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm">Speed</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Optimalizace Výkonu: Od Pomalé k Bleskurychlé Aplikaci
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>10. listopadu 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>24 min čtení</span>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder.svg"
                alt="Performance Optimization"
                fill
                className="object-cover"
              />
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Výkon není jen o rychlosti - je o uživatelské zkušenosti, SEO rankingu a konverzích. Každá sekunda
              zpoždění může znamenat ztrátu uživatelů. V tomto článku se naučíte, jak optimalizovat webové aplikace
              pro maximální výkon a dosáhnout perfektních Core Web Vitals.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">1. Core Web Vitals</h2>

            <p className="text-gray-300 mb-4">
              Google používá tři klíčové metriky pro hodnocení uživatelské zkušenosti:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <h4 className="text-lg font-semibold mb-3 text-white">Largest Contentful Paint (LCP)</h4>
              <p className="text-gray-300 mb-2">Měří rychlost načtení hlavního obsahu.</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                <li>
                  <span className="text-green-400">Dobré:</span> ≤ 2.5s
                </li>
                <li>
                  <span className="text-yellow-400">Vyžaduje zlepšení:</span> 2.5s - 4s
                </li>
                <li>
                  <span className="text-red-400">Špatné:</span> {'>'} 4s
                </li>
              </ul>

              <h4 className="text-lg font-semibold mb-3 text-white">First Input Delay (FID) / Interaction to Next Paint (INP)</h4>
              <p className="text-gray-300 mb-2">Měří interaktivitu - jak rychle stránka reaguje na kliknutí.</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                <li>
                  <span className="text-green-400">Dobré:</span> ≤ 100ms (FID) / ≤ 200ms (INP)
                </li>
                <li>
                  <span className="text-red-400">Špatné:</span> {'>'} 300ms (FID) / {'>'} 500ms (INP)
                </li>
              </ul>

              <h4 className="text-lg font-semibold mb-3 text-white">Cumulative Layout Shift (CLS)</h4>
              <p className="text-gray-300 mb-2">Měří vizuální stabilitu - nečekané posuny obsahu.</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>
                  <span className="text-green-400">Dobré:</span> ≤ 0.1
                </li>
                <li>
                  <span className="text-red-400">Špatné:</span> {'>'} 0.25
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">2. Optimalizace Obrázků</h2>

            <p className="text-gray-300 mb-4">
              Obrázky často tvoří 50-70% celkové velikosti stránky. Jejich optimalizace je kritická.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">Next.js Image Komponenta</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-green-400">{`import Image from 'next/image'

function ProductImage({ product }) {
  return (
    <div className="relative aspect-square">
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false} // true pro above-the-fold
        quality={85} // 75-90 je sweet spot
        placeholder="blur"
        blurDataURL={product.blurDataUrl}
        loading="lazy"
      />
    </div>
  )
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">Moderní Formáty</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>
                <strong className="text-white">WebP</strong> - 25-35% menší než JPEG, dobrá podpora
              </li>
              <li>
                <strong className="text-white">AVIF</strong> - 50% menší než JPEG, rostoucí podpora
              </li>
              <li>
                <strong className="text-white">SVG</strong> - Pro ikony a jednoduché grafiky
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">Responsive Images</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-purple-400">{`<picture>
  <source 
    srcset="/hero-mobile.webp" 
    type="image/webp" 
    media="(max-width: 768px)"
  />
  <source 
    srcset="/hero-desktop.webp" 
    type="image/webp"
  />
  <img 
    src="/hero-desktop.jpg" 
    alt="Hero" 
    width="1920" 
    height="1080"
  />
</picture>`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">3. Code Splitting</h2>

            <p className="text-gray-300 mb-4">
              Načítejte pouze kód, který uživatel potřebuje, kdy ho potřebuje.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-orange-400">Dynamic Imports</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-blue-400">{`import dynamic from 'next/dynamic'

// Komponenta se načte pouze když je potřeba
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <ChartSkeleton />,
  ssr: false // Vypnout SSR pro tento komponent
})

const Modal = dynamic(() => import('@/components/Modal'))

function Dashboard() {
  const [showChart, setShowChart] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <button onClick={() => setShowChart(true)}>
        Show Chart
      </button>
      
      {/* Chart se načte pouze po kliknutí */}
      {showChart && <HeavyChart />}
      
      {/* Modal se načte pouze když je otevřený */}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  )
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-orange-400">Route-based Splitting</h3>
            <p className="text-gray-300 mb-4">
              Next.js automaticky rozděluje kód podle stránek:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-gray-300">{`app/
├── page.tsx           # Bundle pro homepage
├── about/
│   └── page.tsx       # Separátní bundle pro /about
└── dashboard/
    └── page.tsx       # Načte se pouze na /dashboard`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">4. Caching Strategie</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-cyan-400">HTTP Caching</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-green-400">{`// next.config.mjs
const nextConfig = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/:path*.css',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=60, stale-while-revalidate=30'
          }
        ]
      }
    ]
  }
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-cyan-400">Redis Caching</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-blue-400">{`import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.REDIS_URL,
  token: process.env.REDIS_TOKEN
})

async function getProducts() {
  // Pokus o načtení z cache
  const cached = await redis.get('products')
  
  if (cached) {
    return cached
  }

  // Pokud není v cache, načti z DB
  const products = await db.product.findMany()

  // Ulož do cache na 1 hodinu
  await redis.set('products', products, { ex: 3600 })

  return products
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-cyan-400">React Query Cache</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-purple-400">{`const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // Data jsou "fresh" 5 minut
      cacheTime: 10 * 60 * 1000, // Cache vydrží 10 minut
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
})`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">5. Bundle Optimization</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Bundle Analysis</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-green-400">{`// Nainstalovat
npm install @next/bundle-analyzer

// next.config.mjs
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

export default withBundleAnalyzer({
  // ... další konfigurace
})

// Spustit analýzu
ANALYZE=true npm run build`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Tree Shaking</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-red-400">{`// ❌ Špatně - importuje celou knihovnu
import _ from 'lodash'
import { Button } from '@mui/material'

// ✅ Dobře - importuje pouze potřebné funkce
import debounce from 'lodash/debounce'
import Button from '@mui/material/Button'`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">6. Database Optimization</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-green-400">Indexy</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-blue-400">{`// Prisma schema
model Product {
  id          String   @id @default(cuid())
  slug        String   @unique // Automatický index
  name        String
  categoryId  String
  price       Decimal
  createdAt   DateTime @default(now())

  // Compound index pro časté dotazy
  @@index([categoryId, price])
  @@index([createdAt])
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-green-400">Query Optimization</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-purple-400">{`// ❌ N+1 problém - 1 dotaz + N dotazů
const users = await prisma.user.findMany()
for (const user of users) {
  const posts = await prisma.post.findMany({ 
    where: { userId: user.id } 
  })
}

// ✅ Jeden dotaz s include
const users = await prisma.user.findMany({
  include: {
    posts: true
  }
})

// ✅ Nebo použijte select pro menší payload
const users = await prisma.user.findMany({
  select: {
    id: true,
    name: true,
    posts: {
      select: {
        id: true,
        title: true
      }
    }
  }
})`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">7. Frontend Performance</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">Virtualizace Seznamů</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-green-400">{`import { FixedSizeList } from 'react-window'

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  )

  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  )
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">Debouncing & Throttling</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-blue-400">{`import { useDebouncedCallback } from 'use-debounce'

function SearchInput() {
  const [results, setResults] = useState([])

  // Debounce - čeká 300ms po posledním zadání
  const debouncedSearch = useDebouncedCallback(
    async (value) => {
      const results = await fetch(\`/api/search?q=\${value}\`)
      setResults(await results.json())
    },
    300
  )

  return (
    <input
      type="text"
      onChange={(e) => debouncedSearch(e.target.value)}
      placeholder="Search..."
    />
  )
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">Memoization</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-purple-400">{`import { useMemo, useCallback } from 'react'

function ExpensiveComponent({ data, filter }) {
  // useMemo pro expensive výpočty
  const filteredData = useMemo(() => {
    console.log('Filtering...')
    return data.filter(item => item.category === filter)
  }, [data, filter])

  // useCallback pro funkce
  const handleClick = useCallback((id) => {
    console.log('Clicked:', id)
  }, [])

  return (
    <div>
      {filteredData.map(item => (
        <Item 
          key={item.id} 
          item={item} 
          onClick={handleClick}
        />
      ))}
    </div>
  )
}

// React.memo pro prevenci re-renderů
const Item = React.memo(({ item, onClick }) => {
  return (
    <div onClick={() => onClick(item.id)}>
      {item.name}
    </div>
  )
})`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">8. CDN a Edge Computing</h2>

            <p className="text-gray-300 mb-4">
              Umístění obsahu blíže k uživatelům dramaticky zrychlí načítání:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>
                <strong className="text-white">Vercel Edge Network</strong> - Automaticky s Next.js
              </li>
              <li>
                <strong className="text-white">Cloudflare CDN</strong> - Globální cache
              </li>
              <li>
                <strong className="text-white">AWS CloudFront</strong> - Integrace s AWS ekosystémem
              </li>
            </ul>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-green-400">{`// Edge function v Next.js
export const runtime = 'edge'

export async function GET(request: Request) {
  // Běží na edge - blízko uživatele
  const data = await fetch('https://api.example.com/data')
  return Response.json(await data.json())
}`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">9. Monitoring a Měření</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-yellow-400">Real User Monitoring (RUM)</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-blue-400">{`// Web Vitals tracking
import { onCLS, onFID, onLCP, onINP } from 'web-vitals'

function sendToAnalytics(metric) {
  const body = JSON.stringify(metric)
  
  // Použij sendBeacon pro spolehlivé odeslání
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/analytics', body)
  } else {
    fetch('/api/analytics', { 
      body, 
      method: 'POST',
      keepalive: true 
    })
  }
}

onCLS(sendToAnalytics)
onFID(sendToAnalytics)
onLCP(sendToAnalytics)
onINP(sendToAnalytics)`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-yellow-400">Performance Budget</h3>

            <div className="bg-amber-900/20 border border-amber-800 rounded-lg p-6 my-6">
              <h4 className="text-xl font-semibold mb-3 text-amber-400">Doporučené limity:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>JavaScript bundle: {'<'} 200 KB (gzipped)</li>
                <li>CSS: {'<'} 50 KB (gzipped)</li>
                <li>Celková velikost stránky: {'<'} 1 MB</li>
                <li>Počet HTTP requestů: {'<'} 50</li>
                <li>Time to Interactive: {'<'} 3.5s</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">10. Performance Checklist</h2>

            <div className="bg-green-900/20 border border-green-800 rounded-lg p-6 my-6">
              <h4 className="text-xl font-semibold mb-3 text-green-400">Frontend:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>✅ Optimalizované obrázky (WebP/AVIF)</li>
                <li>✅ Lazy loading pro obrázky a komponenty</li>
                <li>✅ Code splitting a dynamic imports</li>
                <li>✅ Minifikace CSS a JavaScript</li>
                <li>✅ HTTP/2 nebo HTTP/3</li>
                <li>✅ Gzip nebo Brotli komprese</li>
              </ul>

              <h4 className="text-xl font-semibold mb-3 text-green-400">Backend:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                <li>✅ Database indexy pro časté dotazy</li>
                <li>✅ Redis caching pro hot data</li>
                <li>✅ API response caching</li>
                <li>✅ Query optimization (select only needed)</li>
                <li>✅ Connection pooling</li>
              </ul>

              <h4 className="text-xl font-semibold mb-3 text-green-400">Infrastructure:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>✅ CDN pro statický obsah</li>
                <li>✅ Edge functions pro API</li>
                <li>✅ Load balancing</li>
                <li>✅ Auto-scaling</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Závěr</h2>

            <p className="text-gray-300 mb-4">
              Optimalizace výkonu není jednorázová akce, ale kontinuální proces. Klíčem k úspěchu je:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Měřit před optimalizací - optimalizujte bottlenecky, ne domněnky</li>
              <li>Začít s největšími problémy (obrázky, JavaScript bundle)</li>
              <li>Používat moderní nástroje (Next.js Image, React Query)</li>
              <li>Monitoring v produkci - Real User Monitoring</li>
              <li>Performance budget - zamezit regresi</li>
            </ul>

            <div className="bg-gradient-to-r from-red-900/20 to-yellow-900/20 border border-red-800/50 rounded-lg p-6 mt-8 mb-8">
              <p className="text-lg text-gray-200">
                💡 <strong>Pro tip:</strong> 100ms zpoždění = 1% pokles konverzí. Každá sekunda počítá. Investice do
                performance se vrátí ve vyšších konverzích a lepším SEO rankingu. Začněte s Core Web Vitals a
                optimalizujte obrázky - to jsou nejčastější quick wins.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-900/20 to-yellow-900/20 border border-red-700/50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4 text-white">Váš web je pomalý? Pomohu vám!</h3>
              <p className="text-lg text-gray-200 mb-6">
                Specializuji se na optimalizaci výkonu webových aplikací. Provedu kompletní audit vašeho webu, 
                identifikuji bottlenecky a implementuji řešení pro dosažení perfektních Core Web Vitals. Rychlejší 
                web znamená lepší SEO, vyšší konverze a spokojenější uživatele. Nabízím jak komplexní optimalizaci 
                existujících projektů, tak vytváření nových webů s důrazem na výkon od samého začátku.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/webovy-vyvojar/kontakt"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Bezplatný performance audit
                  <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                </Link>
                <Link 
                  href="/webovy-vyvojar/projekty"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Ukázky optimalizací
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Sdílet článek</h3>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                <Share2 className="h-4 w-4" />
                Twitter
              </button>
              <button className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg transition-colors">
                <Share2 className="h-4 w-4" />
                LinkedIn
              </button>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Související články</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/webovy-vyvojar/blog/frontend-development"
                className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-xl font-semibold mb-2">Moderní Frontend Development</h4>
                <p className="text-gray-400 text-sm">Naučte se moderní technologie pro rychlé weby.</p>
              </Link>
              <Link
                href="/webovy-vyvojar/blog/react-nextjs"
                className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-xl font-semibold mb-2">React & Next.js</h4>
                <p className="text-gray-400 text-sm">Jak využít Next.js pro maximální výkon.</p>
              </Link>
            </div>
          </div>
        </motion.article>
      </main>

      <WebDevFooter />
    </div>
  )
}
