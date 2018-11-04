import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsPageComponent } from './students.component';
import { StudentsPageRoutingModule } from './students-routing.module';
import { StudentsCardComponent } from './components';

@NgModule({
    imports: [CommonModule, StudentsPageRoutingModule],
    declarations: [StudentsPageComponent, StudentsCardComponent],
    exports: [StudentsPageComponent],
})
export class StudentsPageModule {}
