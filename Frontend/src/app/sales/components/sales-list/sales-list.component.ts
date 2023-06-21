import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SharedService } from 'src/app/shared/service/shared-service';
import { SalesService } from '../../services/sales.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert/alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {
  salesList!: MatTableDataSource<any>;
  pageSize=10;
  displayedColumns = ["vehicle_no", "fullName", "sold_date", "phone_no","actions"];
  options:any=[]


  constructor(public sharedService: SharedService, private alertService: AlertService, public saleService: SalesService, public router: Router) {
   }
  ngOnInit(): void {
    this.sharedService.getSalesList().subscribe((res: any) => {
      if (res.data.length) {
      this.salesList = new MatTableDataSource(res.data);
      }
    }, err => {
      this.alertService.showError("Internal Server error", "Error");
      if (err.status === 401 || 403)
        this.sharedService.unAuthorized();
    });
  }
  @ViewChild("paginator") set paginator(matPaginator: MatPaginator) {
    if (matPaginator) {
      this.salesList.paginator = matPaginator;
    }
  }

  updateSale(id: any) {
    this.router.navigate(["/admin/sales/updatesale"], { queryParams: { id: id } });
  }
  deleteSale(sell_id: any) {
    Swal.fire({
      title: "Delete sale",
      text: "Are you sure to Delete this sale",
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonText: "Cancel",
      showConfirmButton: true,
      confirmButtonText: "Delete"
    }).then(result => {
      if (result.isConfirmed) {
        this.saleService.deleteSale(sell_id).subscribe((res: any) => {
          this.alertService.showSuccess(res.message, "Success");
          this.reloadComponet();
        }, err => this.alertService.showError(err.error.message, "Error"));
      } else if (result.isDismissed) {
        this.alertService.showInfo("Your sale is safe", "Not deleted");
      }
    }
    )

  }
  reloadComponet() {
    this.router.navigate(["admin/dashboard"]).then(() => {
      return this.router.navigateByUrl("/admin/sales/saleslist");
    });
  }

  applyFilter(searchText:any){
    if(searchText){
      this.sharedService.getSalesByFilter(searchText).subscribe((res:any)=>{
        let filterData=res.data;
        this.options=[]
        filterData.forEach((vehicle:any) => {
          this.options.push(vehicle.vehicle_no)
        });
      })
    }else{
      this.ngOnInit()
    }
  }

  onSearch(searchValue:string){
    if(searchValue){
      this.sharedService.getSalesByFilter(searchValue).subscribe((res:any)=>{
          this.salesList=new MatTableDataSource(res.data);
      })
    }
  }

  pageEvent(event: any) {
    if(event.pageSize>this.pageSize)
    {
      this.pageSize=event.pageSize;
      this.sharedService.getSalesByPagination(this.pageSize,this.salesList.data.length).subscribe((res: any) => {
        this.salesList=new MatTableDataSource([...this.salesList.data,...res.data])
      }, err => this.alertService.showError(err.message,"Error"));
    }else if(event.previousPageIndex<event.pageIndex){
      this.sharedService.getSalesByPagination(event.pageSize,this.salesList.data.length).subscribe((res: any) => {
        this.salesList=new MatTableDataSource([...this.salesList.data,...res.data])
      }, err => {
        this.alertService.showError(err.error.message,"Error")
      });
    }
  }

  viewSale(vehicleNo:string){
    this.router.navigate(['admin/viewdetails'],{queryParams:{q:'sales',carno:vehicleNo}})
  }
}
