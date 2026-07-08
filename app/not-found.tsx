"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/language-context";
import Monster404 from "@/components/monster-404";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <motion.div
        className="flex items-center justify-center gap-2 sm:gap-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-7xl font-extrabold sm:text-9xl">4</span>
        <Monster404 className="h-20 w-20 sm:h-32 sm:w-32" />
        <span className="text-7xl font-extrabold sm:text-9xl">4</span>
      </motion.div>

      <motion.h1
        className="mt-8 text-2xl font-medium sm:text-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {t.notFound.title}
      </motion.h1>

      <motion.p
        className="mt-3 max-w-md text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        {t.notFound.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10"
        >
          {t.notFound.backHome}
        </Link>
      </motion.div>
    </main>
  );
}
