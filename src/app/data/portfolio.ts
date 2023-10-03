import { IProject } from '../interfaces/portfolio';

export const PORTFOLIO: IProject[] = [
  {
    name: 'Smart Signal',
    link: 'https://github.com/colehendo/smart-signal',
    languages: ['Python', 'Angular', 'Serverless'],
    short_description: 'Cryptocurrency tracking and prediction tool',
    full_description: `
Smart Signal was created as a price prediction platform, with the core intention being to display aptitude for both frontend and backend coding, as well as cloud infrastructure knowledge and applicability.

The application ingests historical prices for several cryptocurrencies, and based on a set of indicators, makes future price predictions. Although the solution did not present the results we had hoped for due to a severe lack of math and data engineering, the software worked exactly as intended, allowing us to seamlessly ingest prices and make real-time decisions based on changes seen. Furthermore, the web UI provided a robust visualization of these changes, allowing manual decisions to be made as well.`,
  },
  {
    name: 'Rhyme Detector',
    link: 'https://github.com/colehendo/rhyme-detector',
    languages: ['Python', 'Terraform'],
    short_description: 'Rhyme detection and visualization tool',
    full_description: `
This detects rhymes within song lyrics and creates a colored output for easy visualization. It is an early version of a project set to involve audio processing.`,
  },
  {
    name: 'Click Counter',
    link: 'https://github.com/colehendo/click-counter',
    languages: ['Python'],
    short_description: 'Short link click couter and decryptor',
    full_description: `
This code counts the number of clicks to a specific set of encoded short links in a given year, outputting a sorted list of unencoded urls and their associated click counts. It provides a good example of proper object oriented organization, testing, and well documented and readable code. There are a number of improvements which could be made to make the code more robust and flexible. However, in an effort to not over-architect the solution I elected to keep it simple.`,
  },
  {
    name: 'Personal Website',
    link: 'https://github.com/colehendo/personal-website',
    languages: ['Angular', 'Terraform'],
    short_description: 'This website',
    full_description: `
This is a personal website used to display my portfolio, recommendations, contact information, and a summary about myself. Written in Angular, the code behind the site displays proper use of modularization, compact files, and proper code organization. There are a handful of future improvements to be made, including the use of APIs, more dynamic CSS, and a joke of the day section.`,
  },
  {
    name: 'Infrastructure',
    link: 'https://github.com/colehendo/infrastructure',
    languages: ['Terraform', 'Docker', 'Bash', 'Helm', 'Python'],
    short_description: 'Infrastructure creation and management templates',
    full_description: `
This repository houses examples of provisioning and deprovisioning infrastructure. These examples can be used as references when building components in the future to lower development time.`,
  },
  {
    name: 'Practice Problems',
    link: 'https://github.com/colehendo/practice-problems',
    languages: ['Python'],
    short_description: 'A set of practice problems and solutions',
    full_description: `
This is a set of ever-expanding practice problems found on websites like LeetCode and HackerRank, along with my solution to each of the problems. Currently, the solutions are only in Python, although I plan to expand beyond that as I dive deeper into other languages.
`,
  },
  {
    name: 'Slack Bot',
    link: 'https://github.com/colehendo/ticket-handling-slack-bot',
    languages: ['Python'],
    short_description: 'A ticket submission Slack bot',
    full_description: `
This Slack bot was the first iteration of an automated ticket handling product created for a previous employer.

Written in Python in the summer of 2018, the bot allowed the user to select from a handful of different options, spanning from stack creation, to data migration, to account creation. Based on the user's selection, the bot would dynamically populate further questions and fields for the user to fill out. The true automation behind the bot was severely lacking, as the end result of the user's actions was a Jira ticket being filed with our DevOps team.

This bot however was the first small step on a long road of fully automating all manual ticket handling by our DevOps team. The final state of this project was a full fledge Angular web app with a complex API layer and a Python backend running on Jenkins. That final state is still in use by my previous employer, and currently supports over 75 complex actions, automating an average of over 2 daily tickets per employee.

The code is lacking in organization, and would dramatically benefit from abstractions which could make it easily extendable. However, this code continues to serve as a reminder of how far my code's quality has come since I began programming.

Values and variables have been changed to protect company data and privacy.`,
  },
];
