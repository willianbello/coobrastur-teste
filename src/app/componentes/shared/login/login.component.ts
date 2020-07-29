import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {FormularioGenericoService} from "../../../shared/generico/FormularioGenericoService";
import {HttpClient, HttpEvent, HttpEventType} from "@angular/common/http";
import {Endpoints} from "../../../shared/generico/Endpoints";
import {LoginRegistro} from "../../../shared/models/LoginRegistro";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StorageService} from "../../../shared/services/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends FormularioGenericoService implements OnInit {

  loginRegistro: LoginRegistro = new LoginRegistro();

  constructor(
    httpCliente: HttpClient,
    public dialogRef: MatDialogRef<LoginComponent>,
    private storageService: StorageService
  ) {
    super(httpCliente);
  }

  ngOnInit(): void {
    this.loginRegistro.email = 'eve.holt@reqres.in';
    this.loginRegistro.password = 'cityslickas';
  }
  cityslicka
  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.processando = true;
    this.post(Endpoints.getEndpointUsuarios().login, form.value)
      .subscribe((response: any) => {
        this.processando = false;
        this.storageService.setTokenUsuario(response.token);

      }, error => {
        this.processando = false;

      })
  }

}
