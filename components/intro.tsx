"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { siteConfig, socialLinks } from "@/lib/data";
import profileImg from "@/public/profile.jpeg";

export default function Intro() {
  const { ref } = useSectionInView("home", 0.55);
  const { language, t } = useLanguage();
  const [isDownloadingCv, setIsDownloadingCv] = useState(false);

  async function handleDownloadCv() {
    if (isDownloadingCv) return;
    setIsDownloadingCv(true);
    try {
      const response = await fetch(`/cv.pdf?lang=${language}`);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "CV-Joao-Victor-Pedrosa.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } finally {
      setIsDownloadingCv(false);
    }
  }

  return (
    <section
      id="home"
      ref={ref}
      className="section-shell relative overflow-hidden rounded-[2rem] px-6 py-10 scroll-mt-32 sm:px-10 sm:py-12 lg:px-12 lg:py-14"
    >
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_58%)] lg:block" />

      <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-200">
            {t.intro.eyebrow}
          </span>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
            {t.intro.greeting} {siteConfig.firstName}
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            {t.intro.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            {t.intro.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {t.intro.specialties.map((specialty) => (
              <span
                key={specialty}
                className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {specialty}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="#projects"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              {t.intro.primaryCta}
              <BsArrowRight className="transition group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              {t.intro.secondaryCta}
              <FiArrowUpRight />
            </Link>

            <button
              type="button"
              onClick={handleDownloadCv}
              disabled={isDownloadingCv}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-800 transition hover:bg-cyan-400/15 disabled:cursor-wait disabled:opacity-80 dark:text-cyan-100"
            >
              {isDownloadingCv ? t.intro.generatingCv : t.intro.downloadCv}
              <HiDownload className="text-base" />
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                {t.intro.socialLabel}
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
                  >
                    <span className="text-base">{social.icon}</span>
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950 px-5 py-4 text-white shadow-2xl dark:bg-white dark:text-slate-950 sm:max-w-xs">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300 dark:text-cyan-700">
                {t.intro.availabilityTitle}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300 dark:text-slate-700">
                {t.intro.availabilityText}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-5 rounded-[2rem] bg-[conic-gradient(from_120deg,_rgba(34,211,238,0.15),_rgba(59,130,246,0.15),_transparent_60%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 p-5 shadow-[0_20px_80px_rgba(2,6,23,0.45)]">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-medium uppercase tracking-[0.22em] text-slate-300">
              <span>{siteConfig.role}</span>
              <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-emerald-300">
                Online
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.24),rgba(15,23,42,0.8))] p-4">
              <Image
                src={profileImg}
                alt={t.intro.imageAlt}
                priority
                className="aspect-square w-full rounded-[1.35rem] object-cover"
              />
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "React / Vue",
                "Next.js / Node.js",
                "TypeScript",
                "UX minded",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
