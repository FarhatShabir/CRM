import { deactivateGuard } from './../../../authGuard/auth.guard';

import { AlertService } from 'src/app/alert/alert.service';
import { PurchaseService } from './../../services/purchase.service';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { SellerModel } from '../../models/seller.model';

@Component({
  selector: 'app-add-seller',
  templateUrl: './add-seller.component.html',
  styleUrls: ['./add-seller.component.scss']
})
export class AddSellerComponent implements OnInit,deactivateGuard {
  sellerDetails!:FormGroup;
  changesSaved=false;
  sellerDocuments:any={}
  buttonToggle=false;
  constructor(private fb:FormBuilder, private router:Router,
    private purchaseService:PurchaseService,
    private alertservice:AlertService,
    ) { }
  ngOnInit(): void {
    this.sellerDetails = this.fb.group<SellerModel>({
      seller_name: ["",[Validators.required,Validators.pattern('^[a-zA-Z][ a-zA-Z]{2,}')]],
      email: ["",[Validators.required,Validators.email]],
      phone_no: ["",[Validators.required,Validators.minLength(10),Validators.pattern('^[0-9]{10}')]],
      address: ["",[Validators.required,Validators.pattern('^[a-zA-Z][ a-zA-Z]{2,}')]],
      postal_code: ['',[Validators.required,Validators.minLength(6),Validators.pattern('^[0-9]{6}')]],
      purchase_date: ["",[Validators.required]],
      aadhar_card:["",[Validators.required]],
      pan_card:["",[Validators.required]],
    });

    if(this.purchaseService.isUpdate){
      this.purchaseService.allDetails.subscribe((res)=>{
        this.buttonToggle=!this.buttonToggle;
        this.sellerDetails.patchValue(res);
        this.sellerDetails.patchValue({purchase_date:new Date(res.purchase_date).toISOString().slice(0, 10)})
        this.sellerDocuments.aadhar_card=res.aadhar_card;
        this.sellerDocuments.pan_card=res.pan_card;
      })
    }
  }

  onSubmit(){
    if(this.sellerDetails.valid){
        let allDetails="";
        this.purchaseService.vehicleDetails.subscribe((res)=>{
          allDetails=res.value
        })
        Object.assign(allDetails,this.sellerDetails.value);

      if(this.purchaseService.isUpdate){
        let carNo="";
        this.purchaseService.allDetails.subscribe((res)=>{
          carNo=res.vehicle_no
        })
        this.purchaseService.updatePurchase(carNo,allDetails).subscribe((res)=>{
          this.alertservice.showSuccess(res.message,"Done")
          this.changesSaved=true;
          this.router.navigateByUrl('admin/purchase')
        })
      }else{
        this.purchaseService.addPurchaseDetails(allDetails).subscribe((res)=>{
          this.alertservice.showSuccess(res.message,"Created")
          this.changesSaved=true;
          this.router.navigateByUrl('admin/purchase/purchaselist')
        })
      }
    }
}

  upload(event:any,name:string){
    const file=event.target.files[0]
    if(file.size>100000){
      Swal.fire('Error',"Image Size Should Be Less than 100kb")
      return
    }
    const reader=new FileReader();
    reader.readAsDataURL(file)
    reader.addEventListener("load",()=>{
      if(name==='aadhar'){
        this.sellerDetails.patchValue({aadhar_card:reader.result as string})
        this.sellerDocuments.aadhar_card=reader.result as string
      }else if(name==='pancard'){
        this.sellerDetails.patchValue({pan_card:reader.result as string})
        this.sellerDocuments.pan_card=reader.result as string
      }
    })
    }

    canExit() {
      if (!this.changesSaved) {
        return this.alertservice.confirmation('Are you sure?',"You won't be able to revert this!",'warning',)
      }
      return true;
    }

  onBack(){
    this.changesSaved=true
    this.purchaseService.isBack=true;
    if(this.purchaseService.isUpdate){
   this.router.navigateByUrl('admin/purchase/updatevehicle')
    }else{
      this.router.navigateByUrl('admin/purchase/addvehicle')
    }
  }
}
