import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-vendedor',
  templateUrl: './menu-vendedor.component.html',
  styleUrls: ['./menu-vendedor.component.scss'],
})
export class MenuVendedorComponent implements OnInit {

  constructor(private router:Router) { }
  
  Inicio(){
    this.router.navigate(["vendedor-inicio"]);
  }

  Tiendas(){
    this.router.navigate(["vendedor-tienda"]);
  }

  Productos(){
    this.router.navigate(["vendedor-producto"]);
  }

  Pedidos(){
    this.router.navigate(["vendedor-pedido"]);
  }

  Home(){
    this.router.navigate(["home"]);
  }

  ngOnInit() {}

}
