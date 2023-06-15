import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import {  catchError } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class DataService{
private REST_API_SERVER = 'https://reqres.in/api/login';

constructor(private httpClient : HttpClient) {}

public getUser(): Observable<any>{
    return (
        this.httpClient.get(this.REST_API_SERVER)
        .pipe(catchError(this.handleError))
    );
}

private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
}