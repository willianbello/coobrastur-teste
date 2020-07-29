import {Component, Input, OnInit} from '@angular/core';
import {BotaoAdicionar} from "../../../shared/models/BotaoAdicionar";
import {StorageService} from "../../../shared/services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

  @Input() botao: BotaoAdicionar = new BotaoAdicionar();

  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  deslogar() {
    this.storageService.deleteTokenUsuario();
    this.router.navigate(['/']);
  }

  adicionarCliente() {
    this.router.navigate(['registro-usuario']);
  }

}
