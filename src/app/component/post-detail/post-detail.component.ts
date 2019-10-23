import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/posts';
import {PostService } from '../../services/post.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() post:Post;
  public comments: Comment[]
  public Editor = ClassicEditor;
  public input:string;


  constructor(private postService: PostService, private route:ActivatedRoute,private location:Location) { }

  ngOnInit() {
    this.postService.getPost(+this.route.snapshot.paramMap.get('id')).subscribe(post => this.post = post);
  }
   getPost():void{

     const id = +this.route.snapshot.paramMap.get('id')
     console.log(id)
     this.postService.getPost(id).subscribe(post => this.post = post)
     console.log(this.postService.getPost(id).subscribe(post => this.post = post))
   }
}
