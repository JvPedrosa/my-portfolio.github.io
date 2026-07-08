"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

export default function Education() {
  const { ref } = useSectionInView("education");
  const { t } = useLanguage();

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="education"
      ref={ref}
    >
      <SectionHeading>{t.sectionHeadings.education}</SectionHeading>

      <div className="mx-auto flex max-w-md items-center gap-3 rounded-lg bg-gray-100 p-4 text-left shadow dark:bg-gray-700">
        <div className="p-3" style={{ fontSize: "2rem" }}>
          <FaGraduationCap />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{t.education.degree}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {t.education.institution}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {t.education.period}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
