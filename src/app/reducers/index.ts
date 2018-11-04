import { ActionReducerMap } from '@ngrx/store';

import { headerReducer } from '../header';
import { AppStateFields } from '../store';

export const reducers: ActionReducerMap<any> = {
    [AppStateFields.Header]: headerReducer,
};
