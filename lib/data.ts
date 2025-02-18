import React from "react";
import {
  FaLaptopCode,
  FaUserGraduate,
  FaNodeJs,
  FaVuejs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiReact,
  SiJavascript,
  SiRedux,
  SiCss3,
  SiGit,
  SiHtml5,
  SiNextdotjs,
  SiVuetify,
} from "react-icons/si";
import { calculateDuration } from "./utils";
import { IoLogoVue } from "react-icons/io5";

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
    title: "Desenvolvedor Front-End I",
    company: "Zoox Smart Data",
    period: "Jul 2024 até o momento",
    duration: calculateDuration("Jul 1 2024"),
    location: "Remoto",
    skills: ["Vue.js", "Vuex", "Vuetify", "JavaScript", "CSS", "Git"],
    description:
      "Desenvolvimento de aplicações web utilizando Vue.js e Vuex, focando na criação de interfaces de usuário.",
    icon: React.createElement(FaLaptopCode),
  },
  {
    title: "Desenvolvedor Front-End",
    company: "Control It",
    period: "Ago 2023 até Abr 2024",
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
    period: "Mai 2022 até Mar 2023",
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
    period: "Nov 2021 até Abr 2022",
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
    period: "Jul 2021 até Nov 2021",
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
    period: "Abr 2020 até Dez 2020",
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
  {
    skill: "Vue.js",
    icon: React.createElement(IoLogoVue),
  },
  {
    skill: "Vuex",
    icon: React.createElement(FaVuejs),
  },
  {
    skill: "Vuetify",
    icon: React.createElement(SiVuetify),
  },
  {
    skill: "TypeScript",
    icon: React.createElement(SiTypescript),
  },
  {
    skill: "JavaScript",
    icon: React.createElement(SiJavascript),
  },
  {
    skill: "React",
    icon: React.createElement(SiReact),
  },
  {
    skill: "Redux",
    icon: React.createElement(SiRedux),
  },
  {
    skill: "Next.js",
    icon: React.createElement(SiNextdotjs),
  },
  {
    skill: "Node.js",
    icon: React.createElement(FaNodeJs),
  },
  {
    skill: "Git",
    icon: React.createElement(SiGit),
  },
  {
    skill: "HTML",
    icon: React.createElement(SiHtml5),
  },
  {
    skill: "CSS",
    icon: React.createElement(SiCss3),
  },
] as const;
