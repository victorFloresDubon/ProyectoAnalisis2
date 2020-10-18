import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8080/usuario';

  getUsuarios(){
    return this.http.get<Usuario[]>(this.url);
  }

  createUsuario(usuario:Usuario){
    return this.http.post<Usuario>(this.url,usuario);
  }

  getUsuarioId(id:number){
    return this.http.get<Usuario>(this.url+"/"+id);
  }

  updateUsuario(usuario:Usuario){
    return this.http.put<Usuario>(this.url+"/"+usuario.id_usuario,usuario);
  }

  deleteUsuario(usuario:Usuario){
    return this.http.delete<Usuario>(this.url+"/"+usuario.id_usuario);
  }
}
