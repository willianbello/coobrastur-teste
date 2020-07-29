import { Component, OnInit } from '@angular/core';
import {FormularioGenericoService} from "../../../shared/generico/FormularioGenericoService";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Cliente} from "../../../shared/models/Cliente";
import {Location} from "@angular/common";

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent extends FormularioGenericoService implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(
    http: HttpClient,
    private location: Location
  ) {
    super(http);
    this.parametrosGenericos.cabecalho = true;
    this.parametrosGenericos.botaoAdicionar.botaoAdicionarVisibilidade = false;
    this.parametrosGenericos.titulo = 'Painel de clientes';
    this.parametrosGenericos.subtitulo = 'Novo cliente';
    this.parametrosGenericos.descricao = 'Informe os campos a seguir para cadastrar um novo cliente:';
    this.parametrosGenericos.icone = 'face';
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    this.processando = true;
  }

  voltar() {
    this.location.back()
  }

}
