import { LoaderService } from './../../../loader/service/loader.service';
import { SharedService } from 'src/app/shared/service/shared-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit,OnDestroy {

  constructor(private activatedrouter:ActivatedRoute,
   private sharedservice:SharedService,
   private router:Router,
   public loaderservice:LoaderService) { }
  queryFrom:string="";
  carNo:string=""
  details:any={};

  showSpinner:boolean=false;

  ngOnInit(): void {
    this.activatedrouter.queryParams.subscribe((prams)=>{
      this.carNo=prams['carno'];
      this.queryFrom=prams['q']
      this.getPurchaseDetails()
    })
  }

  getPurchaseDetails(){
    if(this.queryFrom=='purchase'){
      this.showSpinner=true
      this.sharedservice.findPurchase(this.carNo).subscribe((res)=>{
        this.details=res.data;
        this.showSpinner=false;
      })
    }else if(this.queryFrom=='sales'){
      this.showSpinner=true
      this.sharedservice.findSales(this.carNo).subscribe((res)=>{
        this.details=res.data;
        this.details.purchaseAgrement=res.data.agreement
        this.details.registration=res.data.bill
        this.details.aadhar_card=res.data.aadhar_card
        this.details.pan_card=res.data.pan_card
        this.showSpinner=false
      })
      this.sharedservice.viewVehicleDetails(this.carNo).subscribe((res)=>{
        Object.assign(this.details,res.data)
      })
  }
  }
  onBack(){
    if(this.queryFrom=='purchase'){
      this.router.navigateByUrl('admin/purchase')
    }else{
      this.router.navigateByUrl('admin/sales')
    }
  }

  ngOnDestroy(): void {
  this.details=null;
  }
}
