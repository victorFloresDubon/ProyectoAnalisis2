import { Component, OnInit } from '@angular/core';
import { Tienda } from '../../modelo/Tienda';
import { TiendaService } from '../../services/tienda.service'
import { Router } from '@angular/router';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-vendedor-tienda-editar',
  templateUrl: './vendedor-tienda-editar.page.html',
  styleUrls: ['./vendedor-tienda-editar.page.scss'],
})
export class VendedorTiendaEditarPage implements OnInit {

  
  tiendas = new Tienda();
  constructor(private router:Router, private service: TiendaService) { }

  ngOnInit(): void {
    this.ListarEditar();
  }

  ListarEditar(){
    let id=localStorage.getItem("id");
    this.service.getTiendaId(+id)
    .subscribe(data=>{
      this.tiendas=data;
    })
  }

  Actualizar(tienda:Tienda){
    this.service.updateTienda(tienda)
    .subscribe(data=>{
      this.tiendas=data;
      this.router.navigate(["vendedor-tienda"]);
    })
  }

  

}
