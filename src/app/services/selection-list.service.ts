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

  countListItemsToShow(): number {
    const topSpaceToLeave = 225;
    const bottomSpaceToLeave = 25;
    const windowHeight = window.innerHeight;

    // Number of pixels in an item and its lower padding
    const itemHeight = 100;
    const spaceForItems = windowHeight - (topSpaceToLeave + bottomSpaceToLeave);
    // Subtract 1 to match indexing starting at 0
    const countToShow = Math.floor(spaceForItems / itemHeight) - 1;

    // Always show at least 1 item
    if (countToShow < 0) {
      return 0;
    }

    return countToShow;
  }
}
