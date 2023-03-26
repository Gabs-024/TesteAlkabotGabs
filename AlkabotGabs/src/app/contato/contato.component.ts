import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contato } from '../models/contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  public formBuilder: FormBuilder;
  public formContato: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.formContato = formBuilder.group({ 
      Nome: ["", [Validators.required]],
      Email: ["", [Validators.required]],
      Telefone: ["", [Validators.required]],
      Mensagem: ["", [Validators.required]],
    })
  }

  ngOnInit(): void {
    console.log(this.formContato)
  }

  onSubmit(form:any) {
    console.log(form);
  }

  public enviar() {
    let dadosContato: Contato = this.formContato.value;
      console.log(dadosContato)
  }
}
