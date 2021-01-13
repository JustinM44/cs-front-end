import { Component } from '@angular/core';
import {RouterModule, Router} from '@angular/router'
import { UserDataService } from './Services/UserData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-review';
  constructor(public userData: UserDataService){}
  ngOninit():void {

  }

  logout(){
    sessionStorage.clear();
    location.reload();
  }
}
