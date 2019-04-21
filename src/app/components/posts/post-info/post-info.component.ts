import { Component, OnInit, Input } from '@angular/core';
import { PostInfo } from '../../shared/models/Post-info';
import { PostService } from 'src/app/core/services/post.service';
import { Router } from '@angular/router';
import { CommentInfo } from '../../shared/models/Comment-Info';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {
  @Input() post: PostInfo;
  @Input() desc: string;
  comments: CommentInfo
  allPosts: PostInfo[];
  constructor(
    private postService: PostService,
    private  router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
   
    
  }

  
  isAuthorIsAdmin(post: Object) {
    if(this.authService.author === 'Admin'){
      return true;
    }
    return post['_acl']['creator'] === localStorage.getItem('userId');
  }

  onDeletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(() => {
       this.postService.getAll()
          .subscribe((data) => {
            this.allPosts = data;
            this.router.navigate(['/home']);
          });
      })
  }

  
}
