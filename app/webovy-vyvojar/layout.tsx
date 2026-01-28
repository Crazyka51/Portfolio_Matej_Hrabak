import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Matěj Hrabák | Senior Next.js & React Web Vývojář a Konzultant",
  description: "Hledáte Full-stack developera? Specializuji se na rychlé a škálovatelné Next.js/React aplikace, TypeScript a Node.js. Získejte expertní konzultaci a moderní web.",
  keywords: [
    "Next.js",
    "React",
    "webový vývojář",
    "frontend developer",
    "TypeScript",
    "Node.js",
    "fullstack developer",
    "tvorba webů",
    "vývoj aplikací",
    "Matěj Hrabák",
    "web development",
    "konzultace"
  ],
  alternates: {
    canonical: "/webovy-vyvojar",
  },
  openGraph: {
    title: "Matěj Hrabák | Senior Next.js & React Web Vývojář a Konzultant",
    description: "Hledáte Full-stack developera? Specializuji se na rychlé a škálovatelné Next.js/React aplikace, TypeScript a Node.js. Získejte expertní konzultaci a moderní web.",
    type: "website",
    locale: "cs_CZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matěj Hrabák | Senior Next.js & React Web Vývojář a Konzultant",
    description: "Hledáte Full-stack developera? Specializuji se na rychlé a škálovatelné Next.js/React aplikace, TypeScript a Node.js. Získejte expertní konzultaci a moderní web.",
  },
}

export default function WebDevLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
