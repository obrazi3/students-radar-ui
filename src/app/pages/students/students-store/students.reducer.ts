import { ActionReducerMap } from '@ngrx/store';

import { ToolbarState, toolbarInitialState, toolbarReducer } from '../../../toolbar';
import {
    StudentsCardsState,
    initialState as studentsCardsInitialState,
    studentsCardsReducer,
} from '../components/student-cards-container/students-cards-store';

export interface StudentsPageState {
    toolbar: ToolbarState;
    cards: StudentsCardsState;
}

export enum StudentsPageStateFields {
    Toolbar = 'toolbar',
    Cards = 'cards',
}

const initialState: StudentsPageState = {
    toolbar: toolbarInitialState,
    cards: studentsCardsInitialState,
};

export function studentsPageReducer(state: StudentsPageState = initialState, action: any) {
    // functionality can grow over time
    return state;
}

export const reducers: ActionReducerMap<any> = {
    [StudentsPageStateFields.Toolbar]: toolbarReducer,
    [StudentsPageStateFields.Cards]: studentsCardsReducer,
};
