import { Posts } from './../models/posts';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  todosPosts: Posts[] = [];
  comentarios: any[] = [];
  id: any;
  likes = 0;

  constructor(private post: PostService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.post.findAllPosts().subscribe((result: any) => {
      this.todosPosts = result;
      console.log(this.todosPosts);
    });

    this.id = this.route.snapshot.params['id'];

    this.post.getComments(this.id).subscribe((result: any) => {
      this.comentarios = result;
      console.log(this.comentarios);
    });
  }

  like() {
    this.likes++;
  }
}