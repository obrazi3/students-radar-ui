import { ActionReducerMap } from '@ngrx/store';

import { headerReducer } from '../header';
import { AppStateFields } from '../store';
// import { toolbarReducer } from '../toolbar';
// import { studentsPageReducer } from '../pages/students';

export const reducers: ActionReducerMap<any> = {
    [AppStateFields.Header]: headerReducer,
    // [AppStateFields.Toolbar]: toolbarReducer,
};
