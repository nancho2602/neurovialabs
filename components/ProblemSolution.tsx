"use client"

import type React from "react"
import type { ColorPalette } from "@/types"
import { useLanguage } from "@/contexts/LanguageContext"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const InefficiencyIcon = ({ colors }: { colors: ColorPalette }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mb-4">
    <path
      d="M12 20 C 25 5, 20 40, 32 32 C 45 25, 40 60, 52 44"
      stroke={colors.neutral}
      strokeWidth="1.5"
      strokeOpacity="0.3"
      strokeDasharray="3 3"
    />
    <path
      d="M15 48 C 5 40, 30 15, 32 32 C 34 50, 60 40, 49 20"
      stroke={colors.neutral}
      strokeWidth="1.5"
      strokeOpacity="0.3"
      strokeDasharray="3 3"
    />
    <path d="M10 32 H 54" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <circle cx="10" cy="32" r="4" fill="currentColor" />
    <circle cx="54" cy="32" r="4" fill="currentColor" />
  </svg>
)

const LostOppsIcon = ({ colors }: { colors: ColorPalette }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mb-4">
    <path
      d="M12 12 H 32 V 24 M 12 24 V 36 H 52 V 12 H 44 M 12 42 H 24 V 52 H 52 V 44"
      stroke={colors.neutral}
      strokeWidth="1.5"
      strokeOpacity="0.3"
    />
    <path d="M12 12 L 22 22 L 32 12 L 42 22 L 52 12" stroke={colors.neutral} strokeWidth="1.5" strokeOpacity="0.3" />
    <path
      d="M12 12 H 52 V 52 H 12 V 12 Z"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
      strokeDasharray="100"
      strokeDashoffset="100"
    >
      <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" begin="0.2s" fill="freeze" />
    </path>
    <circle cx="52" cy="52" r="5" fill="currentColor" opacity="0">
      <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="1.2s" fill="freeze" />
    </circle>
  </svg>
)

const BadExperienceIcon = ({ colors }: { colors: ColorPalette }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mb-4">
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2.5" />
    <path d="M24 26 L 28 30 M28 26 L 24 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M36 26 L 40 30 M40 26 L 36 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M24 42 C 28 36, 36 36, 40 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M4 4 L 60 60" stroke={colors.secondary} strokeWidth="10" strokeLinecap="round" opacity="0.6">
      <animate attributeName="stroke-dasharray" from="0 80" to="80 80" dur="1s" begin="0.2s" fill="freeze" />
    </path>
  </svg>
)

interface ProblemSolutionProps {
  colors: ColorPalette
}

const problemIcons = [InefficiencyIcon, LostOppsIcon, BadExperienceIcon]

const ProblemCard: React.FC<{ problem: { id: number; title: string; description: string }; Icon: React.FC<{ colors: ColorPalette }>; colors: ColorPalette }> = ({ problem, Icon, colors }) => {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="reveal problem-card p-8 rounded-xl shadow-2xl transition-all duration-300 hover:-translate-y-2 glassmorphism flex flex-col items-center text-center"
      style={{
        borderColor: `rgba(${Number.parseInt(colors.accent.slice(1, 3), 16)},${Number.parseInt(colors.accent.slice(3, 5), 16)},${Number.parseInt(colors.accent.slice(5, 7), 16)},0.2)`,
        "--problem-card-hover-shadow-color": `${colors.accent}4D`,
      } as React.CSSProperties}
    >
      <div style={{ color: colors.accent }}>
        <Icon colors={colors} />
      </div>
      <h3 className="text-xl sm:text-2xl font-semibold mt-2 mb-3" style={{ color: colors.neutral }}>
        {problem.title}
      </h3>
      <p className="text-lg leading-relaxed" style={{ color: colors.neutral, opacity: 0.85 }}>
        {problem.description}
      </p>
    </div>
  )
}

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ colors }) => {
  const { t } = useLanguage()
  const problems = t.problemSolution.problems

  return (
    <section id="problem-solution" className="py-16 sm:py-24" style={{ backgroundColor: colors.primary }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: colors.neutral }}
            dangerouslySetInnerHTML={{ __html: t.problemSolution.title }}
          ></h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl" style={{ color: colors.neutral, opacity: 0.8 }}>
            {t.problemSolution.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problemIcons[index]
            return <ProblemCard key={problem.id} problem={problem} Icon={Icon} colors={colors} />
          })}
        </div>
        <div className="mt-16 text-center">
          <p
            className="text-lg sm:text-xl leading-relaxed"
            style={{ color: colors.neutral }}
            dangerouslySetInnerHTML={{ __html: t.problemSolution.closingStatement }}
          ></p>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution
