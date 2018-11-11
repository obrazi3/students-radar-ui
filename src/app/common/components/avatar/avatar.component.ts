import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'sr-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
    @Input() avatarUrl: string;

    public isShownDefault = false;

    public onError() {
        this.isShownDefault = true;
    }
}
