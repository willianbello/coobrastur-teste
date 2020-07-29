import {Component, Input, OnInit} from '@angular/core';
import {Usuario} from "../../../shared/models/Usuario";

@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.scss']
})
export class UsuarioCardComponent implements OnInit {

  @Input() usuario: Usuario;

  constructor() { }

  ngOnInit(): void {
  }

}
