import { Component, OnInit } from '@angular/core';
import {FormularioGenericoService} from "../../../shared/generico/FormularioGenericoService";
import {HttpClient} from "@angular/common/http";
import {Endpoints} from "../../../shared/generico/Endpoints";
import {Paginacao} from "../../../shared/models/Paginacao";
import {MatDialog} from "@angular/material/dialog";
import {UsuarioEditComponent} from "../usuario-edit/usuario-edit.component";
import {Usuario} from "../../../shared/models/Usuario";

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent extends FormularioGenericoService implements OnInit {

  paginacao: Paginacao = new Paginacao();

  constructor(
    http: HttpClient,
    public dialog: MatDialog
  ) {
    super(http);
    this.parametrosGenericos.titulo = 'Painel de clientes';
    this.parametrosGenericos.icone = 'face';
    this.parametrosGenericos.botaoAdicionar.botaoAdicionarVisibilidade = true;
    this.parametrosGenericos.botaoAdicionar.botaoAdicionarNome = 'NOVO CLIENTE';
    this.parametrosGenericos.botaoAdicionar.botaoAdicionarFuncao = ()=>{};
    this.parametrosGenericos.cabecalho = true;
  }

  ngOnInit(): void {
    this.get(Endpoints.getEndpointUsuarios().getList)
      .subscribe((paginacao: Paginacao) => {
        this.paginacao = paginacao;
      })
  }

  editar(usuario: Usuario) {
    this.dialog.open(UsuarioEditComponent, {  width: '80%', data: usuario });
  }

}
