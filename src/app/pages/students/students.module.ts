import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StudentsPageComponent } from './students.component';
import { StudentsPageRoutingModule } from './students-routing.module';
import { STUDENTS_COMPONENTS } from './components';
import { AppCommonModule } from '../../common';
import { ToolbarModule } from '../../toolbar';
import { AppStateFields } from '../../store';
import { reducers, effects } from './students-store';
import { StudentsService } from './students.service';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatDividerModule,
        AppCommonModule,
        ToolbarModule,
        StoreModule.forFeature(AppStateFields.StudentsPage, reducers),
        EffectsModule.forFeature(effects),
        StudentsPageRoutingModule,
    ],
    declarations: [StudentsPageComponent, ...STUDENTS_COMPONENTS],
    exports: [StudentsPageComponent],
    providers: [StudentsService],
})
export class StudentsPageModule {}
