import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/Usuario';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { MenuController } from '@ionic/angular';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios:Usuario[];
  modelUsuario = new Usuario();

  constructor(
    private router:Router, 
    private menu: MenuController, 
    private toastController: ToastController,
    private loadingController: LoadingController, 
    private serviceUsuario:UsuarioService, 
    private alertController: AlertController
    ) { }

    async ngOnInit(){
      const loading = await this.loadingController.create({
        message: 'Cargando......',
      });
      await loading.present();
        await loading.dismiss();
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

  Ingresar(usuario:Usuario){
    localStorage.setItem("correo", usuario.correo.toString());
    let correo=localStorage.getItem("correo");
    localStorage.setItem("contrasenia", usuario.contrasenia.toString());
    let contrasenia=localStorage.getItem("contrasenia");
    
    this.serviceUsuario.getUsuarioLogin(correo, contrasenia)
    .subscribe(data=>{
      this.modelUsuario = data;
      localStorage.setItem("id_usuario", this.modelUsuario.id_usuario.toString());
      if(this.modelUsuario.id_rol == 1){
        this.router.navigate(["cliente-inicio"]);
      }else if(this.modelUsuario.id_rol == 2){
        this.router.navigate(["vendedor-inicio"]);
      }else if(this.modelUsuario.id_rol == 3){
        this.router.navigate(["repartidor-inicio"]);
      }
    })
  }

  Registrar(){
    this.router.navigate(["registro"]);
  }

}
