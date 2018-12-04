import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, AppStateFields } from '../../store';
import { EntityType } from '../../dto';
import {
    RequesSearchableEntities,
    ShowEntitySearchResultsWindow,
    HideEntitySearchResultsWindow,
} from '../../toolbar/toolbar.actions';
import { ToolbarState } from '../../toolbar';
import { StudentsCardsState, RequestStudentsCards } from './components';

@Component({
    selector: 'sr-students-page',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss'],
})
export class StudentsPageComponent implements OnInit, OnDestroy {
    public entityType = EntityType.Students;
    public toolbarState: ToolbarState;
    public studentsCardsState: StudentsCardsState;

    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        this.store.select(AppStateFields.StudentsPage).subscribe(state => {
            this.toolbarState = state.toolbar;
            this.studentsCardsState = state.cards;
        });

        this.store.dispatch(new RequestStudentsCards());
    }

    public onEntitiesSearchRequest(query: string) {
        this.store.dispatch(new RequesSearchableEntities(query));
        this.store.dispatch(new ShowEntitySearchResultsWindow());
    }

    public onCloseEntitiesResultsWindow() {
        this.store.dispatch(new HideEntitySearchResultsWindow());
    }

    ngOnDestroy() {
        this.store.dispatch(new HideEntitySearchResultsWindow());
    }
}
