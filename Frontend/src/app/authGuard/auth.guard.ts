import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanDeactivate,
  Router
} from '@angular/router';
import { AuthService } from '../authentication/service/auth.service';
import { Observable } from 'rxjs';
export interface deactivateGuard {
  canExit: () => boolean | Promise<boolean> | Observable<boolean>;
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanDeactivate<deactivateGuard> {
  constructor(private authService: AuthService, private route: Router) {}
  canActivate() {
    if (this.authService.isloggedIn()) {
      return true;
    } else {
      this.route.navigate(['admin/login']);
      return false;
    }
  }
  canDeactivate(
    component: deactivateGuard ):| boolean
    | Observable<boolean>
    | Promise<boolean> {
      return component.canExit();
    }
}
