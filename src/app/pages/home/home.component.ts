import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import {
  FIRST_DESCRIPTOR,
  HI,
  IM,
  INTRODUCTION_CORE,
  PAGE_LOAD,
  SECOND_DESCRIPTOR,
  STATEMENT,
  THIRD_DESCRIPTOR,
} from 'src/app/animations/home';
import { VISITED } from 'src/app/constants/cookies';
import { STATEMENT_CONTENTS } from 'src/app/data/home';

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

  statementContents = STATEMENT_CONTENTS;

  ngOnInit() {
    if (!this.cookieService.check(VISITED)) {
      this.cookieService.set(VISITED, 'true');
    } else {
      this.firstPageLoad = false;
      this.showStatement = true;
    }
  }

  ngAfterViewInit() {
    if (!this.showStatement) {
      setTimeout(() => {
        this.showStatement = true;
      }, 3900);
    }
  }
}
