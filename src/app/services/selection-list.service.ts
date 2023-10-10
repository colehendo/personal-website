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
    const height = window.innerHeight;
    // Item list takes up 50% of window height
    const listHeight = Math.ceil(height * 0.5);
    // Rough estimate on the number of pixels an item comprises
    const itemHeight = 100;
    const countToShow = Math.floor(listHeight / itemHeight);

    return countToShow;
  }
}
