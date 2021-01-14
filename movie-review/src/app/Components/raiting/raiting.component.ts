import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { CommentReviewService } from 'src/app/Services/CommentReview.service';

@Component({
  selector: 'app-raiting',
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.css']
})
export class RaitingComponent implements OnInit {
  @Input() comment;
  @Output() private ratingUpdated = new EventEmitter();
  @Input() addComment: boolean;
  @Input() movieId;

  addCommentForm: FormGroup;

  currentUser: number = Number.parseInt(sessionStorage.getItem('userId'));
  isUpdated;
  commentText: string;
  currentTextLength: number;
  

  MAX_STARS=5;
  ratingsArray = [];

  constructor(private commentService: CommentReviewService) { }

  ngOnInit() {
    this.currentTextLength = 0;
    if(this.addComment){
      this.comment = {
        "user": {
          "id": Number.parseInt(sessionStorage.getItem('userId'))
        },
        "raiting": 0,
        "movieid": Number.parseInt(this.movieId),
        "comment": ""
      }
    }
    this.isUpdated = false;
    for(let index = 0; index < this.MAX_STARS; index++){
      this.ratingsArray.push(index);
    }
  }

  updateRating(indexSelected): void{
    this.comment.raiting = indexSelected+1;
    this.ratingUpdated.emit(this.comment.raiting);
    this.isUpdated=true;
  }

  updateComment(): void{
    this.commentService.updateCommentReview(this.comment).subscribe(res => {console.log(res)}, (error) => {console.log(error)}).unsubscribe();
    this.isUpdated=false;
  }

  saveCommentRaiting(formInput): void{
    this.comment.comment = formInput;
    // let newComment = JSON.stringify(this.comment);
    this.commentService.addCommentReview(this.comment).subscribe(res => {console.log(res)}, (error) => {console.log(error)}).unsubscribe();
    this.addComment = false;
  }

  calculateTextLength(length): void{
    this.currentTextLength = length;
    this.ratingUpdated.emit(this.currentTextLength)
  }
}
