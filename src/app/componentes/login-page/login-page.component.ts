import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../shared/services/login.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private loginservice: LoginService) {
    this.loginservice.telaLogin();
  }

  ngOnInit(): void {
    this.loginservice.telaLogin('450px');
  }

}
