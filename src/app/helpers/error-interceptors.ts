import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AppService } from '../services/AppService';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    userData: any;
    constructor(private accountService: AppService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let jwt = '';
        if (localStorage.getItem('currentUser')) {
            jwt = JSON.parse(localStorage.getItem('currentUser')).token;
        }
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].includes(err.status) && jwt) {
                // auto logout if 401 or 403 response returned from api
                this.accountService.logout();
            }
            const error = err.error?.message || err.statusText;
            console.log(err);
            return throwError(error);
        }))
    }
}

