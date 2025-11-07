"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import WebDevNavbar from "@/app/components/webdev-navbar"
import WebDevFooter from "@/app/components/webdev-footer"

export default function DockerForFrontend() {
  return (
    <div className="min-h-screen bg-[#010714] text-white">
      <WebDevNavbar />

      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/webovy-vyvojar/blog"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zpět na blog
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center text-sm text-gray-400 mb-4">
            <Calendar className="mr-2 h-4 w-4" />
            <span>2. 1. 2025</span>
            <span className="mx-3">•</span>
            <Clock className="mr-2 h-4 w-4" />
            <span>11 min čtení</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Docker pro frontend vývojáře
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Jak využít Docker pro konzistentní vývojové prostředí a zjednodušení nasazení frontend aplikací.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Docker</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">DevOps</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Frontend</span>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[400px] mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-600"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl font-bold mb-4">🐳 Docker</div>
              <div className="text-2xl text-gray-200">Build, Ship, Run</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <h2 className="text-3xl font-bold mt-12 mb-6">Co je Docker a proč byste ho měli znát?</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Docker je jako kufr na cestování. Zabalíte si do něj všechno co potřebujete - oblečení, 
            kosmetiku, nabíječky. Pak ten kufr vezmete kamkoliv a máte vše po ruce. Docker dělá to samé 
            s aplikacemi.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-3">Klasický problém:</h3>
            <p className="text-gray-300 mb-3">
              Vývojář: "U mě to funguje!" 🤷<br/>
              Tester: "No u mě to nefunguje!" 🤦
            </p>
            <p className="text-gray-400 text-sm">
              Důvod? Různé verze Node.js, různé systémy, různé nastavení...
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Řešení s Dockerem:</h3>
            <p className="text-gray-300">
              Aplikace běží ve stejném prostředí všude - na vašem počítači, na testeru, 
              na produkci. Žádné překvapení.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Docker pro frontendisty - Proč?</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            "Docker je přece pro backend!" slyším často. Ne! Frontend vývojáři mají z Dockeru stejné 
            výhody:
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Výhody pro frontend:</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong>✓ Žádné "u mě to funguje":</strong> Stejné prostředí pro celý tým
              </li>
              <li>
                <strong>✓ Jednoduchý onboarding:</strong> Nový kolega? Dva příkazy a má hotovo
              </li>
              <li>
                <strong>✓ Izolace projektů:</strong> Projekt A používá Node 16, projekt B Node 20 - žádný problém
              </li>
              <li>
                <strong>✓ Snadné nasazení:</strong> Co funguje lokálně, funguje na produkci
              </li>
              <li>
                <strong>✓ Konzistentní CI/CD:</strong> Build na vašem počítači = build na serveru
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Základní koncepty (jednoduše)</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Image vs Container</h3>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-300 mb-3">
              <strong>Image (obraz):</strong> Recept na dort
            </p>
            <p className="text-gray-400 text-sm mb-4">
              Popis jak vyrobit prostředí: Node.js 20, npm packages, vaše appka...
            </p>

            <p className="text-gray-300 mb-3">
              <strong>Container (kontejner):</strong> Hotový dort
            </p>
            <p className="text-gray-400 text-sm">
              Běžící instance image. Můžete mít z jednoho receptu (image) mnoho dortů (containers).
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Dockerfile</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Dockerfile je ten recept. Soubor s instrukcemi jak sestavit image.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-400 mb-3">Jednoduchý Dockerfile pro React app:</p>
            <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
{`# Začni s Node.js 20
FROM node:20

# Pracovní adresář v containeru
WORKDIR /app

# Zkopíruj package.json a nainstaluj závislosti
COPY package*.json ./
RUN npm install

# Zkopíruj zbytek aplikace
COPY . .

# Spusť aplikaci
CMD ["npm", "start"]`}
            </pre>
            <p className="text-gray-400 text-sm mt-3">
              To je celé! Těchto pár řádků definuje celé prostředí.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Praktické příklady</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Příklad 1: Next.js aplikace</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Klasická Next.js aplikace - vývojové prostředí i production build.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-400 mb-3">1. Vytvořte Dockerfile:</p>
            <pre className="text-gray-300 font-mono text-sm overflow-x-auto mb-4">
{`FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]`}
            </pre>

            <p className="text-sm text-gray-400 mb-3">2. Spusťte:</p>
            <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
{`docker build -t moje-next-app .
docker run -p 3000:3000 moje-next-app`}
            </pre>

            <p className="text-green-400 mt-3 text-sm">
              Hotovo! Aplikace běží na http://localhost:3000
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Příklad 2: Development s hot reload</h3>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Pro vývoj chcete hot reload - když upravíte soubor, změna se projeví okamžitě.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-400 mb-3">docker-compose.yml pro development:</p>
            <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
{`version: '3.8'
services:
  frontend:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - ./src:/app/src    # Propojí lokální složku s containerem
      - ./public:/app/public
    command: npm run dev`}
            </pre>

            <p className="text-sm text-gray-400 mt-4 mb-3">Spusť jedním příkazem:</p>
            <pre className="text-gray-300 font-mono text-sm">
              docker-compose up
            </pre>

            <p className="text-green-400 mt-3 text-sm">
              Změny v kódu se projeví okamžitě, jako bez Dockeru!
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Multi-stage builds - Menší images</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Pro produkci nechcete devDependencies, zdrojové soubory... Jen zkompilovanou aplikaci. 
            Multi-stage build to vyřeší.
          </p>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-400 mb-3">Optimalizovaný Dockerfile:</p>
            <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
{`# Stage 1: Build
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
RUN npm install --production
CMD ["npm", "start"]`}
            </pre>

            <p className="text-green-400 mt-3 text-sm">
              Výsledek: Image 200 MB místo 800 MB! 4× menší = 4× rychlejší deploy.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Docker Compose - Více služeb najednou</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Frontend často potřebuje backend API, databázi... Docker Compose spustí vše najednou.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-400 mb-3">Příklad: Frontend + Backend + Databáze:</p>
            <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
{`version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend

  backend:
    build: ./backend
    ports:
      - "4000:4000"
    environment:
      DATABASE_URL: postgres://db:5432/myapp
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: tajneheslo
      POSTGRES_DB: myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`}
            </pre>

            <p className="text-sm text-gray-400 mt-4 mb-3">Spusť vše jedním příkazem:</p>
            <pre className="text-gray-300 font-mono text-sm">
              docker-compose up
            </pre>

            <p className="text-green-400 mt-3 text-sm">
              Frontend, backend i databáze běží! Nový kolega? Jen clone repo a docker-compose up.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Časté problémy a řešení</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Problém 1: Pomalý build</h3>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <p className="text-red-400 font-semibold mb-2">❌ Problém:</p>
            <p className="text-gray-300 mb-4">
              Každá změna v kódu = celý npm install znovu (3 minuty)
            </p>

            <p className="text-green-400 font-semibold mb-2">✓ Řešení:</p>
            <p className="text-gray-300 mb-3">
              Zkopírujte package.json PŘED zkopírováním kódu:
            </p>
            <pre className="text-gray-400 font-mono text-sm">
{`# Nejdříve package.json
COPY package*.json ./
RUN npm install
# Pak teprve kód
COPY . .`}
            </pre>
            <p className="text-gray-400 mt-3 text-sm">
              npm install se spustí jen když se změní package.json. Jinak se použije cache.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Problém 2: Velké image</h3>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-300 mb-3">
              <strong>Tipy na zmenšení:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Používejte alpine images (node:20-alpine místo node:20)</li>
              <li>Multi-stage builds (viz výše)</li>
              <li>.dockerignore soubor (nepřidávejte node_modules, .git...)</li>
              <li>npm install --production (bez devDependencies)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Kdy Docker POUŽÍVAT</h2>
          
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong>✓ Více vývojářů:</strong> Každý má stejné prostředí
              </li>
              <li>
                <strong>✓ Složitý stack:</strong> Frontend + Backend + DB + Redis...
              </li>
              <li>
                <strong>✓ CI/CD:</strong> Build je konzistentní lokálně i na serveru
              </li>
              <li>
                <strong>✓ Mikroslužby:</strong> Každá služba v separátním containeru
              </li>
              <li>
                <strong>✓ Různé verze:</strong> Projekt A Node 16, projekt B Node 20
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Kdy Docker NEPOUŽÍVAT</h2>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
            <ul className="space-y-3 text-gray-300">
              <li>
                <strong>❌ Jen frontend, solo projekt:</strong> Možná přebytek (ale pořád užitečný)
              </li>
              <li>
                <strong>❌ Legacy projekt:</strong> Dockerizace starého projektu může být bolestivá
              </li>
              <li>
                <strong>❌ Rychlý prototyp:</strong> Pro demo na odpoledne je to overkill
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Praktické tipy</h2>
          
          <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-3">
            <li>
              <strong>Používejte .dockerignore:</strong> Nezahrnujte node_modules, .git, .env do image
            </li>
            <li>
              <strong>Tagujte images:</strong> V produkci použijte verze (moje-app:1.0.0), ne :latest
            </li>
            <li>
              <strong>Malé base images:</strong> Alpine varianty jsou často stokrát menší
            </li>
            <li>
              <strong>Layer caching:</strong> Optimalizujte pořadí příkazů v Dockerfile
            </li>
            <li>
              <strong>Healthchecks:</strong> Přidejte HEALTHCHECK aby Docker věděl, že app běží OK
            </li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-6">Závěr</h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Docker není jen pro backend vývojáře. Frontend vývojáři mají z něj stejné výhody - 
            konzistentní prostředí, snadný onboarding, spolehlivé nasazení.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Začněte jednoduše - jeden Dockerfile pro development. Postupně přidávejte - docker-compose, 
            multi-stage builds, optimalizace. Za měsíc si nebudete umět představit vývoj bez Dockeru.
          </p>

          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Potřebujete pomoc s Dockerem?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dockerizuji vaši aplikaci nebo celý vývojový stack. Nastavení CI/CD s Dockerem, 
              optimalizace buildů nebo školení týmu. Zkrátím vám cestu k plně kontejnerizované aplikaci.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/webovy-vyvojar/kontakt"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Docker konzultace
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
              <Link
                href="/webovy-vyvojar/projekty"
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                Dockerizované projekty
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Sdílet článek:</span>
            <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <Share2 className="h-4 w-4" />
              Sdílet
            </button>
          </div>
        </motion.div>
      </article>

      <WebDevFooter />
    </div>
  )
}
