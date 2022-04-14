import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { DataSourceService } from 'src/app/services/data-source.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ILocation } from 'src/app/classes/ilocation';
import { StateService } from 'src/app/services/state.service';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit,AfterViewInit {
  constructor(private locationsService:DataSourceService, private stateService:StateService) { }

  public locations:MatTableDataSource<ILocation> = new MatTableDataSource<ILocation>();
  currentMode:string = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit() {
      this.locationsService.getLocations()
      .subscribe(
          data => this.locations.data = data
         // data = this.users.data = data
         
      );
      this.currentMode = this.stateService.currentMode;
  }
  rowClicked (row:ILocation){
    if(this.clickedRows.has(row)) {
      this.clickedRows.delete(row);
    } else {
      this.clickedRows.add(row);
    }
    this.stateService.locations = Array.from(this.clickedRows);
  }
  ngAfterViewInit() {
    this.locations.paginator = this.paginator;
    this.locations.sort = this.sort;
  }
  displayedColumns: string[] = ['id','name'];
  clickedRows = new Set<ILocation>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.locations.filter = filterValue.trim().toLowerCase();

    if (this.locations.paginator) {
      this.locations.paginator.firstPage();
    }
  }
  uploadEventHander($event: any) {
    //this.userName = $event;
    debugger;
    console.dir($event);
  }
}
