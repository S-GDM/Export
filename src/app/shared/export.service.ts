import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import {DomSanitizer} from '@angular/platform-browser';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root'
})
export class ExportService {
fileUrl;
  constructor(private sanitarise:DomSanitizer) { }

  
  public exportAsExcelFile(json: any[], excelFileName: string  ): void {
     
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    
  
    console.log('worksheet',worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  // const excelBuffer: any = XLSXStyle.write(workbook, { bookType: 'xlsx', type: 'buffer' });     
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

 

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  downloadpdf(data){
   // const data = "Hi this is PDF Format";
    const blob = new Blob([data], { type: 'application/pdf' });
  // FileSaver.saveAs(blob,data, "testData.pdf");
  this.fileUrl = this.sanitarise.bypassSecurityTrustResourceUrl;
  (window.URL.createObjectURL(blob))
  }
  
}
