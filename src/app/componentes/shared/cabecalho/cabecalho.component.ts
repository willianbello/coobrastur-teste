import {Component, Input, OnInit} from '@angular/core';
import {BotaoAdicionar} from "../../../shared/models/BotaoAdicionar";

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

  @Input() botao: BotaoAdicionar = new BotaoAdicionar();

  constructor() { }

  ngOnInit(): void {
  }

}
