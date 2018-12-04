import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { ToolbarService } from './toolbar.service';
import { ToolbarActionTypes, LoadSearchableEntitiesSuccess, LoadSearchableEntitiesFailed } from './toolbar.actions';
import { EntityType } from '../dto';

@Injectable()
export class ToolbarEffects {
    constructor(private actions$: Actions, private toolbarService: ToolbarService) {}

    @Effect() requesEntities$ = this.actions$.ofType(ToolbarActionTypes.REQUEST_SEARCHABLE_ENTITIES).pipe(
        switchMap(() => this.toolbarService.loadData('mock', EntityType.Students)),
        map(entities => new LoadSearchableEntitiesSuccess(entities)),
        catchError(error => of(new LoadSearchableEntitiesFailed(error))),
    );
}
