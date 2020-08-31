import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogComment, BlogPost } from '../model/blog.model';

@Injectable()
export class BlogService {
  constructor(
    private http: HttpClient
  ){}

  private apiUrl = 'http://localhost:4200';

  fetchPosts(): Observable<Object> {
    const query = `${this.apiUrl}`+'/posts?_sort=publish_date&_order=desc';
    return this.http.get(query);
  }

  fetchComments(): Observable<Object> {
    const query = `${this.apiUrl}`+'/comments?_sort=date&_order=desc';
    return this.http.get(query);
  }

  fetchPostById(postId: string): Observable<Object> {
    const query = `${this.apiUrl}` + '/posts/?id=' + postId;
    return this.http.get(query);
  }

  fetchCommentById(postId: string): Observable<Object> {
    const query = `${this.apiUrl}` + '/comments/?postId=' + postId;
    return this.http.get(query);
  }

  postComment(params): void {
    this.http.post(`${this.apiUrl}/posts/${params.postId}/comments`,
      params).subscribe((res)=>{console.log("comment posted", res)})
  }

  postBlogEntry(entry: BlogPost): Observable<Object> {
    return this.http.post(`${this.apiUrl}/posts`, entry);
  }
}
