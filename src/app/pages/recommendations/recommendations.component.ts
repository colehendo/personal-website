import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import { FADE, PAGE_LOAD_AND_LEAVE } from 'src/app/animations/pages';
import { IRecommendation } from 'src/app/interfaces/recommendations';
import { RECOMMENDATIONS } from 'src/app/data/recommendations';
import { BIG_SCREEN } from 'src/app/constants/screen-sizes';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  animations: [PAGE_LOAD_AND_LEAVE, FADE],
})
export class RecommendationsComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.countProjectsToList();
    this.watchScreenSize();
  }

  recommendations: IRecommendation[] = RECOMMENDATIONS;
  selectedRecommendationID: number = 0;
  selectedRecommendation: IRecommendation =
    this.recommendations[this.selectedRecommendationID];

  recommendationCountToShow: number = 0;
  showAllRecommendations: boolean = false;
  recommendationCountLow: boolean = false;
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

  toggleShowAllRecommendations() {
    this.showAllRecommendations = true;
  }

  private countProjectsToList() {
    const height = window.innerHeight;
    // Project list takes up 50% of window height
    const projectListHeight = Math.ceil(height * 0.5);
    // Rough estimate on the number of pixels an item comprises
    const projectItemHeight = 100;
    const projectItemCount = this.recommendations.length;

    this.recommendationCountToShow = Math.floor(
      projectListHeight / projectItemHeight
    );

    if (projectItemCount < this.recommendationCountToShow) {
      this.showAllRecommendations = true;
      this.recommendationCountLow = true;
    }
  }

  private watchScreenSize() {
    this.breakpointObserver.observe([BIG_SCREEN]).subscribe((result) => {
      this.screenIsBig = result.breakpoints[BIG_SCREEN];
    });
  }
}
