"use client"

import type React from "react"
import type { ColorPalette } from "@/types"
import { useLanguage } from "@/contexts/LanguageContext"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface ServicesProps {
  colors: ColorPalette
}

const ServiceCard: React.FC<{ service: any; colors: ColorPalette }> = ({ service, colors }) => {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="reveal p-8 rounded-lg shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-accent/30 hover:scale-105 transform"
      style={{ backgroundColor: colors.primary, border: `1px solid ${colors.secondary}` }}
    >
      <div style={{ color: colors.accent }}>
        <div
          className="h-20 w-20 mb-4 flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: service.iconSvg }}
        />
      </div>
      <h3 className="text-xl font-semibold mb-2" style={{ color: colors.neutral }}>
        {service.title}
      </h3>
      <p className="text-lg leading-relaxed flex-grow" style={{ color: colors.neutral, opacity: 0.8 }}>
        {service.description}
      </p>
    </div>
  )
}

const Services: React.FC<ServicesProps> = ({ colors }) => {
  const { t } = useLanguage()
  const serviceItems = t.services.serviceItems

  return (
    <section id="services" className="py-16 sm:py-24" style={{ backgroundColor: colors.secondary }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: colors.neutral }}
            dangerouslySetInnerHTML={{ __html: t.services.title }}
          ></h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl" style={{ color: colors.neutral, opacity: 0.8 }}>
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <ServiceCard key={index} service={service} colors={colors} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
