import { HeaderState } from '../header';
import { StudentsPageState } from '../pages/students';

export enum AppStateFields {
    Header = 'header',
    Toolbar = 'toolbar', // will be removed soon
    StudentsPage = 'studentsPage',
}

export interface AppState {
    [AppStateFields.Header]: HeaderState;
    [AppStateFields.StudentsPage]: StudentsPageState;
    // [AppStateFields.Toolbar]: ToolbarState;
}
