import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Matěj Hrabák | Next.js & React Web Vývojář",
  description: "Full-stack developer specializující se na Next.js, React, TypeScript a Node.js. Rychlé a škálovatelné webové aplikace. Expertní konzultace.",
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
    title: "Matěj Hrabák | Next.js & React Web Vývojář",
    description: "Full-stack developer specializující se na Next.js, React, TypeScript a Node.js. Rychlé a škálovatelné webové aplikace.",
    type: "website",
    locale: "cs_CZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matěj Hrabák | Next.js & React Web Vývojář",
    description: "Full-stack developer specializující se na Next.js, React, TypeScript a Node.js. Rychlé a škálovatelné webové aplikace.",
  },
}

export default function WebDevLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
