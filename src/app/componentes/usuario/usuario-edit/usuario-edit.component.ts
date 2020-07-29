import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Usuario} from "../../../shared/models/Usuario";
import {FormularioGenericoService} from "../../../shared/generico/FormularioGenericoService";
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Endpoints} from "../../../shared/generico/Endpoints";


@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss']
})
export class UsuarioEditComponent extends FormularioGenericoService implements OnInit {

  usuario: Usuario;

  constructor(
    public dialogRef: MatDialogRef<UsuarioEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario,
    private httpClient: HttpClient
  ) {
    super(httpClient);
    this.usuario = new Usuario();
    if (this.data) {
      this.usuario.id = data.id;
      this.usuario.email = data.email;
      this.usuario.first_name = data.first_name;
      this.usuario.last_name = data.last_name;
      this.usuario.avatar = data.avatar;
    }
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.processando = true;
    this.post(Endpoints.getEndpointUsuarios(this.usuario.id).update, form.value)
      .subscribe(response => {

      });
  }

  fechar() {
    this.dialogRef.close();
  }

}
