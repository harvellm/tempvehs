import { AfterViewInit, Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ILocation } from 'src/app/classes/ilocation';
import { IUser } from 'src/app/classes/user';
import { IRole } from 'src/app/classes/irole';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit, AfterViewInit {
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  users:IUser[] = [];
  locations:ILocation[] = [];
  roles:IRole[] = [];

  constructor(private _formBuilder: FormBuilder, private stateService:StateService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
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

}
