import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';

import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { FooterComponent } from './navigation/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PortfolioComponent,
    RecommendationsComponent,
    SkillsComponent,
    FooterComponent,
  ],
  imports: [AppRoutingModule, SharedModule],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
