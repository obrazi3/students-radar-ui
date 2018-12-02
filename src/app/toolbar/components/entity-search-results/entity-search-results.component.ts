import { Component, OnInit, HostBinding, Input, ChangeDetectionStrategy } from '@angular/core';

import { slideResultsAnimation } from './animations';
import { SearchableEntities } from '../../../dto';

@Component({
    selector: 'sr-entity-search-results',
    templateUrl: './entity-search-results.component.html',
    styleUrls: ['./entity-search-results.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [slideResultsAnimation],
})
export class EntitySearchResultsComponent implements OnInit {
    @HostBinding('@slideAnimation')
    get slideFrom() {
        return 'left';
    }

    @Input() entities: SearchableEntities;

    ngOnInit() {
        // ...
    }
}
