"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "@/context/language-context";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  id,
  tags,
  githubUrl,
  demoUrl,
  githubPrivate,
}: ProjectProps) {
  const { t } = useLanguage();
  const { title, description } = t.projects[id];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden p-5 sm:p-8 hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          <div className="flex gap-3 mt-4">
            {githubUrl && (
              githubPrivate ? (
                <div className="relative group/private">
                  <button
                    type="button"
                    disabled
                    title={t.projects.privateRepository}
                    className="flex items-center gap-2 bg-gray-900/60 text-white/70 px-4 py-2 rounded-full cursor-not-allowed transition dark:bg-white/10 dark:text-white/60"
                  >
                    <FaGithub />
                    <span className="text-sm">{t.projects.github}</span>
                  </button>
                  <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-950 px-3 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover/private:opacity-100 group-focus-within/private:opacity-100 dark:bg-white dark:text-gray-900">
                    {t.projects.privateRepository}
                  </span>
                </div>
              ) : (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition dark:bg-white/10 dark:hover:bg-white/20"
                >
                  <FaGithub />
                  <span className="text-sm">{t.projects.github}</span>
                </a>
              )
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition"
              >
                <FaExternalLinkAlt className="text-xs" />
                <span className="text-sm">{t.projects.demo}</span>
              </a>
            )}
          </div>

          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
}
