import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { DataSourceService } from 'src/app/services/data-source.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ILocation } from 'src/app/classes/ilocation';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit,AfterViewInit {
  constructor(private locationsService:DataSourceService) { }

  public locations:MatTableDataSource<ILocation> = new MatTableDataSource<ILocation>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit() {
      this.locationsService.getLocations()
      .subscribe(
          data => this.locations.data = data
         // data = this.users.data = data
         
      );
  }
  ngAfterViewInit() {
    this.locations.paginator = this.paginator;
  }
  displayedColumns: string[] = ['id','name'];
  clickedRows = new Set<ILocation>();
}
