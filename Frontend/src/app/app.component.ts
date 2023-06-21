import { Component } from '@angular/core';
import { SharedService } from './shared/service/shared-service';
import {ToastrService} from "ngx-toastr"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public sharedService: SharedService,private _tsr:ToastrService){

  }
}

