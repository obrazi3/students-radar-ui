import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, AppStateFields } from '../store';
import { navigationDashboards } from './header.models';
import { EntityType } from '../dto';
import { SetActiveDashboard } from './header.actions';

@Component({
    selector: 'sr-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public navDashboards = navigationDashboards;
    public activeDashboard: EntityType;

    constructor(private store: Store<AppState>) {
        this.store.select(AppStateFields.Header).subscribe(state => (this.activeDashboard = state.activeDashboard));
    }

    public onDashboardClick(clickedDashboard: EntityType) {
        this.store.dispatch(new SetActiveDashboard(clickedDashboard));
    }
}
