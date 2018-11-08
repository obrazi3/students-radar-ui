import { Component } from '@angular/core';

import { MOCK_STUDENTS } from '../../../../mock-data/students';

@Component({
    selector: 'sr-student-cards-container',
    templateUrl: './student-cards-container.component.html',
    styleUrls: ['./student-cards-container.component.scss'],
})
export class StudentCardsContainerComponent {
    public students = MOCK_STUDENTS;
}
