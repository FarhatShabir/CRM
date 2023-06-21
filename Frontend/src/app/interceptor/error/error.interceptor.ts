import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert/alert.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _router: Router, private alertService: AlertService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            this.alertService.showError('Client side Error', 'Error');
          } else {
            switch (error.status) {
              case 401:
                this.alertService.showError(
                  error.error.message,
                  'Authorization Error'
                );
                this._router.navigateByUrl('/admin/login');
                break;
                case 409:
                  this.alertService.showError(error.error.message,"Error")
                  break;
                case 403:
                  this.alertService.showError(error.error.message,"Error")
                  break;
                case 500:
                this.alertService.showError('Try again later', 'Server Error');
                break;
                case 0:
                this.alertService.showError('Server not responding', 'Error');
                break;
            }
          }
        } else {
          console.log('Something went wrong');
        }
        return throwError(() => new Error(error.statusText));
      })
    );
  }
}
