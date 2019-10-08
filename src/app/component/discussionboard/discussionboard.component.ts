import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/posts'

@Component({
  selector: 'discussionboard',
  templateUrl: './discussionboard.component.html',
  styleUrls: ['./discussionboard.component.css']
})
export class DiscussionboardComponent implements OnInit {

  posts:Post[] = []; // an array of posts that will be student submitted posts

  constructor() { }

  ngOnInit() {
    this.posts = [
      {id: 0, title:"First post", author:"Frank Lenoci",content:"This is the first post",date: new Date()},
      {id: 1, title:"Second post", author:"Dude Guy",content:"This is the second post",date: new Date()}
    ]

     
    
  }
 
 

 clearInput()
 {
   (<HTMLInputElement>document.getElementById('input1')).value = '';
 }

}
