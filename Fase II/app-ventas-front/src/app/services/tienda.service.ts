import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tienda } from '../modelo/Tienda';
import { CategoriaNegocio } from '../modelo/CategoriaNegocio';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8080/tienda';
  url_categoria_negocio='http://localhost:8080/categoria_negocio';

  getTiendas(){
    return this.http.get<Tienda[]>(this.url);
  }

  getCategoriaNegocios(){
    return this.http.get<CategoriaNegocio[]>(this.url_categoria_negocio);
  }

  createTienda(tienda:Tienda){
    return this.http.post<Tienda>(this.url,tienda);
  }

  getTiendaId(id:number){
    return this.http.get<Tienda>(this.url+"/"+id);
  }

  getTiendaUsuario(id:number){
    return this.http.get<Tienda[]>(this.url+"/buscarusuario/"+id);
  }

  getTiendaCategoria(id:number){
    return this.http.get<Tienda[]>(this.url+"/buscarcategoria/"+id);
  }

  updateTienda(tienda:Tienda){
    return this.http.put<Tienda>(this.url+"/"+tienda.id_tienda,tienda);
  }

  deleteTienda(tienda:Tienda){
    return this.http.delete<Tienda>(this.url+"/"+tienda.id_tienda);
  }

}
