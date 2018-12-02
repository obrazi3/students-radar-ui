import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, AppStateFields } from '../../store';
import { EntityType } from '../../dto';
import { RequesEntities, Show, Hide } from '../../toolbar/toolbar.actions';

@Component({
    selector: 'sr-students-page',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss'],
})
export class StudentsPageComponent implements OnInit {
    public toolbarState: AppState[AppStateFields.Toolbar];
    public entityType = EntityType.Students;

    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        this.store.select(AppStateFields.Toolbar).subscribe(state => (this.toolbarState = state));
    }

    public onEntitiesSearchRequest(query: string) {
        this.store.dispatch(new RequesEntities(query));
        this.store.dispatch(new Show());
    }

    public onCloseEntitiesResultsWindow() {
        this.store.dispatch(new Hide());
    }
}
