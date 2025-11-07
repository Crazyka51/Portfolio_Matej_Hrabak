"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function EcommerceArticle() {
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
              <span className="bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full text-sm">E-commerce</span>
              <span className="bg-violet-900/50 text-violet-300 px-3 py-1 rounded-full text-sm">Payments</span>
              <span className="bg-amber-900/50 text-amber-300 px-3 py-1 rounded-full text-sm">Business</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              E-commerce Řešení: Jak Postavit Úspěšný Online Obchod
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>9. listopadu 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>20 min čtení</span>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder.svg"
                alt="E-commerce Development"
                fill
                className="object-cover"
              />
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Vytvoření úspěšného e-commerce řešení vyžaduje mnohem víc než jen pěkný design. Musíte zvládnout
              platební brány, správu zásob, bezpečnost, výkon a skvělou uživatelskou zkušenost. Pojďme si projít
              všechny klíčové aspekty moderního online obchodu.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">1. Výběr Platformy</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-emerald-400">Hotová Řešení</h3>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <h4 className="text-lg font-semibold mb-3 text-white">Shopify</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                <li>Nejjednodušší start - hotovo za několik hodin</li>
                <li>Vše v jednom - hosting, platby, témata</li>
                <li>Tisíce aplikací pro rozšíření</li>
                <li>Ideální pro malé až střední obchody</li>
              </ul>
              
              <h4 className="text-lg font-semibold mb-3 text-white mt-6">WooCommerce (WordPress)</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Zdarma open-source řešení</li>
                <li>Nekonečná flexibilita díky pluginům</li>
                <li>Vyžaduje vlastní hosting</li>
                <li>Dobrá volba pro WordPress uživatele</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-emerald-400">Custom Řešení</h3>
            <p className="text-gray-300 mb-4">
              Pro unikátní požadavky si můžete postavit vlastní řešení s Next.js, React nebo jiným moderním
              frameworkem. Získáte maximální kontrolu, ale vyžaduje to více development času.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">2. Produktový Katalog</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">Database Schema</h3>
            <p className="text-gray-300 mb-4">
              Dobře navržená databázová struktura je základ e-commerce:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-blue-400">{`// Prisma schema pro produkty
model Product {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  description String
  price       Decimal  @db.Decimal(10, 2)
  salePrice   Decimal? @db.Decimal(10, 2)
  sku         String   @unique
  stock       Int      @default(0)
  images      Image[]
  category    Category @relation(fields: [categoryId], references: [id])
  categoryId  String
  variants    Variant[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model Variant {
  id        String  @id @default(cuid())
  product   Product @relation(fields: [productId], references: [id])
  productId String
  name      String  // např. "Velikost", "Barva"
  value     String  // např. "L", "Červená"
  price     Decimal @db.Decimal(10, 2)
  stock     Int
  sku       String  @unique
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">Správa Variant</h3>
            <p className="text-gray-300 mb-4">
              Produkty často mají varianty (velikost, barva). Musíte zvládnout kombinace a jejich dostupnost:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-green-400">{`function VariantSelector({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null)

  const availableVariants = product.variants.filter(v => v.stock > 0)

  return (
    <div>
      <div className="mb-4">
        <label>Velikost:</label>
        <div className="flex gap-2">
          {availableVariants.map(variant => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariant(variant)}
              className={\`
                px-4 py-2 border rounded
                \${selectedVariant?.id === variant.id ? 'border-blue-500' : ''}
                \${variant.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''}
              \`}
              disabled={variant.stock === 0}
            >
              {variant.value}
            </button>
          ))}
        </div>
      </div>

      {selectedVariant && (
        <p className="text-sm text-gray-400">
          Skladem: {selectedVariant.stock} ks
        </p>
      )}
    </div>
  )
}`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">3. Nákupní Košík</h2>

            <p className="text-gray-300 mb-4">
              Košík musí být rychlý, spolehlivý a persistentní:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-purple-400">{`// Zustand store pro košík
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  productId: string
  variantId?: string
  quantity: number
  price: number
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  total: () => number
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (newItem) => set((state) => {
        const existingItem = state.items.find(
          item => item.productId === newItem.productId && 
                  item.variantId === newItem.variantId
        )

        if (existingItem) {
          return {
            items: state.items.map(item =>
              item.productId === newItem.productId
                ? { ...item, quantity: item.quantity + newItem.quantity }
                : item
            )
          }
        }

        return { items: [...state.items, newItem] }
      }),

      removeItem: (productId) => set((state) => ({
        items: state.items.filter(item => item.productId !== productId)
      })),

      updateQuantity: (productId, quantity) => set((state) => ({
        items: state.items.map(item =>
          item.productId === productId
            ? { ...item, quantity }
            : item
        )
      })),

      clearCart: () => set({ items: [] }),

      total: () => {
        const { items } = get()
        return items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      }
    }),
    {
      name: 'cart-storage', // LocalStorage key
    }
  )
)`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">4. Platební Brány</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-violet-400">Stripe</h3>
            <p className="text-gray-300 mb-4">
              Stripe je nejpoužívanější platební brána s vynikající developer experience:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-blue-400">{`// API route pro vytvoření platby
import Stripe from 'stripe'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(request: Request) {
  const { items } = await request.json()

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map(item => ({
        price_data: {
          currency: 'czk',
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: item.price * 100, // Stripe používá haléře
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: \`\${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}\`,
      cancel_url: \`\${process.env.NEXT_PUBLIC_URL}/cart\`,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    return NextResponse.json(
      { error: 'Payment failed' },
      { status: 500 }
    )
  }
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-violet-400">PayPal</h3>
            <p className="text-gray-300 mb-4">
              PayPal je další populární volba, zejména pro mezinárodní platby:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-green-400">{`'use client'

import { PayPalButtons } from '@paypal/react-paypal-js'

function CheckoutButton({ amount }: { amount: number }) {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: amount.toString(),
            },
          }],
        })
      }}
      onApprove={async (data, actions) => {
        const details = await actions.order?.capture()
        
        // Uložit objednávku do DB
        await fetch('/api/orders', {
          method: 'POST',
          body: JSON.stringify({ orderId: details.id })
        })
      }}
    />
  )
}`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">5. Objednávky a Fulfillment</h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-amber-400">{`model Order {
  id            String      @id @default(cuid())
  orderNumber   String      @unique
  userId        String?
  user          User?       @relation(fields: [userId], references: [id])
  
  // Produkty v objednávce
  items         OrderItem[]
  
  // Dodací adresa
  shippingName     String
  shippingAddress  String
  shippingCity     String
  shippingZip      String
  shippingCountry  String
  
  // Fakturační adresa
  billingName      String?
  billingAddress   String?
  
  // Ceny
  subtotal      Decimal  @db.Decimal(10, 2)
  shipping      Decimal  @db.Decimal(10, 2)
  tax           Decimal  @db.Decimal(10, 2)
  total         Decimal  @db.Decimal(10, 2)
  
  // Status
  status        OrderStatus @default(PENDING)
  paymentStatus PaymentStatus @default(PENDING)
  
  // Tracking
  trackingNumber String?
  
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}

enum OrderStatus {
  PENDING
  CONFIRMED
  PROCESSING
  SHIPPED
  DELIVERED
  CANCELLED
}

enum PaymentStatus {
  PENDING
  PAID
  FAILED
  REFUNDED
}`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">6. Správa Zásob</h2>

            <p className="text-gray-300 mb-4">
              Důležité je zajistit, aby zákazníci nemohli koupit vyprodané zboží:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-red-400">{`async function createOrder(items: CartItem[]) {
  // Začni transakci
  const result = await prisma.$transaction(async (tx) => {
    // Zkontroluj dostupnost všech položek
    for (const item of items) {
      const product = await tx.product.findUnique({
        where: { id: item.productId }
      })

      if (!product || product.stock < item.quantity) {
        throw new Error(\`Product \${item.productId} not available\`)
      }

      // Sniž zásoby
      await tx.product.update({
        where: { id: item.productId },
        data: {
          stock: {
            decrement: item.quantity
          }
        }
      })
    }

    // Vytvoř objednávku
    const order = await tx.order.create({
      data: {
        items: {
          create: items.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
          }))
        },
        total: calculateTotal(items)
      }
    })

    return order
  })

  return result
}`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">7. Email Notifikace</h2>

            <p className="text-gray-300 mb-4">
              Automatické emaily zvyšují důvěru zákazníků:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Potvrzení objednávky</li>
              <li>Informace o odeslání</li>
              <li>Tracking info</li>
              <li>Request na recenzi</li>
              <li>Abandoned cart reminder</li>
            </ul>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-green-400">{`import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

async function sendOrderConfirmation(order: Order) {
  await resend.emails.send({
    from: 'obchod@example.com',
    to: order.user.email,
    subject: \`Potvrzení objednávky #\${order.orderNumber}\`,
    html: \`
      <h1>Děkujeme za objednávku!</h1>
      <p>Číslo objednávky: <strong>#\${order.orderNumber}</strong></p>
      
      <h2>Objednané produkty:</h2>
      <ul>
        \${order.items.map(item => \`
          <li>\${item.product.name} - \${item.quantity}x \${item.price} Kč</li>
        \`).join('')}
      </ul>
      
      <p><strong>Celkem: \${order.total} Kč</strong></p>
      
      <p>Objednávku expedujeme do 2 pracovních dnů.</p>
    \`
  })
}`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">8. SEO pro E-commerce</h2>

            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 my-6">
              <h4 className="text-xl font-semibold mb-3 text-blue-400">Klíčové SEO praktiky:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Unikátní product descriptions</strong> - Ne kopírované od výrobce
                </li>
                <li>
                  <strong>Structured data</strong> - Schema.org markup pro produkty
                </li>
                <li>
                  <strong>Optimalizované obrázky</strong> - Alt texty, WebP formát
                </li>
                <li>
                  <strong>Fast loading</strong> - Core Web Vitals
                </li>
                <li>
                  <strong>Internal linking</strong> - Související produkty
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-blue-400">{`// Structured data pro produkt
export function ProductSchema({ product }: { product: Product }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images.map(img => img.url),
    description: product.description,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: product.brand
    },
    offers: {
      '@type': 'Offer',
      url: \`https://example.com/products/\${product.slug}\`,
      priceCurrency: 'CZK',
      price: product.price,
      availability: product.stock > 0 
        ? 'https://schema.org/InStock' 
        : 'https://schema.org/OutOfStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.averageRating,
      reviewCount: product.reviewCount
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}`}</code>
              </pre>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">9. Analytics a Conversion Optimization</h2>

            <p className="text-gray-300 mb-4">Měřte klíčové metriky:</p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>
                <strong className="text-white">Conversion Rate</strong> - Procento návštěvníků, kteří nakoupí
              </li>
              <li>
                <strong className="text-white">Average Order Value (AOV)</strong> - Průměrná hodnota objednávky
              </li>
              <li>
                <strong className="text-white">Cart Abandonment Rate</strong> - Opuštěné košíky
              </li>
              <li>
                <strong className="text-white">Customer Lifetime Value (CLV)</strong> - Hodnota zákazníka
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">10. Bezpečnost</h2>

            <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 my-6">
              <h4 className="text-xl font-semibold mb-3 text-red-400">Kritické bezpečnostní požadavky:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>SSL Certifikát</strong> - HTTPS je povinnost
                </li>
                <li>
                  <strong>PCI DSS Compliance</strong> - Pro zpracování karet (nebo použít Stripe/PayPal)
                </li>
                <li>
                  <strong>Rate Limiting</strong> - Ochrana proti brute force útokům
                </li>
                <li>
                  <strong>Input Validation</strong> - Všechny uživatelské vstupy
                </li>
                <li>
                  <strong>GDPR Compliance</strong> - Ochrana osobních údajů
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Závěr</h2>

            <p className="text-gray-300 mb-4">
              Vytvoření úspěšného e-commerce je komplexní úkol vyžadující péči o mnoho detailů. Klíčem k úspěchu je:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Začít s jednoduchým MVP a iterovat</li>
              <li>Použít osvědčené platební brány</li>
              <li>Zajistit bezpečnost od začátku</li>
              <li>Optimalizovat pro konverze</li>
              <li>Měřit vše a neustále zlepšovat</li>
            </ul>

            <div className="bg-gradient-to-r from-emerald-900/20 to-violet-900/20 border border-emerald-800/50 rounded-lg p-6 mt-8 mb-8">
              <p className="text-lg text-gray-200">
                💡 <strong>Pro tip:</strong> Nezačínejte budováním vlastního platebního systému. Použijte Stripe nebo
                PayPal. Ušetříte si měsíce vývoje a získáte PCI compliance zdarma. Vlastní řešení má smysl pouze pro
                velmi specifické požadavky.
              </p>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-violet-900/20 border border-emerald-700/50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4 text-white">Chcete spustit vlastní e-shop?</h3>
              <p className="text-lg text-gray-200 mb-6">
                Pomůžu vám vytvořit profesionální e-commerce řešení přesně podle vašich potřeb. Mám zkušenosti 
                s integrací platebních bran (Stripe, PayPal), správou produktů a objednávek, optimalizací pro konverze 
                i SEO. Ať už potřebujete menší boutique e-shop nebo rozsáhlý online obchod s tisíci produkty, 
                společně vytvoříme řešení, které vám bude přinášet prodeje.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/webovy-vyvojar/kontakt"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Nezávazná poptávka
                  <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                </Link>
                <Link 
                  href="/webovy-vyvojar/projekty"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Reference
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
                href="/webovy-vyvojar/blog/backend-development"
                className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-xl font-semibold mb-2">Backend Development</h4>
                <p className="text-gray-400 text-sm">Kompletní průvodce backend technologiemi a architekturou.</p>
              </Link>
              <Link
                href="/webovy-vyvojar/blog/optimalizace-vykonu"
                className="border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
              >
                <h4 className="text-xl font-semibold mb-2">Optimalizace výkonu</h4>
                <p className="text-gray-400 text-sm">Jak zajistit rychlý e-commerce pro maximální konverze.</p>
              </Link>
            </div>
          </div>
        </motion.article>
      </main>

      <WebDevFooter />
    </div>
  )
}
