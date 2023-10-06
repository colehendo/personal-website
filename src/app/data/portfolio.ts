import { IProject } from '../interfaces/portfolio';

export const PORTFOLIO: IProject[] = [
  {
    name: 'Smart Signal',
    link: 'https://github.com/colehendo/smart-signal',
    languages: ['Python', 'Angular', 'Serverless'],
    short_description: 'Cryptocurrency tracking and prediction tool',
    full_description: [
      'A price prediction platform, which ingests historical and real-time asset prices, and based on a set of indicators, predicts future prices',
      'Manual decisions can be made through the robust UI, while the backend is leveraged for automated ones',
      'The platform was created to display aptitude for both frontend and backend coding, as well as cloud infrastructure knowledge and applicability',
    ],
  },
  {
    name: 'Rhyme Detector',
    link: 'https://github.com/colehendo/rhyme-detector',
    languages: ['Python', 'Terraform'],
    short_description: 'Rhyme detection and visualization tool',
    full_description: [
      'Song lyrics are ingested, a rhyme scheme is detected, and the highlighted scheme is subsequently outputted',
      'A future iteration of this project will process audio instead of text for more accurate rhyme detection',
    ],
  },
  {
    name: 'Click Counter',
    link: 'https://github.com/colehendo/click-counter',
    languages: ['Python'],
    short_description: 'Short link click couter and decryptor',
    full_description: [
      'Code to count the number of clicks to a specific set of encoded short links in a given year',
      'A sorted list of decoded URLs and their associated click counts is outputted',
      'This provides a good example of proper object oriented organization, testing, and well documented and readable code',
      'There are a number of flexibility and extensibility features which were not added as to not over-architect the solution and keep it simple',
    ],
  },
  {
    name: 'Personal Website',
    link: 'https://github.com/colehendo/personal-website',
    languages: ['Angular', 'Terraform'],
    short_description: 'This website',
    full_description: [
      'This is my personal website used to display my skills, portfolio, recommendations, resume, contact information, and a personal summary',
      'The code behind the site displays proper use of modularization, organization, and use of compact files',
    ],
  },
  {
    name: 'Infrastructure',
    link: 'https://github.com/colehendo/infrastructure',
    languages: ['Terraform', 'Docker', 'Bash', 'Helm', 'Python'],
    short_description: 'Infrastructure creation and management templates',
    full_description: [
      'A set of examples of provisioning and deprovisioning infrastructure',
      'These examples will be leveraged when building future components to shorten development time',
    ],
  },
  {
    name: 'Practice Problems',
    link: 'https://github.com/colehendo/practice-problems',
    languages: ['Python'],
    short_description: 'A set of practice problems and solutions',
    full_description: [
      'This is a set of ever-expanding backend practice problems, along with my solution to each of the problems',
    ],
  },
  {
    name: 'Slack Bot',
    link: 'https://github.com/colehendo/ticket-handling-slack-bot',
    languages: ['Python'],
    short_description: 'A ticket submission Slack bot',
    full_description: [
      'This deprecated Slack bot was the first iteration of an automated ticket handling product created for a previous employer',
      'The user could select from a handful of different options, spanning from stack creation, to data migration, to account creation, resulting in a Jira ticket being filed with our DevOps team.',
    ],
  },
];
