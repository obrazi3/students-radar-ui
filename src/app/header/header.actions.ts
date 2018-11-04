import { Action } from '@ngrx/store';

import { EntityType } from '../dto';

export enum HeaderActionTypes {
    SET_ACTIVE_DASHBOARD = '[Header] Set Active Dashboard',
}

export class SetActiveDashboard implements Action {
    readonly type = HeaderActionTypes.SET_ACTIVE_DASHBOARD;
    constructor(public payload: EntityType) {}
}

export type HeaderActions = SetActiveDashboard;
