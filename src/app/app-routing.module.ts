import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from "./componentes/login-page/login-page.component";
import {ListaUsuariosComponent} from "./componentes/usuario/lista-usuarios/lista-usuarios.component";


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'lista-usuarios', component: ListaUsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
