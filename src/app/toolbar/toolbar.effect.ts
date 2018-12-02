import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { EntitySearchService } from './entity-search.service';
import { ToolbarActionTypes, LoadEntitiesSuccess, LoadEntitiesFailed } from './toolbar.actions';
import { EntityType } from '../dto';

@Injectable()
export class ToolbarEffects {
    constructor(private actions$: Actions, private entitySearchService: EntitySearchService) {}

    @Effect() requesEntities$ = this.actions$.ofType(ToolbarActionTypes.REQUEST_ENTITIES).pipe(
        switchMap(() => this.entitySearchService.loadData('mock', EntityType.Students)),
        map(entities => new LoadEntitiesSuccess(entities)),
        catchError(error => of(new LoadEntitiesFailed(error))),
    );
}
