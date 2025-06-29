"use client"

import type React from "react"
import type { ColorPalette } from "@/types"
import { useLanguage } from "@/contexts/LanguageContext"

interface ProcessProps {
  colors: ColorPalette
}

const Process: React.FC<ProcessProps> = ({ colors }) => {
  const { t } = useLanguage()
  const processStepsData = t.process.steps

  return (
    <section id="process" className="py-16 sm:py-24" style={{ backgroundColor: colors.primary }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: colors.neutral }}
            dangerouslySetInnerHTML={{ __html: t.process.title }}
          ></h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl" style={{ color: colors.neutral, opacity: 0.8 }}>
            {t.process.subtitle}
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div
            className="absolute left-8 top-8 w-1 h-[calc(100%-4rem)] -translate-x-1/2 hidden md:block"
            style={{ backgroundColor: colors.accent }}
          />

          <div className="space-y-8">
            {processStepsData.map((step) => (
              <div key={step.id} className="relative flex flex-col md:flex-row items-start">
                <div
                  className="h-16 w-16 rounded-full text-2xl font-bold absolute left-8 -translate-x-1/2 top-0 hidden md:flex items-center justify-center z-10"
                  style={{
                    backgroundColor: colors.accent,
                    color: colors.primary,
                  }}
                >
                  {step.id}
                </div>

                <div className="flex-shrink-0 md:hidden flex items-center mb-4">
                  <div
                    className="flex items-center justify-center h-16 w-16 rounded-full text-2xl font-bold"
                    style={{ backgroundColor: colors.accent, color: colors.primary }}
                  >
                    {step.id}
                  </div>
                </div>

                <div
                  className="w-full md:ml-20 p-6 sm:p-8 rounded-xl shadow-lg"
                  style={{ backgroundColor: colors.secondary }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ color: colors.neutral }}>
                    {step.title}
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: colors.neutral, opacity: 0.85 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
