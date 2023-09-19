import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import {
  SMALL_SCREEN_MAX,
  SMALL_SCREEN_MIN,
  SUPER_SMALL_SCREEN,
} from 'src/app/constants/screen-sizes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.watchScreenSize();
  }

  screenIsSmall: boolean = false;
  screenIsSuperSmall: boolean = false;

  private watchScreenSize() {
    this.breakpointObserver
      .observe([SMALL_SCREEN_MAX, SMALL_SCREEN_MIN, SUPER_SMALL_SCREEN])
      .subscribe((result) => {
        this.screenIsSmall =
          result.breakpoints[SMALL_SCREEN_MAX] &&
          result.breakpoints[SMALL_SCREEN_MIN];
        this.screenIsSuperSmall = result.breakpoints[SUPER_SMALL_SCREEN];
      });
  }
}
