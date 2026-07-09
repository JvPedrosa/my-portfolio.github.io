"use client";

import React, { useId, useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { sendEmail } from "@/actions/sendEmail";
import { siteConfig } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("contact");
  const { language, t } = useLanguage();
  const [pending, setPending] = useState(false);
  const nameFieldId = useId();
  const emailFieldId = useId();
  const messageFieldId = useId();
  const websiteFieldId = useId();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (pending) {
      return;
    }

    setPending(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const { error } = await sendEmail(formData);
    setPending(false);

    if (error) {
      switch (error) {
        case "INVALID_NAME":
          toast.error(t.contact.invalidName);
          break;
        case "INVALID_EMAIL":
          toast.error(t.contact.invalidEmail);
          break;
        case "INVALID_MESSAGE":
          toast.error(t.contact.invalidMessage);
          break;
        case "SPAM_DETECTED":
        case "RATE_LIMITED":
        case "CONFIG_MISSING":
        case "SEND_FAILED":
        default:
          toast.error(t.contact.sendError);
          break;
      }
      return;
    }

    form.reset();
    toast.success(t.contact.success);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="section-shell rounded-[2rem] px-6 py-10 scroll-mt-32 sm:px-10 sm:py-12"
    >
      <Toaster position="bottom-center" reverseOrder={false} />
      <SectionHeading eyebrow="Contact">
        {t.sectionHeadings.contact}
      </SectionHeading>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            {t.contact.intro}
          </p>

          <div className="grid gap-3">
            {[
              {
                label: t.contact.emailLabel,
                value: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
                icon: <FiMail />,
              },
              {
                label: t.contact.linkedinLabel,
                value: "joao-victor-pedrosa-candido",
                href: siteConfig.linkedinUrl,
                icon: <FiLinkedin />,
              },
              {
                label: t.contact.githubLabel,
                value: "JvPedrosa",
                href: siteConfig.githubUrl,
                icon: <FiGithub />,
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  item.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="focus-ring flex items-center justify-between rounded-[1.5rem] border border-slate-200/80 bg-white/85 px-5 py-4 text-slate-700 transition hover:border-cyan-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-700 dark:text-cyan-200">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium">{item.value}</p>
                  </div>
                </div>
                <FiArrowUpRight className="text-lg" />
              </a>
            ))}
          </div>

          <div className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:text-cyan-100">
              {t.contact.availability}
            </p>
            <div className="mt-4">
              <a
                href={`/cv.pdf?lang=${language}`}
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
              >
                {t.contact.cvLabel}
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
          <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
            {t.contact.formTitle}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {t.contact.formDescription}
          </p>

          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <label
              htmlFor={nameFieldId}
              className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              {t.contact.nameInputLabel}
              <input
                id={nameFieldId}
                name="senderName"
                type="text"
                required
                minLength={2}
                maxLength={120}
                autoComplete="name"
                placeholder={t.contact.namePlaceholder}
                disabled={pending}
                className="focus-ring h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-slate-900 placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-70 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-500"
              />
            </label>

            <label
              htmlFor={emailFieldId}
              className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              {t.contact.emailInputLabel}
              <input
                id={emailFieldId}
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                autoComplete="email"
                placeholder={t.contact.emailPlaceholder}
                disabled={pending}
                className="focus-ring h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-slate-900 placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-70 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-500"
              />
            </label>

            <div className="hidden" aria-hidden="true">
              <label htmlFor={websiteFieldId}>
                Website
                <input
                  id={websiteFieldId}
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            <label
              htmlFor={messageFieldId}
              className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              {t.contact.messageInputLabel}
              <textarea
                id={messageFieldId}
                name="message"
                required
                minLength={10}
                maxLength={5000}
                placeholder={t.contact.messagePlaceholder}
                disabled={pending}
                className="focus-ring min-h-44 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 text-slate-900 placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-70 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:placeholder:text-slate-500"
              />
            </label>

            <div className="pt-2">
              <SubmitBtn pending={pending} />
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
