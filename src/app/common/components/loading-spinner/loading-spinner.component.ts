import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'sr-loading-spinner',
    styleUrls: ['./loading-spinner.component.scss'],
    templateUrl: './loading-spinner.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingSpinnerComponent {
    @Input() show = false;
}
