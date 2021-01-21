import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { CommentReviewService } from 'src/app/Services/CommentReview.service';
import { UserDataService } from 'src/app/Services/UserData.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-raiting',
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.css']
})
export class RaitingComponent implements OnInit {
  @Input() comment;
  @Output() private ratingUpdated = new EventEmitter();
  @Output() private childComunicator = new EventEmitter();
  @Input() addComment: boolean;
  @Input() movieId;
  @Input() userData: UserDataService;

  addCommentForm: FormGroup;

  currentUser: number;
  isUpdated;
  isEditing: boolean;
  commentText: string;
  currentTextLength: number;
  isAdded: boolean;

  oldComment: string;
  oldRaiting: number;
  

  MAX_STARS=5;
  ratingsArray = [];
  decodedToken: {[key:string]: any};

  constructor(private commentService: CommentReviewService,) {
    this.isEditing=false;
   }

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.decodedToken = jwt_decode(localStorage.getItem('token'));
      this.currentUser = this.decodedToken.userId;
    }
    this.currentTextLength = 0;
    this.oldComment = this.comment.comment;
    this.oldRaiting = this.comment.raiting;
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
    let update = this.commentService.updateCommentReview(this.comment).subscribe(res => {console.log(res)}, (error) => {
    if(error.status === 200) {
      return;
    }
    else {
      console.log(error);
      }
    });
    this.isUpdated=false;
    this.messageParent('updateRaiting')
    
  }

  saveCommentRaiting(formInput): void{
    this.comment.comment = formInput;
    this.commentService.addCommentReview(this.comment).subscribe(res => res, (error) => {
      if(error.status === 200) {
        return;
      }
      else {
        console.log(error);
      }
    });
      this.messageParent(null)
  }

  messageParent(message){
    this.comment.user.username = this.decodedToken.userName;
    if(this.addComment){
      this.addComment = false
      let parentMessage = {
        comment: this.comment,
        closeAdd: !this.addComment
      };
    this.childComunicator.emit(parentMessage);
    } else if(message){
      this.childComunicator.emit(message);
    } 
  }

  calculateTextLength(length): void{
    this.currentTextLength = length;
    this.ratingUpdated.emit(this.currentTextLength)
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

  cancelEdit(){
    location.reload();
  }

  setIsEditing(){
    this.isEditing = !this.isEditing;
  }

  editCommentText(commentText){
    this.comment.comment = commentText;
    this.updateComment();
    this.setIsEditing();
  }

  deleteComment(){
    
    this.commentService.deleteCommentReview(this.decodedToken.userId, this.comment).subscribe(res => res, (error) =>{
      if(error.status === 200) {
        return;
      }
      else {
        console.log(error);
      }
    });
    this.messageParent('deleted');
  }
}
