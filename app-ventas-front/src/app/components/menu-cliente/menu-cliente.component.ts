import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.scss'],
})
export class MenuClienteComponent implements OnInit {

  constructor(private router:Router) { }
  
  Inicio(){
    this.router.navigate(["cliente-inicio"]);
  }

  Pedidos(){
    this.router.navigate(["cliente-pedido"]);
  }

  Salir(){
    this.router.navigate(["home"]);
  }

  ngOnInit() {}

}
