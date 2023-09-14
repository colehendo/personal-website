import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import { BIG_SCREEN, MEDIUM_SCREEN } from 'src/app/constants/screen-sizes';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.watchScreenSize();
  }

  screenIsFullSize: boolean = true;

  private watchScreenSize() {
    this.breakpointObserver
      .observe([BIG_SCREEN, MEDIUM_SCREEN])
      .subscribe(() => {
        this.screenIsFullSize = this.breakpointObserver.isMatched(BIG_SCREEN)
          ? true
          : this.breakpointObserver.isMatched(MEDIUM_SCREEN)
          ? false
          : true;
      });
  }
}
