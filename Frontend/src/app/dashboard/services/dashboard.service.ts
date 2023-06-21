import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor(private http:HttpClient) {

  }
  serverUrl=environment.serverUrl

  getTotalPurchaseByDate(){
   return this.http.get<any>(`${this.serverUrl}totalpurchasebydate`)
  }
  getTotalSalesByDate(){
    return this.http.get<any>(`${this.serverUrl}totalsalesbydate`)
  }

}
