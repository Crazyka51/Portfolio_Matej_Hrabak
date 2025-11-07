"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function ReactNextJSArticle() {
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
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">Next.js</span>
              <span className="bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded-full text-sm">SSR</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              React & Next.js: Kompletní Průvodce Pro Rok 2025
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>8. listopadu 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>22 min čtení</span>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder.svg"
                alt="React & Next.js"
                fill
                className="object-cover"
              />
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              React a Next.js dominují světu moderního web developmentu. React poskytuje komponentový přístup a
              deklarativní UI, zatímco Next.js přidává Server-Side Rendering, Static Generation a další pokročilé
              funkce. Pojďme prozkoumat, jak tyto technologie využít na maximum.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">1. React Fundamentals</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">Komponenty a Props</h3>
            <p className="text-gray-300 mb-4">
              React je postaven na konceptu znovupoužitelných komponent. Každá komponenta je samostatná jednotka s
              vlastní logikou a vzhledem:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-blue-400">{`interface ButtonProps {
  variant: 'primary' | 'secondary'
  onClick: () => void
  children: React.ReactNode
  disabled?: boolean
}

export function Button({ 
  variant, 
  onClick, 
  children, 
  disabled = false 
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={\`btn btn-\${variant}\`}
    >
      {children}
    </button>
  )
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">State Management s useState</h3>
            <p className="text-gray-300 mb-4">
              useState je hook pro správu lokálního stavu komponenty:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-green-400">{`function Counter() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState<number[]>([])

  const increment = () => {
    setCount(prev => prev + 1)
    setHistory(prev => [...prev, count + 1])
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
      <p>History: {history.join(', ')}</p>
    </div>
  )
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">Effects s useEffect</h3>
            <p className="text-gray-300 mb-4">
              useEffect se používá pro side effects - data fetching, subscriptions, DOM manipulace:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-purple-400">{`function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function fetchUser() {
      try {
        const data = await fetch(\`/api/users/\${userId}\`)
        const json = await data.json()
        
        if (!cancelled) {
          setUser(json)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchUser()

    // Cleanup function
    return () => {
      cancelled = true
    }
  }, [userId]) // Dependency array

  if (loading) return <Spinner />
  return <div>{user?.name}</div>
}`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">2. Pokročilé React Hooks</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-cyan-400">useMemo & useCallback</h3>
            <p className="text-gray-300 mb-4">
              Optimalizační hooks pro prevenci zbytečných re-renderů:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-amber-400">{`function ExpensiveComponent({ items, filter }: Props) {
  // Memoizace expensive výpočtu
  const filteredItems = useMemo(() => {
    console.log('Filtering items...')
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    )
  }, [items, filter])

  // Memoizace callback funkce
  const handleClick = useCallback((id: string) => {
    console.log('Clicked:', id)
  }, []) // Prázdný array = funkce se vytvoří jen jednou

  return (
    <ul>
      {filteredItems.map(item => (
        <li key={item.id} onClick={() => handleClick(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  )
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-cyan-400">useContext</h3>
            <p className="text-gray-300 mb-4">
              Sdílení dat napříč komponentami bez prop drilling:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-green-400">{`const ThemeContext = createContext<'light' | 'dark'>('light')

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  return (
    <ThemeContext.Provider value={theme}>
      <Navbar />
      <Content />
    </ThemeContext.Provider>
  )
}

function Button() {
  const theme = useContext(ThemeContext)
  return <button className={\`btn-\${theme}\`}>Click me</button>
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-cyan-400">useReducer</h3>
            <p className="text-gray-300 mb-4">
              Pro komplexní state logiku, podobně jako Redux:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-blue-400">{`type State = { count: number; history: number[] }
type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
        history: [...state.history, state.count + 1]
      }
    case 'decrement':
      return {
        count: state.count - 1,
        history: [...state.history, state.count - 1]
      }
    case 'reset':
      return { count: 0, history: [] }
    default:
      return state
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { 
    count: 0, 
    history: [] 
  })

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">3. Next.js App Router</h2>

            <p className="text-gray-300 mb-4">
              App Router je nová architektura Next.js 13+ postavená na React Server Components. Přináší lepší výkon a
              developer experience.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-green-400">File-based Routing</h3>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-gray-300">{`app/
├── layout.tsx          # Root layout
├── page.tsx            # Homepage (/)
├── about/
│   └── page.tsx        # /about
├── blog/
│   ├── page.tsx        # /blog
│   └── [slug]/
│       └── page.tsx    # /blog/some-post
└── api/
    └── users/
        └── route.ts    # API route /api/users`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-green-400">Server Components</h3>
            <p className="text-gray-300 mb-4">
              Komponenty v app/ jsou ve výchozím stavu Server Components - renderují se na serveru:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-blue-400">{`// app/blog/page.tsx - Server Component
async function BlogPage() {
  // Data fetching přímo v komponentě!
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json())

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-green-400">Client Components</h3>
            <p className="text-gray-300 mb-4">Pro interaktivitu použijte "use client" directive:</p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-purple-400">{`'use client'

import { useState } from 'react'

export function LikeButton() {
  const [likes, setLikes] = useState(0)

  return (
    <button onClick={() => setLikes(prev => prev + 1)}>
      ❤️ {likes}
    </button>
  )
}`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">4. Data Fetching Patterns</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-orange-400">Static Generation (SSG)</h3>
            <p className="text-gray-300 mb-4">
              Stránka se vygeneruje při buildu - nejrychlejší možnost:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-green-400">{`// Automaticky static díky fetch cache
async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetch(
    \`https://api.example.com/products/\${params.id}\`
  ).then(res => res.json())

  return <ProductDetail product={product} />
}

// Generování všech možných stránek při buildu
export async function generateStaticParams() {
  const products = await fetch('https://api.example.com/products')
    .then(res => res.json())

  return products.map((product) => ({
    id: product.id,
  }))
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-orange-400">Server-Side Rendering (SSR)</h3>
            <p className="text-gray-300 mb-4">Data se fetchují při každém requestu:</p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-blue-400">{`async function DashboardPage() {
  // No cache = SSR při každém requestu
  const data = await fetch('https://api.example.com/dashboard', {
    cache: 'no-store'
  }).then(res => res.json())

  return <Dashboard data={data} />
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-orange-400">Incremental Static Regeneration (ISR)</h3>
            <p className="text-gray-300 mb-4">Kombinace SSG a SSR - statická stránka s revalidací:</p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-purple-400">{`async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetch(
    \`https://api.example.com/posts/\${params.slug}\`,
    { 
      next: { revalidate: 3600 } // Revalidace každou hodinu
    }
  ).then(res => res.json())

  return <Article post={post} />
}`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">5. API Routes</h2>

            <p className="text-gray-300 mb-4">Next.js umožňuje vytvářet API endpointy přímo v aplikaci:</p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-green-400">{`// app/api/users/route.ts
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page') || '1'

  const users = await db.user.findMany({
    skip: (parseInt(page) - 1) * 10,
    take: 10
  })

  return NextResponse.json(users)
}

export async function POST(request: Request) {
  const body = await request.json()

  const user = await db.user.create({
    data: {
      name: body.name,
      email: body.email
    }
  })

  return NextResponse.json(user, { status: 201 })
}`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">6. Image Optimization</h2>

            <p className="text-gray-300 mb-4">
              Next.js Image komponenta automaticky optimalizuje obrázky:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-blue-400">{`import Image from 'next/image'

function ProductCard({ product }) {
  return (
    <div>
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={400}
        height={300}
        priority // Pro above-the-fold obrázky
        placeholder="blur" // Blur placeholder při načítání
        blurDataURL={product.blurDataUrl}
        quality={90}
      />
    </div>
  )
}`}</code>
              </pre>
            </div>

            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 my-6">
              <h4 className="text-xl font-semibold mb-3 text-blue-400">Výhody Next.js Image:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Automatická optimalizace formátu (WebP, AVIF)</li>
                <li>Responsive images s různými velikostmi</li>
                <li>Lazy loading ve výchozím stavu</li>
                <li>Prevence layout shift</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">7. Middleware</h2>

            <p className="text-gray-300 mb-4">
              Middleware běží před requestem a umožňuje autentizaci, redirecty, atd.:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-purple-400">{`// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')

  // Ochrana dashboard routy
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // A/B testing
  if (request.nextUrl.pathname === '/') {
    const bucket = Math.random() > 0.5 ? 'a' : 'b'
    const response = NextResponse.next()
    response.cookies.set('bucket', bucket)
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/dashboard/:path*']
}`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">8. State Management</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-cyan-400">Zustand</h3>
            <p className="text-gray-300 mb-4">
              Moderní, minimalistická alternativa k Reduxu:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-green-400">{`import { create } from 'zustand'

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  
  addItem: (item) => set((state) => ({
    items: [...state.items, item]
  })),
  
  removeItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),
  
  clearCart: () => set({ items: [] })
}))

// Použití v komponentě
function CartButton() {
  const items = useCartStore(state => state.items)
  const addItem = useCartStore(state => state.addItem)

  return <button>Cart ({items.length})</button>
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-cyan-400">React Query (TanStack Query)</h3>
            <p className="text-gray-300 mb-4">Pro server state management:</p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-blue-400">{`'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

function UserProfile({ userId }: { userId: string }) {
  const queryClient = useQueryClient()

  // Data fetching s automatickým cachingem
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetch(\`/api/users/\${userId}\`).then(r => r.json()),
    staleTime: 5 * 60 * 1000 // 5 minut
  })

  // Mutation pro update
  const updateMutation = useMutation({
    mutationFn: (updates) => 
      fetch(\`/api/users/\${userId}\`, {
        method: 'PATCH',
        body: JSON.stringify(updates)
      }),
    onSuccess: () => {
      // Invalidace cache pro refresh
      queryClient.invalidateQueries({ queryKey: ['user', userId] })
    }
  })

  if (isLoading) return <Spinner />
  if (error) return <Error />

  return <div>{data.name}</div>
}`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">9. Performance Optimization</h2>

            <div className="bg-amber-900/20 border border-amber-800 rounded-lg p-6 my-6">
              <h4 className="text-xl font-semibold mb-3 text-amber-400">Best Practices:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Code Splitting</strong> - Dynamic imports pro lazy loading
                </li>
                <li>
                  <strong>Bundle Analysis</strong> - Analyzujte velikost bundlu
                </li>
                <li>
                  <strong>Memo Components</strong> - React.memo pro prevenci re-renderů
                </li>
                <li>
                  <strong>Virtualization</strong> - Pro dlouhé seznamy (react-window)
                </li>
                <li>
                  <strong>Suspense</strong> - Pro lepší UX při načítání
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-purple-400">{`// Dynamic Import
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(
  () => import('@/components/HeavyComponent'),
  { 
    loading: () => <Spinner />,
    ssr: false // Disable SSR pro tento komponent
  }
)

// React.memo
const ExpensiveListItem = React.memo(({ item }) => {
  return <div>{item.name}</div>
}, (prevProps, nextProps) => {
  // Custom comparison
  return prevProps.item.id === nextProps.item.id
})`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">10. Testing</h2>

            <p className="text-gray-300 mb-4">
              Testování je klíčové pro udržitelný kód:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-green-400">{`// Component test s React Testing Library
import { render, screen, fireEvent } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  it('increments count when button clicked', () => {
    render(<Counter />)
    
    const button = screen.getByRole('button', { name: /increment/i })
    fireEvent.click(button)
    
    expect(screen.getByText('Count: 1')).toBeInTheDocument()
  })
})`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Závěr</h2>

            <p className="text-gray-300 mb-4">
              React a Next.js společně vytváří mocný stack pro moderní web development. Klíčem k úspěchu je:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Pochopit rozdíl mezi Server a Client Components</li>
              <li>Vybrat správnou data fetching strategii (SSG/SSR/ISR)</li>
              <li>Používat správný nástroj pro state management</li>
              <li>Optimalizovat výkon od začátku</li>
              <li>Testovat důkladně</li>
            </ul>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-lg p-6 mt-8 mb-8">
              <p className="text-lg text-gray-200">
                💡 <strong>Pro tip:</strong> Next.js App Router je budoucnost. Server Components výrazně redukují
                JavaScript bundle a zlepšují výkon. Pokud začínáte nový projekt, použijte App Router, ne Pages Router.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4 text-white">Plánujete projekt v React nebo Next.js?</h3>
              <p className="text-lg text-gray-200 mb-6">
                React a Next.js jsou moje hlavní specializace. Vytvářím moderní webové aplikace s důrazem na výkon, 
                SEO a uživatelskou zkušenost. Využívám nejnovější funkce Next.js 15 včetně App Routeru, Server Components 
                a pokročilých optimalizačních technik. Ať už potřebujete firemní prezentaci, e-commerce nebo komplexní 
                webovou aplikaci, dokážu vám vytvořit řešení na míru.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/webovy-vyvojar/kontakt"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Promluvme si o projektu
                  <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                </Link>
                <Link 
                  href="/webovy-vyvojar/projekty"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Moje práce
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
                <p className="text-gray-400 text-sm">Kompletní průvodce moderními frontend technologiemi.</p>
              </Link>
              <Link
                href="/webovy-vyvojar/blog/optimalizace-vykonu"
                className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-xl font-semibold mb-2">Optimalizace výkonu</h4>
                <p className="text-gray-400 text-sm">Praktické tipy pro maximální výkon webových aplikací.</p>
              </Link>
            </div>
          </div>
        </motion.article>
      </main>

      <WebDevFooter />
    </div>
  )
}
