import type { Dictionary } from "./types";

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
  },
  sectionHeadings: {
    about: "About me",
    projects: "My projects",
    skills: "Skills",
    experience: "My Experience",
    contact: "Contact",
  },
  intro: {
    greeting: "Hi, I'm",
    role: "a Full-Stack Developer focused on Front-End, with experience building websites and web apps using",
    stack: "React, Vue.js, TypeScript and Next.js",
    contactBtn: "Contact",
    downloadCv: "Download my CV",
  },
  about: {
    paragraph1Start:
      "Computer Science student at Universidade Federal da Paraíba (UFPB) and passionate about the art of solving problems through code. My motivation comes from tackling challenges and finding effective solutions. I have experience with technologies like",
    paragraph1Bold1: "React, TypeScript, and JavaScript",
    paragraph1Mid: ", and I'm also familiar with",
    paragraph1Bold2: "Next.js.",
    paragraph1End:
      "I'm always looking to sharpen my skills and learn new technologies. I'm currently exploring opportunities as a software developer, where I can put my passion for building innovative solutions to work.",
    paragraph2Start:
      "When I'm not coding, I like to work out — I'm a former competitive swimmer, and it's become my hobby today. I also enjoy watching movies, good food, and of course,",
    paragraph2Bold1: "learning new things",
    paragraph2Mid: ". Currently, I'm broadening my horizons by studying a bit of",
    paragraph2Bold2: "GoLang",
  },
  contact: {
    intro: "Get in touch through the form below",
    introVia: "or send an email to",
    emailPlaceholder: "Enter your email",
    messagePlaceholder: "Enter your message",
    errorPrefix: "Failed to send email: ",
    success: "Email sent successfully!",
  },
  submitBtn: "Send",
  footer: "© Built by João Victor Pedrosa 2024. All rights reserved.",
  experiences: {
    zoox: {
      title: "Full-Stack Developer",
      period: "Jul 2024 to present",
      duration: "",
      location: "Remote",
      description:
        "Building web applications with Vue.js and Vuex on the front-end, plus building and integrating Node.js APIs and modeling data with PostgreSQL and MongoDB on the back-end.",
    },
    controlIt: {
      title: "Front-End Developer",
      period: "Aug 2023 to Apr 2024",
      duration: "9 months",
      location: "Remote",
      description:
        "Building dynamic, responsive interfaces focused on integrating wireless IoT devices to remotely manage environments, machines, equipment, and people.",
    },
    lienoFulltime: {
      title: "Front-End Developer",
      period: "May 2022 to Mar 2023",
      duration: "11 months",
      location: "Hybrid, João Pessoa",
      description:
        "Refactored and optimized applications using React.js and Redux.js, improving system efficiency and responsiveness. On another project, I modernized legacy code using Visual Basic.NET, making the systems easier to maintain and improving user satisfaction.",
    },
    lienoIntern: {
      title: "Front-End Internship",
      period: "Nov 2021 to Apr 2022",
      duration: "6 months",
      location: "João Pessoa",
      description:
        "In my first role in the private sector, I focused on building features mainly with React.js and Redux.js. My efforts centered on improving the user experience, making interfaces more interactive and accessible.",
    },
    ufpbIntern: {
      title: "Front-End Internship",
      period: "Jul 2021 to Nov 2021",
      duration: "5 months",
      location: "Remote",
      description:
        "Built a site for promoting and engaging students with the university's outreach projects using WordPress, along with custom development using HTML, JavaScript, and CSS.",
    },
    ufpbVolunteer: {
      title: "Outreach Project Volunteer",
      period: "Apr 2020 to Dec 2020",
      duration: "9 months",
      location: "Hybrid, João Pessoa",
      description:
        "Edited educational videos for online courses, contributing to university outreach projects.",
    },
  },
  projects: {
    financeTracker: {
      title: "Finance Tracker",
      description:
        "Personal finance dashboard with authentication, transaction CRUD, and an expenses-by-category chart. Backend with Postgres and Row Level Security via Supabase.",
    },
    pokerSimulator: {
      title: "Poker Simulator",
      description:
        "Interactive Texas Hold'em simulator with a visual table for 4 players, a full betting system, automatic hand evaluation, and AI opponents. Includes every stage of the game and animations.",
    },
    portfolio: {
      title: "My Portfolio",
      description:
        "Personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Showcases my experience, skills, and projects in a modern, responsive layout.",
    },
  },
};

export default en;
