import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  
  data:any;
  id: any;

  constructor(private route: ActivatedRoute, private user: AutorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDetail();
  }

  getDetail(){
    this.user.getDetail(this.id).subscribe(data => {
      this.data = data;
      console.log(this.data)
    })
  }

}
