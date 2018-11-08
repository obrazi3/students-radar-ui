import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { COMMON_DIRECTIVES } from './directives';

@NgModule({
    declarations: [...COMMON_DIRECTIVES],
    imports: [CommonModule],
    exports: [...COMMON_DIRECTIVES],
})
export class AppCommonModule {}
