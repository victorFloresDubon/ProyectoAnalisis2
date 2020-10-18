import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-repartidor',
  templateUrl: './menu-repartidor.component.html',
  styleUrls: ['./menu-repartidor.component.scss'],
})
export class MenuRepartidorComponent implements OnInit {

  constructor(private router:Router) { }
  
  Inicio(){
    this.router.navigate(["repartidor-inicio"]);
  }

  Pedidos(){
    this.router.navigate(["repartidor-pedido"]);
  }

  ngOnInit() {}

  Home(){
    this.router.navigate(["home"]);
  }

}
