import { Component } from '@angular/core';

@Component({
    selector: 'sr-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
    public notFoundCode = '404';
    public notFoundText = 'Page Not Found)';
}
