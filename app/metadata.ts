import type { Metadata } from "next"

export const baseMetadata: Metadata = {
  title: "Matěj Hrabák | Senior Next.js & React Web Vývojář a Konzultant",
  description: "Hledáte Full-stack developera? Specializuji se na rychlé a škálovatelné Next.js/React aplikace, TypeScript a Node.js. Získejte expertní konzultaci a moderní web.",
  keywords: ["Next.js", "React", "webový vývojář", "TypeScript", "Node.js", "fullstack developer", "Matěj Hrabák", "web development", "frontend", "backend", "konzultace"],
  authors: [{ name: "Matěj Hrabák" }],
  creator: "Matěj Hrabák",
  publisher: "Matěj Hrabák",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.matejhrabak.eu"),
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "/",
    title: "Matěj Hrabák | Senior Next.js & React Web Vývojář a Konzultant",
    description: "Hledáte Full-stack developera? Specializuji se na rychlé a škálovatelné Next.js/React aplikace, TypeScript a Node.js. Získejte expertní konzultaci a moderní web.",
    siteName: "Matěj Hrabák",
    images: [
      {
        url: "/avatar.webp",
        width: 800,
        height: 800,
        alt: "Matěj Hrabák",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matěj Hrabák | Senior Next.js & React Web Vývojář a Konzultant",
    description: "Hledáte Full-stack developera? Specializuji se na rychlé a škálovatelné Next.js/React aplikace, TypeScript a Node.js. Získejte expertní konzultaci a moderní web.",
    images: ["/avatar.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
  category: "personal website",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}
