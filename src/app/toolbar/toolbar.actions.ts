import { Action } from '@ngrx/store';

import { SearchableEntities } from '../dto';

export enum ToolbarActionTypes {
    SHOW = '[Toolbar] Show Entity Search Results Window',
    HIDE = '[Toolbar] Hide Entity Search Results Window',
    REQUEST_ENTITIES = '[Toolbar] Request Searchable Entities',
    LOAD_ENTITIES_SUCCESS = '[Toolbar] Load Searchable Entities',
    LOAD_ENTITIES_FAILED = '[Toolbar] Load Searchable Entities Failded',
}

export class Show implements Action {
    readonly type = ToolbarActionTypes.SHOW;
}

export class Hide implements Action {
    readonly type = ToolbarActionTypes.HIDE;
}

export class RequesEntities implements Action {
    readonly type = ToolbarActionTypes.REQUEST_ENTITIES;
    constructor(public payload: string) {}
}

export class LoadEntitiesSuccess implements Action {
    readonly type = ToolbarActionTypes.LOAD_ENTITIES_SUCCESS;
    constructor(public payload: SearchableEntities) {}
}

export class LoadEntitiesFailed implements Action {
    readonly type = ToolbarActionTypes.LOAD_ENTITIES_FAILED;
    constructor(public payload: Error) {}
}

export type EntitySearchResultsActions = Show | Hide | RequesEntities | LoadEntitiesSuccess | LoadEntitiesFailed;
