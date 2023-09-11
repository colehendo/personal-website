import { Component } from '@angular/core';
import { RECOMMENDATIONS } from './recommendations-list';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent {
  constructor() {}

  recommendations = RECOMMENDATIONS;
}
