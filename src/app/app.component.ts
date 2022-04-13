import { Component } from '@angular/core';

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

  toEdit() {
    this.editMode = true;
    this.userMode = false;
    this.roleMode= false;
    this.locationMode = false;
  }
  toUser() {
    this.editMode = false;
    this.userMode = true;
    this.roleMode= false;
    this.locationMode = false;
  }
  toRole() {
    this.editMode = false;
    this.userMode = false;
    this.roleMode= true;
    this.locationMode = false;
  }
  toLocation() {
    this.editMode = false;
    this.userMode = false;
    this.roleMode= false;
    this.locationMode = true;
  }
}
