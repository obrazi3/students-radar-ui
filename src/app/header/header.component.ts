import { Component } from '@angular/core';

import { navigationDashboards } from './services';
import { EntityType } from '../dto';

@Component({
    selector: 'sr-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    public navDashboards = navigationDashboards;
    public activeDashboard = EntityType.Students;

    public onDashboardClick(clickedDashboard: EntityType) {
        if (this.activeDashboard !== clickedDashboard) {
            this.activeDashboard = clickedDashboard;
        }
    }
}
