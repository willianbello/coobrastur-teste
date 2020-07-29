import { Injectable } from '@angular/core';

import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {MatDialog} from "@angular/material/dialog";
import {MensagemComponent} from "../../componentes/shared/mensagem/mensagem.component";

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  public sucesso(mensagem, acao, tempo) {
    this.snackBar.open(mensagem, acao, {
      duration: tempo,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  public geral(titulo: string, mensagem: string): void {
    const dialogRef = this.dialog.open(MensagemComponent, {
      data: {titulo, mensagem}, width: '80%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('dialog close');
    });
  }
}
