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

  usuarios = new Usuario();
  constructor(private router:Router, private service:UsuarioService, private toastController: ToastController,
    private loadingController: LoadingController, private alertController: AlertController) { }

  async ngOnInit(){
    const loading = await this.loadingController.create({
      message: 'Cargando......',
    });
    await loading.present();
      await loading.dismiss();
  }

  registrarse(usuario:Usuario){
    this.service.createUsuario(usuario)
    .subscribe(data=>{
      //alert("Se agrego usuario con Exito...!!!");
      this.router.navigate(["listarUsuarios"]);
    })
  }

}
