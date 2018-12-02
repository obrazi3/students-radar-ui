import { HeaderState } from '../header';
import { ToolbarState } from '../toolbar';

export enum AppStateFields {
    Header = 'header',
    Toolbar = 'toolbar',
}

export interface AppState {
    [AppStateFields.Header]: HeaderState;
    [AppStateFields.Toolbar]: ToolbarState;
}
