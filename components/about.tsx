"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("about");
  const { t } = useLanguage();

  const cards = Object.values(t.about.cards);

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      className="section-shell rounded-[2rem] px-6 py-10 scroll-mt-32 sm:px-10 sm:py-12"
    >
      <SectionHeading eyebrow="Profile">{t.sectionHeadings.about}</SectionHeading>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
          <p>{t.about.intro}</p>
          <p>{t.about.summary}</p>
          <p>{t.about.workingStyle}</p>
          <p>{t.about.interests}</p>
          <p>{t.about.goals}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.5rem] border border-slate-200/70 bg-white/85 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
