import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public _router: Router, public _http: HttpClient) {}

  serverUrl = environment.serverUrl;
  authAdmin(authModel: any) {
    return this._http.post(`${this.serverUrl}login`, authModel);
  }

  isloggedIn() {
    return localStorage.getItem('token') != null;
  }
}
