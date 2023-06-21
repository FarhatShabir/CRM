import { LayoutComponent } from './layout/layout.component';
import { AddSellerComponent } from './components/add-seller/add-seller.component';
import { NgModule } from "@angular/core";
import{RouterModule,Routes} from '@angular/router'
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { AuthGuard } from "../authGuard/auth.guard";


const routes:Routes=[
  {path:"",data:{breadCrum:"Purchase"},component:LayoutComponent,children:[
    {path:"",redirectTo:"purchaselist",pathMatch:'full'},
    {path:'purchaselist',component:ProductsListComponent},
    {path:'addvehicle',data:{breadCrum:'Add Vehicle'},component:AddProductComponent,canDeactivate:[AuthGuard]},
    {path:'addseller',data:{breadCrum:'Add Seller'},component:AddSellerComponent,canDeactivate:[AuthGuard]},
   {path:'updatevehicle',data:{breadCrum:"Update Purchase"},component:AddProductComponent,canDeactivate:[AuthGuard]},
    {path:'updateseller',data:{breadCrum:"Update Seller"},component:AddSellerComponent,canDeactivate:[AuthGuard]}
  ]}

]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class PurchaseRoutingModule{

}
