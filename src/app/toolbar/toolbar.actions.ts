import { Action } from '@ngrx/store';

import { SearchableEntities } from '../dto';

export enum ToolbarActionTypes {
    SHOW = '[Toolbar] Show Entity Search Results Window',
    HIDE = '[Toolbar] Hide Entity Search Results Window',
    REQUEST_ENTITIES = '[Toolbar] Request Searchable Entities',
    RECEIVE_ENTITIES = '[Toolbar] Receive Searchable Entities',
}

export class Show implements Action {
    readonly type = ToolbarActionTypes.SHOW;
}

export class Hide implements Action {
    readonly type = ToolbarActionTypes.HIDE;
}

export class RequesEntities implements Action {
    readonly type = ToolbarActionTypes.REQUEST_ENTITIES;
}

export class ReceiveEntities implements Action {
    readonly type = ToolbarActionTypes.RECEIVE_ENTITIES;
    constructor(public payload: SearchableEntities) {}
}

export type EntitySearchResultsActions = Show | Hide | RequesEntities | ReceiveEntities;
