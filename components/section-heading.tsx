import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  eyebrow?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  children,
  eyebrow,
  align = "left",
}: SectionHeadingProps) {
  const alignmentClass = align === "center" ? "text-center items-center" : "";

  return (
    <div className={`mb-10 flex flex-col gap-3 ${alignmentClass}`}>
      {eyebrow ? (
        <span className="inline-flex w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-200">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}
