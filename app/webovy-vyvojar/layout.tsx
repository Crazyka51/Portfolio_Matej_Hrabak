import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Matěj Hrabák - Webový vývojář",
  description: "Specializuji se na vývoj moderních webových aplikací s důrazem na uživatelský zážitek a výkon. React, Next.js, TypeScript.",
  keywords: [
    "webový vývojář",
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "tvorba webů",
    "vývoj aplikací",
    "Matěj Hrabák"
  ],
  openGraph: {
    title: "Matěj Hrabák - Webový vývojář",
    description: "Specializuji se na vývoj moderních webových aplikací s důrazem na uživatelský zážitek a výkon.",
    type: "website",
    locale: "cs_CZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matěj Hrabák - Webový vývojář",
    description: "Specializuji se na vývoj moderních webových aplikací s důrazem na uživatelský zážitek a výkon.",
  },
}

export default function WebDevLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
