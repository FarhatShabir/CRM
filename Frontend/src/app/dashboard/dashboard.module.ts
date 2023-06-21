import { NavbarModule } from './../navbar/navbar.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { TopwidgetComponent } from './components/main/topwidget/topwidget.component'
import { SalesbymonthComponent } from './components/main/salesbymonth/salesbymonth.component'
////////////////////////

import{NgxChartsModule} from '@swimlane/ngx-charts';
import { PurchasebymonthComponent } from './components/main/purchasebymonth/purchasebymonth.component'
import { ModuleModule } from '../custom-module/material-module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainComponent,
    TopwidgetComponent,
    SalesbymonthComponent,
    PurchasebymonthComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    NgxChartsModule,
    ModuleModule,
    DashboardRoutingModule,
    NavbarModule,
    SharedModule
  ],
})
export class DashboardModule { }
