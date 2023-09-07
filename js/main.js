// import { PROJECTS } from './constants/projects.js';
// import { RECOMMENDATIONS } from './constants/recommendations.js';

const PROJECTS = [
    {
        name: "Smart Signal",
        link: "https://github.com/colehendo/smart-signal",
        description: "A cryptocurrency tracking and prediction tool created as a final project for a college course"
    },
    {
        name: "Infrastructure",
        link: "https://github.com/colehendo/infrastructure",
        description: "A cryptocurrency tracking and prediction tool created as a final project for a college course"
    },
    {
        name: "Click Counter",
        link: "https://github.com/colehendo/click-counter",
        description: "A cryptocurrency tracking and prediction tool created as a final project for a college course"
    }
]


const RECOMMENDATIONS = [
    {
        name: "Gerard Brown",
        linkedin: "https://www.linkedin.com/in/colehendo/",
        recommendation: `Cole is a bright, hardworking professional. 
He dug into problems that we wanted to solve and found solutions 
and practical work-arounds. He fit in with the DevOps team at 4G 
in duty and spirit. A good-natured, and fun person to work with.`
    },
    {
        name: "Alex Cline",
        linkedin: "https://www.linkedin.com/in/colehendo/",
        recommendation: `Cole was quite beneficial to our DevOps team 
here at 4G. He was dedicated, hard-working and happy to help 
however he could. He was good about reaching out when he was 
stuck and could also take the initiative when given a project 
to run with. We're very pleased with his work here and I for 
one would be happy to see him back on any team I was a part of in the future.`
    },
    {
        name: "Jean-Marie Zoda",
        linkedin: "https://www.linkedin.com/in/colehendo/",
        recommendation: `First and foremost, it is important to understand that 4G Clinical 
only hires promising, high-potential, and even brilliant people, and I feel privileged 
to have been a part of this company. As such, it was at 4G Clinical 
that I had the chance to meet Cole.

Like me, he was part of the DevOps/SRE team. The tasks cannot be listed here, 
however, it involved mastering the infrastructure, being Cloud certified, 
knowing our many DevOps tools, ditto for the strategic tools that enabled 
deployment, but also the lifecycle of our applications, providing developer 
support, and in some cases 24/7 IT support with respect, empathy, patience, 
kindness and the list goes on. In fact, Cole has always been available and 
willing to help, including me. As a team, we didn't count our hours, 
and many weekends were devoted with courage and pugnacity to the company's projects.

We collaborated together, shared knowledge and exchanged 
views through many discussions.
Cole is talented, sharp, and not only smart but brilliant. 
I am proud to respond to his request with a letter of recommendation 
and consider Cole one of the fine and talented people I have had the 
good fortune to meet at 4GClinical. His future will no doubt be bright!`
    },
]



function populateProjects() {
    let projectsList = document.getElementById('projects-list');
    PROJECTS.forEach((item) => {
        let project = document.createElement("div");
        project.innerHTML = `
        <a href="${item.link}">
            <div>
                <h3>${item.name}</h3>
                <p>
                    ${item.description}
                </p>
            </div>
        </a>`;
        projectsList.appendChild(project);
    });
}

function populateRecommendations() {
    let recommendationsList = document.getElementById('recommendations-list');
    RECOMMENDATIONS.forEach((item) => {
        let recommendation = document.createElement("div");
        recommendation.innerHTML = `<p class="multiline">
            ${item.recommendation}
        </p>
        <a href="${item.linkedin}">${item.name}</a>`;
        recommendationsList.appendChild(recommendation);
    });
}

function init() {
    populateProjects();
    populateRecommendations();
}

init();