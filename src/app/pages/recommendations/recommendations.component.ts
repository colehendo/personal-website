import { animate, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { IRecommendation } from 'src/app/interfaces/recommendations';
import { RECOMMENDATIONS } from 'src/app/constants/recommendations';
import { BIG_SCREEN } from 'src/app/constants/screen-sizes';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('pageLoadAndLeave', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
    trigger('fade', [
      transition('false => true', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition('true => false', [animate('200ms', style({ opacity: 0 }))]),
    ]),
  ],
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
    this.breakpointObserver
      .observe([BIG_SCREEN])
      .subscribe((result) => {
        this.screenIsBig = result.breakpoints[BIG_SCREEN];
      });
  }
}
