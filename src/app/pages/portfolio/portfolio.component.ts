import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FADE, PAGE_LOAD_AND_LEAVE } from 'src/app/animations/pages';
import { IProject } from 'src/app/interfaces/portfolio';
import { PORTFOLIO } from 'src/app/data/portfolio';
import { BIG_SCREEN } from 'src/app/constants/screen-sizes';

const PROJECT_PARAM_KEY = 'projectID';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [PAGE_LOAD_AND_LEAVE, FADE],
})
export class PortfolioComponent implements OnInit {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.selectInitialProject();
    this.countProjectsToList();
    this.watchScreenSize();
  }

  portfolio: IProject[] = PORTFOLIO;
  selectedProjectID: number;
  selectedProject: IProject;

  projectCountToShow: number = 0;
  showAllProjects: boolean = false;
  projectCountLow: boolean = false;
  showProject: boolean = true;
  screenIsBig: boolean = true;

  selectProject(projectID: number) {
    this.showProject = false;
    this.selectedProjectID = projectID;

    setTimeout(() => {
      this.selectedProject = this.portfolio[projectID];
      this.showProject = true;
    }, 200);

    this.addProjectToPath(projectID);
  }

  addProjectToPath(projectID: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        [PROJECT_PARAM_KEY]: projectID,
      },
    });
  }

  toggleShowAllProjects() {
    this.showAllProjects = true;
  }

  private selectInitialProject() {
    const queryParams = this.route.snapshot.queryParams;

    if (
      PROJECT_PARAM_KEY in queryParams &&
      Number(queryParams[PROJECT_PARAM_KEY])
    ) {
      this.selectedProjectID = Number(queryParams[PROJECT_PARAM_KEY]);
    } else {
      this.selectedProjectID = 0;
    }

    this.selectedProject = this.portfolio[this.selectedProjectID];
  }

  private countProjectsToList() {
    const height = window.innerHeight;
    // Project list takes up 50% of window height
    const projectListHeight = Math.ceil(height * 0.5);
    // Rough estimate on the number of pixels an item comprises
    const projectItemHeight = 100;
    const projectItemCount = this.portfolio.length;

    this.projectCountToShow = Math.floor(projectListHeight / projectItemHeight);

    if (projectItemCount < this.projectCountToShow) {
      this.showAllProjects = true;
      this.projectCountLow = true;
    }
  }

  private watchScreenSize() {
    this.breakpointObserver.observe([BIG_SCREEN]).subscribe((result) => {
      this.screenIsBig = result.breakpoints[BIG_SCREEN];

      if (!this.screenIsBig) {
        this.showAllProjects = true;
      }
    });
  }
}
