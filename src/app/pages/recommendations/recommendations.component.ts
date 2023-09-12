import { Component } from '@angular/core';
import { IRecommendation } from 'src/app/interfaces/recommendations';
import { RECOMMENDATIONS } from 'src/app/constants/recommendations';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent {
  constructor() {}

  recommendations = RECOMMENDATIONS;
  selectedRecommendationID: number = 0;
  selectedRecommendation: IRecommendation = this.recommendations[this.selectedRecommendationID];

  selectRecommendation(recommendationID: number) {
    this.selectedRecommendationID = recommendationID;
    this.selectedRecommendation = this.recommendations[recommendationID];
  }
}
