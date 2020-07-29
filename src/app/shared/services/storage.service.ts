import { Injectable } from '@angular/core';
import {isNotNullOrUndefined} from "codelyzer/util/isNotNullOrUndefined";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setTokenUsuario(token: string) {
    if (isNotNullOrUndefined(token)) {
      localStorage.setItem('token', token);
    }
  }

  getTokenUsuario() {
    return localStorage.getItem('token');
  }
}
