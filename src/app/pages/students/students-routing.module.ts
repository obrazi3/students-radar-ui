import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentCardComponent } from './components/student-card';
import { StudentsPageComponent } from './students.component';

const routes: Routes = [
    {
        path: 'students',
        component: StudentsPageComponent,
        children: [{ path: 'card', component: StudentCardComponent }],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StudentsPageRoutingModule {}
