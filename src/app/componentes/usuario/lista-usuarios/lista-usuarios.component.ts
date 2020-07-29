import { Component, OnInit } from '@angular/core';
import {FormularioGenericoService} from "../../../shared/generico/FormularioGenericoService";
import {HttpClient} from "@angular/common/http";
import {Endpoints} from "../../../shared/generico/Endpoints";
import {Paginacao} from "../../../shared/models/Paginacao";

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent extends FormularioGenericoService implements OnInit {

  paginacao: Paginacao = new Paginacao();

  constructor(http: HttpClient) {
    super(http);
    this.parametrosGenericos.titulo = 'Painel de clientes';
    this.parametrosGenericos.icone = 'face';
    this.parametrosGenericos.botaoAdicionar.botaoAdicionarVisibilidade = true;
    this.parametrosGenericos.botaoAdicionar.botaoAdicionarNome = 'NOVO CLIENTE';
    this.parametrosGenericos.botaoAdicionar.botaoAdicionarFuncao = ()=>{};
  }

  ngOnInit(): void {
    this.get(Endpoints.getEndpointUsuarios().getList)
      .subscribe((paginacao: Paginacao) => {
        this.paginacao = paginacao;
      })
  }

}
