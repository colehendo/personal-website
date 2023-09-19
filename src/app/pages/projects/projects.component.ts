import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FADE, PAGE_LOAD_AND_LEAVE } from 'src/app/animations/projects';
import { IProject } from 'src/app/interfaces/projects';
import { PROJECTS } from 'src/app/constants/projects';
import { BIG_SCREEN } from 'src/app/constants/screen-sizes';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [PAGE_LOAD_AND_LEAVE, FADE],
})
export class ProjectsComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.watchScreenSize();
  }

  projects: IProject[] = PROJECTS;
  selectedProjectID: number = 0;
  selectedProject: IProject = this.projects[this.selectedProjectID];

  showProject: boolean = true;
  screenIsBig: boolean = true;

  selectProject(projectID: number) {
    this.showProject = false;
    this.selectedProjectID = projectID;

    setTimeout(() => {
      this.selectedProject = this.projects[projectID];
      this.showProject = true;
    }, 200);
  }

  private watchScreenSize() {
    this.breakpointObserver.observe([BIG_SCREEN]).subscribe((result) => {
      this.screenIsBig = result.breakpoints[BIG_SCREEN];
    });
  }
}
