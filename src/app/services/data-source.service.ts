import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../classes/user';
import { HttpClient } from '@angular/common/http';
import { ILocation } from '../classes/ilocation';
import { IRole } from '../classes/irole';
@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  private _userDataUrl: string = '../assets/UserData.json';
  private _locationDataUrl:string = '../assets/LocationData.json';
  private _roleDataUrl:string = '../assets/RoleData.json';
  constructor(private http: HttpClient) { }
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._userDataUrl);
  }
  getLocations(): Observable<ILocation[]> {
    return this.http.get<ILocation[]>(this._locationDataUrl);
  }
  getRoles(): Observable<IRole[]> {
    return this.http.get<IRole[]>(this._roleDataUrl);
  }
}
