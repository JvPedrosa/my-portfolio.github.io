"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "./section-heading";

export default function Skills() {
  const { ref } = useSectionInView("skills");
  const { t } = useLanguage();
  const visibleCategories = skillCategories.filter(
    (category) => category.skills.length > 0
  );

  return (
    <section
      id="skills"
      ref={ref}
      className="section-shell rounded-[2rem] px-6 py-10 scroll-mt-32 sm:px-10 sm:py-12"
    >
      <SectionHeading eyebrow="Capabilities">
        {t.sectionHeadings.skills}
      </SectionHeading>

      <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
        {t.skills.intro}
      </p>

      <div className="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {visibleCategories.map((category, index) => (
          <motion.article
            key={category.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.04 }}
            className="rounded-[1.5rem] border border-slate-200/80 bg-white/85 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-700 dark:text-cyan-200">
                {category.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
                  {t.skills.categories[category.id]}
                </h3>
              </div>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill.skill}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-200"
                >
                  <span className="text-base">{skill.icon}</span>
                  {skill.skill}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
