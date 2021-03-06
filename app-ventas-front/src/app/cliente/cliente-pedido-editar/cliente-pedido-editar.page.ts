import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../modelo/Pedido';
import { PedidoService } from '../../services/pedido.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-pedido-editar',
  templateUrl: './cliente-pedido-editar.page.html',
  styleUrls: ['./cliente-pedido-editar.page.scss'],
})
export class ClientePedidoEditarPage implements OnInit {

  pedidos:Pedido[];
  modelPedido = new Pedido();

  constructor(
    private servicePedido: PedidoService, 
    private router:Router,
  ) { }

  ngOnInit() {
    this.Entrega();
  }

  Entrega(){
    let id_pedido=localStorage.getItem("id_pedido");
    this.servicePedido.getPedidoId(+id_pedido)
    .subscribe(data=>{
      this.modelPedido=data;
    })
  }

  Actualizar(pedido:Pedido){
    this.servicePedido.updatePedido(pedido)
    .subscribe(data=>{
      this.modelPedido=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["cliente-pedido"]);
    })
  }

  Volver(){
    this.router.navigate(["cliente-pedido"]);
  }

}
