import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service'
import { Producto } from '../../modelo/Producto';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-vendedor-producto',
  templateUrl: './vendedor-producto.page.html',
  styleUrls: ['./vendedor-producto.page.scss'],
})
export class VendedorProductoPage implements OnInit {

  productos:Producto[];
  constructor(
    private service: ProductoService, 
    private router:Router, 
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController,
    ) { }

  async ngOnInit(){
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    });
  }

  async nuevoProducto() {
    const alert = await this.alertController.create({
      header: 'Nuevo Producto',
      inputs: [
        {
          name: 'id_tienda',
          type: 'number',
          placeholder: 'Tienda'
        },
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'precio',
          type: 'number',
          placeholder: 'Precio'
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
            this.crearProducto(data.id_producto, data.id_tienda, data.nombre, data.precio, data.foto);
          }
        }
      ]
    });
    await alert.present();
  }

  crearProducto(id_producto: number, id_tienda: number, nombre: String, precio: number, foto: String) {
    const producto = {
      id_producto,
      id_tienda,
      nombre,
      precio,
      foto
    };
    this.service.createProducto(producto)
    .subscribe((data) => {
      this.productos.unshift(data);
    });
  }

  Borrar(producto:Producto){
    this.service.deleteProducto(producto)
    .subscribe(data=>{
      this.productos=this.productos.filter(p=>p!==producto);
      this.router.navigate(["vendedor-producto"]);
    })
  }

  Editar(producto:Producto):void{
    localStorage.setItem("id", producto.id_producto.toString());
    this.router.navigate(["vendedor-producto-editar"]);
  }

  verDetalle(producto:Producto):void{
    localStorage.setItem("id", producto.id_producto.toString());
    this.router.navigate(["vendedor-producto-detalle"]);
  }

  async mostrarBorrado(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    await toast.present();
  }

}
