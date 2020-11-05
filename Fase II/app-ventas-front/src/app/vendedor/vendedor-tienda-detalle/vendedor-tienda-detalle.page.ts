import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../services/tienda.service';
import { Tienda } from '../../modelo/Tienda';
import { Router } from '@angular/router';
import { CategoriaNegocio } from '../../modelo/CategoriaNegocio';
import { CategoriaNegocioService } from '../../services/categoria-negocio.service';

@Component({
  selector: 'app-vendedor-tienda-detalle',
  templateUrl: './vendedor-tienda-detalle.page.html',
  styleUrls: ['./vendedor-tienda-detalle.page.scss'],
})
export class VendedorTiendaDetallePage implements OnInit {

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
    this.Detallar();
  }

  Detallar(){
    let id=localStorage.getItem("id_tienda");
    this.serviceTienda.getTiendaId(+id)
    .subscribe(data=>{
      this.modelTienda=data;
      this.serviceCategoriaNegocio.getCategoriaNegocioId(this.modelTienda.id_categoria)
      .subscribe(data=>{
        this.modelCategoriaNegocio=data;
      })
    })
  }

  Borrar(tienda:Tienda){
    this.serviceTienda.deleteTienda(tienda)
    .subscribe(data=>{
      this.router.navigate(["vendedor-tienda"]);
    })
  }

  Editar(tienda:Tienda):void{
    localStorage.setItem("id_tienda", tienda.id_tienda.toString());
    this.router.navigate(["vendedor-tienda-editar"]);
  }

  Volver(){
    this.router.navigate(["vendedor-tienda"]);
  }

  Producto(tienda:Tienda):void{
    localStorage.setItem("id_tienda", tienda.id_tienda.toString());
    this.router.navigate(["vendedor-producto"]);
  }

}
