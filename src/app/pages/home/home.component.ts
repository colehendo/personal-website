import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import {
  FIRST_DESCRIPTOR,
  HI,
  INTRODUCTION_CORE,
  IM,
  PAGE_LOAD,
  SECOND_DESCRIPTOR,
  STATEMENT,
  THIRD_DESCRIPTOR,
} from 'src/app/animations/home';
import { VISITED } from 'src/app/constants/cookies';
import {
  STATEMENT_END,
  STATEMENT_PROJECTS_LIST,
  STATEMENT_START,
} from 'src/app/data/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    PAGE_LOAD,
    HI,
    IM,
    INTRODUCTION_CORE,
    FIRST_DESCRIPTOR,
    SECOND_DESCRIPTOR,
    THIRD_DESCRIPTOR,
    STATEMENT,
  ],
})
export class HomeComponent implements AfterViewInit, OnInit {
  constructor(private cookieService: CookieService) {}

  firstPageLoad: boolean = true;
  showStatement: boolean = false;

  statementStart = STATEMENT_START;
  statementEnd = STATEMENT_END;
  statementProjectsList = STATEMENT_PROJECTS_LIST;

  ngOnInit() {
    if (!this.cookieService.check(VISITED)) {
      this.cookieService.set(VISITED, 'true', 1);
    } else {
      this.firstPageLoad = false;
      this.showStatement = true;
    }
  }

  ngAfterViewInit() {
    if (!this.showStatement) {
      setTimeout(() => {
        this.showStatement = true;
      }, 5500);
    }
  }
}
