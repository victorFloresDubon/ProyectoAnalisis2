import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TiendaService } from '../../services/tienda.service'
import { Tienda } from '../../modelo/Tienda';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-vendedor-tienda',
  templateUrl: './vendedor-tienda.page.html',
  styleUrls: ['./vendedor-tienda.page.scss'],
})
export class VendedorTiendaPage implements OnInit {

  tiendas:Tienda[];
  constructor(
    private service: TiendaService, 
    private router:Router, 
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController,
    ) { }

  async ngOnInit(){
    this.service.getTiendas()
    .subscribe(data=>{
      this.tiendas=data;
    });
  }

  async nuevaTienda() {
    const alert = await this.alertController.create({
      header: 'Nueva Tienda',
      inputs: [
        {
          name: 'id_categoria',
          type: 'number',
          placeholder: 'Categoria'
        },
        {
          name: 'id_usuario',
          type: 'number',
          placeholder: 'Dueño'
        },
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'direccion',
          type: 'text',
          placeholder: 'Dirección'
        },
        {
          name: 'telefono',
          type: 'text',
          placeholder: 'Teléfono'
        },
        {
          name: 'foto',
          type: 'text',
          placeholder: 'Foto'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Crear',
          handler: (data) => {
            this.crearTienda(data.id_tienda, data.id_categoria, data.id_usuario, data.nombre, data.direccion, data.telefono, data.foto);
          }
        }
      ]
    });
    await alert.present();
  }

  crearTienda(id_tienda: number, id_categoria: number, id_usuario: number, nombre: String, direccion: String, telefono: String, foto: String) {
    const tienda = {
      id_tienda,
      id_categoria,
      id_usuario,
      nombre,
      direccion,
      telefono,
      foto
    };
    this.service.createTienda(tienda)
    .subscribe((data) => {
      this.tiendas.unshift(data);
    });
  }

  Borrar(tienda:Tienda){
    this.service.deleteTienda(tienda)
    .subscribe(data=>{
      this.tiendas=this.tiendas.filter(p=>p!==tienda);
      this.router.navigate(["vendedor-tienda"]);
    })
  }

  Editar(tienda:Tienda):void{
    localStorage.setItem("id", tienda.id_tienda.toString());
    this.router.navigate(["vendedor-tienda-editar"]);
  }

  verDetalle(tienda:Tienda):void{
    localStorage.setItem("id", tienda.id_tienda.toString());
    this.router.navigate(["vendedor-tienda-detalle"]);
  }

  async mostrarBorrado(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    await toast.present();
  }



}
