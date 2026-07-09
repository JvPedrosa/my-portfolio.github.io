"use client";

import React from "react";
import { useLanguage } from "@/context/language-context";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="px-4 pb-10 pt-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 rounded-[1.75rem] border border-white/10 bg-slate-950 px-6 py-5 text-sm text-slate-300 shadow-[0_20px_80px_rgba(2,6,23,0.35)]">
        <p className="font-semibold text-white">{siteConfig.name}</p>
        <p className="leading-7">{t.footer}</p>
        <small className="text-slate-400">
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
          reservados.
        </small>
      </div>
    </footer>
  );
}
