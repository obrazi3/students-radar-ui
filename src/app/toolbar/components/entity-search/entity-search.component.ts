import { Component, Output, EventEmitter, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { pluck, debounceTime, filter } from 'rxjs/operators';

@Component({
    selector: 'sr-entity-serach',
    templateUrl: './entity-search.component.html',
    styleUrls: ['./entity-search.component.scss'],
})
export class EntitySearchComponent implements OnInit, OnDestroy {
    @ViewChild('input') input: ElementRef;

    @Output() close = new EventEmitter<null>();
    @Output() change = new EventEmitter<string>();

    private inputValueSubscribtion: Subscription;
    private inputEscapeSubscription: Subscription;

    public value = '';
    public maxSearchStringLength = 40;

    ngOnInit() {
        this.inputValueSubscribtion = fromEvent(this.input.nativeElement, 'input')
            .pipe(
                pluck('target', 'value'),
                debounceTime(1000),
            )
            .subscribe((value: string) => {
                value ? this.change.emit(value) : this.close.emit(null);
            });

        this.inputEscapeSubscription = fromEvent(this.input.nativeElement, 'keyup')
            .pipe(filter((event: KeyboardEvent) => event.keyCode === 27))
            .subscribe(() => {
                const valueBeforeClear = this.value;
                this.onClear(this.input.nativeElement);
                if (!valueBeforeClear) {
                    this.input.nativeElement.blur();
                } else {
                    event.stopPropagation();
                }
            });
    }

    public onClear(input: HTMLInputElement) {
        input.focus();
        input.value = '';
        this.close.emit(null);
    }

    public isVisibleButton(input: HTMLInputElement): boolean {
        return !input.value;
    }

    ngOnDestroy() {
        this.inputValueSubscribtion.unsubscribe();
        this.inputEscapeSubscription.unsubscribe();
    }
}
