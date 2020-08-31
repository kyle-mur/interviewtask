import { Component, OnInit, Input} from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { BlogPost, BlogComment } from '../../../model/blog.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'blog-comment',
  templateUrl: './comment.component.html'
})


export class CommentComponent implements OnInit{
    constructor(private blogService: BlogService) {}

    @Input() comment: any;

    ngOnInit() {
    }
}
