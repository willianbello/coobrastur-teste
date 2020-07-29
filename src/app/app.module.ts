import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {SharedModule} from "./shared/shared.module";
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { LoginComponent } from './componentes/shared/login/login.component';
import { CabecalhoComponent } from './componentes/shared/cabecalho/cabecalho.component';
import { PaginaGenericaComponent } from './componentes/shared/pagina-generica/pagina-generica.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginComponent,
    CabecalhoComponent,
    PaginaGenericaComponent
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
