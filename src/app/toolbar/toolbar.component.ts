import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { ToolbarService } from './toolbar.service';
import { EntityType, SearchableEntities } from '../dto';

@Component({
    selector: 'sr-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ToolbarService],
})
export class ToolbarComponent {
    @Input() entityType: EntityType;
    @Input() isLoadingSearchResults = false;
    @Input() isShowSearchResults = false;
    @Input() entities: SearchableEntities;

    @Output() closeEntitiesResultsWindow = new EventEmitter<null>();
    @Output() entitiesSearchRequest = new EventEmitter<string>();

    public onInputClear() {
        this.isShowSearchResults = false;
        this.closeEntitiesResultsWindow.emit(null);
    }

    public onSearchInputChange(value: string) {
        // value can be event obj
        if (typeof value === 'string') {
            this.entitiesSearchRequest.emit(value);
        }
    }
}
