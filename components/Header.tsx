"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import type { ColorPalette } from "@/types"
import { Menu, X, Globe } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import { useLanguage } from "@/contexts/LanguageContext"
import SEOOptimizedImage from "./SEOOptimizedImage"

interface HeaderProps {
  colors: ColorPalette
}

const Header: React.FC<HeaderProps> = ({ colors }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLangDropdownOpen, setLangDropdownOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const langRef = useRef<HTMLDivElement>(null)

  const navItems = t.header.navItems

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
  }, [])

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (langRef.current && !langRef.current.contains(event.target as Node)) {
      setLangDropdownOpen(false)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    window.addEventListener("scroll", handleScroll, { passive: true })
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mounted, handleScroll, handleClickOutside])

  const handleLanguageChange = useCallback(
    (lang: "es" | "en") => {
      setLanguage(lang)
      setLangDropdownOpen(false)
    },
    [setLanguage],
  )

  const handleNavClick = useCallback((href: string) => {
    setIsMenuOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  if (!mounted) {
    return (
      <header
        className="fixed top-0 left-0 right-0 z-50 py-6"
        style={{ backgroundColor: "transparent", color: colors.neutral }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#hero" className="flex items-center" aria-label="Neurovia Labs Home">
            <SEOOptimizedImage
              src="/assets/neurovia-labs-logo.png"
              alt="Neurovia Labs Logo - Automatización Inteligente"
              width={48}
              height={48}
              className="h-12 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
              priority={true}
            />
          </a>
        </div>
      </header>
    )
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-3 shadow-lg glassmorphism" : "py-6"}`}
      style={{
        backgroundColor: isScrolled ? "rgba(11, 31, 58, 0.8)" : "transparent",
        color: colors.neutral,
      }}
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#hero" className="flex items-center" aria-label="Neurovia Labs Home">
          <SEOOptimizedImage
            src="/assets/neurovia-labs-logo.png"
            alt="Neurovia Labs Logo - Automatización Inteligente"
            width={48}
            height={48}
            className="h-12 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
            priority={true}
          />
        </a>

        <div className="flex items-center">
          <nav className="hidden md:flex space-x-6" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded"
                style={{ color: colors.accent }}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="relative ml-4" ref={langRef}>
            <button
              onClick={() => setLangDropdownOpen(!isLangDropdownOpen)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-label="Change language"
              aria-expanded={isLangDropdownOpen}
              aria-haspopup="true"
            >
              <Globe className="h-6 w-6" style={{ color: colors.neutral }} />
            </button>
            {isLangDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-36 rounded-md shadow-lg py-1 glassmorphism"
                style={{ backgroundColor: "rgba(11, 31, 58, 0.95)" }}
                role="menu"
                aria-orientation="vertical"
              >
                <button
                  onClick={() => handleLanguageChange("es")}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors ${language === "es" ? "font-bold" : ""}`}
                  style={{ color: language === "es" ? colors.accent : colors.neutral }}
                  role="menuitem"
                >
                  Español (ES)
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors ${language === "en" ? "font-bold" : ""}`}
                  style={{ color: language === "en" ? colors.accent : colors.neutral }}
                  role="menuitem"
                >
                  English (EN)
                </button>
              </div>
            )}
          </div>

          <div className="ml-4">
            <ThemeToggle />
          </div>

          <div className="md:hidden ml-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              style={{ color: colors.accent, borderColor: colors.accent }}
              aria-label={isMenuOpen ? t.header.closeMenu : t.header.openMenu}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 shadow-lg pb-4 glassmorphism"
          style={{ backgroundColor: "rgba(11, 31, 58, 0.95)" }}
        >
          <nav className="flex flex-col items-center space-y-4 pt-4" role="navigation" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium hover:opacity-80 transition-opacity py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white rounded"
                style={{ color: colors.accent }}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
