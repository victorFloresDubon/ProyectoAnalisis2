import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../modelo/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http:HttpClient) { }
//url del back api rest con sus respectivos metodos
  url='http://localhost:8080/pedido';

  getPedidos(){
    return this.http.get<Pedido[]>(this.url);
  }

  createPedido(pedido:Pedido){
    return this.http.post<Pedido>(this.url,pedido);
  }

  getPedidoId(id:number){
    return this.http.get<Pedido>(this.url+"/"+id);
  }

  getPedidoUsuario(id:number){
    return this.http.get<Pedido[]>(this.url+"/pedidosPorCliente/"+id);
  }

  getPedidoRepartidor(id:number){
    return this.http.get<Pedido[]>(this.url+"/pedidosPorRepartidor/"+id);
  }

  getPedidoVendedor(id:number){
    return this.http.get<Pedido[]>(this.url+"/pedidosPorVendedor/"+id);
  }

  updatePedido(pedido:Pedido){
    return this.http.put<Pedido>(this.url+"/"+pedido.id_pedido,pedido);
  }

  deletePedido(pedido:Pedido){
    return this.http.delete<Pedido>(this.url+"/"+pedido.id_pedido);
  }

}
