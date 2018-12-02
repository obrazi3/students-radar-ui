import { trigger, state, style, transition, animate, AnimationTriggerMetadata } from '@angular/animations';

export const slideResultsAnimation: AnimationTriggerMetadata = trigger('slideAnimation', [
    state('top', style({ transform: 'translateY(0%)' })),
    state('left', style({ transform: 'translateX(0%)' })),

    transition('void => top', [style({ transform: 'translateY(-100%)' }), animate('300ms ease-out')]),
    transition('top => void', [animate('300ms ease-out', style({ transform: 'translateY(-150%)' }))]),

    transition('void => left', [style({ transform: 'translateX(-100%)' }), animate('300ms ease-out')]),
    transition('left => void', [animate('300ms ease-out', style({ transform: 'translateX(-100%)' }))]),
]);

export const loadedResultsAnimation: AnimationTriggerMetadata = trigger('loadedAnimation', [
    state('loaded', style({ height: '55vh' })),

    transition('void => loaded', animate('300ms ease-out')),
    transition('loaded => void', [animate('300ms ease-out', style({ height: '30px' }))]),
]);
