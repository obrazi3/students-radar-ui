import { Component, HostBinding, Input, ChangeDetectionStrategy } from '@angular/core';

import { slideResultsAnimation, loadedResultsAnimation } from './animations';
import { SearchableEntities } from '../../../dto';

@Component({
    selector: 'sr-entity-search-results',
    templateUrl: './entity-search-results.component.html',
    styleUrls: ['./entity-search-results.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [slideResultsAnimation, loadedResultsAnimation],
})
export class EntitySearchResultsComponent {
    @HostBinding('@slideAnimation')
    get slideFrom() {
        return 'left';
    }
    @HostBinding('@loadedAnimation')
    get load() {
        // return this.isLoading === false ? 'loaded' : '';
        return 'loaded';
    }

    @Input() entitiesResultTitle: string;
    @Input() entities: SearchableEntities;
    @Input() isLoading: boolean;
}
