import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // trigger('pageLoad', [
    //   transition(':enter', [
    //     style({ opacity: 0 }),
    //     animate('200ms', style({ opacity: 1 })),
    //   ])
    // ]),
    trigger('hi', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
    trigger('im', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms 1000ms', style({ opacity: 1 })),
      ]),
    ]),
    trigger('introductionCore', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms 1300ms', style({ opacity: 1 })),
      ]),
    ]),
    trigger('firstDescriptor', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms 3000ms', style({ opacity: 1 })),
      ]),
    ]),
    trigger('secondDescriptor', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms 3600ms', style({ opacity: 1 })),
      ]),
    ]),
    trigger('thirdDescriptor', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms 4200ms', style({ opacity: 1 })),
      ]),
    ]),
    trigger('statement', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms 100ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements AfterViewInit {
  // firstPageLoad: boolean = true;
  showStatement: boolean = false;

  ngAfterViewInit() {
    setTimeout(() => {
      this.showStatement = true;
    }, 5000);
  }

  statementStart = `
I took my first coding class to fulfill a college math credit. I never looked back.

Ever since, that curiosity has led me on a journey through a variety of disciplines, industries, and interests, with a constant goal of growth.

What has that journey taught me?

I am driven by passion, curiosity, and quality; planning is more important than execution; and empowering colleagues is the greatest value generator over time. It has also helped me realize my greatest strengths: organization, decisiveness, and communication.

Additionally, it has let me showcase my skills through a variety of projects`;

  statementEnd = `
I specialize in Full Stack Development and Cloud Computing — specifically Amazon Web Services (AWS). I am proficient in Python, Angular, Bash, JavaScript, and Groovy, as well as the DevOps framework, including Kubernetes, Terraform, Docker, and Linux — two lists I am constantly working to expand.`;

  statementProjectsList = [
    `I built and scaled a company-wide ticket automation site, slashing my team’s hiring need in half`,
    `I led multiple cloud cost reduction efforts, reducing total AWS bills by double-digit percentiles in all instances`,
    `I increased applications to my team by 10-fold through rigorous restructuring and reformatting of the underlying hiring process`,
  ];
}
