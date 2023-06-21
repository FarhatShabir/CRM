
import { LoaderModule } from './../loader/loader.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ViewDetailsComponent } from './component/view-details/view-details.component';
import { ModuleModule } from '../custom-module/material-module';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    ViewDetailsComponent,
    BreadcrumbComponent
  ],
  imports: [
    ModuleModule,
    CommonModule,
    SharedRoutingModule,
    LoaderModule,
  ],
  exports:[
    BreadcrumbComponent
  ]
})
export class SharedModule { }
