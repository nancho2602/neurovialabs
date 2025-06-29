"use client"

import type React from "react"
import type { ColorPalette } from "@/types"
import { useLanguage } from "@/contexts/LanguageContext"

interface WhyNeuroviaProps {
  colors: ColorPalette
}

const WhyNeurovia: React.FC<WhyNeuroviaProps> = ({ colors }) => {
  const { t } = useLanguage()
  const usps = t.whyNeurovia.usps

  return (
    <section id="why-neurovia" className="py-16 sm:py-24" style={{ backgroundColor: colors.secondary }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: colors.neutral }}
            dangerouslySetInnerHTML={{ __html: t.whyNeurovia.title }}
          ></h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl" style={{ color: colors.neutral, opacity: 0.8 }}>
            {t.whyNeurovia.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {usps.map((usp, index) => (
            <div key={index} className="flex items-start text-left p-6">
              <div
                className="p-3 rounded-lg mr-6 inline-block flex-shrink-0"
                style={{ backgroundColor: `${colors.accent}20`, color: colors.accent }}
              >
                <div className="h-10 w-10" dangerouslySetInnerHTML={{ __html: usp.iconSvg }} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.neutral }}>
                  {usp.title}
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: colors.neutral, opacity: 0.85 }}>
                  {usp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyNeurovia
