import { NgModule } from '@angular/core';

import { LoginPageModule } from './login/login.module';
import { StudentsPageModule } from './students';
import { PageNotFoundComponent } from './page-not-found';

@NgModule({
    imports: [StudentsPageModule, LoginPageModule],
    declarations: [PageNotFoundComponent],
    exports: [PageNotFoundComponent],
})
export class PagesModule {}
