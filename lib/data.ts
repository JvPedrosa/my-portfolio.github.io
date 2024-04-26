import React from "react";
import { FaLaptopCode, FaUserGraduate } from "react-icons/fa";

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  // {
  //   name: "Projetos",
  //   hash: "#projects",
  // },
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
    title: "Desenvolvedor Front-End",
    company: "Control It",
    period: "Ago 2023 - Abr 2024",
    duration: "9 meses",
    location: "Remoto",
    skills: ["React.js", "TypeScript", "CSS", "Styled Components", "Git"],
    description:
      "Desenvolvimento de interfaces dinâmicas e responsivas com foco na integração de dispositivos IoT sem fios para gerenciar ambientes, máquinas, equipamentos e pessoas de forma remota.",
    icon: React.createElement(FaLaptopCode),
  },
  {
    title: "Desenvolvedor Front-End",
    company: "Lieno Tecnologia",
    period: "Mai 2022 - Mar 2023",
    duration: "11 meses",
    location: "Híbrido, João Pessoa",
    skills: ["React.js", "Redux.js", "Visual Basic.NET", "CSS", "Git"],
    description:
      "Atuei na refatoração e otimização de aplicações utilizando React.js e Redux.js, melhorando a eficiência e a responsividade dos sistemas. Em outro projeto, modernizei códigos utilizando Visual Basic.NET para aprimorar sistemas legados, aumentando a facilidade de manutenção e a satisfação do usuário.",
    icon: React.createElement(FaLaptopCode),
  },
  {
    title: "Estágio em Front-End",
    company: "Lieno Tecnologia",
    period: "Nov 2021 - Abr 2022",
    duration: "6 meses",
    location: "João Pessoa",
    skills: ["React.js", "Redux.js", "CSS", "Git"],
    description:
      "Na minha primeira experiência no mercado privado, me dediquei ao desenvolvimento de funcionalidades utilizando principalmente React.js e Redux.js. O foco dos meus esforços estava em aprimorar a experiência do usuário, tornando as interfaces mais interativas e acessíveis.",
    icon: React.createElement(FaUserGraduate),
  },
  {
    title: "Estágio em Front-End",
    company: "UFPB",
    period: "Jul 2021 - Nov 2021",
    duration: "5 meses",
    location: "Remoto",
    skills: ["HTML", "JavaScript", "CSS", "WordPress", "Git"],
    description:
      "Criação de um site para a divulgação e interação dos alunos com os Projetos de Extensão da universidade utilizando WordPress, além de desenvolvimento customizado com HTML, JavaScript e CSS.",
    icon: React.createElement(FaUserGraduate),
  },
  {
    title: "Voluntário em Projeto de Extensão",
    company: "UFPB",
    period: "Abr 2020 - Dez 2020",
    duration: "9 meses",
    location: "Híbrido, João Pessoa",
    skills: ["Edição de Vídeos"],
    description:
      "Edição de vídeos educativos para cursos online, contribuindo para projetos de extensão universitária.",
    icon: React.createElement(FaUserGraduate),
  },
] as const;

export const projectsData = [
  // {
  //   title: "CorpComment",
  //   description:
  //     "Trabalhei como desenvolvedor full-stack neste projeto de startup por 2 anos. Usuários podem dar feedback público para empresas.",
  //   tags: ["React", "Next.js"],
  //   imageUrl: corpcommentImg,
  // },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Plataforma de empregos para desenvolvedores remotos. Fui o desenvolvedor front-end. Possui recursos como filtragem, ordenação e paginação.",
  //   tags: ["React", "TypeScript", "Next.js", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "Um aplicativo web público para análises rápidas de texto. Mostra a contagem de palavras, contagem de caracteres e limites de postagens em mídias sociais.",
  //   tags: ["React", "Next.js"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "TypeScript",
  "React",
  "JavaScript",
  "Redux",
  "CSS",
  "Next.js",
  "Node.js",
  "Git",
  "Styled Components",
  "HTML",
] as const;
