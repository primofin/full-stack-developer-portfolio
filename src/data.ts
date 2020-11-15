import { nanoid } from 'nanoid'

// PROJECTS DATA
export const projectData = [
  {
    id: nanoid(),
    imgs: ['https://i.imgur.com/jLvTWsk.png'],
    title: 'Trello-clone',
    info:
      'A clone of Trello created in a pair as a challenge. The reponsibilities include implementing user interface, developing additional features, and building the needed logic.',
    info2: '',
    url: 'https://trello-clone-side-project.herokuapp.com/',
    repo: 'https://github.com/trello-clone/trello-clone-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    imgs: ['https://i.imgur.com/GgXtf1z.gif'],
    title: 'Amour E-commerce',
    info:
      'A CRUD based web application mainly built for showcasing abilities to full-stack architecture, handling authentication, local storage, and state management with Redux. It was an individual project that I performed the development of both front-end and back-end prototypes.',
    info2: '',
    url: 'https://ecommerce-app-client.herokuapp.com/',
    repo: 'https://github.com/vynmetropolia/ecommerce-app-client', // if no repo, the button will not show up
  },
]

export const experiences = [
  {
    id: nanoid(),
    job_title: 'Full Stack Developer',
    company: 'Integrify',
    location: 'Helsinki, Finland',
    starting: 'August 2020',
    ending: 'Present',
    responsibilities: [
      `Taking numerous responsibilities in front-end development with JavaScript and TypeScript
    and applied frameworks and other tools such  React.js and Redux among many others.`,
      `Contributing to the back-end development of various projects with Node.js and Express.js.`,
      `Building and managing databases with MongoDB and PostgreSQL.`,
      `Conducting software tests with Jest.`,
      `Collaborating with other developers of different seniority via GitHub Actions.`,
    ],
  },
]