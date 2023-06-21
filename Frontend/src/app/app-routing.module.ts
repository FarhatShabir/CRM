import { MainlayoutComponent } from './main-layout/mainlayout.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authGuard/auth.guard'
import { NotFoundComponent } from './error/not-found.component';

const routes: Routes = [

  {path:"admin",data:{breadCrum:''},children:[
      {path:"",data:{breadCrum:''},component:MainlayoutComponent ,children:[
      {path:"purchase",data:{breadCrum:"Purchase"},loadChildren:()=>import('./purchase/purchase.module').then((m)=>m.PurchaseModule),canActivate:[AuthGuard]},
      {path:'dashboard',data:{breadCrum:"Dashboard"},loadChildren:()=>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule),canActivate:[AuthGuard]},
      {path:"sales",data:{breadCrum:"Sales"},loadChildren:()=>import("./sales/sales.module").then(mod=>mod.SalesModule),canActivate:[AuthGuard]},
      {path:'viewdetails',data:{breadCrum:"View Details"},loadChildren:()=>import("./shared/shared.module").then(m=>m.SharedModule),canActivate:[AuthGuard]}
    ]},
    {path:"login",loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule)},
  ]},
  {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
