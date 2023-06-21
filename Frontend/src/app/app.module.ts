
import { MainlayoutComponent } from './main-layout/mainlayout.component';
import { NavbarModule } from './navbar/navbar.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { PurchaseModule } from './purchase/purchase.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { NotFoundModule } from './error/not-found.module';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptor/header/header.interceptor';
import { ErrorInterceptor } from './interceptor/error/error.interceptor';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent,MainlayoutComponent],
  imports: [
    MatSidenavModule,
    BrowserModule,
    AuthenticationModule,
    DashboardModule,
    PurchaseModule,
    NotFoundModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NavbarModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
