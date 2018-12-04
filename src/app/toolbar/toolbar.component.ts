import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, SimpleChanges, OnInit } from '@angular/core';

import { EntityType, SearchableEntities } from '../dto';

@Component({
    selector: 'sr-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {
    @Input() entityType: EntityType;
    @Input() isLoadingSearchResults;
    @Input() isShowSearchResults;
    @Input() entities: SearchableEntities;

    @Output() closeEntitiesResultsWindow = new EventEmitter<void>();
    @Output() entitiesSearchRequest = new EventEmitter<string>();

    public entitiesResultTitle = 'Results';
    public entitySearchPlaceholder = 'Search';

    ngOnInit() {
        switch (this.entityType) {
            case EntityType.Students:
                this.entitiesResultTitle = 'Students';
                this.entitySearchPlaceholder = 'Search students';
                break;
        }
    }

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
