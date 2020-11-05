import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service'
import { Producto } from '../../modelo/Producto';

@Component({
  selector: 'app-cliente-producto',
  templateUrl: './cliente-producto.page.html',
  styleUrls: ['./cliente-producto.page.scss'],
})
export class ClienteProductoPage implements OnInit {

  productos:Producto[];
  modelProducto = new Producto();

  constructor(
    private serviceProducto: ProductoService, 
    private router:Router, 
  ) { }

  ngOnInit(){
    let id_tienda=localStorage.getItem("id_tienda");
    this.serviceProducto.getProductoTienda(+id_tienda)
    .subscribe(data=>{
      this.productos=data;
    });
  }

  verDetalle(producto:Producto):void{
    localStorage.setItem("id_producto", producto.id_producto.toString());
    this.router.navigate(["cliente-producto-detalle"]);
  }

  Volver(){
    this.router.navigate(["cliente-pedido-agregar"]);
  }

}
