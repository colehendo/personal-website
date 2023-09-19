import { AfterViewInit, Component } from '@angular/core';

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
import {
  STATEMENT_END,
  STATEMENT_PROJECTS_LIST,
  STATEMENT_START,
} from 'src/app/constants/home';

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
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (!this.showStatement) {
      setTimeout(() => {
        this.showStatement = true;
      }, 5000);
    }
  }

  firstPageLoad: boolean = true;
  showStatement: boolean = !this.firstPageLoad;

  statementStart = STATEMENT_START;
  statementEnd = STATEMENT_END;
  statementProjectsList = STATEMENT_PROJECTS_LIST;
}
