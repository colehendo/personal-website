import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FADE, PAGE_LOAD_AND_LEAVE } from 'src/app/animations/portfolio';
import { IProject } from 'src/app/interfaces/portfolio';
import { PORTFOLIO } from 'src/app/data/portfolio';
import { BIG_SCREEN } from 'src/app/constants/screen-sizes';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [PAGE_LOAD_AND_LEAVE, FADE],
})
export class PortfolioComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.watchScreenSize();
  }

  portfolio: IProject[] = PORTFOLIO;
  selectedProjectID: number = 0;
  selectedProject: IProject = this.portfolio[this.selectedProjectID];

  showProject: boolean = true;
  screenIsBig: boolean = true;

  selectProject(projectID: number) {
    this.showProject = false;
    this.selectedProjectID = projectID;

    setTimeout(() => {
      this.selectedProject = this.portfolio[projectID];
      this.showProject = true;
    }, 200);
  }

  private watchScreenSize() {
    this.breakpointObserver.observe([BIG_SCREEN]).subscribe((result) => {
      this.screenIsBig = result.breakpoints[BIG_SCREEN];
    });
  }
}
