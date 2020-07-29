import {HttpClient} from "@angular/common/http";
import {ParametrosGenericos} from "../models/ParametrosGenericos";
import {isNotNullOrUndefined} from "codelyzer/util/isNotNullOrUndefined";
import {environment} from "../../../environments/environment";

export class FormularioGenericoService {

  processando: boolean = false;
  parametrosGenericos = new ParametrosGenericos();
  httpCliente: HttpClient;

  constructor(http: HttpClient) {
    this.httpCliente = http;
  }

  public login(endpoint, objeto: any) {
    if (isNotNullOrUndefined(objeto) && isNotNullOrUndefined(endpoint)) {
      return this.httpCliente.post(`${environment.REQRES_API}/${endpoint}`, objeto);
    }
  }

  public post(endpoint, objeto: any) {
    if (isNotNullOrUndefined(objeto) && isNotNullOrUndefined(endpoint)) {
      return this.httpCliente.post(`${environment.REQRES_API}/${endpoint}`, objeto);
    }
  }

  public get(endpoint) {
    if (isNotNullOrUndefined(endpoint)) {
      return this.httpCliente.get(`${environment.REQRES_API}/${endpoint}`);
    }
  }

  public update(endpoint, objeto: any) {
    if (isNotNullOrUndefined(objeto) && isNotNullOrUndefined(endpoint)) {
      return this.httpCliente.put(`${environment.REQRES_API}/${endpoint}`, objeto);
    }
  }

  public delete(endpoint) {
    if (isNotNullOrUndefined(endpoint)) {
      return this.httpCliente.get(`${environment.REQRES_API}/${endpoint}`);
    }
  }

}
