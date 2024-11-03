export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'Sobre',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contato',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Luiz Alberto',
    position: 'Software Engineer',
    img: 'https://avatars.githubusercontent.com/u/3503723?v=4',
    review:
      'Trabalhei diretamente com Lucas em projetos e posso afirmar que sua proatividade e capacidade de aprendizado rápido são notáveis. Ele sempre está buscando novas soluções e se adapta rapidamente às mudanças, o que foi fundamental para o sucesso de nossas entregas.',
  },
  {
    id: 2,
    name: 'Rafael Rabelo',
    position: 'Software Developer',
    img: 'https://avatars.githubusercontent.com/u/54684348?v=4',
    review:
      'A criatividade do Lucas é contagiante. Ele sempre traz novas ideias e perspectivas para os nossos projetos, o que nos ajuda a encontrar soluções inovadoras e diferenciadas.',
  },
  {
    id: 3,
    name: 'Larissa Rabelo',
    position: 'Frontend Developer',
    img: 'https://media.licdn.com/dms/image/v2/D4D03AQEaUACB4PUiVA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710771848527?e=1736380800&v=beta&t=nIIIXiOSzXeulxRZmfUh8RqrrJhpxwS7k7NDTMoNmA4',
    review:
      'Sua capacidade de organizar as tarefas e sua atenção aos detalhes foram fundamentais para garantir a entrega do projeto dentro do prazo e com alta qualidade. ',
  },
  {
    id: 4,
    name: 'Mateus Carvalho',
    position: 'Full-stack Developer',
    img: 'https://avatars.githubusercontent.com/u/71903343?v=4',
    review:
      'Lucas é um profissional com um grande potencial criativo. Sua capacidade de pensar fora da caixa e propor soluções inovadoras é um grande diferencial."',
  },
];

export const myProjects = [
  {
    title: 'A Julio Rent - Sistema de locação de veículos',
    desc: 'O Grupo A Júlio tem na sua génese, a atividade do comércio no setor automóvel, estrutura que iniciou há 30 anos em Caldas da Rainha, local onde ainda mantém a sua sede, com a atividade de locação de veículos',
    subdesc:
      'A Júlio Rent foi desenvolvida com o objetivo de facilitar o processo de aluguel de veículos, tornando a experiência de aluguel de veículos mais simples e eficiente.',
    href: 'https://ajrent.pt',
    texture: '/textures/project/ajrent.mp4',
    logo: '/assets/ajrent.png',
    logoStyle: {
      backgroundColor: '#7E2F7B',
      border: '0.2px solid #BF82BE',
      boxShadow: '0px 0px 60px 0px #552255',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'PHP',
        path: '/assets/php.png',
      },
    ],
  },
  {
    title: 'LayDoc - Sistema de Geração de Documentos em Tempo Real ',
    desc: 'LayDoc é um aplicativo colaborativo poderoso que eleva as capacidades de edição de documentos em tempo real. Como uma versão aprimorada do Google Docs, ele suporta milhões de colaboradores simultaneamente, garantindo que cada alteração seja capturada instantaneamente e com precisão.',
    subdesc:
      'Com o LayDoc, os usuários podem experimentar o futuro da colaboração, onde vários colaboradores trabalham juntos em tempo real sem qualquer atraso, usando os mais novos recursos do Next.js e do Liveblocks.',
    href: 'https://lay-docs.vercel.app/sign-in',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Medical Guide - Sistema de Gestão de Saúde',
    desc: 'Uma plataforma inovadora de assistência médica projetada para simplificar processos médicos essenciais. Ela simplifica o registro de pacientes, o agendamento de consultas e o gerenciamento de registros médicos, proporcionando uma experiência perfeita para provedores de assistência médica e pacientes.',
    subdesc:
      'Com foco na eficiência, a Medical Guide integra formulários complexos e notificações por SMS, usando Next.js, Appwrite, Twillio e Sentry que aprimoram os fluxos de trabalho operacionais.',
    href: 'https://medical-guide.vercel.app',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/medical.svg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Grow - Plataforma Bancária On-line',
    desc: 'Grow é uma plataforma bancária on-line abrangente que oferece aos usuários um painel de gerenciamento financeiro centralizado. Ele permite que os usuários conectem várias contas bancárias, monitorem transações em tempo real e transfiram dinheiro facilmente para outros usuários.',
    subdesc:
      'Desenvolvido com Next.js 14 Appwrite, Dwolla e Plaid, o Horizon garante uma experiência bancária tranquila e segura, adaptada para atender às necessidades dos consumidores modernos.',
    href: 'https://banking-iota-one.vercel.app/sign-in',
    texture: '/textures/project/grow.mp4',
    logo: '/assets/grow.svg',
    logoStyle: {
      backgroundColor: '',
      border: '0.2px solid #e65a09',
      boxShadow: '0px 0px 60px 0px #cc5008',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    elephantPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -11],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Freelancer',
    pos: 'Desenvolvedor Front-end',
    duration: '2024 - Presente',
    title: "Responsável por desenvolver interfaces de usuário intuitivas e eficientes, utilizando tecnologias como React e Zod. Garanto a integração com APIs e a colaboração com a equipe de backend para a entrega de soluções completas.",
    icon: '/assets/flexible.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Bee Coders',
    pos: 'Full-stack Developer',
    duration: 'Maio 2024 - Agosto 2024',
    title: "Especialista em desenvolvimento backend com Symfony, participo da arquitetura e design de sistemas, desenvolvendo APIs escaláveis e seguras. Colaboro com a equipe frontend para entregar projetos completos, utilizando NextJS e TailwindCSS.",
    icon: 'https://avatars.githubusercontent.com/u/144821959?v=4',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Desenvolvimento Web',
    pos: 'Web Developer',
    duration: '2023 - Presente',
    title: "Crio websites personalizados e intuitivos, atendendo às necessidades específicas de cada cliente. Com experiência em React e Next, garanto a entrega de projetos no prazo e com alta qualidade, sempre buscando a satisfação do cliente.",
    icon: '/assets/flexible.png',
    animation: 'salute',
  },
];