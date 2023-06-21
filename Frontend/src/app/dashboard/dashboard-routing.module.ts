import { MainComponent } from './components/main/main.component';
import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { LayoutComponent } from './layout/layout.component';

const routes:Routes=[
  {path:'',data:{breadCrum:"Main"},component:LayoutComponent,children:[{
    path:'',data:{breadCrum:''},component:MainComponent ,
  }]}
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class DashboardRoutingModule{}
