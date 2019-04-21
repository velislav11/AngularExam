import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentInfo } from '../../shared/models/Comment-Info';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-comment-info',
  templateUrl: './comment-info.component.html',
  styleUrls: ['./comment-info.component.css']
})
export class CommentInfoComponent implements OnInit {
  @Input() commentInfo: CommentInfo;
  @Output() deleteCommentEmitter = new EventEmitter<string>();
  constructor(
    private authService:AuthService,
  ) { }

  ngOnInit() {
  }

  deleteComment(id: string) {
    
    this.deleteCommentEmitter.emit(id)
  }

  

  isAuthor(commentInfo: Object) {
    if(this.authService.author === 'Admin'){
      return true;
    }
    return commentInfo['_acl']['creator'] === localStorage.getItem('userId');
  }
}
