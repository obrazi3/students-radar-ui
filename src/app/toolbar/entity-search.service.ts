import { Injectable } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { SearchableEntities, EntityType } from '../dto';
import { MOCK_STUDENTS } from '../mock-data/students';

@Injectable()
export class EntitySearchService {
    // http will be used after an API is created
    constructor() {}

    public loadData(query: string, entityType: EntityType): Observable<SearchableEntities> {
        return timer(1000).pipe(
            switchMap(_ => {
                return of(MOCK_STUDENTS.slice(0));
            }),
        );
    }
}
