import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../../services/tienda.service';
import { Tienda } from '../../modelo/Tienda';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendedor-tienda-detalle',
  templateUrl: './vendedor-tienda-detalle.page.html',
  styleUrls: ['./vendedor-tienda-detalle.page.scss'],
})
export class VendedorTiendaDetallePage implements OnInit {

  tiendasVector:Tienda[];
  tiendas = new Tienda();

  constructor(private router:Router, private service: TiendaService) { }

  ngOnInit(): void {
    this.Detallar();
  }

  Detallar(){
    let id=localStorage.getItem("id");
    this.service.getTiendaId(+id)
    .subscribe(data=>{
      this.tiendas=data;
    })
  }

  Borrar(tienda:Tienda){
    this.service.deleteTienda(tienda)
    .subscribe(data=>{
      //this.tiendasVector=this.tiendasVector.filter(p=>p!==tienda);
      this.router.navigate(["vendedor-tienda"]);
    })
  }

  Editar(tienda:Tienda):void{
    localStorage.setItem("id", tienda.id_tienda.toString());
    this.router.navigate(["vendedor-tienda-editar"]);
  }

}
