"use client"

import type React from "react"
import type { ColorPalette } from "@/types"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface CTASectionProps {
  colors: ColorPalette
}

const CTASection: React.FC<CTASectionProps> = ({ colors }) => {
  const { t } = useLanguage()

  const mailtoHref = `mailto:${t.cta.emailAddress}?subject=${encodeURIComponent(t.cta.subject)}`

  return (
    <section id="contact" className="py-20 sm:py-32" style={{ backgroundColor: colors.primary }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
          style={{ color: colors.neutral }}
          dangerouslySetInnerHTML={{ __html: t.cta.title }}
        ></h2>
        <p
          className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl"
          style={{ color: colors.neutral, opacity: 0.85 }}
        >
          {t.cta.subtitle}
        </p>

        <div className="mt-12 max-w-xl mx-auto">
          <a
            href={mailtoHref}
            className="group cta-glow w-full inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-semibold rounded-lg shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: colors.accent,
              color: colors.primary,
              borderColor: colors.accent,
            }}
            aria-label={t.cta.buttonAriaLabel}
          >
            {t.cta.buttonText}
            <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTASection
