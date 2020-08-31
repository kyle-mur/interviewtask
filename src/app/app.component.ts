import { Component, OnInit } from '@angular/core';
import { BlogService } from './services/blog.service';
import { BlogPost, BlogComment } from './model/blog.model';
import { Observable } from 'rxjs';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {
  constructor(private blogService: BlogService,
  private router: Router) {}

}
