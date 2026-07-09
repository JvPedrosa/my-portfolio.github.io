"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaLock } from "react-icons/fa";
import { projectsData } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  id,
  tags,
  githubUrl,
  demoUrl,
  githubPrivate,
  accentClassName,
}: ProjectProps) {
  const { t } = useLanguage();
  const projectText = t.projects[id];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 dark:border-white/10 dark:bg-slate-950/80 dark:shadow-[0_20px_70px_rgba(2,6,23,0.4)]"
    >
      <div className={`absolute inset-x-0 top-0 h-36 bg-gradient-to-br ${accentClassName}`} />

      <div className="relative">
        <div className="rounded-[1.4rem] border border-slate-200/70 bg-slate-950 p-5 text-white dark:border-white/10">
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-cyan-200">
              {t.projects.featuredLabel}
            </span>
            <div className="flex gap-2">
              {githubUrl ? (
                githubPrivate ? (
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300">
                    <FaLock className="text-sm" />
                  </span>
                ) : (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-300/40 hover:text-cyan-200"
                    aria-label={t.projects.github}
                  >
                    <FaGithub className="text-sm" />
                  </a>
                )
              ) : null}

              {demoUrl ? (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyan-300/40 hover:text-cyan-200"
                  aria-label={t.projects.demo}
                >
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              ) : null}
            </div>
          </div>

          <h3 className="mt-6 text-2xl font-bold">{projectText.title}</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {projectText.description}
          </p>
        </div>

        <div className="mt-5 grid gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              {t.projects.problemLabel}
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {projectText.problem}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              {t.projects.contributionLabel}
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {projectText.contribution}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              {t.projects.featuresLabel}
            </p>
            <ul className="mt-2 grid gap-2">
              {projectText.features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-2xl border border-slate-200/70 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              {t.projects.technologiesLabel}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {githubUrl ? (
              githubPrivate ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                  <FaLock className="text-xs" />
                  {t.projects.privateRepository}
                </span>
              ) : (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
                >
                  <FaGithub className="text-sm" />
                  {t.projects.github}
                </a>
              )
            ) : null}

            {demoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                <FaExternalLinkAlt className="text-xs" />
                {t.projects.demo}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
