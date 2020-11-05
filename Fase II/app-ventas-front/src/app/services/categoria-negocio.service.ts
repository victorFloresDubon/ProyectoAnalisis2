import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaNegocio } from '../modelo/CategoriaNegocio';

@Injectable({
  providedIn: 'root'
})
export class CategoriaNegocioService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8080/CategoriaNegocio';

  getCategoriaNegocios(){
    return this.http.get<CategoriaNegocio[]>(this.url);
  }

  createCategoriaNegocio(categorianegocio:CategoriaNegocio){
    return this.http.post<CategoriaNegocio>(this.url,categorianegocio);
  }

  getCategoriaNegocioId(id:number){
    return this.http.get<CategoriaNegocio>(this.url+"/"+id);
  }

  updateCategoriaNegocio(categorianegocio:CategoriaNegocio){
    return this.http.put<CategoriaNegocio>(this.url+"/"+categorianegocio.id_categoria,categorianegocio);
  }

  deleteCategoriaNegocio(categorianegocio:CategoriaNegocio){
    return this.http.delete<CategoriaNegocio>(this.url+"/"+categorianegocio.id_categoria);
  }

}
