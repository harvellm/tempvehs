import { Component } from '@angular/core';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  editMode:boolean = false;
  userMode:boolean = true;
  roleMode:boolean = false;
  locationMode:boolean = false;
  constructor(private stateService:StateService){
    stateService.currentMode = 'user';
  }
  toEdit() {
    this.editMode = true;
    this.userMode = false;
    this.roleMode= false;
    this.locationMode = false;
    this.stateService.currentMode = 'edit';
  }
  toUser() {
    this.editMode = false;
    this.userMode = true;
    this.roleMode= false;
    this.locationMode = false;
    this.stateService.currentMode = 'user';
  }
  toRole() {
    this.editMode = false;
    this.userMode = false;
    this.roleMode= true;
    this.locationMode = false;
    this.stateService.currentMode = 'role';
  }
  toLocation() {
    this.editMode = false;
    this.userMode = false;
    this.roleMode= false;
    this.locationMode = true;
    this.stateService.currentMode = 'location'
;  }
}
