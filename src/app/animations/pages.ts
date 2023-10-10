import { animate, style, transition, trigger } from '@angular/animations';

export const FADE_IN = trigger('fade-in', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 })),
  ]),

  transition('false => true', [
    style({ opacity: 0 }),
    animate('200ms', style({ opacity: 1 })),
  ]),
]);
