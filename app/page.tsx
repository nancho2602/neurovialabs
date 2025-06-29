"use client"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProblemSolution from "@/components/ProblemSolution"
import Services from "@/components/Services"
import Process from "@/components/Process"
import WhyNeurovia from "@/components/WhyNeurovia"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import type { ColorPalette } from "@/types"
import dynamic from "next/dynamic"
import { useTheme } from "next-themes"
const AnimatedBackground = dynamic(() => import("@/components/AnimatedBackground"), {
  ssr: false,
})
import { LanguageProvider } from "@/contexts/LanguageContext"
import AboutUs from "@/components/AboutUs"

export default function HomePage() {
  const { resolvedTheme } = useTheme()
  const darkColors: ColorPalette = {
    primary: "#0B1F3A",
    secondary: "#12375A",
    accent: "#FFB443",
    neutral: "#F4F4F9",
  }
  const lightColors: ColorPalette = {
    primary: "#ffffff",
    secondary: "#F1F5F9",
    accent: "#FF8C42",
    neutral: "#0B1F3A",
  }
  const colors = resolvedTheme === "light" ? lightColors : darkColors

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen" style={{ backgroundColor: colors.primary, color: colors.neutral }}>
        <AnimatedBackground colors={colors} />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header colors={colors} />
          <main className="flex-grow">
            <Hero colors={colors} />
            <ProblemSolution colors={colors} />
            <Services colors={colors} />
            <Process colors={colors} />
            <WhyNeurovia colors={colors} />
            <AboutUs colors={colors} />
            <CTASection colors={colors} />
          </main>
          <Footer colors={colors} />
        </div>
      </div>
    </LanguageProvider>
  )
}
