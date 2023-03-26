import { Component, OnInit } from '@angular/core';
import { AutorService } from '../services/autor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: any[] = [];
  detalhes: any[] = [];
  id: any;

  constructor(private user: AutorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user.findAllAutor().subscribe((result: any) => {
      this.usuarios = result;
      console.log(this.usuarios);
    });

    this.id = this.route.snapshot.params['id'];

    this.user.getDetail(this.id).subscribe((result: any) => {
      this.detalhes = result;
      console.log(this.detalhes);
    });
  }
}
