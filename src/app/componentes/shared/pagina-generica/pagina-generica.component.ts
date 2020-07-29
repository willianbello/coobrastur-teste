import {Component, Input, OnInit} from '@angular/core';
import {ParametrosGenericos} from "../../../shared/models/ParametrosGenericos";

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina-generica.component.html',
  styleUrls: ['./pagina-generica.component.scss']
})
export class PaginaGenericaComponent implements OnInit {

  @Input() parametros: ParametrosGenericos = new ParametrosGenericos();

  constructor() { }

  ngOnInit(): void {
    this.parametros.titulo = 'Painel de Clientes';
    this.parametros.icone = 'face';
    this.parametros.subtitulo = 'Novo Cliente';
    this.parametros.descricao = 'Informe os campos a seguir para cadastrar um novo cliente';
  }

}
