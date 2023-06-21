import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable,EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  serverUrl=environment.serverUrl;

  vehicleDetails=new BehaviorSubject<any>(null)
  allDetails=new BehaviorSubject<any>(null)

  isUpdate:boolean=false;
  isBack:boolean=false

  constructor(private http:HttpClient) {
   }

   vehicleSubjectRaised(data:any){
    this.vehicleDetails.next(data)
   }

  addPurchaseDetails(data:any){
    return this.http.post<any>(`${this.serverUrl}addvehicle`,data)
  }

  deletePurchase(carNo:any){
    return  this.http.delete<any>(`${this.serverUrl}deletepurchase/${carNo}`)
  }

  findPurchase(carno:any){
    return this.http.get<any>(`${this.serverUrl}findvehicle/${carno}`)
  }

  updatePurchase(carNo:any,editedDetail:any){
    return  this.http.put<any>(`${this.serverUrl}updatepurchase/${carNo}`,editedDetail)
  }

  getVehicleDate(){
    return this.http.get<any>(`${this.serverUrl}totalpurchasebydate`)
  }

  getVehicleNumber(vehicleNumber:any){
    return this.http.get<any>(`${this.serverUrl}/search?q=${vehicleNumber}`)
  }

  getPurchaseByPage(pageNo:number,limit:number){
    let prams:HttpParams=new HttpParams;
    prams=prams.set('pageno',pageNo)
    prams=prams.set('limit',limit)
    return this.http.get<any>(`${this.serverUrl}/purchasebypage?`+prams.toString())
  }
}
