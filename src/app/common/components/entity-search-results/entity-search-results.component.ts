import { Component, OnInit, HostBinding } from '@angular/core';

import { MOCK_STUDENTS } from '../../../mock-data/students';
import { slideResultsAnimation } from './animations';

@Component({
    selector: 'sr-entity-search-results',
    templateUrl: './entity-search-results.component.html',
    styleUrls: ['./entity-search-results.component.scss'],
    animations: [slideResultsAnimation],
})
export class EntitySearchResultsComponent implements OnInit {
    @HostBinding('@slideAnimation')
    get slideFrom() {
        return 'left';
    }

    public entities = MOCK_STUDENTS.slice(0);

    ngOnInit() {
        console.log(1);
    }
}
