import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const PAGE_LOAD = trigger('pageLoad', [
  transition(
    (fromState, params: any) =>
      fromState === 'void' && !params.params?.['firstPageLoad'],
    [style({ opacity: 0 }), animate('500ms', style({ opacity: 1 }))]
  ),
  transition(
    (fromState, params: any) =>
      fromState === 'void' && params.params?.['firstPageLoad'],
    [
      group([
        query('@hi', animateChild()),
        query('@im', animateChild()),
        query('@introductionCore', animateChild()),
        query('@firstDescriptor', animateChild()),
        query('@secondDescriptor', animateChild()),
        query('@thirdDescriptor', animateChild()),
      ]),
    ]
  ),
]);

export const HI = trigger('hi', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms 400ms', style({ opacity: 1 })),
  ]),
]);

export const IM = trigger('im', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms 1200ms', style({ opacity: 1 })),
  ]),
]);

export const INTRODUCTION_CORE = trigger('introductionCore', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms 1500ms', style({ opacity: 1 })),
  ]),
]);

export const FIRST_DESCRIPTOR = trigger('firstDescriptor', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms 2600ms', style({ opacity: 1 })),
  ]),
]);

export const SECOND_DESCRIPTOR = trigger('secondDescriptor', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms 3000ms', style({ opacity: 1 })),
  ]),
]);

export const THIRD_DESCRIPTOR = trigger('thirdDescriptor', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms 3400ms', style({ opacity: 1 })),
  ]),
]);

export const STATEMENT = trigger('statement', [
  transition(':enter', [
    style({ width: 0, opacity: 0, height: 0 }),
    animate('300ms', style({ width: '100%', height: '70vh' })),
    animate('200ms', style({ opacity: 1 })),
  ]),
]);
