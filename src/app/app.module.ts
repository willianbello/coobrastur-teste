import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {SharedModule} from "./shared/shared.module";

import { ListaUsuariosComponent } from './componentes/usuario/lista-usuarios/lista-usuarios.component';
import { RegistroUsuarioComponent } from './componentes/usuario/registro-usuario/registro-usuario.component';
import {LoginPageComponent} from "./componentes/login-page/login-page.component";
import {LoginComponent} from "./componentes/shared/login/login.component";
import { UsuarioCardComponent } from './componentes/usuario/usuario-card/usuario-card.component';
import { UsuarioEditComponent } from './componentes/usuario/usuario-edit/usuario-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginComponent,
    ListaUsuariosComponent,
    RegistroUsuarioComponent,
    UsuarioCardComponent,
    UsuarioEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
