import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentReviewService {

constructor(private http:HttpClient) { }

  updateCommentReview(comment){
    return this.http.post<any>(environment.api + environment.paths.movieController.updatecommentraiting, comment);
  }

  addCommentReview(comment){
    return this.http.post<any>(environment.api + environment.paths.movieController.newComment, comment);
  }

  deleteCommentReview(commentId:number){
    return this.http.delete<any>(environment.api+environment.paths.movieController.deletecommentraiting + commentId);
  }
}
