import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  php,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  universel,
  dcc,
  kelhel,
  microverse,
  crypto,
  github,
  java,
  moovee,
  tictactoe,
  freshshop,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Full Stack Developer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'PHP',
    icon: php,
  },
/*   {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  }, */
  {
    name: 'Node JS',
    icon: nodejs,
  },
/*   {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  }, */
  {
    name: 'git',
    icon: git,
  },
/*   {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  }, */
  {
    name: 'java',
    icon: java,
  },
  {
    name: 'github',
    icon: github,
  }
];

const experiences = [
  {
    title: 'Programming and Internet Technologies',
    company_name: 'College Universel',
    icon: universel,
    iconBg: '#333333',
    date: '2022 - 2024',
  },
/*   {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
  }, */
];

const projects = [
  {
    id: 'project-1',
    name: 'FoodNinja',
    description: 'A Recipe App that allows users to search for recipes.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'Sequelize',
        color: 'pink-text-gradient',
      },
    ],
    image: crypto,
    repo: 'https://github.com/jared-chevalier/food-ninja.git',
    demo: 'https://github.com/jared-chevalier/food-ninja.git',
  },
  {
    id: 'project-2',
    name: 'Crypto App',
    description:
      'A Crypto Web App that lets users search for any crypto currency and get its details',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'html',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/Ray7705/Crypto-App.git',
    demo: 'https://github.com/Ray7705/Crypto-App.git',
  },
  {
    id: 'project-3',
    name: 'Moovee',
    description: 'This is a Movie Rental App where you can rent movies.',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'html',
        color: 'pink-text-gradient',
      },
    ],
    image: moovee,
    repo: 'https://github.com/DanialBeh/W15Project.git',
    demo: 'https://github.com/DanialBeh/W15Project.git',
  },
  {
    id: 'project-4',
    name: 'Tic Tac Toe',
    description: `A Java App that lets users play Tic Tac Toe.`,
    tags: [
      {
        name: 'JAVA',
        color: 'blue-text-gradient',
      },
    ],
    image: tictactoe,
    repo: 'https://github.com/alfredoparreiras/D04-Web2209A---TicTacTow---AlfredoGabrielaRehman.git',
    demo: 'https://github.com/alfredoparreiras/D04-Web2209A---TicTacTow---AlfredoGabrielaRehman.git',
  },
  {
    id: 'project-5',
    name: 'The Fresh Shop',
    description:
      'This project was developed with Java EE using JSP and servelts. It includes login, product list and cart views.',
    tags: [
      {
        name: 'JAVA EE',
        color: 'blue-text-gradient',
      },
      {
        name: 'JSP',
        color: 'green-text-gradient',
      },
      {
        name: 'Servlets',
        color: 'pink-text-gradient',
      },
    ],
    image: freshshop,
    repo: 'https://github.com/Ray7705/D07-Web2209A-Rehman-Gabriela-Sumanshi-Juan.git',
    demo: 'https://github.com/Ray7705/D07-Web2209A-Rehman-Gabriela-Sumanshi-Juan.git',
  },
];

export { services, technologies, experiences, projects };
