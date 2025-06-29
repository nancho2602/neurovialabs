"use client"

import type React from "react"
import type { ColorPalette } from "@/types"
import { useLanguage } from "@/contexts/LanguageContext"
import SEOOptimizedImage from "./SEOOptimizedImage"

interface FooterProps {
  colors: ColorPalette
}

const Footer: React.FC<FooterProps> = ({ colors }) => {
  const { t } = useLanguage()
  const footerNavItems = t.footer.navItems

  return (
    <footer className="py-12" style={{ backgroundColor: colors.secondary }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <a href="#hero" className="flex items-center mb-2">
              <SEOOptimizedImage
                src="/assets/neurovia-labs-logo.png"
                alt="Neurovia Labs Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </a>
            <p className="text-sm mt-2" style={{ color: colors.neutral, opacity: 0.7 }}>
              {t.footer.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            {footerNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors"
                style={{ color: colors.neutral, opacity: 0.9 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = colors.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = colors.neutral)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div
          className="mt-10 border-t pt-8 text-center"
          style={{
            borderColor: `rgba(${Number.parseInt(colors.neutral.slice(1, 3), 16)},${Number.parseInt(colors.neutral.slice(3, 5), 16)},${Number.parseInt(colors.neutral.slice(5, 7), 16)},0.2)`,
          }}
        >
          <p className="text-sm" style={{ color: colors.neutral, opacity: 0.7 }}>
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
