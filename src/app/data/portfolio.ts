import { IProject } from '../interfaces/portfolio';

export const PORTFOLIO: IProject[] = [
  {
    name: 'Smart Signal',
    link: 'https://github.com/colehendo/smart-signal',
    languages: ['Python', 'Angular', 'Serverless'],
    short_description: 'Cryptocurrency tracking and prediction tool',
    full_description: [
      'A price prediction platform, Smart Signal ingests historical and real-time asset prices, and based on a set of indicators, predicts future prices',
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
      'The tool ingests song lyrics, detects a rhyme scheme, and outputs the highlighted scheme',
      'A future iteration of this project will process audio instead of text for more accurate rhyme detection',
    ],
  },
  {
    name: 'Click Counter',
    link: 'https://github.com/colehendo/click-counter',
    languages: ['Python'],
    short_description: 'Short link click couter and decryptor',
    full_description: [
      'The code counts clicks to a specific set of encoded short links in a given year',
      'It outputs a sorted list of decoded URLs and their associated click counts',
      'This provides a good example of proper object oriented organization, testing, and well documented and readable code',
      'For simplicity, I chose not to add several flexibility and extensibility features so as to not over-architect the solution',
    ],
  },
  {
    name: 'Personal Website',
    link: 'https://github.com/colehendo/personal-website',
    languages: ['Angular', 'Terraform'],
    short_description: 'This website',
    full_description: [
      'This personal website displays my skills, portfolio, recommendations, resume, contact information, and a personal summary',
      'The code behind the site displays proper use of modularization, organization, and use of compact files',
    ],
  },
  {
    name: 'Infrastructure',
    link: 'https://github.com/colehendo/infrastructure',
    languages: ['Terraform', 'Docker', 'Bash', 'Helm', 'Python'],
    short_description: 'Infrastructure creation and management templates',
    full_description: [
      'These are examples of provisioning and deprovisioning infrastructure',
      'The code can be leveraged when building future components to shorten development time',
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
      'The user could select from a handful of options, spanning stack creation, data migration, and account creation, resulting in a Jira ticket being filed with our DevOps team.',
    ],
  },
];
