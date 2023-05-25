import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/add/Observable/throw'
import 'rxjs/add/operator/catch';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(requestToHandle: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Getting token form local storage
    const token = localStorage.getItem('token');
    if (token != null){
        // Create headers and set token header
    const headers = new HttpHeaders().set('token', token);

    // Clone our request with the new headers because HttpRequests are immutable
    const authReq = requestToHandle.clone({ headers: headers });

    // Last step is to return an Observable that will send the request or pass the request to the next interceptor if any
    return next.handle(authReq);
    }
  else {
    return next.handle(requestToHandle);
  }
}
}