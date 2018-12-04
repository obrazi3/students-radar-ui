import { Action } from '@ngrx/store';

import { SearchableEntities } from '../dto';

export enum ToolbarActionTypes {
    SHOW_ENTITY_SEARCH_RESULTS_WINDOW = '[Toolbar] Show Entity Search Results Window',
    HIDE_ENTITY_SEARCH_RESULTS_WINDOW = '[Toolbar] Hide Entity Search Results Window',
    REQUEST_SEARCHABLE_ENTITIES = '[Toolbar] Request Searchable Entities',
    LOAD_SEARCHABLE_ENTITIES_SUCCESS = '[Toolbar] Load Searchable Entities',
    LOAD_SEARCHABLE_ENTITIES_FAILED = '[Toolbar] Load Searchable Entities Failded',
}

export class ShowEntitySearchResultsWindow implements Action {
    readonly type = ToolbarActionTypes.SHOW_ENTITY_SEARCH_RESULTS_WINDOW;
}

export class HideEntitySearchResultsWindow implements Action {
    readonly type = ToolbarActionTypes.HIDE_ENTITY_SEARCH_RESULTS_WINDOW;
}

export class RequesSearchableEntities implements Action {
    readonly type = ToolbarActionTypes.REQUEST_SEARCHABLE_ENTITIES;
    constructor(public payload: string) {}
}

export class LoadSearchableEntitiesSuccess implements Action {
    readonly type = ToolbarActionTypes.LOAD_SEARCHABLE_ENTITIES_SUCCESS;
    constructor(public payload: SearchableEntities) {}
}

export class LoadSearchableEntitiesFailed implements Action {
    readonly type = ToolbarActionTypes.LOAD_SEARCHABLE_ENTITIES_FAILED;
    constructor(public payload: Error) {}
}

export type ToolbarAction =
    | ShowEntitySearchResultsWindow
    | HideEntitySearchResultsWindow
    | RequesSearchableEntities
    | LoadSearchableEntitiesSuccess
    | LoadSearchableEntitiesFailed;
