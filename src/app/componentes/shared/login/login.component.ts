import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {FormularioGenericoService} from "../../../shared/generico/FormularioGenericoService";
import {HttpClient} from "@angular/common/http";
import {Endpoints} from "../../../shared/generico/Endpoints";
import {LoginRegistro} from "../../../shared/models/LoginRegistro";
import {MatDialogRef} from "@angular/material/dialog";
import {StorageService} from "../../../shared/services/storage.service";
import {Router} from "@angular/router";
import {MensagemService} from "../../../shared/services/mensagem.service";

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
    private router: Router,
    private mensagemService: MensagemService
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
        this.dialogRef.close();
        this.mensagemService.sucesso('Você foi logado com sucesso', 'fechar', 5000);
        this.storageService.setTokenUsuario(response.token);
        window.location.reload();
      }, error => {
        this.processando = false;
        this.mensagemService.geral('Erro',
          'falha ao tentar realizar o login, verifique se o usuario e senha estão corretos');
      })
  }

}
