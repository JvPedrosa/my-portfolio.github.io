import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Conhecimentos",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Formação em Ciência da Computação",
    location: "João Pessoa, PB",
    description:
      "Me formei em Ciência da Computação pela Universidade Federal da Paraíba. Aprendi sobre algoritmos, estruturas de dados, programação orientada a objetos e muito mais.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Desenvolvedor Front-End",
    location: "Orlando, FL",
    description:
      "Trabalhei como desenvolvedor front-end por 2 anos em um emprego e 1 ano em outro. Também me qualifiquei para full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Desenvolvedor Full-Stack",
    location: "Houston, TX",
    description:
      "Atualmente, sou um desenvolvedor full-stack trabalhando como freelancer. Minha pilha tecnológica inclui React, Next.js, TypeScript, Tailwind, Prisma e MongoDB. Estou aberto a oportunidades de tempo integral.",
    icon: React.createElement(FaReact),
    date: "2021 - presente",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "Trabalhei como desenvolvedor full-stack neste projeto de startup por 2 anos. Usuários podem dar feedback público para empresas.",
    tags: ["React", "Next.js"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Plataforma de empregos para desenvolvedores remotos. Fui o desenvolvedor front-end. Possui recursos como filtragem, ordenação e paginação.",
    tags: ["React", "TypeScript", "Next.js", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "Um aplicativo web público para análises rápidas de texto. Mostra a contagem de palavras, contagem de caracteres e limites de postagens em mídias sociais.",
    tags: ["React", "Next.js"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Redux",
  "Styled Components",
] as const;
