import { ToolbarState } from './toolbar.models';
import { ToolbarActionTypes, EntitySearchResultsActions } from './toolbar.actions';
import { MOCK_STUDENTS } from '../mock-data/students';

const initialState: ToolbarState = {
    isShowSearchResults: false,
    isLoadingSearchResults: false,
    entities: MOCK_STUDENTS,
};

export function toolbarReducer(state: ToolbarState = initialState, action: EntitySearchResultsActions) {
    switch (action.type) {
        case ToolbarActionTypes.SHOW:
            return { ...state, isShowSearchResults: true };
        case ToolbarActionTypes.HIDE:
            return { ...state, isShowSearchResults: false };
        case ToolbarActionTypes.REQUEST_ENTITIES:
            return { ...state, isLoadingSearchResults: true, entities: [] };
        case ToolbarActionTypes.RECEIVE_ENTITIES:
            return { ...state, isLoadingSearchResults: false, entities: action.payload };
        default:
            return state;
    }
}
