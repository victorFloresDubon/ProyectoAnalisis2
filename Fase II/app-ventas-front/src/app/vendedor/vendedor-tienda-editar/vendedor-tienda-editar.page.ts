import { Component, OnInit } from '@angular/core';
import { Tienda } from '../../modelo/Tienda';
import { TiendaService } from '../../services/tienda.service'
import { Router } from '@angular/router';
import { CategoriaNegocio } from '../../modelo/CategoriaNegocio';
import { CategoriaNegocioService } from '../../services/categoria-negocio.service';

@Component({
  selector: 'app-vendedor-tienda-editar',
  templateUrl: './vendedor-tienda-editar.page.html',
  styleUrls: ['./vendedor-tienda-editar.page.scss'],
})
export class VendedorTiendaEditarPage implements OnInit {

  modelCategoriaNegocio = new CategoriaNegocio();
  modelTienda = new Tienda();
  tiendas:Tienda[];
  categorianegocios:CategoriaNegocio[];

  constructor(
    private router:Router, 
    private serviceTienda: TiendaService,
    private serviceCategoriaNegocio:CategoriaNegocioService
    ) { }

  ngOnInit(): void {
    this.ListarEditar();

    this.serviceCategoriaNegocio.getCategoriaNegocios()
    .subscribe(data=>{
      this.categorianegocios = data;
    })

    this.serviceTienda.getTiendas()
    .subscribe(data=>{
      this.tiendas = data;
    })
  }

  ListarEditar(){
    let id=localStorage.getItem("id_tienda");
    this.serviceTienda.getTiendaId(+id)
    .subscribe(data=>{
      this.modelTienda=data;
    })
  }

  Actualizar(tienda:Tienda){
    this.serviceTienda.updateTienda(tienda)
    .subscribe(data=>{
      this.modelTienda=data;
      alert("Se edito con Exito...!!!");
      this.router.navigate(["vendedor-tienda"]);
    })
  }

  Volver(){
    this.router.navigate(["vendedor-tienda-detalle"]);
  }

}
