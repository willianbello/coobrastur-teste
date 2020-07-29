import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Usuario} from "../../../shared/models/Usuario";

@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.scss']
})
export class UsuarioCardComponent implements OnInit {

  @Input() usuario: Usuario;
  @Output() editar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  abrirEdicao() {
    this.editar.emit(this.usuario);
  }

}
