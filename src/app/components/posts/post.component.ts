import { Component, OnInit, Input} from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { BlogPost, BlogComment } from '../../model/blog.model';
import { Observable } from 'rxjs';
import {
  Validators
} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit{
    id: string;

    constructor(private route: ActivatedRoute,
      private blogService: BlogService) {
      route.params.subscribe(params => { this.id = params['id']; });
    }
    public post: any = {};
    public comments: Observable<Object>
    ngOnInit() {
        this.blogService.fetchPostById(this.id)
        .subscribe((post) => {
            this.post = post[0];
            this.comments = this.blogService.fetchCommentById(this.id)
        });
    }

    onSubmit(value) {
      let date = new Date();
      let published_date = date.getUTCFullYear() + '-'+
        date.getMonth() +'-'+date.getDate();
      this.blogService.postComment({
        postId: parseInt(this.post.id),
        date: published_date,
        user: 'guest',
        content: value.comment,
        parent_id: null
      })
    }
}
