import { Injectable } from '@angular/core';
import {LoginComponent} from "../../componentes/shared/login/login.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public dialog: MatDialog) { }

  public telaLogin(width = 'auto', backdropClass = 'cdk-overlay-backdrop'): void {
    const dialogRef = this.dialog.open(LoginComponent,
      { backdropClass: backdropClass,
              disableClose: true,
              width: width});

  }
}
