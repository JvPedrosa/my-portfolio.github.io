"use client";

import React from "react";
import { motion } from "framer-motion";

type Monster404Props = {
  className?: string;
};

export default function Monster404({ className = "" }: Monster404Props) {
  return (
    <motion.div
      className={`inline-block drop-shadow-lg ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 225 200" className="h-full w-full" aria-hidden="true">
        <ellipse
          cx="72"
          cy="184"
          rx="14"
          ry="7"
          className="fill-violet-700 dark:fill-violet-900"
        />
        <ellipse
          cx="128"
          cy="184"
          rx="14"
          ry="7"
          className="fill-violet-700 dark:fill-violet-900"
        />

        <path
          d="M32 110 q-26 10 -22 34"
          className="stroke-violet-500 dark:stroke-violet-600"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />

        <path
          d="M100 20c-44 0-78 34-78 78 0 40 30 74 78 74s78-34 78-74c0-44-34-78-78-78Z"
          className="fill-violet-500 dark:fill-violet-600"
        />

        <motion.path
          d="M142 34 L152 6 L130 20 Z"
          className="fill-violet-700 dark:fill-violet-900"
          style={{ transformOrigin: "138px 32px" }}
          animate={{ rotate: [0, 14, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <path
          d="M58 34 L48 6 L70 20 Z"
          className="fill-violet-700 dark:fill-violet-900"
        />

        <circle cx="76" cy="92" r="18" fill="white" />
        <circle cx="124" cy="92" r="18" fill="white" />
        <circle cx="76" cy="94" r="9" className="fill-gray-800" />
        <circle cx="124" cy="94" r="9" className="fill-gray-800" />

        <motion.rect
          x="58"
          y="74"
          width="36"
          height="36"
          className="fill-violet-500 dark:fill-violet-600"
          style={{ transformOrigin: "76px 74px" }}
          animate={{ scaleY: [0, 0, 1, 0, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            times: [0, 0.92, 0.96, 1, 1],
            ease: "easeInOut",
          }}
        />
        <motion.rect
          x="106"
          y="74"
          width="36"
          height="36"
          className="fill-violet-500 dark:fill-violet-600"
          style={{ transformOrigin: "124px 74px" }}
          animate={{ scaleY: [0, 0, 1, 0, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            times: [0, 0.92, 0.96, 1, 1],
            ease: "easeInOut",
          }}
        />

        <path
          d="M78 130 q22 18 44 0"
          className="stroke-violet-900 dark:stroke-violet-950"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path d="M90 134 L94 144 L98 134 Z" className="fill-white" />
        <path d="M110 134 L114 144 L118 134 Z" className="fill-white" />
        <motion.path
          d="M98 138 q2 10 4 0"
          className="fill-pink-400 dark:fill-pink-500"
          style={{ transformOrigin: "100px 138px" }}
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />

        <circle
          cx="55"
          cy="128"
          r="5"
          className="fill-violet-700/60 dark:fill-violet-900/60"
        />
        <circle
          cx="150"
          cy="138"
          r="4"
          className="fill-violet-700/60 dark:fill-violet-900/60"
        />

        <motion.path
          d="M168 110 q26 -6 30 -30"
          className="stroke-violet-500 dark:stroke-violet-600"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
          style={{ transformOrigin: "168px 110px" }}
          animate={{ rotate: [0, 24, 0, 24, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            repeatDelay: 1.2,
            ease: "easeInOut",
          }}
        />
      </svg>
    </motion.div>
  );
}
