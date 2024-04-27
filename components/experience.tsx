"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experiência");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="experience"
      ref={ref}
    >
      <SectionHeading>Minhas Experiências</SectionHeading>

      <ul className="space-y-4">
        {experiencesData.map((experience: any, index: number) => (
          <li
            key={index}
            className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow"
          >
            <div className="flex items-center space-x-3">
              <div className="icon p-3" style={{ fontSize: "2rem" }}>
                {experience.icon}
              </div>
              <div className="info flex-grow">
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <p className="text-gray-600 text-sm dark:text-gray-300">
                  {experience.company} ({experience.location}) -{" "}
                  {experience.period} ({experience.duration})
                </p>

                <p className="mt-2 mx-2 text-sm text-gray-600 dark:text-gray-300">
                  {experience.description}
                </p>
                <div className="flex-grow flex flex-wrap justify-center mt-2 gap-2">
                  {experience.skills.map((skill: string, index: number) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-gray-300 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
