export * from './student-cards-container/students-cards-store';

import { StudentCardComponent } from './student-card';
import { StudentCardsContainerComponent } from './student-cards-container';

export const STUDENTS_COMPONENTS = [StudentCardComponent, StudentCardsContainerComponent];

// it allows to use rouring
export { StudentCardComponent, StudentCardsContainerComponent };
