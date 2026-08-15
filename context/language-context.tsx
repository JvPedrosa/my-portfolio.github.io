"use client";

import React, {
  useEffect,
  useSyncExternalStore,
  createContext,
  useContext,
} from "react";
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
const languageChangeEvent = "portfolio-language-change";

const getClientLanguage = (): Language => {
  const savedLanguage = window.localStorage.getItem("language");

  if (savedLanguage === "pt" || savedLanguage === "en") {
    return savedLanguage;
  }

  return navigator.language.toLowerCase().startsWith("en") ? "en" : "pt";
};

const subscribeToLanguage = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener(languageChangeEvent, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(languageChangeEvent, callback);
  };
};

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const language = useSyncExternalStore<Language>(
    subscribeToLanguage,
    getClientLanguage,
    (): Language => "pt"
  );

  const toggleLanguage = () => {
    const nextLanguage = language === "pt" ? "en" : "pt";
    window.localStorage.setItem("language", nextLanguage);
    window.dispatchEvent(new Event(languageChangeEvent));
  };

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "pt-BR";
  }, [language]);

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
