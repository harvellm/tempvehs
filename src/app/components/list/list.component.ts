import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { IUser } from 'src/app/classes/user';
import { DataSourceService } from 'src/app/services/data-source.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { StateService } from 'src/app/services/state.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit,AfterViewInit {
 
  constructor(private userService:DataSourceService, private stateService:StateService) { }

  public users:MatTableDataSource<IUser> = new MatTableDataSource<IUser>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
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
}
