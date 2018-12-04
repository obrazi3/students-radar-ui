import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { IStudent } from 'src/app/dto';

@Component({
    selector: 'sr-student-cards-container',
    templateUrl: './student-cards-container.component.html',
    styleUrls: ['./student-cards-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentCardsContainerComponent {
    @Input() students: IStudent[];
    @Input() isLoading: boolean;
    @Input() isShow: boolean; // seems it is not necessary field
}
