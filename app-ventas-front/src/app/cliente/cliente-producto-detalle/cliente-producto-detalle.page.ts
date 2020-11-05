import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../modelo/Producto';
import { Router } from '@angular/router';
import { TiendaService } from '../../services/tienda.service';
import { Tienda } from '../../modelo/Tienda';

@Component({
  selector: 'app-cliente-producto-detalle',
  templateUrl: './cliente-producto-detalle.page.html',
  styleUrls: ['./cliente-producto-detalle.page.scss'],
})
export class ClienteProductoDetallePage implements OnInit {

  productos:Producto[];
  modelProducto = new Producto();
  modelTienda = new Tienda();
  tiendas:Tienda[];

  constructor(
    private router:Router, 
    private serviceTienda: TiendaService,
    private serviceProducto: ProductoService
  ) { }

  ngOnInit() {
    this.Detallar();
  }

  Detallar(){
    let id_producto=localStorage.getItem("id_producto");
    this.serviceProducto.getProductoId(+id_producto)
    .subscribe(data=>{
      this.modelProducto=data;
      this.serviceTienda.getTiendaId(this.modelProducto.id_tienda)
      .subscribe(data=>{
        this.modelTienda=data;
      })
    })
  }

  Volver(){
    this.router.navigate(["cliente-producto"]);
  }

  Pedir(producto:Producto):void{
    localStorage.setItem("id_producto", producto.id_producto.toString());
    localStorage.setItem("id_tienda", producto.id_tienda.toString());
    this.router.navigate(["cliente-producto-agregar"]);
  }

}
