import { ActionReducerMap } from '@ngrx/store';

import { headerReducer } from '../header';
import { AppStateFields } from '../store';
import { toolbarReducer } from '../toolbar';

export const reducers: ActionReducerMap<any> = {
    [AppStateFields.Header]: headerReducer,
    [AppStateFields.Toolbar]: toolbarReducer,
};
