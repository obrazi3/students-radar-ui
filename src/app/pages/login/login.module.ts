import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

import { LoginPgaeRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login.component';

@NgModule({
    declarations: [LoginPageComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        LoginPgaeRoutingModule,
    ],
})
export class LoginPageModule {}
