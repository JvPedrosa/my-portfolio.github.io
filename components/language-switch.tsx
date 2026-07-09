"use client";

import React from "react";
import clsx from "clsx";
import { useLanguage } from "@/context/language-context";

type LanguageSwitchProps = {
  className?: string;
};

export default function LanguageSwitch({
  className = "",
}: LanguageSwitchProps) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.nav.language}
      className={clsx(
        "inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
        className
      )}
    >
      <span
        className={clsx(
          "rounded-full px-2 py-1 transition",
          language === "pt"
            ? "bg-cyan-300 text-slate-950"
            : "text-slate-400"
        )}
      >
        PT
      </span>
      <span className="text-slate-600">/</span>
      <span
        className={clsx(
          "rounded-full px-2 py-1 transition",
          language === "en"
            ? "bg-cyan-300 text-slate-950"
            : "text-slate-400"
        )}
      >
        EN
      </span>
    </button>
  );
}
