import { Component, OnInit, Inject } from '@angular/core';
import * as XLSX from 'xlsx';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2';
type AOA = any[][];
@Component({
  selector: 'app-reallowexcel',
  templateUrl: './reallowexcel.component.html',
  styleUrls: ['./reallowexcel.component.css']
})
export class ReallowexcelComponent implements OnInit {
  ErrorShow: boolean = true;
  Error: any = [];
  displayMaximizable: boolean = false;
  data: AOA = [];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';
  file: any;
  arrayBuffer: any;
  filelist: any;
  constructor() { }

  ngOnInit(): void {
  }
  onFileChange(evt: any) {
    console.log('this.data');
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    console.log('data');
    reader.onload = (e: any) => {
      console.log('data-1');
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      console.log(this.data);
    };
    if (this.Error.length != 0) {
      this.ErrorShow = false;
    }
    reader.readAsBinaryString(target.files[0]);
  }


  export(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
}