import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatSelectModule } from '@angular/material/select';
import{ MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatSidenavModule} from '@angular/material/sidenav'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    FlexLayoutModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    //for dashboard
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,
    MatSnackBarModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSidenavModule
  ], exports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    FlexLayoutModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,
    MatSnackBarModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSidenavModule
      ]
})
export class ModuleModule { }
