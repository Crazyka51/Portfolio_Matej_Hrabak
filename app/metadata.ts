import type { Metadata } from "next"

export const baseMetadata: Metadata = {
  title: "Matěj Hrabák | Osobní webové stránky",
  description: "Osobní webové stránky Matěje Hrabáka - pojišťovací poradce a webový vývojář",
  keywords: ["pojištění", "investice", "webový vývoj", "React", "Next.js", "Matěj Hrabák"],
  authors: [{ name: "Matěj Hrabák" }],
  creator: "Matěj Hrabák",
  publisher: "Matěj Hrabák",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.matejhrabak.cz"),
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
    title: "Matěj Hrabák | Osobní webové stránky",
    description: "Osobní webové stránky Matěje Hrabáka - pojišťovací poradce a webový vývojář",
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
    title: "Matěj Hrabák | Osobní webové stránky",
    description: "Osobní webové stránky Matěje Hrabáka - pojišťovací poradce a webový vývojář",
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
