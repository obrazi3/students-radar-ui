import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { EntityType, SearchableEntities } from '../dto';

@Component({
    selector: 'sr-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
    @Input() entityType: EntityType;
    @Input() isLoadingSearchResults;
    @Input() isShowSearchResults;
    @Input() entities: SearchableEntities;

    @Output() closeEntitiesResultsWindow = new EventEmitter<void>();
    @Output() entitiesSearchRequest = new EventEmitter<string>();

    public onInputClear() {
        this.closeEntitiesResultsWindow.emit();
    }

    public onSearchInputChange(value: string) {
        // value can be event obj... WHY!?
        if (typeof value === 'string') {
            this.entitiesSearchRequest.emit(value);
        }
    }
}
