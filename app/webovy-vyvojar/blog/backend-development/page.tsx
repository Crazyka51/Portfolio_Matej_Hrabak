"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function BackendDevelopmentArticle() {
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
              <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-sm">Backend</span>
              <span className="bg-orange-900/50 text-orange-300 px-3 py-1 rounded-full text-sm">Architecture</span>
              <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">APIs</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Backend Development: Od Základů k Microservices
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>7. listopadu 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>18 min čtení</span>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder.svg"
                alt="Backend Development"
                fill
                className="object-cover"
              />
            </div>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Backend development je páteří každé moderní webové aplikace. Zatímco frontend se stará o vizuální
              stránku a uživatelskou zkušenost, backend zajišťuje logiku, ukládání dat, bezpečnost a veškeré operace
              na straně serveru. Pojďme prozkoumat moderní backend technologie a best practices.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">1. Volba Programovacího Jazyka</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-green-400">Node.js & TypeScript</h3>
            <p className="text-gray-300 mb-4">
              Node.js revolucionizoval backend development tím, že umožnil používat JavaScript i na serveru.
              TypeScript pak přidává typovou bezpečnost, která výrazně snižuje počet runtime chyb.
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <h4 className="text-lg font-semibold mb-3 text-white">Výhody Node.js:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Non-blocking I/O pro vysoký výkon</li>
                <li>Obrovský ekosystém NPM balíčků</li>
                <li>Stejný jazyk pro frontend i backend</li>
                <li>Excelentní pro real-time aplikace</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-green-400">Python</h3>
            <p className="text-gray-300 mb-4">
              Python s frameworky jako Django nebo FastAPI je výborná volba pro rapid development. Jeho čistá syntaxe
              a široká podpora pro data science a machine learning z něj dělá univerzální nástroj.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-green-400">Go (Golang)</h3>
            <p className="text-gray-300 mb-4">
              Go nabízí výkon blízký C++ s jednoduchostí Pythonu. Je ideální pro microservices, díky nativní podpoře
              concurrency a rychlé kompilaci.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">2. Frameworky a Knihovny</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">Express.js</h3>
            <p className="text-gray-300 mb-4">
              Express je minimalistický a flexibilní Node.js framework. Jeho middleware systém umožňuje snadné
              přidávání funkcionalit:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-green-400">{`import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(helmet())

// Routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
})

app.listen(3000)`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">NestJS</h3>
            <p className="text-gray-300 mb-4">
              NestJS přináší strukturu a TypeScript-first přístup. Je inspirován Angularem a nabízí dependency
              injection, moduly a dekorátory. Ideální pro větší enterprise projekty.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-400">FastAPI (Python)</h3>
            <p className="text-gray-300 mb-4">
              FastAPI je moderní Python framework s automatickou dokumentací API, validací dat pomocí Pydantic a
              vysokým výkonem díky asynchronní podpoře.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">3. Databáze</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">SQL Databáze</h3>
            <p className="text-gray-300 mb-4">
              PostgreSQL je král relačních databází. Nabízí pokročilé funkce jako JSONB, full-text search a
              geospatial data.
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-blue-400">{`-- Pokročilé PostgreSQL dotazy
SELECT 
  u.name,
  COUNT(o.id) as order_count,
  SUM(o.total) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > NOW() - INTERVAL '30 days'
GROUP BY u.id
HAVING COUNT(o.id) > 5
ORDER BY total_spent DESC;`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">NoSQL Databáze</h3>
            <p className="text-gray-300 mb-4">MongoDB je flexibilní document database, ideální pro:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Rychlý vývoj s měnícím se schématem</li>
              <li>Horizontální škálování</li>
              <li>Ukládání komplexních nested objektů</li>
              <li>Real-time aplikace</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">Redis</h3>
            <p className="text-gray-300 mb-4">
              In-memory databáze perfektní pro caching, session storage a message queues. Redis výrazně zrychlí vaši
              aplikaci.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">4. RESTful API Design</h2>

            <p className="text-gray-300 mb-4">Dobře navržené API je základ úspěšné aplikace:</p>

            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 my-6">
              <h4 className="text-xl font-semibold mb-3 text-blue-400">REST Best Practices</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>GET /api/users</strong> - Získat seznam uživatelů
                </li>
                <li>
                  <strong>GET /api/users/:id</strong> - Získat konkrétního uživatele
                </li>
                <li>
                  <strong>POST /api/users</strong> - Vytvořit nového uživatele
                </li>
                <li>
                  <strong>PUT /api/users/:id</strong> - Aktualizovat uživatele
                </li>
                <li>
                  <strong>DELETE /api/users/:id</strong> - Smazat uživatele
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-orange-400">HTTP Status Codes</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>200 OK - Úspěšný požadavek</li>
              <li>201 Created - Úspěšně vytvořeno</li>
              <li>400 Bad Request - Špatný formát požadavku</li>
              <li>401 Unauthorized - Nevěřifiko</li>
              <li>403 Forbidden - Nemáte oprávnění</li>
              <li>404 Not Found - Nenalezeno</li>
              <li>500 Internal Server Error - Chyba serveru</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">5. GraphQL</h2>

            <p className="text-gray-300 mb-4">
              GraphQL je alternativa k REST, která umožňuje klientům přesně specifikovat, jaká data potřebují:
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-purple-400">{`query GetUserWithPosts {
  user(id: "123") {
    name
    email
    posts {
      title
      createdAt
      comments {
        text
        author {
          name
        }
      }
    }
  }
}`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-purple-400">Výhody GraphQL</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Žádné over-fetching nebo under-fetching dat</li>
              <li>Strongly typed schema</li>
              <li>Pouze jeden endpoint</li>
              <li>Introspection a dokumentace zdarma</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">6. Autentizace a Autorizace</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-red-400">JWT (JSON Web Tokens)</h3>
            <p className="text-gray-300 mb-4">
              JWT je standard pro bezpečný přenos informací mezi stranami. Skládá se ze tří částí: header, payload a
              signature.
            </p>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <pre className="text-sm overflow-x-auto">
                <code className="text-green-400">{`import jwt from 'jsonwebtoken'

// Generování tokenu
const token = jwt.sign(
  { userId: user.id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }
)

// Verifikace tokenu
const decoded = jwt.verify(token, process.env.JWT_SECRET)`}</code>
              </pre>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-red-400">OAuth 2.0</h3>
            <p className="text-gray-300 mb-4">
              OAuth umožňuje uživatelům autorizovat vaši aplikaci přístup k jejich datům na jiných službách (Google,
              GitHub, Facebook) bez sdílení hesla.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">7. Bezpečnost</h2>

            <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 my-6">
              <h4 className="text-xl font-semibold mb-3 text-red-400">Kritické bezpečnostní praktiky</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Input Validation</strong> - Vždy validujte veškerý uživatelský vstup
                </li>
                <li>
                  <strong>SQL Injection Protection</strong> - Používejte prepared statements
                </li>
                <li>
                  <strong>XSS Prevention</strong> - Escapujte HTML v uživatelském vstupu
                </li>
                <li>
                  <strong>CSRF Protection</strong> - Používejte CSRF tokeny
                </li>
                <li>
                  <strong>Rate Limiting</strong> - Omezujte počet požadavků
                </li>
                <li>
                  <strong>HTTPS Only</strong> - Vždy používejte šifrované spojení
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">8. Caching Strategie</h2>

            <p className="text-gray-300 mb-4">Caching může výrazně zlepšit výkon:</p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>
                <strong className="text-white">In-Memory Caching</strong> - Redis, Memcached
              </li>
              <li>
                <strong className="text-white">CDN Caching</strong> - Cloudflare, AWS CloudFront
              </li>
              <li>
                <strong className="text-white">Application-Level Caching</strong> - Memoizace, query caching
              </li>
              <li>
                <strong className="text-white">HTTP Caching</strong> - ETag, Cache-Control headers
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">9. Microservices vs Monolith</h2>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Monolitická Architektura</h3>
            <p className="text-gray-300 mb-4">
              Pro menší projekty je monolith často lepší volba. Jednodušší deployment, jednodušší debugging a nižší
              provozní náklady.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-amber-400">Microservices</h3>
            <p className="text-gray-300 mb-4">Pro velké týmy a komplexní aplikace nabízejí:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Nezávislé nasazování jednotlivých služeb</li>
              <li>Technologická svoboda pro každou službu</li>
              <li>Lepší škálovatelnost</li>
              <li>Izolace chyb</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">10. Message Queues</h2>

            <p className="text-gray-300 mb-4">
              Pro asynchronní zpracování úloh používejte message queues jako RabbitMQ, Apache Kafka nebo AWS SQS.
              Ideální pro:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Email notifikace</li>
              <li>Generování reportů</li>
              <li>Zpracování obrázků/videí</li>
              <li>Background joby</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">11. Monitoring a Logging</h2>

            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
              <h4 className="text-lg font-semibold mb-3 text-white">Klíčové metriky:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Response time a latency</li>
                <li>Error rate</li>
                <li>CPU a memory usage</li>
                <li>Database query performance</li>
                <li>API endpoint usage</li>
              </ul>
            </div>

            <p className="text-gray-300 mb-4">Nástroje: Datadog, New Relic, ELK Stack, Prometheus + Grafana</p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">12. Testing</h2>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>
                <strong className="text-white">Unit Tests</strong> - Testování jednotlivých funkcí (Jest, Vitest)
              </li>
              <li>
                <strong className="text-white">Integration Tests</strong> - Testování spolupráce komponent
              </li>
              <li>
                <strong className="text-white">End-to-End Tests</strong> - Testování celého flow (Playwright)
              </li>
              <li>
                <strong className="text-white">Load Testing</strong> - Testování pod zátěží (k6, Artillery)
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Závěr</h2>

            <p className="text-gray-300 mb-4">
              Backend development je rozsáhlé pole vyžadující znalosti z mnoha oblastí - od databází přes bezpečnost
              až po distribuované systémy. Klíčem k úspěchu je:
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Začít s pevnými základy</li>
              <li>Vybrat správné nástroje pro daný problém</li>
              <li>Myslet na bezpečnost od začátku</li>
              <li>Testovat důkladně</li>
              <li>Monitorovat v produkci</li>
            </ul>

            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-800/50 rounded-lg p-6 mt-8 mb-8">
              <p className="text-lg text-gray-200">
                💡 <strong>Pro tip:</strong> Neexistuje "nejlepší" technologie. Vyberte stack, který odpovídá vašim
                potřebám, velikosti týmu a typu projektu. A nezapomeňte - dobře napsaný monolith je lepší než špatně
                navržené microservices.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-700/50 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4 text-white">Hledáte spolehlivé backend řešení?</h3>
              <p className="text-lg text-gray-200 mb-6">
                Vytvářím robustní a škálovatelné backend systémy s důrazem na bezpečnost, výkon a čistý kód. 
                Mám zkušenosti s Node.js, TypeScript, databázemi (PostgreSQL, MongoDB, Redis) a moderními 
                architekturami. Ať už potřebujete REST API, GraphQL endpoint nebo komplexní backend infrastrukturu, 
                společně najdeme optimální řešení pro váš projekt.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/webovy-vyvojar/kontakt"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Konzultace zdarma
                  <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                </Link>
                <Link 
                  href="/webovy-vyvojar/projekty"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Ukázky projektů
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
                <p className="text-gray-400 text-sm">Praktické tipy pro maximální výkon aplikací.</p>
              </Link>
            </div>
          </div>
        </motion.article>
      </main>

      <WebDevFooter />
    </div>
  )
}
