
import { LoaderService } from './../../../loader/service/loader.service';
import { PurchaseService } from './../../services/purchase.service';
import { AlertService } from 'src/app/alert/alert.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'src/app/shared/service/shared-service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent implements OnInit {

  @ViewChild("paginator") set paginator(value: MatPaginator) {
    if (this.purchaseList) {
      this.purchaseList.paginator = value;
    }
  }

  constructor(public sharedService: SharedService,private purchaseService:PurchaseService,
    private router:Router,private alertservice:AlertService,public loaderservice:LoaderService) {
     }
  purchaseList!:MatTableDataSource<any>;


  options:any=[]
  showSearchResult=false;
  filterData:any;
  displayedColumns = ["vehicle_no","companyName","car_name" ,"seller_name", "purchase_date","actions"]
  length=0;

  ngOnInit(): void {
    this.purchaseService.isUpdate=false;
    this.sharedService.viewPurchaseDetails().subscribe(res=>{
        this.purchaseList=new MatTableDataSource(res.data);
        this.length=this.purchaseList.data.length;
    })
  }

  onPurchaseDelete(carNo:any){
    Swal.fire({
      title:'Delete Vehicle',
      text:`Are you sure to delete this Vehicle ${carNo}`,
      showCloseButton:true,
        showCancelButton:true,
        cancelButtonText:"Cancel",
        showConfirmButton:true,
        confirmButtonText:"Delete"
    }).then(result=>{
      if(result.isConfirmed){
        this.loaderservice.showSpinner=!this.loaderservice.showSpinner
        this.purchaseService.deletePurchase(carNo).subscribe((res)=>{
          this.loaderservice.showSpinner=!this.loaderservice.showSpinner
          this.alertservice.showSuccess(res.message,"success")
          this.ngOnInit()
        })
      }else if(result.isDismissed){
        this.alertservice.showInfo("Vehicle Not Deleted","Done")
      }
    })
   }

   onPurchaseAdd(){
    this.router.navigateByUrl('admin/purchase/addvehicle')
   }

   onUpdatePurchase(carNo:any){
    this.purchaseService.isUpdate=true;
    this.router.navigate(['admin/purchase/updatevehicle'],{queryParams:{carno:carNo}})
   }

   applyFilter(searchText:string){
    if(searchText.length){
      this.purchaseService.getVehicleNumber(searchText)
      .subscribe((res)=>{
        this.options=[]
      this.filterData=res.data;
      this.filterData.forEach((item:any)=>{
        this.options.push(item.vehicle_no)
      })
      })
    }else{
      this.onPageChange(true)
    }
   }

   onSearch(searchtext:string){
    if(searchtext.length){
      this.purchaseService.findPurchase(searchtext).subscribe((res)=>{
        if(res.data){
          let vehcile=new Array(res.data)
          this.purchaseList=new MatTableDataSource(vehcile);
        }else{
       this.ngOnInit();
        }
      })
    }
   }

   onPageChange(event:any){
    let pageIndex=event.pageIndex|0
    let pageSize=event.pageSize|10
    this.purchaseService.getPurchaseByPage(pageIndex,pageSize).subscribe((res)=>{
      this.purchaseList=res.data
    })
   }

   onViewPurchase(carNo:String){
    this.router.navigate(['admin/viewdetails'],{queryParams:{q:'purchase',carno:carNo}})
   }
}
