import { Component, OnInit,Input } from '@angular/core';
import { Post } from 'src/app/models/posts';

@Component({
  selector: 'dpost',
  templateUrl: './dpost.component.html',
  styleUrls: ['./dpost.component.css']
})
export class DPostComponent implements OnInit {
  @Input() post: Post;
  Images = [ {id:1, Photo: '/assets/thumbs-up.png'},
              {id:2, Photo: '/assets/blue-thumb.png'}
           ]
  Image = this.Images[0]
  index = 1;

  constructor() { }

  ngOnInit() {
  }
  //set Dynamic classes
  setClasses()
  {
    let classes = {
      post:true
    }
    return classes;
  }
  ImageClick()
  {
    this.Image = this.Images[this.index]
    this.index++
    if (this.index > this.Images.length - 1)
    {
      this.index = 0
    }
  }
}
