import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { VISITED } from './constants/cookies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private cookieService: CookieService) {
    this.cookieService.delete(VISITED);
  }
}
