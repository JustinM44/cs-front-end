import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
public userName: string;
public userId: number;
public userRole: string;

constructor() {
 }

getUserName(): string{
  return this.userName;
}

setUserName(name: string): void{
  this.userName = name;
}

getUserId(): number{
  return this.userId;
}
setUserId(userId: number):void{
  this.userId = userId;
}

getUserRole(): string{
  return this.userRole;
}
setUserRole(role: string){
  this.userRole = role;
}

}
