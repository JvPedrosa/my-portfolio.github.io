"use client";

import React from "react";
import { FiSun } from "react-icons/fi";
import { useTheme } from "@/context/theme-context";
import { useLanguage } from "@/context/language-context";

type ThemeToggleProps = {
  className?: string;
};

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t.nav.theme}
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-300/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${className}`}
    >
      <FiSun className="text-base" />
    </button>
  );
}
