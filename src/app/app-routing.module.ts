import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '*', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'recommendations', component: RecommendationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
