import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ToastProvider } from "./context/toast-context"
import GridBackground from "./components/grid-background"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { baseMetadata } from "./metadata"
import { GoogleAnalytics } from "nextjs-google-analytics"

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
  return (
    <html lang="cs">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="google-site-verification" content="QHt8eRqoy-6khWzFHKzfLryKMfpCWBD5K5nOwjKGzxM" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics trackPageViews />
        <ToastProvider>
          {children}
        </ToastProvider>
         <SpeedInsights />
      </body>
    </html>
  )
}
