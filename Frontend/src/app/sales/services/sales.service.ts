import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
serverUrl=environment.serverUrl;
  constructor(public http:HttpClient) { }

  uploadSale(saleData:any){
    return this.http.post(`${this.serverUrl}/addsale`,saleData);
  }
  editSale(updateSaleData:any){
   return this.http.put(`${this.serverUrl}updatesale`,updateSaleData);
  }
  deleteSale(sel_id:any){
    return this.http.delete(`${this.serverUrl}deletesale${sel_id}`);
  }
}
