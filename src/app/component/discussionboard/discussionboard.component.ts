import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/posts'
import {PostService } from '../../services/post.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'discussionboard',
  templateUrl: './discussionboard.component.html',
  styleUrls: ['./discussionboard.component.css']
})
export class DiscussionboardComponent implements OnInit {

  posts:Post[] // an array of posts that will be student submitted posts
  
  constructor(private postService: PostService) { }

  

  ngOnInit() {
    this.getPosts()
  }

  getPosts(): void {
    this.postService.getPosts()
    .subscribe(posts => this.posts = posts)
  }
 
 

 clearInput()
 {
   (<HTMLInputElement>document.getElementById('input1')).value = '';
 }

}
