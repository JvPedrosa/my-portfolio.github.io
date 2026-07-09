"use client";

import React, { useMemo, useState } from "react";
import { FaCodeBranch } from "react-icons/fa";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "./section-heading";
import Project from "./project";

export default function Projects() {
  const { ref } = useSectionInView("projects");
  const { t } = useLanguage();
  const [activeTechnology, setActiveTechnology] = useState("all");

  const technologies = useMemo(
    () =>
      Array.from(new Set(projectsData.flatMap((project) => project.tags))).sort(
        (firstTechnology, secondTechnology) =>
          firstTechnology.localeCompare(secondTechnology)
      ),
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeTechnology === "all") return projectsData;
    return projectsData.filter((project) =>
      project.tags.includes(activeTechnology)
    );
  }, [activeTechnology]);

  return (
    <section
      id="projects"
      ref={ref}
      className="section-shell rounded-[2rem] px-6 py-10 scroll-mt-32 sm:px-10 sm:py-12"
    >
      <SectionHeading eyebrow="Selected work">
        {t.sectionHeadings.projects}
      </SectionHeading>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
          {t.projects.intro}
        </p>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTechnology("all")}
            className={`focus-ring inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activeTechnology === "all"
                ? "border-cyan-300 bg-cyan-300 text-slate-950"
                : "border-slate-200 bg-white/80 text-slate-700 hover:border-cyan-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            }`}
          >
            <span className="text-sm">
              <FaCodeBranch />
            </span>
            {t.projects.filterAll}
          </button>

          {technologies.map((technology) => (
            <button
              key={technology}
              type="button"
              onClick={() => setActiveTechnology(technology)}
              className={`focus-ring inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeTechnology === technology
                  ? "border-cyan-300 bg-cyan-300 text-slate-950"
                  : "border-slate-200 bg-white/80 text-slate-700 hover:border-cyan-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              }`}
            >
              {technology}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
