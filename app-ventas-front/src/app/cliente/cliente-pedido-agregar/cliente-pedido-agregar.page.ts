import { Component, OnInit } from '@angular/core';
import { CategoriaNegocio } from '../../modelo/CategoriaNegocio';
import { CategoriaNegocioService } from '../../services/categoria-negocio.service';
import { Router } from '@angular/router';
import { Tienda } from '../../modelo/Tienda';
import { TiendaService } from '../../services/tienda.service'

@Component({
  selector: 'app-cliente-pedido-agregar',
  templateUrl: './cliente-pedido-agregar.page.html',
  styleUrls: ['./cliente-pedido-agregar.page.scss'],
})
export class ClientePedidoAgregarPage implements OnInit {

  modelCategoriaNegocio = new CategoriaNegocio();
  categorianegocios:CategoriaNegocio[];
  modelTienda = new Tienda();
  tiendas:Tienda[];

  constructor(
    private router:Router,
    private serviceTienda: TiendaService,
    private serviceCategoriaNegocio:CategoriaNegocioService
  ) { }

  ngOnInit() {
    this.serviceCategoriaNegocio.getCategoriaNegocios()
    .subscribe(data=>{
      this.categorianegocios = data;
    })

    this.serviceTienda.getTiendas()
    .subscribe(data=>{
      this.tiendas = data;
    })
  }

  Buscar(tienda:Tienda){
    localStorage.setItem("id_categoria", tienda.id_categoria.toString());
    let id_categoria=localStorage.getItem("id_categoria");
    this.serviceTienda.getTiendaCategoria(+id_categoria)
    .subscribe(data=>{
      this.tiendas=data;
    })
  }

  Volver(){
    this.router.navigate(["cliente-pedido"]);
  }

  verProductos(tienda:Tienda):void{
    localStorage.setItem("id_tienda", tienda.id_tienda.toString());
    this.router.navigate(["cliente-producto"]);
  }

}
