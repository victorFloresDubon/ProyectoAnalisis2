import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../modelo/Producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendedor-producto-detalle',
  templateUrl: './vendedor-producto-detalle.page.html',
  styleUrls: ['./vendedor-producto-detalle.page.scss'],
})
export class VendedorProductoDetallePage implements OnInit {

  productosVector:Producto[];
  productos = new Producto();

  constructor(private router:Router, private service: ProductoService) { }

  ngOnInit(): void {
    this.Detallar();
  }

  Detallar(){
    let id=localStorage.getItem("id");
    this.service.getProductoId(+id)
    .subscribe(data=>{
      this.productos=data;
    })
  }

  Borrar(producto:Producto){
    this.service.deleteProducto(producto)
    .subscribe(data=>{
      //this.productosVector=this.productosVector.filter(p=>p!==producto);
      this.router.navigate(["vendedor-producto"]);
    })
  }

  Editar(producto:Producto):void{
    localStorage.setItem("id", producto.id_producto.toString());
    this.router.navigate(["vendedor-producto-editar"]);
  }

}
