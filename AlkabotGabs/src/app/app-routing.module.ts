import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ComentariosComponent } from './blog/comentarios/comentarios.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { DetalhesComponent } from './usuarios/detalhes/detalhes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "posts",
    component: BlogComponent
  },
  {
    path: "posts/:id/comments",
    component: ComentariosComponent
  },
  {
    path: "contato",
    component: ContatoComponent
  },
  {
    path: "usuario",
    component: UsuariosComponent
  },
  {
    path: "usuario/:id",
    component: DetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
