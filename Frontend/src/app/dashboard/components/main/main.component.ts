import { DashboardService } from './../../services/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private dashbordservice:DashboardService) { }

  totalPurchase:any;

  ngOnInit(): void {

  }

}
