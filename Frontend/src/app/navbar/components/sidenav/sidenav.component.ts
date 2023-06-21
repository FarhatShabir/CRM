import { SharedService } from 'src/app/shared/service/shared-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {


  username:any='';
  intial=""
  constructor(private sharedservice:SharedService) { }
  ngOnInit(): void {
    this.username=localStorage.getItem('user')
    this.intial=this.username.split(" ").map((n:any)=>n[0]).join('').toUpperCase();
  }

}
