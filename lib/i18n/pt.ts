const pt = {
  nav: {
    home: "Início",
    about: "Sobre",
    education: "Formação",
    projects: "Projetos",
    skills: "Conhecimentos",
    experience: "Experiência",
    contact: "Contato",
  },
  sectionHeadings: {
    about: "Sobre mim",
    education: "Formação",
    projects: "Meus projetos",
    skills: "Conhecimentos",
    experience: "Minhas Experiências",
    contact: "Contato",
  },
  intro: {
    greeting: "Olá, sou",
    role: "Desenvolvedor Full-Stack com foco em Front-End, com experiência em criação de sites e webapps utilizando",
    stack: "Vue.js, React, Node.js e TypeScript",
    contactBtn: "Contato",
    downloadCv: "Baixe meu CV",
    generatingCv: "Gerando...",
  },
  about: {
    paragraph1Start:
      "Estudante de Ciência da Computação pela Universidade Federal da Paraíba (UFPB) e apaixonado pela arte de resolver problemas através da programação. Minha motivação surge ao enfrentar desafios e encontrar soluções eficazes. Tenho experiência com tecnologias como",
    paragraph1Bold1: "React, Vue.js e TypeScript",
    paragraph1Mid: ", e também atuo com",
    paragraph1Bold2: "Node.js e Next.js.",
    paragraph1End:
      "Atualmente, atuo como Desenvolvedor Full-Stack na Zoox Smart Data, onde coloco em prática minha paixão por criar soluções inovadoras, sempre em busca de aprimorar minhas habilidades e aprender novas tecnologias.",
    paragraph2Start:
      "Quando não estou programando, gosto de me exercitar, sou um ex-atleta profissional de natação, que se transformou no meu hobbie hoje. Também gosto de assistir filmes, comer uma boa comida e claro,",
    paragraph2Bold1: "aprender coisas novas",
    paragraph2Mid: ". Atualmente, estou abrindo meus horizontes e estudando um pouco de",
    paragraph2Bold2: "GoLang",
  },
  contact: {
    intro: "Entre em contato comigo através do formulário abaixo",
    introVia: "ou envie um e-mail para",
    emailPlaceholder: "Digite o seu e-mail",
    messagePlaceholder: "Digite a sua mensagem",
    errorPrefix: "Falha ao enviar e-mail: ",
    success: "E-mail enviado com sucesso!",
  },
  submitBtn: "Enviar",
  footer:
    "© Desenvolvido por João Victor Pedrosa 2024. Todos os direitos reservados.",
  notFound: {
    title: "Ops! Essa página fugiu.",
    subtitle:
      "A página que você procura não existe ou foi movida. Que tal voltar para um lugar seguro?",
    backHome: "Voltar para o início",
  },
  education: {
    degree: "Estudante de Ciência da Computação",
    institution: "Universidade Federal da Paraíba (UFPB)",
    period: "2019 - 2024",
  },
  cv: {
    jobTitle: "Desenvolvedor Full-Stack",
    location: "João Pessoa, PB, Brasil",
    profileSummary:
      "Desenvolvedor Full-Stack apaixonado por tecnologia e resolução de problemas através da programação. Tenho experiência no desenvolvimento de aplicações web completas, do front-end ao back-end, com foco em performance, acessibilidade e boas práticas. Atuo com Vue.js, React, Node.js e bancos de dados como PostgreSQL e MongoDB, buscando constantemente aprimorar minhas habilidades e me adaptar às novas tendências do mercado.",
    hardSkillsHeading: "Hard-skills",
    softSkillsHeading: "Soft-skills",
    softSkills: ["Aprendizagem rápida", "Trabalho em equipe", "Inteligência emocional"],
    experienceHeading: "Experiência Profissional",
    languagesHeading: "Idiomas",
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Avançado" },
    ],
  },
  experiences: {
    zoox: {
      title: "Desenvolvedor Full-Stack",
      period: "Jul 2024 até o momento",
      duration: "",
      location: "Remoto",
      description:
        "Desenvolvimento de aplicações web com Vue.js e Vuex no front-end, além de construção e integração de APIs em Node.js e modelagem de dados com PostgreSQL e MongoDB no back-end.",
    },
    controlIt: {
      title: "Desenvolvedor Front-End",
      period: "Ago 2023 até Abr 2024",
      duration: "9 meses",
      location: "Remoto",
      description:
        "Desenvolvimento de interfaces dinâmicas e responsivas com foco na integração de dispositivos IoT sem fios para gerenciar ambientes, máquinas, equipamentos e pessoas de forma remota.",
    },
    lienoFulltime: {
      title: "Desenvolvedor Front-End",
      period: "Mai 2022 até Mar 2023",
      duration: "11 meses",
      location: "Híbrido, João Pessoa",
      description:
        "Atuei na refatoração e otimização de aplicações utilizando React.js e Redux.js, melhorando a eficiência e a responsividade dos sistemas. Em outro projeto, modernizei códigos utilizando Visual Basic.NET para aprimorar sistemas legados, aumentando a facilidade de manutenção e a satisfação do usuário.",
    },
    lienoIntern: {
      title: "Estágio em Front-End",
      period: "Nov 2021 até Abr 2022",
      duration: "6 meses",
      location: "João Pessoa",
      description:
        "Na minha primeira experiência no mercado privado, me dediquei ao desenvolvimento de funcionalidades utilizando principalmente React.js e Redux.js. O foco dos meus esforços estava em aprimorar a experiência do usuário, tornando as interfaces mais interativas e acessíveis.",
    },
    ufpbIntern: {
      title: "Estágio em Front-End",
      period: "Jul 2021 até Nov 2021",
      duration: "5 meses",
      location: "Remoto",
      description:
        "Criação de um site para a divulgação e interação dos alunos com os Projetos de Extensão da universidade utilizando WordPress, além de desenvolvimento customizado com HTML, JavaScript e CSS.",
    },
    ufpbVolunteer: {
      title: "Voluntário em Projeto de Extensão",
      period: "Abr 2020 até Dez 2020",
      duration: "9 meses",
      location: "Híbrido, João Pessoa",
      description:
        "Edição de vídeos educativos para cursos online, contribuindo para projetos de extensão universitária.",
    },
  },
  projects: {
    realEstate: {
      title: "Plataforma de Lançamentos Imobiliários",
      description:
        "Plataforma completa para lançamentos imobiliários, com espelho de vendas em tempo real, reservas online seguras, diferentes perfis de acesso, propostas, pagamentos e relatórios gerenciais.",
    },
    financeTracker: {
      title: "Finance Tracker",
      description:
        "Dashboard de controle financeiro pessoal com autenticação, CRUD de transações e gráfico de despesas por categoria. Backend com Postgres e Row Level Security via Supabase.",
    },
    pokerSimulator: {
      title: "Poker Simulator",
      description:
        "Simulador interativo de Texas Hold'em com mesa visual para 4 jogadores, sistema completo de apostas, avaliação automática de mãos e IA para adversários. Inclui todas as fases do jogo e animações.",
    },
    portfolio: {
      title: "Meu Portfólio",
      description:
        "Portfólio pessoal desenvolvido com Next.js 14, TypeScript e Tailwind CSS. Apresenta minhas experiências, habilidades e projetos de forma moderna e responsiva.",
    },
  },
};

export default pt;
