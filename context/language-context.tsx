"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import { dictionaries, type Language } from "@/lib/i18n";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (typeof dictionaries)[Language];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<Language>("pt");

  const applyLanguage = (value: Language) => {
    setLanguage(value);
    window.localStorage.setItem("language", value);
    document.documentElement.lang = value === "en" ? "en" : "pt-BR";
  };

  const toggleLanguage = () => {
    applyLanguage(language === "pt" ? "en" : "pt");
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem(
      "language"
    ) as Language | null;

    if (localLanguage === "pt" || localLanguage === "en") {
      applyLanguage(localLanguage);
    } else if (navigator.language.toLowerCase().startsWith("en")) {
      applyLanguage("en");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t: dictionaries[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageContextProvider");
  }

  return context;
}
