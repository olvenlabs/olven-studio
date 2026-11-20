import type { Metadata, Viewport } from "next"
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google"
import { OlvenToaster } from "@/components/ui/toast"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Olven Studio — Engenharia Criativa · Software feito à mão.",
  description:
    "Estúdio independente de engenharia criativa em São Paulo. Projetamos e construímos sistemas sob medida, produtos com IA e sites — da arquitetura ao produto no ar.",
  metadataBase: new URL("https://olvenlabs.com"),
  openGraph: {
    title: "Olven Studio — Software feito à mão.",
    description:
      "Estúdio independente de engenharia criativa. Sistemas sob medida, produtos com IA, sites e consultoria técnica.",
    url: "https://olvenlabs.com",
    siteName: "Olven Studio",
    locale: "pt_BR",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#171717",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-dvh bg-ink font-sans text-bone antialiased">
        {children}
        <OlvenToaster />
      </body>
    </html>
  )
}
