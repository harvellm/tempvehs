import { IRole } from "./irole";

export class Role implements IRole {
    constructor(public id:string, public name:string){}
}
