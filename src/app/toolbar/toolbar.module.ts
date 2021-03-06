import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TOOLBAR_COMPONENTS } from './components';
import { AppCommonModule } from '../common';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarService } from './toolbar.service';

@NgModule({
    declarations: [...TOOLBAR_COMPONENTS, ToolbarComponent],
    imports: [CommonModule, FormsModule, AppCommonModule],
    exports: [...TOOLBAR_COMPONENTS, ToolbarComponent],
    providers: [ToolbarService],
})
export class ToolbarModule {}
