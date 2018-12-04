import { Action } from '@ngrx/store';

import { IStudent } from '../../../../../dto';

export enum StudentsCardsActionTypes {
    REQUEST_STUDENTS_CARDS = '[StudentsCards] Request Students Cards',
    LOAD_STUDENTS_CARDS_SUCCESS = '[StudentsCards] Load Students Cards',
    LOAD_STUDENTS_CARDS_FAILED = '[StudentsCards] Load Students Cards Failded',
}

// this action will be use "filtersData" payload after API creation
export class RequestStudentsCards implements Action {
    readonly type = StudentsCardsActionTypes.REQUEST_STUDENTS_CARDS;
}

export class LoadStudentsCardsSuccess implements Action {
    readonly type = StudentsCardsActionTypes.LOAD_STUDENTS_CARDS_SUCCESS;
    constructor(public payload: IStudent[]) {}
}

export class LoadStudentsCardsFaild implements Action {
    readonly type = StudentsCardsActionTypes.LOAD_STUDENTS_CARDS_FAILED;
    constructor(public payload: Error) {}
}

export type StudentsCardsAction = RequestStudentsCards | LoadStudentsCardsSuccess | LoadStudentsCardsFaild;
