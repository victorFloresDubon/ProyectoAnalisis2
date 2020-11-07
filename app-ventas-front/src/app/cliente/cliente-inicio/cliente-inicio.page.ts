import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../modelo/Usuario';

@Component({
  selector: 'app-cliente-inicio',
  templateUrl: './cliente-inicio.page.html',
  styleUrls: ['./cliente-inicio.page.scss'],
})
export class ClienteInicioPage implements OnInit {
//aqui se crean los vectores o nuevos usuarios segun la necesidad
  usuarios:Usuario[];
  modelUsuario = new Usuario();
//aqui se inyectan los usuarios y diferentes elementos
  constructor(
    private router:Router, 
    private menu: MenuController, 
    private toastController: ToastController,
    private loadingController: LoadingController, 
    private alertController: AlertController,
    private serviceUsuario: UsuarioService
    ) { }
//aquí se cargan los datos de la bd llamandolos desde los servicios
    async ngOnInit(){
      const loading = await this.loadingController.create({
        message: 'Cargando......',
      });
      await loading.present();
      await loading.dismiss();

      let id_usuario=localStorage.getItem("id_usuario");
      this.serviceUsuario.getUsuarioId(+id_usuario)
      .subscribe(data=>{
        this.modelUsuario=data;
      })
    }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  toggleMenu(){
    this.menu.toggle();
  }

}
