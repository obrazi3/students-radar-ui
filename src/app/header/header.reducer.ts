import { EntityType } from '../dto';
import { HeaderState } from './header.models';
import { HeaderActions, HeaderActionTypes } from './header.actions';

export const initialState: HeaderState = {
    activeDashboard: EntityType.Students,
};

export function headerReducer(state: HeaderState = initialState, action: HeaderActions) {
    switch (action.type) {
        case HeaderActionTypes.SET_ACTIVE_DASHBOARD:
            // mb Object.assign will be replaced with some of immutable.js collection
            return { ...state, activeDashboard: action.payload };
        default:
            return state;
    }
}
