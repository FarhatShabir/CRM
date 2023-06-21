import { DashboardService } from './../../../services/dashboard.service';
import { SharedService } from 'src/app/shared/service/shared-service';
import { Component, OnInit,Input } from '@angular/core';
import { FlexStyleBuilder } from '@angular/flex-layout';

@Component({
  selector: 'app-purchasebymonth',
  templateUrl: './purchasebymonth.component.html',
  styleUrls: ['./purchasebymonth.component.scss']
})
export class PurchasebymonthComponent implements OnInit {

  constructor(private dashboardservice:DashboardService) { }
  totalPurchase:any=[]
  month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
  value=[0,0,0,0,0,0,0,0,0,0,0,0]
  purchase:any;
  ngOnInit(): void {
    this.dashboardservice.getTotalPurchaseByDate().subscribe((res)=>{
      this.purchase=res.data;
      this.calculateGraphData();
    })
  }

  calculateGraphData(){
    let purchases:any=[]
    let value=[]
    this.purchase.forEach((purchase:any) => {
      const purchaseMonth=new Date(purchase.purchase_date).getMonth()
      this.value[purchaseMonth]+=1
    });
    this.month.forEach((month,index)=>{
      purchases.push({name:month,value:this.value[index]})
    })
    this.totalPurchase=[{
      name:"Total Purchase",
      series:purchases
    }]
  }

  yAxisFormat(val : any) {
    if (val % 1 > 0)
      return "";

    return val ;
 }

}
