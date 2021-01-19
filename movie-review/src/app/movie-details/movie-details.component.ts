import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from 'events';
import { environment } from 'src/environments/environment';
import { UserDataService } from '../Services/UserData.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  
  movieId: number;
  movieDetails;
  AddComment: boolean;
  isLoading: boolean;
  newComment;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, public userData:UserDataService) {}

  ngOnInit() {
    this.setData();
    this.AddComment = false;
    this.movieId = this.activatedRoute.snapshot.params.movieId;
    this.http.get<any>(environment.api+environment.paths.movieController.getMovie+'/'+this.movieId).subscribe(res => {
      this.movieDetails = res;
      console.log(res)
    });
  }

  setData(){
    if(!this.userData.userId && sessionStorage.getItem('userId')){
      this.userData.setUserId(Number.parseInt(sessionStorage.getItem('userId')));
      this.userData.setUserName(sessionStorage.getItem('userName'));
      this.userData.setUserRole(sessionStorage.getItem("userRole"));
    }
  }

  addComment(){
    this.AddComment = true;
    if(this.addComment){
      this.newComment = {
        "user": {
          "id": this.userData.getUserId()
        },
        "raiting": 0,
        "movieid": this.movieId,
        "comment": ""
      };
    }
  }

  commentAdded(result){
    console.log(result)
    if(result.closeAdd){
      this.AddComment = !result
      this.movieDetails.comments.push(result.comment);
    }
    
  }
}
