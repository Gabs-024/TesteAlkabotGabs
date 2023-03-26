import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentarios } from 'src/app/models/comentarios';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {

  public comentarios: Comentarios[] = [];

  data:any;
  id: any;

  constructor(private route: ActivatedRoute, private post: PostService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getComments();

  }

  getComments(){
    this.post.getComments(this.id).subscribe(data => {
      this.data = data;
      console.log(this.data)
    })
  }

}
