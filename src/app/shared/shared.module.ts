import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FlexLayoutModule} from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {CabecalhoComponent} from "../componentes/shared/cabecalho/cabecalho.component";
import {PaginaGenericaComponent} from "../componentes/shared/pagina-generica/pagina-generica.component";
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    CabecalhoComponent,
    PaginaGenericaComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CabecalhoComponent,
    PaginaGenericaComponent,
  ]
})
export class SharedModule { }
