"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { calculateDuration } from "@/lib/utils";
import SectionHeading from "./section-heading";

export default function Experience() {
  const { ref } = useSectionInView("experience");
  const { language, t } = useLanguage();

  return (
    <section
      id="experience"
      ref={ref}
      className="section-shell rounded-[2rem] px-6 py-10 scroll-mt-32 sm:px-10 sm:py-12"
    >
      <SectionHeading eyebrow="Career path">
        {t.sectionHeadings.experience}
      </SectionHeading>

      <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
        {t.experiences.intro}
      </p>

      <div className="relative mt-10 space-y-5 before:absolute before:left-[1.35rem] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-slate-200 dark:before:bg-white/10">
        {experiencesData.map((experience, index) => {
          const text = t.experiences[experience.id];
          const duration = experience.startDate
            ? calculateDuration(experience.startDate, language)
            : text.duration;

          return (
            <motion.article
              key={experience.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.03 }}
              className="relative pl-14"
            >
              <div className="absolute left-0 top-1 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-700 dark:text-cyan-200">
                {experience.icon}
              </div>

              <div className="rounded-[1.6rem] border border-slate-200/80 bg-white/85 p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-200">
                      {experience.company}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">
                      {text.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      {text.location}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-300">
                    <p className="font-semibold">{text.period}</p>
                    <p className="mt-1">
                      {t.experiences.durationLabel}: {duration}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {text.description}
                </p>

                <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                      {t.experiences.contributionsLabel}
                    </p>
                    <ul className="mt-3 grid gap-2">
                      {text.contributions.map((item) => (
                        <li
                          key={item}
                          className="rounded-2xl border border-slate-200/70 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-200"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                      {t.experiences.skillsLabel}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
