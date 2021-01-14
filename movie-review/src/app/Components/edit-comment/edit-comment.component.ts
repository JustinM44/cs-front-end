import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.scss']
})
export class EditCommentComponent implements OnInit {
  @Input() comment

  constructor() { }

  ngOnInit() {
  }

  updateComment(input:string){
    
  }

}
