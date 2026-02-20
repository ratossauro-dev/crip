import React, { createContext, useContext, useState } from 'react'
import en from './en'
import pt from './pt'

const translations = { en, pt }
const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('pt')

    const t = (key) => {
        const keys = key.split('.')
        let value = translations[lang]
        for (const k of keys) {
            value = value?.[k]
        }
        return value || key
    }

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useTranslation() {
    return useContext(LanguageContext)
}
