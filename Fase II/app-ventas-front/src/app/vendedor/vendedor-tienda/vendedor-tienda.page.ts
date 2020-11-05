import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TiendaService } from '../../services/tienda.service'
import { Tienda } from '../../modelo/Tienda';

@Component({
  selector: 'app-vendedor-tienda',
  templateUrl: './vendedor-tienda.page.html',
  styleUrls: ['./vendedor-tienda.page.scss'],
})
export class VendedorTiendaPage implements OnInit {

  tiendas:Tienda[];
  modelTienda = new Tienda();
  
  constructor(
    private service: TiendaService, 
    private router:Router,
  ) { }

  ngOnInit(){
    let id_usuario=localStorage.getItem("id_usuario");
    this.service.getTiendaUsuario(+id_usuario)
    .subscribe(data=>{
      this.tiendas=data;
    });
  }

  nuevaTienda() {
    this.router.navigate(["vendedor-tienda-agregar"]);
  }

  Borrar(tienda:Tienda){
    this.service.deleteTienda(tienda)
    .subscribe(data=>{
      this.tiendas=this.tiendas.filter(p=>p!==tienda);
      alert("Se eliminó con Exito...!!!");
      this.router.navigate(["vendedor-tienda"]);
    })
  }

  Editar(tienda:Tienda):void{
    localStorage.setItem("id_tienda", tienda.id_tienda.toString());
    this.router.navigate(["vendedor-tienda-editar"]);
  }

  verDetalle(tienda:Tienda):void{
    localStorage.setItem("id_tienda", tienda.id_tienda.toString());
    this.router.navigate(["vendedor-tienda-detalle"]);
  }

  Volver(){
    this.router.navigate(["vendedor-inicio"]);
  }

}
