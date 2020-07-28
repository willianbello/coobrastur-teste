import {HttpClient} from "@angular/common/http";
import {ParametrosGenericos} from "../models/ParametrosGenericos";
import {isNotNullOrUndefined} from "codelyzer/util/isNotNullOrUndefined";
import {Endpoints} from "./Endpoints";

export class FormularioGenericoService {

  processando: boolean = false;
  parametrosGenericos = new ParametrosGenericos();
  httpCliente: HttpClient;

  constructor(http: HttpClient) {
    this.httpCliente = http;
  }

  public salvar(objeto, endpoint) {
    if (!isNotNullOrUndefined(objeto) && !isNotNullOrUndefined(endpoint)) {
      return this.httpCliente.post(endpoint, objeto);
    }
  }

  public get(endpoint) {
    if (!isNotNullOrUndefined(endpoint)) {
      return this.httpCliente.get(endpoint);
    }
  }

  public update(objeto, endpoint) {
    if (!isNotNullOrUndefined(objeto) && !isNotNullOrUndefined(endpoint)) {
      return this.httpCliente.get(objeto, endpoint);
    }
  }

  public delete(endpoint) {
    if (!isNotNullOrUndefined(endpoint)) {
      return this.httpCliente.get(endpoint);
    }
  }

}
