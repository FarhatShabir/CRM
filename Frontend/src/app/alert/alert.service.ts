import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2/src/sweetalert2.js'
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastr:ToastrService) { }

  showSuccess(message:any, title:any){
    this.toastr.success(message,title,{timeOut:3000,closeButton:true})
}

showError(message:any, title:any){
    this.toastr.error(message, title,{timeOut:3000,closeButton:true})
}

showInfo(message:any, title:any){
  this.toastr.info(message, title,{timeOut:3000,closeButton:true})
}

async confirmation(title:any,text:any,icon:any){
 const exit=await Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  })
  if(exit.isConfirmed)
  return true;
  return false;
}

}
