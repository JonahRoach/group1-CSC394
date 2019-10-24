import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/posts'
import { User } from '../../models/user'
import {PostService } from '../../services/post.service';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user-service.service';


@Component({
  selector: 'discussionboard',
  templateUrl: './discussionboard.component.html',
  styleUrls: ['./discussionboard.component.css']
})
export class DiscussionboardComponent implements OnInit {

  posts:Post[] // an array of posts that will be student submitted posts
  users:User[]
  constructor(private postService: PostService, private userService: UserService) { }

  

  ngOnInit() {
    this.getPosts()
    this.getUsers()
  }

  getPosts(): void {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts)
  }
  getUsers(): void{
    this.userService.getUsers()
    .subscribe(users => this.users = users)
  }
 
 

 clearInput()
 {
   (<HTMLInputElement>document.getElementById('input1')).value = '';
 }

}
