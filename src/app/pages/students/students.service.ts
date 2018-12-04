import { Injectable } from '@angular/core';
import { Observable, timer, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { IStudent } from '../../dto';
import { MOCK_STUDENTS } from '../../mock-data/students';

@Injectable()
export class StudentsService {
    // http will be used after an API is created
    constructor() {}

    public loadStudents(): Observable<IStudent[]> {
        return timer(1000).pipe(
            switchMap(_ => {
                return of(MOCK_STUDENTS.slice(0));
            }),
        );
    }
}
