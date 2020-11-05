import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-repartidor',
  templateUrl: './menu-repartidor.component.html',
  styleUrls: ['./menu-repartidor.component.scss'],
})
export class MenuRepartidorComponent implements OnInit {

  constructor(private router:Router) { }

  Pedidos(){
    this.router.navigate(["repartidor-pedido"]);
  }

  ngOnInit() {}

  Salir(){
    this.router.navigate(["home"]);
  }

}
