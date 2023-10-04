import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { SkillsComponent } from './pages/skills/skills.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '*', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'recommendations', component: RecommendationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
