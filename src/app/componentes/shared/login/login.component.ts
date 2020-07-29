import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {FormularioGenericoService} from "../../../shared/generico/FormularioGenericoService";
import {HttpClient} from "@angular/common/http";
import {Endpoints} from "../../../shared/generico/Endpoints";
import {LoginRegistro} from "../../../shared/models/LoginRegistro";
import {MatDialogRef} from "@angular/material/dialog";
import {StorageService} from "../../../shared/services/storage.service";
import {Router} from "@angular/router";

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
    private storageService: StorageService,
    private router: Router
  ) {
    super(httpCliente);
    if (storageService.getTokenUsuario()) {
      this.router.navigate(['/lista-usuarios']);
      this.dialogRef.close();
    }
  }

  ngOnInit(): void {
    this.loginRegistro.email = 'eve.holt@reqres.in';
    this.loginRegistro.password = 'cityslickas';
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.processando = true;
    this.post(Endpoints.getEndpointUsuarios().login, form.value)
      .subscribe((response: any) => {
        this.processando = false;
        this.storageService.setTokenUsuario(response.token);
        this.dialogRef.close();
        window.location.reload();
      }, error => {
        this.processando = false;

      })
  }

}
