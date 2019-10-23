import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {Post} from '../models/posts'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl:string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http:HttpClient) { }
  

  getPosts(): Observable<Post[]>
  {
    return this.http.get<Post[]>(this.postUrl);
  }
  getPost(id:number): Observable<Post>{
    const url = this.postUrl +'/'+id;
    return this.http.get<Post>(url);
  }
  addPost(newPost:Post):Observable<Post>{
    return this.http.post<Post>(this.postUrl,newPost,httpOptions);
  }
}
