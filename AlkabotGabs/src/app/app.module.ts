import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterModule } from './footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DetalhesComponent } from './usuarios/detalhes/detalhes.component';
import { ComentariosComponent } from './blog/comentarios/comentarios.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    UsuariosComponent,
    DetalhesComponent,
    ComentariosComponent,
    HomeComponent,
    ContatoComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NavbarModule,
    FooterModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
