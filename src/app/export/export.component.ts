import { element } from 'protractor';
import { ExportService } from './../shared/export.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import * as FileSaver from 'file-saver';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf'
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';
@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {
  //fileUrl;
  @ViewChild('content') content:ElementRef;
  constructor(private excelservice:ExportService, private sanitarise:DomSanitizer) { }

  ngOnInit() {
   
  
  }

  columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

  exportAsXLSX():void {
    this.excelservice.exportAsExcelFile(this.rowData, 'sampledata');
  }
//   downloadpdf(fileUrl){
//     //const data1 = "Hi this is PDF Format";
//     var data = document.getElementById('contentToConvert') ;
// html2canvas(data).then(canvas => {
//   var imgWidth = 100;
//   var pageHeight = 100;
//   var imgHeight = canvas.height * imgWidth / canvas.width;
//   var heightLeft = imgHeight;
//   const contentDataURL = canvas.toDataURL('image/png')
//   let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
//   var position = 0;
//   pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
//   pdf.save('MYPdf.pdf'); // Generated PDF
//   });
//   }
  //  const blob = new File([data],"sample.pdf", { type: 'application/pdf '});
  // FileSaver.saveAs(blob);
 // fileUrl = this.sanitarise.bypassSecurityTrustResourceUrl;
 // (window.URL.createObjectURL(blob))
  
 
}
