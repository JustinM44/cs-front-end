import { Component } from '@angular/core';
import {RouterModule, Router} from '@angular/router'

import { UserDataService } from './Services/UserData.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-review';
  isLoggedIn = false;
  constructor(private router: Router, public userData:UserDataService){}
  ngOninit():void {
    
  }

  logout(){
    localStorage.clear();
    this.userData.setUserId(null);
    this.userData.setUserName(null);
    this.userData.setUserRole(null);
    this.router.navigate(['']);
  }
}
