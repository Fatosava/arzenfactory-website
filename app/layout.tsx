import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"


export const metadata: Metadata = {
  title: "Arzen Factory - Premium Turkish Ice Cream",
  description:
    "Artisanal ice cream crafted with love in the heart of Turkey. Experience the finest organic ingredients and traditional methods since 1999.",
  generator: "v0.app",
  keywords: "ice cream, Turkish ice cream, artisanal, organic, Erzincan, premium, natural ingredients",
  authors: [{ name: "Arzen Factory" }],
  openGraph: {
    title: "Arzen Factory - Premium Turkish Ice Cream",
    description: "Artisanal ice cream crafted with love in the heart of Turkey",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
