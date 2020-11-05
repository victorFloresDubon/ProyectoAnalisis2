import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from '../../services/pedido.service'
import { Pedido } from '../../modelo/Pedido';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../modelo/Usuario';

@Component({
  selector: 'app-cliente-producto-agregar',
  templateUrl: './cliente-producto-agregar.page.html',
  styleUrls: ['./cliente-producto-agregar.page.scss'],
})
export class ClienteProductoAgregarPage implements OnInit {

  pedidos:Pedido[];
  modelPedido = new Pedido();
  usuarios:Usuario[];
  modelUsuario = new Usuario();

  constructor(
    private servicePedido: PedidoService, 
    private router:Router,
    private serviceUsuario: UsuarioService
  ) { }

  ngOnInit() {
    this.Detallar();
  }

  Detallar(){
    this.serviceUsuario.getUsuarioRepartidores()
    .subscribe(data=>{
      this.usuarios=data;
    })
  }

  Guardar(pedido:Pedido){
    let id_tienda=localStorage.getItem("id_tienda");
    let id_producto=localStorage.getItem("id_producto");
    let id_usuario=localStorage.getItem("id_usuario");
    pedido.id_tienda = +id_tienda;
    pedido.id_producto = +id_producto;
    pedido.id_usuario = +id_usuario;
    this.servicePedido.createPedido(pedido)
    .subscribe(data=>{
      this.router.navigate(["cliente-pedido"]);
    })
  }

  Volver(){
    this.router.navigate(["cliente-producto-detalle"]);
  }

}
