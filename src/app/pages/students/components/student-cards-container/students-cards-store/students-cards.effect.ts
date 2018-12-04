import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { StudentsService } from '../../../students.service';
import { StudentsCardsActionTypes, LoadStudentsCardsSuccess, LoadStudentsCardsFaild } from './students-cards.actions';

@Injectable()
export class StudentsCardsEffects {
    constructor(private actions$: Actions, private studentsService: StudentsService) {}

    @Effect() requesEntities$ = this.actions$.ofType(StudentsCardsActionTypes.REQUEST_STUDENTS_CARDS).pipe(
        switchMap(() => this.studentsService.loadStudents()),
        map(entities => new LoadStudentsCardsSuccess(entities)),
        catchError(error => of(new LoadStudentsCardsFaild(error))),
    );
}
