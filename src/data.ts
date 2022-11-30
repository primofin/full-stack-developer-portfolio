import { nanoid } from 'nanoid'

// PROJECTS DATA
export const projectData = [
  {
    id: nanoid(),
    imgs: ['https://i.imgur.com/D8bywz1.gif'],
    title: 'Trello-clone',
    info:
      'A clone of Trello created in a pair as a challenge. The reponsibilities include implementing user interface, developing additional features, and building the needed logic.',
    info2: '',
    tech:
      'TypeScript, React.js, GraphQL, RestDB, styled-component, Axios.js, react-beautiful-dnd',
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
    tech: `MERN Stack (MongoDB, Express.js, React.js, Node.js), TypeScript, Redux, Axios.js, Google OAuth
      2.0, SCSS, Sendgrid, Passport.js`,
    url: 'https://ecommerce-app-client.herokuapp.com/',
    repo: 'https://github.com/vynmetropolia/ecommerce-app-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    imgs: ['https://i.imgur.com/dBnWMhi.gif'],
    title: 'Cloudhome',
    info: `A hybrid mobile application with the objective to help travelers find affordable and comfortable
      places to stay. Completed in a team with the following responsibilities: implementing visual
      elements, validating user inputs, and optimizing application performance.`,
    info2: '',
    tech: 'React.js, React Native, NativeBase, JavaScript, Expo CLI, CSS',
    url: 'https://expo.io/@vynmetropolia/projects/cloud-home',
    repo: 'https://github.com/dendimaniac/airbnb-clone', // if no repo, the button will not show up
  },
]

export const experiences = [
  {
    id: nanoid(),
    job_title: 'Full Stack Developer',
    company: 'Integrify',
    location: 'Helsinki, Finland',
    starting: 'August 2020',
    ending: 'October 2021',
    website: 'https://www.integrify.io/',
    responsibilities: [
      `Taking numerous responsibilities in front-end development with JavaScript and TypeScript
    and applied frameworks and other tools such  React.js and Redux among many others.`,
      `Contributing to the back-end development of various projects with Node.js and Express.js.`,
      `Building and managing databases with MongoDB and PostgreSQL.`,
      `Conducting software tests with Jest.`,
      `Collaborating with other developers of different seniority via GitHub Actions.`,
    ],
  },
    {
    id: nanoid(),
    job_title: 'Junior Software Engineer',
    company: 'Topcon Positioning Systems',
    location: 'Helsinki, Finland',
    starting: 'November 2021',
    ending: 'Present',
    website: 'https://www.topconpositioning.com/',
    responsibilities: [
      `Work with team members to design, develop and test software.`,
      `Produce clean, efficient code based on specifications.`,
      `Integrate software components and third-party programs.`,
      `Verify and deploy programs and systems.`,
      `Gather and evaluate user feedback.`,
      `Recommend and execute improvements.`,
    ],
  },
]
