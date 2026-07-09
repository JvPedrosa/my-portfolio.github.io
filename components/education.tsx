"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "./section-heading";

export default function Education() {
  const { ref } = useSectionInView("education");
  const { t } = useLanguage();

  return (
    <motion.section
      id="education"
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="section-shell rounded-[2rem] px-6 py-10 scroll-mt-32 sm:px-10 sm:py-12"
    >
      <SectionHeading eyebrow="Academic background">
        {t.sectionHeadings.education}
      </SectionHeading>

      <article className="flex flex-col gap-5 rounded-[1.75rem] border border-slate-200/80 bg-white/85 p-6 shadow-sm dark:border-white/10 dark:bg-white/5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl text-cyan-700 dark:text-cyan-200">
            {educationData.degreeIcon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
              {t.education.degree}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {t.education.institution}
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {t.education.status}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-200">
          {t.education.period}
        </div>
      </article>
    </motion.section>
  );
}
