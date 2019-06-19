import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import {Asistencia} from '../models/Asistencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  API_URI = 'http://localhost:3000/api';
  

  constructor(private http: HttpClient) { }


getAsis(){
  return this.http.get(`${this.API_URI}/usuarios/as`)
}

  getUsuarios() {
    return this.http.get(`${this.API_URI}/usuarios`);
  }

  getUsuario(id: string) {
    return this.http.get(`${this.API_URI}/usuarios/${id}`);
  }

  delete(id: string) {
    return this.http.delete(`${this.API_URI}/usuarios/${id}`);
  }

  save(usuario: Usuario) {
    return this.http.post(`${this.API_URI}/usuarios`, usuario);
  }


  update(id: string|number, updatedusu: Usuario): Observable<Usuario> {
    return this.http.put(`${this.API_URI}/usuarios/${id}`, updatedusu);
  }




}
