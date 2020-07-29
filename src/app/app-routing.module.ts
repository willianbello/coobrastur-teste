import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from "./componentes/login-page/login-page.component";
import {PaginaGenericaComponent} from "./componentes/shared/pagina-generica/pagina-generica.component";


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'adicionar-usuario', component: PaginaGenericaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
