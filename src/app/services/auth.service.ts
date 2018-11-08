import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { User, UserRole } from '../models/user';
import { ApiRoutes } from '../../config/api-routes';

const mockUser = {
    id: '123123',
    name: 'Stanislau Karmanau',
    role: UserRole.admin,
};

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    user: BehaviorSubject<User> = new BehaviorSubject(mockUser);

    loginError: BehaviorSubject<any> = new BehaviorSubject(null);

    constructor(private http: HttpClient) {}

    login(login: string, password: string) {
        // this.http
        //     .post(ApiRoutes.login, { login, password })
        //     .subscribe(response => this.handleLoginResponse(response), error => this.handleLoginError(error));
        console.log({ login, password });
    }

    private handleLoginResponse(response) {
        this.user.next(response.user);
        localStorage.authJwt = response.jwt;
    }

    private handleLoginError(error) {
        console.error(error);
        this.loginError = error;
    }
}
