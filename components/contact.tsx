"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contato");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const { error } = await sendEmail(formData);
    if (error) {
      toast.error("Falha ao enviar e-mail: " + error);
    } else {
      toast.success("E-mail enviado com sucesso!");
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
      <SectionHeading>Contato</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Entre em contato comigo através do formulário abaixo
        <br />
        ou envie um e-mail para{" "}
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
          placeholder="Digite o seu e-mail"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Digite a sua mensagem"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
