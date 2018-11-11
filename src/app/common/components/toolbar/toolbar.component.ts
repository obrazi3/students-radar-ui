import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'sr-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
    public check = false;

    public onInputClear() {
        this.check = false;
    }
}
