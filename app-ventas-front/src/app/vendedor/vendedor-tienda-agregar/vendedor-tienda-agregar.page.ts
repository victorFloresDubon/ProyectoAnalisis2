import { Component, OnInit } from '@angular/core';
import { Tienda } from '../../modelo/Tienda';
import { TiendaService } from '../../services/tienda.service';
import { Router } from '@angular/router';
import { CategoriaNegocio } from '../../modelo/CategoriaNegocio';
import { CategoriaNegocioService } from '../../services/categoria-negocio.service';

@Component({
  selector: 'app-vendedor-tienda-agregar',
  templateUrl: './vendedor-tienda-agregar.page.html',
  styleUrls: ['./vendedor-tienda-agregar.page.scss'],
})
export class VendedorTiendaAgregarPage implements OnInit {

  modelCategoriaNegocio = new CategoriaNegocio();
  modelTienda = new Tienda();
  tiendas:Tienda[];
  categorianegocios:CategoriaNegocio[];

  constructor(
    private router:Router, 
    private service:TiendaService,
    private serviceCategoriaNegocio:CategoriaNegocioService,
  ) { }

  ngOnInit() {
    this.serviceCategoriaNegocio.getCategoriaNegocios()
    .subscribe(data=>{
      this.categorianegocios = data;
    })
  }

  Volver(){
    this.router.navigate(["vendedor-inicio"]);
  }

  Guardar(tienda:Tienda){
    let id_usuario=localStorage.getItem("id_usuario");
    tienda.id_usuario = +id_usuario;
    this.service.createTienda(tienda)
    .subscribe(data=>{
      alert("Se agrego con Exito...!!!");
      this.router.navigate(["vendedor-tienda"]);
    })
  }

}
