import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {StorageService} from "./storage.service";
import {environment} from "../../../environments/environment";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.storageService.getTokenUsuario();

    if (token) {
      let headers = new HttpHeaders();
      headers = headers.append('Authorization', `Bearer ${token}`);
      const requisicao = request.clone({
        headers
      });
      return next.handle(requisicao);
    }
    return next.handle(request);
  }
}
