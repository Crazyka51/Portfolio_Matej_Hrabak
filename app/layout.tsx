import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ToastProvider } from "./context/toast-context"
import GridBackground from "./components/grid-background"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { baseMetadata } from "./metadata"
import GoogleAnalytics from "./components/google-analytics"

const inter = Inter({ 
  subsets: ["latin", "latin-ext"],
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = baseMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Matěj Hrabák",
    "url": "https://www.matejhrabak.eu",
    "jobTitle": "Senior Next.js & React Web Developer",
    "description": "Full-stack webový vývojář specializující se na Next.js, React, TypeScript a Node.js",
    "knowsAbout": [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Full-stack Development"
    ],
    "sameAs": [
      "https://github.com/crazyka51",
      "https://www.linkedin.com/in/matej-hrabak"
    ]
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Matěj Hrabák - Web Development Services",
    "description": "Profesionální vývoj webových aplikací využívajících Next.js, React a moderní technologie",
    "provider": {
      "@type": "Person",
      "name": "Matěj Hrabák"
    },
    "areaServed": "CZ",
    "serviceType": [
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Next.js Development",
      "React Development",
      "TypeScript Development",
      "Web Optimization",
      "SEO Optimization"
    ]
  }

  return (
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-site-verification" content="QHt8eRqoy-6khWzFHKzfLryKMfpCWBD5K5nOwjKGzxM" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ToastProvider>
          {children}
        </ToastProvider>
         <SpeedInsights />
         <Analytics />
      </body>
    </html>
  )
}
