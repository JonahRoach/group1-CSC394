import { Component, OnInit,Input } from '@angular/core';
import { Post } from 'src/app/models/posts';

@Component({
  selector: 'dpost',
  templateUrl: './dpost.component.html',
  styleUrls: ['./dpost.component.css']
})
export class DPostComponent implements OnInit {
  @Input() post: Post;

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
}
