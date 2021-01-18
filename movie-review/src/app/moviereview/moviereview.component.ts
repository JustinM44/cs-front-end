import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../Services/UserData.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-moviereview',
  templateUrl: './moviereview.component.html',
  styleUrls: ['./moviereview.component.css']
})
export class MoviereviewComponent implements OnInit {
  // userData: UserDataService;
  movieList = [];
  constructor(private http: HttpClient, public userData: UserDataService) {}

  async ngOnInit() {
    if(sessionStorage.getItem('userId')){
      this.userData.setUserId(Number.parseInt(sessionStorage.getItem('userId')));
      this.userData.setUserName(sessionStorage.getItem('userName'));
      this.userData.setUserRole(sessionStorage.getItem('userRole'));
    }
    console.log('userId: ', this.userData.getUserId())
    this.http.get<any>(environment.api+environment.paths.movieController.movieList).subscribe(res => { 
      console.log(res);
      this.movieList = res;
      console.log(this.movieList)
    }, error => console.log(error));

      console.log(this.movieList)
    
  }

  passData(){
      this.userData.setUserId(Number.parseInt(sessionStorage.getItem('userId')));
      this.userData.setUserName(sessionStorage.getItem('userName'));
      this.userData.setUserRole(sessionStorage.getItem('userRole'));
  }

  openMovieDetails(movie:any) {
    
  }

}
