"use client"

import type React from "react"
import type { ColorPalette, TeamMember } from "@/types"
import { useLanguage } from "@/contexts/LanguageContext"
import { Briefcase, BrainCircuit } from "lucide-react"
import SEOOptimizedImage from "./SEOOptimizedImage"

interface AboutUsProps {
  colors: ColorPalette
}

const AboutUs: React.FC<AboutUsProps> = ({ colors }) => {
  const { t } = useLanguage()
  const team: TeamMember[] = t.aboutUs.team

  return (
    <section
      id="about-us"
      className="py-16 sm:py-24"
      style={{ backgroundColor: colors.secondary }}
      aria-labelledby="about-us-title"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t" style={{ borderColor: `${colors.accent}40` }}></div>
        </div>
        <div className="relative flex justify-center">
          <span className="p-2 rounded-full" style={{ backgroundColor: colors.secondary }}>
            <BrainCircuit className="h-8 w-8" style={{ color: colors.accent }} aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <h2
            id="about-us-title"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: colors.neutral }}
            dangerouslySetInnerHTML={{ __html: t.aboutUs.title }}
          ></h2>
          <p className="mt-6 text-lg sm:text-xl" style={{ color: colors.neutral, opacity: 0.85 }}>
            {t.aboutUs.mission}
          </p>
        </div>

        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center">
            <Briefcase className="h-8 w-8 mr-3" style={{ color: colors.accent }} aria-hidden="true" />
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: colors.neutral }}>
              {t.aboutUs.teamTitle}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <article
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-white"
              style={{
                backgroundColor: colors.primary,
                border: `1px solid ${colors.accent}20`,
              }}
              itemScope
              itemType="https://schema.org/Person"
            >
              <SEOOptimizedImage
                src={member.image || "/placeholder.svg"}
                alt={`${member.name} - ${member.role} en Neurovia Labs`}
                width={112}
                height={112}
                className="w-28 h-28 rounded-full mb-4 object-cover border-2"
                style={{ borderColor: colors.accent }}
                sizes="(max-width: 768px) 112px, 112px"
              />
              <h4 className="text-xl font-semibold mb-1" style={{ color: colors.neutral }} itemProp="name">
                {member.name}
              </h4>
              <p className="text-base font-medium mb-3" style={{ color: colors.accent }} itemProp="jobTitle">
                {member.role}
              </p>
              <p
                className="text-base leading-relaxed flex-grow"
                style={{ color: colors.neutral, opacity: 0.85 }}
                itemProp="description"
              >
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
