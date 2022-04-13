import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { IUser } from 'src/app/classes/user';
import { DataSourceService } from 'src/app/services/data-source.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { StateService } from 'src/app/services/state.service';
import { Util } from 'src/app/classes/util';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit,AfterViewInit {
 
  constructor(private userService:DataSourceService, private stateService:StateService) { }

  public users:MatTableDataSource<IUser> = new MatTableDataSource<IUser>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit() {
      this.userService.getUsers()
      .subscribe(
          data => this.users.data = data
         // data = this.users.data = data
         
      );
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
  }
  displayedColumns: string[] = ['id','first_name','last_name','email','random_buzzword'];
  clickedRows:Set<IUser> = new Set<IUser>();
  //new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
}
