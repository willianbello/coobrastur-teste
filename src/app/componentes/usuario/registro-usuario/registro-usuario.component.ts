import { Component, OnInit } from '@angular/core';
import {FormularioGenericoService} from "../../../shared/generico/FormularioGenericoService";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Cliente} from "../../../shared/models/Cliente";
import {Location} from "@angular/common";
import {Endpoints} from "../../../shared/generico/Endpoints";
import {MensagemService} from "../../../shared/services/mensagem.service";

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent extends FormularioGenericoService implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(
    http: HttpClient,
    private location: Location,
    private mensagemService: MensagemService
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

    this.post(Endpoints.getEndpointUsuarios().post, form.value)
      .subscribe((cliente: Cliente) => {
        this.processando = false;
        this.mensagemService.sucesso('Cliente Cadastrado com Sucesso', 'fechar', 5000);
        form.reset();
      }, error => {
        this.mensagemService.geral('Erro',
          'Não foi possível registrar o usuário, verifique se os campos estão corretos');
      })
  }

  voltar() {
    this.location.back()
  }

}
