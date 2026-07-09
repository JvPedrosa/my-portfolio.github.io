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
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";

export type SectionId =
  | "home"
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "education"
  | "contact";

export const links: { id: SectionId; hash: string }[] = [
  { id: "home", hash: "#home" },
  { id: "about", hash: "#about" },
  { id: "projects", hash: "#projects" },
  { id: "skills", hash: "#skills" },
  { id: "experience", hash: "#experience" },
  { id: "education", hash: "#education" },
  { id: "contact", hash: "#contact" },
];

export const experiencesData: {
  id:
    | "zoox"
    | "controlIt"
    | "lienoFulltime"
    | "lienoIntern"
    | "ufpbIntern"
    | "ufpbVolunteer";
  company: string;
  startDate?: string;
  skills: string[];
  icon: React.ReactNode;
}[] = [
  {
    id: "zoox",
    company: "Zoox Smart Data",
    startDate: "Jul 1 2024",
    skills: [
      "Vue.js",
      "Vuex",
      "Vuetify",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "JavaScript",
      "CSS",
      "Git",
    ],
    icon: React.createElement(FaLaptopCode),
  },
  {
    id: "controlIt",
    company: "Control It",
    skills: ["React.js", "TypeScript", "CSS", "Styled Components", "Git"],
    icon: React.createElement(FaLaptopCode),
  },
  {
    id: "lienoFulltime",
    company: "Lieno Tecnologia",
    skills: ["React.js", "Redux.js", "Visual Basic.NET", "CSS", "Git"],
    icon: React.createElement(FaLaptopCode),
  },
  {
    id: "lienoIntern",
    company: "Lieno Tecnologia",
    skills: ["React.js", "Redux.js", "CSS", "Git"],
    icon: React.createElement(FaUserGraduate),
  },
  {
    id: "ufpbIntern",
    company: "UFPB",
    skills: ["HTML", "JavaScript", "CSS", "WordPress", "Git"],
    icon: React.createElement(FaUserGraduate),
  },
  {
    id: "ufpbVolunteer",
    company: "UFPB",
    skills: ["Edição de Vídeos"],
    icon: React.createElement(FaUserGraduate),
  },
];

export const projectsData: {
  id: "realEstate" | "financeTracker" | "pokerSimulator" | "portfolio";
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  githubPrivate?: boolean;
}[] = [
  {
    id: "realEstate",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
    ],
    githubUrl: "https://github.com/JvPedrosa/realestate-launch-platform",
    demoUrl: "https://realestate-launch-platform.vercel.app",
    githubPrivate: true,
  },
  {
    id: "financeTracker",
    tags: ["Nuxt.js", "Vue.js", "Vuetify", "Supabase", "TypeScript"],
    githubUrl: "https://github.com/JvPedrosa/finance-tracker",
    demoUrl: "https://finance-tracker-chi-flax-70.vercel.app",
  },
  {
    id: "pokerSimulator",
    tags: ["Nuxt.js", "Vue.js", "TypeScript", "Vite"],
    githubUrl: "https://github.com/JvPedrosa/poker-simulator",
    demoUrl: "https://poker-simulator-green.vercel.app/",
  },
  {
    id: "portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/JvPedrosa/my-portfolio.github.io",
    demoUrl: "https://my-portfolio-liart-one-93.vercel.app",
  },
];

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
    skill: "PostgreSQL",
    icon: React.createElement(SiPostgresql),
  },
  {
    skill: "MongoDB",
    icon: React.createElement(SiMongodb),
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
