import { animate, style, transition, trigger } from '@angular/animations';

export const PAGE_LOAD_AND_LEAVE = trigger('pageLoadAndLeave', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 })),
  ]),
]);

export const FADE = trigger('fade', [
  transition('false => true', [
    style({ opacity: 0 }),
    animate('200ms', style({ opacity: 1 })),
  ]),
]);
