import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import {
  BIG_SCREEN,
  MEDIUM_SCREEN_MAX,
  MEDIUM_SCREEN_MIN,
  SMALL_SCREEN,
} from 'src/app/constants/screen-sizes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.watchScreenSize();
  }

  screenIsBig: boolean = true;
  screenIsMedium: boolean = false;
  screenIsSmall: boolean = false;

  private watchScreenSize() {
    this.breakpointObserver
      .observe([BIG_SCREEN, MEDIUM_SCREEN_MAX, MEDIUM_SCREEN_MIN, SMALL_SCREEN])
      .subscribe((result) => {
        this.screenIsBig = result.breakpoints[BIG_SCREEN];
        this.screenIsMedium = result.breakpoints[MEDIUM_SCREEN_MAX] && result.breakpoints[MEDIUM_SCREEN_MIN];
        this.screenIsSmall = result.breakpoints[SMALL_SCREEN];
      });
  }
}
