import { Injectable } from '@angular/core';
import { ILocation } from '../classes/ilocation';
import { IRole } from '../classes/irole';
import { IUser } from '../classes/user';
import { Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StateService {
  private Locations: ILocation[] = [];
  private Roles: IRole[] = [];
  private Users: IUser[] = [];

  constructor() { }

  // public getUsers(): any {
  //   return of(this.Users);
  //   // const studentsObservable = new Observable(observer => {
  //   //   observer.next(Array.from(this.Users));
  //   //   observer.complete();
  //   // });

  //   // return studentsObservable;
  // }


  private usersSource = new Subject<any>();
  usersObservable=this.usersSource.asObservable();

  private currMode:string = 'user';
  get currentMode(): string {
    return this.currMode;
  }
  set currentMode(value:string){
    this.currMode = value;
  }
  get users()
  {
    return this.Users;
  }
  set users(value)  //when we use dataService.filterBtGenre=...
  {
    this.Users=value;           //equal to the private variable
    this.usersSource.next(value) //say to Angular that something change
  }

  private locationsSource = new Subject<any>();
  locationsObservable=this.locationsSource.asObservable();

  get locations()
  {
    return this.Locations;
  }
  set locations(value)  //when we use dataService.filterBtGenre=...
  {
    this.Locations=value;           //equal to the private variable
    this.locationsSource.next(value) //say to Angular that something change
  }

  private rolesSource = new Subject<any>();
  rolesObservable=this.rolesSource.asObservable();

  get roles()
  {
    return this.Roles;
  }
  set roles(value)  //when we use dataService.filterBtGenre=...
  {
    this.Roles=value;           //equal to the private variable
    this.rolesSource.next(value) //say to Angular that something change
  }
}
