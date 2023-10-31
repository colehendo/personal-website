import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import { FADE_IN } from 'src/app/animations/pages';
import { BIG_SCREEN } from 'src/app/constants/screen-sizes';
import { RECOMMENDATIONS } from 'src/app/data/recommendations';
import { IRecommendation } from 'src/app/interfaces/recommendations';
import { SelectionListService } from 'src/app/services/selection-list.service';

const RECOMMENDATION_PARAM_KEY = 'recommendationID';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  animations: [FADE_IN],
})
export class RecommendationsComponent implements OnInit {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private selectionListService: SelectionListService
  ) {}

  ngOnInit() {
    this.selectInitialRecommendation();
    this.countProjectsToList();
    this.watchScreenSize();
  }

  recommendations: IRecommendation[] = RECOMMENDATIONS;
  selectedRecommendationID: number;
  selectedRecommendation: IRecommendation;

  recommendationCountToShow: number = 0;
  showAllRecommendations: boolean = false;
  showRecommendation: boolean = true;
  screenIsBig: boolean = true;

  selectRecommendation(recommendationID: number) {
    if (recommendationID === this.selectedRecommendationID) {
      return;
    }

    this.showRecommendation = false;
    this.selectedRecommendationID = recommendationID;

    setTimeout(() => {
      this.selectedRecommendation = this.recommendations[recommendationID];
      this.showRecommendation = true;
    }, 200);

    this.addRecommendationToPath(recommendationID);
  }

  addRecommendationToPath(recommendationID: number) {
    this.selectionListService.addListItemToPath(
      recommendationID,
      RECOMMENDATION_PARAM_KEY
    );
  }

  toggleShowAllRecommendations() {
    this.showAllRecommendations = true;
  }

  private selectInitialRecommendation() {
    this.selectedRecommendationID =
      this.selectionListService.selectInitialListItem(RECOMMENDATION_PARAM_KEY);
    this.selectedRecommendation =
      this.recommendations[this.selectedRecommendationID];
  }

  private countProjectsToList() {
    this.recommendationCountToShow =
      this.selectionListService.countListItemsToShow();
    this.showAllRecommendations =
      this.recommendations.length <= this.recommendationCountToShow;
  }

  private watchScreenSize() {
    this.breakpointObserver.observe([BIG_SCREEN]).subscribe((result) => {
      this.screenIsBig = result.breakpoints[BIG_SCREEN];

      if (!this.screenIsBig) {
        this.showAllRecommendations = true;
      }
    });
  }
}
