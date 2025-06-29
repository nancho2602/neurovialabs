import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Analytics from "@/components/Analytics"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.neurovialabs.com"),
  title: {
    default: "Neurovia Labs - Automatización Inteligente y Transformación Digital",
    template: "%s | Neurovia Labs",
  },
  description:
    "Neurovia Labs ayuda a empresas a desbloquear crecimiento y eficiencia mediante automatización con IA, transformación digital estratégica y soluciones basadas en datos.",
  keywords: [
    "IA",
    "Inteligencia Artificial",
    "Automatización",
    "Transformación Digital",
    "Neurovia Labs",
    "Crecimiento Empresarial",
    "Optimización de Procesos",
    "CRM",
    "Análisis de Datos",
    "SEO",
    "Consultoría Tecnológica",
  ],
  authors: [{ name: "Neurovia Labs" }],
  creator: "Neurovia Labs",
  publisher: "Neurovia Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/assets/neurovia-labs-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/neurovia-labs-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/assets/neurovia-labs-logo.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: "https://www.neurovialabs.com",
    siteName: "Neurovia Labs",
    title: "Neurovia Labs - Automatización Inteligente y Transformación Digital",
    description: "Transformamos desafíos complejos en ventajas competitivas mediante IA y automatización inteligente.",
    images: [
      {
        url: "/assets/neurovia-labs-logo.png",
        width: 1200,
        height: 630,
        alt: "Neurovia Labs - Automatización Inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurovia Labs - Automatización Inteligente y Transformación Digital",
    description: "Transformamos desafíos complejos en ventajas competitivas mediante IA y automatización inteligente.",
    images: ["/assets/neurovia-labs-logo.png"],
    creator: "@neurovialabs",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.neurovialabs.com",
    languages: {
      "es-ES": "https://www.neurovialabs.com",
      "en-US": "https://www.neurovialabs.com/en",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
    generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Neurovia Labs",
  description: "Empresa especializada en automatización inteligente y transformación digital mediante IA",
  url: "https://www.neurovialabs.com",
  logo: "https://www.neurovialabs.com/assets/neurovia-labs-logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "contacto@neurovialabs.com",
    contactType: "customer service",
    availableLanguage: ["Spanish", "English"],
  },
  sameAs: ["https://linkedin.com/company/neurovialabs", "https://twitter.com/neurovialabs"],
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Luis Corrales",
      jobTitle: "Optimización Operativa y de Producto",
    },
    {
      "@type": "Person",
      name: "Gustavo Mendez",
      jobTitle: "Ciberseguridad y Estrategia de Nube",
    },
    {
      "@type": "Person",
      name: "José Álvarez",
      jobTitle: "Desarrollo Escalable y Arquitectura",
    },
    {
      "@type": "Person",
      name: "Hernán Álvarez",
      jobTitle: "Liderazgo de Ingeniería de Software",
    },
  ],
  serviceArea: {
    "@type": "Place",
    name: "Global",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Artificial Intelligence",
    "Process Automation",
    "Digital Transformation",
    "Cybersecurity",
    "Software Development",
    "Data Analytics",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.className} bg-primary text-neutral antialiased`} suppressHydrationWarning={true}>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
