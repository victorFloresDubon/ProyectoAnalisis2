import { Component, OnInit } from '@angular/core';
import { Producto } from '../../modelo/Producto';
import { ProductoService } from '../../services/producto.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendedor-producto-editar',
  templateUrl: './vendedor-producto-editar.page.html',
  styleUrls: ['./vendedor-producto-editar.page.scss'],
})
export class VendedorProductoEditarPage implements OnInit {

  productos = new Producto();
  constructor(private router:Router, private service: ProductoService) { }

  ngOnInit(): void {
    this.ListarEditar();
  }

  ListarEditar(){
    let id=localStorage.getItem("id");
    this.service.getProductoId(+id)
    .subscribe(data=>{
      this.productos=data;
    })
  }

  Actualizar(producto:Producto){
    this.service.updateProducto(producto)
    .subscribe(data=>{
      this.productos=data;
      this.router.navigate(["vendedor-producto"]);
    })
  }

  Volver(){
    this.router.navigate(["vendedor-producto-detalle"]);
  }

}
