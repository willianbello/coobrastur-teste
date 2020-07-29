import {Endpoint} from "../models/Endpoint";

export class Endpoints {

  static endpoint: Endpoint;

  static getEndpointUsuarios(id?: number) {
    this.endpoint = new Endpoint();
    this.endpoint.post = 'users';
    this.endpoint.getList = 'users';
    this.endpoint.getId = 'users';
    this.endpoint.delete = `users/${id}`;
    this.endpoint.update = `users/${id}`;
    return this.endpoint;
  }

  static getEndpointRecurso() {
    this.endpoint = new Endpoint();
    this.endpoint.getList = 'unknown';
    this.endpoint.getId = 'unknown';
    return this.endpoint;
  }

  static getEndPointRegistro() {
    this.endpoint = new Endpoint();
    this.endpoint.post = 'register';
    return this.endpoint;
  }
}
