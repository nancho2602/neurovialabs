"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import type { ColorPalette } from "@/types"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import SEOOptimizedImage from "./SEOOptimizedImage"

const HeroVisual: React.FC<{ colors: ColorPalette }> = ({ colors }) => (
  <svg
    viewBox="0 0 800 600"
    preserveAspectRatio="xMidYMid slice"
    className="absolute inset-0 w-full h-full"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="grad-hero" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style={{ stopColor: colors.accent, stopOpacity: 0.2 }} />
        <stop offset="100%" style={{ stopColor: colors.accent, stopOpacity: 0 }} />
      </radialGradient>
      <filter id="glow-hero">
        <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <g id="parallax-bg" style={{ transformOrigin: "center" }}>
      <circle cx="400" cy="300" r="300" fill="url(#grad-hero)" />
      <g opacity="0.15">
        <path
          d="M100 0 V600 M200 0 V600 M300 0 V600 M400 0 V600 M500 0 V600 M600 0 V600 M700 0 V600"
          stroke={colors.secondary}
          strokeWidth="1"
        />
        <path
          d="M0 100 H800 M0 200 H800 M0 300 H800 M0 400 H800 M0 500 H800"
          stroke={colors.secondary}
          strokeWidth="1"
        />
      </g>
    </g>

    <g id="mouse-interactive-layer" style={{ transformOrigin: "center", transition: "transform 0.1s linear" }}>
      <path
        id="motion-path-1"
        d="M 200,300 C 250,150 550,150 600,300 C 550,450 250,450 200,300 Z"
        stroke={colors.accent}
        strokeWidth="1"
        fill="none"
        opacity="0.5"
        filter="url(#glow-hero)"
      />
      <path
        d="M 300,300 C 325,225 475,225 500,300 C 475,375 325,375 300,300 Z"
        stroke={colors.neutral}
        strokeWidth="0.5"
        fill="none"
        opacity="0.4"
      />

      <circle cx="400" cy="300" r="20" fill={colors.primary} stroke={colors.accent} strokeWidth="2" />
      <circle cx="400" cy="300" r="8" fill={colors.accent}>
        <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
      </circle>

      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * 2 * Math.PI
        const r1 = 200
        const r2 = 100
        const x1 = 400 + r1 * Math.cos(angle)
        const y1 = 300 + r1 * Math.sin(angle)
        const x2 = 400 + r2 * Math.cos(angle + Math.PI / 6)
        const y2 = 300 + r2 * Math.sin(angle + Math.PI / 6)

        return (
          <g key={i}>
            <line x1="400" y1="300" x2={x1} y2={y1} stroke={colors.secondary} strokeWidth="1" opacity="0.7" />
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={colors.secondary} strokeWidth="1" opacity="0.5" />
            <circle cx={x1} cy={y1} r="6" fill={colors.secondary} stroke={colors.accent} strokeWidth="1.5" />
            <circle cx={x2} cy={y2} r="4" fill={colors.secondary} stroke={colors.neutral} strokeWidth="1" />
          </g>
        )
      })}

      <g>
        {[...Array(3)].map((_, i) => (
          <circle key={i} cx="0" cy="0" r="2.5" fill={colors.accent} opacity="0.9">
            <animateMotion dur={`${4 + i * 1.5}s`} repeatCount="indefinite" begin={`${i}s`}>
              <mpath href="#motion-path-1" />
            </animateMotion>
          </circle>
        ))}
      </g>
    </g>
  </svg>
)

interface HeroProps {
  colors: ColorPalette
}

const Hero: React.FC<HeroProps> = ({ colors }) => {
  const heroRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    const handleMouseMove = (e: MouseEvent) => {
      const interactiveLayer = document.getElementById("mouse-interactive-layer")
      if (!interactiveLayer) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const moveX = (clientX - innerWidth / 2) / (innerWidth / 2)
      const moveY = (clientY - innerHeight / 2) / (innerHeight / 2)

      interactiveLayer.style.transform = `translate(${moveX * -15}px, ${moveY * -15}px)`
    }

    const handleScroll = () => {
      const parallaxBg = document.getElementById("parallax-bg")
      if (!parallaxBg) return
      const scrollY = window.scrollY
      parallaxBg.style.transform = `translateY(${scrollY * 0.2}px) scale(1.1)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="absolute inset-0">
        <SEOOptimizedImage
          src="/assets/hero_background.jpg"
          alt="Automation abstract background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          style={{ opacity: 0.35 }}
          priority
        />
      </div>
      <div className="absolute inset-0 opacity-20">
        <HeroVisual colors={colors} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/60 to-primary"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
          style={{ color: colors.neutral }}
          dangerouslySetInnerHTML={{ __html: t.hero.title }}
        ></h1>
        <p
          className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl"
          style={{ color: colors.neutral, opacity: 0.95 }}
        >
          {t.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 cta-glow"
            style={{ backgroundColor: colors.accent, color: colors.primary, borderColor: colors.accent }}
          >
            {t.hero.ctaPrimary}
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 border-2 text-base font-medium rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ borderColor: colors.accent, color: colors.accent, backgroundColor: "transparent" }}
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-16"
        style={{ background: `linear-gradient(to top, ${colors.primary}, transparent)` }}
      ></div>
    </section>
  )
}

export default Hero
