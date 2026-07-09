import type { Dictionary } from "./types";

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    education: "Education",
    projects: "Projects",
    skills: "Stack",
    experience: "Experience",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Toggle language",
  },
  sectionHeadings: {
    about: "About me",
    education: "Education",
    projects: "Featured projects",
    skills: "Stack and skills",
    experience: "Work experience",
    contact: "Let's talk",
  },
  intro: {
    eyebrow: "Frontend-first mindset with full stack execution",
    greeting: "Hi, I'm",
    title:
      "Full Stack Developer focused on modern, scalable, and intuitive frontend experiences.",
    description:
      "I build web products with close attention to user experience, visual consistency, API integration, and maintainable code.",
    specialties: [
      "Frontend is my main focus",
      "Hands-on full stack product experience",
      "Responsive, accessible, and performant UI",
    ],
    primaryCta: "View projects",
    secondaryCta: "Get in touch",
    contactBtn: "Contact",
    downloadCv: "Download resume",
    generatingCv: "Generating resume...",
    socialLabel: "Professional profiles",
    availabilityTitle: "Specialties",
    availabilityText:
      "React, Vue.js, Next.js, Node.js, TypeScript, and close collaboration with product teams.",
    imageAlt: "Profile photo of João Victor Pedrosa",
  },
  about: {
    intro:
      "I work on web applications and interfaces with a real interest in user experience, frontend architecture, and continuous product evolution.",
    summary:
      "I'm a Computer Science graduate from UFPB and I work as a full stack developer, with deeper focus on frontend. I enjoy turning requirements into clear, accessible, and well-structured interfaces while staying mindful of backend integration and code quality.",
    workingStyle:
      "My experience includes React, Vue.js, TypeScript, Next.js, and Node.js. In day-to-day work, I try to balance usability, performance, and technical organization to deliver consistent solutions.",
    interests:
      "I'm also interested in interface design, user experience, and building products that make sense both for the people using them and for the team maintaining them.",
    goals:
      "My goal is to keep growing as a software engineer with strong frontend ownership, contributing to teams that value product quality, collaboration, and continuous learning.",
    cards: {
      role: {
        title: "Area of work",
        description: "Web development with frontend focus and full stack delivery.",
      },
      stack: {
        title: "Core technologies",
        description: "React, Vue.js, TypeScript, Next.js, Node.js, and relational and NoSQL databases.",
      },
      approach: {
        title: "How I work",
        description: "Organized interfaces, reliable integrations, and maintainable implementation.",
      },
      nextStep: {
        title: "Next step",
        description: "Keep deepening my role in product and digital experience work.",
      },
    },
  },
  contact: {
    intro:
      "If you need someone to build thoughtful interfaces and web products with a practical product mindset, let's talk.",
    introVia: "Or, if you prefer, reach out directly via",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    formTitle: "Quick message",
    formDescription:
      "Use the form if the email service is configured. Otherwise, my direct email remains the main contact channel.",
    emailPlaceholder: "you@company.com",
    messagePlaceholder: "Tell me a bit about the project, role, or context behind your message.",
    emailInputLabel: "Your email",
    messageInputLabel: "Your message",
    errorPrefix: "Message failed to send: ",
    success: "Message sent successfully!",
    unavailable:
      "The form still needs email service configuration. For now, please use the direct contact options above.",
    submit: "Send message",
    availability: "Open to professional opportunities and conversations.",
    cvLabel: "Download resume",
  },
  submitBtn: {
    idle: "Send message",
    pending: "Sending...",
  },
  footer:
    "Portfolio built to present experience in frontend, product thinking, and full stack development.",
  notFound: {
    title: "Oops! This page ran away.",
    subtitle:
      "The page you're looking for doesn't exist or has moved. How about heading back to safety?",
    backHome: "Back to home",
  },
  education: {
    degree: "Bachelor's degree in Computer Science",
    institution: "Universidade Federal da Paraíba (UFPB)",
    period: "2019 - 2024",
    status: "Academic background in computing, web development, and problem solving.",
  },
  cv: {
    jobTitle: "Full-Stack Developer",
    location: "João Pessoa, PB, Brazil",
    profileSummary:
      "Full-Stack Developer passionate about technology and solving problems through code. I have experience building complete web applications, from front-end to back-end, with a focus on performance, accessibility, and best practices. I work with Vue.js, React, Node.js, and databases like PostgreSQL and MongoDB, always looking to sharpen my skills and adapt to new market trends.",
    hardSkillsHeading: "Hard skills",
    softSkillsHeading: "Soft skills",
    softSkills: ["Fast learner", "Teamwork", "Emotional intelligence"],
    experienceHeading: "Work Experience",
    languagesHeading: "Languages",
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Advanced" },
    ],
  },
  experiences: {
    intro:
      "My path combines interface work, API integration, legacy systems, and products with different business contexts.",
    durationLabel: "Duration",
    skillsLabel: "Technologies",
    contributionsLabel: "Key contributions",
    zoox: {
      title: "Full-Stack Developer",
      period: "Jul 2024 to present",
      duration: "",
      location: "Remote",
      description:
        "Building web applications with Vue.js and Vuex on the front-end, plus building and integrating Node.js APIs and modeling data with PostgreSQL and MongoDB on the back-end.",
      contributions: [
        "Built and evolved interfaces for web applications.",
        "Integrated APIs and flows between front-end and back-end.",
        "Modeled and maintained data in PostgreSQL and MongoDB.",
      ],
    },
    controlIt: {
      title: "Front-End Developer",
      period: "Aug 2023 to Apr 2024",
      duration: "9 months",
      location: "Remote",
      description:
        "Built dynamic, responsive interfaces focused on integrating wireless IoT devices to remotely manage environments, machines, equipment, and people.",
      contributions: [
        "Built responsive screens for remote environment operation.",
        "Improved visual flows for connected-device scenarios.",
        "Worked with a strong focus on UI clarity and usability.",
      ],
    },
    lienoFulltime: {
      title: "Front-End Developer",
      period: "May 2022 to Mar 2023",
      duration: "11 months",
      location: "Hybrid, João Pessoa",
      description:
        "Refactored and optimized applications using React.js and Redux.js, improving system efficiency and responsiveness. On another project, I modernized legacy code using Visual Basic.NET, making the systems easier to maintain and improving user satisfaction.",
      contributions: [
        "Refactored applications built with React.js and Redux.js.",
        "Improved responsiveness and organization in existing systems.",
        "Modernized legacy code in Visual Basic.NET.",
      ],
    },
    lienoIntern: {
      title: "Front-End Internship",
      period: "Nov 2021 to Apr 2022",
      duration: "6 months",
      location: "João Pessoa",
      description:
        "In my first role in the private sector, I focused on building features mainly with React.js and Redux.js. My efforts centered on improving the user experience, making interfaces more interactive and accessible.",
      contributions: [
        "Delivered features with React.js and Redux.js.",
        "Improved interaction quality and interface accessibility.",
        "Built practical experience inside product and delivery routines.",
      ],
    },
    ufpbIntern: {
      title: "Front-End Internship",
      period: "Jul 2021 to Nov 2021",
      duration: "5 months",
      location: "Remote",
      description:
        "Built a site for promoting and engaging students with the university's outreach projects using WordPress, along with custom development using HTML, JavaScript, and CSS.",
      contributions: [
        "Built a web presence for outreach initiatives.",
        "Created custom work with HTML, JavaScript, and CSS.",
        "Supported communication and engagement with students.",
      ],
    },
    ufpbVolunteer: {
      title: "Outreach Project Volunteer",
      period: "Apr 2020 to Dec 2020",
      duration: "9 months",
      location: "Hybrid, João Pessoa",
      description:
        "Edited educational videos for online courses, contributing to university outreach projects.",
      contributions: [
        "Produced and edited educational materials.",
        "Supported communication for university projects.",
      ],
    },
  },
  projects: {
    intro:
      "I selected projects that show my work across interfaces, data integration, and web product development with different scopes.",
    github: "Code",
    demo: "Live demo",
    privateRepository: "Private repository",
    featuredLabel: "Featured project",
    technologiesLabel: "Technologies",
    problemLabel: "Problem solved",
    contributionLabel: "My contribution",
    featuresLabel: "Main features",
    filterAll: "All",
    filterFrontend: "Frontend",
    filterFullstack: "Full stack",
    filterStudy: "Study",
    filterPersonal: "Personal",
    realEstate: {
      title: "Real Estate Launch Platform",
      description:
        "A complete real estate launch platform with a live sales board, secure online reservations, role-based access, proposals, payments, and management reports.",
      problem:
        "Centralize the real estate launch sales process into a more organized and trackable digital experience.",
      contribution: "",
      features: [
        "Live sales availability board.",
        "Online reservations and role-based access.",
        "Proposal, payment, and reporting flows.",
      ],
    },
    financeTracker: {
      title: "Finance Tracker",
      description:
        "Personal finance dashboard with authentication, transaction CRUD, and an expenses-by-category chart. Backend powered by Postgres and Supabase Row Level Security.",
      problem:
        "Make personal expense tracking easier through a simple, visual, and secure dashboard.",
      contribution: "",
      features: [
        "Authentication and transaction management.",
        "Category visualization with charts.",
        "Postgres persistence and security via Supabase.",
      ],
    },
    pokerSimulator: {
      title: "Poker Simulator",
      description:
        "Interactive Texas Hold'em simulator with a visual table for four players, full betting flow, automatic hand evaluation, and AI opponents.",
      problem:
        "Turn the Texas Hold'em rules and phases into an interactive experience that is easy to follow.",
      contribution: "",
      features: [
        "Visual table for four players.",
        "Betting system with complete round progression.",
        "Automatic hand evaluation and AI-controlled opponents.",
      ],
    },
    portfolio: {
      title: "My Portfolio",
      description:
        "Personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS. It presents my experience, skills, and projects in a modern responsive layout.",
      problem:
        "Present experience, skills, and projects in a professional, objective, and easy-to-navigate way.",
      contribution:
        "Content structuring, interface design, i18n, PDF resume generation, and continuous experience improvements.",
      features: [
        "Section-based navigation focused on readability.",
        "Internationalization and PDF resume download.",
        "Responsive layout highlighting experience and projects.",
      ],
    },
  },
  skills: {
    intro:
      "I grouped the stack by area to show where I have the strongest depth today and where I can also contribute across the full product flow.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Databases",
      tools: "Tools",
      cloud: "Cloud and infrastructure",
      quality: "Quality and testing",
    },
  },
};

export default en;
