import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';

import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { FooterComponent } from './navigation/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    RecommendationsComponent,
    FooterComponent,
  ],
  imports: [AppRoutingModule, SharedModule],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
