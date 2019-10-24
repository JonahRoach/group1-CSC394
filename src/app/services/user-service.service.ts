import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {User} from '../models/user'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL:string = "https://my-json-server.typicode.com/phr-nk/demo/users"
  constructor(private http:HttpClient) { }

   getUsers(): Observable<User[]>
  {
    return this.http.get<User[]>(this.userURL);
  }
   getUser(id:number): Observable<User>
  {
    const url = this.userURL +'/'+id;
    return this.http.get<User>(url);
  }
}
