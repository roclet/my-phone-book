import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

    constructor() { }
    token = environment.token;
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = sessionStorage.getItem('isLogin');
        if (currentUser) {
            if (request.url.indexOf('sessionExtend') !== -1 || request.url.indexOf('logout') !== -1) {

                return next.handle(this.injectToken(request));
            }
        }
        else {
            request = request.clone({
                setHeaders: {
                    Authorization: `${this.token}`
                }
            });

            return next.handle(request);
        }
        return next.handle(request);
    }

    injectToken(request: HttpRequest<any>) {
        return request = request.clone({
            setHeaders: {
                Authorization: `${sessionStorage.getItem('userSession')}`
            }
        });
    }
}
