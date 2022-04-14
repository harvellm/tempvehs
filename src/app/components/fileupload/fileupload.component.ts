import { Component, OnInit,ElementRef, ViewChild, Output, EventEmitter  } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {

  constructor(private ngxCsvParser: NgxCsvParser){}

  @Output() uploadFileEvent = new EventEmitter<any>();

  //@ViewChild('UploadFileInput') uploadFileInput!: ElementRef;
  myfilename = 'Select File';
  header: boolean = true;
  ngOnInit(): void {
    
  }

  fileChangeEvent($event: any): void {

    const files = $event.srcElement.files;
    this.header = (this.header as unknown as string) === 'true' || this.header === true;

    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .pipe().subscribe((result:any) => {
       // console.log('Result', result);
        this.uploadFileEvent.emit(result);
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
  }
}
