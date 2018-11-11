import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sr-entity-serach',
    templateUrl: './entity-search.component.html',
    styleUrls: ['./entity-search.component.scss'],
})
export class EntitySearchComponent {
    @Output() close = new EventEmitter<null>();

    public value = '';
    readonly maxSearchStringLength = 20;

    public onClear(input: HTMLInputElement) {
        input.focus();
        this.value = '';
        this.close.emit(null);
    }

    public onKeyUp(event: KeyboardEvent, input: HTMLInputElement) {
        if (event.keyCode === 27) {
            const valueBeforeClear = input.value;
            this.onClear(input);
            if (!valueBeforeClear) {
                input.blur();
            } else {
                event.stopPropagation();
            }
        }
    }

    public isVisibleButton(): boolean {
        return this.value === '';
    }
}
