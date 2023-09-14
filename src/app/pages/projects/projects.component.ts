import { animate, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { IProject } from 'src/app/interfaces/projects';
import { PROJECTS } from 'src/app/constants/projects';
import { BIG_SCREEN, MEDIUM_SCREEN } from 'src/app/constants/screen-sizes';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('pageLoadAndLeave', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
    trigger('fade', [
      transition('false => true', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition('true => false', [animate('200ms', style({ opacity: 0 }))]),
    ]),
  ],
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
  screenIsFullSize: boolean = true;

  selectProject(projectID: number) {
    this.showProject = false;
    this.selectedProjectID = projectID;

    setTimeout(() => {
      this.selectedProject = this.projects[projectID];
      this.showProject = true;
    }, 200);
  }

  private watchScreenSize() {
    this.breakpointObserver
      .observe([BIG_SCREEN, MEDIUM_SCREEN])
      .subscribe(() => {
        this.screenIsFullSize = this.breakpointObserver.isMatched(BIG_SCREEN)
          ? true
          : this.breakpointObserver.isMatched(MEDIUM_SCREEN)
          ? false
          : true;
      });
  }
}
