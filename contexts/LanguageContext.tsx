"use client"

import { createContext, useState, useContext, type ReactNode, useEffect } from "react"
import { en } from "@/locales/en"
import { es } from "@/locales/es"

type Language = "en" | "es"

const translations = { en, es }

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof en
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const browserLang = navigator.language.split("-")[0]
      if (browserLang === "en" || browserLang === "es") {
        setLanguage(browserLang)
      }
    }
  }, [])

  const t = translations[language]

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
