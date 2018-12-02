import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ToolbarService {
    constructor(private http: HttpClient) {}
}
