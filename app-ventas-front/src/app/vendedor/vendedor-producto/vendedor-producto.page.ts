import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service'
import { Producto } from '../../modelo/Producto';

@Component({
  selector: 'app-vendedor-producto',
  templateUrl: './vendedor-producto.page.html',
  styleUrls: ['./vendedor-producto.page.scss'],
})
export class VendedorProductoPage implements OnInit {

  productos:Producto[];
  modelProducto = new Producto();

  constructor(
    private service: ProductoService, 
    private router:Router, 
  ) { }

  ngOnInit(){
    let id_tienda=localStorage.getItem("id_tienda");
    this.service.getProductoTienda(+id_tienda)
    .subscribe(data=>{
      this.productos=data;
    });
  }

  nuevoProducto() {
    this.router.navigate(["vendedor-producto-agregar"]);
  }

  Borrar(producto:Producto){
    this.service.deleteProducto(producto)
    .subscribe(data=>{
      this.productos=this.productos.filter(p=>p!==producto);
      this.router.navigate(["vendedor-producto"]);
    })
  }

  Editar(producto:Producto):void{
    localStorage.setItem("id", producto.id_producto.toString());
    this.router.navigate(["vendedor-producto-editar"]);
  }

  verDetalle(producto:Producto):void{
    localStorage.setItem("id", producto.id_producto.toString());
    this.router.navigate(["vendedor-producto-detalle"]);
  }

  Volver(){
    this.router.navigate(["vendedor-tienda"]);
  }

}
