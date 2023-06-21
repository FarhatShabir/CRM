import { LoaderModule } from './../loader/loader.module';
import { NavbarModule } from './../navbar/navbar.module';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ModuleModule } from '../custom-module/material-module';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { AddSellerComponent } from './components/add-seller/add-seller.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AddProductComponent,
    ProductsListComponent,
    AddSellerComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ModuleModule,
    MatRadioModule,
    FormsModule,
    PurchaseRoutingModule,
    NavbarModule,LoaderModule,
    SharedModule
  ]
})
export class PurchaseModule { }
