import type React from "react"
import type { Metadata } from "next"
import GoogleAnalytics from "@/components/google-analytics"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Luis Benítez — En construcción",
  description:
    "Este sitio está en construcción. Si buscas fotografía de bodas, visita photography.luisbtz.com.",
  authors: [{ name: "Luis Benítez" }],
  metadataBase: new URL("https://luisbtz.com"),
  openGraph: {
    title: "Luis Benítez — En construcción",
    description:
      "Este sitio está en construcción. Si buscas fotografía de bodas, visita photography.luisbtz.com.",
    type: "website",
    locale: "es_ES",
    url: "https://luisbtz.com",
    siteName: "Luis Benítez",
  },
  twitter: {
    card: "summary",
    title: "Luis Benítez — En construcción",
    description:
      "Este sitio está en construcción. Si buscas fotografía de bodas, visita photography.luisbtz.com.",
  },
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-helvetica antialiased">
        <GoogleAnalytics />
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
