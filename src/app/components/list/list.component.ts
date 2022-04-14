import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { IUser } from 'src/app/classes/user';
import { DataSourceService } from 'src/app/services/data-source.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { StateService } from 'src/app/services/state.service';
import { MatSort } from '@angular/material/sort';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit,AfterViewInit {
 
  constructor(private userService:DataSourceService, private stateService:StateService, private ngxCsvParser: NgxCsvParser) { }
  currentMode: string = '';
  public users:MatTableDataSource<IUser> = new MatTableDataSource<IUser>();

  
  csvRecords: any[] = [];
  header: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<IUser>;
  ngOnInit() {
      this.userService.getUsers()
      .subscribe(
          data => this.users.data = data
         // data = this.users.data = data
         
      );
      this.currentMode = this.stateService.currentMode;
  }
  rowClicked (row:any){
    if(this.clickedRows.has(row)) {
      this.clickedRows.delete(row);
    } else {
      this.clickedRows.add(row);
    }
    this.stateService.users = Array.from(this.clickedRows);
  }
  ngAfterViewInit() {
    this.users.paginator = this.paginator;
    this.users.sort = this.sort;
  }
  displayedColumns: string[] = ['id','first_name','last_name','email','random_buzzword'];
  clickedRows:Set<IUser> = new Set<IUser>();
  //new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.users.filter = filterValue.trim().toLowerCase();

    if (this.users.paginator) {
      this.users.paginator.firstPage();
    }
  }
  fileChangeListener($event: any): void {

    const files = $event.srcElement.files;
    this.header = (this.header as unknown as string) === 'true' || this.header === true;

    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .pipe().subscribe((result) => {
        console.log('Result', result);
        //this.csvRecords = result;
        
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
  }
  uploadEventHander($event: any) {
    //this.userName = $event;
    console.dir($event);
  }

}
