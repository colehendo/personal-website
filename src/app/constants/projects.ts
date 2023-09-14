import { IProject } from '../interfaces/projects';

export const PROJECTS: IProject[] = [
  {
    name: 'Smart Signal',
    link: 'https://github.com/colehendo/smart-signal',
    languages: ['Python', 'Angular', 'Serverless'],
    short_description: 'Cryptocurrency tracking and prediction tool',
    full_description: `
This was created as a final project for a course taken at Rhodes College, with the core intention being to display aptitude for both frontend and backend coding, as well as cloud infrastructure knowledge and applicability.

The application ingests historical prices for several cryptocurrencies, and based on a set of indicators, makes future price predictions.`,
  },
  {
    name: 'Click Counter',
    link: 'https://github.com/colehendo/click-counter',
    languages: ['Python'],
    short_description: 'Short link click couter and decryptor',
    full_description: `
This code counts the number of clicks to a specific set of encoded short links in a given year, outputting a sorted list of unencoded urls and their associated click counts. It provides a good example of proper object oriented organization, testing, and well documented and readable code.`,
  },
  {
    name: 'Personal Website',
    link: 'https://github.com/colehendo/personal-website',
    languages: ['Angular', 'Terraform'],
    short_description: 'This website',
    full_description: `
A personal website to display projects, a summary, and my resume.`,
  },
  {
    name: 'Infrastructure',
    link: 'https://github.com/colehendo/infrastructure',
    languages: ['Terraform', 'Docker', 'Bash', 'Helm', 'Python'],
    short_description: 'Infrastructure creation and management templates',
    full_description: `
This repository is used to house basic examples of provisioning and deprovisioning infrastructure components as references for future use.`,
  },
  {
    name: 'Practice Problems',
    link: 'https://github.com/colehendo/practice-problems',
    languages: ['Python'],
    short_description: 'A set of practice problems and solutions',
    full_description: `
A collection of different coding problems and my solutions to each.
`,
  },
  {
    name: 'Rocks Paper Scissors',
    link: 'https://github.com/colehendo/rocks-paper-scissors',
    languages: ['JavaScript', 'HTML', 'CSS'],
    short_description: 'A rocks paper scissors game',
    full_description: `
This is a simple rock paper scissors game written in JavaScript, HTML, and CSS summer of 2017.

It was written as a homework for a Front-End Web Development class taken at General Assembly, and has not been updated since submission of the assignment.
`,
  },
  {
    name: 'Sports Trivia',
    link: 'https://github.com/colehendo/sports-trivia',
    languages: ['JavaScript', 'HTML', 'CSS'],
    short_description: 'A simple sports trivia site',
    full_description: `
A sports trivia web app written in JavaScript, HTML, and CSS during summer of 2017. This was my final project for a Front-End Web Development course at General Assembly, and has not been updated since submission of the assignment.

PSA: The trivia has not been updated since summer of 2017, making some previously correct answers now incorrect.`,
  },
  {
    name: 'Ticket Self Service Site',
    link: 'https://github.com/colehendo/ticket-self-service-site',
    languages: ['JavaScript', 'HTML', 'CSS'],
    short_description: 'A ticket submission website',
    full_description: `
An early version of a ticket submitting website. The site is written in JavaScript, HTML, and CSS. The final version of the site—currently in use by the company—was written in Angular, HTML, and SASS.

The website lets the user manually fill out a ticket for DevOps using dropdowns, input fields, buttons, and logic to control the flow and submission of the form.

Most of the values and text has been altered to ensure company and data privacy.`,
  },
];
