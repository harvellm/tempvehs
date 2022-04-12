import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { DataSourceService } from 'src/app/services/data-source.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { IRole} from 'src/app/classes/irole';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit,AfterViewInit {

  constructor(private locationsService:DataSourceService) { }

  public roles:MatTableDataSource<IRole> = new MatTableDataSource<IRole>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit() {
      this.locationsService.getLocations()
      .subscribe(
          data => this.roles.data = data
         // data = this.users.data = data
         
      );
  }
  ngAfterViewInit() {
    this.roles.paginator = this.paginator;
  }
  displayedColumns: string[] = ['id','name'];
  clickedRows = new Set<IRole>();

}
