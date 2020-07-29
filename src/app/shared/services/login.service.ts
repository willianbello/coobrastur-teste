import { Injectable } from '@angular/core';
import {LoginComponent} from "../../componentes/shared/login/login.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public dialog: MatDialog) { }

  public telaLogin(width?: string): void {
    const dialogRef = this.dialog.open(LoginComponent,
      { backdropClass: 'modalfundo-transparente',
              disableClose: true,
              width: width = 'auto'});

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog close');
    });
  }
}
