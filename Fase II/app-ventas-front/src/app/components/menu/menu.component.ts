import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  clienteMenu(){
    this.router.navigate(["cliente-inicio"]);
  }

  vendedorMenu(){
    this.router.navigate(["vendedor-inicio"]);
  }

  repartidorMenu(){
    this.router.navigate(["repartidor-inicio"]);
  }

  ngOnInit() {}

}
