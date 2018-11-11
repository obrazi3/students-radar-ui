import { Component } from '@angular/core';

@Component({
    selector: 'sr-entity-serach',
    templateUrl: './entity-search.component.html',
    styleUrls: ['./entity-search.component.scss'],
})
export class EntitySearchComponent {
    public value = '';

    readonly maxSearchStringLength = 20;

    public onClear() {
        this.value = '';
    }

    public isVisibleButton(): boolean {
        return this.value === '';
    }
}
