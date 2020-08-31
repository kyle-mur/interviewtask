import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { BlogPost, BlogComment } from '../model/blog.model';
import { Observable } from 'rxjs';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private blogService: BlogService,
  private router: Router) {}

  public blogEntries: Observable<Object>;
  public title: string = 'Blog';

  ngOnInit() {
    this.blogEntries = this.blogService.fetchPosts()

    console.log("this", this)
  }
}
