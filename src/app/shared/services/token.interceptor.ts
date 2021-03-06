import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {StorageService} from "./storage.service";
import {environment} from "../../../environments/environment";
import {LoginService} from "./login.service";
import {MensagemService} from "./mensagem.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private storageService: StorageService,
    private loginservice: LoginService,
    private mensagemService: MensagemService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.storageService.getTokenUsuario();
    let urlFinal = '';

    try {
      urlFinal = request.url.substring(22);
    } catch (e) {
      urlFinal = '';
    }

    if (token) {
      let headers = new HttpHeaders();
      headers = headers.append('Authorization', `Bearer ${token}`);
      const requisicao = request.clone({
        headers
      });
      return next.handle(requisicao);

    } else if(urlFinal !== 'login') {

      this.storageService.deleteTokenUsuario();
      this.loginservice.telaLogin('auto', '');
      this.mensagemService.geral('Erro',
        'Você não esta logado. Entre com login e senha para acessar a página');

      return EMPTY;
    }
    return next.handle(request);
  }
}
