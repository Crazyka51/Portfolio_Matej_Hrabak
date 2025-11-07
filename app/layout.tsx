import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ToastProvider } from "./context/toast-context"
import GridBackground from "./components/grid-background"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { baseMetadata } from "./metadata"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = baseMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <head>
        <meta name="google-site-verification" content="QHt8eRqoy-6khWzFHKzfLryKMfpCWBD5K5nOwjKGzxM" />
      </head>
      <body className={inter.className}>
        <ToastProvider>
          <GridBackground />
          {children}
        </ToastProvider>
         <SpeedInsights />
      </body>
    </html>
  )
}
