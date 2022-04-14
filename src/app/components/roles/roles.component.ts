import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { DataSourceService } from 'src/app/services/data-source.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { IRole} from 'src/app/classes/irole';
import { StateService } from 'src/app/services/state.service';
import { MatSort } from '@angular/material/sort';
import { Role } from 'src/app/classes/roles';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit,AfterViewInit {

  constructor(private locationsService:DataSourceService, private stateService:StateService) { }
  currentMode: string = '';
  public roles:MatTableDataSource<IRole> = new MatTableDataSource<IRole>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<IRole>;
  ngOnInit() {
      this.locationsService.getRoles()
      .subscribe(
          data => this.roles.data = data
         // data = this.users.data = data
      );
      this.currentMode = this.stateService.currentMode;
      
      
  }
  rowClicked (row:IRole){
    if(this.clickedRows.has(row)) {
      this.clickedRows.delete(row);
    } else {
      this.clickedRows.add(row);
    }
    this.stateService.roles = Array.from(this.clickedRows);
  }
  ngAfterViewInit() {
    this.roles.paginator = this.paginator;
    this.roles.sort = this.sort;
    this.clickedRows.add(new Role('1','Legal Assistant'));
    this.table.renderRows();
  }
  displayedColumns: string[] = ['id','name'];
  clickedRows = new Set<IRole>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.roles.filter = filterValue.trim().toLowerCase();

    if (this.roles.paginator) {
      this.roles.paginator.firstPage();
    }
  }
  uploadEventHander($event: any) {
    //this.userName = $event;
    console.dir($event);
  }

}
