"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

export default function About() {
  const { ref } = useSectionInView("about");
  const { t } = useLanguage();

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>{t.sectionHeadings.about}</SectionHeading>
      <p className="mb-3">
        {t.about.paragraph1Start}{" "}
        <span className="font-medium">{t.about.paragraph1Bold1}</span>
        {t.about.paragraph1Mid}{" "}
        <span className="font-medium">{t.about.paragraph1Bold2}</span>{" "}
        {t.about.paragraph1End}
      </p>

      <p>
        {t.about.paragraph2Start}{" "}
        <span className="font-medium">{t.about.paragraph2Bold1}</span>
        {t.about.paragraph2Mid}{" "}
        <span className="font-medium">{t.about.paragraph2Bold2}</span>.
      </p>
    </motion.section>
  );
}
