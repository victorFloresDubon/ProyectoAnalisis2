import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service'
import { Producto } from '../../modelo/Producto';

@Component({
  selector: 'app-vendedor-producto-agregar',
  templateUrl: './vendedor-producto-agregar.page.html',
  styleUrls: ['./vendedor-producto-agregar.page.scss'],
})
export class VendedorProductoAgregarPage implements OnInit {

  productos:Producto[];
  modelProducto = new Producto();

  constructor(
    private service: ProductoService, 
    private router:Router, 
  ) { }

  ngOnInit() {
  }

  Guardar(producto:Producto){
    let id_tienda=localStorage.getItem("id_tienda");
    producto.id_tienda = +id_tienda;
    this.service.createProducto(producto)
    .subscribe(data=>{
      alert("Se agrego con Exito...!!!");
      this.router.navigate(["vendedor-producto"]);
    })
  }

  Volver(){
    this.router.navigate(["vendedor-producto"]);
  }

}
