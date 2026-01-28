import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Webový Vývoj na Míru: React, Next.js, Node.js a Optimalizace | Matěj Hrabák",
  description: "Kompletní vývoj webových aplikací. Frontend i Backend, migrace starších systémů, SEO optimalizace. Rychle, moderně, efektivně. Poptávka zdarma.",
  keywords: [
    "webový vývoj na míru",
    "React",
    "Next.js",
    "Node.js",
    "optimalizace webu",
    "frontend development",
    "backend development",
    "SEO optimalizace",
    "migrace systémů",
    "Matěj Hrabák"
  ],
  openGraph: {
    title: "Webový Vývoj na Míru: React, Next.js, Node.js a Optimalizace",
    description: "Kompletní vývoj webových aplikací. Frontend i Backend, migrace starších systémů, SEO optimalizace. Rychle, moderně, efektivně.",
    type: "website",
    locale: "cs_CZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webový Vývoj na Míru: React, Next.js, Node.js a Optimalizace",
    description: "Kompletní vývoj webových aplikací. Frontend i Backend, migrace starších systémů, SEO optimalizace.",
  },
}

export default function SluzbyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
