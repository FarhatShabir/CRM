import { DashboardService } from './../../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topwidget',
  templateUrl: './topwidget.component.html',
  styleUrls: ['./topwidget.component.scss']
})
export class TopwidgetComponent implements OnInit {
  purchaseData:any=[]
  salesData:any=[]
  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getTotalPurchaseByDate().subscribe((res)=>{
      this.purchaseData=res.data
      this.topwidgetinfo[3].value=res.data.length
      this.calculateMonthPurchase()
    })
    this.dashboardService.getTotalSalesByDate().subscribe((res)=>{
      this.salesData=res.data
      this.topwidgetinfo[2].value=this.salesData.length;
      this.calculateMonthSales();
    })
  }

  topwidgetinfo=[
    {icon:"account_balance" ,name:'Month Sales', value:0},
    {icon:"assignment",name:"Month Purchase", value:0},
    {icon:"account_balance_wallet",name:"Total Sales",value:0},
    {icon:"add_shopping_cart",name:"Total Purchase", value:0}
  ]

  calculateMonthPurchase(){
    const today=new Date().getMonth()
    this.purchaseData.forEach((purchase:any)=>{
      const purchaseDate=new Date(purchase.purchase_date).getMonth()
      if(today===purchaseDate){
        this.topwidgetinfo[1].value+=1;
      }
    });
  }

  calculateMonthSales(){
    const today=new Date().getMonth()
    this.salesData.forEach((sale:any)=>{
      const soldDate=new Date(sale.solddate).getMonth()
      if(today===soldDate){
        this.topwidgetinfo[0].value+=1;
      }
    });
  }
}
