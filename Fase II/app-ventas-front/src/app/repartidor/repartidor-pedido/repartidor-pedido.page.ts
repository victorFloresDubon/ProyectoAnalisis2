import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from '../../services/pedido.service'
import { Pedido } from '../../modelo/Pedido';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../modelo/Producto';

@Component({
  selector: 'app-repartidor-pedido',
  templateUrl: './repartidor-pedido.page.html',
  styleUrls: ['./repartidor-pedido.page.scss'],
})
export class RepartidorPedidoPage implements OnInit {

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
    this.service.getPedidoRepartidor(+id_usuario)
    .subscribe(data=>{
      this.pedidos=data;
    })
    this.serviceProducto.getProductos()
      .subscribe(data=>{
        this.productos=data;
    })
  }

  verDetalle(pedido:Pedido):void{
    localStorage.setItem("id_pedido", pedido.id_pedido.toString());
    this.router.navigate(["repartidor-pedido-detalle"]);
  }

  Volver(){
    this.router.navigate(["repartidor-inicio"]);
  }

}
