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
        Estudante de Ciência da Computação pela Universidade Federal da Paraíba
        (UFPB) e apaixonado pela arte de resolver problemas através da
        programação. Minha motivação surge ao enfrentar desafios e encontrar
        soluções eficazes. Tenho experiência com tecnologias como{" "}
        <span className="font-medium">React, TypeScript e JavaScript</span>, e
        também estou familiarizado com{" "}
        <span className="font-medium">Next.js.</span>
        Estou sempre em busca de aprimorar minhas habilidades e aprender novas
        tecnologias. Atualmente, estou explorando oportunidades como
        desenvolvedor de software, onde posso contribuir com minha paixão por
        criar soluções inovadoras.
      </p>

      <p>
        Quando não estou programando, gosto de me exercitar, sou um ex-atleta
        profissional de natação, que se transformou no meu hobbie hoje. Também
        gosto de assistir filmes, comer uma boa comida e claro,{" "}
        <span className="font-medium">aprender coisas novas</span>. Atualmente,
        estou abrindo meus horizontes e estudando um pouco de{" "}
        <span className="font-medium">GoLang</span>.
      </p>
    </motion.section>
  );
}
