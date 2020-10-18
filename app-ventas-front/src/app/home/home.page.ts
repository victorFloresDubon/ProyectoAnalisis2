import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router, private menu: MenuController, private toastController: ToastController,
    private loadingController: LoadingController, private alertController: AlertController) { }

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

  Ingresar(){
    this.router.navigate(["listarCategorias"]);
  }

  Registrar(){
    this.router.navigate(["registro"]);
  }

}