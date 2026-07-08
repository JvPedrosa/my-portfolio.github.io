"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("contact");
  const { t } = useLanguage();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const { error } = await sendEmail(formData);
    if (error) {
      toast.error(t.contact.errorPrefix + error);
    } else {
      toast.success(t.contact.success);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <Toaster position="bottom-center" reverseOrder={false} />
      <SectionHeading>{t.sectionHeadings.contact}</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {t.contact.intro}
        <br />
        {t.contact.introVia}{" "}
        <a className="underline" href="mailto:jotavpedrosa@gmail.com">
          jotavpedrosa@gmail.com
        </a>{" "}
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={t.contact.emailPlaceholder}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder={t.contact.messagePlaceholder}
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
