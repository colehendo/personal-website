import { Component } from '@angular/core';

import { IProject } from 'src/app/interfaces/projects';
import { PROJECTS } from 'src/app/constants/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor() {}

  projects: IProject[] = PROJECTS;
  selectedProjectID: number = 0;
  selectedProject: IProject = this.projects[this.selectedProjectID];

  selectProject(projectID: number) {
    this.selectedProjectID = projectID;
    this.selectedProject = this.projects[projectID];
  }
}
