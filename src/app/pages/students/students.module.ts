import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { StudentsPageComponent } from './students.component';
import { StudentsPageRoutingModule } from './students-routing.module';
import { STUDENTS_COMPONENTS } from './components';
import { AppCommonModule } from '../../common';
import { ToolbarModule } from '../../toolbar';

@NgModule({
    imports: [CommonModule, MatCardModule, MatDividerModule, AppCommonModule, ToolbarModule, StudentsPageRoutingModule],
    declarations: [StudentsPageComponent, ...STUDENTS_COMPONENTS],
    exports: [StudentsPageComponent],
})
export class StudentsPageModule {}
