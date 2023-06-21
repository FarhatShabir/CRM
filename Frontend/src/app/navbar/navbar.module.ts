import { ModuleModule } from '../custom-module/material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    ModuleModule
  ],
  exports:[HeaderComponent,FooterComponent,SidenavComponent]
})
export class NavbarModule { }
