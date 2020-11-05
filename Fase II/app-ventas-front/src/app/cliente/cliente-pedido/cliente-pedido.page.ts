import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from '../../services/pedido.service'
import { Pedido } from '../../modelo/Pedido';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../modelo/Producto';

@Component({
  selector: 'app-cliente-pedido',
  templateUrl: './cliente-pedido.page.html',
  styleUrls: ['./cliente-pedido.page.scss'],
})
export class ClientePedidoPage implements OnInit {

  productos:Producto[];
  modelProducto = new Producto();
  pedidos:Pedido[];
  modelPedido = new Pedido();

  constructor(
    private service: PedidoService, 
    private router:Router,
    private serviceProducto: ProductoService,
  ) { }

  ngOnInit(){
    let id_usuario=localStorage.getItem("id_usuario");
    this.service.getPedidoUsuario(+id_usuario)
    .subscribe(data=>{
      this.pedidos=data;
    })
    this.serviceProducto.getProductos()
      .subscribe(data=>{
        this.productos=data;
    })
  }

  nuevoPedido() {
    this.router.navigate(["cliente-pedido-agregar"]);
  }

  Borrar(pedido:Pedido){
    this.service.deletePedido(pedido)
    .subscribe(data=>{
      this.pedidos=this.pedidos.filter(p=>p!==pedido);
      this.router.navigate(["cliente-pedido"]);
    })
  }

  Editar(pedido:Pedido):void{
    localStorage.setItem("id_pedido", pedido.id_pedido.toString());
    this.router.navigate(["cliente-pedido-editar"]);
  }

  verDetalle(pedido:Pedido):void{
    localStorage.setItem("id_pedido", pedido.id_pedido.toString());
    this.router.navigate(["cliente-pedido-detalle"]);
  }

  Volver(){
    this.router.navigate(["cliente-inicio"]);
  }

}
