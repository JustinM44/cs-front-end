import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from 'events';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  
  movieId: number;
  movieDetails;
  AddComment: boolean;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.AddComment = false;
    this.movieId = this.activatedRoute.snapshot.params.movieId;
    this.http.get<any>(environment.api+environment.paths.movieController.getMovie+'/'+this.movieId).subscribe(res => {
      this.movieDetails = res;
    });
  }

  getTextColor(comment){
    if(comment.raiting > 3){
      return 'gold';
    } else if (comment.raiting <= 3 && comment.raiting > 1){
      return "green";
    } else {
      return "red";
    }
  }

  getRaitingText(comment){
    if(comment.raiting > 3){
      
      return 'Great';
    } else if (comment.raiting <= 3 && comment.raiting > 1){
      return "Okay";
    } else {
      return "Poor";
    }
  }

  addComment(){
    this.AddComment = true;
  }
}
