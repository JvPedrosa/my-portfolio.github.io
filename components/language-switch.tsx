"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import clsx from "clsx";

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="fixed right-4 top-3 z-[999] flex items-center gap-1.5 rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 px-3 py-2 text-sm font-medium shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] transition hover:scale-105 dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 sm:right-8 sm:top-6"
    >
      <span
        className={clsx(
          "transition",
          language === "pt"
            ? "text-gray-950 dark:text-gray-200"
            : "text-gray-400 dark:text-gray-600"
        )}
      >
        PT
      </span>
      <span className="text-gray-300 dark:text-gray-700">|</span>
      <span
        className={clsx(
          "transition",
          language === "en"
            ? "text-gray-950 dark:text-gray-200"
            : "text-gray-400 dark:text-gray-600"
        )}
      >
        EN
      </span>
    </button>
  );
}
