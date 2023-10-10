import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SelectionListService {
  constructor(private route: ActivatedRoute, private router: Router) {}

  addListItemToPath(itemID: number, itemKey: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        [itemKey]: itemID,
      },
    });
  }

  selectInitialListItem(key: string): number {
    const queryParams = this.route.snapshot.queryParams;

    if (key in queryParams && Number(queryParams[key])) {
      return Number(queryParams[key]);
    } else {
      return 0;
    }
  }

  countListItemsToShow() {
    // Rough estimate on the number of pixels an item comprises
    const itemHeight = 100;
    const windowHeight = window.innerHeight;
    const listMaxPercentPageHeight =
      this.getListMaxPercentPageHeight(windowHeight);
    const listHeight = Math.ceil(windowHeight * listMaxPercentPageHeight);
    const countToShow = Math.ceil(listHeight / itemHeight);

    return countToShow;
  }

  // Determine the maximum percentage of the
  // page's height the list can consume
  private getListMaxPercentPageHeight(windowHeight: number) {
    // Case switch would be nicer here aesthetically,
    // but is dramatically slower in performance
    if (windowHeight > 700) {
      return 0.5;
    } else if (windowHeight > 600) {
      return 0.4;
    } else if (windowHeight > 450) {
      return 0.3;
    } else {
      return 0.2;
    }
  }
}
