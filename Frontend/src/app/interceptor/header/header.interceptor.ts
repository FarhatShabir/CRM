
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { LoaderService } from 'src/app/loader/service/loader.service';
import { finalize } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    this.loaderService.showSpinner=true;
    const accessToken = localStorage.getItem('token')|| ''
    if (accessToken) {
      const req = request.clone({
        headers: request.headers.set('Authorization', 'bearer ' +accessToken),
      });
      return next.handle(req).pipe(
        finalize(()=>{
          this.loaderService.showSpinner = false;
        })
      );
    } else {
      return next.handle(request).pipe(
        finalize(()=>{
          this.loaderService.showSpinner=false;
        })
      );
    }
  }
}

