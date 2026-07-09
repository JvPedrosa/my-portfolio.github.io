"use client";

import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { links, siteConfig } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useLanguage } from "@/context/language-context";
import LanguageSwitch from "./language-switch";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (sectionId: (typeof links)[number]["id"]) => {
    setActiveSection(sectionId);
    setTimeOfLastClick(Date.now());
    setIsMenuOpen(false);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/75 px-4 py-3 shadow-[0_20px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl pointer-events-auto">
        <Link
          href="#home"
          onClick={() => handleLinkClick("home")}
          className="min-w-0 rounded-full px-3 py-2 text-sm font-semibold tracking-[0.24em] text-slate-100 uppercase transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70"
        >
          {siteConfig.firstName}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.hash}
              href={link.hash}
              onClick={() => handleLinkClick(link.id)}
              className={clsx(
                "relative rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70",
                activeSection === link.id && "text-white"
              )}
            >
              {activeSection === link.id && (
                <motion.span
                  layoutId="active-section"
                  className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/10"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              {t.nav[link.id]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <LanguageSwitch />
        </div>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-300/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 lg:hidden"
        >
          {isMenuOpen ? (
            <HiOutlineX className="text-xl" />
          ) : (
            <HiOutlineMenuAlt3 className="text-xl" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-3 max-w-6xl rounded-[1.75rem] border border-white/10 bg-slate-950/95 p-4 shadow-[0_20px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl pointer-events-auto lg:hidden"
          >
            <nav className="grid gap-2">
              {links.map((link) => (
                <Link
                  key={link.hash}
                  href={link.hash}
                  onClick={() => handleLinkClick(link.id)}
                  className={clsx(
                    "rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70",
                    activeSection === link.id &&
                      "bg-white/10 text-white ring-1 ring-white/10"
                  )}
                >
                  {t.nav[link.id]}
                </Link>
              ))}
            </nav>

            <div className="mt-4 flex items-center gap-2">
              <ThemeToggle className="flex-none" />
              <LanguageSwitch className="flex-1 justify-center" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
