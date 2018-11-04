import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsPageComponent } from './students.component';
import { StudentsCardComponent } from './components/students-card';
import { StudentsPageRoutingModule } from './students-routing.module';

@NgModule({
    imports: [CommonModule, StudentsPageRoutingModule],
    declarations: [StudentsPageComponent, StudentsCardComponent],
    exports: [StudentsPageComponent],
})
export class StudentsPageModule {}
