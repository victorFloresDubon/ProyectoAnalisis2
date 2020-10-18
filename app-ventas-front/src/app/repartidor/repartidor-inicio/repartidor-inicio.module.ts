import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuRepartidorComponent } from '../../components/menu-repartidor/menu-repartidor.component';
import { IonicModule } from '@ionic/angular';

import { RepartidorInicioPageRoutingModule } from './repartidor-inicio-routing.module';

import { RepartidorInicioPage } from './repartidor-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepartidorInicioPageRoutingModule
  ],
  exports: [
    MenuRepartidorComponent
  ],
  declarations: [RepartidorInicioPage,MenuRepartidorComponent]
})
export class RepartidorInicioPageModule {}
