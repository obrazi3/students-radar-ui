import { IStudent } from '../../../../../dto';
import { StudentsCardsAction, StudentsCardsActionTypes } from './students-cards.actions';

export interface StudentsCardsState {
    isShowStudentsCards: boolean;
    isLoadingStudentsCards: boolean;
    entities: IStudent[];
}

export const initialState: StudentsCardsState = {
    isShowStudentsCards: false,
    isLoadingStudentsCards: false,
    entities: [],
};

export function studentsCardsReducer(state: StudentsCardsState = initialState, action: StudentsCardsAction) {
    switch (action.type) {
        case StudentsCardsActionTypes.REQUEST_STUDENTS_CARDS:
            return { ...state, isLoadingStudentsCards: true, isShowStudentsCards: false, entities: [] };
        case StudentsCardsActionTypes.LOAD_STUDENTS_CARDS_SUCCESS:
            return { ...state, isLoadingStudentsCards: false, isShowStudentsCards: true, entities: action.payload };
        default:
            return state;
    }
}
