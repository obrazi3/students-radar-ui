import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsCardComponent } from './components/students-card';
import { StudentsPageComponent } from './students.component';

const routes: Routes = [
    {
        path: 'students',
        component: StudentsPageComponent,
        children: [{ path: 'card', component: StudentsCardComponent }],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StudentsPageRoutingModule {}
