import { Component, OnInit,Input } from '@angular/core';
import { Post } from 'src/app/models/posts';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user-service.service';
import { getDefaultService } from 'selenium-webdriver/chrome';

@Component({
  selector: 'dpost',
  templateUrl: './dpost.component.html',
  styleUrls: ['./dpost.component.css']
})
export class DPostComponent implements OnInit {
  @Input() post: Post;
  user:User
  
  Images = [ {id:1, Photo: '/assets/thumbs-up.png'},
              {id:2, Photo: '/assets/blue-thumb.png'}
           ]
  Image = this.Images[0]
  index = 1;

  constructor(private http:HttpClient,private userService: UserService) { }

  ngOnInit() {
    this.getUser(this.post.id)
  }
  //set Dynamic classes
  setClasses()
  {
    let classes = {
      post:true
    }
    return classes;
  }
  getUser(id:number):void
  {
    this.userService.getUser(id).subscribe(user => this.user = user)
  }
  ImageClick()
  {
    this.Image = this.Images[this.index]
    this.index++
    this.post.numLikes++
    console.log(this.post.numLikes)
    if (this.index > this.Images.length - 1)
    {
      this.index = 0
      this.post.numLikes--
      
    }
  }
}
