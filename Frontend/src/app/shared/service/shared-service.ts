import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  serverUrl = environment.serverUrl;
  isDashboardComponent = true;
  searchData = '';
  constructor(
    private snackbar: MatSnackBar,
    private http: HttpClient,
    private router: Router,
  ) {}


  getSalesByFilter(searchText:any) {
    return this.http.get(`${this.serverUrl}getsalesbyfilter${searchText}`);
  }
  clearSearch() {
    this.searchData = '';
    this.router.navigate(['/admin/dashboard']).then(() => {
      return this.router.navigateByUrl('/admin/sales/saleslist');
    });
  }
  snackbarNotification(msg: any, action: any, config: any) {
    this.snackbar.open(msg, action, config);
  }
  getSalesList() {
    return this.http.get(`${this.serverUrl}getsales`);
  }

  viewPurchaseDetails() {
    return this.http.get<any>(`${this.serverUrl}purchaselist`);
  }
  unAuthorized() {
    this.router.navigateByUrl('/admin/login');
  }

  getPurchasesDropDown() {
    return this.http.get<any>(`${this.serverUrl}purchaselist${10}`);
  }
  getPurchasesDropDownByFilter(query: any) {
    return this.http.post<any>(`${this.serverUrl}purchaselistbyfilter`, {
      query,
    });
  }
  getSalesByPagination(limit: number, skipdata: number) {
    return this.http.post(`${this.serverUrl}getsalesbypagination${limit}`, {
      skipdata,
    });
  }
  epoch(date: Date) {
    // let newDate = new Date(date);
    return new Date(date).getTime();
  }

  findPurchase(carno:any){
    return this.http.get<any>(`${this.serverUrl}findvehicle/${carno}`)
  }
  findSales(carno:any){
  return this.http.get<any>(`${this.serverUrl}findsalebyvehicleno${carno}`)
  }

  viewVehicleDetails(carno:string){
    return this.http.get<any>(`${this.serverUrl}viewvehicledetails/${carno}`)
  }

}
