import { createContext, useState } from "react"
import type { ReactNode } from "react"


// Tipos para TS (si usás TS)
type Language = "es" | "en"

interface LanguageContextProps {
  language: Language
  toggleLanguage: () => void
}

// Contexto con valor inicial dummy
export const LanguageContext = createContext<LanguageContextProps>({
  language: "es",
  toggleLanguage: () => {}
})

// Provider
interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("es")

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "es" ? "en" : "es"))
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
