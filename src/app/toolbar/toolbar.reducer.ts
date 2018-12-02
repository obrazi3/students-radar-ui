import { ToolbarState } from './toolbar.models';
import { ToolbarActionTypes, EntitySearchResultsActions } from './toolbar.actions';
// import { MOCK_STUDENTS } from '../mock-data/students';

const initialState: ToolbarState = {
    isShowSearchResults: false,
    isLoadingSearchResults: false,
    entities: [],
};

export function toolbarReducer(state: ToolbarState = initialState, action: EntitySearchResultsActions) {
    switch (action.type) {
        case ToolbarActionTypes.SHOW:
            return { ...state, isShowSearchResults: true };
        case ToolbarActionTypes.HIDE:
            return { ...state, isShowSearchResults: false, entities: [] };
        case ToolbarActionTypes.REQUEST_ENTITIES:
            return { ...state, isLoadingSearchResults: true, isShowSearchResults: true, entities: [] };
        case ToolbarActionTypes.LOAD_ENTITIES_SUCCESS:
            return {
                ...state,
                isLoadingSearchResults: false,
                entities: state.isShowSearchResults ? action.payload : [],
            };
        default:
            return state;
    }
}
