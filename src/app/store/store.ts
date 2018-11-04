import { HeaderState } from '../header';

export enum AppStateFields {
    Header = 'header',
}

export interface AppState {
    [AppStateFields.Header]: HeaderState;
}
