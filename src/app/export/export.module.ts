import { SharedModule } from './../shared/shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,AgGridModule,SharedModule
  ],
  declarations: []
})
export class ExportModule { }
