import { Component, OnInit } from '@angular/core';
import {FormularioGenericoService} from "../../shared/generico/FormularioGenericoService";
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {LoginService} from "../../shared/services/login.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private loginservice: LoginService) {
  }

  ngOnInit(): void {
    this.loginservice.telaLogin();
  }

}
