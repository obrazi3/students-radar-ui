import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import {
    NOT_LOGGED_IN_STATUS_TEXT,
    LOGGED_IN_STATUS_TEXT,
    NOT_LOGGED_IN_LOGIN_BTN_TEXT,
    LOGGED_IN_LOGIN_BTN_TEXT,
} from './login-component.config';

@Component({
    selector: 'sr-login-page',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginPageComponent implements OnInit {
    login = new FormControl('');

    password = new FormControl('');

    user: User;

    statusText = NOT_LOGGED_IN_STATUS_TEXT;

    loginBtnText = NOT_LOGGED_IN_LOGIN_BTN_TEXT;

    loginForm: FormGroup;

    @ViewChild('logForm')
    private loginFormElement;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.authService.user.subscribe(user => {
            this.user = user;
            this.setStatusText();
            this.setLoginBtnText();
        });
        this.initLoginForm();
    }

    onSubmit() {
        console.log(this.loginForm);
        if (this.loginForm.valid) {
            this.authService.login(this.login.value, this.password.value);
        }
    }

    private setStatusText() {
        this.statusText =
            this.user && this.user.name
                ? LOGGED_IN_STATUS_TEXT.replace('{{username}}', this.user.name)
                : NOT_LOGGED_IN_STATUS_TEXT;
    }

    private setLoginBtnText() {
        this.loginBtnText = this.user ? LOGGED_IN_LOGIN_BTN_TEXT : NOT_LOGGED_IN_LOGIN_BTN_TEXT;
    }

    private initLoginForm() {
        this.loginForm = new FormGroup({
            login: new FormControl(this.login, Validators.required),
            password: new FormControl(this.password, Validators.required),
        });
    }
}
