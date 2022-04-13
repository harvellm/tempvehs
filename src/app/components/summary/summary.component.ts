import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ILocation } from 'src/app/classes/ilocation';
import { IRole } from 'src/app/classes/irole';
import { IUser } from 'src/app/classes/user';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit,AfterViewInit {
  users:IUser[] = [];
  locations:ILocation[] = [];
  roles:IRole[] = [];
  constructor(private stateService:StateService) {
 
    //this.users = Array.from(stateService.Users);
    //this.locations = Array.from(stateService.Locations);
    //this.roles = Array.from(stateService.Roles);
   }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const usersObservable = this.stateService.usersObservable;
    usersObservable.subscribe((usersData: IUser[]) => {
        console.log(`number of users ${usersData.length}`);
        this.users = usersData;
    });

    const locationsObservable = this.stateService.locationsObservable;
    locationsObservable.subscribe((locationsData: ILocation[]) => {
        console.log(`number of locations ${locationsData.length}`);
        this.locations = locationsData;
    });

    const rolesObservable = this.stateService.rolesObservable;
    rolesObservable.subscribe((rolesData: IRole[]) => {
        console.log(`number of roles ${rolesData.length}`);
        
        this.roles = rolesData;
    });
  }
  displayedColumnsUsers: string[] = ['id','first_name','last_name'];
  displayedColumnsLocations: string [] = ['id', 'name'];
  displayedColumnsRoles: string[] = ['id','name'];
}
