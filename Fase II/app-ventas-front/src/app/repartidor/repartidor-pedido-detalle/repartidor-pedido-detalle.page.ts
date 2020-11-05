import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from '../../services/pedido.service'
import { Pedido } from '../../modelo/Pedido';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../modelo/Producto';
import { TiendaService } from '../../services/tienda.service';
import { Tienda } from '../../modelo/Tienda';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../modelo/Usuario';

@Component({
  selector: 'app-repartidor-pedido-detalle',
  templateUrl: './repartidor-pedido-detalle.page.html',
  styleUrls: ['./repartidor-pedido-detalle.page.scss'],
})
export class RepartidorPedidoDetallePage implements OnInit {

  productos:Producto[];
  modelProducto = new Producto();
  modelTienda = new Tienda();
  tiendas:Tienda[];
  pedidos:Pedido[];
  modelPedido = new Pedido();
  usuarios:Usuario[];
  modelUsuario = new Usuario();

  constructor(
    private servicePedido: PedidoService, 
    private router:Router,
    private serviceTienda: TiendaService,
    private serviceProducto: ProductoService,
    private serviceUsuario: UsuarioService
  ) { }

  ngOnInit(): void {
    this.Detallar();
  }

  Detallar(){
    let id_pedido=localStorage.getItem("id_pedido");
    this.servicePedido.getPedidoId(+id_pedido)
    .subscribe(data=>{
      this.modelPedido=data;
      this.serviceTienda.getTiendaId(this.modelPedido.id_tienda)
      .subscribe(data=>{
        this.modelTienda=data;
      })
      this.serviceProducto.getProductoId(this.modelPedido.id_producto)
      .subscribe(data=>{
        this.modelProducto=data;
      })
      this.serviceUsuario.getUsuarioId(this.modelPedido.id_usuario_repartidor)
      .subscribe(data=>{
        this.modelUsuario=data;
      })
    })
  }

  Entregar(pedido:Pedido){
    this.router.navigate(["repartidor-pedido-entregar"]);
  }

  Volver(){
    this.router.navigate(["repartidor-pedido"]);
  }

}
