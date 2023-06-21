import { RouterModule } from "@angular/router";
import{NgModule} from '@angular/core'
import {Routes} from '@angular/router'
import { LoginComponent } from "./components/login/login.component";
import { LayoutComponent } from "./layout/layout/layout.component";

const authRoutes: Routes=[
  {path:"",component:LayoutComponent}
]

@NgModule({
  imports:[RouterModule.forChild(authRoutes)],
  exports:[RouterModule],
})

export class AuthRoutingModule{
}
