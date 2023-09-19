import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FADE, PAGE_LOAD_AND_LEAVE } from 'src/app/animations/recommendations';
import { IRecommendation } from 'src/app/interfaces/recommendations';
import { RECOMMENDATIONS } from 'src/app/constants/recommendations';
import { BIG_SCREEN } from 'src/app/constants/screen-sizes';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [PAGE_LOAD_AND_LEAVE, FADE],
})
export class RecommendationsComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.watchScreenSize();
  }

  recommendations: IRecommendation[] = RECOMMENDATIONS;
  selectedRecommendationID: number = 0;
  selectedRecommendation: IRecommendation =
    this.recommendations[this.selectedRecommendationID];

  showRecommendation: boolean = true;
  screenIsBig: boolean = true;

  selectRecommendation(recommendationID: number) {
    this.showRecommendation = false;
    this.selectedRecommendationID = recommendationID;

    setTimeout(() => {
      this.selectedRecommendation = this.recommendations[recommendationID];
      this.showRecommendation = true;
    }, 200);
  }

  private watchScreenSize() {
    this.breakpointObserver.observe([BIG_SCREEN]).subscribe((result) => {
      this.screenIsBig = result.breakpoints[BIG_SCREEN];
    });
  }
}
