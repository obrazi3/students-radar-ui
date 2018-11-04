import { NgModule } from '@angular/core';

import { StudentsPageModule } from './students';
import { PageNotFoundComponent } from './page-not-found';

@NgModule({
    imports: [StudentsPageModule],
    declarations: [PageNotFoundComponent],
    exports: [PageNotFoundComponent],
})
export class PagesModule {}
