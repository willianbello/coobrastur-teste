import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {FormularioGenericoService} from "../../../shared/generico/FormularioGenericoService";
import {HttpClient, HttpEvent, HttpEventType} from "@angular/common/http";
import {Endpoints} from "../../../shared/generico/Endpoints";
import {LoginRegistro} from "../../../shared/models/LoginRegistro";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormularioGenericoService implements OnInit {

  login: LoginRegistro = new LoginRegistro();

  constructor(httpCliente: HttpClient,
              public dialogRef: MatDialogRef<LoginComponent>) {
    super(httpCliente);
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.invalid);
    if (form.invalid) return;

    this.processando = true;
    this.post(form.value, Endpoints.getEndpointUsuarios().post)
      .subscribe((httpEvent: HttpEvent<any>) => {
        if (httpEvent.type === HttpEventType.Response && httpEvent.status === 200) {
          this.processando = false;
          // exibe mensagem de logado com sucesso
        } else {
          this.processando = false;
          // exibe erro
        }
      }, error => {
        this.processando = false;
        // exibe erro
      })
  }

}
