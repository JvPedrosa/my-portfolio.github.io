"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useLanguage } from "@/context/language-context";

type SubmitBtnProps = {
  pending: boolean;
};

export default function SubmitBtn({ pending }: SubmitBtnProps) {
  const { t } = useLanguage();

  return (
    <button
      type="submit"
      disabled={pending}
      className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-65 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
    >
      {pending ? (
        <>
          {t.submitBtn.pending}
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
        </>
      ) : (
        <>
          {t.submitBtn.idle}
          <FaPaperPlane className="text-xs" />
        </>
      )}
    </button>
  );
}
