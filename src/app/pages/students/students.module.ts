import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { StudentsPageComponent } from './students.component';
import { StudentsPageRoutingModule } from './students-routing.module';
import { StudentsCardComponent } from './components';

@NgModule({
    imports: [CommonModule, MatCardModule, StudentsPageRoutingModule],
    declarations: [StudentsPageComponent, StudentsCardComponent],
    exports: [StudentsPageComponent],
})
export class StudentsPageModule {}
