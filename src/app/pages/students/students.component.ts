import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, AppStateFields } from '../../store';
import { EntityType } from '../../dto';

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

    public onEntitiesSearchRequest(query: string) {}

    public onCloseEntitiesResultsWindow() {}
}
