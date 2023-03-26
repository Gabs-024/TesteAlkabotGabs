import { ContatoComponent } from './../contato/contato.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from '../shared/material/material.module';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
