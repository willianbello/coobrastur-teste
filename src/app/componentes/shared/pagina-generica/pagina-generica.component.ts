import {Component, Input, OnInit} from '@angular/core';
import {ParametrosGenericos} from "../../../shared/models/ParametrosGenericos";

@Component({
  selector: 'app-pagina-generica',
  templateUrl: './pagina-generica.component.html',
  styleUrls: ['./pagina-generica.component.scss']
})
export class PaginaGenericaComponent implements OnInit {

  @Input() parametros: ParametrosGenericos = new ParametrosGenericos();

  constructor() { }

  ngOnInit(): void {
  }

}
