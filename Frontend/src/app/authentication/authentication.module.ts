import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { ModuleModule } from '../custom-module/material-module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoaderModule } from '../loader/loader.module';
import { LayoutComponent } from './layout/layout/layout.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [
    LoginComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
     ModuleModule,
     AuthRoutingModule,
     LoaderModule,
     NavbarModule
  ],
  providers: []
},
)
export class AuthenticationModule { }
