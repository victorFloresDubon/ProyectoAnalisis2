import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/Usuario';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuarios:Usuario[];
  modelUsuario = new Usuario();

  constructor(
    private router:Router, 
    private serviceUsuario:UsuarioService, 
    private toastController: ToastController,
    private loadingController: LoadingController, 
    private alertController: AlertController
    ) { }

  ngOnInit(){
    
  }

  Registrarse(usuario:Usuario){
    this.serviceUsuario.createUsuario(usuario)
    .subscribe(data=>{
      this.router.navigate(["home"]);
    })
  }

  Volver(){
    this.router.navigate(["home"]);
  }

}
