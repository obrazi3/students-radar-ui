import { ToolbarState } from './toolbar.models';
import { ToolbarActionTypes, ToolbarAction } from './toolbar.actions';

export const initialState: ToolbarState = {
    isShowSearchResults: false,
    isLoadingSearchResults: false,
    entities: [],
};

export function toolbarReducer(state: ToolbarState = initialState, action: ToolbarAction) {
    switch (action.type) {
        case ToolbarActionTypes.SHOW_ENTITY_SEARCH_RESULTS_WINDOW:
            return { ...state, isShowSearchResults: true };
        case ToolbarActionTypes.HIDE_ENTITY_SEARCH_RESULTS_WINDOW:
            return { ...state, isShowSearchResults: false, entities: [] };
        case ToolbarActionTypes.REQUEST_SEARCHABLE_ENTITIES:
            return { ...state, isLoadingSearchResults: true, isShowSearchResults: true, entities: [] };
        case ToolbarActionTypes.LOAD_SEARCHABLE_ENTITIES_SUCCESS:
            return {
                ...state,
                isLoadingSearchResults: false,
                entities: state.isShowSearchResults ? action.payload : [],
            };
        default:
            return state;
    }
}
