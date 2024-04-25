"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>Sobre mim </SectionHeading>
      <p className="mb-3">
        Formado em Ciência da Computação, estudei na Universidade Federal da
        Paraíba (UFPB), um curso que é mais voltado ao backend, mas curiosamente
        gostei do <span className="font-medium">desenvolvimento frontend</span>.{" "}
        <span className="italic">Minha parte favorita da programação</span> é o
        aspecto de resolver problemas. Eu amo a sensação de finalmente encontrar
        uma solução para um problema. Minhas principais tecnologias são{" "}
        <span className="font-medium">
          React, TypeScript, JavaScript e Node.js
        </span>
        . Também estou familiarizado com Next.js. Estou sempre buscando aprender
        novas tecnologias. Atualmente, estou procurando uma{" "}
        <span className="font-medium">oportunidade </span> como desenvolvedor de
        software.
      </p>

      <p>
        <span className="italic">Quando não estou programando</span>, gosto de
        me exercitar, sou um ex-atleta profissional de natação. Também gosto de
        assistir filmes, comer uma boa comida e claro,{" "}
        <span className="font-medium">aprender coisas novas</span>. Atualmente,
        estou abrindo meus horizontes e estudando um pouco de{" "}
        <span className="font-medium">GoLang</span>.
      </p>
    </motion.section>
  );
}
