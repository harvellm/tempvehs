import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  editMode:boolean = true;
  userMode:boolean = false;
  roleMode:boolean = false;
  locationMode:boolean = false;
}
