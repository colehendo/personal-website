import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import { FADE_IN } from 'src/app/animations/pages';
import { BIG_SCREEN } from 'src/app/constants/screen-sizes';
import { PORTFOLIO } from 'src/app/data/portfolio';
import { IProject } from 'src/app/interfaces/portfolio';
import { SelectionListService } from 'src/app/services/selection-list.service';

const PROJECT_PARAM_KEY = 'projectID';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [FADE_IN],
})
export class PortfolioComponent implements OnInit {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private selectionListService: SelectionListService
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
    this.selectionListService.addListItemToPath(projectID, PROJECT_PARAM_KEY);
  }

  toggleShowAllProjects() {
    this.showAllProjects = true;
  }

  private selectInitialProject() {
    this.selectedProjectID =
      this.selectionListService.selectInitialListItem(PROJECT_PARAM_KEY);
    this.selectedProject = this.portfolio[this.selectedProjectID];
  }

  private countProjectsToList() {
    this.projectCountToShow = this.selectionListService.countListItemsToShow();

    if (this.portfolio.length < this.projectCountToShow) {
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
