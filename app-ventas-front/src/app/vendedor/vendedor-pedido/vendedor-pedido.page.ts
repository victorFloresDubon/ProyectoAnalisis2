import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from '../../services/pedido.service'
import { Pedido } from '../../modelo/Pedido';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../modelo/Producto';

@Component({
  selector: 'app-vendedor-pedido',
  templateUrl: './vendedor-pedido.page.html',
  styleUrls: ['./vendedor-pedido.page.scss'],
})
export class VendedorPedidoPage implements OnInit {

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
    this.service.getPedidoVendedor(+id_usuario)
    .subscribe(data=>{
      this.pedidos=data;
    })
    this.serviceProducto.getProductos()
      .subscribe(data=>{
        this.productos=data;
    })
  }

  /*Editar(pedido:Pedido):void{
    localStorage.setItem("id_pedido", pedido.id_pedido.toString());
    this.router.navigate(["vendedor-pedido-editar"]);
  }*/

  verDetalle(pedido:Pedido):void{
    localStorage.setItem("id_pedido", pedido.id_pedido.toString());
    this.router.navigate(["vendedor-pedido-detalle"]);
  }

  Volver(){
    this.router.navigate(["vendedor-inicio"]);
  }

}
