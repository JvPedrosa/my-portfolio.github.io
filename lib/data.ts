import React from "react";
import {
  FaBriefcase,
  FaCodeBranch,
  FaDatabase,
  FaEnvelopeOpenText,
  FaGithub,
  FaGraduationCap,
  FaLaptopCode,
  FaNodeJs,
  FaServer,
  FaTools,
  FaUserGraduate,
  FaVuejs,
} from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTypescript,
  SiVuetify,
} from "react-icons/si";

export type SectionId =
  | "home"
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "education"
  | "contact";

export type ProjectId =
  | "realEstate"
  | "financeTracker"
  | "pokerSimulator"
  | "portfolio";

export type ExperienceId =
  | "zoox"
  | "controlIt"
  | "lienoFulltime"
  | "lienoIntern"
  | "ufpbIntern"
  | "ufpbVolunteer";

export type ProjectCategoryId =
  | "all"
  | "frontend"
  | "fullstack"
  | "study"
  | "personal";

export type SkillCategoryId =
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "cloud"
  | "quality";

export const siteConfig = {
  name: "João Victor Pedrosa",
  firstName: "João Victor",
  role: "Desenvolvedor Full Stack",
  email: "jotavpedrosa@gmail.com",
  location: "João Pessoa, PB, Brasil",
  websiteUrl: "https://my-portfolio-liart-one-93.vercel.app",
  githubUrl: "https://github.com/JvPedrosa",
  linkedinUrl: "https://www.linkedin.com/in/joao-victor-pedrosa-candido/",
} as const;

export const links: { id: SectionId; hash: string }[] = [
  { id: "home", hash: "#home" },
  { id: "about", hash: "#about" },
  { id: "projects", hash: "#projects" },
  { id: "skills", hash: "#skills" },
  { id: "experience", hash: "#experience" },
  { id: "education", hash: "#education" },
  { id: "contact", hash: "#contact" },
];

export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    href: siteConfig.githubUrl,
    icon: React.createElement(FaGithub),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: siteConfig.linkedinUrl,
    icon: React.createElement(FaBriefcase),
  },
  {
    id: "email",
    label: "E-mail",
    href: `mailto:${siteConfig.email}`,
    icon: React.createElement(FaEnvelopeOpenText),
  },
] as const;

export const projectCategories: {
  id: ProjectCategoryId;
  icon: React.ReactNode;
}[] = [
  { id: "all", icon: React.createElement(FaCodeBranch) },
  { id: "frontend", icon: React.createElement(FaLaptopCode) },
  { id: "fullstack", icon: React.createElement(FaServer) },
  { id: "study", icon: React.createElement(FaUserGraduate) },
  { id: "personal", icon: React.createElement(FaBriefcase) },
];

export const experiencesData: {
  id: ExperienceId;
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
    skills: ["Edição de vídeos"],
    icon: React.createElement(FaUserGraduate),
  },
];

export const projectsData: {
  id: ProjectId;
  category: Exclude<ProjectCategoryId, "all">;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  githubPrivate?: boolean;
  accentClassName: string;
}[] = [
  {
    id: "realEstate",
    category: "fullstack",
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
    accentClassName: "from-cyan-400/40 via-sky-500/20 to-transparent",
  },
  {
    id: "financeTracker",
    category: "frontend",
    tags: ["Nuxt.js", "Vue.js", "Vuetify", "Supabase", "TypeScript"],
    githubUrl: "https://github.com/JvPedrosa/finance-tracker",
    demoUrl: "https://finance-tracker-chi-flax-70.vercel.app",
    accentClassName: "from-emerald-400/40 via-teal-500/20 to-transparent",
  },
  {
    id: "pokerSimulator",
    category: "study",
    tags: ["Nuxt.js", "Vue.js", "TypeScript", "Vite"],
    githubUrl: "https://github.com/JvPedrosa/poker-simulator",
    demoUrl: "https://poker-simulator-green.vercel.app/",
    accentClassName: "from-amber-400/35 via-orange-500/20 to-transparent",
  },
  {
    id: "portfolio",
    category: "personal",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/JvPedrosa/my-portfolio.github.io",
    demoUrl: "https://my-portfolio-liart-one-93.vercel.app",
    accentClassName: "from-fuchsia-400/30 via-violet-500/15 to-transparent",
  },
];

export const skillCategories: {
  id: SkillCategoryId;
  icon: React.ReactNode;
  skills: {
    skill: string;
    icon: React.ReactNode;
  }[];
}[] = [
  {
    id: "frontend",
    icon: React.createElement(FaLaptopCode),
    skills: [
      { skill: "Vue.js", icon: React.createElement(IoLogoVue) },
      { skill: "Vuex", icon: React.createElement(FaVuejs) },
      { skill: "Vuetify", icon: React.createElement(SiVuetify) },
      { skill: "React", icon: React.createElement(SiReact) },
      { skill: "Redux", icon: React.createElement(SiRedux) },
      { skill: "Next.js", icon: React.createElement(SiNextdotjs) },
      { skill: "TypeScript", icon: React.createElement(SiTypescript) },
      { skill: "JavaScript", icon: React.createElement(SiJavascript) },
      { skill: "HTML", icon: React.createElement(SiHtml5) },
      { skill: "CSS", icon: React.createElement(SiCss3) },
    ],
  },
  {
    id: "backend",
    icon: React.createElement(FaServer),
    skills: [{ skill: "Node.js", icon: React.createElement(FaNodeJs) }],
  },
  {
    id: "database",
    icon: React.createElement(FaDatabase),
    skills: [
      { skill: "PostgreSQL", icon: React.createElement(SiPostgresql) },
      { skill: "MongoDB", icon: React.createElement(SiMongodb) },
    ],
  },
  {
    id: "tools",
    icon: React.createElement(FaTools),
    skills: [{ skill: "Git", icon: React.createElement(SiGit) }],
  },
  {
    id: "cloud",
    icon: React.createElement(FaServer),
    skills: [],
  },
  {
    id: "quality",
    icon: React.createElement(FaCodeBranch),
    skills: [],
  },
];

export const skillsData = skillCategories.flatMap((category) => category.skills);

export const educationData = {
  degreeIcon: React.createElement(FaGraduationCap),
} as const;
