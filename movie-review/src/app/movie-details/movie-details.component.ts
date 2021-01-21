import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from 'events';
import jwtDecode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { UserDataService } from '../Services/UserData.service';
import jwt_decode from 'jwt-decode';

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
  decodedToken: {[key:string]: any};

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, public userData:UserDataService) {
  }

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.decodedToken = jwt_decode(localStorage.getItem('token'));
    }
    
    this.AddComment = false;
    this.movieId = this.activatedRoute.snapshot.params.movieId;
    this.http.get<any>(environment.api+environment.paths.movieController.getMovie+'/'+this.movieId).subscribe(res => {
      this.movieDetails = res;
      console.log(res)
    });
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

  commentChanged(result, index){
    if(result === 'updateRaiting'){
      this.http.post<any>(environment.api + environment.paths.movieController.updateoverallraiting, this.movieDetails).subscribe(res => this.movieDetails = res, (error) => {
        if(error.status === 200)
        {
          return;
        } else {
          console.log(error);
        }
      });
    } else if (result === 'deleted') {
      this.movieDetails.comments.splice(index, 1);
      this.http.post<any>(environment.api + environment.paths.movieController.updateoverallraiting, this.movieDetails).subscribe(res => this.movieDetails = res, (error) => {
        if(error.status === 200)
        {
          return;
        } else {
          console.log(error);
        }
      });
    }
  }

  commentAdded(result){
    console.log(result)
    if(result.closeAdd){
      this.AddComment = !result
      this.movieDetails.comments.push(result.comment);
      this.http.post<any>(environment.api + environment.paths.movieController.updateoverallraiting, this.movieDetails).subscribe(res => this.movieDetails = res, (error) => {
        if(error.status === 200)
        {
          return;
        } else {
          console.log(error);
        }
      })
    }
    
  }
}
