import { Component } from '@angular/core';
import { PROJECTS } from './projects-list';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor() {}

  projects = PROJECTS;
}
