import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExportComponent } from './export/export.component';
import {AgGridModule} from 'ag-grid-angular';
@NgModule({
  declarations: [
    AppComponent,
    ExportComponent
  ],
  imports: [
    BrowserModule,AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
